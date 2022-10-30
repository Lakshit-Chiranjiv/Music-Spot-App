import React from 'react'
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore.js';

const TopCharts = () => {

    const { isPlaying, activeSong } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetTopChartsQuery()

    const songData = data?.filter(song => song.images)


    if(isFetching)
        return <Loader text='Loading Top Charts'/>

    if(error)
        return <Error/>
    
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Discover Top Charts
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {
                    songData?.map((song,i) => (
                        <SongCard
                            key={song.key}
                            i={i}
                            song={song}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={songData}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default TopCharts;
