// Object In Typescript

const Employess: {
  name:string,
  age:number,
  isOverage:boolean
}  = {
  name:"Imran Malakzai",
  age:21,
  isOverage:false
}

// Country In Object Type
let country:{
  name:string,
  history:number,
  isIndepended:Boolean,

};

country  = {history:4900,isIndepended:true,name:"Afghanistan"}


country.history = 5000;


const province:{name:string,history?:number} = {name:"Afghanistan"}