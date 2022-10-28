import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';

const AroundYou = () => {
    
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    
    return (
        <div>

        </div>
    )
};

export default AroundYou;
