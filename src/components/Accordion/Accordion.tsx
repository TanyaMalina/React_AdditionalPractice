import React from "react"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed:boolean) => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {

    const changeCollapsed = () => {
        props.onClick(!props.collapsed)
    }

    return <div>
        <AccordionTitle title={props.titleValue} onClick={changeCollapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion