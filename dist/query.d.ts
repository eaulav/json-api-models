export declare class Query {
    private readonly query;
    constructor(query?: any);
    push(key: object | string, value?: any): this;
    private appendable;
    toString(): string;
}
