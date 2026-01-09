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

      const rawUrl = event.target.dataset.url;
      const datasetId = event.target.dataset.id;
      let url = `${baseUrl}/${rawUrl}`;

      if (/^https?:\/\//i.test(rawUrl)) {
        forceDownload(rawUrl);
        return;
      }

      if (rawUrl.includes('/file-management-open/')) {
        url = `${baseUrl}/${rawUrl}`;
      }

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
        window.location.href = `${baseUrl}/dataset/${datasetId}`;
      }
    });
  });

  function forceDownload(url, filename = '') {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  window.onload = function () {
    window.scrollTo(0, 0);
  };
});
