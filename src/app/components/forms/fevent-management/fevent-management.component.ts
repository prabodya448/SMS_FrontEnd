import { Component } from '@angular/core';
import { LeventComponent } from "../../search list/levent/levent.component";


@Component({
  selector: 'app-fevent-management',
  standalone: true,
  imports: [LeventComponent],
  templateUrl: './fevent-management.component.html',
  styleUrl: './fevent-management.component.css'
})
export class FeventManagementComponent {

}
