// import { useEffect, useState } from "react";
// import axios from 'axios';

export default function ImgDesc({weatherData}) {
  // console.log(weatherData);
    return (
      <div className="pr-16 py-12 lg:items-right text-white lg:justify-stretch w-auto h-auto">
        <div>
        <img src={weatherData?.weather?.length && `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`} ></img>
        </div>
        <div className=" text-center gap-3 my-3">
           <h2 className="font-semibold text-xl tracking-wide">{weatherData?.weather?.length && weatherData?.weather[0]?.description}</h2>
        </div>
      </div>
    )
}