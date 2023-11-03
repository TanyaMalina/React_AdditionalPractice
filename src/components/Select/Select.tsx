import React, {useEffect, useState, KeyboardEvent} from "react";
import styles from "./Select.module.css";

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<ItemType>(props.value)

    useEffect(()=>{
        setHoveredElementValue(props.value)
    },[props.value])

    const toggleItems = () => {
        setActive(!active)
        setHoveredElementValue(props.value)
    }

    const onClickItem = (value: ItemType) => {
        props.onChange(value)
        setActive(false)
    }

    const onBlurHandler = () => setActive(false)

    const onKeyUpHandler = (e:KeyboardEvent<HTMLDivElement>) => {
       if (e.key ==='ArrowDown'|| e.key ==='ArrowUp') {
           for (let i = 0; i < props.items.length; i++) {
               const downUpIndex = e.key ==='ArrowDown'?1:-1

               if (hoveredElementValue && props.items[i].value === hoveredElementValue.value && props.items[i + downUpIndex]) {
                   props.onChange(props.items[i + downUpIndex])
                 return
               }
           }

           if(!props.value) props.onChange(props.items[0])
       }

        if (e.key ==='Escape'|| e.key ==='Enter') {
            toggleItems()
        }
    }


    return (<div tabIndex={0} className={styles.select + " " + (active ? styles.active : '')}
                  onBlur={onBlurHandler}
                onKeyUp={onKeyUpHandler}>
        <span className={styles.main} onClick={toggleItems}>{props.value ? props.value.title : ""}</span>
        <div className={styles.items}>
            {props.items.map((i, index) => <div
                className={styles.item + ' ' + (hoveredElementValue && hoveredElementValue.value === i.value ? styles.selected : '')}
                onMouseEnter={() => setHoveredElementValue(i)}
                onClick={() => onClickItem(i)}
                key={index}>{i.title} </div>)}
        </div>
    </div>)
}
