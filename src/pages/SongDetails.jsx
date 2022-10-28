import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { DetailsHeader,Error,Loader, RelatedSongs } from "../components";
import { useGetSongDetailsQuery, useGetSongRelatedDetailsQuery } from "../redux/services/shazamCore.js";

const SongDetails = () => {
    const { songid } = useParams()
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data: songData, isFetching: isFetchingSongData } = useGetSongDetailsQuery({ songid })

    const { data, isFetching: isFetchingRelated, error } = useGetSongRelatedDetailsQuery({ songid })

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({song, data, i}))
        dispatch(playPause(true))
    }

    if(isFetchingSongData || isFetchingRelated)
        return <Loader text='Fetching Song Details'/>

    if(error)
        return <Error/>

    return (
        <div className="flex flex-col">

            <DetailsHeader artistId="" songData={songData}/>
            
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics : </h2>

                <div className="mt-5">
                    {
                        songData?.sections[1].type === 'LYRICS' ?
                        songData?.sections[1].text.map((line,i) => (
                            <p className="text-base text-gray-300 my-1">{line}</p>
                        )):
                        <p className="text-base text-gray-300 my-1">No Lyrics Available</p>
                    }
                </div>
            </div>

            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    )
};

export default SongDetails;
