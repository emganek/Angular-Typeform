import { Component, OnInit, ViewChild } from '@angular/core';
import { createPopup, createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'surveyjs';
  nameRespondent = 'Nguyen Hiep';
  idRespondent = '01234567890';
  finalString = 'name=Hiep,user_id=123456"';
  @ViewChild('form', { static: true }) form: any;

  ngOnInit() {
    console.log('form', this.form);
    const hiep = document.querySelector('#form') as HTMLElement;
    if (hiep) {
      createWidget('Ch43P6hd', { container: hiep });
    }
  }

  openTypeform() {
    createPopup('Ch43P6hd', {
      size: 100,
      hidden: {
        name: 'John Doe 123',
        user_id: '12344556789',
      },
    }).open(); // call open() on created popup
  }
}
