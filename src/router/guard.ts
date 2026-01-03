import { AuthService } from './../service/AuthService';
import { UserRole, type Users } from './../types/Users';

//ve se o usuario esta logado
const isAuthenticated = () : boolean =>{
   const user = AuthService.getUser()
   return (user)? true : false
}

//ve se o usuario tem a role de admin
const isAdmin = () : boolean =>{
    const user = AuthService.getUser()
    if(!user) return false
    return (user?.role === UserRole.ADMIN)? true : false
}