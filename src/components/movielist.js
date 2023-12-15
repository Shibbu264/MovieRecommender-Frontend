// components/MovieList.js
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { SearchIcon } from "@heroicons/react/solid";
const MovieList = ({ csvFile, fetchRecommendations }) => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState("");
    const[movietitle,settitle]=useState("")
    const [selectedMovie, setSelectedMovie] = useState(null);
    const[ab,setab]=useState(false)
const[filterstate,showfilter]=useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(csvFile);
                const data = await response.text();
                const parsedData = Papa.parse(data, { header: true });
               
                return parsedData.data
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData().then((movies)=>( setMovies(movies))
        );
    }, [csvFile]);

    var filteredMovies=[]

     filteredMovies = movies.length > 0
  ? Object.keys(movies).reduce((filtered, index) => {
      const movie = movies[index];
   
      if (index<4800  && movie.title.toLowerCase().startsWith(filter.toLowerCase())) {
        filtered.push({ index, title: movie.title });
      }
    
      return filtered;
    }, [])
  : [];




    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    const handleFetchRecommendations = () => {
       
            fetchRecommendations(filter).then(()=>{
            settitle(filter)
            setab(true)
            setFilter("")})
       
    };

    return (
        <div className="flex-row justify-center">
      
      <div className="flex justify-center items-center">  <input
          type="text"
          placeholder="Filter movies by title..."
          value={filter}
          onChange={(e) =>{
            setab(false)
            if(e.target.value!=" "){showfilter(true)}
            setFilter(e.target.value)}}
          className="p-2 border text-black font-semibold border-gray-300 rounded-l-md mb-4"
        />
        <button
          onClick={handleFetchRecommendations}
          className="p-3 mb-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          <SearchIcon className="h-5 w-5 " />
        </button>
        </div>
        <div className="flex justify-center">
        <ul className=" flex-col relative z-100 bg-black ">
          {filterstate?filteredMovies.slice(0, 10).map((movie) => (
            <li
              key={movie.title}
              className={`mb-2 cursor-pointer ${
                selectedMovie && selectedMovie.title === movie.title ? "text-blue-500  font-bold" : "hover:bg-blue-500 p-1 rounded-xl"
              }`}
              onClick={() => {handleSelectMovie(movie)
            setFilter(movie.title)
            showfilter(false)
            }}
            >
              {movie.title}
            </li>
          )):
          
          <></>
          }
        </ul>



        </div>
      </div>
    );
};

export default MovieList;
