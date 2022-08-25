import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  baseApiUrl: string = environment.baseApiUrl;
  doctors: Doctor[] = [];
  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getAllDoctors()
    .subscribe({
      next: (doctors) => {
        this.doctors = doctors.sort((a, b) => (a.fullName > b.fullName) ? 1 : -1);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
