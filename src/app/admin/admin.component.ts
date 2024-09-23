import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  selectedCategory: string = 'Pizza';
  itemType: string = 'Veg';
  itemName: string = '';
  itemDescription: string = '';
  itemPrice: number = 0;
  subCategory: string = '';
  regularPrice: number = 0;
  mediumPrice: number = 0;
  singleScoopPrice: number = 0;
  threeScoopPrice: number = 0;
  cakePrice: number = 0;

  constructor(private firestore: AngularFirestore, private toastr: ToastrService) {
    // Test notification
    this.toastr.info('Toastr is working!');
  }

  addItem() {
    let collectionPath: string = '';
    let item: any;

    if (this.selectedCategory === 'Pizza') {
      collectionPath = 'Natures hut/Pizza/Items'; // Collection path for Pizza
      item = {
        name: this.itemName,
        description: this.itemDescription,
        regularPrice: this.regularPrice,
        mediumPrice: this.mediumPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Cold Beverages') {
      collectionPath = 'Natures hut/Cold Beverages/Items'; // Collection path for Cold Beverages
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Rolls') {
      collectionPath = 'Natures hut/Rolls/Items'; // Collection path for Rolls
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Desserts') {
      if (this.subCategory === 'Ice Cream') {
        collectionPath = 'Natures hut/Desserts/Ice Cream'; // Collection path for Ice Cream
        item = {
          name: this.itemName,
          description: this.itemDescription,
          singleScoopPrice: this.singleScoopPrice,
          threeScoopPrice: this.threeScoopPrice,
          type: this.itemType
        };
      } else if (this.subCategory === 'Cake') {
        collectionPath = 'Natures hut/Desserts/Cake'; // Collection path for Cake
        item = {
          name: this.itemName,
          description: this.itemDescription,
          cakePrice: this.cakePrice,
          type: this.itemType
        };
      } 
    } else if (this.selectedCategory === 'Starters') {
      collectionPath = 'Natures hut/Starters/Items'; // Collection path for Starters
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Hot Beverages') {
      collectionPath = 'Natures hut/Hot Beverages/Items'; // Collection path for Hot Beverages
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Gravy') { // New Gravy Category
      collectionPath = 'Natures hut/Gravy/Items'; // Collection path for Gravy
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    }  else if (this.selectedCategory === 'rice') { // New Gravy Category
      collectionPath = 'Natures hut/rice/Items'; // Collection path for Gravy
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'pasta') { // New Gravy Category
      collectionPath = 'Natures hut/pasta/Items'; // Collection path for Gravy 
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType  
      };
    } else if (this.selectedCategory === 'momos') { // New Gravy Category
      collectionPath = 'Natures hut/Momos/Items'; // Collection path for Gravy 
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType  
      };
    }

    if (collectionPath && item) {
      this.firestore.collection(collectionPath).add(item)
        .then(() => {
          this.toastr.success('Item added successfully!');
          this.resetForm();
        })
        .catch(error => {
          this.toastr.error('Error adding item: ' + error.message);
        });
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.subCategory = ''; // Reset subcategory
  }

  onSubCategoryChange(event: any) {
    this.subCategory = event.target.value;
  }

  resetForm() {
    this.selectedCategory = 'Pizza';
    this.itemType = 'Veg';
    this.itemName = '';
    this.itemDescription = '';
    this.itemPrice = 0;
    this.regularPrice = 0;
    this.mediumPrice = 0;
    this.singleScoopPrice = 0;
    this.threeScoopPrice = 0;
    this.cakePrice = 0;
  }
}
