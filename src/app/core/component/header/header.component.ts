import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light" style="background-color: #FFDAB9;">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/logohus1.png">
        </a>
      </div>
      <!-- menu -->
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="">Trang chủ</a>
          <a class="navbar-item" routerLink="/users">Danh sách</a>
          <a class="navbar-item" routerLink="/contact">Liên hệ</a>    
          <a class="navbar-item" routerLink="/schedule">Đặt lịch</a>
          <a class="navbar-item" routerLink="/">Khác</a>
         
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}