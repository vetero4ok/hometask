import {UserType} from '../HW8';

type sort = {
    type: 'sort'
    payload: 'up' | 'down'

}
type check = {
    type: 'check'
    payload: number
}

type ActionType = sort | check

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state]
            newState.sort(function (a, b) {
                if (a.name > b.name) return -1
                else if (a.name < b.name) return 1;
                else return 0
            });
            return action.payload === 'up' ? newState : newState.reverse()
        }

        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}