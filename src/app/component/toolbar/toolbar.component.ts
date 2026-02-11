import { Component } from '@angular/core';
import { RefreshService } from '../../service/refresh.service';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(private refreshService: RefreshService) {

  }

  refresh() {
    this.refreshService.trigger();
  }

}
