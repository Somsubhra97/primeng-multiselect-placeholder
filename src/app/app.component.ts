import {
  Component,
  ChangeDetectionStrategy,
  HostListener
} from "@angular/core";

interface City {
  name: string;
  code: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cities: City[];
  selectedCity: City[];

  constructor() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }
  submit(e: any) {
    console.log(
      this.selectedCity.map(i =>
        i.name.includes(" ") ? i.name.split(" ").join("_") : i.name
      )
    );
  }
}
