"use client";

import { PetDetails, PetTrait } from "@/app/models";
import { PET_TRAITS } from "@/content/pet-traits";
import { PETS_CATALOG } from "@/content/pets-catalog";
import { Chip } from "primereact/chip";
import { Galleria } from "primereact/galleria";
import { FC, useMemo } from "react";

interface ComponentProps {
  pet: PetDetails;
}

const PetDetailsView: FC<ComponentProps> = ({ pet = PETS_CATALOG[0] }) => {
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
      <img
        className="aspect-[0.8] object-cover rounded-3xl"
        src={item}
        alt="123"
        style={{ width: "100%" }}
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
    <section className="flex-grow flex flex-col gap-5">
      <div>
        <h1>{pet.name}</h1>
        <h4>
          {pet.gender}, {pet.age}
        </h4>
      </div>

      <div>
        <h3>Обо мне:</h3>

        <div className="flex flex-row flex-wrap gap-2">
          {traits.map((t) => (
            <Chip key={t.id} color="primary">
              {t.title}
            </Chip>
          ))}
        </div>

        <p>{pet.story}</p>
      </div>
    </section>
  );

  return (
    <div className="flex gap-8">
      <Galleria
        className="min-w-[300px] max-w-[40%]"
        value={pet.images}
        responsiveOptions={responsiveOptions}
        numVisible={3}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />

      {petInfoTemplate}
    </div>
  );
};

export default PetDetailsView;
