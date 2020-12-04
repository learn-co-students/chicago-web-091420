
export const loginSuccess = ({user, comments}) => {
  return {
    type: 'LOGIN_SUCCESS',
    user,
    comments
  }
}

export const currentUser= ({user, comments}) => {
  return {
    type: 'CURRENT_USER',
    user,
    comments
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  }
}
