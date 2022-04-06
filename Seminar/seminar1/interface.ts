interface Sehoon {
  name: string;
  age: number;
  address?: string;
}

const sehoon: Sehoon = {
  name: "세훈",
  age: 10,
};

const sehoons: Sehoon[] = [
  {
    name: "세훈1",
    age: 1,
  },
  {
    name: "세훈2",
    age: 2,
  },
  {
    name: "세훈3",
    age: 3,
  },
  {
    name: "세훈4",
    age: 4,
  },
];

console.log(sehoon);
console.log(sehoons);
