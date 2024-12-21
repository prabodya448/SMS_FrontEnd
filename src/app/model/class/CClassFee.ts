export class CClassFee {
    _id?: number;
    cfId: number;
    stId: number;
    className: string;
    paymentMonth: string;
    classFee: number;
  
    constructor() {
      this._id = 0;
      this.cfId = 0;
      this.stId = 0;
      this.className = '';
      this.paymentMonth = '';
      this.classFee = 0;
    }
  }
  