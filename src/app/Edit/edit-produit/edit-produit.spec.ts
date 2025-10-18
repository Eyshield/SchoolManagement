import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduit } from './edit-produit';

describe('EditProduit', () => {
  let component: EditProduit;
  let fixture: ComponentFixture<EditProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
