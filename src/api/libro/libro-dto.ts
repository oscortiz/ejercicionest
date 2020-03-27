import { IsNumber, IsDate, IsString } from 'class-validator';

export class LibroDto {
    @IsNumber()
    id: number;
    @IsString()
    titulo: string;
    @IsString()
    autor: string;
    @IsDate()
    fecha: Date;
}
