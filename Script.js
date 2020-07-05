var ol = document.querySelector("ol");
var li = document.createElement("li");
var body = document.querySelector("body");

//Avengers Endgame Movie Poster Image Element
var Endgame = document.createElement("a");
var EndgameText = document.createTextNode("Avengers: Endgame");
Endgame.setAttribute("href", "https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0");
Endgame.appendChild(EndgameText);

//Doctor Strange Movie Poster Image Element
var DoctorStrange = document.createElement("a");
var DoctorStrangeText = document.createTextNode("Doctor Strange");
DoctorStrange.setAttribute("href", "https://www.imdb.com/title/tt1211837/?ref_=nv_sr_srsg_0");
DoctorStrange.appendChild(DoctorStrangeText);

//Incredibles Movie Poster Image Element
var Incredibles = document.createElement("a");
var IncrediblesText = document.createTextNode("Incredibles 2");
Incredibles.setAttribute("href", "https://www.imdb.com/title/tt3606756/?ref_=nv_sr_srsg_3");
Incredibles.appendChild(IncrediblesText);

//Theory of Everything Movie Poster Image Element
var Theory = document.createElement("a");
var TheoryText = document.createTextNode("The Theory of Everything");
Theory.setAttribute("href", "https://www.imdb.com/title/tt2980516/?ref_=nv_sr_srsg_3")
Theory.appendChild(TheoryText);

//Joker Movie Poster Image Element
var Joker = document.createElement("a");
JokerText = document.createTextNode("Joker");
Joker.setAttribute("href", "https://www.imdb.com/title/tt7286456/?ref_=nv_sr_srsg_0");
Joker.appendChild(JokerText);

const movies =  [
    
    {
        name: "Avengers: Endgame",
        year: 2019,
        director: "Joe Russo, Anthony Russo",
        picture: Endgame,
    },

    {
        name: "Doctor Strange",
        year: 2016,
        director: "Scott Derrikson",
        picture: DoctorStrange,
    },

    {
        name: "Incredibles 2",
        year: 2019,
        director: "Brad Bird",
        picture: Incredibles,
    },

    {
        name: "The Theory of Everything",
        year: 2014,
        director: "James Marsh",
        picture: Theory,
    },

    {
        name: "Joker",
        year: 2019,
        director: "Todd Phillips",
        picture: Joker,
    }

];

const template = movies.map (movie => `
<li>
    <p><strong>Movie Title:</strong> ${movie.name}</p>
    <p><strong>Year:</strong> ${movie.year}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Movie Poster:</strong> ${movie.picture}</p>
</li>
`)

ol.innerHTML = template.join("");