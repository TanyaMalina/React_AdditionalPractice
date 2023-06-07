import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    changeStarsValue: (e:EventTarget&HTMLSpanElement) => void
    idStar:number
}

export function UncontrolledRating() {

    let [starsValue, setStarsValue] = useState(0)

    const changeStarsValue = (e:EventTarget&HTMLSpanElement) => {
        setStarsValue(+e.id)
    }

    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star idStar={i} selected={(starsValue > 0 && i <= starsValue)} changeStarsValue={changeStarsValue}/>)
    }

    return (
        <div>
            {stars}
        </div>
    )
}

function Star(props: StarPropsType) {
        return <span id = {props.idStar.toString()} key = {props.idStar} onClick={(e) => props.changeStarsValue(e.currentTarget)}>
            {props.selected? <b>star </b>:"star "}
        </span>
}