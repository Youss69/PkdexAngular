import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: `
  `
})
export class PokemonComponent {
  @Input() pokemon = '';
  @Output() pokemonSelected = new EventEmitter<string>();

  selectPokemon() {
    this.pokemonSelected.emit();
  }
}
