type HeadingProps = {
  rubrik: string
  subtitle: string
}

export default function Heading({ rubrik, subtitle }: HeadingProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl md:mt-16 font-extrabold tracking-widest uppercase">
        {rubrik}
      </h1>
      <h2 className="mb-10 mt-2 font-semibold">{subtitle}</h2>
    </div>
  )
}
