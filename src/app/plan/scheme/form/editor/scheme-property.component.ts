import { Component, Input, HostBinding } from '@angular/core';

import { Property } from '../../shared/scheme.model';

/**
 * 课程性质
 */
@Component({
    selector: 'tr[scheme-property]',
    styles: [
        ':host { background-color: #ddd; }',
        'td.name { text-align: left;}',
    ],
    templateUrl: 'scheme-property.component.html',
})
export class SchemePropertyComponent {
    @Input('scheme-property')
    property: Property;

    @HostBinding('class')
    hostClass = 'property';
}
