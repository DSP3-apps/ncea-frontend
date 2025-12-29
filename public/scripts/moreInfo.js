document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = window.location.origin;

  document.querySelectorAll('.copy-link').forEach((button) => {
    button.addEventListener('click', async (event) => {
      try {
        const link = event.target.value;

        await navigator.clipboard.writeText(link);
      } catch (err) {
        console.error('Clipboard write failed:', err);
      }
    });
  });

  const buttons = document.querySelectorAll('.download-resource');
  buttons.forEach((button) => {
    button.addEventListener('click', async function (event) {
      event.preventDefault();

      const datasetUrl = event.target.dataset.url;
      const url =
        datasetUrl.startsWith('http://') || datasetUrl.startsWith('https://') ? datasetUrl : `${baseUrl}/${datasetUrl}`;
      const datasetId = event.target.dataset.id;

      try {
        const res = await fetch(url, {
          method: 'HEAD',
        });

        if (res.ok) {
          const a = document.createElement('a');
          a.href = url;
          document.body.appendChild(a);
          a.click();
          a.remove();
        } else {
          window.location.href = `${baseUrl}/dataset/${datasetId}`;
        }
      } catch (err) {
        console.error('Download check failed:', err);
      }
    });
  });

  window.onload = function () {
    window.scrollTo(0, 0);
  };
});
