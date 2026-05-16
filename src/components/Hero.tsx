'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Rabbit, FlaskConical, Sparkles } from 'lucide-react';

const badges = [{icon:Leaf,text:'100% Natural'},{icon:FlaskConical,text:'Chemical Free'},{icon:Rabbit,text:'Cruelty Free'},{icon:Sparkles,text:'Ayurvedic Recipe'}];
export function Hero(){
 return <section id="home" className="container-pad relative overflow-hidden pb-20 pt-32 lg:pt-40">
  <motion.div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-rose/25 blur-3xl" animate={{y:[0,30,0]}} transition={{duration:7, repeat:Infinity}} />
  <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
   <div>
    <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="mb-4 inline-flex rounded-full border border-leaf/20 bg-card px-4 py-2 text-sm font-semibold text-leaf">Rooted in Nature • Made in India</motion.p>
    <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="font-serif text-5xl font-bold leading-[1.05] md:text-7xl">Pure. Natural. Real.</motion.h1>
    <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="mt-6 max-w-xl text-lg leading-8 text-ink/75">Premium herbal powders for daily skincare and haircare rituals. Simple ingredients, beautiful packaging, and trust-first Amazon-ready branding.</motion.p>
    <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="mt-8 flex flex-wrap gap-3">
      <a href="#products" className="rounded-full bg-clay px-7 py-3 font-bold text-white shadow-soft transition hover:-translate-y-1">Explore Products</a>
      <a href="#contact" className="rounded-full border border-leaf px-7 py-3 font-bold text-leaf transition hover:bg-leaf hover:text-white">Contact</a>
    </motion.div>
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{badges.map(({icon:Icon,text})=><div key={text} className="glass rounded-2xl p-3 text-center text-xs font-bold"><Icon className="mx-auto mb-2" size={22}/>{text}</div>)}</div>
   </div>
   <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="relative">
    <Image src="/images/hero-products.jpeg" alt="Earthiva herbal powders" width={1200} height={1200} priority className="rounded-[2rem] shadow-soft" />
   </motion.div>
  </div>
 </section>
}
