import { Component, inject, OnInit, EventEmitter, Output } from '@angular/core';
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
export class TutorManagementComponent implements OnInit {
  tutorObj: CTutor = new CTutor();
  tutorList: CTutor[] = [];
  searchText: string = '';
  tutorService = inject(UserService);

  @Output() editTutor = new EventEmitter<CTutor>();

  ngOnInit(): void {
    this.loadTutors();
  }

  loadTutors() {
    this.tutorService.getTutor().subscribe((res: APIResponseModel) => {
      this.tutorList = res.content;
    });
  }

  onSaveTutor() {
    if (this.tutorObj.tId !== 0) {
      this.tutorService.updateTutors(this.tutorObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Tutor updated successfully');
          this.loadTutors();
          this.clearForm();
        } else {
          alert('Failed to update Tutor');
        }
      });
    } else {
      this.tutorService.saveTutors(this.tutorObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Tutor added successfully');
          this.loadTutors();
          this.clearForm();
        } else {
          alert('Failed to add Tutor');
        }
      });
    }
  }

  onEdit(tutor: CTutor) {
    this.editTutor.emit(tutor);
    this.tutorObj = { ...tutor };
  }

  onDelete(tId: number) {
    if (confirm('Are you sure you want to delete this tutor?')) {
      this.tutorService.deleteTutorsById(tId).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Tutor deleted successfully');
          this.loadTutors();
        } else {
          alert('Failed to delete Tutor');
        }
      });
    }
  }

  clearForm() {
    this.tutorObj = new CTutor();
  }
}
