document.addEventListener('DOMContentLoaded', () => {
  const parentTree = document.getElementById('plineage-tree');
  const childTree = document.getElementById('clineage-tree');
  const sectionTitle = document.querySelector('.section-title');

  if (!parentTree && !childTree) return;

  if (sectionTitle) sectionTitle.setAttribute('tabindex', '0');

  const allLinks = document.querySelectorAll('a[role="treeitem"]');
  allLinks.forEach((link) => link.setAttribute('tabindex', '-1'));

  function moveFocus(el) {
    if (!el) return;

    document.querySelectorAll('[tabindex="0"]').forEach((e) => {
      e.setAttribute('tabindex', '-1');
    });

    el.setAttribute('tabindex', '0');
    el.focus();
  }

  function getParentNavigation() {
    if (!parentTree) return [];

    const order = [];
    const parentLis = Array.from(parentTree.querySelectorAll(':scope > li'));
    const reversedLis = parentLis.reverse();

    reversedLis.forEach((li) => {
      const parent = li.querySelector(':scope > .list-item > a');
      if (parent) order.push(parent);

      const group = li.querySelector(":scope > ul[role='group']");
      if (group) {
        const grandParent = Array.from(group.querySelectorAll(':scope > li > .list-item > a'));
        grandParent.forEach((gc) => order.push(gc));
      }
    });

    return order;
  }

  function getChildNavigation() {
    if (!childTree) return [];

    const order = [];

    childTree.querySelectorAll(':scope > li').forEach((li) => {
      const child = li.querySelector(':scope > .list-item > a');
      if (child) order.push(child);

      const group = li.querySelector(":scope > ul[role='group']");
      if (group) {
        group.querySelectorAll(':scope > li > .list-item > a').forEach((gc) => order.push(gc));
      }
    });

    return order;
  }

  document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const parents = getParentNavigation();
    const children = getChildNavigation();

    if (sectionTitle && active === sectionTitle) {
      if (e.key === 'ArrowRight' && parents.length) {
        e.preventDefault();
        moveFocus(parents[0]);
      }

      if (e.key === 'ArrowLeft' && children.length) {
        e.preventDefault();
        moveFocus(children[0]);
      }

      return;
    }

    if (parents.includes(active)) {
      const index = parents.indexOf(active);

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (index < parents.length - 1) moveFocus(parents[index + 1]);
          break;

        case 'ArrowDown':
          e.preventDefault();
          if (index > 0) moveFocus(parents[index - 1]);
          break;

        case 'ArrowLeft':
          e.preventDefault();
          if (sectionTitle) moveFocus(sectionTitle);
          break;
      }

      return;
    }

    if (children.includes(active)) {
      const index = children.indexOf(active);

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (index < children.length - 1) moveFocus(children[index + 1]);
          break;

        case 'ArrowUp':
          e.preventDefault();
          if (index > 0) moveFocus(children[index - 1]);
          break;

        case 'ArrowRight':
          e.preventDefault();
          if (sectionTitle) moveFocus(sectionTitle);
          break;
      }

      return;
    }
  });
});
