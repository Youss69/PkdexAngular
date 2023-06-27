// la syntaxe pour créer une variable en ts

// let/const maVariable: typeVariable = '';
const UnSuperNombre: number = 42;

//const pikachu: Pokemon = new Pokemon();

type Pokemon = {
    name: string,
    type: string,
    number: number
}

// Typescript supporte les 
const pokemons: Array<Pokemon> = [{name: 'evee', type: 'normal', number: 133}]

// pokemons.push('test')

// Ne jamais utilisé le mot clé "any"
let jeChangeDeType: any = 456;

jeChangeDeType = 'j\'ai change de type en ts'


// On peut utiliser une union de type
// pour typer les vaiables qui peuvent
// potentiellement avoi des types differents
let growlithe : Pokemon | string = 'string';



// Valeurs enumerees
enum PokemonStatus {
    Paralysed,
    Asleep,
    Frozen,
    Burned,
    KO,
    Poisoned
}

// Grâce a TS on peut (doit) définir un type de retour
// pour nos fonctions
function startBattle(pka: Pokemon, pkb: Pokemon, pbc?: Pokemon): number {
    return 0;
}
// Si la fonction ne retourne rien, on peut utiliser le mot clé `void`



function addPokemons(pokemon: {type: string, name: string, num: number}): void
{

}

interface Poke {
    //... liste
}


interface CanRun {
    run(kilometers: number): void;
}

class Pony implements CanRun {
    run(kilometers: number): void {
        console.log(`j'ai couru ${kilometers}km`)
    }
}



