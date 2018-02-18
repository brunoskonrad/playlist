class Playlist {
  constructor(options) {
    const { media } = options

    this.media = media
    this.currentMediaPosition = 0
  }

  get current() {
    return this.media[this.currentMediaPosition]
  }

  next() {
    this.currentMediaPosition++
  }
}

export default Playlist
