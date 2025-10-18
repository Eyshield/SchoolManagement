import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFournisseur } from './edit-fournisseur';

describe('EditFournisseur', () => {
  let component: EditFournisseur;
  let fixture: ComponentFixture<EditFournisseur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFournisseur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFournisseur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
