import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

interface SocketData {
  user?: JwtPayload;
}

type AuthenticatedSocket = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  SocketData
>;

@WebSocketGateway({
  cors: { origin: '*' }, // tighten this to your frontend URL before production
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  constructor(private jwtService: JwtService) {}

  handleConnection(client: AuthenticatedSocket) {
    try {
      const auth = client.handshake.auth as { token?: string };
      const token = typeof auth.token === 'string' ? auth.token : '';
      const payload = this.jwtService.verify<JwtPayload>(token);
      client.data.user = payload;
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: AuthenticatedSocket) {
    void client;
  }
}
