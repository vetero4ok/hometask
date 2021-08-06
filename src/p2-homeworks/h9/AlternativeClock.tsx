import React, { useEffect, useState } from 'react'

function AlternativeClock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const deleteIdInterval = setInterval(() => {
                setDate(new Date())
            },
            1000)
        return () => {
            clearInterval(deleteIdInterval)
        }
    }, [])
    const zeroForDate = (num: number) => num < 10 ? '0' + num : num
    const hoursToString = zeroForDate(date.getHours())
    const minutesToString = zeroForDate(date.getMinutes())
    const secondsToString = zeroForDate(date.getSeconds())

    return (
        <div>
            <span>{hoursToString}</span>
            :<span>{minutesToString}</span>
            :<span>{secondsToString}</span>

        </div>
    )
}

export default AlternativeClock
