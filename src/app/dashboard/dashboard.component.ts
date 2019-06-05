import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  @ViewChild('modalos') modalos: ElementRef;
  public hide = true;
  date: Date;

  constructor() {

  }

  ngOnInit() {

    const coll = document.getElementsByClassName('collapsible');
    let i: number;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }


    setInterval(() => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          (document.querySelector('#info') as HTMLElement).style.display = 'block';
          (document.querySelector('#warning') as HTMLElement).style.display = 'none';
          (document.querySelector('#danger') as HTMLElement).style.display = 'none';
          this.date = new Date();
          break;

        case 1:
          (document.querySelector('#info') as HTMLElement).style.display = 'none';
          (document.querySelector('#warning') as HTMLElement).style.display = 'block';
          (document.querySelector('#danger') as HTMLElement).style.display = 'none';
          this.date = new Date();
          break;

        case 2:
          (document.querySelector('#info') as HTMLElement).style.display = 'none';
          (document.querySelector('#warning') as HTMLElement).style.display = 'none';
          (document.querySelector('#danger') as HTMLElement).style.display = 'block';
          this.date = new Date();
          break;
      }
    }, Math.floor(Math.random() * 10000) + 5000);       // random time 5-10s
  }

  toggle() {
    // CHANGE THE NAME OF THE BUTTON.
    if (this.hide) {
      (document.querySelector('#info') as HTMLElement).style.display = 'none';
      (document.querySelector('#warning') as HTMLElement).style.display = 'none';
      (document.querySelector('#danger') as HTMLElement).style.display = 'none';
      this.date = new Date();
    }
  }


}
