import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './component/homepagedesign/carousel/carousel.component';
import { DetailsComponent } from './component/homepagedesign/details/details.component';
import { FooterComponent } from './component/homepagedesign/footer/footer.component';
import { HomepagedesignComponent } from './component/homepagedesign/homepagedesign.component';
import { NavbarComponent } from './component/homepagedesign/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { LoginregisterComponent } from './component/loginregister/loginregister.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'homepagedesign', pathMatch:'full'},
  {path: 'homepagedesign',component:HomepagedesignComponent},
  
  // {path: 'navbar',component:NavbarComponent},
  // {path: 'carousel',component:CarouselComponent},
  // {path: 'details',component:DetailsComponent},
  // {path: 'footer',component:FooterComponent},

  // {path: '', redirectTo:'login', pathMatch:'full'},
 {path: 'login',component:LoginComponent},
  {path: 'loginregister',component:LoginregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
