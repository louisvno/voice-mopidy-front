import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Media } from './model/media.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {
  apiUrl = environment.apiUrl;

  public tracklistChanged = new Subject<Media[]>();

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  addMedia(resourceId:string){
    this.http.post<Media[]>(`${this.apiUrl}/media-add`,{ resourceId:resourceId}).pipe(
      tap(res => this.tracklistChanged.next(res))
    ).subscribe();
  }

  getMediaList(){
    this.http.get(`${this.apiUrl}/media-list`,this.httpOptions).pipe(
      tap((res: Media[]) => {
        this.tracklistChanged.next(res)})
    ).subscribe();
  }

}
