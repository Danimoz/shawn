import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }: { children : React.ReactNode }){
  const session = await getServerSession(authOptions)
  if (!session) redirect('/api/auth/signin')

  return (
    <main>
      {children}
    </main>
  )
}
