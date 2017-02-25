// state argument is not application state, only the state thi reducer is responsible for

// when state is undefined, set it to null
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}