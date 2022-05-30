import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../core/models/product";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() product?:Product;

  constructor(private location: Location,
              private router:Router,
              private route: ActivatedRoute,
              private productsService:ProductsService) {
  }

  ngOnInit(): void {
  }

  deleteProduct(id:number):void {
    console.log(id);
    this.productsService.deleteProductById(id).subscribe();
  }

  editProduct(id:number):void {
    this.router.navigate(['./../edit/',id], { relativeTo: this.route });
  }

}
