import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../service/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  /**
   * 初期化
   */
  ngOnInit(): void {
    // 最初に現在のルートからProductIdを取り出す
    const routeParams = this.route.snapshot.paramMap;
    // ルートから渡されたIDに対するProductを取得する
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.product = products.find((product) => product.id == productIdFromRoute);
  }

  /**
   * カートに追加する
   * @param product
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
