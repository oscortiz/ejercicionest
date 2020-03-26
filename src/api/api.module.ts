import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { RestService } from './rest/rest.service';

@Module({
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}
