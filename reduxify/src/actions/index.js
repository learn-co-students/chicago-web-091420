
// Action Creator:
// is a function that returns an action

export const fetchPaintingsSuccess = (paintings) => {
  return {
    type: 'FETCH_PAINTINGS_SUCCESS',
    paintings: paintings
  }
}

export const deletePainting = (id) => {
  return {
    type: 'DELETE_PAINTING',
    id: id
  }
}

export const upVote = (id) => {
  return {
    type: 'UPVOTE',
    id: id
  }
}

