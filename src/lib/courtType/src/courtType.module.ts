import { NgModule } from "@angular/core";
import { RouterModule, ROUTES } from "@angular/router";
import {
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

  declarations: [
    //
  ],
})
export class CourtTypeModule {
  constructor(pageService: PageService) {
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
      tab: _("courtTypeDetail"),
      route: "",
      component: detailComponentWithResolver({
        component: CourtTypeDetailComponent,
        query: GetCourtTypeDocument,
        entityKey: "getCourtType",
        getBreadcrumbs: (entity: any) => {
          const entityId = entity && entity.id ? entity.id : "Create";
          console.log(entity);
          return [
            {
              label: "courtType",
              link: ["/courtType", "courtTypes"],
            },
            {
              label: entityId,
              link: [],
            },
          ];
        },
      }),
    });
  }
}
