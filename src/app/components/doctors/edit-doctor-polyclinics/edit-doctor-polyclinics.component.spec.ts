import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctorPolyclinicsComponent } from './edit-doctor-polyclinics.component';

describe('EditDoctorPolyclinicsComponent', () => {
  let component: EditDoctorPolyclinicsComponent;
  let fixture: ComponentFixture<EditDoctorPolyclinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDoctorPolyclinicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDoctorPolyclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
