import { Outlet } from 'react-router-dom'
import NavBar from '@/components/ui/NavBar'
import { useEffect } from 'react'
import { runPreflight } from '@/utils/preflight'

export default function AppLayout() {
  useEffect(() => { runPreflight() }, [])
  return (
    <div className="page">
      <NavBar />
      <Outlet />
    </div>
  )
}
