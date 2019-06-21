export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "80x80")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `
        <div class="col">
        <img src="${ this.albumArt}"</img>
         <h4>Title: ${ this.title}</h4> 
         <h4>Artist: ${ this.artist}</h4>
         <h4>Collection: ${ this.collection}</h4 >
         <p> Price: ${ this.price}</p>
         <audio controls class="preview" src="${ this.preview}"></audio control>
         </div>
     `
    }
}