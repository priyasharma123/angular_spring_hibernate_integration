import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ImageMessage } from 'src/app/imagemessage.class';
import { FetchdataService } from 'src/app/service/fetchdata.service';
import { DomSanitizer } from '@angular/platform-browser';
import { stateName } from '../animate';

@Component({
  selector: 'app-show-file',
  templateUrl: './show-file.component.html',
  styleUrls: ['./show-file.component.css'],
  animations : [stateName]
})
export class ShowFileComponent implements OnInit, OnDestroy {
  @ViewChild('display') display;
  show = false;
  interval:any;
  image:any;
  message:string;
  imageMessage: ImageMessage[];
  stateName = 'show';
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

    this.interval = setInterval(()=>{this.changeImageandMessage()},2000);
  }

  changeImageandMessage(){
    this.show = !this.show;
    this.stateName = this.show ? 'show':'hide';
    const index = Math.floor(Math.random()*(this.imageMessage.length));
    const temp  : ImageMessage = this.imageMessage[index];
    this.message =  temp.message;
    this.image = temp.image;
    console.log(this.image + "  " + this.message + " index " + index);
  }

  stopTimer(){
    this.stateName = 'reset';
    clearInterval(this.interval);
  }

  startTimer(){
    this.interval = setInterval(()=>{this.changeImageandMessage()},2000);
  }
  
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

//  getBack(image: any ) {
//   let style = {
//     'background-image' : 'url(' + this.sanitizar.bypassSecurityTrustUrl ('data:image/png:base64,' + image ) + ')'
//   }
//   return style;
//  }

}
