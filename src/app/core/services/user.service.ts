import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './../models/users.model';

@Injectable()
export class UserService {

  // Binh thuong em se call api. Nhung api nay thi chi co get thoi. Khong co post, put, delete
  apiUrl = 'https://api.github.com/users';

 

  // Fake data. Thu thoi nhe nen du lieu chua chuan dau
  private lstUsers: Users[] = [{
    id: 12,
    lastName: 'Nguyễn',
    firstName: 'A',
    age: 12,
    room: 'aaa',
    bed: 12,
    address: 'HN',
    gender: 'Nam',
    birthdate: 'aaa', 
    admissionDate: 'bbb',
    status: true,
    homePhone: 34,
    workPhone: 12,
    mobile: 2222,
  },
  {
    id: 123,
    lastName: 'Trần',
    firstName: 'B',
    age: 122,
    room: 'aaa',
    bed: 122,
    address: 'HN',
    gender: 'Nữ',
    birthdate: 'aaa', 
    admissionDate: 'bbb',
    status: true,
    homePhone: 34,
    workPhone: 12,
    mobile: 2222,
  }
   
  ];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`); 
  }

  /**
   * Get ra list user nhu em call api
   */
  getLstUser() {
    return this.lstUsers;
  }

  /** anh oi cai param la gidaay a .=.
   * Get one user
   * @param index 
   */
  getOneUser(index: number) {
    if ( index != null || undefined ) {
    return this.lstUsers[index];
    }
 
  }



  /**
   * Tao moi 1 user
   * @param userModel cai nay la data tu form cua em y. Model cua n cung se phai chuan theo de bai nhe. Dung de any
   */
  addOneUser(userModel: Users) {

    // doan nay em bi sai roi. Mang thi lam sao em truyen nhu nay duoc
    // Vi o tren dang dinh nghia la id: number, name: string, age: number nen o duoi em cung can lam nhu the
    // Em call cac function nay o dau chua
    // nay lam xong em xoa het roi vi sai ltinh qua :((()))
    // Luc nay la do em truyen data khi push bi sai thoi. Bh anh lam theo model kia thi cu theo model ma lam hens
    // vang,  bhc al l bh em call function di,
    // Em fake cho anh 1 button roi call den function nay

    return this.lstUsers.push(userModel);
  }

  /**
   * Xoa 1 user
   * @param index anh vi du thi se dung tam index, neu co thoi gian thi em co the tao them 1 param la id de theo minh co the tim theo id
   */
  deleteUser(index: number) {
    return this.lstUsers.splice(index, 1);
    }
  

  editU(userModel: Users){

  }
  /**
   * Cap nhat user dua theo index
   * @param index index
   */
  updateUser(index: number, userModel: Users ) {
    
        return this.lstUsers.splice(index,1, userModel);

  }
}

// Anh tao tam model o day nhe. Sau em sẽ tạo model ra file mới.
