import RestService from './Rest.service';

const logger = {
    requestsLog: [],
    apply: function (target, thisArgument, argumentsList) {
        const [url] = argumentsList;
        const { name: method } = target;

        this.requestsLog.push({ url, method });
        console.log('Lesson 4 - Requests log', this.requestsLog);

        return RestService[target.name](...argumentsList);
    }
};

const proxyGet = new Proxy(RestService.get, logger);
const proxyPost = new Proxy(RestService.post, logger);
const proxyPut = new Proxy(RestService.put, logger);
const proxyDelete = new Proxy(RestService.delete, logger);

export default {
    get: proxyGet,
    post: proxyPost,
    put: proxyPut,
    delete: proxyDelete,
}
