function like() {
  this.isLiked = !this.isLiked;
}
function getSongInfo() {
  return `${this.artist} - "${this.title}"(${this.releaseYear})`;
}

function createSong(title, artist, releaseYear) {
  const newSong = {
    title,
    artist,
    isLiked: false,
    like,
    releaseYear,
    getSongInfo,
  };

  return newSong;
}

const miCancion = createSong("Despacito", "Luis Fonsi", 2020);

console.log(miCancion.getSongInfo());

class PodcastEpisode {
  constructor(titulo, artista, guest, duration) {
    this._titulo = titulo;
    this._artista = artista;
    this._guest = guest;
    this._duration = duration;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
  getEpisodeInfo() {
    return `${this._artista}. "${this._titulo}" - ${this._artista} (${this._duration})`;
  }
}

class Song {
  constructor(title, artist, releaseYear) {
    this._title = title;
    this._artist = artist;
    this._releaseYear = releaseYear;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getSongInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`;
  }
}
