import superagent from 'superagent'

const get = (endpoint, params, headers) => {
	if (headers == null)
		headers = {}

	return new Promise((resolve, reject) => {
		superagent.get(endpoint)
		.query(params)
		.set(headers)
		.end((err, res) => {
			if (err){ 
				reject(err)
				return
			}

			resolve(res.body)
		})
	})
}

const post = (endpoint, params, headers) => {
	if (headers == null)
		headers = {}

	return new Promise((resolve, reject) => {
		superagent.post(endpoint)
		.send(params)
		.set(headers)
		.end((err, res) => {
			if (err){ 
				reject(err)
				return
			}

			resolve(res.body)
		})
	})
}

const put = (endpoint, params, headers) => {
	if (headers == null)
		headers = {}

	return new Promise((resolve, reject) => {
		superagent.put(endpoint)
		.send(params)
		.set(headers)
		.end((err, res) => {
			if (err){ 
				reject(err)
				return
			}

			resolve(res.body)
		})
	})
}

const deleteReq = (endpoint, params, headers) => {
	if (headers == null)
		headers = {}

	return new Promise((resolve, reject) => {
		superagent.delete(endpoint)
		.set(headers)
		.end((err, res) => {
			if (err){ 
				reject(err)
				return
			}

			resolve(res.body)
		})
	})
}

export default {
	get: get,
	// getAsync: (endpoint, params, headers, actionType) => {
	getAsync: (pkg) => {
		return (dispatch) => get(pkg.endpoint, pkg.params, pkg.headers)
			.then(response => {
				if (pkg.actionType != null){
					dispatch({
						type: pkg.actionType,
						data: response
					})
				}

				return response
			})
			.catch(err => {
				throw err
			})
	},

	post: post,
	postAsync: (pkg) => {
		return (dispatch) => post(pkg.endpoint, pkg.params, pkg.headers)
			.then(response => {
				if (pkg.actionType != null){
					dispatch({
						type: pkg.actionType,
						data: response
					})
				}

				return response
			})
			.catch(err => {
				throw err
			})
	},

	put: put,
	putAsync: (pkg) => {
		return (dispatch) => put(pkg.endpoint, pkg.params, pkg.headers)
			.then(response => {
				if (pkg.actionType != null){
					dispatch({
						type: pkg.actionType,
						data: response
					})
				}

				return response
			})
			.catch(err => {
				throw err
			})
	},

	delete: deleteReq,
	deleteAsync: (pkg) => {
		return (dispatch) => deleteReq(pkg.endpoint, pkg.params, pkg.headers)
			.then(response => {
				if (pkg.actionType != null){
					dispatch({
						type: pkg.actionType,
						data: response
					})
				}

				return response
			})
			.catch(err => {
				throw err
			})
	}
}
