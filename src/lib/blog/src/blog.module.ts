import { NgModule } from "@angular/core";
import { RouterModule, ROUTES } from "@angular/router";
import { PageService, SharedModule } from "@vendure/admin-ui/core";
import { createRoutesBlog } from "./blog.routes";
import { BlogListComponentComponent } from "./components/blog-list-component/blog-list-component.component";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  providers: [
    {
      provide: ROUTES,
      useFactory: (pageService: PageService) => createRoutesBlog(pageService),
      multi: true,
      deps: [PageService],
    },
  ],

  declarations: [BlogListComponentComponent],
})
export class BlogModule {
  constructor(pageService: PageService) {
    pageService.registerPageTab({
      priority: 0,
      location: "blog-list",
      tab: _("blog-list"),
      route: "blogs",
      component: BlogListComponentComponent,
    });
  }
}
