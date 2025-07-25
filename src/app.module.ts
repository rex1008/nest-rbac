import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "192.168.56.100",
      port: 3306,
      username: "root",
      password: "root",
      database: 'nest_rbac',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      poolSize: 10,
      connectorPackage: 'mysql2'
    }),
    JwtModule.register({
      global: true,
      secret: 'water',
      signOptions: {
        expiresIn: '1d'
      }
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
