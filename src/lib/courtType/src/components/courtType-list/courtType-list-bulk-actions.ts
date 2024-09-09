import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";
import {
  BulkAction,
  createBulkRemoveFromChannelAction,
  DataService,
  DeletionResult,
  isMultiChannel,
  ItemOf,
  ModalService,
  NotificationService,
  Permission,
} from "@vendure/admin-ui/core";
import { unique } from "@vendure/common/lib/unique";
import { EMPTY } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { CourtTypeListComponent } from "./courtType-list.component";
import { DELETE_COURT_TYPE } from "./courtType-list.graphql";
import { GetAllCourtTypeQuery } from "src/lib/courtType/src/gql/graphql";

export const deleteCourtTypeBulkAction: BulkAction<
  ItemOf<GetAllCourtTypeQuery, "getAllCourtType">,
  CourtTypeListComponent
> = {
  location: "courtCategory-list",
  label: _("common.delete"),
  icon: "trash",
  iconClass: "is-danger",
  onClick: ({ injector, selection, hostComponent, clearSelection }) => {
    const modalService = injector.get(ModalService);
    const dataService = injector.get(DataService);
    const notificationService = injector.get(NotificationService);
    const courtTypesId = unique(selection.map((p) => p.id));
    modalService
      .dialog({
        title: _("Delete the selected items?t"),
        translationVars: {
          count: selection.length,
        },
        buttons: [
          { type: "secondary", label: _("common.cancel") },
          { type: "danger", label: _("common.delete"), returnValue: true },
        ],
      })
      .pipe(
        switchMap((response) =>
          response
            ? dataService.mutate(DELETE_COURT_TYPE, { ids: courtTypesId })
            : EMPTY
        )
      )
      .subscribe((result: any) => {
        let deleted = 0;
        const errors: string[] = [];
        for (const item of result.deleteCourtTypes) {
          if (item.result === DeletionResult.DELETED) {
            deleted++;
          } else if (item.message) {
            errors.push(item.message);
          }
        }
        if (0 < deleted) {
          notificationService.success(
            _("catalog.notify-bulk-delete-products-success"),
            {
              count: deleted,
            }
          );
        }
        if (0 < errors.length) {
          notificationService.error(errors.join("\n"));
        }
        hostComponent.refresh();
        clearSelection();
      });
  },
};
