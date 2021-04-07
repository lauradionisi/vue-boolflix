Vue.config.devtools = true;


var app = new Vue({
    el: "#app",
    data: {
        movies: [],
        voteAverage: [],
        stars: [],
        userQuery: '',
        countryFlags: []
    },

    methods: {
        

        searchMovie() {
       

            
            axios 
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: "68f51a66076d768b3ce843cf630b46b5",
                        query: this.userQuery
                    }
                })

                .then(result => {
                    this.movies = result.data.results;
                    this.movies.forEach(element => {
                        element.vote_average = Math.ceil((element.vote_average * 5) / 10);
                    });
                    
                })

               

        },

    

        getStar() {
            this.voteAverage = result.data.results.vote_average;        
        }

       
    }

});
