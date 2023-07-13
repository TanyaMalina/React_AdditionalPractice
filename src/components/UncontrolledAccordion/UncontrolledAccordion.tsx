import React, {useState} from "react"


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion() {

    let [collapsed, setCollapsed] = useState(true)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={"NoName"} onClick={changeCollapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.onClick()
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion