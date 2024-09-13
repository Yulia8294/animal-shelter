import { PetDetails } from "@/app/models";

export const PETS_CATALOG: PetDetails[] = [
  {
    id: "1",
    name: "Рик",
    mainImage: "/assets/Рик.png",
    age: 5,
    traitsIds: ["1", "3", "5"],
  },
  {
    id: "2",
    name: "Тея",
    mainImage: "/assets/Тея.png",
    age: 2,
    traitsIds: ["4", "6"],
  },
  {
    id: "3",
    name: "Джек",
    mainImage: "/assets/Джек.png",
    age: 7,
    traitsIds: ["1", "3", "5"],
  },
];
