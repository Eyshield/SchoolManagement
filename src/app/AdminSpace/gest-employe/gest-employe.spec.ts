import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestEmploye } from './gest-employe';

describe('GestEmploye', () => {
  let component: GestEmploye;
  let fixture: ComponentFixture<GestEmploye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestEmploye]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestEmploye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
