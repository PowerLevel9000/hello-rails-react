import '../redux/store'
import React from 'react'
import Greeting from './Greeting'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getMassages } from '../redux/massages/massagesSlice';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMassages());
    }, [dispatch]);
    return (
        <div>
            <Greeting />
        </div>
    )
}

export default App
