import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayConnection,
  ConnectedSocket
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(){
      // console.log(client.id);
      // console.log(this.server);
  }

  @SubscribeMessage('join')
  join(io:Server, @ConnectedSocket() client:Socket, @MessageBody() data: any): Observable<WsResponse<any>> {
    client.join(data.email);
    return data;
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  broadcast(email:string, data: any): Observable<WsResponse<any>> {
    this.server.sockets.in(email).emit('PDF', data);
    return data;
  }

}
