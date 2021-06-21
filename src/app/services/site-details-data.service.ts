import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SiteDetailsDataService {

  siteDetailsUrl = "http://localhost:3000/data";

  constructor(private http: HttpClient) { }

  getSiteDetails(limit?: number) {
    let noOfDetails = (limit == undefined || limit == null) ? '' : limit;
    return this.http.get(this.siteDetailsUrl + "?_limit=" + noOfDetails);
  }
  addNewSiteDetail(data: any) {
    return this.http.post(this.siteDetailsUrl, data);
  }
}
