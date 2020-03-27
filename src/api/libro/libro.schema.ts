import * as mongoose from 'mongoose';

export const Libro = new mongoose.Schema({
    titulo: String,
    autor: String,
    fecha: Date
});