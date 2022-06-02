import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-mobile';
  mobile = false;
  
  constructor(private deviceService: DeviceDetectorService) {
    this.mobile = this.deviceService.isMobile()
  }
}
