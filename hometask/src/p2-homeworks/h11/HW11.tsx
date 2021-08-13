import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    // const onChangeHandler = () => {
    //     // console.log(value1)
    //     setValue1(value1)
    // }
    const onChangeRangeDouble = ([num1, num2]: number[]) => {
        setValue1(num1)
        setValue2(num2)
    }
    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRangeDouble}
                    value={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
