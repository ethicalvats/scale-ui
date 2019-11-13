let userId = 0
export const addUser = data => ({
  type: 'ADD_USER',
  id: userId++,
  data: {...data}
})

export const getUsers = () =>({
    type: 'GET_USERS'
})