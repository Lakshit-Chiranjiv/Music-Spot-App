import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId].attributes;
  
  return (
  <div className="relative flex flex-col w-full">
    <div className="w-full sm:h-48 h-28 bg-gradient-to-l from-transparent to-black ">
      <div className="absolute flex items-center inset-0">
        <img src={artistId? artist?.artwork?.url.replace('{w}','500').replace('{h}','500'): songData?.images?.coverart} alt="song img" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full border-2 object-cover shadow-xl shadow-black"/>

        <div className="ml-5">
          <p className="text-white sm:text-3xl text-xl font-bold">{artistId ? artist?.name : songData?.title}</p>
          {
            !artistId &&
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-gray-400 text-base mt-2">{songData?.subtitle}</p>
            </Link>
          }

          <p className="text-gray-400 text-base mt-2">
            {
              artistId ? 
              artist?.genreNames[0] :
              songData?.genres?.primary
            }
          </p>
        </div>

      </div>
    </div>
  </div>
)};

export default DetailsHeader;
