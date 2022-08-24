import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorPolyclinic } from 'src/app/models/doctorPolyclinic';
import { Polyclinic } from 'src/app/models/polyclinic.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-edit-doctor-polyclinics',
  templateUrl: './edit-doctor-polyclinics.component.html',
  styleUrls: ['./edit-doctor-polyclinics.component.scss']
})
export class EditDoctorPolyclinicsComponent implements OnInit {

  doctorDetails: Doctor = {
    id: '',
    fullName: '',
    photo: ''
  }
  
  polyclinics: Polyclinic[] = [];
  allPolyclinics: Polyclinic[] = [];
  polId: string ='';

  constructor(private route: ActivatedRoute, 
    private doctorsService: DoctorsService, 
    private router: Router) { }

  ngOnInit(): void {

    //Получаем все параметры и берем id
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

          //Получаем все поликлиники
          this.doctorsService.getAllPolyclinics()
          .subscribe({
            next: (allPolyclinics) => {
              this.allPolyclinics = allPolyclinics.sort((a, b) => (a.address > b.address) ? 1 : -1);
            },
            error: (response) => {
              console.log(response);
            }
          });

          //Получаем все поликлиники выбранного доктора
          this.doctorsService.getDoctorPolyclinics(id)
          .subscribe({
            next: (polyclinics) => {
              this.polyclinics = polyclinics;
            },
            error: (response) => {
              console.log(response);
            }
          })
        }
      }
    });
  }

  ChangeValue(e: any){
    this.polId = e.target.value;
  }

  deleteDoctorPolyclinic(idD: string, idP: string){
      let request: DoctorPolyclinic = {idD, idP};
      this.doctorsService.deleteDoctorPolyclinic(request)
      .subscribe ({
        next: (response) =>  {
          this.router.navigate(['doctors/editDoctorPolyclinics/' + request.idD]);
        }
      })
  }

  addDoctorPolyclinic(){
    let idD: string = this.doctorDetails.id;
    let idP: string = this.polId;
    let request: DoctorPolyclinic = {idD, idP};
    this.doctorsService.addDoctorPolyclinic(request)
    .subscribe ({
      next: (response) =>  {
        this.router.navigate(['doctors/editDoctorPolyclinics/' + request.idD]);
      }
    })
    
  }
}