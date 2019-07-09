import { isObject } from 'lodash';
// import { baseUrl } from '../constants/env';

class Api {
    //   token = null;
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }

    //   setAuthorization (token) {
    //     this.token = token;
    //     return this;
    //   }

    setHeaders(headers) {
        Object.getOwnPropertyNames(headers).forEach(key => {
            if (headers[key]) {
                this.headers[key] = headers[key];
            }
        });

        return this;
    }


    call(url, method, query = null, body = null) {
        // if query is object - create query string from its values
        // if no - just return as it was passed
        const queryParams = isObject(query)
            ? Object.keys(query).map(key => {
                let value = query[key];
                return `${key}=${value}`;
            }).join('&')
            : query;

        let options = {
            method,
            headers: {
                ...this.headers,
                // 'Authorization': this.token,
            }
        }

        if (body) {
            options.body = body.constructor.name !== 'FormData'
                ? JSON.stringify(body)
                : body
        }

        const queryString = query !== null ? `?${queryParams}` : '';
        const urlString = `${url}`;

        return fetch(urlString, options).then(response => {
            this.response = response;

            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }

            return response.json()
                .catch(() => {
                    // if couldn't parse json
                    throw new Error(`${response.status} - ${response.statusText}`);
                })
                // if got a valid json response with error
                .then(error => {
                    throw error;
                })
        })
    }
}

export default () => new Api();
