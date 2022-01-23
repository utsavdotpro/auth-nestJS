import { AuthenticatedGuard } from './auth/authenticated.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { message: 'Logged in!' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  getHello(@Request() req): string {
    return req.user;
  }
}
