import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    proName: '',
    proPrice: null
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe( ()=> {
      this.productService.showMessage('Produto criado');
      console.log(this.productService);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

  setPrice(price: string): void{
    this.product.proPrice = parseFloat(price.replace(',', '.'));
    // console.log(price.replace(',', '.'));
  }

}
