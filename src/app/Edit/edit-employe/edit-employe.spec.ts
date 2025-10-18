import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploye } from './edit-employe';

describe('EditEmploye', () => {
  let component: EditEmploye;
  let fixture: ComponentFixture<EditEmploye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmploye]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmploye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
