(function () {

  function initLineageFocus() {
    const lineageTree = document.getElementById("lineageTree");
    if (!lineageTree) return;

    const sectionTitle = lineageTree.querySelector(".section-title");
    const pTree = document.getElementById("plineage-tree");
    const cTree = document.getElementById("clineage-tree");
    const firstPItem = pTree ? pTree.querySelector('a[role="treeitem"]') : null;
    const firstCItem = cTree ? cTree.querySelector('a[role="treeitem"]') : null;
    let step = 0;

    document.addEventListener("keydown", function (e) {

      if (e.key !== "Tab" || e.shiftKey) return;
      const active = document.activeElement;
      if (!lineageTree.contains(active)) {
        step = 0;
      }
      if (step === 0 && !lineageTree.contains(active)) {
        e.preventDefault();
        sectionTitle.focus();
        step = 1;
        return;
      }
      if (step === 1 && active === sectionTitle) {
        if (firstPItem) {
          e.preventDefault();
          firstPItem.focus();
        } else if (firstCItem) {
          e.preventDefault();
          firstCItem.focus();
        }
        step = 2;
      }
    });
  }
  document.addEventListener("DOMContentLoaded", initLineageFocus);
  const observer = new MutationObserver(initLineageFocus);
  observer.observe(document.body, { childList: true, subtree: true });
})();