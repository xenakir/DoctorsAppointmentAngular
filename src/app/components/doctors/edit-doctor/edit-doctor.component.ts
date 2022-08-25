import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsPhoto } from 'src/app/models/doctorsPhoto.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

  url = '';
  photoAvailability: boolean = true;
  selectedFile: any;
  baseApiUrl: string = environment.baseApiUrl;
  
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
    
    // if(this.doctorDetails.photo == ''){
    //   this.photoAvailability = false;
    // }
  }

  updateDoctor(){
    this.doctorsService.updateDoctor(this.doctorDetails.id, this.doctorDetails)
    .subscribe ({
      next: (response) => {
        this.router.navigate(['doctors']);
      }
    });
    //this.addDoctorsPhoto();
  }

  deleteDoctor(id: string){
    this.doctorsService.deleteDoctor(id)
    .subscribe ({
      next: (response) =>  {
        this.router.navigate(['doctors']);
      }
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  // addDoctorsPhoto(){
  //   const filedata = new FormData();
  //   let request: DoctorsPhoto = {file: this.selectedFile, id: this.doctorDetails.id};
  //   // filedata.append('image', this.selectedFile, this.selectedFile.fullName);
  //   this.doctorsService.addDoctorsPhoto(request)
  //   .subscribe ({
  //     next: (response) => {
  //       this.router.navigate(['doctors']);
  //     }
  //   });
  // }
}
