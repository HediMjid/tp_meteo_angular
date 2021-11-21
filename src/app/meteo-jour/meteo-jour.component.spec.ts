import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoJourComponent } from './meteo-jour.component';

describe('MeteoJourComponent', () => {
  let component: MeteoJourComponent;
  let fixture: ComponentFixture<MeteoJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoJourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
