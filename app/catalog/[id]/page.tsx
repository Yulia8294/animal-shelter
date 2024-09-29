"use client";

import { PetDetails, PetTrait } from "@/app/models";
import { PET_TRAITS } from "@/content/pet-traits";
import { PETS_CATALOG } from "@/content/pets-catalog";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import _ from "lodash";
import Link from "next/link";
import { Galleria } from "primereact/galleria";
import { FC, useMemo, useRef } from "react";

interface ComponentProps {
  pet: PetDetails;
}

const PetDetailsView: FC<ComponentProps> = ({ pet = PETS_CATALOG[0] }) => {
  const galleria = useRef(null);

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item: any) => {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img
        className="aspect-[0.8] object-cover rounded-3xl"
        src={item}
        alt="123"
        onClick={() => {
          galleria.current?.show();
        }}
      />
    );
  };

  const thumbnailTemplate = (item: any) => {
    return (
      <img
        className="aspect-square rounded-2xl object-cover"
        src={item}
        alt="123"
      />
    );
  };

  const traits = useMemo<PetTrait[]>(() => {
    return pet.traitsIds.map((trait) => {
      return PET_TRAITS.find((t) => t.id === trait)!;
    });
  }, [pet]);

  const petInfoTemplate = (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-semibold">{pet.name}</h1>
        <h4>
          {pet.gender}, {pet.age}
        </h4>

        <div className="flex flex-row flex-wrap gap-2 mt-6">
          {traits.map((t) => (
            <Chip
              key={t.id}
              size="lg"
              color="primary"
              className={`p-6 rounded-lg ${_.sample(gradients)} [transition:0.5s] [background-size:200%_auto] hover:bg-[right_center]`}
            >
              <span className="text-white font-semibold">{t.title}</span>
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Обо мне:</h3>
        <p>{pet.story}</p>
      </div>
    </div>
  );

  const fsitemTemplate = (item: any) => {
    return (
      <img
        src={item}
        alt={item}
        style={{ width: "100%", maxHeight: "60%", display: "block" }}
      />
    );
  };

  const fullScreenGalleryTemplate = (
    <Galleria
      ref={galleria}
      value={pet.images}
      numVisible={9}
      style={{ maxWidth: "50%" }}
      circular
      fullScreen
      showItemNavigators
      item={fsitemTemplate}
      thumbnail={thumbnailTemplate}
    />
  );

  return (
    <div className="flex flex-col md:flex-row md:justify-start gap-8 container bg-accentYellow-200/10 shadow-2xl p-9 rounded-3xl">
      {fullScreenGalleryTemplate}

      <Galleria
        className="flex self-center md:self-start w-full md:w-[45%] max-w-[500px]"
        value={pet.images}
        responsiveOptions={responsiveOptions}
        numVisible={3}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />

      <div className="flex-1 flex-col">
        {petInfoTemplate}

        <Button
          as={Link}
          className="px-16 py-10 mt-16 text-[1.5rem] rounded-full font-semibold text-white bg-accentYellow-500"
          href={"/catalog"}
          variant="flat"
          size="lg"
        >
          Приютить
        </Button>
      </div>
    </div>
  );
};

export default PetDetailsView;

const gradients = ["gradient-1"];
