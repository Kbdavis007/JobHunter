import "zone.js";
import { createApplication } from "@angular/platform-browser";
import { PeopleHunterComponent } from "./people-hunter.component";

class PeopleHunterElement extends HTMLElement {
  async connectedCallback() {
    const app = await createApplication({ providers: [] });
    app.bootstrap(PeopleHunterComponent, this);
  }
}

customElements.define("people-hunter-widget", PeopleHunterElement);
