import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleOneComponent} from "./components/example-one/example-one.component";
import {ExampleThreeComponent} from './components/example-three/example-three.component';
import {ExampleTwoComponent} from './components/example-two/example-two.component';

const routes: Routes = [
  {
    path: 'exampleOne', component: ExampleOneComponent
  },
  {
    path: 'exampleTwo', component: ExampleTwoComponent
  },
  {
    path: 'exampleThree', component: ExampleThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
