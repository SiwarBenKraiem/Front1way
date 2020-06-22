import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule,ControlContainer } from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser'
import { IconsComponent} from './pages/icons/icons.component';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{UserServiceService}from './services/user-service.service';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ToastrModule } from 'ngx-toastr';
import { AjoutSpecialiteComponent } from './pages/ajout-specialite/ajout-specialite.component';
import { DragndropDirective } from './dragndrop.directive';
//import { CKEditorModule } from '@ckeditor/ckeditor5-build-decoupled-document';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SujetComponent } from './pages/sujet/sujet.component';
import { OptionComponent } from './pages/option/option.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { ListeQstionnaireComponent } from './pages/liste-qstionnaire/liste-qstionnaire.component';
import { FormationComponent } from './pages/formation/formation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DialogQuestionnaireComponent } from './dialog-questionnaire/dialog-questionnaire.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ResponsePasswordComponent } from './pages/response-password/response-password.component';
//import { CKEditorModule } from 'ckeditor4-angular';









@NgModule({
  imports: [
   
    BrowserModule,
     ReactiveFormsModule,
     FormsModule,
    CommonModule,
    
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    
     CKEditorModule,
    
     ToastrModule.forRoot(
       {timeOut: 10000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true,})
   ],
  declarations: [
    AppComponent,
    
    AdminLayoutComponent,
    AuthLayoutComponent,
    AjoutSpecialiteComponent,
    DragndropDirective,
    ResetPasswordComponent,
    DialogQuestionnaireComponent,
    ChangePasswordComponent,
    ResponsePasswordComponent,
   
    
  
    
   
   
  
  
   // AjoutDomaineComponent
  ],
 
  providers: [MatDialogModule 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
