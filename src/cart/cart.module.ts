import { Global, Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { ItemsModule } from 'src/items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './cart.schema';
import { UserModule } from 'src/user/user.module';
import { OrderModule } from 'src/order/order.module';
import { CartResolver } from './cart.resolver';

@Global()
@Module({
  imports: [
    ItemsModule,
    UserModule,
    OrderModule,
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
  ],
  providers: [CartService, CartResolver],
  exports: [MongooseModule, CartService],
})
export class CartModule {}
