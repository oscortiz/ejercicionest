import { Injectable } from '@nestjs/common';
import { LibroDto } from '../libro/libro-dto';

@Injectable()
export class RestService {
    // Dentro del servicio declara una propiedad llamada libros
    // de tipo array del tipo Libro 
    libros: LibroDto[];

    constructor() {
        // Inicializa en el constructor del servicio la 
        // propiedad libros, con un array vacío
        this.libros = [];
    }

    // Crea un método llamado getLibros que devuelva 
    // la propiedad libros
    getLibros(): LibroDto[] {
        return this.libros;
    }

    // Crea un método nuevo llamado addLibro en el 
    // servicio que acepte como parámetro un objeto 
    // de tipo libro, que añada la listado de libros 
    // el libro que se le pasa como parámetro.
    addLibro(libro: LibroDto) {
        this.libros.push(libro);
    }
}
