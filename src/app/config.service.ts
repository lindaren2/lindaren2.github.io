import { Injectable } from '@angular/core';
import { currentTeam, modelChart, marketChart2007, marketChart2017 } from './config';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class Config {

  team = currentTeam;
  // partners = currentPartners;
  showNavMenu: boolean;
  navMenuChanges: Subject<boolean> = new Subject<boolean>();
  navMenuActive: Subject<String> = new Subject<String>();
  modelChart = modelChart;
  marketChart2007 = marketChart2007;
  marketChart2017 = marketChart2017;

  menuActive: boolean[];

  apiUrl = 'api/posts';

  constructor(private http: HttpClient) {
    this.showNavMenu = false;
    this.menuActive = [false, false, false, false, false];


    this.navMenuChanges.subscribe((value) => {
      this.showNavMenu = value
    });

    this.navMenuActive.subscribe((value) => {

      this.menuActive = [false, false, false, false, false];
      switch (value) {
        case 'Vision':
          this.menuActive[0] = true;
          break;
        case 'Market':
          this.menuActive[1] = true;
          break;
        default:

      }
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getTeam() {
    return this.team;
  }

  // getPartners() {
  //   return this.partners;
  // }

  getChart() {
    return this.modelChart;
  }

  getMarketChart2007() {
    return this.marketChart2007;
  }

  getMarketChart2017() {
    return this.marketChart2017;
  }

  getNavMenu() {
    return this.showNavMenu;
  }

  getMenuActive() {
    return this.menuActive;
  }

  toggleNavMenu(inView: boolean) {
    this.navMenuChanges.next(inView);
  }

  changeNavMenuActive(value: string) {
    this.navMenuActive.next(value);
  }



}

