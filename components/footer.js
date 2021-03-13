class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <footer class='container-fluid' id='contact-bg'>
            <div class='row'>
                <div class='col-12'>
                    <h1 class='text-center pt-3'>Let's Connect</h1>
                </div>
            </div>	
            <div class='row justify-content-center'>
                <a class='git-logo' href='https://github.com/PaulGarrod' target='_blank' alt='Paul Garrod GitHub profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/github--v1.png' class='ml-3 mr-3'/>
                </a>
                <a class='linkedin-logo' href='https://www.linkedin.com/in/paulgarrod/' target='_blank' alt='Paul Garrod LinkedIn profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/linkedin--v2.png' class='ml-3 mr-3'/>
                </a>
                <a class='twitter-logo'  href='https://twitter.com/PGCoding' target='_blank' alt='Paul Garrod Twtter profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/twitter--v1.png' class='ml-3 mr-3'/>
                </a>
                <a class='email-logo' href='mailto:paulrgarrod@gmail.com' target='_blank' alt='Paul Garrod Twtter profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/email--v1.png' class='ml-3 mr-3' href='paulrgarrod@gmail.com'/>
                </a>
                </div>
                <div class='text-center'>
                    <p class='text-center'>
                        Thanks for taking the time to browse my little corner of the internet. Created by Paul Garrod.
                    </p>
                    <a href="https://icons8.com">Icons by Icons8</a>
                </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);