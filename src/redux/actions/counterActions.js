import { DECREAMENT, INCREAMENT, INCREASE } from "./types"

export const increamentAction = async (dispatch) => {
    return dispatch({
        type: INCREAMENT
    })
}
export const decreamentAction = (dispatch) => {
    return dispatch({
        type: DECREAMENT
    })
}
export const IncreaseBy5 = (vl, dispatch) => {
    return dispatch({
        type: INCREASE,
        value: vl

    })
}