import { fetchDogBySlug } from "@/repository/api";
import React, { FC } from "react";
import PetDetailsView from "../../../components/details";

interface ComponentProps {
  params: {
    slug: string;
  };
}

const PetDetails: FC<ComponentProps> = async ({ params }) => {
  const { slug } = params;

  console.log('SLUG', slug)

  const pet = await fetchDogBySlug(slug);

  return <PetDetailsView pet={pet} />;
};

export default PetDetails;
