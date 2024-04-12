import { useEffect, useState } from "react"

export default function Forecast() {
  

    return (
      <div className="p-5 text-4xl items-center text-white justify-stretch w-auto h-auto">
        <div className="items-center gap-3 my-3">
           <h2 className="tracking-wide text-bold mx-10">DAILY FORECAST</h2>
        </div>
        <hr className="mx-10 my-2"/>
        <div className="flex flex-row items-center justify-between text-white mx-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              Monday
            </p>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" />
            <p className="font-medium">22°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              Monday
            </p>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" />
            <p className="font-medium">22°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              Monday
            </p>
            <img src="https://openweathermap.org/img/wn/50d@2x.png" />
            <p className="font-medium">22°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              Monday
            </p>
            <img src="https://openweathermap.org/img/wn/02d@2x.png" />
            <p className="font-medium">22°C</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-normal">
              Monday
            </p>
            <img src="https://openweathermap.org/img/wn/13d@2x.png" />
            <p className="font-medium">22°C</p>
          </div>
        </div>
        
      </div>
    )
}