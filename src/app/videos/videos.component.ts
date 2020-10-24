import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any[] = [
    {
      name: 'Jagadhodharana',
      description: 'Performance in the 67th art festival In MFAC on Dec 6th2018.' +
      'Orchestra' +
      'Choreography and nattuvangam:Guru Pandanallur S pandian' +
      'Vocal:Pozhakudi G R Praveen' +
      'Mirdangam: Mayavaram T Vishwanathan' +
      'Violin:Sri Kalaiarasan',
      embedUrl: 'https://www.youtube.com/embed/hEB9ilzkowY',
      videoId: 'hEB9ilzkowY',
      srcDocData: this.getSafeHtml('https://www.youtube.com/embed/hEB9ilzkowY', 'hEB9ilzkowY'),
    },
    {
      name: 'Bharathanatyam |Mohamana | Bhairavi Varanam',
      description: 'Performance at Mylapore Fine Arts Club - 2019' +
      'Nattuvangam and Choreography - Kalaimamani Pandanalur S Pandian' +
      'Vocal - Pozhakudi G R Praveen' +
      'Mridangam - Mayavaram T Viswanathan' +
      'Violin - Sri Kalaiarasan',
      embedUrl: 'https://www.youtube.com/embed/MWl75SMF1Jc',
      videoId: 'MWl75SMF1Jc',
      srcDocData: this.getSafeHtml('https://www.youtube.com/embed/MWl75SMF1Jc', 'MWl75SMF1Jc'),
    },
    {
      name: 'Bharatanatyam Dance |Idai vida veru venumo Sakshi | Saveri | Rupakam',
      description: 'Performance at MFAC annual dance festival 2018.' +
      'Choreography and Nattuvangam: Kalaimamani Pandanalur Sri S Pandian' +
      'Vocal: Pozhakudi Sri G R Praveen' +
      'Mridangam: : Mayavaram Sri T Viswanathan' +
      'Violin: Sri Kalaiarasan',
      embedUrl: 'https://www.youtube.com/embed/TqQDQzcp-_w',
      videoId: 'TqQDQzcp-_w',
      srcDocData: this.getSafeHtml('https://www.youtube.com/embed/TqQDQzcp-_w', 'TqQDQzcp-_w'),
    },
    {
      name: 'Bharatanatyam dance | Thilang Thillana duet | Full video',
      description: 'Choreography : Guru Kalaimamami Pandanallur Sri S Pandian' +
      'Vocal: Pozhakudi Sri G R Praveen' +
      'Mridangam: Pozhakudi Sri G R Naveen' +
      'Violin: Sri Kalaiarasan' +
      'Composer: Lalgudi  G Jayaraman' +
      'Presented by : Aishwarya Iyer & Manaswini Chandrasekhar',
      embedUrl: 'https://www.youtube.com/embed/3dfVgWzuYW8',
      videoId: '3dfVgWzuYW8',
      srcDocData: this.getSafeHtml('https://www.youtube.com/embed/3dfVgWzuYW8', '3dfVgWzuYW8'),
    },
    {
      name: 'Akhilandeswari | Dwijavanthi',
      description: 'Choreography and nattuvangam - Kalaimamani Pandanalur S Pandian' +
      'Vocal - Pozhakudi G R Praveen' +
      'Mridangam - Mayavaram T Viswanathan' +
      'Violin - Sri Kalaiarasan' +
      'Video - Manaswini Chandrashekhar',
      embedUrl: 'https://www.youtube.com/embed/PKXwWOs2w8k',
      videoId: 'PKXwWOs2w8k',
      srcDocData: this.getSafeHtml('https://www.youtube.com/embed/PKXwWOs2w8k', 'PKXwWOs2w8k'),
    },
    {
      name: 'Engu Naan Selven Aiyya | Full song | Periyasamy Thooran | Dwijavanthi',
      description: 'Where will I go ?? We have only one world to live ?' +
      'Song : Smrithi Harish',
      embedUrl: 'https://www.youtube.com/embed/oWLRmnLBfQQ',
      videoId: 'oWLRmnLBfQQ',
      srcDocData: this.getSafeHtml('https://www.youtube.com/embed/oWLRmnLBfQQ', 'oWLRmnLBfQQ'),
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const node = document.createElement('script');
    node.src = 'https://apis.google.com/js/platform.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  getSafeHtml(currentUrl: string, currentId: string) {
      return this.sanitizer.bypassSecurityTrustHtml('<style>*{padding:0;margin:0;overflow:hidden}' +
      'html,body{height:100%}img{height:100%;}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}' +
      'span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}' +
      '</style><a href=' + currentUrl + '?autoplay=1>' +
      '<img src=https://i.ytimg.com/vi/' + currentId + '/hqdefault.jpg' +
      '?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAy_BbpIDxCwMRz0xwLGKTHHNDIYA>' +
      '<span>▶</span></a>');
  }

}

