export default class Api {

    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
        this.headers = { 'Content-Type': 'application/json' };
    }

    _getHeaders() {
        return this.headers;
    }

    _handleResponce(res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return res.json()
            .then(resj => Promise.reject({status: res.status, messageApi: resj.message}));
        }
    }

    _fetch(url, method = 'GET', body, headers) {
        const bodyStr = body === null ? null : JSON.stringify(body);
        let headersFinal = this._getHeaders();
        if (headers) {
            headersFinal = {...headersFinal, ...headers};
        }

        return fetch(
            `${this.baseUrl}/${url}`,
            {
                method: method,
                headers: headersFinal,
                body: bodyStr
            })
            .then(res => this._handleResponce(res));
    }
}