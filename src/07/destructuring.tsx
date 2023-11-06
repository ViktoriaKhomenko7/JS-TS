import React from "react";

export type ManType = {
    name: string
    age: number,
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

// function useDimychState(m: string) {
//     return [m, function(){}]
// }
// const [message, setMessage] = useDimychState("hello")


export const ManComponent: React.FC<PropsType> = (props) => { // можно (props: title, man, ...props)
// export const ManComponent: React.FC<PropsType> = ({title, man}) => { и тогда не надо const
// const {title, man, ...restProps} = props
    const {title, man: {name}} = props;

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
    </div>
}