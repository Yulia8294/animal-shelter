"use client";

import { PetDetails } from "@/app/models";
import { Carousel } from "primereact/carousel";
import React, { FC } from "react";
import { PetCard } from "./pet-card";

interface ComponentProps {
  items: PetDetails[];
}

const PetsCarousel: FC<ComponentProps> = ({ items }) => {
  const itemTemplate = (item: PetDetails) => {
    return (
      <div className="p-5">
        <PetCard
          detailsOnClick={false}
          hoverEffect={false}
          data={item}
          showFavoriteIcon={false}
        />
      </div>
    );
  };

  return (
    <Carousel
      value={items}
      circular
      numVisible={4}
      numScroll={1}
      showNavigators={false}
      autoplayInterval={3000}
      showIndicators={false}
      itemTemplate={itemTemplate}
    />
  );
};

export default PetsCarousel;
