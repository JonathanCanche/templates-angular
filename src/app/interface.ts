export interface WebData{

    icon:string;
    tipo:number;
    secciones:{

        home:{
            navbar:string;
            imagen:Array<{imagen:string}>;
            titulo:string;
            subtitulo:string;
        }
        
        about:{
            navbar:string;
            titulo:string;
            imagen:string;
            subtitulo:string;
            descripcion:string;
        }

        servicios:{
            navbar:string;
            titulo:string;
            servicio:Array<{imagen:string,titulo:string,descripcion:string}>;
        }
        estadisticas:Array<{grafica:number,titulo:string}>;

        equipo:{
            navbar:string;
            titulo:string;
            personas:Array<{imagen:string,titulo:string,subtitulo:string,twitter:string,facebook:string,instagram:string}>;
        }
        imagencontacto:{
            imagen:string;
            titulo:string;
            subtitulo:string;   
        }
        galeria:{
            navbar:string;
            titulo:string;
            imagenes:Array<{imagen:string,titulo:string,subtitulo:string}>
        }
        noticias:{
            navbar:string;
            titulo:string;
            noticia:Array<{imagen:string,titulo:string,descripcion:string}>;
        }
        contacto:{
            navbar:string;
            titulo:string;
            telefono:string;
            email:string;
            lugar:string;
        }
    }
}