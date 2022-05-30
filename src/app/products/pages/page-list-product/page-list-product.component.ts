import { Component, OnInit } from '@angular/core';
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../services/products.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-list-product',
  templateUrl: './page-list-product.component.html',
  styleUrls: ['./page-list-product.component.scss']
})
export class PageListProductComponent implements OnInit {
  public products:Product[]|null=null;

  constructor(private productsService:ProductsService, private location: Location,
              private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (msg) => {
        alert("Une erreur est survenue" + msg);
      },
      complete: () => {
        console.info('Fin de la récupération des produits');
      }
    });
  }

}
