/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto9';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
          id: String(Date.now()),
          ...createCustomerDto,
        };
        console.log('New customer:', newCustomer); // 👈 Add this
        this.customers.push(newCustomer);
        return newCustomer;
      }
      
    
}
