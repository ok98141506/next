'use client';

import React from 'react';
import Link from 'next/link';

export default function Landing() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 처리 로직 추가 가능
    console.log('로그인 시도됨');
  };

  return (
    <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">
        <div className="w-lg-500px p-10">
          <form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
            <div className="text-center mb-11">
              <h1 className="text-dark fw-bolder mb-3">사업자 로그인</h1>
              <div className="text-gray-500 fw-semibold fs-6">Business Administrator Mode</div>
            </div>

            <div className="fv-row mb-8">
              <input
                type="text"
                placeholder="ID"
                name="ID"
                autoComplete="off"
                className="form-control bg-transparent"
                required
              />
            </div>

            <div className="fv-row mb-3">
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                className="form-control bg-transparent"
                required
              />
            </div>

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
        </div>
      </div>

      <div className="d-flex flex-center flex-wrap px-5">
        <span className="text-muted fw-semibold me-1">
          Copyright 2025 ©{' '}
          <a
            href="https://keenthemes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-hover-primary"
          >
            UNDERPIN Inc.
          </a>{' '}
          All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
