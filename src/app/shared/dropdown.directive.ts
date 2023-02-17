import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective{
  @HostBinding('class.open')  isopne = false
  @HostListener('click') toggleopne(){
  this.isopne = !this.isopne
}
}