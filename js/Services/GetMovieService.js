export default class GetMovies {
    constructor() {
        this.baseurl = "https://api.themoviedb.org/3/"
        this.apikey = "?api_key=c8221cf4085bc40d4613ba2de4737221"
        this.Msearch = "search/movie"
    }


    async DiscoverMovies(GenreID, pagenr, sortby, whatimage, input) {
        let collectedmovies = [];
        let data2
        if (!input) {
            if (!sortby) {
                sortby = "popularity.desc"
            }
            if (!GenreID || GenreID == "All") {
                GenreID = "";
            }
            data2 = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c8221cf4085bc40d4613ba2de4737221&with_genres="+GenreID+"&page="+pagenr+"&sort_by="+sortby+"&vote_count.gte=50")
                .then((response) => {
                    return response.json();
                })
        } else {
            // console.log(input)
            data2 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=c8221cf4085bc40d4613ba2de4737221&query="+input+"&page="+pagenr+"")
                .then((response) => {
                    return response.json();
                })
        }
        for (let i = 0; i < data2.results.length; i++) {
            let a = new Object();
            a.id = data2.results[i].id
            a.title = data2.results[i].title
            a.overview = data2.results[i].overview
            if (whatimage == "poster") {
                if (data2.results[i].poster_path) {
                    a.image = "https://image.tmdb.org/t/p/w342/"+data2.results[i].poster_path+"";
                    } else {
                    a.image = ".././images/backupbackdrop.jpg"
                    }
            } else {
                if (data2.results[i].backdrop_path) {
                    a.image = "https://image.tmdb.org/t/p/w780/"+data2.results[i].backdrop_path+"";
                    } else {
                    a.image = ".././images/backupbackdrop.jpg"
                    }
            }
            a.release_date = data2.results[i].release_date
            a.vote_average = data2.results[i].vote_average

            let genreIds = data2.results[i].genre_ids
            let convertedGenres = []
            let counter = 0;
            let data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c8221cf4085bc40d4613ba2de4737221&language=en-US")
                .then((response) => {
                    return response.json();
                })
            for (let i = 0; i < genreIds.length; i++) {
                for (let z = 0; z < data.genres.length; z++) {
                    if (genreIds[i] == data.genres[z].id &&
                        data.genres[z].name != "Crime" &&
                        data.genres[z].name != "Family" &&
                        data.genres[z].name != "History" &&
                        data.genres[z].name != "Music" &&
                        data.genres[z].name != "Mystery" &&
                        data.genres[z].name != "Romance" &&
                        data.genres[z].name != "TV Movie" &&
                        data.genres[z].name != "Thriller" &&
                        data.genres[z].name != "War" &&
                        data.genres[z].name != "Western"
                    ) {
                        let Cgenre
                        if (data.genres[z].name == "Science Fiction") {
                            Cgenre = "Sci-Fi"
                        } else {
                            Cgenre = data.genres[z].name
                        }
                        counter++
                        if (counter > 0) {
                            Cgenre = " " + Cgenre + ""
                        }
                        convertedGenres.push(Cgenre)
                    }
                }
            }
            a.genre = convertedGenres;
            collectedmovies.push(a)
        }
        return collectedmovies
    }
    
    async SearchMovie(GenreID, pagenr) {
        let collectedmovies = [];
        let data2 = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c8221cf4085bc40d4613ba2de4737221&with_genres="+GenreID+"&page="+pagenr+"")
            .then((response) => {
                return response.json();
            })
            // console.log(data2)
        for (let i = 0; i < data2.results.length; i++) {
            let a = new Object();
            a.id = data2.results[i].id
            a.title = data2.results[i].title
            a.overview = data2.results[i].overview
            if (data2.results[i].backdrop_path) {
            a.backdrop_path = "https://image.tmdb.org/t/p/w780/"+data2.results[i].backdrop_path+"";
            } else {
            a.backdrop_path = ".././images/backupbackdrop.jpg"
            }
            a.release_date = data2.results[i].release_date
            a.vote_average = data2.results[i].vote_average

            let genreIds = data2.results[i].genre_ids
            let convertedGenres = []
            let counter = 0;
            let data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c8221cf4085bc40d4613ba2de4737221&language=en-US")
                .then((response) => {
                    return response.json();
                })
            for (let i = 0; i < genreIds.length; i++) {
                for (let z = 0; z < data.genres.length; z++) {
                    if (genreIds[i] == data.genres[z].id &&
                        data.genres[z].name != "Crime" &&
                        data.genres[z].name != "Family" &&
                        data.genres[z].name != "History" &&
                        data.genres[z].name != "Music" &&
                        data.genres[z].name != "Mystery" &&
                        data.genres[z].name != "Romance" &&
                        data.genres[z].name != "TV Movie" &&
                        data.genres[z].name != "Thriller" &&
                        data.genres[z].name != "War" &&
                        data.genres[z].name != "Western"
                    ) {
                        let Cgenre
                        if (data.genres[z].name == "Science Fiction") {
                            Cgenre = "Sci-Fi"
                        } else {
                            Cgenre = data.genres[z].name
                        }
                        counter++
                        if (counter > 0) {
                            Cgenre = " " + Cgenre + ""
                        }
                        convertedGenres.push(Cgenre)
                    }
                }
            }
            a.genre = convertedGenres;
            collectedmovies.push(a)
        }
        return collectedmovies
    }



    async getmoviefromID(ID) {
        let data3 = await fetch("https://api.themoviedb.org/3/movie/"+ID+"?api_key=c8221cf4085bc40d4613ba2de4737221")
            .then((response) => {
                return response.json();
            })
        // for (let i = 0; i < data2.results.length; i++) {
            let a = new Object();
            a.title = data3.title
            a.overview = data3.overview
            if (data3.backdrop_path) {
            a.backdrop_path = "https://image.tmdb.org/t/p/w780/"+data3.backdrop_path+"";
            } else {
            a.backdrop_path = ".././images/backupbackdrop.jpg"
            }
            a.release_date = data3.release_date
            a.vote_average = data3.vote_average

            let genreIds = data3.genres
            let convertedGenres = []
            let counter = 0;
            let data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c8221cf4085bc40d4613ba2de4737221&language=en-US")
                .then((response) => {
                    return response.json();
                })
            for (let i = 0; i < genreIds.length; i++) {
                for (let z = 0; z < data.genres.length; z++) {
                    if (genreIds[i].id == data.genres[z].id &&
                        data.genres[z].name != "Crime" &&
                        data.genres[z].name != "Family" &&
                        data.genres[z].name != "History" &&
                        data.genres[z].name != "Music" &&
                        data.genres[z].name != "Mystery" &&
                        data.genres[z].name != "Romance" &&
                        data.genres[z].name != "TV Movie" &&
                        data.genres[z].name != "Thriller" &&
                        data.genres[z].name != "War" &&
                        data.genres[z].name != "Western"
                    ) {
                        let Cgenre
                        if (data.genres[z].name == "Science Fiction") {
                            Cgenre = "Sci-Fi"
                        } else {
                            Cgenre = data.genres[z].name
                        }
                        counter++
                        if (counter > 0) {
                            Cgenre = " " + Cgenre + ""
                        }
                        convertedGenres.push(Cgenre)
                    }
                }
        }
        a.genre = convertedGenres;
        return a
    }
    // async determineGenre(sedata) {
    //     let genreIds = sedata.results.genre_ids
    //     let convertedGenres = []
    //         let counter = 0;
    //         let data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c8221cf4085bc40d4613ba2de4737221&language=en-US")
    //         .then((response)=>{
    //             return response.json();
    //         })
    //         for (let i = 0; i<genreIds.length; i++) {
    //             for (let z = 0; z<data.genres.length; z++) {
    //                 if (genreIds[i] == data.genres[z].id
    //                     && data.genres[z].name != "Crime"
    //                     && data.genres[z].name != "Family"
    //                     && data.genres[z].name != "History"
    //                     && data.genres[z].name != "Music"
    //                     && data.genres[z].name != "Mystery"
    //                     && data.genres[z].name != "Romance"
    //                     && data.genres[z].name != "TV Movie"
    //                     && data.genres[z].name != "Thriller"
    //                     && data.genres[z].name != "War"
    //                     && data.genres[z].name != "Western"
    //                     ) {
    //                     let Cgenre
    //                     if (data.genres[z].name == "Science Fiction") {
    //                         Cgenre = "Sci-Fi"
    //                     } else {
    //                         Cgenre = data.genres[z].name
    //                     }
    //                     counter ++
    //                     if (counter > 0) {
    //                         Cgenre = " "+Cgenre+""
    //                     }
    //                     convertedGenres.push(Cgenre)
    //                 }
    //             }
    //         }
    //     return convertedGenres;
    // }
}