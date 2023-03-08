import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

interface Options {
  flag: boolean
}

export const createDynamicController = (controllerOptions: Options) => {
@Controller('coffees')
class CoffeesController {
    constructor(public coffeesService: CoffeesService) 
    {}
  @Get()
  findALL(@Query() paginationQuery) {
    if (controllerOptions.flag) {
      return {
        message: 'Use SQL Instead'
      }
    }
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: Partial<CreateCoffeeDto>) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: Partial<UpdateCoffeeDto>) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}

  return CoffeesController
}
