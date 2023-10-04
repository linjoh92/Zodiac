import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ZodiacSigns from '../ZodiacInfo/zodiacSigns'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface DropDownProps {
  value: string | null
  onChange: (zodiacName: string) => void
}

export default function DropDown({ value, onChange }: DropDownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`uppercase tracking-wider w-40 inline-flex items-center justify-between gap-x-1 rounded-3xl px-4 py-2 text-sm font-bold text-baseText shadow-sm ring-2 ring-accentText hover:bg-accentText/30 
        ${value ? 'bg-accentText/60 text-white' : 'bg-white/20'}`}
        >
          {value || 'Select zodiac'}
          <ChevronDownIcon
            className={`h-5 w-5 ${value ? ' text-white' : 'text-baseText'}`}
          />
        </Menu.Button>
      </div>
      <Transition as={Fragment}>
        <Menu.Items className="mt-2 w-40 rounded-xl bg-white shadow-lg ring-1 ring-baseText ring-opacity-5 focus:outline-none">
          <div className="py-2">
            {ZodiacSigns.map((zodiac) => {
              return (
                <Menu.Item key={zodiac.name}>
                  {({ active }) => (
                    <option
                      value={zodiac.name}
                      className={classNames(
                        active
                          ? 'uppercase bg-accentText text-white'
                          : 'text-accentText uppercase',
                        'px-4 py-2 text-sm cursor-pointer font-semibold',
                      )}
                      onClick={() => {
                        onChange(zodiac.name)
                      }}
                    >
                      {zodiac.name}
                    </option>
                  )}
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
