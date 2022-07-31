import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  windowScrolled = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });

  }
public scrollToTop(): void {
      window.scrollTo(0, 0);
    }

}
