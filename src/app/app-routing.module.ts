import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcidpageComponent } from './component/acidpage/acidpage.component';
import { AdminhomecontentComponent } from './component/adminhomecontent/adminhomecontent.component';
import { AdminsidenavigationComponent } from './component/adminsidenavigation/adminsidenavigation.component';
import { AnalysisComponent } from './component/analysis/analysis.component';
import { BpComponent } from './component/bp/bp.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CategoryComponent } from './component/category/category.component';
import { CommonmedComponent } from './component/commonmed/commonmed.component';
import { DetailsComponent } from './component/details/details.component';
import { DiabetespageComponent } from './component/diabetespage/diabetespage.component';
import { FeverComponent } from './component/fever/fever.component';
import { FooterComponent } from './component/footer/footer.component';

import { LoginComponent } from './component/login/login.component';
import { LoginregisterComponent } from './component/loginregister/loginregister.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarmedComponent } from './component/navbarmed/navbarmed.component';
import { NavcategoryComponent } from './component/navcategory/navcategory.component';
import { NewregComponent } from './component/newreg/newreg.component';
import { RegisterComponent } from './component/register/register.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { StockComponent } from './component/stock/stock.component';
import { ThroatComponent } from './component/throat/throat.component';
import { VitaminComponent } from './component/vitamin/vitamin.component';

const routes: Routes = [
  {path: '', redirectTo:'navbar', pathMatch:'full'},
  {path: 'navbar',component:NavbarComponent},
  {path: 'carousel',component:CarouselComponent},
  {path: 'detail',component:DetailsComponent},
  {path: 'footer',component:FooterComponent},
 {path: 'login',component:LoginComponent},
  {path: 'loginregister',component:LoginregisterComponent},

  {path: 'acidpage',component:AcidpageComponent},
  {path: 'bp',component:BpComponent},
  {path: 'category',component:CommonmedComponent},
  {path: 'commonmed',component:CategoryComponent},
 {path: 'diabetespage',component:DiabetespageComponent},
  {path: 'fever',component:FeverComponent},

  {path: 'navcategory',component:NavcategoryComponent},
  {path: 'stock',component:StockComponent},
  {path: 'throat',component:ThroatComponent},
 {path: 'vitamin',component:VitaminComponent},
  {path: 'navbarmed',component:NavbarmedComponent},
  {path: 'sidenav',component:SidenavComponent},
  {path: 'newreg',component:NewregComponent},
  {path: 'adminhomecontent',component:AdminhomecontentComponent},
  {path: 'adminsidenavigation',component:AdminsidenavigationComponent},
  {path: 'analysis',component:AnalysisComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
