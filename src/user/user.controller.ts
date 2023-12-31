import { Controller, Delete, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  findAll(): string {
    return 'this action returns all users';
  }

  @Get("/by-id")
  findById(): string {
    return 'this action will delete a user by id';
  }

}
