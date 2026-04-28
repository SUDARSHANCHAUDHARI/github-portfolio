const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            links.forEach((link) => {
                const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
                link.classList.toggle("is-active", isMatch);
            });
        });
    },
    {
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const repoSearch = document.getElementById("repo-search");
const filterChips = [...document.querySelectorAll(".filter-chip")];
const repoGroups = [...document.querySelectorAll(".repo-group")];

let activeFilter = "all";

const ITEM_LEVEL_FILTERS = new Set(["plugin", "qa"]);

function updateRepoFilters() {
    const searchValue = (repoSearch?.value || "").trim().toLowerCase();
    const isItemLevel = ITEM_LEVEL_FILTERS.has(activeFilter);

    repoGroups.forEach((group) => {
        const summary = group.querySelector("summary");
        const groupTags = (summary?.dataset.tags || "").toLowerCase();
        const items = [...group.querySelectorAll("li")];

        if (isItemLevel) {
            let visibleCount = 0;
            items.forEach((item) => {
                const itemTags = (item.dataset.tags || "").toLowerCase();
                const matchesFilter = itemTags.includes(activeFilter);
                const matchesSearch = !searchValue || item.textContent.toLowerCase().includes(searchValue);
                const show = matchesFilter && matchesSearch;
                item.style.display = show ? "" : "none";
                if (show) visibleCount++;
            });
            group.classList.toggle("is-hidden", visibleCount === 0);
            if (visibleCount > 0) group.open = true;
        } else {
            items.forEach((item) => { item.style.display = ""; });
            const matchesFilter = activeFilter === "all" || groupTags.includes(activeFilter);
            const matchesSearch = !searchValue || group.textContent.toLowerCase().includes(searchValue);
            const shouldShow = matchesFilter && matchesSearch;
            group.classList.toggle("is-hidden", !shouldShow);
            if (shouldShow && (activeFilter !== "all" || Boolean(searchValue))) {
                group.open = true;
            }
        }
    });
}

filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        activeFilter = chip.dataset.filter || "all";
        filterChips.forEach((button) => {
            button.classList.toggle("is-active", button === chip);
        });
        updateRepoFilters();
    });
});

if (repoSearch) {
    repoSearch.addEventListener("input", updateRepoFilters);
}
