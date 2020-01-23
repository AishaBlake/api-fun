import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-fun';
  constructor(private apiService: ApiService) {}
  data = this.apiService.getData().subscribe((data) => this.data = {...data});
}
