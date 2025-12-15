interface Pizza {
    name: string;
    toppings: Readonly<string[]>;
}

const pizza: Readonly<Pizza> = {
    name: "Pepperoni",
    toppings: ["pepperoni"],
}

// pizza.name = "Hawaiana";
// pizza.toppings.push("piña");
