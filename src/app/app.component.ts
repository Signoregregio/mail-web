import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerStateService } from './services/spinner-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mail-web';

  spinnerIsActive: boolean = false;
  
constructor(private spinner : SpinnerStateService ) {
}

ngOnInit(): void {
  
  this.spinner.getState().subscribe((status:boolean) => this.spinnerIsActive = status);
}
  
}
