import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({ subsets:['latin'], weight:['500','600','700'], variable:'--font-serif' });
const sans = Inter({ subsets:['latin'], variable:'--font-sans' });
export const metadata: Metadata = { title:'Earthiva Naturals | Pure Herbal Powders', description:'Pure, natural herbal powders for daily skincare and haircare rituals.' };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en"><body className={`${serif.variable} ${sans.variable} font-sans`}>{children}</body></html> }
