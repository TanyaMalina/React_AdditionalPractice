import React, {useState} from 'react'
import './App.css'
import {Accordion} from "./components/Accordion/Accordion"
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select, ItemType} from "./components/Select/Select";

type PageTitlePropsType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    let [selectValue, setSelectValue] = useState<ItemType|null>(null)

    const changeCollapsed = () => setAccordionCollapsed(!accordionCollapsed)

    return (
        <div className={"App"}>

            <OnOff on={on} onClick={setOn}/>
            <UncontrolledOnOff/>

            <PageTitle title={"This is Ap component"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={changeCollapsed}
                       onClick={()=>{}}
                       items={[{title: 'Anna', value: 1}, {title: 'Bob', value: 2}, {title: 'Stiv', value: 3}]}/>


            <Select value={selectValue}
                    onChange={setSelectValue}
                items={[{title: 'Minsk', value: 1}, {title: 'London', value: 2}, {title: 'Kiev', value: 3}]}/>

            <UncontrolledRating/>
            <UncontrolledAccordion/>
        </div>
    )
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App
