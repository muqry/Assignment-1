import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getVideo(videoname: string):Observable<any>{

    const API_KEY = "AIzaSyDuX9g_vJCChhND3tH8pOOoPkT6mjY7-GI"

    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+videoname+"&type=video&key="+API_KEY+"&maxResults=20"

    return this.http.get<any>(url)



  }
}
