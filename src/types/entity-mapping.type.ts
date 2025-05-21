import { WSCategory, WSCategoryWritable } from './ws-entities/categories.type';
import { WSOrder } from './ws-entities/orders.type';
import { WSProduct, WSProductWritable } from './ws-entities/products.type';

export type WSEntity = {
  categories: WSCategory;
  orders: WSOrder;
  products: WSProduct;
};

export type WSEntityWritable = {
  categories: WSCategoryWritable;
  orders: WSOrder;
  products: WSProductWritable;
};
