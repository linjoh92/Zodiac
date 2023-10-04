import { NavLink} from "react-router-dom";

export default function HomeContent() {

  return (
     <div className="m-h-fit flex flex-1 max-w-3xl">
       <div className="p-10 h-full felx justify-center text-center font-titillium ">
          <h1 className="text-3xl md:text-5xl md:mt-16 font-extrabold tracking-widest uppercase">Welcome to Zodiac!</h1>
          <h2 className="font-semibold m-5 mt-2"> Your ultimate destination for delving deep into the mysteries of the zodiac and exploring the fascinating world of astrological compatibility! </h2>
          <div className="flex flex-col gap-12 py-8">
             <div className="flex flex-col gap-4 items-center">
               <NavLink className="font-bold text-accentText uppercase tracking-widest text-sm border-2 border-accentText px-4 py-2 rounded-3xl bg-accentText/25 w-40 hover:bg-accentText hover:text-white" to="/zodiac">Zodiac</NavLink>      
               <p>Dive into the rich tapestry of the zodiac with detailed profiles of each sign. Explore your own sign, or learn more about the characteristics, strengths, and weaknesses of other signs in the zodiac.</p>
             </div>
             <div className="flex flex-col gap-4 items-center">
               <NavLink className="font-bold text-accentText uppercase tracking-widest text-sm border-2 border-accentText px-4 py-2 rounded-3xl bg-accentText/25 w-40 hover:bg-accentText hover:text-white" to="/compatibility">Compatibility</NavLink>
               <p>Wondering if you and your partner are cosmically aligned? Use our compatibility charts to explore the dynamics between different zodiac signs. Discover your compatibility with friends, family, and potential love interests.</p>
             </div>
             <div className="flex flex-col gap-4 items-center">
               <NavLink className="font-bold text-accentText uppercase tracking-widest text-sm border-2 border-accentText px-4 py-2 rounded-3xl bg-accentText/25 w-40 hover:bg-accentText hover:text-white" to="/horoscope">Horoscope</NavLink>
               <p>Get a glimpse of what the stars have in store for you each week. Our weekly horoscopes provide guidance and insights tailored to your zodiac sign, helping you navigate life's twists and turns.</p>
             </div>
          </div>
       </div>
     </div>
  );
}
