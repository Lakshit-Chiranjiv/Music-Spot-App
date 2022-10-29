import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore.js';

const AroundYou = () => {
    
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)

    const { isPlaying, activeSong } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetSongsByCountryQuery(country)

    useEffect(() => {
        const fetchCountry = async() => {
            try {
                const apiData = await axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_jxBO5JK9yuR4mUDeVEjR5sYeTESF7') 
                setCountry(apiData?.data?.location?.country)
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }

        fetchCountry()

    }, [country])

    if(isFetching && loading)
        return <Loader text='Loading songs around you'/>

    if(error && country)
        return <Error/>
    
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Around You &nbsp;
                <span className='text-base font-black'>{country}</span>
            </h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {
                    data?.map((song,i) => (
                        <SongCard
                            key={song.key}
                            i={i}
                            song={song}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default AroundYou;
