/**
 * Remaining work slots — add URLs as you collect more assets.
 */
export const workLinks = {
  retail: { url: "" },
  uva: { url: "" },
  video: { url: "" },
};

function applyWorkLinks() {
  Object.entries(workLinks).forEach(([slot, config]) => {
    if (!config?.url) return;

    const card = document.querySelector(`[data-work-slot="${slot}"]`);
    if (!card) return;

    const link = card.querySelector(".project-link");
    if (!link) return;

    link.href = config.url;
    link.removeAttribute("aria-disabled");
    card.classList.add("is-linked");

    if (config.external !== false) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
  });
}

applyWorkLinks();
