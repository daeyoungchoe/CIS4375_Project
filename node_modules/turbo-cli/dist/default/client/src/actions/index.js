import constants from '../constants'
import { HTTPClient } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a couple sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

	/*
  // The following are examples of AsyncAction creators (https://redux.js.org/advanced/asyncactions):
  // Feel free to remove and use your own

	fetchUsers: (params) => {
		return dispatch => {
			return dispatch(HTTPClient.getAsync({
				endpoint: '/api/profile',
				params: params,
				headers: null,
				actionType: constants.USERS_RECEIVED
			}))
		}
	},

	createUser: (params) => {
		return dispatch => {
			return dispatch(HTTPClient.postAsync({
				endpoint: '/api/profile',
				params: params,
				headers: null,
				actionType: constants.USER_CREATED
			}))
		}
	},

  // Syncronous Action Creator example:
  userAdded: (user) => {
    return {
      user: user,
      actionType: constants.USER_CREATED
    }
  }

  */

}
