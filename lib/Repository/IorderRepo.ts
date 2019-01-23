export interface IorderRepo
{
    
     findById()
     addOrder()
     updateOrder()
     deleteOrder() 
     findallorders(page:number,page_size:number,user:any)
     addUserOrder(userid:string,order:any)
     deleteUserOrder(order:any,user:any)
     updateUserOrder(order:any)
     getOrderCount(page:number,page_size:number,user:any)
}