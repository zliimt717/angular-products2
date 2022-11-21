import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Product } from "./product/product";
import { ProductData } from "./product/product-data";

export class AppData implements InMemoryDbService{
    createDb():{products:Product[]}{
        const products=ProductData.products;
        return{products};
    }
}
