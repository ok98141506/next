// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import { signToken } from '@/common/jwt';

export async function POST(req: Request) {
  const { id, pw } = await req.json();

  if (id === 'admin' && pw === '1234') {
    const token = signToken({ id });

    const res = NextResponse.json({ success: true });
    res.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
    });

    return res;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
