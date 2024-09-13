import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { BurgerComponent } from './burger/burger.component';
import { ShakesComponent } from './shakes/shakes.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { DessertsComponent } from './desserts/desserts.component';
import { RollsComponent } from './rolls/rolls.component';
import { CoffeComponent } from './coffe/coffe.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'food', component: FoodComponent }, 
  { path: 'burger', component: BurgerComponent }, 
  { path: 'shakes', component: ShakesComponent }, 
  { path: 'pizzas', component: PizzasComponent }, 
  { path: 'desserts', component: DessertsComponent }, 
  { path: 'rolls', component: RollsComponent }, 
  { path: 'coffe', component: CoffeComponent }, 
  { path: 'file-upload', component: FileUploadComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
