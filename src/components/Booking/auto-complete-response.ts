// types.ts

export interface Context {
  country: {
    id: string;
    name: string;
    country_code: string;
    country_code_alpha_3: string;
  };
  region: {
    id: string;
    name: string;
    region_code: string;
    region_code_full: string;
  };
  postcode: {
    id: string;
    name: string;
  };
  district: {
    id: string;
    name: string;
  };
  place: {
    id: string;
    name: string;
  };
  neighborhood: {
    id: string;
    name: string;
  };
  street: {
    id: string;
    name: string;
  };
}

export interface Suggestion {
  name: string;
  mapbox_id: string;
  feature_type: string;
  place_formatted: string;
  context: Context;
  language: string;
  maki: string;
  metadata: Record<string, any>;
  distance: number;
}

export interface Response {
  suggestions: Suggestion[];
}
