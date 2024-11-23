import { Routes } from '@angular/router';
import {Test1Component} from './components/test1/test1.component';
import {Test2Component} from './components/test2/test2.component';
import {Test3Component} from './components/test3/test3.component';
import {Test4Component} from './components/test4/test4.component';
import {Test5Component} from './components/test5/test5.component';
import {Test6Component} from './components/test6/test6.component';
import {Test7Component} from './components/test7/test7.component';
import {Test8Component} from './components/test8/test8.component';
import {Test9Component} from './components/test9/test9.component';

const componentMap: Record<string, any> = {
  test1: Test1Component,
  test2: Test2Component,
  test3: Test3Component,
  test4: Test4Component,
  test5: Test5Component,
  test6: Test6Component,
  test7: Test7Component,
  test8: Test8Component,
  test9: Test9Component,
};

export const routes: Routes = Object.keys(componentMap).map(path => ({
  path,
  component: componentMap[path]
}));
