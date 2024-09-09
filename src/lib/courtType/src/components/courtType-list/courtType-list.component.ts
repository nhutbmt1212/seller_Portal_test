import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";
import {
  DataService,
  ModalService,
  NotificationService,
  SharedModule,
  TypedBaseListComponent,
} from "@vendure/admin-ui/core";
import { EMPTY } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { GetAllCourtTypeDocument } from "src/lib/courtType/gql/graphql";

@Component({
  selector: "vdr-court-category-list",
  templateUrl: "./courtType-list.component.html",
  styleUrls: ["./courtType-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourtTypeListComponent extends TypedBaseListComponent<
  typeof GetAllCourtTypeDocument,
  "getAllCourtType"
> {
  readonly filters = this.createFilterCollection()
    .addDateFilters()
    .addFilter({
      name: "name",
      type: { kind: "text" },
      label: "Name Category",
      filterField: "name",
    })
    .addFilters([
      {
        name: "enabled",
        type: { kind: "boolean" },
        label: _("common.enabled"),
        filterField: "enabled",
      },
      {
        name: "slug",
        type: { kind: "text" },
        label: "slug",
        filterField: "slug",
      },
    ])
    .connectToRoute(this.route);

  readonly sorts = this.createSortCollection()
    .defaultSort("createdAt", "DESC")
    .addSort({ name: "id" })
    .addSort({ name: "name" })
    .addSort({ name: "slug" })
    .addSort({ name: "createdAt" })
    .addSort({ name: "updatedAt" })
    .connectToRoute(this.route);

  constructor(
    protected dataService: DataService,
    private modalService: ModalService,
    private notificationService: NotificationService,
    router: Router,
    route: ActivatedRoute
  ) {
    super();
    super.configure({
      document: GetAllCourtTypeDocument,
      getItems: (data) => {
        // console.log('Service Categories Data:', data.serviceCategories);
        return data.getAllCourtType;
      },
      setVariables: (skip, take) => ({
        options: {
          skip,
          take,
          filter: {
            name: {
              contains: this.searchTermControl.value ?? undefined,
            },
            ...this.filters.createFilterInput(),
          },
          sort: this.sorts.createSortInput(),
        },
      }),
      refreshListOnChanges: [
        this.filters.valueChanges,
        this.sorts.valueChanges,
      ],
    });
  }
}
