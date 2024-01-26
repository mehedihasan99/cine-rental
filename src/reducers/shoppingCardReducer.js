const initialState = {
  shoppingCardData: [],
}
const shoppingCardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CARD': {
      return {
        ...state,
        shoppingCardData: [...state.shoppingCardData, action.payload],
      }
    }
    case 'REMOVE_TO_CARD': {
      return {
        ...state,
        shoppingCardData: state.shoppingCardData.filter(
          (shoppingCard) => shoppingCard.id !== action.payload.id
        ),
      }
    }

    default: {
      return state
    }
  }
}

export { initialState, shoppingCardReducer }
