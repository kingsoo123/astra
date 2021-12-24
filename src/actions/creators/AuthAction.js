import TYPES from '../contants/AuthContants'
import { login } from '../../request/AuthRequest'



const { IS_PROCESSING, USER_AUTH_SUCCESS, USER_AUTH_FAILURE, USER_LOGOUT, RESET_AUTH_ERROR, IS_LOGGING_OUT } = TYPES;


export const getUser = (data) => {
    return (dispatch) => {
        const response = login(data)
        response.then(res => {
            dispatch({ type: USER_AUTH_SUCCESS, payload: response })
            console.log(res, 'from thennnnnnn')
        })
            .catch(error => console.log(error, 'from error messssss'))
    }
}

