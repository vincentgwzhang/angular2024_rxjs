import {Component} from '@angular/core';
import {first, noop, of, skip, tap} from 'rxjs';

@Component({
  selector: 'app-test8',
  imports: [],
  templateUrl: './test8.component.html',
  styleUrl: './test8.component.css'
})
export class Test8Component {

  action1() {// noop 是 RxJS 提供的一个简单函数，什么都不做。
    of(1, 2, 3).subscribe({
      next: value => console.log('接收到值:', value),
      error: noop,
      complete: noop,
    });
  }

  action2() {//tap 是一个 RxJS 操作符，用于对流中的每个值执行副作用（例如记录日志），但不会修改数据流。
    of(1, 2, 3).pipe(
      tap(value => {
        value = value * 2;// 即使我怎么做都不会改变流中的值
        console.log('流中的值:', value);
      })
    ).subscribe({
      next: value => console.log('接收到值:', value),
    });
  }

  action3() {//first 是一个 RxJS 操作符，用于只发出流中的第一个值，然后完成。
    of(1, 2, 3).pipe(
      first()
    ).subscribe({
      next: value => console.log('接收到的第一个值:', value),
      error: noop,
      complete: noop,
    });
  }

  action4() {//跳过流中的前 n 个值。
    of(1, 2, 3, 4).pipe(
      skip(2)
    ).subscribe({
      next: value => console.log('接收到的值:', value),
    });
  }
}
