
type Pokemon =
    | { type: "pikachu", thunderLevel: number }
    | { type: "charizard", fireLevel: number }
    | { type: "squirtle", waterLevel: number };


// op1
// type waterPokemon = Extract<Pokemon, { type: "squirtle" }>;

type waterPokemon = Extract<Pokemon, { waterLevel: number }>;

const waterPokemon: waterPokemon = { type: "squirtle", waterLevel: 10 };