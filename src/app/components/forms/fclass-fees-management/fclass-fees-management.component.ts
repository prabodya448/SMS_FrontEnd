import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { LclassComponent } from "../../search list/lclass/lclass.component";
import { CClassManagement } from '../../../model/class/CClassManagement';
import { LclassfeeComponent } from '../../search list/lclassfee/lclassfee.component';
import { CClassFee } from '../../../model/class/CClassFee';
@Component({
  selector: 'app-fclass-fees-management',
  standalone: true,
  imports: [LclassfeeComponent,FormsModule, CommonModule],
  templateUrl: './fclass-fees-management.component.html',
  styleUrl: './fclass-fees-management.component.css'
})
export class FclassFeesManagementComponent {
  classFeeObj: CClassFee = new CClassFee();
  classFeeList: CClassFee[] = [];

  classFeeService = inject(UserService);

  ngOnInit(): void {
    this.loadclassFee();
  }


  loadclassFee() {
    this.classFeeService.getClassFees().subscribe((res: APIResponseModel) => {
      this.classFeeList = res.content;
    });
  }

  onSaveclassFee() {
    if (this.classFeeObj.cfId !== 0) {
      this.classFeeService.updateClassFee(this.classFeeObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('classFee updated successfully');
          this.loadclassFee();
          this.clearForm();
        } else {
          alert('Failed to update classFee');
        }
      });
    } else {
      this.classFeeService.saveClassFee(this.classFeeObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('classFee added successfully. Refresh the page for updates.');
          this.loadclassFee();
          this.clearForm();
        } else {
          alert('Failed to add classFee');
        }
      });
    }
  }

  clearForm() {
    this.classFeeObj = new CClassFee();
  }

  onEditclassFee(data: CClassFee) {
    this.classFeeObj = data;
    console.log("Received classFee data:", this.classFeeObj);
  }

}






