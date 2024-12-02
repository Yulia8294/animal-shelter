import { PetDetails } from "@/app/models";

export async function fetchDogs(): Promise<PetDetails[]> {
  const response: PetDetails[] = await fetch(
    `${process.env.URL}/assets/data/database.json`,
    { method: "get" },
  ).then((result) => result.json());

  response.forEach((item) => {
    item.traitsArray = item.traits?.split(",") ?? [];
  });

  // Iterate over each pet to add images dynamically
  await Promise.allSettled(
    response.map(async (pet) => {
      try {
        // Fetch images for the current pet using the dynamic API route
        console.log("Fetching for", pet.slug);

        const imageResponse = await fetch(
          `${process.env.URL}/api/media/${pet.slug}`,
        );
        const imageUrls: string[] = await imageResponse.json(); // Get the list of image URLs

        pet.images = imageUrls; // Assign the URLs to the pet's `images` property
        pet.mainImage = imageUrls[0];
        console.log("Fetched success", imageResponse.json());
      } catch (error) {
        pet.images = [];
        console.error(`Error fetching images for ${pet.slug}`);
      }
    }),
  );

  return response; // Return the updated list of pets
}

export async function fetchDogBySlug(slug: string): Promise<PetDetails> {
  const allDogs: PetDetails[] = await fetch(
    `${process.env.URL}/assets/data/database.json`,
    { method: "get" },
  ).then((result) => result.json());

  const dog = allDogs.find((dog) => dog.slug === slug);

  if (dog) {
    try {
      const imageResponse = await fetch(`${process.env.URL}/api/media/${slug}`);
      const imageUrls: string[] = await imageResponse.json();

      dog.images = imageUrls;
      dog.mainImage = imageUrls[0];
    } catch {
      dog.images = [];
      dog.mainImage = undefined;
    }
  } else {
    throw new Error("Not found");
  }

  return dog;
}
