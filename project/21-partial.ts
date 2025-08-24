// I love Afghanistan ❤️
// I love Hendra  💙

// This is an example of interface extension in TypeScript
interface Person {
  name: string;
  age: number;
  isMarried?: boolean;
}

const person: Partial<Person> = {
  name: "Imran Malakzai",
  age: 19,
  isMarried: false,
};
