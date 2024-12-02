export interface PetDetails {
  id: string;
  slug: string;
  name: string;
  mainImage?: string;
  gender: string;
  age: number;
  traits?: string;
  traitsArray: string[];
  story?: string;
  media?: string;
  images?: string[];
}

export interface PetTrait {
  id: string;
  title: string;
  icon?: string;
}
