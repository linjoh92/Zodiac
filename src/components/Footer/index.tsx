import Logo from '../../components/Logo'

export default function Footer() {
  return (
    <div className="text-accentText text-center w-full p-5 flex flex-col items-center gap-2 font-titillium md:mt-64 mt-36 mb-6">
      <Logo className="fill-accentText w-8" />
      <p className="text-xs font-bold flex items-center gap-1">
        Copywrite <span className="text-base">©</span> 2023 Linn J
      </p>
      <p className="text-xs max-w-sm">
        Your ultimate destination for delving deep into the mysteries of the
        zodiac and exploring the fascinating world of astrological
        compatibility!
      </p>
    </div>
  )
}
