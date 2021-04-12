function fetchSimpsonJSON() {


    const simpsons = [
        {
            quote: "By chilling my loins I increase the chances of impregnating my wife.",
            character: "Apu Nahasapeemapetilon",
            image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
            characterDirection: "Left"
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
