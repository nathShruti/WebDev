import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function CityDeets({weatherData, countryName}) {
  

    return (
      <div className="py-12 pl-16 lg:items-left lg:justify-between w-full h-full">
          <h3 className="text-7xl font-bold text-white py-3 text-left sm:truncate sm:tracking-tight">
            {weatherData.name}
          </h3>
          <h3 className="text-3xl text-white text-left sm:truncate py-3 sm:text-3xl sm:tracking-tight">
            {countryName}
          </h3>
          <div className="text-xl text-white text-left lat-long row-span-1 gap-3 my-3">
            <div>Lat: {weatherData?.coord?.lat}°</div>
            <div>Long: {weatherData?.coord?.lon}°</div>
          </div>
      </div>
    )
}