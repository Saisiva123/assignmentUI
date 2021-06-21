import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteDetailsDataService } from 'src/app/services/site-details-data.service';
import { SiteDetail } from '../../models/siteDetial';

@Component({
  selector: 'app-add-site-details',
  templateUrl: './add-site-details.component.html',
  styleUrls: ['./add-site-details.component.scss']
})
export class AddSiteDetailsComponent implements OnInit {

  siteDetailsForm = new FormGroup({
    domainName: new FormControl({ value: '', disabled: false }, [Validators.required]),
    usedStorage: new FormControl({ value: '', disabled: false }, [Validators.pattern("^[0-9]*$"), Validators.required, Validators.max(100), Validators.min(0)]),
    totStorage: new FormControl({ value: "100gb", disabled: true }),
    monthlyVisitors: new FormControl({ value: '', disabled: false }, [Validators.pattern("^[0-9]*$"), Validators.required, Validators.max(10000), Validators.min(0)]),
    totVisitors: new FormControl({ value: 10000, disabled: true }),
    usedDomains: new FormControl({ value: '', disabled: false }, [Validators.pattern("^[0-9]*$"), Validators.required, Validators.max(10), Validators.min(0)]),
    totDomains: new FormControl({ value: 10, disabled: true })
  })
  constructor(private siteDetailsService: SiteDetailsDataService) { }

  ngOnInit(): void {
  }
  saveDetails() {
    var body = new SiteDetail(this.siteDetailsForm.value.domainName,
      this.siteDetailsForm.getRawValue().totStorage,
      this.siteDetailsForm.value.usedStorage + "gb",
      "Primary", [], "active",
      this.siteDetailsForm.getRawValue().totDomains,
      parseInt(this.siteDetailsForm.value.usedDomains),
      this.siteDetailsForm.getRawValue().totVisitors,
      parseInt(this.siteDetailsForm.value.monthlyVisitors)
    )
    this.siteDetailsService.addNewSiteDetail(body).subscribe(res => {
      res ? alert("data added Succesfully") : null;
    }, err => {
      console.log("Something went wrong while adding new Domain")
    })
  }

}
