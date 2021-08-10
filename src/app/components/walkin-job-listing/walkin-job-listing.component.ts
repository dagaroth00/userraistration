import { Component, OnInit } from '@angular/core';
import { JobdetailsService } from 'src/app/core/jobdetails.service';
import { Jobdata } from 'src/app/shared/jobdata';

@Component({
  selector: 'app-walkin-job-listing',
  templateUrl: './walkin-job-listing.component.html',
  styleUrls: ['./walkin-job-listing.component.css']
})
export class WalkinJobListingComponent implements OnInit {

  Job: any[] = [];
  constructor( public jobDataService: JobdetailsService) { }


  ngOnInit()  {

    this.jobDataService.getJobdetails().subscribe((Jobdetails: Jobdata[]) => this.Job = Jobdetails );
    console.log(this.Job);
  
  }

}
