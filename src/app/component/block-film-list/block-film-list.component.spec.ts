import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFilmListComponent } from './block-film-list.component';

describe('BlockFilmComponent', () => {
  let component: BlockFilmListComponent;
  let fixture: ComponentFixture<BlockFilmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockFilmListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
