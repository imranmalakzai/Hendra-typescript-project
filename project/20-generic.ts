// Generic type in typescript

function YouAge<T>(value: T) {
  console.log(value);
}

YouAge<number>(19);
YouAge<string>("Imran Malakzai");
YouAge<boolean>(true);
YouAge<object>({ name: "Imran", age: 19 });
YouAge<any>(["Imran", 19, true]);
YouAge<null>(null);
