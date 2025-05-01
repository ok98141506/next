'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation' 
import axios from '@/common/axios';

export default function Login() {
	const router = useRouter()

	const [user_id, setEmail] = useState('')
	const [user_pw, setPassword] = useState('')
	const [error, setError] = useState('')

	const doLogin = async (id: string, pw: string) => {
		setError('')
		try 
		{
		  const res = 
		  await axios.post('/api-next/admin/login', { id, pw });
		  
			if (res.status === 200) {
			  router.push('/admin/member');
			} else {
			  setError('로그인 실패. 다시 시도해주세요.');
			}

		  /*
		  // 로그인 완료 시 토큰 생성
		  const token = signToken({ id });
			const result = NextResponse.json({ success: true });
			result.cookies.set('token', token, {
				httpOnly: true,
				path: '/',
			});
		
		  console.log(JSON.stringify(res));
			*/


		  //router.push('/admin/member')
		  
		} catch (err) {
		  console.error(err)
		  setError('로그인 실패. 다시 시도해주세요.')
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		await doLogin(user_id, user_pw)
	}

	return (
		<form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
			<div className="text-center mb-11">
				<h1 className="text-dark fw-bolder mb-3">사업자 로그인</h1>
				<div className="text-gray-500 fw-semibold fs-6">Business Administrator Mode</div>
			</div>

			<div className="fv-row mb-8">
				<input type="text" placeholder="아이디" name="user_id" autoComplete="off" className="form-control bg-transparent"
					required value={user_id} onChange={(e)=> setEmail(e.target.value)}
				/>
			</div>

			<div className="fv-row mb-3">
				<input type="password" placeholder="비밀번호" name="user_pw" autoComplete="off"
					className="form-control bg-transparent" required value={user_pw} onChange={(e)=>
				setPassword(e.target.value)}
				/>
			</div>

			{error && <div className="text-danger fw-semibold mb-4">{error}</div>}

			<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
				<div />
				<Link href="/reset-password" className="link-primary">
				비밀번호 찾기
				</Link>
			</div>

			<div className="d-grid mb-10">
				<button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
					<span className="indicator-label">로그인</span>
					<span className="indicator-progress d-none">
						Please wait...
						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
					</span>
				</button>
			</div>

			<div className="text-gray-500 text-center fw-semibold fs-6">
				회원이 아니십니까?{' '}
				<Link href="/sign-up" className="link-primary">
				회원가입
				</Link>
			</div>
		</form>
	)
}
