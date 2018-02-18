import Playlist from './playlist'

describe('Playlist', () => {
  describe('when having a playlist with 3 songs', () => {
    const fixture = [
      { name: 'Sweater Weather', artist: 'The Neighbourhood' },
      { name: 'Numb', artist: 'Linkin Park' },
      { name: '21 Guns', artist: 'Green Day' }
    ]

    it('moves from ther first to the second', () => {
      const playlist = new Playlist({
        media: fixture
      })

      expect(playlist.current.name).toBe('Sweater Weather')

      playlist.next()

      expect(playlist.current.name).toBe('Numb')
    })
  })
})
