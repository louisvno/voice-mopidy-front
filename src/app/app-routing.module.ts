import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracklistComponent } from './tracklist/tracklist.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: TracklistComponent
  },
  { path: '',
    redirectTo: '/youtube',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
