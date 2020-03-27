import { IsDate, IsString } from 'class-validator';

export class LibroDtoSinId {
    @IsString()
    titulo: string;
    @IsString()
    autor: string;
    @IsDate()
    fecha: Date;    
}
