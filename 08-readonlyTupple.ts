// In read only tupple it act like read only Array

let names:readonly [string,string];
names = ["Imran","khan"]

// if we push somthing in This it will complaine
names.push("Imran")