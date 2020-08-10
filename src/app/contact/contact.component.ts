import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
 
<section class="section" style="width:60%">
  <div class="container">
  <form (ngSubmit)= "submitForm()" #contactForm="ngForm">
    <div class="field">
      <label class="label">Họ và tên</label>
      <input type="text" name="name" class="input"
       [(ngModel)]="name"
       #nameInput="ngModel"
       required ><br>
       <div class="help is-error"  *ngIf="nameInput.invalid && nameInput.touched " >
         Bạn cần phải nhập tên.
       </div><br>
      <label class="label">Email</label>
      <input type="email" name="email" class="input" [(ngModel)]="email"
      #emailInput="ngModel"
       required
       email ><br>
       <div class="help is-error"  *ngIf="emailInput.invalid && emailInput.touched " >
         Bạn cần phải nhập email.
       </div> <br>
      <label class="label">Lời nhắn</label>
      <textarea name="message" class="textarea" [(ngModel)]="message"
      #messageInput="ngModel"
       required ></textarea>
       <div class="help is-error"  *ngIf="messageInput.invalid && messageInput.touched " >
         Bạn cần phải nhập lời nhắn
       </div>
    </div>
    <div>
    <br>
    <button type="submit" class="btn btn-outline-success btn-lg"> Gửi</button>
    </div>
  </form>    
  </div>
</section>
   
<div class="card border-success mb-3" style ="width: 60%"   >
  <div class="card-header">Hòm thư góp ý và liên hệ</div>
  <div class="card-body text-success">
    <h5 class="card-title">Cảm ơn ý kiến của bạn !</h5>
    <p class="card-text"></p>
  </div>
</div>


  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email:string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
   alert('Gửi thành công')
  }

}
// <div class="alert alert-success" role="alert">
//   <h4 class="alert-heading">Well done!</h4>
//   <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
//   <hr>
//   <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
// </div>