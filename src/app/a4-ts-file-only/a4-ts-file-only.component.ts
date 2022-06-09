import { Component } from '@angular/core';

@Component({
  selector: 'app-a4-ts-file-only',
  template: `
  <h1>4A. шаблон внутри ts (компонент в 1 файл)</h1>
  <div class="post4">
      <h2> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, molestiae.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas blanditiis sapiente veritatis. Totam, provident aperiam aliquam doloremque adipisci hic rem modi, non minus ab esse iure doloribus laudantium impedit! Inventore?</p>
  </div>
  `,
  styles: [`
  .post4 {
      padding: .5rem;
      border: 2px solid black;
  }
  h2 {
      font-size: 1rem;
  }
  `]
})

export class A4TsFileOnlyComponent{}