import { LeftArrowIcon } from "@/components/icons";
import { fetchDogBySlug } from "@/repository/api";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { FC } from "react";
import PetDetailsView from "../../../components/details";

interface ComponentProps {
  params: {
    slug: string;
  };
}

const PetDetails: FC<ComponentProps> = async ({ params }) => {
  const { slug } = params;

  const pet = await fetchDogBySlug(slug);

  return (
    <div className="flex-col gap-10">
      <Button
        as={Link}
        className="px-5 py-7 text-lg ml-8 rounded-full font-semibold text-white bg-accentYellow-500"
        href={"/catalog"}
        startContent={<LeftArrowIcon fill="white" />}
        variant="flat"
      >
        В каталог
      </Button>

      <PetDetailsView pet={pet} />
    </div>
  );
};

export default PetDetails;
