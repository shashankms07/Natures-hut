import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  // Form fields
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

  // Image upload
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private toastr: ToastrService
  ) {}

  // Handle image selection
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;

      // Generate image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Add item
  addItem() {
    let collectionPath: string = '';
    let item: any;

    if (this.selectedCategory === 'Pizza') {
      collectionPath = 'Natures hut/Pizza/Items';
      item = {
        name: this.itemName,
        description: this.itemDescription,
        regularPrice: this.regularPrice,
        mediumPrice: this.mediumPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Cold Beverages') {
      collectionPath = 'Natures hut/Cold Beverages/Items';
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Rolls') {
      collectionPath = 'Natures hut/Rolls/Items';
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Desserts') {
      if (this.subCategory === 'Ice Cream') {
        collectionPath = 'Natures hut/Desserts/Ice Cream';
        item = {
          name: this.itemName,
          description: this.itemDescription,
          singleScoopPrice: this.singleScoopPrice,
          threeScoopPrice: this.threeScoopPrice,
          type: this.itemType
        };
      } else if (this.subCategory === 'Cake') {
        collectionPath = 'Natures hut/Desserts/Cake';
        item = {
          name: this.itemName,
          description: this.itemDescription,
          cakePrice: this.cakePrice,
          type: this.itemType
        };
      }
    } else if (this.selectedCategory === 'Starters') {
      collectionPath = 'Natures hut/Starters/Items';
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Hot Beverages') {
      collectionPath = 'Natures hut/Hot Beverages/Items';
      item = {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'Gravy') {
      collectionPath = 'Natures hut/Gravy/Items';
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'rice') {
      collectionPath = 'Natures hut/rice/Items';
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'pasta') {
      collectionPath = 'Natures hut/pasta/Items';
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'momos') {
      collectionPath = 'Natures hut/Momos/Items';
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    } else if (this.selectedCategory === 'noodles') {
      collectionPath = 'Natures hut/Noodles/Items';
      item = {
        name: this.itemName,
        price: this.itemPrice,
        type: this.itemType
      };
    }

    if (collectionPath && item) {
      if (this.selectedFile) {
        // Upload image
        const filePath = `Natures_hut/${this.selectedCategory}/${new Date().getTime()}_${this.selectedFile.name}`;
        const fileRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, this.selectedFile);

        uploadTask.snapshotChanges()
          .pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                item.imageUrl = url; // Add image URL to item
                this.saveItem(collectionPath, item);
              });
            })
          )
          .subscribe();
      } else {
        // Save item without image
        this.saveItem(collectionPath, item);
      }
    }
  }

  // Save item to Firestore
  private saveItem(collectionPath: string, item: any) {
    this.firestore.collection(collectionPath).add(item)
      .then(() => {
        this.toastr.success('Item added successfully!');
        this.resetForm();
      })
      .catch(error => {
        this.toastr.error('Error adding item: ' + error.message);
      });
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
    this.selectedFile = null;
    this.imagePreview = null;
  }
}
