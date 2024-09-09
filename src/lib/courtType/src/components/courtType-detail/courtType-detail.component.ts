import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  Asset,
  DataService,
  LanguageCode,
  NotificationService,
  TypedBaseDetailComponent,
} from "@vendure/admin-ui/core";
import { Observable, of } from "rxjs";
import { filter, mapTo } from "rxjs/operators";

import {
  CREATE_COURT_TYPE,
  GET_COURT_TYPE,
  UPDATE_COURT_TYPE,
} from "./courtType-detail.graphql";
import {
  CreateCourtType,
  GetCourtTypeDocument,
  UpdateCourtType,
} from "src/lib/courtType/src/gql/graphql";
import { slugify } from "../../helpers";
export interface SelectedAssets {
  assets?: Asset[];
  featuredAsset?: Asset;
}

@Component({
  selector: "vdr-courttype-detail",
  templateUrl: "./courtType-detail.component.html",
  styleUrls: ["./courtType-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourtTypeDetailComponent
  extends TypedBaseDetailComponent<typeof GetCourtTypeDocument, "getCourtType">
  implements OnInit, OnChanges
{
  detailForm: FormGroup;
  assetChanges: SelectedAssets = {};
  artistImage: any = {};

  constructor(
    private formBuilder: FormBuilder,
    protected dataService: DataService,
    private changeDetector: ChangeDetectorRef,
    private notificationService: NotificationService
  ) {
    super();
    const requiredValidator = Validators.required.bind(null);
    this.detailForm = this.formBuilder.group({
      name: ["", requiredValidator],
      slug: ["", requiredValidator],
      description: [""],
      enabled: [true],
    });
  }

  ngOnInit(): void {
    this.init();

    if (this.detailForm) {
      this.detailForm?.get("name")?.valueChanges.subscribe((name: string) => {
        const slug = slugify(name);
        this.detailForm.patchValue({ slug }, { emitEvent: false });
      });
    }
  }

  ngOnChanges(): void {
    this.destroy();
  }

  create(): void {
    if (!this.detailForm) {
      return;
    }
    const formValue = this.detailForm.value;
    const artistBody: CreateCourtType = {
      name: formValue.name,
      slug: formValue.slug,
      description: formValue.description,
      enabled: formValue.enabled,
    };

    this.dataService
      .mutate<any, any>(CREATE_COURT_TYPE, { input: artistBody })
      .subscribe(
        (data) => {
          if (data.createCourtType) {
            this.notificationService.success("common.notify-create-success", {
              entity: "CourtType",
            });
            this.assetChanges = {};
            this.detailForm.markAsPristine();
            this.changeDetector.markForCheck();
            this.router
              .navigate(["../", data.createCourtType.id], {
                relativeTo: this.route,
                queryParamsHandling: "merge",
              })
              .catch((error) => {
                this.notificationService.error("common.notify-create-error", {
                  entity: "CourtType",
                });
              });
          } else {
            this.notificationService.error("common.notify-create-error", {
              entity: "CourtType",
            });
          }
        },
        (err) => {
          this.notificationService.error("common.notify-create-error", {
            entity: "CourtType",
          });
        }
      );
  }

  assetsChanged(): boolean {
    return !!Object.values(this.assetChanges).length;
  }

  save(): void {
    this.saveChanges()
      .pipe(filter((result) => !!result))
      .subscribe(
        () => {
          this.detailForm.markAsPristine();
          this.changeDetector.markForCheck();
          this.notificationService.success("common.notify-update-success", {
            entity: "CourtType",
          });
        },
        () => {
          this.notificationService.error("common.notify-update-error", {
            entity: "CourtType",
          });
        }
      );
  }

  private saveChanges(): Observable<boolean> {
    if (this.detailForm.dirty || this.assetsChanged()) {
      const formValue = this.detailForm.value;
      const input: UpdateCourtType = {
        id: this.id,
        name: formValue.name,
        slug: formValue.slug,
        description: formValue.description,
        enabled: formValue.enabled,
      };
      return this.dataService
        .mutate<any, any>(UPDATE_COURT_TYPE, {
          input,
        })
        .pipe(mapTo(true));
    } else {
      return of(false);
    }
  }

  protected setFormValues(entity: any, languageCode: LanguageCode): void {
    console.log(entity);

    if (entity) {
      this.detailForm.patchValue({
        name: entity.name,
        slug: entity.slug,
        description: entity.description,
        enabled: entity.enabled,
      });
    }
  }
}
