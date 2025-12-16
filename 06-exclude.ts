
type Characters = "Iron Man" | "Spiderman" | "Thor" | "Thanos" | "Loki";

type Avengers = Exclude<Characters, "Thanos" | "Loki">;
type Villains = Exclude<Characters, Avengers>;

const hero: Avengers = "Iron Man";
const villain: Villains = "Thanos";


// Example 2
type Animal =
    | { kind: "dog", bark: string }
    | { kind: "cat", meow: string }
    | { kind: "fish", swimSpeed: number };


type NoCatAllowed = Exclude<Animal, { kind: "cat" }>;

const animal: NoCatAllowed = { kind: "dog", bark: "Woof" };

