import{UserModel} from '../models/User'
export interface IuserRepo
{
     findAll()
     findById(id:string)
     addUser(user:any):Promise<any>
     updateUser(user:any):Promise<any>
     deleteUser(id:string) 
     findallusers(page:number,page_size:number)

    
}