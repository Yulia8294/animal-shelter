import { ClientOnly } from "@/components/client-only";
import { PetCard } from "@/components/pet-card";
import { AppText } from "@/content/texts";
import { fetchDogs } from "@/repository/api";

const CatalogPage = async () => {
  const pageContent = AppText.CatalogPage;
  const catalog = await fetchDogs();

  return (
    <div className="flex flex-col justify-stretch gap-15 container w-full">
      <h1 className="page-title">{pageContent.title}</h1>
      {/* grid-cols-2 md:grid-cols-3 lg:grid-cols-4  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {catalog.map((pet, index) => (
          <ClientOnly key={index}>
            <PetCard data={pet} />
          </ClientOnly>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
