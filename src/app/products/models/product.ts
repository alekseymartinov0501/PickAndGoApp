import { Category } from "src/app/categories/models/category";
import { Brand } from "./brand";
import { Distribution } from "./distribution";

export interface Product {
    id: number;
    barCode: number;
    name: string;
    brandId: number;
    brand: Brand;
    elaborationDate: Date;
    expirationDate: Date;
    weight: number;
    volumen: number;
    qualityRegistryId: number;
    qualityRedistry: QueuingStrategy;
    categoryId: number;
    category: Category;
    distributionId: number;
    distribution: Distribution;
    imageUrl: string;
}