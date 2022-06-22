import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  testString: string = 'World';

  constructor() { }

  ngOnInit(): void {
  }

  displayConsoleMessage() {
    console.log('Hello World works');
    this.testString = 'Hello World works';
}

}
