import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative flex flex-col w-full">
    <div className="w-full sm:h-48 h-28 bg-gradient-to-l from-transparent to-black ">
      <div className="absolute flex items-center inset-0">
        <img src={artistId? artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}','500').replace('{h}','500'): songData?.images?.coverart} alt="song img" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full border-2 object-cover shadow-xl shadow-black"/>
      </div>
    </div>
  </div>
);

export default DetailsHeader;
