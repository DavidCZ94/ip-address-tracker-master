import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLocationDetailsComponent } from './ip-location-details.component';

describe('IpLocationDetailsComponent', () => {
  let component: IpLocationDetailsComponent;
  let fixture: ComponentFixture<IpLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpLocationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
