
const initialState = [
]

export default function paintings (state = initialState, action) {
  let updatedPaintings;

  switch (action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return action.paintings
    case 'DELETE_PAINTING':
      updatedPaintings = state.filter(p => p.id !== action.id)
      return updatedPaintings
    case 'UPVOTE':
      updatedPaintings = state.map(p => {
        if(p.id === action.id) {
          return {
            ...p,
            votes: p.votes + 1
          }
        } else {
          return p
        }
      })

      return updatedPaintings

    default:
      return state
  }
}
