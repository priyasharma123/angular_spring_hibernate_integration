import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { UploadFileServiceService } from '../../upload-file-service.service';
@Component({
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
 
  @ViewChild('imageUpload') imageUpload;
  
  constructor(private fb : FormBuilder, private uploadService : UploadFileServiceService){}

  imageFile : File;
  msgNImage = this.fb.group({
    message : [''],
    image : [null]
  })
  
  onSubmit(){
    const Image = this.imageUpload.nativeElement;
    if(Image.files && Image.files[0]){
      this.imageFile = Image.files[0]
    }
    console.log(this.msgNImage.get('message').value)
    this.uploadService.pushFileToStorage(this.imageFile,this.msgNImage.get('message').value).subscribe(
      res => {console.log(res)}
    );
  }

}
