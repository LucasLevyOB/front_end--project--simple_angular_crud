import { ConfigurationsComponent } from './components/pages/configurations/configurations.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCrudComponent } from './components/pages/product-crud/product-crud.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProductCrudComponent
  },
  {
    path: 'produtos/cadastrar',
    component: ProductCreateComponent
  },
  {
    path: 'produtos/editar/:productId',
    component: ProductUpdateComponent
  },
  {
    path: 'produtos/deletar/:productId',
    component: ProductDeleteComponent
  },
  {
    path: 'configuracoes',
    component: ConfigurationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
