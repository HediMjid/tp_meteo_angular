import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoSuivantComponent } from './meteo-suivant.component';

describe('MeteoSuivantComponent', () => {
  let component: MeteoSuivantComponent;
  let fixture: ComponentFixture<MeteoSuivantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoSuivantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoSuivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
