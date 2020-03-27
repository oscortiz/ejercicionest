import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LibroDto } from './libro-dto';
import { LibroDtoSinId } from './libro-dtosin-id';
import { RestService } from '../rest/rest.service';

@Controller('libro')
export class LibroController {

    // Conecta desde el Controlador Rest al Servicio: 
    // importa el servicio dentro del controlador y dentro
    // del constructor del controlador, mete un parámetro 
    // llamado restService del tipo RestService.
    constructor(private restService: RestService) {}

    // Listado de libros, devuelve un array de Libro
    @Get()
    async findAll(): Promise<LibroDto[]> {
        return this.restService.getLibros();
    }     
    /*
    findAll(): LibroDto[] {
        // Desde el controlador, modifica el método que
        // maneja el listado (GET /) para que coja los 
        // datos desde el servicio y devuelva los datos 
        // que nos devuelve el servicio
        return this.restService.getLibros();
    }
    */
   
    // Añadir un libro - devuelve un Libro
    @Post()
    async create(@Body() libroDtoSinId: LibroDtoSinId): Promise<LibroDto> {
        const libro = await this.restService.create(libroDtoSinId);
        return libro;
    }
    /*    
    addOne(@Body() createDto: LibroDtoSinId): LibroDto {
        const libroDTO = new LibroDto();
        libroDTO.id = 1;
        libroDTO.titulo = createDto.titulo;
        libroDTO.autor = createDto.autor;
        libroDTO.fecha = createDto.fecha;
        // Modifica el método que añade un libro (POST /)
        // para que llame al servicio para que añada el objeto al listado
        this.restService.addLibro(libroDTO);
        return libroDTO;
    }
    */
    // Obtener un libro - devuelve un Libro
    @Get('/:id')
    findOne(@Param('id') id: string): Promise<LibroDto> {
        return this.restService.findById(id);
    }    
    /*
    getById(@Param() params): LibroDto {
        const libroDTO = new LibroDto();
        libroDTO.id = params.id;
        libroDTO.titulo = 'Mi titulo';
        libroDTO.autor = 'El autor';
        libroDTO.fecha = new Date(); 
        return libroDTO;
    }
    */
    // Modificar un libro - devuelve un Libro
    @Put('/:id')
    async update(@Param('id') id: string, @Body() libroDtoSinId: LibroDtoSinId): Promise<LibroDto> {
        return this.restService.updateById(id, libroDtoSinId);
    }
    /*    
    modifyById(@Param() params,
                @Body() updateDto: LibroDtoSinId): LibroDto {
        const libroDTO = new LibroDto();
        libroDTO.id = params.id;
        libroDTO.titulo = updateDto.titulo;
        libroDTO.autor = updateDto.autor;
        libroDTO.fecha = updateDto.fecha;         
        return libroDTO;
    }
    */
    // Borrar un libro - devuelve un Libro
    @Delete('/:id')
    remove(@Param('id') id: string): Promise<LibroDto> {
        return this.restService.delete(id);
    }    
    /*
    deleteById(@Param() params): LibroDto {
        const libroDTO = new LibroDto();
        libroDTO.id = params.id;
        libroDTO.titulo = 'Otro titulo';
        libroDTO.autor = 'Otro autor';
        libroDTO.fecha = new Date();
        return libroDTO;
    }
    */
}
