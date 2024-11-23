import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, of, throwError} from 'rxjs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-test5',
  imports: [
    NgForOf
  ],
  templateUrl: './test5.component.html',
  styleUrl: './test5.component.css'
})
export class Test5Component {

  users: any[] = [];

  constructor(private http: HttpClient) {
  }

  action() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(users => users.filter(user => user.id % 2 === 0)),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            console.error('401 未授权: 重定向到登录页面');
          } else if (error.status === 404) {
            console.error('404 未找到: 显示用户友好的错误消息');
          } else {
            console.error('其他错误:', error.message);
          }
          return throwError(() => error);
        })
      )
      .subscribe({
        next: data => {
          console.log('处理后的用户数据:', data);
          this.users = data;
        },
        complete: () => console.log('请求完成！')
      });
  }
}
