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

const TopPlay = () => {

  return (
    <div></div>
  )
};

export default TopPlay;
