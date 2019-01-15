export interface IroleRepo
{
    findAll()
     findById()
     addRole()
     updateRole()
     deleteRole() 
     findallroles(page:number,page_size:number)
     addUserrole(userid:string,role:any)
     deleteUserrole(role:any)
     updateUserrole(role:any)
}
