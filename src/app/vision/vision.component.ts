import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { Config } from '../config.service';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
})


export class VisionComponent implements OnInit {

  constructor(private menu: Config, public el: ElementRef) { }

  ngOnInit() {
    const value = this.el.nativeElement.map;
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset + window.screen.availHeight/2

      if (scrollPosition >= componentPosition) {
        this.menu.toggleNavMenu(true);
        this.menu.changeNavMenuActive('Vision');
      } else {
        this.menu.toggleNavMenu(false);
      }
    }

}
