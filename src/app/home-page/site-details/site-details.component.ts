import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SiteDetailsDataService } from 'src/app/services/site-details-data.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSiteDetailsComponent } from './add-site-details/add-site-details.component';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('closed', style({
        width: '82px'
      })),
      state('opened', style({
        width: '250px',
      })),
      transition('closed => opened', animate('400ms ease-in-out')),
      transition('opened => closed', animate('400ms ease-in-out'))
    ]),
    trigger('inputElement', [
      state('opened', style({
        width: '15vw'
      })),
      state('closed', style({
        width: '0vw'
      })),
      transition('closed => opened', animate('400ms ease-in-out')),
      transition('opened => closed', animate('400ms ease-in-out'))
    ])
  ]
})
export class SiteDetailsComponent implements OnInit {

  toggleSearch: string = 'closed';
  searchText!: string;
  progressMode: ProgressSpinnerMode = 'determinate';
  progressColor = "#5b73fd";
  siteDetails: any = [];

  constructor(private siteDetailsService: SiteDetailsDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadSiteDetails();
  }
  loadSiteDetails(limit?: any) {
    this.siteDetailsService.getSiteDetails(limit).subscribe(res => {
      res ? this.siteDetails = res : null;
    },
      err => {
        console.log("something went wrong while getting the data");
      })
  }
  addNewSiteDetails(): void {
    const dialogRef = this.dialog.open(AddSiteDetailsComponent, {
      width: '653px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadSiteDetails();
    });
  }
  search(txt: any) {

  }
  getStorageUsed(val: any, tot: any) {
    return (100 * parseInt(val.split('g')[0]) / parseInt(tot.split('g')[0]));
  }
  getVisitors(visitors: any, totalVisitors: any) {
    return (100 * parseInt(visitors) / parseInt(totalVisitors));
  }
  getProgressValue(domain: any, totDomains: any) {
    return (100 * (domain / totDomains));
  }
  closeSearchBar() {
    this.toggleSearch = 'closed';
    this.searchText = '';
  }


}
