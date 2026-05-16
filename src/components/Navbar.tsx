'use client';
import { Leaf } from 'lucide-react';

const links = ['Products','Ritual','Why Earthiva','Contact'];
export function Navbar(){
 return <header className="fixed top-0 z-50 w-full container-pad py-4">
  <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 shadow-soft">
   <a href="#home" className="flex items-center gap-2 font-serif text-2xl font-bold tracking-widest"><span className="grid h-9 w-9 place-items-center rounded-full border border-leaf"><Leaf size={18}/></span> EARTHIVA</a>
   <div className="hidden gap-7 md:flex">{links.map(l=><a key={l} href={`#${l.toLowerCase().replace(' ','-')}`} className="text-sm font-medium hover:text-clay">{l}</a>)}</div>
   <a href="#products" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream transition hover:bg-leaf">Shop Now</a>
  </nav>
 </header>
}
