import {Component, OnInit} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, EMPTY, fromEvent, map, of, switchMap} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test9',
  imports: [],
  templateUrl: './test9.component.html',
  styleUrl: './test9.component.css'
})
export class Test9Component implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const inputElement = document.getElementById('userInput') as HTMLInputElement;
    fromEvent(inputElement, 'input').pipe(
      debounceTime(500),
      map(event => (event.target as HTMLInputElement).value.trim()),
      switchMap(userId => {
        if (!userId || isNaN(Number(userId))) return EMPTY;
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .pipe(
            catchError(err => {
              console.log("Error here:" + err + ", user id = " + userId);
              return EMPTY;
            })
          );
      })
    )
      .subscribe({
        next: user => console.log('用户数据:', user),
        error: err => console.error('请求出错:', err)
      });
  }

  action1() {
    of(1, 1, 2, 2, 3, 1, 3).pipe(
      distinctUntilChanged()// 是一个 RxJS 操作符，用于只发出与上一个值不同的值。
    ).subscribe({
      next: value => console.log('接收到的值:', value),
    });
  }
}
