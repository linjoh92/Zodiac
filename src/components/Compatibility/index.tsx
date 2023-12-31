import { useEffect, useState } from 'react'
import DropDown from '../DropDown'
import ZodiacImg from '../ZodiacImg'
import { HeartIcon } from '@heroicons/react/24/solid'
import Heading from '../Heading'

interface CompatibilityData {
  header: string
  text: string
}

export default function Compatibility() {
  const [selectedZodiacOne, setSelectedZodiacOne] = useState<string>('')
  const [selectedZodiacTwo, setSelectedZodiacTwo] = useState<string>('')
  const [compatibilityData, setCompatibilityData] = useState<
    CompatibilityData[]
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = async () => {
    if (!selectedZodiacOne || !selectedZodiacTwo) {
      return
    }

    setIsLoading(true)

    const url = `https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${selectedZodiacOne}&sign2=${selectedZodiacTwo}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6e368ea279msh244bc524d4e02d7p17a766jsnab5098d9931d',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
      },
    }

    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result: CompatibilityData[] = await response.json()

      setCompatibilityData(result)
    } catch (error) {
      console.error(error)
      setCompatibilityData([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedZodiacOne, selectedZodiacTwo])

  return (
    <div className="flex flex-col justify-start w-full pt-10 p-4 font-titillium items-center">
      <Heading
        rubrik="Let's try your compatibility"
        subtitle="Choose two zodiac"
      />
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault()
          fetchData()
        }}
      >
        <div className="pb-8 flex gap-5 md:gap-24">
          <DropDown value={selectedZodiacOne} onChange={setSelectedZodiacOne} />
          <DropDown value={selectedZodiacTwo} onChange={setSelectedZodiacTwo} />
        </div>
      </form>
      <div className="flex gap-5 max-w-3xl">
        {isLoading ? (
          <p>Loading...</p>
        ) : compatibilityData.length > 0 ? (
          <div>
            <div className="flex items-center justify-center">
              <ZodiacImg selectedZodiac={selectedZodiacOne} />
              <HeartIcon className="w-8 md:m-4 text-accentText" />
              <ZodiacImg selectedZodiac={selectedZodiacTwo} />
            </div>
            <h2 className="mt-5 text-5xl text-accentText font-extrabold tracking-widest uppercase text-center">
              Match
            </h2>
            <h2 className="text-center capitalize text-base text-accentText font-bold mb-6">
              {selectedZodiacOne} & {selectedZodiacTwo}
            </h2>
            {compatibilityData.map((data, index) => (
              <div key={index} className="flex flex-col mb-10 px-2 md:p-0">
                <h4 className="font-bold">{data.header}</h4>
                <p className="font-medium">{data.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  )
}
