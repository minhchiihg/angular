import { Users } from './../../core/models/users.model';
import { ActivatedRoute,Router, Routes } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.compoment.html'  ,
  styles: [`
  *{
    text-align: center;

  }
  form {
    margin-left: 250px;
    margin-top: 60px
  }
  `
  ]
})
export class UserSingleComponent implements OnInit {
  userData: Users = new Users();
  private index: number;
 

  constructor(
    private userService:UserService ,
    private route : ActivatedRoute,
    private router: Router
   
    ) { }


  // Luong cua n se la nhu nay nhe
  // Tu list -> nhan vao routerlink -> truyen param index sang component edit (user-single) -> component edit get ra index
  // nho vao route.params.subscribe
  // get duoc ra index roi thi lam tiep theo



  ngOnInit(): void {
    // Phan nay de lay params tu url
    // Trong routing em da viet 1 path co param la username nen khi truyen tu ben list sang se la user name
    //
    this.route.params.subscribe(params => {
     
      // Khi minh truyen tu list sang form edit voi param index tren url. thi em co the lay ra nhu nay
      this.index = params['index'];
      this.getOneUser(this.index);
      console.log(params);


    // this.userService.getUser(username)
    // .subscribe(user => 
    //   this.userData = user as Users);
    });

  }

  getOneUser(index: number) {
    if ( this.index != null) {
    this.userData = this.userService.getOneUser(index);
    console.log('data edit ', this.userData);
    }
    return null;
  }
//chowf build het ca thanh xuan, ko hieu kieu gi =))
  editOneUser(){
    // Khi co index roi thi em co the khong can phai them param tren function 
    // Ma co the lay thang index minh da get duoc o ben tren
    this.userService.updateUser(this.index, this.userData);
    console.log(this.userData);

    // Update xong thi navigate
    this.router.navigate['/users'];
   }
  addOneUsers(){
     this.userService.addOneUser(this.userData);
     console.log(this.userData);
  }
  // onAddUser(){
  //   this.subscription = this.userService.addOneUser(this.userData);
  //     console.log(this.userData);
  //   }
  
}
