import * as Types from './actionTypes'
import axios from 'axios'

const url = '/user'

export const fetchAllUser = () => dispatch => {
  axios.get(url)
    .then(res => {
      console.log('All user has been fetched')
      dispatch(storeAllUser(res.data))
    })
    .catch(err => console.warn('Error: cannot fetch all user info'))
}

export const addOneUser = (userInfo) => dispatch => {
  axios.post(url, userInfo)
    .then(res => {
      console.log('One user has added')
      dispatch(fetchAllUser)
      dispatch(updating(false))
    })
    .then(err => {
      console.warn('User has not been added')
    })
}

export const updateOneUser = (userInfo) => dispatch => {
  axios.put(url, userInfo)
    .then(res => {
      console.log('User info has been updated')
      dispatch(fetchAllUser)
      dispatch(updating(false))
    })
    .catch(err => {
      console.warn('ERROR: user info not updated')
    })
}

export const deleteOneUser = (userInfo) => dispatch => {
  axios.delete(url, userInfo)
    .then(res => {
      console.log('User has been deleted')
      dispatch(fetchAllUser)
      dispatch(updating(false))
    })
    .catch(err => {
      console.log('ERROR: user has not been deleted')
    })
}

export const updating = (payload) => ({
  type: Types.UPDATING,
  payload: payload
})

export const storeAllUser = payload => ({
  type: Types.STORE_ALL_USER,
  payload: payload
})

export const inputUserName = payload => ({
  type: Types.INPUT_USER_NAME,
  payload: payload
})

export const inputUserEmail = payload => ({
  type: Types.INPUT_USER_EMAIL,
  payload: payload
})