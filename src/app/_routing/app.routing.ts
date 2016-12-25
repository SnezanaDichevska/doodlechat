import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ChatComponent} from '../chat/chat.component';

const appRoutes:Routes = [
    {
        path: 'chat',
        component: ChatComponent

    }
];

export const authProviders = [];

export const appRoutingProviders:any[] = [
    authProviders
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
