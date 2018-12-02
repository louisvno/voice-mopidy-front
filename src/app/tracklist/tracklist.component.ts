import { TracklistService } from './../tracklist.service';
import { Component, OnInit } from '@angular/core';
import { Track } from '../model/track.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  trackList: Track[];
  trackListSub : Subscription;

  constructor(private trackListService:TracklistService) { }

  ngOnInit() {
    this.trackListSub =this.trackListService.tracklistChanged.subscribe(res => this.trackList =res);

    this.trackListService.getYoutubeTracks();
  }

  onSubmit(f){
    this.trackListService.addYoutubeTrack(f.value.id);
 }

 ngOnDestroy(){
   this.trackListSub.unsubscribe();
 }

}
