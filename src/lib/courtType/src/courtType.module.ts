import { NgModule } from "@angular/core";
import { RouterModule, ROUTES } from "@angular/router";
import { PageService, SharedModule } from "@vendure/admin-ui/core";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";
import { createRoutesCourtType } from "./courtType.routes";
import { CourtTypeListComponent } from "./components/courtType-list/courtType-list.component";

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
      route: "courtType",
      component: CourtTypeListComponent,
    });
  }
}
