import { trigger, state, style, animate, transition } from '@angular/animations'

export const stateName = [
    trigger('popOverState',[
      state('show',style({
        opacity:1
      })),
      state('hide',style({
        opacity:0
      })),
      transition('show=>hide',animate('2200ms ease-out')),
      transition('hide=>show',animate('1800ms ease-in')),
      transition('reset=>*',animate('1000ms'))
    ])
  ] ;