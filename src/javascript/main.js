(function() {
  "use strict";

  //
  //  General
  //

  // Nav

  var navToggle = document.getElementById("navToggle");
  var navClose = document.getElementById("navClose");
  var nav = document.getElementById("nav");

  navToggle.addEventListener("click", function() {
    nav.classList.add("is-open");
  });
  navClose.addEventListener("click", function() {
    nav.classList.remove("is-open");
  });

  //
  //  Contact Page
  //

  // Google Maps

  var googleMaps = document.getElementById("googleMaps");
  var googleMapsIframe = document.getElementById("googleMapsIframe");

  if (googleMaps && googleMapsIframe) {
    googleMaps.addEventListener("click", function() {
      googleMapsIframe.style.pointerEvents = "auto";
    });

    googleMaps.addEventListener("mouseleave", function() {
      googleMapsIframe.style.pointerEvents = "none";
    });
  }

  // Send Contact Form

  var ContactForm = {
    form: null,
    button: null,
    sendForm: function() {
      var contactForm = this.form;
      var fetchURL = this.form.action;
      var fetchParams = {
        method: "POST",
        body: new FormData(contactForm)
      };

      this.sending();

      fetch(fetchURL, fetchParams)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          ContactForm.success(json);
        });
    },
    addEvents: function() {
      if (this.form) {
        this.form.addEventListener(
          "submit",
          function(e) {
            e.preventDefault();
            this.sendForm();
          }.bind(this)
        );
      }
    },
    sending: function() {
      this.button.setAttribute("disabled", true);
    },
    success: function(data) {
      var response = document.createElement("p");
      response.className = "bg-success padding-md marginTop-md color-white";
      response.textContent =
        "Tu consulta ha sido enviada correctamente. Te responderemos a la mayor brevedad posible.";
      this.form.appendChild(response);

      this.button.removeAttribute("disabled");
      this.form.reset();
    },
    error: function(data) {
      var response = document.createElement("p");
      response.className = "bg-danger padding-md marginTop-md color-white";
      response.textContent =
        "Hemos tenido un problema en el envío, por favor envíanos un email o llama al 96 3864100.";
      this.form.appendChild(response);

      this.button.removeAttribute("disabled");
      this.form.reset();
    },
    init: function() {
      this.form = document.getElementById("contactForm");
      this.button = document.getElementById("submitButton");
      this.addEvents();
    }
  };

  ContactForm.init();
})();
