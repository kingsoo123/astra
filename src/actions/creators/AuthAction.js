import TYPES from '../contants/AuthContants'
import { login } from '../../request/AuthRequest'



const { USER_AUTH_SUCCESS, USER_AUTH_FAILURE } = TYPES;


export const getUser = (data) => {
    return (dispatch) => {
        const response = login(data)
        response.then(res => {
            dispatch({ type: USER_AUTH_SUCCESS, payload: res?.data?.data })
            console.log(res?.data?.data, 'from success')
            let token = res?.data?.data?.access_token
            localStorage.setItem('token', token)
        })
            .catch(error => {
                console.log(error, 'from error messssss')
                dispatch({type:USER_AUTH_FAILURE, payload: "login failed"})
            })
    }
}

