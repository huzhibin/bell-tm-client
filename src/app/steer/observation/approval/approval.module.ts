import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';

import { ObservationFormViewerModule } from '../form/shared/form-viewer.module';
import { PipesModule } from '../shared/pipes/observation-pipes.module';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalService } from './approval.service';
import { NavTabsComponent } from './common/nav-tabs.component';
import { ApprovalItemComponent } from './item/approval-item.component';
import { ApprovalListComponent } from './list/approval-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ApprovalRoutingModule,
        CommonDirectivesModule,
        CommonDialogsModule,
        PipesModule,
        FontAwesomeModule,
        ObservationFormViewerModule,
    ],
    declarations: [
        ApprovalListComponent,
        ApprovalItemComponent,
        NavTabsComponent,
    ],
    providers: [
        ApprovalService,
        {provide: 'APPROVAL_API_URL', useValue: '/api/steer/approvers/${userId}/observations' },
    ],
})
export class ApprovalModule { }
