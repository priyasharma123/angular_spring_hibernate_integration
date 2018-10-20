import { Component, OnInit } from '@angular/core';
import { ImageMessage } from 'src/app/imagemessage.class';
import { FetchdataService } from 'src/app/service/fetchdata.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-file',
  templateUrl: './show-file.component.html',
  styleUrls: ['./show-file.component.css']
})
export class ShowFileComponent implements OnInit {
  title = 'angular-hibernate-integration';
  imageMessage: ImageMessage[];
  constructor(private fetchDataService: FetchdataService, private sanitizar: DomSanitizer) {}

  ngOnInit (): void {
    this.fetchDataService.fetchAllData().subscribe(
      data => {
        this.imageMessage = data;
        console.log(data || JSON);
      },
      error => {
        console.error(error);
      }
    );
  }

 getBack(image: any ) {
  let style = {
    'background-image' : 'url(' + this.sanitizar.bypassSecurityTrustUrl ('data:image/png:base64,' + image ) + ')'
  }

  return style;


 }
}
