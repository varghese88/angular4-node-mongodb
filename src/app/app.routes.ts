import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";
import { HomeModule } from "./pages/home/home.module";

const AppRoutes:Routes = [
    {
        path:"",
        redirectTo:"/login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"home",
        loadChildren:"pages/home/home.module#HomeModule"
    }
];

@NgModule({
    imports:[HomeModule,RouterModule.forRoot(AppRoutes)],
    exports:[RouterModule],
    declarations:[LoginComponent]
})

export class AppRoutesModule {}