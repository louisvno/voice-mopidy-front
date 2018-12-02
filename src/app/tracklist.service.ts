import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Track } from './model/track.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {
  apiUrl = environment.apiUrl;

  public tracklistChanged = new Subject<Track[]>();

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  addYoutubeTrack(youtubeId:string){
    this.http.post<Track[]>(`${this.apiUrl}/add-track`,{ youtubeId:youtubeId}).pipe(
      tap(res => this.tracklistChanged.next(res))
    ).subscribe();
  }

  getYoutubeTracks(){
    this.http.get(`${this.apiUrl}/track-list`,this.httpOptions).pipe(
      tap((res: Track[]) => {
        console.log(res);
        this.tracklistChanged.next(res)})
    ).subscribe();
  }

}
