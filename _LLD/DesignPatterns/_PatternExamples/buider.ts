// builder creational design pattern
class Builder {
    url: string;
    method: string;
    urlParams: any;
    body: any;
    headers: any;
    timeout: number;

    public addUrl(url: string) {
        this.url = url;
        return this;
    }

    public addHeaders(header: string) {
        this.headers = header;
        return this;
    }

    public addMethod(method: string) {
        this.method = method;
        return this;
    }

    public addUrlParam(params: any) {
        this.urlParams = params;
        return this;
    }

    public addTimeout(time: number) {
        this.timeout = time;
        return this;
    }

    public build() {
        return new HttpRequester(this);
    }
}
class HttpRequester {
    private url: string;
    private method: string;
    private urlParams: any;
    private body: any;
    private headers: any;
    private timeout: number;

    constructor(builder: Builder) {
        this.url = builder.url;
        this.body = builder.body;
        this.headers = builder.headers;
        this.urlParams = builder.urlParams;
        this.timeout = builder.timeout;
    }

    request() {
        console.log('http request');
    }
}

function clientCode() {
    let builder = new Builder().addMethod('POST').addHeaders('abc');
    const requester = builder.build();
    requester.request();
}
