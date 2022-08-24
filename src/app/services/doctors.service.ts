import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddDoctor } from '../models/addDoctor.model';
import { DoctorSpecialization } from '../models/doctorSpecialization';
import { Doctor } from '../models/doctor.model';
import { DoctorPolyclinic } from '../models/doctorPolyclinic';
import { Polyclinic } from '../models/polyclinic.model';
import { Specialization } from '../models/specialization.model';
import { UpdateDoctor } from '../models/updateDoctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Получение списка докторов
  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseApiUrl + '/api/doctor/getDoctors');
  }

  //Добавление доктора
  addDoctor(addDoctorRequest: AddDoctor): Observable<AddDoctor> {
    addDoctorRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<AddDoctor>(this.baseApiUrl + '/api/doctor/addDoctor',
    addDoctorRequest);
  }

  //Получение доктора
  getDoctor(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(this.baseApiUrl + '/api/doctor/getDoctor/' + id);
  }

  //Изменение доктора
  updateDoctor(id: string, updateDoctorRequest: UpdateDoctor): Observable<UpdateDoctor> {
    return this.http.put<Doctor>(this.baseApiUrl + '/api/doctor/updateDoctor/' + id, updateDoctorRequest);
  }

  //Удаление доктора
  deleteDoctor(id: string): Observable<Doctor> {
    return this.http.delete<Doctor>(this.baseApiUrl + '/api/doctor/deleteDoctor/' + id);
  }

  //Получение всех специализаций доктора
  getDoctorSpecializations(id: string): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(this.baseApiUrl + '/api/doctor/getDoctorSpecializations/' + id);
  }

  //Получение всех поликлиник доктора
  getDoctorPolyclinics(id: string): Observable<Polyclinic[]> {
    return this.http.get<Polyclinic[]>(this.baseApiUrl + '/api/doctor/getDoctorPolyclinics/' + id);
  }

  //Добавление специализации доктора
  addDoctorSpecialization(request: DoctorSpecialization): Observable<DoctorSpecialization> {
    return this.http.put<DoctorSpecialization>(this.baseApiUrl + 
      '/api/doctor/addDoctorSpecialization', request);
  }
  
  //Добавление поликлиники доктора
  addDoctorPolyclinic(request: DoctorPolyclinic): Observable<DoctorPolyclinic> {
    return this.http.put<DoctorPolyclinic>(this.baseApiUrl + 
      '/api/doctor/addDoctorPolyclinic', request);
  }

  //Удаление специализации доктора
  deleteDoctorSpecialization(request: DoctorSpecialization): Observable<DoctorSpecialization> {
    return this.http.put<DoctorSpecialization>(this.baseApiUrl + 
      '/api/doctor/deleteDoctorSpecialization', request);
  }

  //Удаление поликлиники доктора
  deleteDoctorPolyclinic(request: DoctorPolyclinic): Observable<DoctorPolyclinic> {
    return this.http.put<DoctorPolyclinic>(this.baseApiUrl + 
      '/api/doctor/deleteDoctorPolyclinic', request);
  }

  //Получение всех специализаций
  getAllSpecializations(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(this.baseApiUrl + 
      '/api/specialization/getSpecializations');
  }

  //Получение всех поликлиник
  getAllPolyclinics(): Observable<Polyclinic[]> {
    return this.http.get<Polyclinic[]>(this.baseApiUrl + 
      '/api/polyclinic/getPolyclinics');
  }
}
