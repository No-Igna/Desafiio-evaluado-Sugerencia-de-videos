import { Multimedia } from "./multimedia.mjs";

export class Reproductor extends Multimedia{
    constructor (url,id){
        super(url);
        this.id=id;
    }
    playMultimedia(){
        multimediaModule.play(this.url,this.id);
    }
    setInicio(tiempo){
        let finalUrl=this.url+`?start=${tiempo}`;
        document.getElementById(this.id).setAttribute("src", finalUrl);
    }
}
const multimediaModule = (()=>{
    const insertVideo=(url,id)=>{
        const iframe=document.getElementById(id);
        iframe.setAttribute("src",url);
    };
    return{
        play:(url,id)=>insertVideo(url,id)
    }
})();