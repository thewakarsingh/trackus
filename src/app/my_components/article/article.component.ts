import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

panelOpenState= false;

  save(article:string){

    console.log(article);
    alert(article);
//console.log("hello save");

  }

}
