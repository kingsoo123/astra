import TYPES from '../actions/contants/AuthContants'
import { isEmpty } from "../helpers/functions";



const { USER_AUTH_SUCCESS, USER_AUTH_FAILURE} = TYPES;

const initiaState = {
    isAuthenticated: false,
    isProcessing: false,
    isLoggingOut: false,
    user: {},
    error: "",
}


export const authReducer = (state = initiaState, action) => {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };

            case USER_AUTH_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                };
            default:
                return state;
    }
}