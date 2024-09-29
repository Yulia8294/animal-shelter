import { PetDetails } from "@/app/models";

export const PETS_CATALOG: PetDetails[] = [
  {
    id: "1",
    name: "Рик",
    mainImage: "/assets/Рик.png",
    age: 5,
    traitsIds: ["1", "3", "5"],
    gender: "мальчик",
    images: [
      "/assets/Рик.png",
      "/assets/Тея.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
      "/assets/Джек.png",
    ],
    story:
      "Сьюзі наче сонечко) Маленька точно знає, як підкорити серце кожного! Їі погляд не може залишити без уваги, бо так і хочеться взяти її на ручки і разом покоряти Всесвіт! Вона буде чудовим другом, який ніколи не дасть Вам сумувати та весь день лежати на дивані) Активні прогулянки, цікаві подорожі - це про нашу милу Сьюзі!",
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
