export default {
    get: (url, onSuccess, onFail) => {
        return fetch(url)
            .then(onSuccess)
            .catch(onFail);
    },

    post: (url, data, onSuccess, onFail) => {
        return fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(onSuccess)
            .catch(onFail);
    },

    put: (url, data, onSuccess, onFail) => {
        return fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data),
        })
            .then(onSuccess)
            .catch(onFail);
    },

    'delete': (url, data, onSuccess, onFail) => {
        return fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data),
        })
            .then(onSuccess)
            .catch(onFail);
    }
}
