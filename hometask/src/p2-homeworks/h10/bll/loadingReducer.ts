const initState = {
    loading: false
}

export type InitStateType = typeof initState
export type ActionType = LoadingActionType
export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state,
                loading: action.loading,
            }
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'IS-LOADING',
        loading
    }
} // fix any
type LoadingActionType = ReturnType<typeof loadingAC>