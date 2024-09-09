import { NgModule } from "@angular/core";
import { RouterModule, ROUTES } from "@angular/router";
import {
  BulkActionRegistryService,
  detailComponentWithResolver,
  PageService,
  SharedModule,
} from "@vendure/admin-ui/core";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";
import { createRoutesCourtType } from "./courtType.routes";
import { CourtTypeListComponent } from "./components/courtType-list/courtType-list.component";
import { CourtTypeDetailComponent } from "./components/courtType-detail/courtType-detail.component";
import { GET_COURT_TYPE } from "./components/courtType-detail/courtType-detail.graphql";
import { GetCourtTypeDocument } from "../gql/graphql";
import { deleteCustomersBulkAction } from "src/lib/customer/src/components/customer-list/customer-list-bulk-actions";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  providers: [
    {
      provide: ROUTES,
      useFactory: (pageService: PageService) =>
        createRoutesCourtType(pageService),
      multi: true,
      deps: [PageService],
    },
  ],

  declarations: [CourtTypeDetailComponent, CourtTypeListComponent],
})
export class CourtTypeModule {
  private static hasRegisteredTabsAndBulkActions = false;

  constructor(
    pageService: PageService,
    bulkActionRegistryService: BulkActionRegistryService
  ) {
    if (CourtTypeModule.hasRegisteredTabsAndBulkActions) {
      return;
    }
    bulkActionRegistryService.registerBulkAction(deleteCustomersBulkAction);

    pageService.registerPageTab({
      priority: 0,
      location: "courtType-list",
      tab: _("courtType-list"),
      route: "courtTypes",
      component: CourtTypeListComponent,
    });
    pageService.registerPageTab({
      priority: 0,
      location: "courtType-detail",
      tab: _("customer.customer-group"),
      route: "",
      component: detailComponentWithResolver({
        component: CourtTypeDetailComponent,
        query: GetCourtTypeDocument,
        entityKey: "getCourtType",
        getBreadcrumbs: (entity) => [
          {
            label: entity
              ? entity.name
              : _("customer.create-new-customer-group"),
            link: [entity?.id],
          },
        ],
      }),
    });
    CourtTypeModule.hasRegisteredTabsAndBulkActions = true;
  }
}
