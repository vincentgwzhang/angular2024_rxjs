import {Component} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-test7',
  imports: [],
  templateUrl: './test7.component.html',
  styleUrl: './test7.component.css'
})
export class Test7Component {

  action1() {// 获取的时候只立即获取当前的值
    const subject = new Subject<number>();
    subject.subscribe(value => console.log('A 接收到:', value));
    subject.next(1);
    subject.subscribe(value => console.log('B 接收到:', value));
    subject.next(2);
    subject.complete();
  }

  action2() {// 能获取上一个值得, 所以 B 能得到 1,2,3 ; C能得到2,3， 注意，这里的构造函数的参数仅仅是一个初始化的值
    const behaviorSubject = new BehaviorSubject<number>(0);
    behaviorSubject.subscribe(value => console.log('A 接收到:', value));
    behaviorSubject.next(1);
    behaviorSubject.subscribe(value => console.log('B 接收到:', value));
    behaviorSubject.next(2);
    behaviorSubject.subscribe(value => console.log('C 接收到:', value));
    behaviorSubject.next(3);
    behaviorSubject.complete();
  }

  action3() {// 能获取多少个历史值得，取决于构造函数的参数, 这里2 是说能获取到2个历史值
    const replaySubject = new ReplaySubject<number>(2);
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.subscribe(value => console.log('A 接收到:', value));
    replaySubject.next(4);
    replaySubject.subscribe(value => console.log('B 接收到:', value));
  }
}
