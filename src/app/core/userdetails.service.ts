import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from '../shared/user';
import { UserQualification } from '../shared/user-qualification';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  userdetails : User = {"name":"",
                        "surname":"",
                        "email":"",
                        "phoneno": 0,
                        "portfoliourl":"",
                        "jobroles":{},
                        "referal":"",
                        "subscribe":false
                      };
userqualification: UserQualification ={
                        "avgpercentage":0 ,
                        "yearOfPassing":0,
                        "qualification":"",
                        "stream":"",
                        "college":"",
                        "collegeLocation":"",
                        "accountType":"",
                        "yearsOfExp":0,
                        "currentctc":0,
                        "expectedctc":0,
                        "techExpIn":[false,false,false,false,false]  ,
                        "techfamiwith":[false,false,false,false,false]  
                      };
                      
  constructor() { }

  setdetails(user: User){
    this.userdetails = user;
    // console.log("user data saved" + this.userdetails.name);
  }
  
  setqualificationdetails(user: UserQualification){
    this.userqualification = user;
  }
  
  

getname(){
        console.log("name is " + this.userdetails.jobroles);
  return  this.userdetails.jobroles;
  
}

getqualificationdetails(){
  return this.userqualification;
}

getpersonaldetails(){

  return this.userdetails;
}

}
