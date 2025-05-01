import '../../globals.css' // 외부 CSS 및 폰트 import는 여기서
import '/public/css/plugins.bundle.css'
import '/public/css/style.bundle.css'

import { Inter, Montserrat, Noto_Sans_KR } from 'next/font/google'
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ✅ Google Fonts: Next.js 최적화 방식
const inter = Inter({ subsets: ['latin'], display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })
const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// ✅ SEO 및 기본 설정
export const metadata = {
  title: ':: 사업자 관리 페이지(샘플!!) ::',
  description:
    'The most advanced Bootstrap Admin Theme on Bootstrap Market trusted by over 4,000 beginners and professionals. Multi-demo, Dark Mode, RTL support. Grab your copy now and get life-time updates for free.',
  keywords:
    'keen, bootstrap, bootstrap 5, bootstrap 4, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon',
  metadataBase: new URL('https://keenthemes.com'),
  alternates: {
    canonical: 'https://keenthemes.com/keen',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://keenthemes.com/keen',
    title: 'Keen - Multi-demo Bootstrap 5 HTML Admin Dashboard Theme',
    siteName: 'Keenthemes | Keen',
  },
  icons: {
    icon: '/assets/media/logos/favicon.ico',
  },
}

// ✅ App Router 기반 Root Layout 컴포넌트
export default function RootLayout({ children }: { children: ReactNode }) {
  return (

		<div className={`d-flex flex-column flex-root ${inter.className} ${montserrat.className} ${notoSansKR.className}`}
			id="kt_app_root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/* Aside */}
				<div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center" style={{
					backgroundImage: 'url(/images/login/auth-bg.png)' }}>
					<div className="d-flex flex-column flex-center p-6 p-lg-10 w-100">
						<Link href="/">
						<Image alt="Logo" src="/images/logo/default-dark.svg" className="mb-0 mb-lg-20" width={200}
							height={50} />
						</Link>
						<Image className="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-400px mb-10 mb-lg-20"
							src="/images/login/auth-screens.png" alt="Auth Screens" width={400} height={300} />
						<h1 className="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7">
							HYPER GLOCAL SNS
						</h1>
						<div className="d-none d-lg-block text-white fs-base text-center">
							On The Real World 1:1 Mapping Virtual Land With Local Contents.
						</div>
					</div>
				</div>

				{/* Body */}
				{/* children은 실제 렌더링되는 자식 컴포넌트들입니다. */}
				<div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
					<div className="d-flex flex-center flex-column flex-lg-row-fluid">
						<div className="w-lg-500px p-10">
						{children}
						</div>
					</div>

					<div className="d-flex flex-center flex-wrap px-5">
						<span className="text-muted fw-semibold me-1">
							Copyright 2025 ©{' '}
							<a href="https://keenthemes.com" target="_blank" rel="noopener noreferrer"
								className="text-gray-800 text-hover-primary">
								UNDERPIN Inc.
							</a>{' '}
							All Rights Reserved.
						</span>
					</div>
				</div>
				{/**/}
			</div>
		</div>
	
  )
}
