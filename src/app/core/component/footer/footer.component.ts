import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer" style="height: 70px">
    <div class="content has-text-centered">
      <p>
        by <a href="https://www.facebook.com/chii.hg"><strong>Nguyễn Thị Minh Chi</strong></a>. 
      </p>
    </div>
  </footer>
  `,
  styles: [`
    .footer {
      position: sticky;
      bottom: 0;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
