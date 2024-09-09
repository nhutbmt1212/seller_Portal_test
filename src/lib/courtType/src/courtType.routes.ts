import { Route } from "@angular/router";
import { PageComponent, PageService } from "@vendure/admin-ui/core";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";

import { CourtTypeListComponent } from "./components/courtType-list/courtType-list.component";
import { CourtTypeDetailComponent } from "./components/courtType-detail/courtType-detail.component";

export const createRoutesCourtType = (pageService: PageService): Route[] => [
  {
    path: "",
    component: CourtTypeListComponent,
    data: {
      locationId: "courtType-list",
      breadcrumb: "courtType-list",
    },
    children: pageService.getPageTabRoutes("courtType-list"),
  },
  {
    path: ":id",
    component: PageComponent,
    data: {
      locationId: "courtType-detail",
      breadcrumb: { label: _("courtTypes"), link: ["../", "courtTypes"] },
    },
    children: pageService.getPageTabRoutes("courtType-detail"),
  },
];
