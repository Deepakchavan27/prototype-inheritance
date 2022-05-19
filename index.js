// const flipkart = {
//     brand : "Nike",
//     logo : "URL",
//     seller : "flipkart",
// }

//  let s1 = Object.create(flipkart)
// console.log(s1)

// function Product(type){
//     this.type = type;
//     this.logo = "URL";
//     this.seller = "amazon";
// }

// Product.prototype.discount = function(){
//     console.log("50% discount");
// }
// let s2 = new Product("shoe");
// let p1 = new Product("sneaker")
// console.log(p1)
// s2.discount();

// function myArray() {
//     Object.defineProperty(this, "length", {
//       value: 0,
//       writable: true,
//       enumerable: false,
//     });

//     this.length = arguments.length;

//     for (let i = 0; i < arguments.length; i++) {
//       this[i] = arguments[i];
//     }
//   }


// let arr = new myArray(1, 2, 3);
// console.log(Object.values(arr))

// myArray.prototype.पुश = function (value) {
//   this[this.length] = value;
//   this.length++;
// };

// myArray.prototype.pop = function(){
//     delete this[this.length-1];
//     this.lenght--;
// };


// arr.pop();

// arr.पुश(4);


function myArray() {
    this.length = arguments.length;

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
}
let arr4 = new myArray(1, 2, 3, 4);
//console.log(Object.values(arr))
myArray.prototype.पुश = function (value) {
    this[this.length] = value;
    this.length++;
};
myArray.prototype.हटाओ = function () {
    delete this[this.length - 1];
    this.length--;
};

myArray.prototype.छापो = function () {
    console.log(Object.values(this));
};
myArray.prototype.उल्टाछापो = function(){
    for(let i = this.length; i>=0; i--){
        console.log(this[i])
    }
}

myArray.prototype.लंबाई = function(){
    this.length;    
}
arr4.हटाओ();
console.log(arr4)


arr4.पुश(7);
//console.log(arr4)

arr4.छापो();
console.log(arr4)

arr4.उल्टाछापो();
console.log(arr4)

arr4.लंबाई();
console.log(arr4)



