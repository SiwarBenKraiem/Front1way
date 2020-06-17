import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import{AjoutDomaineComponent}from '../../pages/ajout-domaine/ajout-domaine.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { GroupeComponent } from '../../pages/groupe/groupe.component';
import { TableGrpComponent} from '../../pages/table-grp/table-grp.component';
import{ QuestionnaireComponent }from '../../pages/questionnaire/questionnaire.component';

import { TablesSpecComponent } from '../../pages/tables-spec/tables-spec.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import{TablesDomaineComponent} from'../../pages/tables-domaine/tables-domaine.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import{AffectationComponent}from '../../pages/affectation/affectation.component'
import { OptionComponent } from 'src/app/pages/option/option.component';
import { ListeQstionnaireComponent } from 'src/app/pages/liste-qstionnaire/liste-qstionnaire.component';
import { FormationComponent } from 'src/app/pages/formation/formation.component';
import { DialogQuestionnaireComponent } from 'src/app/dialog-questionnaire/dialog-questionnaire.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    
    ToastrModule.forRoot(
      {timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,}
    )
  ],
  entryComponents: [DialogQuestionnaireComponent],
  declarations: [
    DashboardComponent,
   
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AjoutDomaineComponent,
    GroupeComponent,
    TableGrpComponent,
    TablesSpecComponent,
    TablesDomaineComponent,
    AffectationComponent,
    QuestionnaireComponent,
    OptionComponent,
    ListeQstionnaireComponent,
    FormationComponent
    
  ]
})

export class AdminLayoutModule {}
