class NavBar extends HTMLElement {
  constructor() {
    // element created
    super();
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    this.innerHTML = `
<nav id="main-navbar" class="navbar fixed-top navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-custom" href="#">Darian L-P</a>
    <button id="main-navbar-toggle-icon" class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-2">
        <li class="nav-item">
          <a class="nav-link text-custom" href="about-me.html">About Me</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Game
          </a>
          <ul id="navbar-mygame-dropdown" class="dropdown-menu py-3">
            <li><a class="dropdown-item text-custom" href="about-my-game.html">About</a></li>
            <img src="images/Frame_tiny_mid.png" alt="separator"/>
            <li><a class="dropdown-item text-custom disabled" href="#" aria-disabled="true">Demo (Coming Soon)</a></li>
            <li><a class="dropdown-item text-custom disabled" href="#" aria-disabled="true">Player Guide (Coming Soon)</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-custom" href="support.html">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-custom" href="contact-me.html">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }
};

customElements.define("nav-bar", NavBar);