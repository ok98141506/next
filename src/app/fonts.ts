// src/app/fonts.ts
import { Inter, Montserrat, Noto_Sans_KR } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'optional',
});

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'optional',
});
