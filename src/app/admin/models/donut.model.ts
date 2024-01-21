export interface Donut {
  id:string | number,
  name:string,
  icon: string,
  promo?:'new' | 'limited',
  price: number,
  description: string
}
