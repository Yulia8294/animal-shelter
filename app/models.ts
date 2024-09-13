export interface PetDetails {
  id: string;
  name: string;
  mainImage: string;
  age: number;
  traitsIds: string[];
  story?: string;
  media?: string;
}

export interface PetTrait {
  id: string;
  title: string;
  icon?: string;
}
