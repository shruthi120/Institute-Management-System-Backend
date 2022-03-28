import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CounterModule } from './counter/counter.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL, { useFindAndModify: false }),
    UsersModule,
    AuthModule,
    CounterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
