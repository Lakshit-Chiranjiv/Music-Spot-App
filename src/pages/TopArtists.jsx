import React from 'react'
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore.js';

const TopArtists = () => {

    const { data, isFetching, error } = useGetTopChartsQuery()

    const artistData = data?.filter(artist => artist.images)


    if(isFetching)
        return <Loader text='Loading Top Artists'/>

    if(error)
        return <Error/>
    
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Top Artists
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {
                    artistData?.map((track) => (
                        <ArtistCard key={track.key} track={track}/> 
                    ))
                }
            </div>
        </div>
    )
};

export default TopArtists;
