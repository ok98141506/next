// 서버 컴포넌트 (기본 보호됨)
//import { getUserFromToken } from '@/common/auth'

export default async function DashboardPage() {
  //const user = await getUserFromToken()

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">🎉 대시보드</h1>
      <p className="mt-4">환영합니다, 홍길동님!!</p>
    </div>
  )
}
