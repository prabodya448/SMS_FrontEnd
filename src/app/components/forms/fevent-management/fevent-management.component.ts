import { Component, inject } from '@angular/core';
import { LeventComponent } from "../../search list/levent/levent.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { CEventManagement } from '../../../model/class/CEventManagement';
import { APIResponseModel } from '../../../model/interface/user';



@Component({
  selector: 'app-fevent-management',
  standalone: true,
  imports: [LeventComponent, CommonModule, FormsModule],
  templateUrl: './fevent-management.component.html',
  styleUrl: './fevent-management.component.css'
})
export class FeventManagementComponent {
  eventObj: CEventManagement = new CEventManagement();
  eventList: CEventManagement[] = [];

  eventService = inject(UserService);

  ngOnInit(): void {
    this.loadEvent();
  }


  loadEvent() {
    this.eventService.getEvents().subscribe((res: APIResponseModel) => {
      this.eventList = res.content;
    });
  }

  onSaveEvent() {
    if (this.eventObj.eId !== 0) {
      this.eventService.updateEvent(this.eventObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Event updated successfully');
          this.loadEvent();
          this.clearForm();
        } else {
          alert('Failed to update Event');
        }
      });
    } else {
      this.eventService.saveEvent(this.eventObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert('Event added successfully. Refresh the page for updates.');
          this.loadEvent();
          this.clearForm();
        } else {
          alert('Failed to add Event');
        }
      });
    }
  }

  clearForm() {
    this.eventObj = new CEventManagement();
  }

  onEditEvent(data: CEventManagement) {
    this.eventObj = data;
    console.log("Received event data:", this.eventObj);
  }
}
