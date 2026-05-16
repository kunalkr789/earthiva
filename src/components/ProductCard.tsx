'use client';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function ProductCard({ product, index }: { product: Product; index:number }){
 return <motion.article initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.12}} whileHover={{y:-10}} className="glass overflow-hidden rounded-[2rem] shadow-soft">
  <div className={`${product.color} h-3`} />
  <div className="p-7">
   <p className="text-sm font-bold uppercase tracking-[.25em] text-leaf">{product.subtitle}</p>
   <h3 className="mt-2 font-serif text-3xl font-bold">{product.name}</h3>
   <p className="mt-3 text-ink/70">A pure single-ingredient powder designed for effortless DIY beauty rituals.</p>
   <ul className="mt-6 space-y-3">{product.benefits.map(b=><li key={b} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-leaf"/> {b}</li>)}</ul>
   <div className="mt-7 flex items-center justify-between"><span className="font-serif text-3xl font-bold">{product.price}</span><a href={product.amazonUrl} className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white hover:bg-clay">Buy on Amazon</a></div>
  </div>
 </motion.article>
}
