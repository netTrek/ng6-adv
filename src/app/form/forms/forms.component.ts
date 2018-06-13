import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-forms',
  template: `
    <p>
      forms works!
    </p>
    <!--<post-template-driven></post-template-driven>-->
    <post-model-driven></post-model-driven>
  `,
  styles: []
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
