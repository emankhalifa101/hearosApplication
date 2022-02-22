export class InputModel {
    value?: any;
    key: string='';
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    options?: any //{key: string, value: string}[] ;
}