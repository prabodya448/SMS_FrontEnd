export interface IUser{   //I dala hadanna
    userID : number,
    userName : string,
    userRole : string,
    userDOB : string,
    userNic : string,
    userEmail : string,
    userContact : string,
    userAge : string    //backend api eken ena widihama danna
    
}

export interface APIResponseModel{

   code: string,
   message: string,
   content: any
}