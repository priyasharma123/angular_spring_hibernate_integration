import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from 'src/app/upload-file-service.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  selectedFile: File = null;
  currentSelectedFile: File;

  constructor(private uploadFileService: UploadFileServiceService) { }
  selectFile(files: FileList) {
    this.selectedFile = files.item(0);
  }

  ngOnInit() {
  }

  upload() {
    console.log(this.currentSelectedFile);
    this.uploadFileService.pushFileToStorage(this.currentSelectedFile).subscribe(
      success => { console.log(success); }
    );
  }

}
