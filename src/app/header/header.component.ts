import { Component, OnInit, } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInText', [
      state('over', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('0.8s 2600ms ease-in')
      ])
    ]),
    trigger('fadeInSlogan', [
      state('over', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('0.5s 3600ms ease-in')
      ])
    ]),
    trigger('logoAnimation', [
      state('over', style({
        opacity: 1,
        transform: 'translateX(0px)'
      })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('1s 500ms ease-in', style({ opacity: 1 })),
        animate('0.5s 400ms ease-in-out', style({ transform: 'translateX(-10%)' }))
      ])
    ])
  ]
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
