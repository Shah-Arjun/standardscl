import Dashboard from "@/components/dashboard/Dashboard"
import { Children } from "react"



// childern comes from /admin/page.tsx
function AdminLayout({children}: Readonly<{children: React.ReactNode}>){
    return (
        <Dashboard>
            {children}
        </Dashboard>
    )
}

export default AdminLayout