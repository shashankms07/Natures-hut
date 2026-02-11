import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { BurgerComponent } from './burger/burger.component';
import { ShakesComponent } from './shakes/shakes.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { DessertsComponent } from './desserts/desserts.component';
import { RollsComponent } from './rolls/rolls.component';

import { FileUploadComponent } from './file-upload/file-upload.component';
import { AdminComponent } from './admin/admin.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ChickenDryItemsComponent } from './chicken-dry-items/chicken-dry-items.component';
import { TandooriDryItemsComponent } from './tandoori-dry-items/tandoori-dry-items.component';
import { RotiGravyComponent } from './roti-gravy/roti-gravy.component';
import { RiceItemsComponent } from './rice-items/rice-items.component';
import { FishItemsComponent } from './fish-items/fish-items.component';
import { PastaComponent } from './pasta/pasta.component';
import { MomosComponent } from './momos/momos.component';
import { LocationComponent } from './location/location.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { Pizza1Component } from './pizza1/pizza1.component';
import { NoodlesComponent } from './noodles/noodles.component';



const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'burger', component: BurgerComponent },
  { path: 'shakes', component: ShakesComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'rolls', component: RollsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'chicken-dry-items', component: ChickenDryItemsComponent },
  { path: 'tandoori-dry-items', component: TandooriDryItemsComponent },
  { path: 'roti-gravy', component: RotiGravyComponent },
  { path: 'rice-items', component: RiceItemsComponent },
  { path: 'fish-items', component: FishItemsComponent },
  { path: 'pasta', component: PastaComponent },
  { path: 'momos', component: MomosComponent },
  { path: 'location', component: LocationComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'cart-items', component: CartItemsComponent },
  { path: 'pizza1', component: Pizza1Component },
  { path: 'noodles', component: NoodlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
