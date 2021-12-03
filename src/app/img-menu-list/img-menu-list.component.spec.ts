import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMenuListComponent } from './img-menu-list.component';

describe('ImgMenuListComponent', () => {
  let component: ImgMenuListComponent;
  let fixture: ComponentFixture<ImgMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
