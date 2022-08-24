import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorSpecialization } from 'src/app/models/doctorSpecialization';
import { Doctor } from 'src/app/models/doctor.model';
import { Specialization } from 'src/app/models/specialization.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-edit-doctor-specializations',
  templateUrl: './edit-doctor-specializations.component.html',
  styleUrls: ['./edit-doctor-specializations.component.scss']
})
export class EditDoctorSpecializationsComponent implements OnInit {

  doctorDetails: Doctor = {
    id: '',
    fullName: '',
    photo: ''
  }
  
  specializations: Specialization[] = [];
  allSpecializations: Specialization[] = [];
  specId: string ='';
  
  constructor(private route: ActivatedRoute, 
    private doctorsService: DoctorsService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          //Получаем доктора в doctorDetails
          this.doctorsService.getDoctor(id)
          .subscribe ({
            next: (response) => {
              this.doctorDetails = response;
            }
          })

          //Получаем все специализации
          this.doctorsService.getAllSpecializations()
          .subscribe({
            next: (allSpecializations) => {
              this.allSpecializations = allSpecializations.sort((a, b) => (a.name > b.name) ? 1 : -1);
            },
            error: (response) => {
              console.log(response);
            }
          });

          //Получаем все специализации выбранного доктора
          this.doctorsService.getDoctorSpecializations(id)
          .subscribe({
            next: (specializations) => {
              this.specializations = specializations.sort((a, b) => (a.name > b.name) ? 1 : -1);
            },
            error: (response) => {
              console.log(response);
            }
          });
        }
      }
    });
  }

  ChangeValue(e: any){
    this.specId = e.target.value;
  }

  deleteDoctorSpecialization(idD: string, idS: string){
    let request: DoctorSpecialization = {idD, idS};
    this.doctorsService.deleteDoctorSpecialization(request)
    .subscribe ({
      next: (response) =>  {
        this.router.navigate(['doctors/editDoctorSpecializations/' + request.idD]);
      }
    })
  }

  addDoctorSpecialization(){
    let idD: string = this.doctorDetails.id;
    let idS: string = this.specId;
    let request: DoctorSpecialization = {idD, idS};
    this.doctorsService.addDoctorSpecialization(request)
    .subscribe ({
      next: (response) =>  {
        this.router.navigate(['doctors/editDoctorSpecializations/' + request.idD]);
      }
    })
  }
}
