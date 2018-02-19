class Playlist {
  constructor(options) {
    const { media } = options

    this.isPlaying = true
    this.media = media
    this.currentMediaPosition = 0
  }

  get current() {
    return this.media[this.currentMediaPosition]
  }

  next() {
    if (this.currentMediaPosition < this.media.length - 1) {
      this.currentMediaPosition++
    } else {
      this.currentMediaPosition = 0
      this.isPlaying = false
    }
  }

  previous() {
    this.currentMediaPosition--
  }
}

export default Playlist
