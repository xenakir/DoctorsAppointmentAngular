import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

  doctorDetails: Doctor = {
    id: '',
    fullName: '',
    photo: ''
  }

  constructor(private route: ActivatedRoute, 
    private doctorsService: DoctorsService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.doctorsService.getDoctor(id)
          .subscribe ({
            next: (response) => {
              this.doctorDetails = response;
            }
          })
        }
      }
    });
  }

  updateDoctor(){
    this.doctorsService.updateDoctor(this.doctorDetails.id, this.doctorDetails)
    .subscribe ({
      next: (response) => {
        this.router.navigate(['doctors']);
      }
    });
  }

  deleteDoctor(id: string){
    this.doctorsService.deleteDoctor(id)
    .subscribe ({
      next: (response) =>  {
        this.router.navigate(['doctors']);
      }
    })
  }
}
