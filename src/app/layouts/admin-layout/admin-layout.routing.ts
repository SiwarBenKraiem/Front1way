import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import{AjoutDomaineComponent}from '../../pages/ajout-domaine/ajout-domaine.component';
import{AjoutSpecialiteComponent}from '../../pages/ajout-specialite/ajout-specialite.component';
import { GroupeComponent } from '../../pages/groupe/groupe.component';
import { TableGrpComponent} from '../../pages/table-grp/table-grp.component';
import {TablesSpecComponent } from '../../pages/tables-spec/tables-spec.component';
import {TablesDomaineComponent} from '../../pages/tables-domaine/tables-domaine.component';
import{AffectationComponent}from '../../pages/affectation/affectation.component';
import{QuestionnaireComponent}from '../../pages/questionnaire/questionnaire.component';
import { ListeQstionnaireComponent } from 'src/app/pages/liste-qstionnaire/liste-qstionnaire.component';
import { OptionComponent } from 'src/app/pages/option/option.component';
import { Component } from '@angular/core';
import { FormationComponent } from 'src/app/pages/formation/formation.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';
import { ModuleComponent } from 'src/app/pages/module/module.component';
import { DivcontenuComponent } from 'src/app/pages/divcontenu/divcontenu.component';
import { ListeModuleComponent } from 'src/app/pages/liste-module/liste-module.component';
import { ResponsePasswordComponent } from 'src/app/pages/response-password/response-password.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'ajout-domaine',  component:AjoutDomaineComponent},
    { path: 'ajout-specialite/:id',component:AjoutSpecialiteComponent},
    { path: 'ajout-groupe',   component:GroupeComponent},
    { path: 'tables-grp',      component:TableGrpComponent},
    { path: 'tables-spec',      component:TablesSpecComponent},
    { path: 'tables-domaine',      component:TablesDomaineComponent},
    {path:  'affectation/:id',       component:AffectationComponent},
    { path: 'questionnaire',          component: QuestionnaireComponent },
    { path: 'option',          component: OptionComponent },
    { path: 'liste-qstionnaire',          component: ListeQstionnaireComponent },
    { path: 'formation',          component: FormationComponent  },
    { path: 'change', component:ChangePasswordComponent},
    {path:'module',component:ModuleComponent},
    {path:'div',component:DivcontenuComponent},
   // {path:'addmodule',component:AjoutModuleComponent},
    {path:'tables-module',component:ListeModuleComponent},
    {path:'response-password',component:ResponsePasswordComponent},
    
];
