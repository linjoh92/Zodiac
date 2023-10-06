import { NavLink } from 'react-router-dom'
import Heading from '../components/Heading'

const FilenotFound = () => {
  return (
    <div className="flex flex-col m-h-fit flex-1 w-full justify-center items-center">
      <Heading rubrik="404" subtitle="File not Found" />
      <NavLink to="/">
        <button
          type="button"
          className="inline-block rounded-2xl border-2 border-accentText bg-accentText/70 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white transition-transform transform hover:scale-105 shadow-md hover:shadow-lg hover:bg-accentText"
        >
          Back to Zodiac
        </button>
      </NavLink>
    </div>
  )
}

export default FilenotFound
