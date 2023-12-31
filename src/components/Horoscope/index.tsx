import { useEffect, useState } from 'react'
import DateRanges from '../ZodiacInfo/dateRanges'
import ZodiacSigns from '../ZodiacInfo/zodiacSigns'
import ZodiacImg from '../ZodiacImg'
import Heading from '../Heading'

interface ZodiacData {
  week: string
  horoscope: string
}

export default function Zodiac() {
  const [selectedZodiac, setSelectedZodiac] = useState<string>('')
  const [zodiacData, setZodiacData] = useState<ZodiacData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedZodiac) {
        return
      }

      setIsLoading(true)

      const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=week&sunsign=${selectedZodiac}`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '6e368ea279msh244bc524d4e02d7p17a766jsnab5098d9931d',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result: ZodiacData = await response.json()

        setZodiacData(result)
      } catch (error) {
        console.error(error)
        setZodiacData({ week: '', horoscope: '' })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedZodiac])

  const handleZodiacButtonClick = (zodiac: string) => {
    console.log(`Button clicked: ${zodiac}`)
    setSelectedZodiac(zodiac)
  }

  return (
    <div className="flex flex-col justify-start w-full pt-10 p-4 font-titillium font-semibold text-black items-center">
      <Heading
        rubrik="Weekly horoscope"
        subtitle="Select your zodiac sign to get your horoscoope of the week"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
        {ZodiacSigns.map((zodiac) => {
          const dateRange = DateRanges[zodiac.name]
          return (
            <button
              key={zodiac.name}
              className={`uppercase font-bold tracking-widest text-sm border-2 border-accentText px-4 py-2 rounded-3xl sm:hover:bg-accentText/40 sm:hover:text-white ${
                selectedZodiac === zodiac.name
                  ? ' text-white bg-accentText'
                  : 'text-baseText bg-white/20'
              }`}
              onClick={() => handleZodiacButtonClick(zodiac.name)}
            >
              {zodiac.name} <p className="text-xs">{dateRange}</p>
            </button>
          )
        })}
      </div>
      <div className="mt-12 flex justify-center px-2 md:p-0'">
        {isLoading ? (
          <p>Loading...</p>
        ) : zodiacData ? (
          <div>
            {zodiacData.horoscope === 'Error fetching data' ? (
              <p>{zodiacData.horoscope}</p>
            ) : (
              <div className="flex flex-col justify-center items-center max-w-3xl">
                <ZodiacImg selectedZodiac={selectedZodiac} />
                <h2 className="mt-5 text-5xl text-accentText font-extrabold tracking-widest uppercase text-center">
                  {selectedZodiac}
                </h2>
                <h2 className="text-center text-base text-accentText font-bold mb-6">
                  Horoscope : {zodiacData.week}
                </h2>
                <div className="mb-2 font-medium">{zodiacData.horoscope}</div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}
