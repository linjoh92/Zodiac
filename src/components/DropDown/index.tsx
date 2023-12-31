import { useState } from 'react'
import ZodiacSigns from '../ZodiacInfo/zodiacSigns'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type DropDownProps = {
  value: string | null
  onChange: (zodiacName: string) => void
}

function DropDown({ value, onChange }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (zodiacName: string) => {
    onChange(zodiacName)
    toggleDropdown()
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`uppercase tracking-wider w-40 inline-flex items-center justify-between gap-x-1 rounded-3xl px-4 py-2 text-sm font-bold text-baseText shadow-sm ring-2 ring-accentText hover:bg-accentText/30 
        ${value ? 'bg-accentText/60 text-white' : 'bg-white/20'}`}
      >
        {value || 'Select zodiac'}
        <ChevronDownIcon
          className={`h-5 w-5 ${value ? ' text-white' : 'text-baseText'}`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 w-40 h-fit absolute rounded-xl bg-white shadow-lg ring-1 ring-baseText ring-opacity-5 focus:outline-none">
          <div className="py-2">
            {ZodiacSigns.map((zodiac) => (
              <div
                key={zodiac.name}
                className={`${
                  value === zodiac.name
                    ? 'uppercase bg-accentText text-white'
                    : 'text-accentText uppercase'
                } px-4 py-2 text-sm cursor-pointer font-semibold`}
                onClick={() => handleOptionClick(zodiac.name)}
              >
                {zodiac.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDown
