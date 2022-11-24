import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR, DETAILS_DOCTOR} from "../type"

const defaultState = {
    loading: false,
    error: null,
    name:'',
    number:'',
    detailsDoctor:[]
}
console.log(defaultState)
export const globalReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case HIDE_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case DETAILS_DOCTOR: {
                const {payload} = action
                const {detailsDoctor} = state
            return {
                    ...state,
                    detailsDoctor: payload
            }
        }
        default:
            return state
    }
}