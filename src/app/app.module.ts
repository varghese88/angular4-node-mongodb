import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app.routes";
import { AuthenthicationService } from "./services/authenthication.service";

import "./app.scss";

@NgModule({
    imports:[
        HttpModule, 
        BrowserModule,
        AppRoutesModule
    ],    
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    providers:[AuthenthicationService]
})

export class AppModule {}
