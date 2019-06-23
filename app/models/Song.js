export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "200x200")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `
        <div id="tiles" class="col-3 " >
        <img  src="${ this.albumArt}"</img>
         <h6>Title: ${ this.title}</h6> 
         <h6>Artist: ${ this.artist}</h6>
         <h6>Collection: ${ this.collection}</h6>
         <p> Price: ${ this.price}</p>
         <audio controls class="preview" src="${ this.preview}"></audio control>
         </div>
     `
    }
}