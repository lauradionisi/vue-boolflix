Vue.config.devtools = true;


var app = new Vue({
    el: "#app",
    data: {
        movies: [],
        userQuery: ''

    },

    methods: {

        searchMovie() {
            const self = this;
            axios 
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: "68f51a66076d768b3ce843cf630b46b5",
                        query: this.userQuery
                    }
                })

                .then(function(result) {
                    const movies = result.data;
                    //console.log(result.data.results);
                    self.movies = result.data.results;
                    console.log(self.movies);
                });
        }

    }

});
