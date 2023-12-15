




export default function Card({ movies, movieIMAGE,movietitle,moviePath }) {




if(movies.length){
    return (

       
        <>
        <h1 className="text-3xl text-center my-2 font-bold text-white ">Movies similar to <span className="text-red-400">{movietitle}</span> are :</h1>
            <div className=" flex sm:flex-row flex-col  sm:flex-wrap  justify-center ">
                {

                    movies.map((movie, index) => (


                        <div key={index} class="max-w-sm p-6 mx-[5%] my-5 w-80  sm:w-96 h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5  class="mb-5 text-center text-2xl h-12 font-bold tracking-tight text-gray-900 dark:text-white">{movie}</h5>
                            </a>
                            <img className="my-4 mb-6 block mx-auto w-64 h-64" src={movieIMAGE[index]} />
                            <a href={moviePath[index]} target="_blank" rel="no-referrer" class="flex mx-auto w-fit justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                               View Details!
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>

                    ))

                }
            </div>
        </>
    )}

}
















