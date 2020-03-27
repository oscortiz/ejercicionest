import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { RestService } from './rest/rest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Libro } from './libro/libro.schema';

@Module({
  controllers: [LibroController],
  providers: [RestService],
  imports: [MongooseModule.forFeature([{ name: 'Libro', schema: Libro, collection: 'libros' }])],
})
export class ApiModule {}
