class AudioItem {
  constructor(title, artist) {
    this._title = title;
    this._artist = artist;
    this._isLiked = false;
  }
  like() {
    this.isLiked = !this.isLiked;
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

class PodcastEpisode {
  constructor(title, artist, guest, duration) {
    this._title = title;
    this._artist = artist;
    this._guest = guest;
    this._duration = duration;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${
      this._guest
    } (${this._getFormattedDuration()} seconds)`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // el número total de minutos
    const seconds = this._duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ? seconds : 0 + seconds}`;
  }
}
