import { LeftArrowIcon, RightArrowIcon } from "@/components/icons";
import { fetchItemBySlug } from "@/repository/api";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import PetDetailsView from "../../../components/details";

interface ComponentProps {
  params: {
    slug: string;
  };
}

const PetDetailsPage = async ({ params }: ComponentProps) => {
  const { slug } = params;

  const pet = await fetchItemBySlug(slug);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">

        <Button
          as={Link}
          className="px-5 py-7 text-lg rounded-full font-semibold text-white bg-accentGreen-400"
          href={"/catalog"}
          startContent={<LeftArrowIcon fill="white" />}
          variant="flat"
        >
          В каталог
        </Button>

        <Button
          as={Link}
          className="px-5 py-7 text-lg rounded-full font-semibold text-white bg-accentGreen-500"
          href={"/catalog"}
          endContent={<RightArrowIcon fill="white" />}
          variant="flat"
        >
          Следующий песик
        </Button>
      </div>

      <PetDetailsView pet={pet} />
    </div>
  );
};

export default PetDetailsPage;
