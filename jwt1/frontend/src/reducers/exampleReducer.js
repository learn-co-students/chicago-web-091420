

const comments= (state=[], action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return [...action.comments]
    case 'LOGOUT_USER':
      return []
    default:
      return state
  }
}

export default comments
