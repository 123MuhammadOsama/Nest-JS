/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        {
            id: 1, name: 'John Doe', age: 30,
        },
        {
            id: 2, name: 'Jane Smith', age: 25,
        },
        {
            id: 3, name: 'Jim Beam', age: 40,
        },
    ];
    getAllEmployees(){
        return this.employees;
    }
    getEmployeeById(id: number){
        return this.employees.find(employee => employee.id === id);
    }

}
