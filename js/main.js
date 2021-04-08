Vue.config.devtools = true;


var app = new Vue({
    el: "#app",
    data: {
        movies: [],
        voteAverage: [],      
        userQuery: '',
        countryFlags: ['en', 'es', 'fr', 'it', 'ja' ]
    },

    methods: {
        

        searchMovieTv() {
         
          const self = this;

          self.results = [];

            axios 
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: "68f51a66076d768b3ce843cf630b46b5",
                        query: self.userQuery,
                        language: 'it-IT'
                    }
                })

                .then(result => {
                    const movies = result.data.results; 
                    
                    self.movies = self.results.concat(movies);
                });

                // chiamata serie tv

                axios 
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: "68f51a66076d768b3ce843cf630b46b5",
                        query: self.userQuery,
                        language: 'it-IT'
                    }
                })

                .then(result => {
                    const moviesTv = result.data.results; 
                    self.moviesTv = self.results.concat(moviesTv);
                })

               

        },

        getStar(star) {
            return parseInt(star / 2);       
        },
        
        // utilizzo del template literal per la riceerca delle immagini e del poster

        getFlag(lang) {
            return `img/${lang}.png`
        },

        getPoster(poster) {
            return `https://image.tmdb.org/t/p/w185/${poster}`;
        }

       
    }

});
