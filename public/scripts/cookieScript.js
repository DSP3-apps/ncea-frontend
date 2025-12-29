const cookieAcceptanceLabel = 'ncea-cookie-acceptance-level';
const defaultCookieAcceptanceData = 'false';
const cookiePolicyDisplayLabel = 'ncea-cookie-banner-dismissed';
const expiryDays = 365;
const cookieBanner = document.getElementById('cookie_banner');
const cookieBlock = document.getElementById('cookie_block');
const acceptBlock = document.getElementById('accept_block');
const acceptButton = document.getElementById('accept_button');
const rejectBlock = document.getElementById('reject_block');
const rejectButton = document.getElementById('reject_button');
const hideButtons = document.querySelectorAll('.hide_button');
const saveCookieButton = document.getElementById('ncea_save_cookies');
const yesNEOption = document.getElementById('ne_cookie_preference-yes');
const noNEOption = document.getElementById('ne_cookie_preference-no');
const cookieAlert = document.getElementById('ncea_cookie_alert');
const gtmId = gtmIdValue ?? '';

const addGtmScript = (gtmId) => {
  if (!gtmId) return;

  // Add GA4 script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', gtmId);
};

const removeGtmScript = (gtmId) => {
  const script = document.getElementById('gtm-script');
  if (script) {
    script.parentNode.removeChild(script);
  }
  const noscript = document.getElementById('gtm-noscript');
  if (noscript) {
    noscript.parentNode.removeChild(noscript);
  }
  const scripts = document.querySelectorAll(`script[src*="googletagmanager.com/gtm.js?id=${gtmId}"]`);
  scripts.forEach((script) => {
    script.parentNode.removeChild(script);
  });
};

const setCookie = (name, value, days) => {
  if (value) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
  }
};

const getCookie = (name) => {
  const nameEx = `${name}=`;
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.indexOf(nameEx) === 0) {
      const cookieValue = trimmedCookie.substring(nameEx.length, trimmedCookie.length);
      const expiration = trimmedCookie.split(';').find((item) => item.trim().startsWith('expires='));
      if (!expiration || new Date(expiration.split('=')[1]) > new Date()) {
        return cookieValue;
      } else {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        return null;
      }
    }
  }
  return null;
};

const hideCookieHandler = () => {
  if (cookieBanner) {
    cookieBanner.setAttribute('hidden', '');
  }
  if (cookieBlock) {
    cookieBlock.setAttribute('hidden', '');
  }
  if (acceptBlock) {
    acceptBlock.setAttribute('hidden', '');
  }
  if (rejectBlock) {
    rejectBlock.setAttribute('hidden', '');
  }
};

const showCookieSection = () => {
  setCookie(cookieAcceptanceLabel, defaultCookieAcceptanceData, expiryDays);
  if (cookieBanner) {
    cookieBanner.removeAttribute('hidden');
  }
  if (cookieBlock) {
    cookieBlock.removeAttribute('hidden');
  }
};

const checkCookieAcceptance = () => {
  const isCookieAlreadySaved = getCookie(cookiePolicyDisplayLabel);
  if (isCookieAlreadySaved === 'true') {
    hideCookieHandler();
  } else {
    showCookieSection();
  }
};

const acceptCookieHandler = () => {
  setCookie(cookiePolicyDisplayLabel, 'true', expiryDays);
  setCookie(cookieAcceptanceLabel, 'true', expiryDays);
  if (cookieBlock) {
    cookieBlock.setAttribute('hidden', '');
  }
  if (acceptBlock) {
    acceptBlock.removeAttribute('hidden');
  }
  if (rejectBlock) {
    rejectBlock.setAttribute('hidden', '');
  }
  loadCookiePreferences();
};

const rejectCookieHandler = () => {
  setCookie(cookiePolicyDisplayLabel, 'true', expiryDays);
  setCookie(cookieAcceptanceLabel, 'false', expiryDays);
  if (cookieBlock) {
    cookieBlock.setAttribute('hidden', '');
  }
  if (acceptBlock) {
    acceptBlock.setAttribute('hidden', '');
  }
  if (rejectBlock) {
    rejectBlock.removeAttribute('hidden');
  }
  loadCookiePreferences();
};

const attachAcceptCookieListener = () => {
  if (acceptButton) {
    acceptButton.addEventListener('click', acceptCookieHandler);
  }
};

const attachHideCookieListener = () => {
  if (hideButtons.length) {
    hideButtons.forEach((hideButton) => {
      hideButton.addEventListener('click', hideCookieHandler);
    });
  }
};

const attachRejectCookieListener = () => {
  if (rejectButton) {
    rejectButton.addEventListener('click', rejectCookieHandler);
  }
};

const loadCookiePreferences = () => {
  const isNECookieAccepted = getCookie(cookieAcceptanceLabel);
  if (isNECookieAccepted && isNECookieAccepted === 'true') {
    addGtmScript(gtmId);
  } else {
    removeGtmScript(gtmId);
  }
  if (isNECookieAccepted && isNECookieAccepted === 'true' && yesNEOption) {
    yesNEOption.checked = true;
    noNEOption.checked = false;
  }
  if (isNECookieAccepted === 'false' && noNEOption) {
    yesNEOption.checked = false;
    noNEOption.checked = true;
  }
};

const showCookieAlert = () => {
  if (cookieAlert) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    cookieAlert.classList.remove('hide');
  }
};

const saveCookieHandler = () => {
  if (yesNEOption && noNEOption) {
    yesNEOption.checked && acceptCookieHandler();
    noNEOption.checked && rejectCookieHandler();
  }
  showCookieAlert();
};

const attachSaveCookieListener = () => {
  if (saveCookieButton) {
    saveCookieButton.addEventListener('click', saveCookieHandler);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  checkCookieAcceptance();
  attachAcceptCookieListener();
  attachHideCookieListener();
  attachRejectCookieListener();
  loadCookiePreferences();
  attachSaveCookieListener();
});
