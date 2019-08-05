// Make an api call

const { token_type, access_token } = JSON.parse(localStorage.getItem('user')) || { token_type: '', access_token: '' };
export default async (url, method = 'get', body, isAuthenticationRequired = true) => axios(`${baseURL}${url}`, {
	method,
	data: body,
	headers: {
		Authorization: isAuthenticationRequired && `${token_type} ${access_token}`,
		'Content-Type': 'application/json',
	},
})
	.then(({ data, status }) => {
    if(status === 200)
    return data
  })
	.then(response => response, error => error);
