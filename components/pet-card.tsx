import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FC } from "react";

import { HeartIcon } from "./icons";

interface ComponentProps {
  data: PetCard;
}

export interface PetCard {
  name: string;
  image: string;
  age: number;
}

export const dogCards: PetCard[] = [
  {
    name: "Тея",
    image: "/assets/Тея.png",
    age: 5,
  },
  {
    name: "Джек",
    image: "/assets/Джек.png",
    age: 7,
  },
  {
    name: "Рик",
    image: "/assets/Рик.png",
    age: 13,
  },
  // {
  //   name: "Овсянка",
  //   image: "/assets/Овсянкка.png",
  // },
];

export const PetCard: FC<ComponentProps> = ({ data }) => {
  return (
    <Card
      isFooterBlurred
      radius="md"
      className="rotate-0 scale-1 hover:rotate-2 hover:scale-[1.12] hover:z-10 cursor-pointer aspect-[3/4]"
    >
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover rounded-none rounded-t-lg"
        src={data.image}
      />
      <CardFooter className="absolute bottom-0 rounded-t-xl md:rounded-[100%_0%_100%_0%_/_39%_100%_0%_61%] bg-black/50 p-4 md:p-5 md:pt-10 lg:p-6 lg:pt-10 transition-all">
        <div className="flex flex-col justify-start gap-1 w-full">
          <div className="flex gap-2 justify-between items-end">
            <div className="flex flex-col justify-start gap-1">
              <div className="text-start text-md md:text-lg lg:text-2xl text-white font-semibold">
                {data.name}
              </div>
              <div className="text-start text-md md:text-lg lg:text-2xl text-white">
                {data.age} лет
              </div>
            </div>

            <Button isIconOnly color="warning" aria-label="Like">
              <HeartIcon fill="none" stroke="yellow" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
