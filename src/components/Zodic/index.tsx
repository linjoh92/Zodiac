import { useEffect, useState } from 'react'
import DateRanges from '../ZodiacInfo/dateRanges'
import ZodiacSigns from '../ZodiacInfo/zodiacSigns'
import ZodiacImg from '../ZodiacImg'
import Heading from '../Heading'

interface ZodiacData {
  name: string
  about: string
  compatibility: string
  date_range: string
  element: string
  love: string
  strengths: string
  weaknesses: string
  career: string
  nature: string
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

      const url = `https://horoscope-astrology.p.rapidapi.com/sign?s=${selectedZodiac}`
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
        setZodiacData({
          name: '',
          about: '',
          date_range: '',
          compatibility: '',
          element: '',
          love: '',
          strengths: '',
          weaknesses: '',
          nature: '',
          career: '',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedZodiac])

  const handleZodiacButtonClick = (zodiac: string) => {
    if (selectedZodiac === zodiac) {
      setSelectedZodiac('')
      setZodiacData(null)
    } else {
      setSelectedZodiac(zodiac)
    }
  }

  return (
    <div className="flex flex-col justify-start w-full pt-10 p-4 font-titillium font-semibold text-black items-center">
      <Heading
        rubrik="Select a zodiac sign"
        subtitle="Select a zodiac sign and learn more"
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
      <div className="mt-12 flex justify-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : zodiacData ? (
          <div>
            {zodiacData.compatibility === 'Error fetching data' ? (
              <p>{zodiacData.compatibility}</p>
            ) : (
              <div className="flex flex-col justify-center items-center max-w-3xl">
                <ZodiacImg selectedZodiac={selectedZodiac} />
                <h2 className="mt-5 text-5xl text-accentText font-extrabold tracking-widest uppercase text-center">
                  {zodiacData.name}
                </h2>
                <h2 className="text-center text-base text-accentText font-bold">
                  {zodiacData.date_range}
                </h2>
                <div className="grid grid-cols-2 border-accentText border-4 my-10 rounded-2xl">
                  <div className="factBox rounded-tl-xl">
                    <h3 className="font-bold">Strengths:</h3>{' '}
                    {zodiacData.strengths}
                  </div>
                  <div className="factBox rounded-tr-xl">
                    <h3 className="font-bold">Weaknesses:</h3>{' '}
                    {zodiacData.weaknesses}
                  </div>
                  <div className="factBox rounded-bl-xl">
                    <h3 className="font-bold">Compatibility:</h3>{' '}
                    {zodiacData.compatibility}
                  </div>
                  <div className="factBox rounded-br-xl">
                    <h3 className="font-bold">Element:</h3> {zodiacData.element}
                  </div>
                </div>
                <div className="px-2 md:p-0">
                  <div className="mb-2 font-medium">
                    <h3 className="font-bold">About:</h3> {zodiacData.about}
                  </div>
                  <div className="mb-2 font-medium">
                    <h3 className="font-bold">Love:</h3> {zodiacData.love}
                  </div>
                  <div className="mb-2 font-medium">
                    <h3 className="font-bold">Career:</h3> {zodiacData.career}
                  </div>
                  <div className="mb-2 font-medium">
                    <h3 className="font-bold">Nature:</h3> {zodiacData.nature}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}
