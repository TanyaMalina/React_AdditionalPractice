import React, {useReducer} from "react"
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}



export function UncontrolledAccordion() {

    //let [collapsed, setCollapsed] = useState(true
    let [state, dispatch] = useReducer(reducer,  {collapsed: false})

    const changeCollapsed = () => {
        //setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return <div>
        <AccordionTitle title={"Menu"} onClick={changeCollapsed}/>
        {!state.collapsed && <AccordionBody/>}
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
