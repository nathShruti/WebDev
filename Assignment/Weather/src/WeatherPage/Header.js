import cloudy from "../assets/img/cloudy-icon.png";
export default function WeatherHead() {
    return (
      <nav className="bg-black py-1 border-b-2">
      <div className="lg:flex mx-16 my-5 lg:items-center lg:justify-start">
        <img src={cloudy} width={50} height={50} alt="bleh"></img>
          <h2 className="text-9xl font-bold text-white text-left sm:truncate sm:text-3xl sm:tracking-tight lg:mx-3">
            Weather
          </h2>
      </div>
      </nav>
    )
  }