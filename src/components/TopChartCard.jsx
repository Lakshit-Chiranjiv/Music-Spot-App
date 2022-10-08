import { Link } from "react-router-dom"
import PlayPause from "./PlayPause"

const TopChartCard = ({song,i,isPlaying,activeSong,handlePauseClick,handlePlayClick}) => {
  return (
    <div className="flex w-full items-center rounded-lg cursor-pointer mb-2 py-2 p-4 hover:bg-[#4c426e]">
        <h3 className="font-bold text-white text-base mr-3">{i+1}.</h3>
        <div className="flex flex-1 justify-between items-center">
          <img src={song?.images.coverart} alt="song cover img" className="w-20 h-20 rounded-lg"/>
          <div className="flex-1 flex flex-col justify-between mx-3">
            <Link to={`/songs/${song?.key}`} className='font-bold text-white text-xl'>{song?.title}</Link>
            <Link to={`/artists/${song?.artists[0].adamid}`} className='text-gray-400 text-base mt-2'>{song?.subtitle}</Link>
          </div>
        </div>
        <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick}/>
    </div>
  )
}

export default TopChartCard