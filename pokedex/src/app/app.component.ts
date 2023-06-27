import { Component } from '@angular/core';

@Component({
  selector: 'px-root', //<px-root0<></px-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  numberOfPokemon = 1015;
  pokemons: Array<any> =[];
  somePokemon = {name: 'bulbizarre', type: 'plante'}

  NgOnInit(): void {
    // les variables @input ne sont normalement plus 'undefined'
  }
  displayPokemon(): void {
    this.pokemons = [
      {name: 'bulbizarre'},
      {name: 'carapuce'},
      {name: 'salameche'},
    ]
  }
}
