import { Component, inject } from '@angular/core';
import { LclassComponent } from "../../search list/lclass/lclass.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CClassManagement } from '../../../model/class/CClassManagement';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';


@Component({
  selector: 'app-fclass-management',
  standalone: true,
  imports: [LclassComponent,FormsModule, CommonModule],
  templateUrl: './fclass-management.component.html',
  styleUrl: './fclass-management.component.css'
})
export class FclassManagementComponent {

   classObj: CClassManagement = new CClassManagement();
    classList: CClassManagement[] = [];
  
    classService = inject(UserService);
  
    ngOnInit(): void {
      this.loadClass();
    }
  
  
    loadClass() {
      this.classService.getClasses().subscribe((res: APIResponseModel) => {
        this.classList = res.content;
      });
    }
  
    onSaveClass() {
      if (this.classObj.cId !== 0) {
        this.classService.updateClass(this.classObj).subscribe((res: APIResponseModel) => {
          if (res.message) {
            alert('Class updated successfully');
            this.loadClass();
            this.clearForm();
          } else {
            alert('Failed to update Class');
          }
        });
      } else {
        this.classService.saveClass(this.classObj).subscribe((res: APIResponseModel) => {
          if (res.message) {
            alert('Class added successfully. Refresh the page for updates.');
            this.loadClass();
            this.clearForm();
          } else {
            alert('Failed to add Class');
          }
        });
      }
    }
  
    clearForm() {
      this.classObj = new CClassManagement();
    }
  
    onEditClass(data: CClassManagement) {
      this.classObj = data;
      console.log("Received class data:", this.classObj);
    }
  
}
