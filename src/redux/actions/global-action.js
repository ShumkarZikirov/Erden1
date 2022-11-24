import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR, DETAILS_DOCTOR,} from "../type"

export const showError = (text) => {
    return {
        type: SHOW_ERROR,
        payload: text
    }
}
export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    }
}
export const showLoading = () => {
    return {
        type: SHOW_LOADING,
    }
}
export const hideLoading = () => {
    return {
        type: HIDE_LOADING,
    }
}
export const detailsDoctor = (id) => {
    return{
        type: DETAILS_DOCTOR
    }
}