"use client";

import { createContext, useState } from "react";

export type AuthContextType = {
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
    user: User | null;
    setUser: (user: User) => void;
    login: (data: User) => void;
    isAuthenticated: () => boolean;
}

type User = {
    username: string;
    password: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const isAuthenticated = () => {
        if (user != null) {
            return true;
        } else {
            return false;
        }
    };

    const login = (data: User) => {
        setUser(data)
    }


    return (
        <AuthContext.Provider value={{ username, setUsername, password, setPassword, user, setUser, login, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
};
