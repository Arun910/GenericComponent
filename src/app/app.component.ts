import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericPtableComponent } from './generic-ptable/generic-ptable.component';
import { TableData } from './models/table-data.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GenericPtableComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GenericComponent';
  
 
}
