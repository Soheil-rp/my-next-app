"use client";
// React
import { useContext } from "react";

// Components
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// Utils And Hooks
import { AuthContext } from "@/src/hooks/useAuth";

export default function SignInPage() {


    const authContext = useContext(AuthContext);
    
    if (!authContext) {
        throw new Error("SignInPage must be used within AuthProvider");
    }

    const { username, setUsername, password, setPassword, login } = authContext;

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        login({
            username,
            password
        })
        console.log(authContext.user);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md gap-4 flex flex-col">
                <h1 className="text-2xl font-bold mb-4">ورود به سیستم</h1>
                <Field>
                    <FieldLabel>نام کاربری</FieldLabel>
                    <Input
                        value={username}
                        onChange={handleUserNameChange}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </Field>
                <Field>
                    <FieldLabel>رمز عبور</FieldLabel>
                    <Input
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </Field>
                <Button onClick={handleSubmit} type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">ورود</Button>
            </div>
            {authContext.isAuthenticated() ? <div className="text-green-500">Authenticated</div> : <div className="text-red-500">Not Authenticated</div>}
        </div>
    )
}