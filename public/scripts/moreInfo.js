document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = window.location.origin;
  const appBasePath = '/natural-capital-ecosystem-assessment';

  const toAbsoluteUrl = (rawUrl) => {
    if (!rawUrl) return '';
    if (/^https?:\/\//i.test(rawUrl)) return rawUrl;

    return rawUrl.startsWith('/')
      ? `${baseUrl}${rawUrl}`
      : `${baseUrl}/${rawUrl}`;
  };

  const extractFilePathData = (rawUrl) => {
    if (!rawUrl) return null;

    const match = rawUrl.match(/\/data-sets\/([^/]+)\/files\/([^/?#]+)/i);
    if (!match) return null;

    let dataSetId;
    let fileName;
    try {
      dataSetId = decodeURIComponent(match[1]);
    } catch (err) {
      console.warn('Decode failed for dataSetId:', match[1], err);
      dataSetId = match[1];
    }
    try {
      fileName = decodeURIComponent(match[2]);
    } catch (err) {
      console.warn('Decode failed for fileName:', match[2], err);
      fileName = match[2];
    }
    return { dataSetId, fileName };
  };

  document.querySelectorAll('.copy-link').forEach((button) => {
    button.addEventListener('click', async (event) => {
      try {
        const link = event.currentTarget.value;
        await navigator.clipboard.writeText(link);
      } catch (err) {
        console.error('Clipboard write failed:', err);
      }
    });
  });

  document.querySelectorAll('.download-resource').forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();

      const target = event.currentTarget;
      const rawUrl = (target.dataset.url || '').trim();
      const fallbackDatasetId = (target.dataset.id || '').trim();

      let dataSetId = (target.dataset.datasetId || '').trim();
      let fileName = (target.dataset.fileName || '').trim();

      try {
        fileName = decodeURIComponent(fileName);
      } catch (err) {
        console.warn('Decode failed:', fileName, err);
      }

      if ((!dataSetId || !fileName) && rawUrl) {
        const parsed = extractFilePathData(rawUrl);
        if (parsed) {
          dataSetId = parsed.dataSetId;
          fileName = parsed.fileName;
        }
      }

      if (dataSetId && fileName) {
        const downloadUrl = `${baseUrl}${appBasePath}/file-download?dataSetId=${encodeURIComponent(dataSetId)}&fileName=${encodeURIComponent(fileName)}`;

        try {
          const response = await fetch(downloadUrl);

          if (response.ok) {
            const data = await response.json();
            window.location.href = data.url;
            return;
          }
        } catch (err) {
          console.error('Download URL fetch failed:', err);
        }
      }

      if (rawUrl) {
        const absoluteUrl = toAbsoluteUrl(rawUrl);

        if (/^https?:\/\//i.test(rawUrl)) {
          forceDownload(absoluteUrl);
          return;
        }

        let canAccess = false;
        try {
          const res = await fetch(absoluteUrl, { method: 'HEAD' });
          canAccess = res.ok;
        } catch (err) {
          console.warn('HEAD request failed for:', absoluteUrl, err);
        }

        if (canAccess) {
          triggerDownload(absoluteUrl);
        } else {
          window.location.href = absoluteUrl;
        }

        return;
      }

      if (fallbackDatasetId) {
        window.location.href = `${baseUrl}/dataset/${fallbackDatasetId}`;
      }
    });
  });

  function triggerDownload(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

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

  window.addEventListener('load', () => window.scrollTo(0, 0));
});