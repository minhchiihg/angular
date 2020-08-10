import { UsersModule } from './../users.module';
import { Users } from './../../core/models/users.model';
import { UserService } from '../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { findIndexInData } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.compoment.html',
  styleUrls: ['./user-list.compoment.css']
}
)
export class UserListComponent implements OnInit {
  userData: Users[] = [];
  public subscription: Subscription
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userData = this.userService.getLstUser();
    console.log(1, 'cai nay show o dau', this.userData);
    // this.rfContact = this.fb.group({
    //   name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    //   id: this.fb.control(''),

    // })
  }
  removeOneUser(index: number) {
    console.log(index);
    this.userService.deleteUser(index);
  }
}


//  editOneUser(index: number){
//   this.userService.updateUser(index, Users[index] );
//   console.log(this.userData);
//  }
// }


  // message: string = '';
  // updateMesssages() {
  //   this.messages.push(this.message);
  //   this.message = '';
  // }




