export interface PetDetails {
  id: string;
  name: string;
  mainImage: string;
  gender: string;
  age: number;
  traitsIds: string[];
  story?: string;
  media?: string;
  images: string[];
}

export interface PetTrait {
  id: string;
  title: string;
  icon?: string;
}
