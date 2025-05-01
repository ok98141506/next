import { NextResponse } from 'next/server';
import { signToken } from '@/common/jwt';
import axios from '@/common/axios';

export async function POST(req: Request) {
    // -------------------------------
    // Post ROUTE 처리
    // -------------------------------
    const { id, pw } = await req.json();

    // -------------------------------
    // Server API 호출 후 인증 
    // -------------------------------
    //const userInfo = 
    await axios.post('http://localhost:8080/api/admin/login', { id, pw });

    //if(userInfo != ""){
        if (id === 'admin' && pw === '1234') {
            const token = signToken({ id });
            const res   = NextResponse.json({ success: true });
            res.cookies.set({
                name: 'token',
                value: token,
                httpOnly: true,
                path: '/',
            });
            return res;
        }
    //}

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
