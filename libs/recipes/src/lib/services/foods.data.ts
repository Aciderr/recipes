import { Recipe } from '../models/recipe.interface';
import { Product } from '../models/product.interface';

export const products: Record<string, Product> = {
  '1': { id: '1', name: 'Jajko' },
  '2': { id: '2', name: 'Bajgiel' },
  '3': { id: '3', name: 'Awokado' },
  '4': { id: '4', name: 'Makaron' },
  '5': { id: '5', name: 'Pomidory Mutti' },
  '6': { id: '6', name: 'Ser twardy' },
  '7': { id: '7', name: 'Bazylia' },
  '8': { id: '8', name: 'Oliwa' },
  '9': { id: '9', name: 'Czosnek' },
  '10': { id: '10', name: 'Cebula' },
};

export const foodsData: Recipe[] = [
  {
    id: '1',
    name: 'Jajka po benedyktyńsku',
    preparationTimeInMinutes: 30,
    products: [
      { ...products['1'], amount: 1 },
      { ...products['2'], amount: 1 },
      { ...products['3'], amount: 1 },
    ],
  },
  {
    id: '2',
    name: 'Spaghetti',
    preparationTimeInMinutes: 45,
    products: [
      { ...products['4'], amount: 1 },
      { ...products['5'], amount: 1 },
      { ...products['6'], amount: 1 },
      { ...products['7'], amount: 1 },
      { ...products['8'], amount: 1 },
      { ...products['9'], amount: 1 },
      { ...products['10'], amount: 1 },
      { ...products['1'], amount: 1 },
    ],
  },
];
