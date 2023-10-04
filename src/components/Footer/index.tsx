import Logo from '../../components/Logo'

type FooterProps = {
  title: string
  subtitle: string
}

export default function Footer({ title, subtitle }: FooterProps) {
  return (
    <div className="text-accentText text-center w-full p-5 flex flex-col items-center gap-2 font-titillium md:mt-64 mt-36 mb-6">
      <Logo className="fill-accentText w-8" />
      <p className="text-xs font-bold">{title}</p>
      <p className="text-xs max-w-sm">{subtitle}</p>
    </div>
  )
}
