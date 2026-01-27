import { Suspense } from "react";

export const metadata = {
    title: "ورود به سهیل سیستم",
    description: "ورود به سهیل سیستم",
}

export default function Layout({children}:{children:React.ReactNode}){
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            {children}
        </Suspense>
    )
}