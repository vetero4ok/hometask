import React, {KeyboardEvent,ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users:Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(false)
        setName(e.currentTarget.value)// need to fix
        if(e.currentTarget.value === ''){
            setError(true)
        }
    }
    const addUser = () => {
        const validatedName = name.trim()
        if(validatedName){
            addUserCallback(validatedName)
            alert(`Hello ${validatedName} !`) // need to fix
        }
        else {
            setError(true)
        }
        setName('')
    }

    function onEnter(e: KeyboardEvent<HTMLInputElement>)  {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
