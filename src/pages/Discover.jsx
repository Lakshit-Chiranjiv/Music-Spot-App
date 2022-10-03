import { Error, SongCard, Loader } from "../components";
import { genres } from './../assets/constants.js'
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {

    const dispatch = useDispatch()

    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetTopChartsQuery()

    const genreTitle = 'Pop'

    if(isFetching) return <Loader text='Loading songs...'/>

    if(error) return <Error/>

    return (
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="text-white text-3xl font-bold text-left">Discover {genreTitle}</h2>
                <select name="genre" value={''} onChange={()=>{}} className='bg-black text-sm rounded p-3 text-gray-300 outline-none sm:mt-0 mt-5'>
                    {
                        genres.map((genre)=>{
                            return <option value={genre.value} key={genre.value}>{genre.title}</option>
                        })
                    }
                </select>
            </div>
            <div className="flex sm:justify-start justify-center gap-8 flex-wrap">
                {
                    data?.map((song,i)=>{
                        return <SongCard song={song} key={song.key} i={i} isPlaying={isPlaying} activeSong={activeSong}/>
                    })
                }
            </div>
        </div>
    )
};

export default Discover;
