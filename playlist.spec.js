import Playlist from './playlist'

describe('Playlist', () => {
  describe('when having a playlist with 3 songs', () => {
    const fixture = [
      { name: 'Sweater Weather', artist: 'The Neighbourhood' },
      { name: 'Numb', artist: 'Linkin Park' },
      { name: '21 Guns', artist: 'Green Day' }
    ]

    let playlist

    beforeEach(() => {
      playlist = new Playlist({
        media: fixture
      })
    })

    it('moves from the first to the second', () => {
      expect(playlist.current.name).toBe('Sweater Weather')

      playlist.next()

      expect(playlist.current.name).toBe('Numb')
    })

    it('moves from the second to the first', () => {
      playlist.next()

      expect(playlist.current.name).toBe('Numb')

      playlist.previous()

      expect(playlist.current.name).toBe('Sweater Weather')
    })

    it('goes to the first media and pause after last song', () => {
      playlist.next()
      playlist.next()
      playlist.next()

      expect(playlist.current.name).toBe('Sweater Weather')
      expect(playlist.isPlaying).toBe(false)
    })
  })
})
