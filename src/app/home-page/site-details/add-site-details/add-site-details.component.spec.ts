import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteDetailsComponent } from './add-site-details.component';

describe('AddSiteDetailsComponent', () => {
  let component: AddSiteDetailsComponent;
  let fixture: ComponentFixture<AddSiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
