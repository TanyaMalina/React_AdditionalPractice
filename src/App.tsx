import React from 'react'
import './App.css'
import Accordion from "./components/Accordion/Accordion"
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className={"App"}>
            <OnOff/>

            <PageTitle title={"This is Ap component"}/>

            <Rating value={2}/>
            <Accordion titleValue={"Menu"} collapsed = {true}/>

            <UncontrolledRating/>
            <UncontrolledAccordion />
        </div>
    )
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App
