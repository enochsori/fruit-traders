export type ItemDetail = {
  id: string;
  name: string;
  latinName: string;
  description: string;
  imageSrc: string;
  countryOfOrigin: string;
  sellerId: string;
  price: number;
  quantity: number;
};
export type Seller = {
  id: string;
  storeName: string;
  description: string;
  avatarSrc: string;
};

export type Sellers = { [key: string]: Seller };
