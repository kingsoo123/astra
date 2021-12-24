import TYPES from '../actions/contants/AuthContants'
import { isEmpty } from "../helpers/functions";



const { IS_PROCESSING, USER_AUTH_SUCCESS, USER_AUTH_FAILURE, USER_LOGOUT, RESET_AUTH_ERROR, IS_LOGGING_OUT } = TYPES;

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
                error: "",
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