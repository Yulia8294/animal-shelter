"use client";

import { PetDetails } from "@/app/models";
import { Carousel } from "primereact/carousel";
import React, { FC } from "react";
import { PetCard } from "./pet-card";

interface ComponentProps {
  items: PetDetails[];
}

const PetsCarousel: FC<ComponentProps> = ({ items }) => {

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1250px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1000px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

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
      responsiveOptions={responsiveOptions}
      autoplayInterval={2000}
      showIndicators={false}
      itemTemplate={itemTemplate}
    />
  );
};

export default PetsCarousel;
