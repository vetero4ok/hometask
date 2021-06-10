import React from 'react'
import Affair from './Affair'
import {AffairType, filterAffairs, FilterType} from './HW2'
import classes from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const setClasses = (filter: FilterType) => {
        return classes.buttonFilter + (props.filter === filter ? ' ' + classes.buttonFilter : '')
    }
    return (
        <div className={classes.someClass}>

            <div> {mappedAffairs}</div>
            <div>
                <button onClick={setAll} className={setClasses('all')}>All</button>
                <button onClick={setHigh} className={setClasses('high')}>High</button>
                <button onClick={setMiddle} className={setClasses('middle')}>Middle</button>
                <button onClick={setLow} className={setClasses('low')}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
