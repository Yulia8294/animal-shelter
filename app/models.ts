export interface PetDetails {
  id: string;
  slug: string;
  name: string;
  mainImage?: string;
  gender: Gender;
  age?: number;
  traits?: string;
  traitsArray: string[];
  story?: string;
  media?: string;
  images?: string[];
  status?: PetStatus; 
  enabled?: boolean;
}

export enum PetStatus {
  HOME = 'home',
  SHELTER = 'shelter',
}

export interface PetTrait {
  id: string;
  title: string;
  icon?: string;
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export const titleForGender: Record<Gender, string> = {
  [Gender.FEMALE]: "Девочка",
  [Gender.MALE]: "Мальчик",
};
