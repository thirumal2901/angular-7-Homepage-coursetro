import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { FilterPipe} from './views/home/filterpipe';
import { NavMenuComponent } from './views/nav-menu/nav-menu.component';


// Material 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';

//import {A11yModule} from '@angular/cdk/a11y';
//import {ClipboardModule} from '@angular/cdk/clipboard';
//import {DragDropModule} from '@angular/cdk/drag-drop';
//import {PortalModule} from '@angular/cdk/portal';
//import {ScrollingModule} from '@angular/cdk/scrolling';
//import {CdkStepperModule} from '@angular/cdk/stepper';
//import {CdkTableModule} from '@angular/cdk/table';
//import {CdkTreeModule} from '@angular/cdk/tree';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import {MatBadgeModule} from '@angular/material/badge';
//import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
//import {MatButtonToggleModule} from '@angular/material/button-toggle';

//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatChipsModule} from '@angular/material/chips';
//import {MatStepperModule} from '@angular/material/stepper';
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatDialogModule} from '@angular/material/dialog';
//import {MatDividerModule} from '@angular/material/divider';
//import {MatExpansionModule} from '@angular/material/expansion';
//import {MatIconModule} from '@angular/material/icon';

//import {MatListModule} from '@angular/material/list';

//import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
//import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
//import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import {MatRadioModule} from '@angular/material/radio';
//import {MatSelectModule} from '@angular/material/select';

//import {MatSliderModule} from '@angular/material/slider';
//import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//import {MatSnackBarModule} from '@angular/material/snack-bar';
//import {MatSortModule} from '@angular/material/sort';
//import {MatTableModule} from '@angular/material/table';
//import {MatTabsModule} from '@angular/material/tabs';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatTooltipModule} from '@angular/material/tooltip';
//import {MatTreeModule} from '@angular/material/tree';
//import {OverlayModule} from '@angular/cdk/overlay';

const ROUTES: Route[] = [
  { path: '', component: LoginViewComponent},
  { path: 'home', component: HomeViewComponent},
   { path: 'lo', component: LoginViewComponent},
]

@NgModule({
  declarations: [ AppComponent, LoginViewComponent, HomeViewComponent,  NavMenuComponent, FilterPipe],
  
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpModule,MatCardModule, MatButtonModule, MatGridListModule, MatMenuModule, MatInputModule, MatCarouselModule,
    MatSidenavModule,   RouterModule.forRoot(ROUTES) 
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }




/*
Material import reference

https://www.tutorialspoint.com/angular_material7/angular_material7_card.htm*/