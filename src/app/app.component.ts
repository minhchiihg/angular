import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <!---Header-->
  <!-- app.component.html -->
  <section class="wrapper">
    <app-header></app-header>
    <!--router-->
    
    <div class="content-wrapper">
      <router-outlet></router-outlet>
    </div>
    
    <!--footer-->
    <app-footer></app-footer>
  </section>

  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .content-wrapper {
      flex-grow: 1;
    }
  `]
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
