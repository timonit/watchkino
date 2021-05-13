import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFilmComponent } from './block-film.component';

describe('BlockFilmComponent', () => {
  let component: BlockFilmComponent;
  let fixture: ComponentFixture<BlockFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
