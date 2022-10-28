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
    
    return (
        <div>

        </div>
    )
};

export default AroundYou;
