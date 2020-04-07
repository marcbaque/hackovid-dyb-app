export default class TransactionEntity {
    public id: string;

    public products: {
        id: number,
        name: string,
        price: number,
        count: number
    }[];

    public seller: {
        name: string
    }
    
    public total: number;
    public currency: string;
    public date: Date;

    constructor({
        id,
        products,
        seller,
        total,
        currency,
        date
    }) {
        this.id = id;
        this.products = products;
        this.seller = seller;
        this.total = total;
        this.currency = currency;
        this.date = date;
    }
}