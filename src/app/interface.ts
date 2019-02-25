export interface WebData{

    icon:string;
    tipo:number;
    secciones:{

        home:{
            navbar:string;
            imagen:string;
            titulo:string;
            subtitulo:string;
            botones:string;
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
        estadisticas:Array<{grafica:string,titulo:string}>;

        equipo:{
            navbar:string;
            titulo:string;
            personas:Array<{imagen:string,titulo:string,subtitulo:string}>;
        }
        imagencontacto:{
            imagen:string;
            Titulo:string;
            subtitulo:string;
            boton:string;
        }
        galeria:{
            navbar:string;
            imagenes:Array<{imagen:string,titulo:string,subtitulo:string}>
        }
        noticias:{
            titulo:string;
            noticia:Array<{imagen:string,titulo:string,descripcion:string,boton:string}>;
        }
        contacto:{
            navbar:string;
            titulo:string;
            telefono:string;
            emai:string;
            lugar:string;
        }
    }
}