(function () {
  function track(eventName, params) {
    const payload = Object.assign({ page_path: window.location.pathname }, params || {});

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  function setFieldValue(fieldId, value) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.value = value;
    }
  }

  track("view_landing_page", {
    page_type: "homepage",
    utm_source: getQueryParam("utm_source"),
    utm_medium: getQueryParam("utm_medium"),
    utm_campaign: getQueryParam("utm_campaign")
  });

  document.querySelectorAll("[data-track]").forEach(function (element) {
    element.addEventListener("click", function () {
      const eventName = element.getAttribute("data-track");
      track(eventName, {
        cta_text: element.textContent.trim(),
        cta_target: element.getAttribute("href") || ""
      });
    });
  });

  setFieldValue("utm-source", getQueryParam("utm_source"));
  setFieldValue("utm-medium", getQueryParam("utm_medium"));
  setFieldValue("utm-campaign", getQueryParam("utm_campaign"));
  setFieldValue("referrer", document.referrer || "direct");

  const form = document.getElementById("signup-form");
  const statusNode = document.getElementById("form-status");
  let formStarted = false;

  if (form) {
    form.addEventListener(
      "focusin",
      function () {
        if (!formStarted) {
          formStarted = true;
          track("start_lead_form", { form_id: "signup-form" });
        }
      },
      { once: true }
    );

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        statusNode.textContent = "Please enter a valid email to continue.";
        track("lead_form_error", { reason: "invalid_email" });
        return;
      }

      track("submit_lead_form", {
        form_id: "signup-form",
        household_size: document.getElementById("household-size")?.value || ""
      });
      statusNode.textContent = "Thanks! Check your inbox for next steps.";
      form.reset();
    });
  }

  let sentScrollEvent = false;
  window.addEventListener("scroll", function () {
    if (sentScrollEvent) return;

    const scrollDepth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (scrollDepth >= 0.5) {
      sentScrollEvent = true;
      track("scroll_50_percent");
    }
  });
})();
