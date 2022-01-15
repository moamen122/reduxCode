import { DECREAMENT, INCREAMENT, INCREASE } from "../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case INCREAMENT:
            return { ...state, count: state.count + 1 }
        case INCREASE:
            return { ...state, count: state.count + action.value }
        case DECREAMENT:
            if (state.count > 0) {
                return { ...state, count: state.count - 1 }
            }
            else { return { ...state, count: state.count } }
        default:
            return state
    }



}
export default counterReducer