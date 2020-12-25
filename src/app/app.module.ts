import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    // PrimeNG
    DropdownModule,    
    MultiSelectModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
