/* eslint-disable prettier/prettier */
    /* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto, UpdateStudentDto, PatchStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){};

    @Get()
    getAll(){
        return this.studentService.getStudents();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.studentService.getStudentById(Number(id))
    }

    @Post()
    create(@Body() body: CreateStudentDto ){
        return this.studentService.createStudent(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: UpdateStudentDto ){
            return this.studentService.updateSTudent(Number(id), body);
    }
    @Patch(':id')
    patch(@Param('id') id: string, @Body() body: PatchStudentDto ){
        return this.studentService.patchStudent(Number(id), body);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.studentService.deleteStudent(Number(id));
    }

}