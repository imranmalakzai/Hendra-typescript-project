//Type Aliases allow defining types with a custom name (an Alias).

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const toyora:Car = {
  year:2021,
  type:"honda",
  model:"22"
}