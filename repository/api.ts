import { PetDetails, PetStatus } from "@/app/models";

export async function fetchCatalog(
  status?: PetStatus[],
  numberOfItems?: number,
): Promise<PetDetails[]> {
  console.log("--------PATH", `${BASE_URL}/assets/data/database.json`);

  try {
    const response: PetDetails[] = await fetch(
      `${BASE_URL}/assets/data/database.json`,
      { method: "get", cache: "no-cache" },
    ).then((result) => result.json());

    let result = response;

    if (status) {
      result = result.filter(
        (item) => item.status && status.includes(item.status),
      );
    }

    if (numberOfItems) {
      result = result.slice(0, numberOfItems);
    }

    result.forEach((item) => {
      item.traitsArray = item.traits?.split(",") ?? [];
    });

    result = await populatePhotos(result);

    return result;
  } catch (error: any) {
    console.log("------- ERROR:", error);
    throw new Error("Not found");
  }
}

export async function fetchItemBySlug(slug: string): Promise<PetDetails> {
  try {
    const allPets: PetDetails[] = await fetch(
      `${BASE_URL}/assets/data/database.json`,
      { method: "get" },
    ).then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("Failed to fetch item");
      }
    });

    let pet = allPets.find((pet) => pet.slug === slug);

    if (pet) {
      pet = await populatePhotosForItem(pet);
    } else {
      throw new Error("Not found");
    }

    return pet;
  } catch (error: any) {
    console.log("------- ERROR:", error);
    throw new Error("Not found");
  }
}

async function populatePhotos(pets: PetDetails[]): Promise<PetDetails[]> {
  // Iterate over each pet to add images dynamically
  await Promise.allSettled(pets.map(async (pet) => populatePhotosForItem(pet)));

  return pets; // Return the updated list of pets
}

async function populatePhotosForItem(pet: PetDetails): Promise<PetDetails> {
  try {
    console.log("Fetching for", pet.slug);

    const imageResponse = await fetch(`${BASE_URL}/api/media/${pet.slug}`);
    const imageUrls: string[] = await imageResponse.json(); // Get the list of image URLs

    pet.images = imageUrls; // Assign the URLs to the pet's `images` property
    pet.mainImage = imageUrls[0];
  } catch (error) {
    pet.images = [];
  }

  return pet;
}

export const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
