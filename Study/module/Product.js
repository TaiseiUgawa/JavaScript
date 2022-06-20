import {BaseProduct} from './BaseProduct.js';

export class Product extends BaseProduct {
    getProduct(){
        console.log('プロダクトクラスからの読み出し');
    }
}