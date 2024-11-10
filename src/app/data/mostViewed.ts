// propertiesData.ts

export interface Property {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: 'New Developments' | 'Used Properties' | 'Rentals';
}

export const properties: Property[] = [
  {
    title: 'Minimalist House',
    description: 'Description of the house you are offering',
    price: '$100,000',
    imageUrl: '/property.svg',
    bedrooms: 3,
    bathrooms: 2,
    area: '72 m2',
    type: 'New Developments',
  },
  {
    title: 'Modern House',
    description: 'Description of the house you are offering',
    price: '$140,000',
    imageUrl: '/property.svg',
    bedrooms: 3,
    bathrooms: 3,
    area: '75 m2',
    type: 'Used Properties',
  },
  {
    title: 'Industrial House',
    description: 'Description of the house you are offering',
    price: '$80,000',
    imageUrl: '/property.svg',
    bedrooms: 2,
    bathrooms: 1,
    area: '60 m2',
    type: 'Rentals',
  },
  {
    title: 'Family House',
    description: 'Spacious family home with a large garden',
    price: '$200,000',
    imageUrl: '/property.svg',
    bedrooms: 4,
    bathrooms: 3,
    area: '120 m2',
    type: 'New Developments',
  },
  {
    title: 'City Apartment',
    description: 'Modern apartment in the heart of the city',
    price: '$90,000',
    imageUrl: '/property.svg',
    bedrooms: 2,
    bathrooms: 1,
    area: '50 m2',
    type: 'Rentals',
  },
  {
    title: 'Luxury Villa',
    description: 'A luxurious villa with stunning views',
    price: '$500,000',
    imageUrl: '/property.svg',
    bedrooms: 5,
    bathrooms: 4,
    area: '200 m2',
    type: 'Used Properties',
  },
];
