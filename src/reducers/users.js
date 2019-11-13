const users = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USER':
        return [
          ...state,
          {
              id: action.id,
              ...action.data
          }
        ]
    case 'GET_USERS':
        return state
      default:
        return state
    }
  }
  
  export default users