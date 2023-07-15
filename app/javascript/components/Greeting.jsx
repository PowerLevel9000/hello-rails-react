import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
    const { massages, isLoading } = useSelector((store) => store.message)
    const massagesHtml = massages.map(msg => <h1>msg.message</h1>)
    if (isLoading) {
        return (
            <h1>loading...</h1>
        );
    }
    return (
        <>
            {massagesHtml}
        </>
    )
}

export default Greeting
