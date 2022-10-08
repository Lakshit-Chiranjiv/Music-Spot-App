import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper,SwiperSlide } from "swiper/react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import 'swiper/css'
import 'swiper/css/free-mode'
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import TopChartCard from "./TopChartCard";

const TopPlay = () => {

  const dispatch = useDispatch()

  const { isPlaying,activeSong } = useSelector((state) => state.player) 

  const { data } = useGetTopChartsQuery()

  const divRef = useRef(null)

  useEffect(()=>{
   divRef.current.scrollIntoView({ behavior: 'smooth' }) 
  })

  const topPlays = data?.slice(0,5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song,i) => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
  }

  return (
    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:mx-w-[500px] lg:max-w-[400px] max-w-full flex flex-col'>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl text-white font-bold">Top Charts</h2>
          <Link to='/top-charts'>
            <p className="text-base text-gray-300 cursor-pointer">See more</p>
          </Link>
        </div>

        {
          topPlays ? 
          <div className="mt-4 flex flex-col gap-1">
            {
              topPlays.map((topPlay,i) => (
                <TopChartCard song={topPlay} i={i} key={topPlay.title} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={()=>handlePlayClick(topPlay,i)}/>
              ))
            }
          </div> :
          <p>Loading...</p>
        }
      </div>

      <div className="flex flex-col mt-8 w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl text-white font-bold">Top Artists</h2>
          <Link to='/top-artists'>
            <p className="text-base text-gray-300 cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper 
          slidesPerView='auto'
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='mt-4'
        >
          {
            topPlays?.map((topPlay,i) => (
              <SwiperSlide key={topPlay?.key} style={{ width: '25%', height: 'auto' }} className='shadow-lg rounded-full animate-slideright'>
                <Link to={`/artists/${topPlay?.artists[0].adamid}`}>
                  <img src={topPlay?.images.background} alt="artist image" className="rounded-full w-full"/>
                </Link>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>
    </div>
  )
};

export default TopPlay;
