import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from '../shared/user';

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

                      
  constructor() { }

  setdetails(user: User){
    this.userdetails = user;
    console.log("yesss did it" + this.userdetails.name);
    this.champ();
  }
  
  champ(){
  console.log(this.userdetails.name+"this is done");
}

getname(){
    

        console.log("name is " + this.userdetails.jobroles);
 var pika = "nam";
  return  pika;
  
}

}
