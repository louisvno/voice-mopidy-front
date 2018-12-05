import { TracklistService } from './../tracklist.service';
import { Component, OnInit } from '@angular/core';
import {  Media } from '../model/media.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  trackList: Media[];
  trackListSub : Subscription;

  constructor(private trackListService:TracklistService) { }

  ngOnInit() {
    this.trackListSub =this.trackListService.tracklistChanged.subscribe(res => this.trackList =res);

    this.trackListService.getMediaList();
  }

  onSubmit(f){
    this.trackListService.addMedia(f.value.id);
 }

 ngOnDestroy(){
   this.trackListSub.unsubscribe();
 }

}
