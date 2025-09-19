import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFournissuer } from './gest-fournissuer';

describe('GestFournissuer', () => {
  let component: GestFournissuer;
  let fixture: ComponentFixture<GestFournissuer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestFournissuer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestFournissuer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
