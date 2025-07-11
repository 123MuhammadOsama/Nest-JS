import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmpoloyeeModule } from './empoloyee/empoloyee.module';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';

@Module({
  imports: [EmpoloyeeModule],
  controllers: [AppController, UserController, ProductController, EmployeeController],
  providers: [AppService, ProductService, EmployeeService],
})
export class AppModule {}
