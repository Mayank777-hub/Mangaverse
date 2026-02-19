export function producttemp(){
const onetohun = document.getElementById("onetohun");
    const current = document.querySelector(".current");
    const seccurrent = document.querySelector(".seccurrent");
    const flipInner = document.getElementById("flipInner");
    const flipBtn = document.getElementById("flipBtn");
    const zoomContainer = document.getElementById("zoomContainer");
    const lens = document.getElementById("lens");
    const result = document.getElementById("result");
    const imgarea = document.getElementById("imgarea");

    const placeholder = document.createElement("option");
    placeholder.textContent = "Select Quantity";
    placeholder.disabled = true;
    placeholder.selected = true;
    onetohun.appendChild(placeholder);

    for (let index = 1; index <= 5; index++) {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = index;
      onetohun.appendChild(option);
    }

    const show = new Date();
    const deliver = new Date();
    deliver.setDate(deliver.getDate() + 2);
    const firstformat = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    };
    const format = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    };

    const weget = show.toLocaleString('en-GB', format);
    const wegetto = deliver.toLocaleString('en-GB', firstformat);
    seccurrent.textContent = wegetto;
    current.textContent = weget;

    let currentImg = document.getElementById("productFront");
    let cx, cy;

    flipBtn.addEventListener("click", () => {
      flipInner.classList.toggle("flipped");
      currentImg = flipInner.classList.contains("flipped")
        ? document.getElementById("productBack")
        : document.getElementById("productFront");
    });

    imgarea.addEventListener("mouseenter", () => {
      lens.style.display = "block";
      zoomContainer.classList.add("active");

    });
    imgarea.addEventListener("mouseleave", () => {
      lens.style.display = "none";
      zoomContainer.classList.remove("active");
      zoomContainer.style.backgroundImage = "none";
    });

    imgarea.addEventListener("mousemove", (e) => moveLens(e));

    function moveLens(e) {
      const rect = currentImg.getBoundingClientRect();

      cx = zoomContainer.offsetWidth / lens.offsetWidth;
      cy = zoomContainer.offsetHeight / lens.offsetHeight;

      // zoomContainer.style.backgroundSize = `url()`;
      zoomContainer.style.backgroundImage = `url('${currentImg.src}')`;
      zoomContainer.style.backgroundSize = `${rect.width * cx}px ${rect.height * cy}px`;

      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let lensX = x - lens.offsetWidth / 2;
      let lensY = y - lens.offsetHeight / 2;

      if (lensX < 0) lensX = 0;
      if (lensY < 0) lensY = 0;
      if (lensX > rect.width - lens.offsetWidth) lensX = rect.width - lens.offsetWidth;
      if (lensY > rect.height - lens.offsetHeight) lensY = rect.height - lens.offsetHeight;

      lens.style.left = lensX + "px";
      lens.style.top = lensY + "px";

      zoomContainer.style.backgroundPosition = `-${lensX * cx}px -${lensY * cy}px`;
    }

    const productfront = document.getElementById("productFront");
    const anvol = document.getElementById("anvol");
    const volumes = [
      { title: "Vol 1", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-84776-ChainsawMan_GN01_C1_Website-3-aJwi6A_iigynAjZ6wtRotQ.jpg" },
      { title: "Vol 2", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-85716-ChainsawMan_GN02_C1_Web-3-ubDKtTmiknE3cC7R2vbHPQ.jpg" },
      { title: "Vol 3", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-87044-ChainsawMan_GN03_C1_Web-3-fVP6Q8r1G-nKnE0ZSYaK7g.jpg" },
      { title: "Vol 4", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-87964-ChainsawMan_GN04_C1_Web-3-d8BOaM91BDUOY2HjS7RwSw.jpg" },
      { title: "Vol 5", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-89520-ChainsawMan_GN05_C1_Web-3-jEn06-oydlb_R1EsHc-Eqw.jpg" },
      { title: "Vol 6", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-90684-ChainsawMan_GN06_C1_Web-3-ExyC_SZSk4hE2SwQ2GFJhQ.jpg" },
      { title: "Vol 7", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-91336-ChainsawMan_GN07_C1_Web-3-zbMku6ZQsaiA0K0NKGHVHg.jpg" },
      { title: "Vol 8", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-91580-ChainsawMan_GN08_C1_Web-3-PzWhivmrBS4enP2ecLIGjw.jpg" },
      { title: "Vol 9", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-91948-ChainsawMan_GN09_C1_Web-3-8Xhps_GpDe-Znx-_nIYGww.jpg" },
      { title: "Vol 10", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-91956-ChainsawMan_GN10_C1_Web-3-ZpwwR1adFlv_gbTCTEOHGQ.jpg" },
      { title: "Vol 11", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-93380-ChainsawMan_GN11_C1_Web-3--rzBQsuLY1XQaLWOgTR2Lg.jpg" },
      { title: "Vol 12", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-105160-ChainsawMan_GN12_C1_Web-3-pGYFpo-UbtfnbBYz-wRXyA.jpg" },
      { title: "Vol 13", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-105368-ChainsawMan_GN13_C1_Web-3-K5BVypRlOkHIrRikT_TQ4A.jpg" },
      { title: "Vol 14", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-157740-ChainsawMan_GN14_C1_Web-3-93rijLG3jW04uIHP8hU6hg.jpg" },
      { title: "Vol 15", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-162316-ChainsawMan_GN15_C1_Website-3-crFytJ_mE5MemQebwfk-cA.jpg" },
      { title: "Vol 16", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-166836-ChainsawMan_GN16_C1_Web-3-9B_FdTzqTJLTeeHf8Af4Xg.jpg" },
      { title: "Vol 17", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-172876-ChainsawMan_GN17_C1_Web-3-JbJEKz6ZkjGGH-yUIijs1A.jpg" },
      { title: "Vol 18", img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-177268-ChainsawMan_GN18_C1_Web-3-HJQQWKFfs_kr1lpsppQqbw.jpg" },
      { title: "Vol 19", img: "5155wzILS2L_imgupscaler.ai_General_8K.jpg" },
    ];

    let indo = 18;
    function render() {

    //  productfront.src = volumes[indo].img;

      anvol.innerHTML = "";
      volumes.forEach((v, i) => {
        if (i !== indo) {
          const img = document.createElement("img");
          img.src = v.img;
          img.loading ="lazy";
          img.addEventListener("click", () => {
            indo = i;
            render();
          });
          anvol.appendChild(img);
        }
      });
    }
    render();
}