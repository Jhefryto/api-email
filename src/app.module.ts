// require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: '', //smtp hosting
        port: 587, //puerto de corre
        secure: false, //true en caso de quesea puerto 465
        auth: {
          user: '', //user
          pass: '', //paswword
        },
      },
      defaults: {
        from: '"No Reply" <user.correo>', // correo de inicio de sesion
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), //libreria de plantilla
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
