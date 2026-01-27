import { Suspense } from "react"

export const metadata = {
    title: "داشبورد سهیل سیستم",
    description: "داشبورد سهیل سیستم",
}

export default function Layout({children}:{children:React.ReactNode}){
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            {children}
        </Suspense>
    )
}