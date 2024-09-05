import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vdr-blog-list-component',
  standalone: true,
  imports: [],
  templateUrl: './blog-list-component.component.html',
  styleUrl: './blog-list-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponentComponent {

}
