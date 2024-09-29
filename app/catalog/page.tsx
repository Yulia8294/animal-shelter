import { PetCard } from "@/components/pet-card";
import { title } from "@/components/primitives";
import { PETS_CATALOG } from "@/content/pets-catalog";

export default function CatalogPage() {
  return (
    <div className="flex flex-col justify-stretch gap-20 container w-full">
      <h1 className={title()}>Все хвостики приюта</h1>
      {/* grid-cols-2 md:grid-cols-3 lg:grid-cols-4  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {[...PETS_CATALOG, ...PETS_CATALOG, ...PETS_CATALOG].map(
          (pet, index) => (
            <PetCard key={index} data={pet} />
          ),
        )}
      </div>
    </div>
  );
}
