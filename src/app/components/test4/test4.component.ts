import {AfterViewInit, Component} from '@angular/core';
import {interval, Subject, take} from 'rxjs';

@Component({
  selector: 'app-test4',
  imports: [],
  templateUrl: './test4.component.html',
  styleUrl: './test4.component.css'
})
export class Test4Component implements AfterViewInit{

  observer$ = interval(1000).pipe(take(3));
  subject = new Subject<number>();

  ngAfterViewInit(): void {
      this.observer$.subscribe(this.subject);
  }

  action() {
    this.subject.subscribe(num => {console.log("action 1:", num)})
    this.subject.subscribe(num => {console.log("action 2:", num)})
  }
}
