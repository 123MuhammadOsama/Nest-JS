/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto, PatchStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
    private students = [
        {id:1, name: 'John', age: 20},
        {id:2, name: 'Jane', age: 21},
        {id:3, name: 'Jim', age: 22},
    ]
    getStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((s) => s.id === id);;
        if (!student) throw new NotFoundException('Student not found');
        return student;
    }
    //post

    createStudent(data: CreateStudentDto) {
        // Validate required fields
        if (!data.name || !data.age) {
            throw new Error('Name and age are required fields');
        }
        
        const newStudent = {
            id: Date.now(),
            ...data,
        }
        this.students.push(newStudent);
        return newStudent;
    }

    //put
    updateSTudent(id: number, data: UpdateStudentDto) {
        const index = this.students.findIndex((s) => s.id === id);;
        if(index === -1) throw new NotFoundException('Student not found');
        this.students[index] = {id, ...data};
        return this.students[index];
    }

    //patch

    patchStudent(id: number, data: PatchStudentDto) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    //delete

    deleteStudent(id: number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
        const deleted = this.students.splice(index, 1);
        return {message: 'Student deleted successfully', student: deleted[0]};

    }
 
}
