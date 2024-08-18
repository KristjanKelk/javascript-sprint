let someUndefined
const obj = {
   someBool : Boolean(),
   someNumber : Number(2),
   someUndefined,
   someString : String("String"),

};
Object.freeze(obj);