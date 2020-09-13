import { Component } from '@angular/core';

@Component({
  selector: 'app-booksweb-footer',
  styles: [
    `
      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #a82424;
        color: white;
        text-align: center;
        margin-top: 150px;
      }
    `,
  ],
  template: `
    <div class="footer">&copy; <a href="#">Bhavya Jain Corp Inc</a></div>
  `,
})
export class BooksWebFooterComponent {}
