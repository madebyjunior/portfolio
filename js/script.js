/* ========== ANIMAÇÃO DE TEXTO NA HOME ========== */ 
var typed = new Typed(".typing", {
    strings: ["...", "", "Designer Gráfico", "UX Designer", "Analista de Marketing Digital"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ========== ATIVAR AS PÁGINAS INDIVIDUALMENTE ========== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                   // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }

/* ========== ACCORDION START ========== */
const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector(".accordion_header");
    const accordion_header_item2 = item.querySelector(".base_icon");

    accordion_header_item.addEventListener("click", () => {
        const accordion_content_item = item.querySelector(".accordion_content");

        const content_actived = document.querySelector(".base_active");

        verifyActive(item, accordion_content_item, content_actived);
    })

    accordion_header_item2.addEventListener("click", () => {
        const accordion_content_item = item.querySelector(".accordion_content");

        const content_actived = document.querySelector(".base_active");

        verifyActive(item, accordion_content_item, content_actived);
    })
})

function verifyActive(item, content, content_actived) {
    const icon_item = item.querySelector(".base_icon");

    const icons = document.querySelectorAll(".base_icon");

    icons.forEach((item) => (item.innerHTML = "Mostrar"));

    if(content_actived) {
        content_actived.style.height = 0
        content_actived.classList.remove("base_active")
    }

    if(content !== content_actived) {
        icon_item.innerHTML = "Ocultar";
        content.classList.add("base_active");
        content.style.height = content.scrollHeight + 10 + "px";
    }
}

/* ========== ACCORDION END ========== */
