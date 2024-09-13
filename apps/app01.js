class PodcastEpisode {
  constructor(title, artist, guest, duration) {
    this._title = title;
    this._artist = artist;
    this.isLiked = false;
    this.guest = guest;
    this.duration = duration;
  }
  like() {
    this.isLiked = !isLiked;
  }
  getEpisodeInfo() {
    return ` ${this._artist}. "${this._title}"- ${
      this.guest
    } (${this.getFormattedDuration()} )`;
  }
  getFormattedDuration() {
    const minutes = Math.floor(this.duration / 60); //el número total de minutos
    const seconds = this.duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
  }
}

const podcast1 = new PodcastEpisode("hola", "Mundo");

console.log(PodcastEpisode);
