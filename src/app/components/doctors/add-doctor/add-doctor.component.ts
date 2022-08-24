import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDoctor } from 'src/app/models/addDoctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  addDoctorRequest: AddDoctor = {
    id: '',
    fullName: ''
  };

  constructor(private doctorsService: DoctorsService, private router: Router) { }

  ngOnInit(): void {
  }

  addDoctor() {
    this.doctorsService.addDoctor(this.addDoctorRequest)
    .subscribe({
      next: (doctor) => {
        this.router.navigate(['doctors']);
      }
    });
  }

}