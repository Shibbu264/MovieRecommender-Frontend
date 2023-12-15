// pages/index.js
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from  'react-loader-spinner'
import React from "react";
import MovieList from "@/components/movielist";
import axios from "axios";
import Card from "@/components/card";
import CONNECTWITHME from "@/components/mycontact";

const MovieRecommender = () => {
 
  const[recommendmovies,setrecommend]=useState([])
  const[loaderstate,setloader]=useState(false)
  const[movieIMAGE,setID]=useState([])
  const[moviePath,setPath]=useState([])
  const [movietitle,setmovietitle]=useState("")
    const fetchRecommendations = async (movieTitle) => {
        try {
          setmovietitle(movieTitle)
          setloader(true)
          const requestData = {
            movie: movieTitle,
           
          };
         
          const response = await axios.post('/api/getmovielist', requestData);
          const data = await response.data;
         console.log(data.result)
          setrecommend(data.result)
          setID(data.result2)
          setPath(data.result3)
          setloader(false)
        } catch (error) {

        toast.error("Error fetching movies",error)
         
          setloader(false)

        }
      };

  return (
    <>
    <ToastContainer />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold flex justify-center mb-4">Movie Recommender</h1>
      <MovieList csvFile="/movies.csv" fetchRecommendations={fetchRecommendations} />
      {loaderstate?<div className="flex justify-center my-[10%]"> <TailSpin 
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> </div>:<Card movies={recommendmovies} movietitle={movietitle} movieIMAGE={movieIMAGE} moviePath={moviePath}  />}
      <CONNECTWITHME/>
    </div>
    </>
  );
};

export default MovieRecommender;
