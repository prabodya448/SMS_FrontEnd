export interface IUser{   //I dala hadanna
    roleId: number,      //backend api eken ena widihama danna
    role:string
}

export interface APIResponseModel{
   message: string,
   result : boolean,
   data : any,
}