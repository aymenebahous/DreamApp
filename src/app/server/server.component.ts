import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
        .online {
            color : #008000;
            border-left: solid 3px #008000;
            padding: 15px;
            margin-top: 10px;
        }
        .offline {
            background-color: #ffb8b8;
            color: #df0000;
            border-left: solid 3px #ff0000;
            padding: 15px;
            margin-top: 10px;
        }
    `]
})
export class ServerComponent { 
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverId = Math.round(Math.random() * 10);
        this.serverStatus = this.serverId > 5 ? 'online' : 'offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? '#b8ffb8' : '#ffb8b8';
    }
}