let userId = 0
export const addUser = data => ({
  type: 'ADD_USER',
  id: userId++,
  data: {...data}
})