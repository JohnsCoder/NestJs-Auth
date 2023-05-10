import { Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(@Req() req : Request, ): string {
    return req.body;
  }
}
