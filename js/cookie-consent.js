document.addEventListener('DOMContentLoaded', function () {
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookieConsent')) {
        createCookieBanner();
    }
});

function createCookieBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #333;
        color: #fff;
        padding: 15px;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
    `;

    const text = document.createElement('p');
    text.style.cssText = 'margin: 0; font-size: 14px;';
    text.innerHTML = 'เว็บไซต์นี้ใช้คุกกี้เพื่อวัตถุประสงค์ในการปรับปรุงประสบการณ์ของผู้ใช้ให้ดียิ่งขึ้น การใช้เว็บไซต์นี้แสดงว่าท่านยอมรับนโยบายคุกกี้ของเรา <a href="#" style="color: #4AC4F3; text-decoration: underline;">อ่านเพิ่มเติม</a>';

    const button = document.createElement('button');
    button.innerText = 'ยอมรับ';
    button.style.cssText = `
        background-color: #4AC4F3;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s;
    `;
    button.onmouseover = function () {
        this.style.backgroundColor = '#35a4d0';
    };
    button.onmouseout = function () {
        this.style.backgroundColor = '#4AC4F3';
    };

    button.onclick = function () {
        localStorage.setItem('cookieConsent', 'true');
        banner.style.display = 'none';
    };

    banner.appendChild(text);
    banner.appendChild(button);
    document.body.appendChild(banner);
}
