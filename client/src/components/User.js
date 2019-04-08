import React from 'react';
import { connect } from 'react-redux'
import get from 'lodash/get'
import { addOneUser, updateOneUser, deleteOneUser, inputUserName, inputUserEmail } from '../actions'

const User = (props) => {
  const { allUserInfo, currentUserInfo, addOneUser, updateOneUser, deleteOneUser, inputUserName, inputUserEmail } = props
  console.log(allUserInfo)
  return (
    <div>
      Name <input type="text" value={get(currentUserInfo, 'name', '')} onChange={e => inputUserName(e.target.value)}/>
      <br/>
      Email <input type="text" value={get(currentUserInfo, 'email', '')} onChange={e => inputUserEmail(e.target.value)}/>
      <br/>
      <button onClick={addOneUser(currentUserInfo)}>submit</button>
      <br/>
      <table> 
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {allUserInfo.map(user => {
          return(
            <tr>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          )
        })}
      </table>
      
    </div>
  );
}

const mapStateToProps = ({users}) => {
  const { allUserInfo, currentUserInfo } = users
  return {
    allUserInfo,
    currentUserInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOneUser: (url, userInfo) => dispatch(addOneUser(url, userInfo)),
    updateOneUser: (url, userInfo) => dispatch(updateOneUser(url, userInfo)),
    deleteOneUser: (url, userInfo) => dispatch(deleteOneUser(url, userInfo)),
    inputUserName: (payload) => dispatch(inputUserName(payload)),
    inputUserEmail: (payload) => dispatch(inputUserEmail(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
