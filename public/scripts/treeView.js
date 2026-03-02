document.addEventListener('DOMContentLoaded', () => {

  initTree('plineage-tree');
  initTree('clineage-tree');

  function initTree(treeId) {
    const tree = document.getElementById(treeId);
    if (!tree) return;

    const items = tree.querySelectorAll('[role="treeitem"]');
    if (!items.length) return;
    
    items[0].setAttribute('tabindex', '0');

    tree.addEventListener('keydown', (e) => {
      const current = document.activeElement;
      if (!tree.contains(current)) return;

      const visibleItems = getVisibleItems(tree);
      const index = visibleItems.indexOf(current);

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (index < visibleItems.length - 1) {
            moveFocus(current, visibleItems[index + 1]);
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          if (index > 0) {
            moveFocus(current, visibleItems[index - 1]);
          }
          break;

        case 'ArrowRight':
          if (current.getAttribute('aria-expanded') === 'false') {
            current.setAttribute('aria-expanded', 'true');
            toggleChildren(current, true);
          }
          break;

        case 'ArrowLeft':
          if (current.getAttribute('aria-expanded') === 'true') {
            current.setAttribute('aria-expanded', 'false');
            toggleChildren(current, false);
          } else {
            const parent = getParentTreeItem(current);
            if (parent) moveFocus(current, parent);
          }
          break;
      }
    });
  }

  function getVisibleItems(tree) {
    return [...tree.querySelectorAll('[role="treeitem"]')]
      .filter(item => item.offsetParent !== null);
  }

  function getParentTreeItem(item) {
    return item.closest('[role="group"]')
      ?.closest('[role="treeitem"]');
  }

  function moveFocus(oldItem, newItem) {
    oldItem.setAttribute('tabindex', '-1');
    newItem.setAttribute('tabindex', '0');
    newItem.focus();
  }

  function toggleChildren(item, show) {
    const group = item.querySelector('[role="group"]');
    if (group) {
      group.style.display = show ? 'block' : 'none';
    }
  }

});