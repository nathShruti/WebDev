export default function CityTemp({weatherData}) {
    return (
      <div className="py-5 pl-16 lg:items-left lg:justify-between w-auto h-auto">
          <p className="text-2xl text-white text-left sm:truncate my-3 sm:tracking-tight">
            Real Temperature: {weatherData?.main?.temp} °C
          </p>
          <p className="text-2xl text-white text-left sm:truncate my-3 sm:tracking-tight">
            Feels Like : {weatherData?.main?.feels_like} °C
          </p>
          <p className="text-2xl text-white text-left sm:truncate my-3 sm:tracking-tight">
            Max / Min : {weatherData?.main?.temp_max} °C / {weatherData?.main?.temp_min} °C
          </p>
      </div>
    )
}