import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FetchdataService } from 'src/app/service/fetchdata.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ShowFileComponent } from './show/show-file.component';
import { UploadFileServiceService } from 'src/app/upload-file-service.service';
import { HttpModule } from '@angular/http';
import { UploadFileComponent } from './upload/upload-file/upload-file.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const route: Routes = [
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    FetchdataService,
    UploadFileServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
