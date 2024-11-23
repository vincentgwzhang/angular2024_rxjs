import {AfterViewInit, Component} from '@angular/core';
import {fromEvent, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-test3',
  imports: [],
  templateUrl: './test3.component.html',
  styleUrl: './test3.component.css'
})
export class Test3Component implements AfterViewInit {

  // Example 2
  subject = new Subject<number>();

  ngAfterViewInit() {
    this.subject.subscribe({
      next: value => console.log('Observer A 接收到:', value),
      complete: () => console.log('Observer A 完成')
    });

    this.subject.subscribe({
      next: value => console.log('Observer B 接收到:', value),
      complete: () => console.log('Observer B 完成')
    });
  }

  // Example 1
  observer = {
    next: (value: any) => console.log('接收到数据:', value),
    error: (err: any) => console.error('发生错误:', err),
    complete: () => console.log('流已完成')
  };

  observable = new Observable(subscriber => {
    subscriber.next(1); // 发出第一个值
    subscriber.next(2); // 发出第二个值
    subscriber.complete(); // 通知完成
  });

  action1() {
    this.observable.subscribe(this.observer);
  }




  action2() {
    this.subject.next(1);
    this.subject.next(2);
  }
}
