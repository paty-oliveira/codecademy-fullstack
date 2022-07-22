const initialSearchTerm = ''

export const searchTermReducer = (state = initialSearchTerm, action) => {

  switch (action.type) {
    case 'searchTerm/setSearchTerm': {
      return action.payload;
    }

    case 'searchTerm/clearSearchTerm': {
      return '';
    }

    default: {
      return state;
    }
  }
}

export const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

export const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }
}
