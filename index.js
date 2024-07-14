const applicationForm = document.querySelector("#application-form");

applicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
        alert("Captcha not completed");
        throw new Error("Captcha not completed");
    } else {
        alert("Success");
        location.reload();
    }
});

const translations = {
    ua: {
        headerLogoAlt: "Логотип",
        headerHelp: "Допомога",
        headerBlog: "Блог",
        headerTraining: "Навчання",
        headerBloggerCatalog: "Каталог блогерів",
        headerLogin: "Увійти",
        headerRegistration: "Реєстрація",
        headerMenu: "Меню",
        /*  */
        mainTitle: "EPICSTARS — платформа, що об’єднує ",
        mainHighlight: "рекламодавців та блогерів",
        mainSubtitle:
            "Допомагаємо брендам та компаніям транслювати свої маркетингові активності через лідерів думок та блогерів",
        mainCta: "давайте почнемо!",
        mainBannerAlt: "Баннер",
        /*  */
        service1Title: "Інтернет маркетинг",
        service1Desc:
            "Досвідчені маркетологи компанії Skyweb займаються побудовою ефективних інтернет маркетинг стратегій.",
        serviceMore: "Дізнатися більше",
        service2Title: "Веб Розробка",
        service2Desc:
            "В Skyweb ви можете замовити розробку сайту згідно з наданим технічним завданням.",
        service3Title: "SEO Оптимізація",
        service3Desc:
            "Команда професіоналів виконує комплексний аналіз сайту і оптимізує SEO показники.",
        service4Title: "Розробка Додатків",
        service4Desc:
            "Ми робимо додатки для мобільних пристроїв з подальшою підтримкою при релізі в маркетплейси.",
        service5Title: "Ускорення Сайта",
        service5Desc:
            "Ми знаємо, як прискорити ваш сайт. Розробники збільшують швидкість завантаження і роблять це якісно.",
        service6Title: "SEO Копірайтинг",
        service6Desc:
            "Велика команда копірайтерів в короткі терміни пише унікальні SEO тексти для сайту з ключовими словами.",
        /*  */
        aboutBannerAlt: "Про нашу компанію",
        aboutSubtitle: "Про нашу компанію",
        aboutMission:
            "Наше завдання – Забезпечити бізнес грамотною системою маркетингу",
        aboutDescription:
            "Компанія Skyweb надає послуги професійних інтернет-маркетологів клієнтам по всьому світу. Серед найбільш затребуваних послуг, спрямованих на розвиток бізнесу, є наступні:",
        aboutWebDevSkill: "Веб розробка",
        aboutSeoSkill: "SEO Оптимізація",
        aboutMarketingSkill: "Інтернет Маркетинг",
        aboutMobileDevSkill: "Мобільна розробка",
        /*  */
        whyChooseUsSubtitle: "Чому обирають нас?",
        whyChooseUsTitle:
            "Продвигайте свій бренд в інтернеті з сучасними ІТ рішеннями",
        whyChooseUsDescription:
            "Досвідчена веб студія Skyweb несе повну відповідальність за надані послуги і гарантує наступні переваги:",
        whyChooseUsAdvantage: "Приємні співробітники",
        whyChooseUsBannerAlt: "Чому обирають нас?",
        /*  */
        timeInItTitle: "Більше 6 років досвіду в галузі IT",
        timeInItYearsInDevelopment: "Років у розробці",
        timeInItSuccessfulProjects: "Виконаних проектів",
        timeInItSatisfiedClients: "Задоволених клієнтів",
        timeInItEmployees: "Співробітників",
        /*  */
        joinUsSubtitle: "Кар'єра в IT",
        joinUsTitle: "Вступайте в нашу команду",
        jobWebDeveloper: "Веб розробник",
        jobSeoSpecialist: "SEO спеціаліст",
        jobInternetMarketer: "Інтернет маркетолог",
        jobSeoCopywriter: "SEO копірайтер",
        jobGraphicDesigner: "Графічний дизайнер",
        jobUxUiDesigner: "UX/UI дизайнер",
        jobCompanyManager: "Менеджер компанії",
        jobSolutionTester: "Тестувальник рішень",
        jobOtherActivity: "Інша діяльність",
        /*  */
        footerBannerAlt: "Залиште заявку на зворотний зв'язок",
        footerContactUs: "Зв'яжіться з нами",
        footerCallToAction: "Залиште заявку на зворотний зв'язок",
        footerYourName: "Ваше ім'я",
        footerPhoneNumber: "Номер телефону",
        footerSend: "Відправити",
        footerRights: "Copyright 2019-2022 © Skyweb Co. Всі права захищені.",
    },
    eng: {
        headerLogoAlt: "Logo",
        headerHelp: "Help",
        headerBlog: "Blog",
        headerTraining: "Training",
        headerBloggerCatalog: "Blogger Catalog",
        headerLogin: "Login",
        headerRegistration: "Registration",
        headerMenu: "Menu",
        /*  */
        mainTitle: "EPICSTARS — a platform uniting ",
        mainHighlight: "advertisers and bloggers",
        mainSubtitle:
            "We help brands and companies broadcast their marketing activities through opinion leaders and bloggers",
        mainCta: "let's get started!",
        mainBannerAlt: "Banner",
        /*  */
        service1Title: "Internet Marketing",
        service1Desc:
            "Experienced marketers at Skyweb are engaged in building effective internet marketing strategies.",
        serviceMore: "Learn more",
        service2Title: "Web Development",
        service2Desc:
            "At Skyweb, you can order website development according to the provided technical task.",
        service3Title: "SEO Optimization",
        service3Desc:
            "A team of professionals performs a comprehensive analysis of the site and optimizes SEO indicators.",
        service4Title: "App Development",
        service4Desc:
            "We make applications for mobile devices with subsequent support upon release in marketplaces.",
        service5Title: "Site Acceleration",
        service5Desc:
            "We know how to speed up your site. Developers increase the loading speed and do it qualitatively.",
        service6Title: "SEO Copywriting",
        service6Desc:
            "A large team of copywriters quickly writes unique SEO texts for the site with keywords.",
        /*  */
        aboutBannerAlt: "About our company",
        aboutSubtitle: "About our company",
        aboutMission:
            "Our task is to provide business with a competent marketing system",
        aboutDescription:
            "Skyweb offers services of professional internet marketers to clients around the world. Among the most in-demand services aimed at business development are the following:",
        aboutWebDevSkill: "Web Development",
        aboutSeoSkill: "SEO Optimization",
        aboutMarketingSkill: "Internet Marketing",
        aboutMobileDevSkill: "Mobile Development",
        /*  */
        whyChooseUsSubtitle: "Why choose us?",
        whyChooseUsTitle: "Promote your brand online with modern IT solutions",
        whyChooseUsDescription:
            "Experienced web studio Skyweb takes full responsibility for the provided services and guarantees the following advantages:",
        whyChooseUsAdvantage: "Friendly staff",
        whyChooseUsBannerAlt: "Why choose us?",
        /*  */
        timeInItTitle: "More than 6 years of experience in IT",
        timeInItYearsInDevelopment: "Years in development",
        timeInItSuccessfulProjects: "Successful projects",
        timeInItSatisfiedClients: "Satisfied clients",
        timeInItEmployees: "Employees",
        /*  */
        joinUsSubtitle: "Career in IT",
        joinUsTitle: "Join our team",
        jobWebDeveloper: "Web Developer",
        jobSeoSpecialist: "SEO Specialist",
        jobInternetMarketer: "Internet Marketer",
        jobSeoCopywriter: "SEO Copywriter",
        jobGraphicDesigner: "Graphic Designer",
        jobUxUiDesigner: "UX/UI Designer",
        jobCompanyManager: "Company Manager",
        jobSolutionTester: "Solution Tester",
        jobOtherActivity: "Other Activity",
        /*  */
        footerBannerAlt: "Submit a request for feedback",
        footerContactUs: "Contact us",
        footerCallToAction: "Submit a request for feedback",
        footerYourName: "Your name",
        footerPhoneNumber: "Phone number",
        footerSend: "Send",
        footerRights: "Copyright 2019-2022 © Skyweb Co. All rights reserved.",
    },
};

function changeLanguage(lng) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-lang");

        if (el.children.length > 0) {
            let foundTextNode = false;
            Array.from(el.childNodes).forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE && !foundTextNode) {
                    node.nodeValue = translations[lng][key];
                    foundTextNode = true;
                }
            });
            if (!foundTextNode) {
                const textNode = document.createTextNode(
                    translations[lng][key],
                );
                el.insertBefore(textNode, el.firstChild);
            }
        } else {
            el.textContent = translations[lng][key];
        }

        if (el.tagName === "IMG") {
            el.alt = translations[lng][key];
        }
    });

    const buttons = document.querySelectorAll(".languages button");
    buttons.forEach((button) => {
        if (button.innerText.toLowerCase() === lng) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

changeLanguage("ua");
