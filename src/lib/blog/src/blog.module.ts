import { NgModule } from "@angular/core";
import { RouterModule, ROUTES } from "@angular/router";
import { PageService, SharedModule } from "@vendure/admin-ui/core";
import { createRoutesBlog } from "./blog.routes";
import { BlogListComponentComponent } from "./components/blog-list-component/blog-list-component.component";

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
export class BlogModule {}
