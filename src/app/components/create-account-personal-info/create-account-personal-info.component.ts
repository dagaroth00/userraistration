import { Component, OnInit } from '@angular/core';
import { UserQualification } from 'src/app/shared/user-qualification';
import { User } from 'src/app/shared/user';
import { Userinfo } from 'src/app/shared/userinfo';
import { UserdetailsService } from 'src/app/core/userdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-personal-info',
  templateUrl: './create-account-personal-info.component.html',
  styleUrls: ['./create-account-personal-info.component.css']
})
export class CreateAccountPersonalInfoComponent implements OnInit {

  constructor(public userdetails: UserdetailsService , private router: Router) { }

//  public userinfo: User[] = [];
  // userinfo.name="siddhesh";
  // userinfo.name="siddhesh";
  // useri!: User;
  
  roles:{} = {
              'role1':'',
              'role2':'',
              'role3':'',

              };


  userinfo : User= {"name":"",
                    "surname":"",
                    "email":"",
                    "phoneno": 0,
                    "portfoliourl":"",
                    "jobroles":{},
                    "referal":"",
                    "subscribe":false

                  };

  ngOnInit(): void {
  }

  onsubmit(){
    this.userdetails.setdetails(this.userinfo);
    console.log("submitted");

    this.router.navigate(['useraccount/qualificationinfo'] );
  }


}
