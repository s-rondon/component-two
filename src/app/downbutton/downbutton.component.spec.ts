import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownbuttonComponent } from './downbutton.component';

describe('DownbuttonComponent', () => {
  let component: DownbuttonComponent;
  let fixture: ComponentFixture<DownbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
