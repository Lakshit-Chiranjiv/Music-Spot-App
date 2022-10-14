import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { DetailsHeader,Error,Loader } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore.js";

const SongDetails = () => {
    const { songid } = useParams()
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data: songData, isFetching: isFetchingSongData } = useGetSongDetailsQuery({ songid })

    return (
        <div className="flex flex-col">

            {/* <DetailsHeader/> */}
            
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics : </h2>

                <div className="mt-5">
                    {
                        songData?.sections[1].type === 'LYRICS' ?
                        songData?.sections[1].text.map((line,i) => (
                            <p>{line}</p>
                        )):
                        <p>No Lyrics Available</p>
                    }
                </div>
            </div>
        </div>
    )
};

export default SongDetails;
