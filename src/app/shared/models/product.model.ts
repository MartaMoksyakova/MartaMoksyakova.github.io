import { IProduct } from '../interfaces/product.interface'
import { ICategory } from '../interfaces/category.interface';
export class Product implements IProduct{
    constructor(
        public id: string,
        public category : ICategory,
        public name: string,
        public description: string,
        public price: number,
        public count: number = 1,
        public image: Array<string>,
        public size: number,
        
    ){}
}