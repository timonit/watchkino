import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagrahComponent } from './paragrah.component';

describe('ParagrahComponent', () => {
  let component: ParagrahComponent;
  let fixture: ComponentFixture<ParagrahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagrahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagrahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
