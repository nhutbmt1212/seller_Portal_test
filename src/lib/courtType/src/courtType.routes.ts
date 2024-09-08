import { Route } from "@angular/router";
import { PageService } from "@vendure/admin-ui/core";
import { CourtTypeListComponent } from "./components/courtType-list/courtType-list.component";

export const createRoutesCourtType = (pageService: PageService): Route[] => [
  {
    path: "courtTypes",
    component: CourtTypeListComponent,
    data: {
      locationId: "courtType-list",
      breadcrumb: "courtType-list",
    },
    children: pageService.getPageTabRoutes("courtType-list"),
  },
];
