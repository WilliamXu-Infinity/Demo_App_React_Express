import * as Types from '../actions/actionTypes'

const initialState = {
  allUserInfo: [
    {
      user: 'demo name',
      email: 'demo@demo.com'
    }
  ],
  currentUserInfo: {},
  updating: false
}

const users = (state=initialState, action) => {
  const { type, payload } = action

  switch(type){
    case Types.UPDATING:
      return { ...state, updating: payload}
    
    case Types.STORE_ALL_USER:
      return { ...state, allUserInfo: payload}

    case Types.INPUT_USER_NAME:
      console.log(payload)
      return { ...state, currentUserInfo: {...state.currentUserInfo, name: payload}}

    case Types.INPUT_USER_EMAIL:
      console.log(payload)
      return { ...state, currentUserInfo: {...state.currentUserInfo, email: payload}}

    default:
      return state
  }
}

export default users

