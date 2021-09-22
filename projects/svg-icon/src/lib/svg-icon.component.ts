import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vs-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent implements OnInit {
  @Input() icon='';
  @Input() parentInlineCss: string = '';
  @Input() svgInlineCss: string ='';
  @Input() enableDBlock = false;
  @Input() height = '24px';
  @Input() width = '24px';
  svgPath = '/assets/vs-svg-icons';
  svgContent: string='';

  constructor() {
    this.svgContent = '';
    this.parentInlineCss = '';
    this.svgInlineCss = '';
  }

  ngOnInit(): void {
    this.svgInlineCss += `height:${this.height};width:${this.width}`;
    if(this.enableDBlock) {
      this.svgInlineCss += 'display:block;';
    }
  }

}
