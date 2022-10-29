import { Error, SongCard, Loader } from "../components";
import { genres } from './../assets/constants.js'
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice.js";

const Discover = () => {

    const dispatch = useDispatch()

    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP')

    
    if(isFetching) return <Loader text='Loading songs...'/>
    
    if(error) return <Error/>
    
    const genreTitle = genres.find(({ value }) => value === genreListId)?.title

    return (
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="text-white text-3xl font-bold text-left">Discover {genreTitle}</h2>
                <select name="genre" value={genreListId || 'pop'} onChange={(e)=>dispatch(selectGenreListId(e.target.value))} className='bg-black text-sm rounded p-3 text-gray-300 outline-none sm:mt-0 mt-5'>
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
                        return <SongCard song={song} key={song.key} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}/>
                    })
                }
            </div>
        </div>
    )
};

export default Discover;
