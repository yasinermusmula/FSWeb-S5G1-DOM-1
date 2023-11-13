const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
let tumTagA = document.querySelectorAll("nav a");

let lastEdit = tumTagA.forEach((text, item) => {
  text.className = "italic";
  text.textContent = siteContent.nav[`nav-item-${item + 1}`];
});

let firstImg = document.getElementById("logo-img");
firstImg.setAttribute("src", "http://localhost:9000/img/logo.png");

let sectionCtaText = document.querySelector(".cta-text h1");
sectionCtaText.textContent = "Bu DOM Mükemmel";

let sectionButtonText = document.querySelector(".cta-text button");
sectionButtonText.textContent = "Başlayın";

let sectionImg = document.getElementById("cta-img");
sectionImg.setAttribute("src", "http://localhost:9000/img/cta.png");

let mainContentEdit = document.querySelectorAll(
  ".text-content h4 , .text-content p"
);

let middleImg = document
  .getElementById("middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

let newMainContent = [];

for (let i in siteContent["ana-içerik"]) {
  newMainContent.push(siteContent["ana-içerik"][i]);
}

mainContentEdit.forEach((iterable, item) => {
  iterable.textContent = newMainContent[item];
});

let contactDoc = document.querySelector(".contact");
contactDoc.children[0].textContent = siteContent.iletisim["iletişim-h4"];

let contactDocP = document.querySelectorAll(".contact p");

let contactNewArr = [];
for (let i in siteContent.iletisim) {
  contactNewArr.push(siteContent.iletisim[i]);
}

contactDocP.forEach((iterable, item) => {
  iterable.textContent = contactNewArr[item + 1];
});

let footerLast = document.querySelector(".container footer a");
console.log(footerLast);
footerLast.className = "bold";
footerLast.textContent = siteContent.footer.copyright;
