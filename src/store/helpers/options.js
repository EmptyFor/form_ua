export const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    // token: null || this.props.token
}
export const options = {
    GET: {
        ...headers,
        body: null || JSON.stringify() ,
        method: 'GET'
    },
    POST: {
        ...headers,
        body: JSON.stringify({}) || null ,
        method: 'POST'
    },
    PUT: {
        ...headers,
        body: JSON.stringify({}) || null ,
        method: 'PUT'
    },
    DELETE: {
        ...headers,
        body: JSON.stringify({}) || null ,
        method: 'DELETE'
    },

}

export default options