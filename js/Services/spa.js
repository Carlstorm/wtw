import loadpagespecifikfunks from "../../mainscript.js"

class SpaService {
    constructor() {
      this.defaultPage = "home";
    }
  
    init() {
      this.pages = document.querySelectorAll(".page");
      this.navItems = document.querySelectorAll(".nil a");
      this.pageChange();
    }
  
    // hide all pages
    hideAllPages() {
      for (let page of this.pages) {
        page.style.display = "none";
      }
    }
  
    // show page or tab
    showPage(pageId) {
      this.hideAllPages();
      document.querySelector(`#${pageId}`).style.display = "block";
      this.setActiveTab(pageId);
      loadpagespecifikfunks(pageId);
    }
  
    // sets active tabbar/ menu item
    setActiveTab(pageId) {
      for (let navItem of this.navItems) {
        if (`#${pageId}` === navItem.getAttribute("href")) {
          navItem.classList.add("activeNi");
        } else {
          navItem.classList.remove("activeNi");
        }
      }
    }
  
    // navigate to a new view/page by changing href
    navigateTo(pageId) {
      window.location.href = `#${pageId}`
    }
  
    // set default page or given page by the hash url
    // function is called 'onhashchange'
    pageChange() {
      let page = this.defaultPage;
      if (window.location.hash) {
        page = window.location.hash.slice(1);
      } else {
        this.navigateTo(page)
      }
      this.showPage(page);
    }
  }

  export default SpaService;
