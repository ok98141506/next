// app/test/page.tsx
'use client'; // 클라이언트 컴포넌트로 지정

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // 예시: 인증되지 않으면 리디렉션
    const isAuthenticated = false; // 실제 인증 로직으로 교체하세요
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);
}