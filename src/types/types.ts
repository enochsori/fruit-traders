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
type Seller = {
  id: string;
  storeName: string;
  description: string;
  avatarSrc: string;
};
export type SellerInfo = { key: string; value: Seller };
