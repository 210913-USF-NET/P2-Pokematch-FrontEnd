import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonminigameComponent } from './pokemonminigame.component';

describe('PokemonminigameComponent', () => {
  let component: PokemonminigameComponent;
  let fixture: ComponentFixture<PokemonminigameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonminigameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonminigameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
