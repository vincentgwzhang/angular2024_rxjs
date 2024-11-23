import {Component} from '@angular/core';
import {catchError, EMPTY, map, of, throwError} from 'rxjs';

@Component({
  selector: 'app-test6',
  imports: [],
  templateUrl: './test6.component.html',
  styleUrl: './test6.component.css'
})
export class Test6Component {

  action1() {
    of(1, 2, 3).pipe(
      map(n => {
        if (n === 2) {
          throw 'four!';
        }
        return n;
      }),
      catchError(err => {
        return throwError(() => new Error('新的错误'));
      })
    ).subscribe({
      next: value => console.log('接收到值:', value),
      error: err => console.error('订阅者收到错误:', err.message),
      complete: () => console.log('流已完成'),
    });
  }

  action2() {
    of(1, 2, 3).pipe(
      map(n => {
        if (n === 2) {
          throw 'four!';
        }
        return n;
      }),
      catchError(err => {
        return EMPTY;
      })
    ).subscribe({
      next: value => console.log('接收到值:', value),
      error: err => console.error('订阅者收到错误:', err),
      complete: () => console.log('流已完成'),
    });
  }
}
