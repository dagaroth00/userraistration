import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/core/userdetails.service';
import { UserQualification } from 'src/app/shared/user-qualification';
@Component({
  selector: 'app-create-account-qualifications',
  templateUrl: './create-account-qualifications.component.html',
  styleUrls: ['./create-account-qualifications.component.css']
})
export class CreateAccountQualificationsComponent implements OnInit {

 userqualification: UserQualification ={
                                        "avgpercentage":0 ,
                                        "yearOfPassing":0,
                                        "qualification":"",
                                        "stream":"",
                                        "college":"",
                                        "collegeLocation":"",
                                        "accountType":"Fresher",
                                        "yearsOfExp":0,
                                        "currentctc":0,
                                        "expectedctc":0,
                                        "techExpIn":[false,false,false,false,false]  ,
                                        "techfamiwith":[false,false,false,false,false]  
                                      };
 
 
 //= new UserQualification(100,200,"","","","","Experienced",50,100,500 , [false,false,false,false,false],[false,false,false,false,false]);

  constructor(public user: UserdetailsService, private router: Router) { }

  
  ngOnInit(): void {
  }



  onsubmit(){
    this.user.setqualificationdetails(this.userqualification);
    console.log(this.userqualification + "from back of page"  + this.user.getname());
    
    this.router.navigate(['useraccount/reviewinfo'] );
  }
}
