interface PropertyType {
  id: number;
  name: string;
}

const propertyTypes: PropertyType[] = [
  { id: 1, name: 'Small House' },
  { id: 2, name: 'Medium House' },
  { id: 3, name: 'Large House' },
  { id: 4, name: 'Apartment' },
  { id: 5, name: 'Studio' },
];

interface Location {
  id: number;
  name: string;
}

const locations: Location[] = [
  { id: 1, name: 'Lahore' },
  { id: 2, name: 'Karachi' },
  { id: 3, name: 'Islamabad' },
  { id: 4, name: 'Rawalpindi' },
  { id: 5, name: 'Faisalabad' },
];

interface PriceRange {
  id: number;
  price: string;
}

const priceRanges: PriceRange[] = [
  { id: 1, price: '100000' },
  { id: 2, price: '200000' },
  { id: 3, price: '300000' },
  { id: 4, price: '400000' },
  { id: 5, price: '500000' },
];

interface AdditionalFilter {
  id: number;
  name: string;
}

const additionalFilters: AdditionalFilter[] = [
  { id: 1, name: 'Swimming Pool' },
  { id: 2, name: 'Garage' },
  { id: 3, name: 'Garden' },
  { id: 4, name: 'Furnished' },
  { id: 5, name: 'Balcony' },
];

export const filters = {
  propertyTypes,
  locations,
  priceRanges,
  additionalFilters,
};
