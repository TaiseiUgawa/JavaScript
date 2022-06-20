
class BaseProduct{
    echoProduct(){
        console.log('親の関数です');
    }

    getProduct(){
        console.log('親のgetProduct');
    }
}

class Product extends BaseProduct {
    
    constructor(product){
        super(); //親クラスのコンストラクターの呼び出し
        this.product = product;
    }
    
    // オーバーライド
    getProduct(){
        console.log(this.product);
    }

    addProduct(item){
        this.product += item;
        console.log(this.product);
    }

    static testProduct(){
        console.log('静的メソッドです');
    }
}

const product = new Product('テスト');
console.log(product.product);

product.getProduct();
product.addProduct('追加文です');
product.echoProduct();
Product.testProduct()