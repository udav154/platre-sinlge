const HEADER_HEIGHT = 80;

/**
 * Smooth scroll to a section by selector (e.g. "#portfolio").
 * Accounts for fixed header height.
 */
export function scrollToSection(href: string): void {
  const element = document.querySelector(href);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - HEADER_HEIGHT,
      behavior: "smooth",
    });
  }
}
