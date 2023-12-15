import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <br/>
        fake: {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {counter}
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('useEffect')

        // setTimeout(() => {
        //     console.log('setTimeout')
        //     document.title = counter.toString()
        // }, 1000)

        setInterval(() => {
            console.log('tick' + counter)
            setCounter(state => state + 1)
        }, 1000)

    }, [])

    return <>
        counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <br/>
        fake: {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        {counter}
    </>
}
