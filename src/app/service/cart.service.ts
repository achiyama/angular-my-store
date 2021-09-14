import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  /**
   * カートに追加する
   * @param product
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /**
   * カート内を取得する
   * @returns
   */
  getItems() {
    return this.items;
  }

  /**
   * カート内を空にする
   * @returns
   */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /**
   * 配送料を取得する
   * @returns
   */
  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
