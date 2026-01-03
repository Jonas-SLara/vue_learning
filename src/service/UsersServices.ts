import type { Users } from "@/types/Users"

const API_KEY2 = "usuarios"

export class UserServices{
    //registrar mock de usuario no localstorage
    public static register(user: Users): void{
        
        const users: Users[] = this.getAllUsers()
        let exists = (this.getUserByEmail(user.email))? true : false
        
        if(!exists){
            users.push(user)
            localStorage.setItem(API_KEY2, JSON.stringify(users))
        }
        else{
            console.log("usuario ja existe com este email")
        }
    }

    //pegar todos os usuario no mock de usuario
    public static getAllUsers(): Users[]{
        const data = localStorage.getItem(API_KEY2)
        return  (data)? JSON.parse(data) : []
    }

    //pegar usuario pelo email
    public static getUserByEmail(email: string): Users | undefined{
        const users: Users[] = this.getAllUsers()
        return users.find(u => u.email === email)
    }

}