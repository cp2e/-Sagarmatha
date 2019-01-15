export interface IorderRepo
{
    
     findById()
     addOrder()
     updateOrder()
     deleteOrder() 
     findallorders(page:number,page_size:number)
     addUserOrder(userid:string,order:any)
     deleteUserOrder(order:any)
     updateUserOrder(order:any)
}