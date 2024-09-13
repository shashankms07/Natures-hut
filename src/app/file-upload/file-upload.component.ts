import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {




 name: string = '';
 age: number | null = null;
 city: string = '';
 selectedFile: File | null = null;
 uploadedImageUrl: string | null = null;
 showImage: boolean = false;

 constructor(private fileUploadService: FileUploadService) {}

 ngOnInit(): void {
   // Replace with the actual path of your image in Firebase Storage
   const imagePath = 'path/to/your-image.jpg';

   // Fetch the image URL from Firebase Storage
   this.fileUploadService.getImageUrl(imagePath).subscribe(url => {
     this.uploadedImageUrl = url;
     this.showImage = true; // Show the image
   });
 }

 onFileSelected(event: any) {
   this.selectedFile = event.target.files[0];
 }

 upload() {
   if (this.selectedFile) {
     const validAge = this.age ?? 0; // Default to 0 if `age` is null
     this.fileUploadService.uploadImage(this.selectedFile).subscribe(imageUrl => {
       this.fileUploadService.saveData(this.name, validAge, this.city, imageUrl)
         .then(() => {
           console.log('Entry added successfully!');
           this.name = '';
           this.age = null;
           this.city = '';
           this.selectedFile = null;
         })
         .catch(error => {
           console.error('Error adding entry: ', error);
         });
     });
   } else {
     console.error('Please select a file.');
   }
 }
 

}
