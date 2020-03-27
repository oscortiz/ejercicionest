import { Injectable } from '@nestjs/common';
import { LibroDto } from '../libro/libro-dto';
import { LibroDtoSinId } from '../libro/libro-dtosin-id';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Libro } from '../libro/libro.schema';

@Injectable()
export class RestService {
    // Dentro del servicio declara una propiedad llamada libros
    // de tipo array del tipo Libro 
    libros: LibroDto[];

    constructor(@InjectModel('Libro') private readonly modelo: Model<LibroDto>) {
        // Inicializa en el constructor del servicio la 
        // propiedad libros, con un array vacío
        this.libros = [];
    }

    // Crea un método llamado getLibros que devuelva 
    // la propiedad libros
    /*getLibros(): LibroDto[] {
        return this.libros;
    }*/

    async getLibros(): Promise<LibroDto[]> {
        return await this.modelo.find().exec();
    }    

    // Crea un método nuevo llamado addLibro en el 
    // servicio que acepte como parámetro un objeto 
    // de tipo libro, que añada la listado de libros 
    // el libro que se le pasa como parámetro.
    /*addLibro(libro: LibroDto) {
        this.libros.push(libro);
    }*/

    async create(libroDtoSinId: LibroDtoSinId): Promise<LibroDto> {
        const createdLibro = new this.modelo(libroDtoSinId);
        return await createdLibro.save();
    }

    async findById(id: string): Promise<LibroDto> {
        return await this.modelo.findById(id);
    }    

    async updateById(id: string, libroDtoSinId: LibroDtoSinId): Promise<LibroDto> {
        await this.modelo.updateOne({ _id : id }, libroDtoSinId);
        return await this.modelo.findById(id);
    }    

    async delete(id: string): Promise<LibroDto> {
        const libro = await this.modelo.findById(id);
        await this.modelo.findOneAndRemove({ _id : id });
        return libro;
    }    
}
