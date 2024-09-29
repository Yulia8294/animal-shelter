import { PetDetails } from "@/app/models";

export const PETS_CATALOG: PetDetails[] = [
  {
    id: "1",
    name: "Рик",
    mainImage: "/assets/Рик.png",
    age: 5,
    traitsIds: ["1", "3", "2"],
    gender: "мальчик",
    images: [
      "/assets/Рик.png",
      "/assets/Тея.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
    ],
    story:
      "Рэй — типичный семейный пёс: спокойный, ласковый, скромный и не навязчивый. А какой красивый! Его белый нежный окрас полностью соответствует его характеру. Он аккуратно гуляет на поводке, не спешит и не тянет. Подойдет в семью как к молодым, так и к людям старшего возраста, главное, чтобы ваш темперамент совпадал. Немного недоверчив к незнакомцам, но если вы дадите ему шанс и чуть-чуть времени, точно не пожалеете.",
  },
  {
    id: "2",
    name: "Тея",
    mainImage: "/assets/Тея.png",
    age: 2,
    traitsIds: ["4", "6"],
    gender: "девочка",
    images: [
      "/assets/Рик.png",
      "/assets/Тея.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
    ],
  },
  {
    id: "3",
    name: "Джек",
    mainImage: "/assets/Джек.png",
    age: 7,
    traitsIds: ["1", "3", "5"],
    gender: "мальчик",
    images: [
      "/assets/Рик.png",
      "/assets/Тея.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
    ],
  },
];
