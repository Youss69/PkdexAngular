// la syntaxe pour créer une variable en ts
// let/const maVariable: typeVariable = '';
var UnSuperNombre = 42;
// Typescript supporte les 
var pokemons = [{ name: 'evee', type: 'normal', number: 133 }];
// pokemons.push('test')
// Ne jamais utilisé le mot clé "any"
var jeChangeDeType = 456;
jeChangeDeType = 'j\'ai change de type en ts';
// On peut utiliser une union de type
// pour typer les vaiables qui peuvent
// potentiellement avoi des types differents
var growlithe = 'string';
// Valeurs enumerees
var PokemonStatus;
(function (PokemonStatus) {
    PokemonStatus[PokemonStatus["Paralysed"] = 0] = "Paralysed";
    PokemonStatus[PokemonStatus["Asleep"] = 1] = "Asleep";
    PokemonStatus[PokemonStatus["Frozen"] = 2] = "Frozen";
    PokemonStatus[PokemonStatus["Burned"] = 3] = "Burned";
    PokemonStatus[PokemonStatus["KO"] = 4] = "KO";
    PokemonStatus[PokemonStatus["Poisoned"] = 5] = "Poisoned";
})(PokemonStatus || (PokemonStatus = {}));
// Grâce a TS on peut (doit) définir un type de retour
// pour nos fonctions
function startBattle(pka, pkb, pbc) {
    return 0;
}
// Si la fonction ne retourne rien, on peut utiliser le mot clé `void`
function addPokemons(pokemon) {
}
var Pony = /** @class */ (function () {
    function Pony() {
    }
    Pony.prototype.run = function (kilometers) {
        console.log("j'ai couru ".concat(kilometers, "km"));
    };
    return Pony;
}());
