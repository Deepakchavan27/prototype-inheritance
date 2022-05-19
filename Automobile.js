const TATA = {
    wheels: 4,
    engine: "4 Stroke",
    modelName: "Indica",
    type: "Sedan",

}

const Scorpio = Object.create(TATA);
//console.log(Scorpio)


function Model(e, t) {
    this.modelName = e;
    this.type = t;
    this.wheels = 4;
    this.engine = "4 Stroke";
}
Model.prototype.com = function () {
    console.log(this.modelName);
};
let a1 = new Model("Harrier", "SUV")
let a2 = new Model("Safari", "SUV")
let a3 = new Model("Altroz", "Hatchback")
let a4 = new Model("Zest", "Sedan")
let a5 = new Model("Tiago", "Hatchback")
let a6 = new Model("Tigor", "Sedan")
let a7 = new Model("Indigo", "Sedan")
let a8 = new Model("Nexon", "SUV")
let a9 = new Model("Nexon EV", "SUV")

console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9);


