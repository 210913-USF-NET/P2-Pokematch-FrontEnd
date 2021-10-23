import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonselectionComponent } from './pokemonselection.component';

describe('PokemonselectionComponent', () => {
  let component: PokemonselectionComponent;
  let fixture: ComponentFixture<PokemonselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
