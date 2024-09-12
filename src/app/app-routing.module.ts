import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { BurgerComponent } from './burger/burger.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'food', component: FoodComponent }, 
  { path: 'burger', component: BurgerComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
