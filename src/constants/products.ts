import { Product } from '@/types/product';

export const products: Product[] = [
  { id:'multani', name:'Glow Ritual', subtitle:'Multani Powder', color:'bg-[#c2c398]', image:'/images/hero-products.jpeg', benefits:['Deep cleansing','Oil control','Tan removal','Natural glow'], price:'₹149', amazonUrl:'https://amazon.in' },
  { id:'orange-peel', name:'Citrus Glow Ritual', subtitle:'Orange Peel Powder', color:'bg-[#d9823b]', image:'/images/hero-products.jpeg', benefits:['Brightening','Even skin tone','Exfoliation','Radiant skin'], price:'₹149', amazonUrl:'https://amazon.in' },
  { id:'rose', name:'Rose Ritual', subtitle:'Rose Powder', color:'bg-[#d79aa2]', image:'/images/hero-products.jpeg', benefits:['Hydration','Soothing','Soft glow','Natural toner'], price:'₹249', amazonUrl:'https://amazon.in' }
];
