import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
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
    imports:[HomeModule,RouterModule.forRoot(AppRoutes), FormsModule],
    exports:[RouterModule],
    declarations:[LoginComponent]
})

export class AppRoutesModule {}