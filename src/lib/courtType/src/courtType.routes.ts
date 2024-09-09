import { Route } from "@angular/router";
import { PageService } from "@vendure/admin-ui/core";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";

import { CourtTypeListComponent } from "./components/courtType-list/courtType-list.component";
import { CourtTypeDetailComponent } from "./components/courtType-detail/courtType-detail.component";
import { ppid } from "process";
import { link } from "fs";

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
    component: CourtTypeDetailComponent,
    data: {
      locationId: "courtTypeDetail",
      breadcrumb: { label: _("courtTypes"), link: ["../", "courtTypes"] },
    },
    children: pageService.getPageTabRoutes("courtType-detail"),
  },
];
