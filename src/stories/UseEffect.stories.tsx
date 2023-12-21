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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)


    console.log('Component render with ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }
    }, [counter])


    return <>
        counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}


export const KeyTrackerExample = () => {
    const [text, setText] = useState('')


    console.log('Component render with ' + text)

    // useEffect(() => {
    //     const handler = (e: KeyboardEvent) => {
    //         console.log(e.key)
    //         setText((state) => state + e.key)
    //     }
    //
    //     window.addEventListener('keypress', handler)
    //
    //     return () => {
    //         window.removeEventListener('keypress', handler)
    //     }
    // }, [])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}


