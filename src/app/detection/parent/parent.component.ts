import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ComService } from './com.service';

@Component({
  selector: 'post-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComService]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
