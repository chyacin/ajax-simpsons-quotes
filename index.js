function fetchSimpsonJSON() {


    const simpsons =[
        {
         "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
         "character": "Nelson Muntz",
         "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
         "characterDirection" : "Left"
        }
      ]
        ;

    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)

        .then(function (response) {
            return response.data; // response.data instead of response.json() with fetch
        })

        .then(function ([simpsons]) {

            console.log('data decoded from JSON:', [simpsons]);


            // Build a block of HTML

            const simpsonsHtml = ` 
            <h1>${simpsons.quote}</h1>
          <p><strong>${simpsons.character}</strong></p>
          <img src="${simpsons.image}" />
  
        `;

            document.querySelector('#simpson').innerHTML = simpsonsHtml;

        });

}


fetchSimpsonJSON();
