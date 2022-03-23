import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBlockComponent } from './head-block.component';

describe('HeadBlockComponent', () => {
  let component: HeadBlockComponent;
  let fixture: ComponentFixture<HeadBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
