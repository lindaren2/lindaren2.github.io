import { Component, OnInit } from '@angular/core';
import { Config } from '../config.service';
import { HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',  style({
        opacity: 0,
        transform: "translateX(-40%)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ]),
    trigger('scrollAnimationLogo', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',  style({
        opacity: 0,
        transform: "translateX(40%)"
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class NavigationComponent implements OnInit {

  state = 'hide'
  menuActive : boolean[]
  showVision : boolean
  showMarket : boolean
  showProduct : boolean
  showTeam : boolean
  showPartners : boolean

  constructor(private menu: Config) { }

  ngOnInit() {
    this.getMenu()
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.getMenu();
  }

  getMenu() {
    if(this.menu.getNavMenu()){
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

    this.menuActive = this.menu.getMenuActive();
    this.showVision = this.menuActive[0];
    // this.showMarket = this.menuActive[1];
    // this.showProduct = this.menuActive[2];
    // this.showTeam = this.menuActive[3];
    // this.showPartners = this.menuActive[4];


  }

}
