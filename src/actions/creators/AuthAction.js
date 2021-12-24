import TYPES from '../contants/AuthContants'
import { login } from '../../request/AuthRequest'



const { USER_AUTH_SUCCESS } = TYPES;


export const getUser = (data) => {
    return (dispatch) => {
        const response = login(data)
        response.then(res => {
            dispatch({ type: USER_AUTH_SUCCESS, payload: response })
        })
            .catch(error => console.log(error, 'from error messssss'))
    }
}

