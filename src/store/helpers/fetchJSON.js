export default (url, options) =>
    new Promise((resolve, reject) => {
        let status;
        return fetch(url, options)
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then(response => (status !== 200 ? reject(response) : resolve(response)))
            .catch(error => reject(error));
    });

