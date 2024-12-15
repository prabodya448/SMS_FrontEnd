import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CTutor } from '../../../model/class/CTutor';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { LtutorComponent } from "../../search list/ltutor/ltutor.component";

@Component({
  selector: 'app-tutor-management',
  standalone: true,
  imports: [FormsModule, CommonModule, LtutorComponent],
  templateUrl: './tutor-management.component.html',
  styleUrls: ['./tutor-management.component.css']
})
export class TutorManagementComponent {
  tutorObj: CTutor = new CTutor();
  tutorList: CTutor[] = [];

  tutorService = inject(UserService);

  ngOnInit(): void {
    this.loadTutor();
  }


  loadTutor() {
    this.tutorService.getTutor().subscribe((res: APIResponseModel) => {
      this.tutorList = res.content;
    });
  }

  onSaveTutor() {
    if (this.tutorObj.tId !== 0) {
      this.tutorService.updateTutors(this.tutorObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Tutor updated successfully');
          this.loadTutor();
          this.clearForm();
        } else {
          alert('Failed to update Tutor');
        }
      });
    } else {
      this.tutorService.saveTutors(this.tutorObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Tutor added successfully. Refresh the page for updates.');
          this.loadTutor();
          this.clearForm();
        } else {
          alert('Failed to add Tutor');
        }
      });
    }
  }

  clearForm() {
    this.tutorObj = new CTutor();
  }

  onEditTutor(data: CTutor) {
    this.tutorObj = data;
    console.log("Received student data:", this.tutorObj);
  }

}
