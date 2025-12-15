interface Avenger {
    name: string;
    power: number;
    weapon: string;
    alive: boolean;
}

type AvengerWithoutSpoiler = Omit<Avenger, "alive">;

const ironman: AvengerWithoutSpoiler = {
    name: "Ironman",
    power: 100,
    weapon: "Armor",
    // alive: false
}

type AvengerBasicInfo = Omit<Avenger, "alive" | "weapon">;

const spiderman: AvengerBasicInfo = {
    name: "Spiderman",
    power: 80
}
