import { Component, OnInit } from '@angular/core';
import { SongsServices } from '../Services/songsServices';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: any;

  constructor() { }

  ngOnInit(): void {

    this.songs = new SongsServices().songs;
  }

}
