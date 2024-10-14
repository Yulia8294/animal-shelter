"use client";

import { PetDetails } from "@/app/models";
import animationData from "@/public/assets/animations/heart.json";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useLocalStorage } from "@uidotdev/usehooks";
import Lottie from "lottie-react";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";

interface ComponentProps {
  data: PetDetails;
  hoverEffect?: boolean;
  detailsOnClick?: boolean;
  showFavoriteIcon?: boolean;
}

export const PetCard: FC<ComponentProps> = ({
  data,
  hoverEffect = true,
  detailsOnClick = true,
  showFavoriteIcon = true,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const animation = useRef<any>(null);

  useEffect(() => {
    if (showFavoriteIcon) {
      if (animation.current) {
        const initialFrame = isLiked ? 75 : 129;

        animation.current.goToAndStop(initialFrame, true);
      }
    }
  }, []);

  const handleLikeDislike = () => {
    if (isLiked) {
      animation.current?.goToAndPlay(76, true);
    } else {
      animation.current?.goToAndPlay(1, true);
    }
    setIsLiked((prev) => !prev);
  };

  return (
    <Card
      as={Link}
      href={"/catalog/" + data.id}
      isFooterBlurred
      radius="md"
      className={`rotate-0 scale-1 ${hoverEffect ? "hover:rotate-2 hover:scale-[1.12] hover:z-10" : ""} ${detailsOnClick ? "cursor-pointer" : "pointer-events-none"} aspect-[3/4]`}
    >
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover rounded-none rounded-t-lg"
        src={data.mainImage}
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
            {showFavoriteIcon && (
              <Button
                className="bg-transparent"
                isIconOnly
                aria-label="Like"
                onClick={(event) => {
                  event.preventDefault();
                  handleLikeDislike();
                }}
              >
                <Lottie
                  lottieRef={animation}
                  loop={false}
                  autoplay={false}
                  animationData={animationData}
                />
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
