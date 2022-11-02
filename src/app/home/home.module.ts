import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import {NgxTypedJsModule} from 'ngx-typed-js';
import { LottieModule } from 'ngx-lottie';
import { RouterModule } from "@angular/router";
import player from 'lottie-web';
export function playerFactory() {
    return player;
  }

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),
        NgxTypedJsModule,
        LottieModule.forRoot({ player: playerFactory })
    ],
    providers: []
})

export class HomeModule {
    
}