export interface IorderRepo
{
    
     findById()
     addOrder()
     updateOrder()
     deleteOrder() 
     findallorders(page:number,page_size:number,user:any)
     addUserOrder(initiatorUserId:string,userid:string,order:any)
     deleteUserOrder(order:any,user:any)
     updateUserOrder(userid:string,order:any)
     getOrderCount(page:number,page_size:number,user:any)
}