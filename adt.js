/* ==========================================================
   ADT - CONFIGURACIÓN
========================================================== */

const WHATSAPP_NUMBER = "5493585042057";


/* ==========================================================
   KITS
========================================================== */

const KITS = {

    /* ======================================================
       CÓRDOBA
    ====================================================== */

    cordoba: [

        {
            id: "qolsys-11",

            name: "Kit Qolsys 1.1",

            description:
                "Protección esencial con panel inteligente.",

            image:
                "assets/adt/cordoba/qolsys-11.jpg",

            includes: [

                "Panel inteligente Qolsys",

                "1 sensor magnético inalámbrico",

                "1 detector de movimiento"

            ]

        },


        {
            id: "qolsys-22",

            name: "Kit Qolsys 2.2",

            description:
                "Protección ampliada para tu hogar.",

            image:
                "assets/adt/cordoba/qolsys-22.jpg",

            includes: [

                "Panel inteligente Qolsys",

                "2 sensores magnéticos",

                "2 detectores de movimiento"

            ]

        },


        {
            id: "qolsys-view-22-interior",

            name:
                "Kit Qolsys View 2.2 + Cámara Interior",

            description:
                "Protección inteligente con cámara interior.",

            image:
                "assets/adt/cordoba/qolsys-view-22-interior.jpg",

            includes: [

                "Panel inteligente Qolsys",

                "2 sensores magnéticos",

                "2 detectores de movimiento",

                "1 cámara interior"

            ]

        },


        {
            id: "qolsys-view-22-exterior",

            name:
                "Kit Qolsys View 2.2 + Cámara Exterior",

            description:
                "Protección inteligente con cámara exterior.",

            image:
                "assets/adt/cordoba/qolsys-view-22-exterior.jpg",

            includes: [

                "Panel inteligente Qolsys",

                "2 sensores magnéticos",

                "2 detectores de movimiento",

                "1 cámara exterior"

            ]

        },


        {
            id: "galpon-22",

            name:
                "Kit Galpón 2.2",

            description:
                "Protección reforzada para galpones, depósitos y grandes espacios.",

            image:
                "assets/adt/cordoba/galpon-22.jpg",

            includes: [

                "Panel interactivo",

                "2 magnéticos interiores con bornera",

                "1 magnético blindado",

                "2 PIR doble tecnología interiores",

                "1 teclado",

                "1 sirena exterior"

            ]

        },


        {
            id: "galpon-cx-22-interior",

            name:
                "Kit Galpón CX 2.2 + Cámara Interior",

            description:
                "Protección reforzada con vigilancia mediante cámara interior.",

            image:
                "assets/adt/cordoba/galpon-cx-22-interior.jpg",

            includes: [

                "Panel interactivo",

                "2 magnéticos interiores con bornera",

                "1 magnético blindado",

                "2 PIR doble tecnología interiores",

                "1 teclado",

                "1 sirena exterior",

                "1 cámara interior"

            ]

        },


        {
            id: "galpon-cx-22-exterior",

            name:
                "Kit Galpón CX 2.2 + Cámara Exterior",

            description:
                "Protección reforzada con vigilancia mediante cámara exterior.",

            image:
                "assets/adt/cordoba/galpon-cx-22-exterior.jpg",

            includes: [

                "Panel interactivo",

                "2 magnéticos interiores con bornera",

                "1 magnético blindado",

                "2 PIR doble tecnología interiores",

                "1 teclado",

                "1 sirena exterior",

                "1 cámara exterior"

            ]

        }

    ],


    /* ======================================================
       RESTO DEL PAÍS
    ====================================================== */

    "resto-pais": [

        {
            id: "cx-11",

            name:
                "Kit CX 1.1",

            description:
                "Protección esencial para hogares y espacios pequeños.",

            image:
                "assets/adt/resto-pais/cx-11.jpg",

            includes: [

                "Panel interactivo CX",

                "1 magnético interior con bornera",

                "1 detector de movimiento PIR interior",

                "1 teclado CX"

            ]

        },


        {
            id: "cx-22",

            name:
                "Kit CX 2.2",

            description:
                "Protección ampliada para hogares y espacios pequeños.",

            image:
                "assets/adt/resto-pais/cx-22.jpg",

            includes: [

                "Panel interactivo CX",

                "2 magnéticos interiores con bornera",

                "2 detectores de movimiento PIR interior",

                "1 teclado CX"

            ]

        },


        {
            id: "cx-22-interior",

            name:
                "Kit CX 2.2 + Cámara Interior",

            description:
                "Protección ampliada con vigilancia mediante cámara interior.",

            image:
                "assets/adt/resto-pais/cx-22-interior.jpg",

            includes: [

                "Panel interactivo CX",

                "2 magnéticos interiores con bornera",

                "2 detectores de movimiento PIR interior",

                "1 teclado CX",

                "1 cámara interior"

            ]

        },


        {
            id: "cx-22-exterior",

            name:
                "Kit CX 2.2 + Cámara Exterior",

            description:
                "Protección ampliada con vigilancia mediante cámara exterior.",

            image:
                "assets/adt/resto-pais/cx-22-exterior.jpg",

            includes: [

                "Panel interactivo CX",

                "2 magnéticos interiores con bornera",

                "2 detectores de movimiento PIR interior",

                "1 teclado CX",

                "1 cámara exterior"

            ]

        }

    ]

};


/* ==========================================================
   ELEMENTOS
========================================================== */

const locationScreen =
    document.getElementById(
        "location-screen"
    );


const kitsScreen =
    document.getElementById(
        "kits-screen"
    );


const detailScreen =
    document.getElementById(
        "detail-screen"
    );


const kitsGrid =
    document.getElementById(
        "kits-grid"
    );


const kitDetail =
    document.getElementById(
        "kit-detail"
    );


const locationLabel =
    document.getElementById(
        "location-label"
    );


const backLocation =
    document.getElementById(
        "back-location"
    );


const backKits =
    document.getElementById(
        "back-kits"
    );


/* ==========================================================
   UBICACIÓN
========================================================== */

let selectedLocation = null;


/* ==========================================================
   SELECCIONAR UBICACIÓN
========================================================== */

document
    .querySelectorAll(
        ".location-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    selectedLocation =
                        card.dataset.location;

                    showKits(
                        selectedLocation
                    );

                }
            );

        }
    );


/* ==========================================================
   MOSTRAR KITS
========================================================== */

function showKits(
    location
) {

    const kits =
        KITS[location] || [];


    kitsGrid.innerHTML = "";


    if (
        location === "cordoba"
    ) {

        locationLabel.textContent =
            "ADT ALARMAS · CÓRDOBA";

    } else {

        locationLabel.textContent =
            "ADT ALARMAS · RESTO DEL PAÍS";

    }


    kits.forEach(
        kit => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "kit-card";


            card.innerHTML = `

                <div class="kit-image-container">

                    <img
                        src="${kit.image}"
                        alt="${escapeHTML(kit.name)}"
                        class="kit-image"
                        loading="lazy"
                        onerror="this.style.display='none';"
                    >

                </div>


                <div class="kit-card-content">

                    <span class="kit-tag">
                        ADT ALARMAS
                    </span>


                    <h2>
                        ${escapeHTML(kit.name)}
                    </h2>


                    <p>
                        ${escapeHTML(kit.description)}
                    </p>


                    <button
                        class="kit-button"
                        data-kit-id="${kit.id}"
                    >

                        Más información

                        <span>
                            →
                        </span>

                    </button>

                </div>

            `;


            kitsGrid.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            ".kit-button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const kitId =
                            button.dataset.kitId;

                        showDetail(
                            kitId
                        );

                    }
                );

            }
        );


    showScreen(
        kitsScreen
    );

}


/* ==========================================================
   MOSTRAR DETALLE
========================================================== */

function showDetail(
    kitId
) {

    const kits =
        KITS[
            selectedLocation
        ] || [];


    const kit =
        kits.find(
            item =>
                item.id === kitId
        );


    if (!kit) {

        return;

    }


    const whatsappMessage =
        `Hola, quiero información sobre el ${kit.name}.`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappMessage
        )}`;


    kitDetail.innerHTML = `

        <div class="detail-image">

            <img
                src="${kit.image}"
                alt="${escapeHTML(kit.name)}"
                onerror="this.style.display='none';"
            >

        </div>


        <div class="detail-content">

            <span class="kit-tag">
                ADT ALARMAS
            </span>


            <h1>
                ${escapeHTML(kit.name)}
            </h1>


            <p class="detail-description">
                ${escapeHTML(kit.description)}
            </p>


            <div class="includes-box">

                <h2>
                    ¿Qué incluye?
                </h2>


                <ul>

                    ${kit.includes
                        .map(
                            item => `

                                <li>

                                    <span class="check">
                                        ✓
                                    </span>

                                    ${escapeHTML(item)}

                                </li>

                            `
                        )
                        .join("")
                    }

                </ul>

            </div>


            <div class="detail-actions">

                <a
                    href="${whatsappURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="whatsapp-button"
                >

                    <span>
                        💬
                    </span>

                    Lo quiero

                </a>


                <button
                    class="secondary-button"
                    id="other-kits-button"
                >

                    Ver otros kits

                </button>

            </div>

        </div>

    `;


    document
        .getElementById(
            "other-kits-button"
        )
        .addEventListener(
            "click",
            () => {

                showKits(
                    selectedLocation
                );

            }
        );


    showScreen(
        detailScreen
    );

}


/* ==========================================================
   NAVEGACIÓN
========================================================== */

if (backLocation) {

    backLocation.addEventListener(
        "click",
        () => {

            showScreen(
                locationScreen
            );

        }
    );

}


if (backKits) {

    backKits.addEventListener(
        "click",
        () => {

            showScreen(
                kitsScreen
            );

        }
    );

}


/* ==========================================================
   CAMBIAR PANTALLA
========================================================== */

function showScreen(
    screen
) {

    document
        .querySelectorAll(
            ".screen"
        )
        .forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );


    screen.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================================
   ESCAPAR HTML
========================================================== */

function escapeHTML(
    value
) {

    return String(
        value
    )
    .replace(
        /&/g,
        "&amp;"
    )
    .replace(
        /</g,
        "&lt;"
    )
    .replace(
        />/g,
        "&gt;"
    )
    .replace(
        /"/g,
        "&quot;"
    )
    .replace(
        /'/g,
        "&#039;"
    );

}


/* ==========================================================
   AÑO
========================================================== */

const currentYear =
    document.getElementById(
        "current-year"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
