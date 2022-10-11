/**
 * Clase que está simulando el servicio de una lista de canciones
 */
export class SongsServices{
  songs = [
    {
      id: 1,
      title: 'Thriller',
      artist: 'Michael Jackson',
      year: '1980',
      album: 'Thriller',
      genres: ['Disco', 'Pop', 'Funk'],
      producer: 'Quincy Jones',
      songwriter: 'Rod Temperton'
    },
    {
      id: 2,
      title: 'Rolling in the Deep',
      artist: 'Adele',
      year: '2011',
      album: '21',
      genres: ['Rhythm and blues', 'Soul'],
      producer: 'Paul Epworth',
      songwriter: 'Adele Adkins'
    },
    {
      id: 3,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      year: '2019',
      album: 'Blinding Lights',
      genres: ['Rhythm and blues', 'Soul', 'Synthwave'],
      producer: 'Max Martin',
      songwriter: 'Abel Tesfaye'
    }
  ]

  constructor(){}

}
