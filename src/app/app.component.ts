import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <!---Header-->
  <!-- app.component.html -->

  <app-header></app-header>
  <!--router-->
  <!--footer-->
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  results;
  constructor(private http: HttpClient) { }
  ngOnInit() {
      this.http.get("https://api.github.com/users?per_page=10").subscribe(data => {
          console.log('n se khong phai obserable khi em subscribe nhu nay',data);
          this.results = data;
      });
  }
  

}
