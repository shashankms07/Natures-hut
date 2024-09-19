import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule } from '@angular/forms';
import { FoodComponent } from './food/food.component';
import { BurgerComponent } from './burger/burger.component';
import { ShakesComponent } from './shakes/shakes.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { DessertsComponent } from './desserts/desserts.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RollsComponent } from './rolls/rolls.component';
import { AdminComponent } from './admin/admin.component';
import { ToastrModule } from 'ngx-toastr';
import { CoffeeComponent } from './coffee/coffee.component';



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
   
 
    
   
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center', // Center the toast messages
      timeOut: 3000, // Duration for toast visibility
      preventDuplicates: true
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
