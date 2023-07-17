import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
    const { massages, isLoading } = useSelector((store) => store.message)
    if (isLoading) {
        return (
            <h1>loading...</h1>
        );
    }
    return (
        <>
            <h1>{massages.message}</h1>
        </>
    )
}

export default Greeting
