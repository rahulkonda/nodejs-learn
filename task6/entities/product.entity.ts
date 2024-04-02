export interface ProductEntity {
    id: string;
    title: string;
    description: string;
    price: number;
  }
  
  export const products: ProductEntity[] = [
    {
      id: 'abc',
      title: 'Product 1',
      description: 'Description 1',
      price: 100
    },
    // Additional products...
  ];