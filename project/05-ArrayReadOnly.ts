

// We use Readonly type when we don'w want to change then content

const names:readonly string [] = ["Imran","Malalzkai"]
 
//Now if we add the push it will complain

names.push("Hellos");

// If we don't specify the readonly type it will not complain
const fruit :string [] = ["Imran Malakzais"]

fruit.push("Hello")