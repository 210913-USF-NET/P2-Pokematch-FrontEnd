import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMatchComponent } from './get-match.component';

describe('GetMatchComponent', () => {
  let component: GetMatchComponent;
  let fixture: ComponentFixture<GetMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
