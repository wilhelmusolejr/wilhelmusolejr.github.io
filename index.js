"use strict";

const siteLoader = document.querySelector(".site-loader");

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    siteLoader.classList.add("hidden");

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("nav ul a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });
    };

    // navigator
    const navigatorElement = document.querySelector("nav");
    const body = document.querySelector("body");

    navigatorElement.addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-x") || e.target.tagName == "A") {
        navigatorElement.querySelector(".nav-links").style.display = "none";
        body.style.overflow = "auto";
      }

      if (e.target.classList.contains("fa-bars")) {
        navigatorElement.querySelector(".nav-links").style.display = "flex";
        body.style.overflow = "hidden";
      }
    });

    // const mainElement = document.querySelector("main");
    // const navigatorElement = document.querySelector("nav");
    // const navigatorHeight = navigatorElement.getBoundingClientRect().height;

    // const introQuoteElement = document.querySelector(".intro-quote");

    // const stickyNavigator = function (entries) {
    //   const [entry] = entries;

    //   console.log(entry.isIntersecting);

    //   if (entry.isIntersecting) {
    //     navigatorElement.style.position = "static";
    //   } else {
    //     navigatorElement.style.position = "fixed";
    //   }
    // };

    // const introQuoteObserver = new IntersectionObserver(stickyNavigator, {
    //   root: null,
    //   threshold: 0,
    //   // rootMargin: `-${navigatorHeight}px`,
    // });

    // introQuoteObserver.observe(introQuoteElement);

    // smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
  }
};
