import { Component, OnInit } from '@angular/core';
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-default-product',
  templateUrl: './page-default-product.component.html',
  styleUrls: ['./page-default-product.component.scss']
})
export class PageDefaultProductComponent implements OnInit {
  public product?:Product;
  constructor(private route: ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProductById(id).subscribe(product =>this.product=product );
  }


  switchUpdate():void{

  }

}
