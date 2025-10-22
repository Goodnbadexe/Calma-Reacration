import { Outlet } from 'react-router-dom'
import NavBar from '@/components/ui/NavBar'

export default function AppLayout() {
  return (
    <div className="page">
      <NavBar />
      <div className="header-spacer" />
      <Outlet />
    </div>
  )
}