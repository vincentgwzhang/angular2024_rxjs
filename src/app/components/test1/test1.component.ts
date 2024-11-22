import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {of, map, catchError, fromEvent} from 'rxjs';

@Component({
  selector: 'app-test1',
  imports: [
  ],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component implements AfterViewInit {

  @ViewChild('clickButton1') button!: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    fromEvent<MouseEvent>(this.button.nativeElement, 'click')
      .subscribe({
        next: (event: MouseEvent) => {
          console.log('按钮被点击，位置:', event.clientX, event.clientY, event.button);
        }
      });
  }

  fetchData() {
    of(1, 2, 3, 4, 5) // 创建 Observable
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError(err => {
          console.log('发生错误:', err);
          return of(20);
        })
      )
      .subscribe({
        next: x => console.log('接收到数据:', x),
        error: err => console.error('订阅错误:', err),
        complete: () => console.log('流已完成')
      });
  }
}
