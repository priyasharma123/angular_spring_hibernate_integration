import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FetchdataService } from 'src/app/service/fetchdata.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowFileComponent } from './show/show-file.component';
import { UploadFileServiceService } from 'src/app/upload-file-service.service';
import { HttpModule } from '@angular/http';
import { ImageUploadComponentComponent } from './service-example/image-upload-component.component';
import { ImageUploadService } from 'src/app/service-example/image-upload.service';


const route: Routes = [
  {path: 'imageUpload', component: ImageUploadComponentComponent},
  {path: 'show', component: ShowFileComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: '**', redirectTo: 'show'},
  {path: '', redirectTo: 'show', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    ShowFileComponent,
    ImageUploadComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    FetchdataService,
    UploadFileServiceService , ImageUploadService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
