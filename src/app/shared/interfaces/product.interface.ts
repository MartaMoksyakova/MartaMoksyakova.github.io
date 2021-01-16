import { ICategory } from './category.interface';

export interface IProduct {
    id: string;
    category: ICategory;
    name: string;
    description: string;
    price: number;
    count: number;
    image: Array<string>;
    size: number;
    
    
}