import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  image = "/assets/Logo-Censo2020-2.png";
  title = "Inscripción para Aspirantes a Supervisores y Empadronadores";
  username = "eduardo.beckford@gmail.com";

  ngOnInit() {}
}
