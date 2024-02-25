import { Component, ElementRef, ViewChild } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  video:any

  @ViewChild('videoName') videoName!: ElementRef;

  constructor(private youtube:YoutubeService){}

  ngOnInit(){
    this.youtube.getVideo("youtube api angular tutorial").subscribe((data) => {
      console.log(data)
      this.video = data.items
    })
  }

  getData(){
    var videoName = this.videoName.nativeElement.value

    this.youtube.getVideo(videoName).subscribe((data) => {
      console.log(data)
      this.video = data.items
    })
  }

}

