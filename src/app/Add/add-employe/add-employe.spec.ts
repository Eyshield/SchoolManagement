import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploye } from './add-employe';

describe('AddEmploye', () => {
  let component: AddEmploye;
  let fixture: ComponentFixture<AddEmploye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmploye]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmploye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
