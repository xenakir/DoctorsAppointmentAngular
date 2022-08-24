import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctorSpecializationsComponent } from './edit-doctor-specializations.component';

describe('EditDoctorSpecializationsComponent', () => {
  let component: EditDoctorSpecializationsComponent;
  let fixture: ComponentFixture<EditDoctorSpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDoctorSpecializationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDoctorSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
