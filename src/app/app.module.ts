import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsListComponent } from './components/doctors/doctors-list/doctors-list.component';
import { AddDoctorComponent } from './components/doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './components/doctors/edit-doctor/edit-doctor.component';
import { EditDoctorSpecializationsComponent } from './components/doctors/edit-doctor-specializations/edit-doctor-specializations.component';
import { EditDoctorPolyclinicsComponent } from './components/doctors/edit-doctor-polyclinics/edit-doctor-polyclinics.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsListComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    EditDoctorSpecializationsComponent,
    EditDoctorPolyclinicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
