import './globals.css';
import { ReactNode } from 'react';
//import { inter } from './fonts';

export const metadata = {
  title: '루트 기본 타이틀',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
