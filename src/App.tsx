import React from 'react'
import './App.css'
import Accordion from "./components/Accordion/Accordion"
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <>
            <PageTitle title={"This is Ap component"}/>
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
        </>
    )
}

function PageTitle(props:any) {
    return <h1>{props.title}</h1>
}

export default App
