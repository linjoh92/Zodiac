import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className="flex text-accentText justify-center gap-5 font-titillium text-base tracking-wider">
      <NavLink
        to="/zodiac"
        className={`flex justify-center  hover:text-accentText/50 ${
          location.pathname === '/zodiac' ? 'font-extrabold' : 'font-semibold'
        }`}
      >
        Zodiac
      </NavLink>
      <NavLink
        to="/compatibility"
        className={`flex justify-center hover:text-accentText/50 ${
          location.pathname === '/compatibility'
            ? 'font-extrabold'
            : 'font-semibold'
        }`}
      >
        Compatibility
      </NavLink>
      <NavLink
        to="/horoscope"
        className={`flex justify-center  hover:text-accentText/50 ${
          location.pathname === '/horoscope'
            ? 'font-extrabold'
            : 'font-semibold'
        }`}
      >
        Horoscope
      </NavLink>
    </div>
  )
}
