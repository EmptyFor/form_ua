export const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    // token: null || this.props.token
}
export default options = {

    GET:{
        ...headers,
        method:'GET'
    },
    POST:{
        ...headers,
        method:'POST'
    },
    PUT:{
        ...headers,
        method:'PUT'
    },
    DELETE:{
        ...headers,
        method:'DELETE'
    },
    CREATE:{
        ...headers,
        method:'CREATE'
    }

}