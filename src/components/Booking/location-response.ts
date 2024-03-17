interface Coordinates {
  latitude: number;
  longitude: number;
  accuracy: string;
}

interface FeatureProperties {
  name: string;
  mapbox_id: string;
  feature_type: string;
  place_formatted: string;
  context: {
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
    locality: {
      id: string;
      name: string;
    };
    street: {
      id: string;
      name: string;
    };
  };
  coordinates: Coordinates;
  language: string;
  maki: string;
  metadata: Record<string, any>;
}

interface Feature {
  type: string;
  geometry: {
    coordinates: [number, number];
    type: string;
  };
  properties: FeatureProperties;
}

export interface FeatureCollection {
  type: string;
  features: Feature[];
  attribution: string;
}
