import { Route } from "@angular/router";
import { BlogListComponentComponent } from "./components/blog-list-component/blog-list-component.component";
import { PageService } from "@vendure/admin-ui/core";

export const createRoutesBlog = (pageService: PageService): Route[] => [
  {
    path: "blogs",
    component: BlogListComponentComponent,
    data: {
      locationId: "blog-list",
      breadcrumb: "blog-list",
    },
    children: pageService.getPageTabRoutes("blog-list"),
  },
];
