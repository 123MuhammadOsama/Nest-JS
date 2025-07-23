/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNumber()
    age: number;
}