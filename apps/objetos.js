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
    this.titulo = titulo;
    this.artista = artista;
    this.guest = guest;
    this.duration = duration;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
  getEpisodeInfo() {
    return `${this.artista}. "${this.titulo}" - ${this.artista} (${this.duration})`;
  }
}
