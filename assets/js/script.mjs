import {Reproductor} from "./reproductor.mjs";

const musica=new Reproductor("https://www.youtube.com/embed/mFBZdqsR3js","musica");
const peliculas=new Reproductor("https://www.youtube.com/embed/T14DQkV0fEQ","peliculas");
const series=new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY","series")
musica.playMultimedia();
peliculas.setInicio(9);
series.playMultimedia();