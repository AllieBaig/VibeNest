
// scripts/player/playlistManager.js
// MIT License - 2025-05-27

export class PlaylistManager {
  constructor(storageKey = 'subliminalPlaylist') {
    this.storageKey = storageKey;
    this.playlist = this.loadPlaylist();
  }

  loadPlaylist() {
    const data = localStorage.getItem(this.storageKey);
    try {
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to parse playlist data:', e);
      return [];
    }
  }

  savePlaylist() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.playlist));
  }

  addTrack(track) {
    this.playlist.push(track);
    this.savePlaylist();
  }

  removeTrack(index) {
    this.playlist.splice(index, 1);
    this.savePlaylist();
  }

  updateTrack(index, newTrack) {
    this.playlist[index] = { ...this.playlist[index], ...newTrack };
    this.savePlaylist();
  }

  moveTrack(fromIndex, toIndex) {
    const [moved] = this.playlist.splice(fromIndex, 1);
    this.playlist.splice(toIndex, 0, moved);
    this.savePlaylist();
  }

  getTracks() {
    return this.playlist;
  }

  clearPlaylist() {
    this.playlist = [];
    this.savePlaylist();
  }
}
