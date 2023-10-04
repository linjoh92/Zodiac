import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center p-4 pt-8">
      <NavLink to="/">
        <Logo className="fill-accentText w-10 md:w-12  hover:fill-accentText/50" />
      </NavLink>
      <Navbar />
    </div>
  )
}
