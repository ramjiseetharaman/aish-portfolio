import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../../_animations/fade-in.animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    $('.masthead').css({'height': (($(window).height())) + 'px'});
    $(window).on('resize', function(){
        $('.masthead').css({'height': (($(window).height())) + 'px'});
    });
  }

}
