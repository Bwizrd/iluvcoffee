import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { createDynamicController } from './coffees.controller';

@Module({ 
  imports: [MongooseModule.forFeature([{ 
    name: Coffee.name, 
    schema: CoffeeSchema 
  }])],
  controllers: [createDynamicController({
    flag: false,
   })
  ],
  providers: [CoffeesService] 
})
export class CoffeesModule {}