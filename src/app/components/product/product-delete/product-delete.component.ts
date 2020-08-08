import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    pro_name: '',
    pro_price: null
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    this.productService.readById(parseInt(productId)).subscribe(product => {
      this.product = product['data'];
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.pro_id).subscribe(() => {
      this.productService.showMessage('Produto deletado');
      this.router.navigate(['/produtos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}
