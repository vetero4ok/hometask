import React from 'react'
import {AffairType} from './HW2';
import classes from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass = classes.item + ' ' + classes[props.affair.priority]
    return (
        <div className={classes.affair}>
            <span className={classes.item}>{props.affair.name}</span>
            <span className={priorityClass}>[{props.affair.priority}]</span>
            <button onClick={deleteCallback} className={classes.buttonClose}>X</button>
        </div>
    )
}

export default Affair
