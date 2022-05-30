import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../services/products.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-page-list-product',
  templateUrl: './page-list-product.component.html',
  styleUrls: ['./page-list-product.component.scss']
})
export class PageListProductComponent implements OnInit {
  public products:Product[]|null=null;
  @ViewChild('dialog') private dialogComponent:any;
  private tmpDelete:string='';
  private isDelete:boolean=false;


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

  deleteProduct(id:number):void {
    // console.log(id);
    // this.productsService.deleteProductById(id).subscribe();
    // this.getProducts();

    //TODO: FIX the component
    let matDialogRef=this.dialogComponent.openDialog("Suppression", "le msg");
    matDialogRef.afterClosed().subscribe((value:any)=>console.log(value));

    //matDialogRef.afterClosed().pipe(filter(value => value=='true'))
    console.log(this.tmpDelete);
    if (this.tmpDelete=='true'){
      this.isDelete=true;
      this.productsService.deleteProductById(id).subscribe();
      this.getProducts();
    }
  }

  editProduct(id:number):void {
    this.router.navigate(['./../edit/',id], { relativeTo: this.route });
  }

}
