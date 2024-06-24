import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDistrictCardComponent } from './individual-district-card.component';

describe('IndividualDistrictCardComponent', () => {
  let component: IndividualDistrictCardComponent;
  let fixture: ComponentFixture<IndividualDistrictCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualDistrictCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualDistrictCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
