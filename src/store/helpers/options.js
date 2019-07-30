export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // token: null || this.props.token
}
export const options = {
    GET: {
        ...headers,
        body: null,
        method: 'GET'
    },
    POST: {
        ...headers,
        method: 'POST'
    },
    PUT: {
        headers,
        method: 'PUT'
    },
    DELETE: {
        headers,
        body: null,
        method: 'DELETE'
    },

}

export default options