export default class pickerPage {
    constructor() {
      this.template();
    //   let hejder = mapService;
    }

    template() {
      document.getElementById('content').innerHTML += /*html*/ `
      <section id="picker" class="page pageswitchani">
      <div id="pickeroptionwrap">
      <div id="OP1"></div>
        <div id="pickerimg"></div>
       <div id="OP2">
       <input onkeyup="pickersearch()"></input>
       <div id="searchresultwrap">
       </div>
       </div>
        </div>
        <div id="pickerbutton">
        <p>Pick Movie</p>
        </div>
      </section>
            `;
        }
  }