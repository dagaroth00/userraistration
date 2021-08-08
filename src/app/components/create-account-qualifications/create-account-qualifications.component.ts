import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/core/userdetails.service';
import { UserQualification } from 'src/app/shared/user-qualification';
@Component({
  selector: 'app-create-account-qualifications',
  templateUrl: './create-account-qualifications.component.html',
  styleUrls: ['./create-account-qualifications.component.css']
})
export class CreateAccountQualificationsComponent implements OnInit {

 userqualification = new UserQualification(100,200,"","","","","Experienced",50,100,500 , [false,false,false,false,false],[false,false,false,false,false]);

  constructor(public user: UserdetailsService) { }

  
  ngOnInit(): void {
  }



  onsubmit(){
    console.log(this.userqualification + "from back of page"  + this.user.getname());
  }
}
