import ZodiacSigns from "../ZodiacInfo/zodiacSigns";

type ZodiacImgProps = {
    selectedZodiac: string
}

export default function ZodiacImg({ selectedZodiac }: ZodiacImgProps) {

  return (
    <div className='flex items-center justify-center md:w-56 md:h-56 w-44 h-44 p-6 border-8 rounded-full border-accentText bg-accentText'>
      <img
        src={ZodiacSigns.find((zodiac) => zodiac.name === selectedZodiac)?.image}
        alt="Zodiac image"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </div>
  );
}

