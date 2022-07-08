export interface Clothing {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly newPrice: string;
  readonly currency: string;
  readonly imageUrl: string;
}

interface Data<T> {
  data: T[];
  totalItems: number;
}

export type ClothingData = Data<Clothing>;
