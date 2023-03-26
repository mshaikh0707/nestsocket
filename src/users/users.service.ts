import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
// import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly eventGateway: EventsGateway
    // @InjectRepository(User)
    // private readonly usersRepository: Repository<User>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   const user = new User();
  //   user.firstName = createUserDto.firstName;
  //   user.lastName = createUserDto.lastName;

  //   return user;
  // }

  async getPDF(){
    setTimeout(() => {
      this.eventGateway.broadcast("user1@example.com",{pdf:"ijnwdijif"});
    },10000)
  }
  async findAll() {
    this.getPDF();
    return [];
  }

  // findOne(id: number) {
  //   return this.usersRepository.findOneBy({ id: id });
  // }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
