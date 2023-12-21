"use client"
import useWeather from "@/hooks/use-weather"
import useCoords from "@/hooks/use-coords"
//import useLocation from "@/hooks/use-location"
import Image from "next/image"

export default function WeatherFront() {
  const coords = useCoords()
  //const location = useLocation(coords)
  const { data, loading } = useWeather({endpoint: "weather", lat: coords?.latitude, lon: coords?.longitude, coords, lang: "da" })

  return (
    <article className="flex flex-col items-center">
      {loading ? <p>loading</p> : 
      <>
        <p className="text-3xl text-white">{data?.name}</p>
        <p className="text-[5em] text-white">{Math.round(data?.main.temp - 272.15)}&deg;</p>
        {/* <Image src={`/icons/${data?.weather[0].icon}.svg`} width={100} height={100} alt="" /> */}
        <p className="text-xl text-gray-300 capitalize">{data?.weather[0].description}</p>
        <p className="text-xl text-white">H: {Math.round(data?.main.temp_max - 272.15)}&deg; L: {Math.round(data?.main.temp_min - 272.15)}&deg;</p>
        <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`} alt="" />
      </>}
    </article>
  )
}
