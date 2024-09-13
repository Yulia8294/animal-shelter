import { dogCards, PetCard } from "@/components/pet-card";
import { title } from "@/components/primitives";

export default function CatalogPage() {
  return (
    <div className="flex flex-col justify-stretch gap-20 container w-full">
      <h1 className={title()}>Все хвостики приюта</h1>
      {/* grid-cols-2 md:grid-cols-3 lg:grid-cols-4  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {[...dogCards, ...dogCards, ...dogCards].map((pet, index) => (
          <PetCard key={index} data={pet} />
        ))}
      </div>
    </div>
  );
}
