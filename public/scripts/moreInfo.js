document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('copyLink').addEventListener('click', async (event) => {
    try {
      const link = event.target.value;
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error('Clipboard write failed:', err);
    }
  });

  window.onload = function () {
    window.scrollTo(0, 0);
  };
});
