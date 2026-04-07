function updateTreeStyles() {

  const parentSections = document.querySelectorAll('.parent-section');
  const childSections = document.querySelectorAll('.child-section');


  const parentUL = document.querySelectorAll('.parent');
  const childUL = document.querySelectorAll('.child');

  const hasSingleParentsSection = parentUL.length > 0
    && Array.from(parentUL).every((ul) => ul.querySelectorAll(':scope > li').length === 1);
  const hasSingleChildsSection = childUL.length > 0
    && Array.from(childUL).every((ul) => ul.querySelectorAll(':scope > li').length === 1);

  if (hasSingleParentsSection) {
    parentSections[0]?.classList.add('single-parents-section');

    // Reverse order as requested: siblings reversed at each level,
    // and each parent shown after its children (post-order style).
    const reorderTree = (ul) => {
      const items = Array.from(ul.querySelectorAll(':scope > li'));

      // Reverse siblings at this level
      items.reverse().forEach((li) => ul.appendChild(li));

      // Recurse first, then move parent label after children
      items.forEach((li) => {
        const nestedUL = li.querySelector(':scope > ul');
        if (nestedUL) {
          reorderTree(nestedUL);
        }

        const div = li.querySelector(':scope > div');
        if (div && nestedUL) {
          li.removeChild(div);
          li.appendChild(div);
        }
      });
    };

    let maxDepth = 0;
    const collectMaxDepth = (ul, depth) => {
      if (depth > maxDepth) maxDepth = depth;
      const items = Array.from(ul.querySelectorAll(':scope > li'));
      items.forEach((li) => {
        const nestedUL = li.querySelector(':scope > ul');
        if (nestedUL) {
          collectMaxDepth(nestedUL, depth + 1);
        }
      });
    };

    const applyInverseDepthMargin = (ul, depth) => {
      const items = Array.from(ul.querySelectorAll(':scope > li'));
      items.forEach((li) => {
        const div = li.querySelector(':scope > div');
        if (div) {
          const margin = Math.max(0, maxDepth - depth);
          div.style.marginLeft = (margin + 1) + 'em';
        }

        const nestedUL = li.querySelector(':scope > ul');
        if (nestedUL) {
          applyInverseDepthMargin(nestedUL, depth + 1);
        }
      });
    };

    const rootUL = parentSections[0].querySelector('ul');
    if (rootUL) {
      reorderTree(rootUL);
      collectMaxDepth(rootUL, 0);
      applyInverseDepthMargin(rootUL, 0);
    }

    // Apply the next increment to .section-title sibling and .child-section
    const lastEmValue = maxDepth + 1;
    const sectionTitle = parentSections[0]?.parentElement?.querySelector('.section-title');
    if (sectionTitle) {
      sectionTitle.style.marginLeft = lastEmValue + 'em';
    }
    if (childSections[0]) {
      childSections[0].style.marginLeft = (lastEmValue + 1) + 'em';
    }
  } else {
    parentSections[0]?.classList.add('parent-level-1-grand');
  }


  if (hasSingleChildsSection) {
    childSections[0]?.classList.add('single-childs-section');

    // Apply margin-left incrementally by index in em (skip first item)
    const childLiDivPairs = [];
    let currentChildLI = childSections[0]?.querySelector('ul > li');
    while (currentChildLI) {
      const div = currentChildLI.querySelector(':scope > div');
      childLiDivPairs.push({ li: currentChildLI, div });
      currentChildLI = currentChildLI.querySelector(':scope > ul > li');
    }

    childLiDivPairs.forEach(({ li }, index) => {
      // if (index === 0) return;
      const div = li.querySelector(':scope > div');
      if (div) {
        div.style.marginLeft = (index + 1) + 'em';
      }
    });

  } else {
    childSections[0]?.classList.add('child-level-1-grand');
  }

}
// Try on DOMContentLoaded
document.addEventListener('DOMContentLoaded', updateTreeStyles);


