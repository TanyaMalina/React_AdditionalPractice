import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
}

export function Rating(props: RatingPropsType) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star selected={(props.value>0 && i <= props.value)}/>)
    }

    return (
        <div>
            {stars}
        </div>
    )
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}