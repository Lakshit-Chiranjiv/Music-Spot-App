import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader,Error,Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore.js";

const ArtistDetails = () => {
    const { id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data: artistData, isFetching: isFetchingArtistData, error } = useGetArtistDetailsQuery(artistId)

    
    if(isFetchingArtistData)
        return <Loader text='Fetching Artist Details'/>

    if(error)
        return <Error/>

    return (
        <div className="flex flex-col">

            <DetailsHeader artistId={artistId} artistData={artistData}/>
            

            <RelatedSongs
                data={Object.values(artistData?.songs)}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />
        </div>
    )
};

export default ArtistDetails;
