import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app.routes";
import "./app.scss";

@NgModule({
    imports:[
        HttpModule, 
        BrowserModule,
        AppRoutesModule
    ],    
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    providers:[]
})

export class AppModule {}
