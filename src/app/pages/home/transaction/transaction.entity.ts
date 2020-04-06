export default class TransactionEntity {
    public id: string;
    public count: number;
    public total: number;
    public currency: string;
    public date: Date;

    constructor({
        id,
        count,
        total,
        currency,
        date
    }) {
        this.id = id;
        this.count = count;
        this.total = total;
        this.currency = currency;
        this.date = date;
    }
}