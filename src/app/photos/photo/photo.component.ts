import { COMPILER_OPTIONS, Component,Input } from '@angular/core';
@Component({
    selector: './ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    @Input() description = '';
    @Input() url = ''
}