import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  @ViewChild('sidenav', { static: true }) private sidePanel!: MatSidenav;
 // constructor(public side:MatSidenav){}
  Update()
  {
   this.sidePanel.toggle();
   
  }
}
