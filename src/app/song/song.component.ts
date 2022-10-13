import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsServices } from '../Services/songsServices';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
 /* Declaración de variables/atributos necesarios **/
  song: any;
  songs: any;
  songId: string | null = '';
  listeners: string = '';

/**
 * Utilizamos el provided ActivatedRoute para recoger el id de la url
 * @param activatedRoute provee acceso a la información relacionadas con las rutas
 * de un componente
 */
  constructor(
    private activatedRoute: ActivatedRoute)
    {
      /** Creamos una instancia de songServices que contiene el array de canciones */
      this.songs = new SongsServices().songs;
    }
/**
 * Ciclo de vida que se ejecuta al inicio de montar el componente.
 * Aquí recogemos el id de la url para poder encontrar el objeto que
 * corresponde con el id.
 */
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: { get: (arg0: string) => string | null; }) => {
      this.songId = params.get('id');
    });
    this.song = this.songs.find((item:any) => item.id == this.songId);
  }
}
