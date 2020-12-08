


export default function loading(state = false, action) {

  switch (action.type) {
    case 'FETCH_PAINTINGS_START':
      return true
    case 'FETCH_PAINTINGS_SUCCESS':
      return false
    default:
      return state
  }
}
