import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer_img='https://previews.123rf.com/images/vlado85/vlado852003/vlado85200300009/141684642-web-design-studio-portfolio-page-on-computer-display-office-desk-with-copy-space-on-wall.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
