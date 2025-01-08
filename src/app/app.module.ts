import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodComponent } from './food/food.component';
import { BurgerComponent } from './burger/burger.component';
import { ShakesComponent } from './shakes/shakes.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { DessertsComponent } from './desserts/desserts.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RollsComponent } from './rolls/rolls.component';
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
import { ToastrModule } from 'ngx-toastr'; // Import Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    BurgerComponent,
    ShakesComponent,
    PizzasComponent,
    DessertsComponent,
    FileUploadComponent,
    RollsComponent,
  
    AdminComponent,
       CoffeeComponent,
       SnacksComponent,
       ChickenDryItemsComponent,
       TandooriDryItemsComponent,
       RotiGravyComponent,
       RiceItemsComponent,
       FishItemsComponent,
       PastaComponent,
       MomosComponent,
       LocationComponent,
       WelcomeComponent,
       CartItemsComponent,
       Pizza1Component,
   
 
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
     
    }), // Import ToastrModule with options
   
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
