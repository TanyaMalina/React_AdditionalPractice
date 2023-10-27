import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title:'Input'
}

export const UncontrolledInput = () => <input />
export const ControlledInputWithFixedValue = () => <input value={'it'} />

export const TrackValueOfUncontrolledInput = () => {
    const[value, setValue] = useState('')

    return <> <input onChange={(event) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/>-{value}</>
}

export const GetValueOfUncontrolledInput = () => {
    const[value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

   const  onclickHandler = ()=>{
        const el = inputRef.current as HTMLInputElement
       setValue(el.value)
   }

    return <><input ref={inputRef}/><button onClick={onclickHandler}>save</button>-{value}</>
}

export const ControlledInput = () => {
    const[value, setValue] = useState('')

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }

    return <input value={value} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
    const[value, setValue] = useState(true)

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.checked)
    }

    return <input type = {"checkbox"} checked={value} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const[value, setValue] = useState<string|undefined>(undefined)

    const onChangeHandler = (event:ChangeEvent<HTMLSelectElement>)=>{
        setValue(event.currentTarget.value)
    }

    return <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>London</option>
        </select>

}