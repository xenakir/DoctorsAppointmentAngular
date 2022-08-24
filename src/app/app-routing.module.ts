import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './components/doctors/add-doctor/add-doctor.component';
import { DoctorsListComponent } from './components/doctors/doctors-list/doctors-list.component';
import { EditDoctorPolyclinicsComponent } from './components/doctors/edit-doctor-polyclinics/edit-doctor-polyclinics.component';
import { EditDoctorSpecializationsComponent } from './components/doctors/edit-doctor-specializations/edit-doctor-specializations.component';
import { EditDoctorComponent } from './components/doctors/edit-doctor/edit-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsListComponent
  },
  {
    path: 'doctors',
    component: DoctorsListComponent
  },
  {
    path: 'doctors/add',
    component: AddDoctorComponent
  },
  {
    path: 'doctors/edit/:id',
    component: EditDoctorComponent
  },
  {
    path: 'doctors/editDoctorSpecializations/:id',
    component: EditDoctorSpecializationsComponent
  },
  {
    path: 'doctors/editDoctorPolyclinics/:id',
    component: EditDoctorPolyclinicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
