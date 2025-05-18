import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest() as Request;

    const token = req.headers['authorization'];

    if (!token || !token.startsWith('Bearer')) {
      throw new UnauthorizedException('Вы не авторизованы');
    }

    return true;
  }
}