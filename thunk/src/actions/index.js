
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

export const fetchPaintingsStart= () => {
  return {
    type: 'FETCH_PAINTINGS_START',
  }
}


export const youtubeAdd= () => {

  let time = 5
  return (dispatch, getState) => {

    setInterval(
      () => {
        if (getState().time > 1) {
          dispatch(showSkipButton())
          // clearInterval
        }

        time -= 1
        dispatch(updateTime(time))
      }
      , 1000)
  }
}




export const deletePaintingThunk = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/paintings/${id}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(paintings => {
      dispatch(deletePainting(id))
    })
  }
}


export const fetchPaintingsThunk = () => {
  return (dispatch) => {
    dispatch(fetchPaintingsStart())
    fetch('http://localhost:3000/paintings')
    .then(resp => resp.json())
    .then(paintings => {
      dispatch(fetchPaintingsSuccess(paintings))
    })
  }
}

export const upVoteThunk = (id, votes) => {
  return (dispatch) => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        votes: votes + 1
      })
    }

    fetch(`http://localhost:3000/paintings/${id}`, reqObj)
    .then(resp => resp.json())
    .then(paintings => {
      dispatch(upVote(id))
    })
  }
}
