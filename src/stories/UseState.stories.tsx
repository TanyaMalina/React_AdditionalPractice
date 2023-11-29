import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    //difficult counting
    return 123456789
}

export const Example1 = () => {

    //const initValue= useMemo(generateData, []) //call 1 time

    const [counter, setCounter] = useState(generateData)//call function generateData

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}