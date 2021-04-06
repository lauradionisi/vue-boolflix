Vue.config.devtools = true;


var app = new Vue({
    el: "#app",
    data: {
        movies: [],
        userQuery: ''

    },

    // funzione per inserire l'input in una variabile che andrà concatenata alla url della richiesta (?)

    // methods: {
    //     searchMovie: function() {
    // 
    //         this.userQuery = 
    //     }
    // },


    mounted() {  
        const self = this;
 
            axios 
                .get('https://api.themoviedb.org/3/movie/550?api_key=68f51a66076d768b3ce843cf630b46b5')

                .then(function(result) {
                    const movies = result.data;
                    console.log(result.data.title);
                    console.log(movies.original_title);

                    self.movies = movies;       
                    
        
        });      

    }, 


});
