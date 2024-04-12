export default function Extras({weatherData}) {
    return (
      <div className="py-5 pr-16 lg:items-right lg:justify-between w-auto h-auto">
        <div className="gap-3 my-3">
           <h1 className="text-2xl text-white text-right">Wind Speed: {weatherData?.wind?.speed} mph</h1>
        </div>
        <div className="gap-3 my-3">
           <h1 className="text-2xl text-white text-right">Humidity: {weatherData?.main?.humidity} %</h1>
        </div>
        <div className="gap-3 my-3">
           <h1 className="text-2xl text-white text-right">Atmospheric Pressure: {weatherData?.main?.pressure} mm</h1>
        </div>
      </div>
    )
}