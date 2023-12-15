// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {

  try {
  const response = await axios.post('http://127.0.0.1:5000/recommend', req.body);
  const data = await response.data;
  console.log(data.result2[0])

 



  res.status(200).json(data)


  }
  catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
