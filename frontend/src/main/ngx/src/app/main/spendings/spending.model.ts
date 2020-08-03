export interface Spending {
    id: number;
    concept: string;
    startdate: Date;
    category: number;
    amount: number;
    price: number;
    comments: string;
    photo: File;
}
export interface Category {
    id: number;
    description: string;
    price: number;
}