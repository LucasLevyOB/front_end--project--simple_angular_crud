import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    pro_name: '',
    pro_price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    this.productService.readById(parseInt(productId)).subscribe(product => {
      this.product = product;
      console.log(this.product)
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado');
      this.router.navigate(['/produtos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }

  setPrice(price: string): void{
    this.product.pro_price = parseFloat(price.replace(',', '.'));
    // console.log(price.replace(',', '.'));
  }

}
