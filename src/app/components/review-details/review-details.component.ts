import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/core/userdetails.service';
import { User } from 'src/app/shared/user';
import { UserQualification } from 'src/app/shared/user-qualification';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(public user: UserdetailsService, private router: Router) { }


  userqualification: UserQualification= this.user.getqualificationdetails();
  userinfo: User = this.user.getpersonaldetails();

      // keys = this.userqualification.techExpIn;
      technologies = [ "JS","Anuglar Js","React","NodeJs","Other"];


  ngOnInit(): void {

  }




}
