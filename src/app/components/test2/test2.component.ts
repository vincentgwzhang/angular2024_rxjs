import { Component } from '@angular/core';
import {from, interval, range, take, timer} from 'rxjs';

@Component({
  selector: 'app-test2',
  imports: [],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component {

  fetchData1() {
    from([10, 20, 30]).subscribe(value => console.log('数组值:', value));
  }

  fetchData2() {
    const promise = Promise.resolve('Promise resolved!');
    from(promise).subscribe(value => console.log('Promise 值:', value));
  }

  fetchData3() {
    from('RxJS').subscribe(char => console.log('字符:', char));
  }

  fetchData4() {
    interval(1000)
      .pipe(take(5))
      .subscribe(value => console.log('间隔值:', value));
  }

  fetchData5() {
    timer(2000, 1000)
      .pipe(take(3))
      .subscribe(value => console.log('定时值:', value));
  }

  fetchData6() {
    range(1, 5).subscribe(value => console.log('范围值:', value));
  }
}
