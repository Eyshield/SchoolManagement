import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestProduit } from './gest-produit';

describe('GestProduit', () => {
  let component: GestProduit;
  let fixture: ComponentFixture<GestProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
