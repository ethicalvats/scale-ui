import {addUser} from './index'

describe('actions', () => {
  it('should create an action to add a user', () => {
    const data = {
        email: 'vats@me.com',
        username: 'vats',
        password: 'qwe'
    }
    const expected = {
      type: 'ADD_USER',
      data, id:0
    }
    expect(addUser(data)).toEqual(expected)
  })
})