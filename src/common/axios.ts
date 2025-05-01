// src/utils/api.ts

import axios from 'axios'

// 기본 Axios 인스턴스 생성
const axiosIns = axios.create({
  baseURL: '/api', // 프록시 경유하여 Spring으로 요청됨
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
axiosIns.interceptors.request.use(
	(config) => {
		const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// ✅ 응답 인터셉터: 에러 처리, 자동 로그아웃
axiosIns.interceptors.response.use(
    (response) => response,
    (error) => {
        if (typeof window !== 'undefined') {
            const status = error?.response?.status;

            if (status === 401) {
                // ⛔️ 인증 오류: 자동 로그아웃 처리
                localStorage.removeItem('token');
                window.location.href = '/login'; // 로그인 페이지로 이동
            }

            // ✅ 공통 에러 메시지 처리 (예: 토스트)
            const message = error?.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
            console.error('[API ERROR]', message);
            // 예: toast.error(message); → 사용자에게 보여주기

            return Promise.reject(error);
        }
    }
);

// 다른 API 요청들도 여기에 추가할 수 있어
// 예) export async function fetchUserData() { ... }
export default axiosIns;