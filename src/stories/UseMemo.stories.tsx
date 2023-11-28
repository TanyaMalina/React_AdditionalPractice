import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) fake++
            tempResultA = tempResultA * i
        }

        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anna', 'Bob', 'Alex'])

    const filteredUsers = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={filteredUsers}/>
    </>
}


export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'CSS', 'React'])

    const addBook = () => {
        const newBooks = [...books, 'HTML' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook1 = useMemo(() => {
        return () => {
            const newBooks = [...books, 'HTML' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook = useCallback(() => {
            const newBooks = [...books, 'HTML' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}

type BookSecretType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
    return <div>{
        <button onClick={() => props.addBook()}>add book</button>
    }</div>
}

const Books = React.memo(BooksSecret)