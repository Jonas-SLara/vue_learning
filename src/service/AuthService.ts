import type { Users } from "@/types/Users";
import { UserServices } from "./UsersServices";

// trocar tudo para token depois com o back, obter user pelo token

const API_KEY = "user_me"

export class AuthService{

    //pegar usuario no localstorage
    public static getUser(): Users | null{
        const item = localStorage.getItem(API_KEY)
        const user: Users | null = item ? JSON.parse(item) : null
        return user
    }

    //realizar login
    public static login(email: string, pass: string): boolean{
        const user = UserServices.getUserByEmail(email)
        if(!user){
            alert("email ou senha incorretos")
            return false
        }
        if(user.password !== pass){
            alert("email ou senha incorretos")
            return false
        }

        //ta bem inseguro mas ainda é para testes
        localStorage.setItem(API_KEY, JSON.stringify(user))

        return true
    }
}