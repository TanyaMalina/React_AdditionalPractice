import React, {useState} from 'react'
import './App.css'
import Accordion from "./components/Accordion/Accordion"
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PageTitlePropsType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    return (
        <div className={"App"}>

            <OnOff on={on} onClick={setOn}/>
            <UncontrolledOnOff/>

            <PageTitle title={"This is Ap component"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            <UncontrolledRating/>
            <UncontrolledAccordion/>
        </div>
    )
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App
