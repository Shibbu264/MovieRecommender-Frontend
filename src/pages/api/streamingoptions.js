import axios from "axios";

export default async function handler(req, res) {
const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/title',
  params: {
    title: req.body.movie,
    country: 'IN',
    show_type: 'movie',
    output_language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '1aaa6f1875msh852c853feb169a0p1c7428jsn41bcd205dcb7',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

try {
    const movie ={movie:req.body.movie}
	const response = await axios.request(options);
    const movies=response.data.result
    const filteredMovie= movies.filter(movie => movie.title ===req.body.movie );
    const ab=filteredMovie[0].streamingInfo
    ab.movie=movie
console.log(ab)

    res.status(200).json(filteredMovie[0].streamingInfo)
} catch (error) {
    console.log(error)
	res.status(500).send(error);
}


}