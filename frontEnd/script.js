
async function loadMessage() {
    const response = await fetch('http://backend:8000/api/message');
    const data = await response.json();

    console.log(data);
};

document.addEventListener('DOMContentLoaded', () => {
    // --- DATOS PRINCIPALES ---
    const firstAidData = [
        { title: "RCP (Reanimación Cardiopulmonar)", description: "Procedimiento de emergencia para salvar vidas.",
          whatToDo: ["Verifica la conciencia y la respiración.", "Pide ayuda y llama al 112.", "Inicia compresiones torácicas firmes y rápidas.", "Proporciona respiraciones de rescate si estás entrenado."],
          whatNotToDo: ["No te detengas a menos que la persona recupere la conciencia.", "No muevas a la persona si hay sospecha de lesión en la columna."],
          whenToCall: "Llama inmediatamente si la persona no responde, no respira o solo jadea.",
          videoLink: "RCP" },
        { title: "Ahogamiento", description: "Actuación urgente cuando las vías respiratorias se bloquean.",
          whatToDo: ["Pide ayuda inmediatamente.", "Realiza la maniobra de Heimlich.", "Inicia RCP si está inconsciente."],
          whatNotToDo: ["No le des palmadas si está tosiendo vigorosamente.", "No intentes sacar el objeto a ciegas."],
          whenToCall: "Llama al 112 si la tos es débil o si la persona pierde el conocimiento.",
          videoLink: "Ahogamiento" },
        { title: "Hemorragias Severas", description: "Controlar la pérdida de sangre es crítico.",
          whatToDo: ["Aplica presión directa sobre la herida.", "Eleva la zona afectada.", "Mantén la presión hasta que llegue ayuda."],
          whatNotToDo: ["No quites el apósito si se empapa.", "No apliques torniquetes incorrectamente."],
          whenToCall: "Llama al 112 si la sangre no se detiene en 10 minutos.",
          videoLink: "Hemorragia" },
        { title: "Quemaduras", description: "Tratamiento inicial para lesiones por calor.",
          whatToDo: ["Enfría con agua fría.", "Cubre la quemadura con una gasa estéril.", "Busca atención médica para quemaduras graves."],
          whatNotToDo: ["No uses hielo ni pomadas.", "No rompas las ampollas."],
          whenToCall: "Llama al 112 si es grave o afecta cara, manos o genitales.",
          videoLink: "Quemaduras" },
        { title: "Fracturas y Esguinces", description: "Cómo inmovilizar una lesión ósea o articular.",
          whatToDo: ["Inmoviliza la zona.", "Aplica hielo.", "Busca atención médica."],
          whatNotToDo: ["No muevas el hueso.", "No apliques calor."],
          whenToCall: "Llama al 112 si hay fractura expuesta o deformidad.",
          videoLink: "Fractura" }
    ];

    const disasterData = [
        { title: "Terremotos", description: "Sacudidas violentas de la tierra.",
          whatToDo: ["Agáchate, cúbrete y agárrate.", "Aléjate de ventanas.", "Prepara un kit de emergencia."],
          whatNotToDo: ["No corras hacia afuera.", "No uses ascensores."],
          whenToCall: "Llama al 112 si hay atrapados o fugas de gas.",
          videoLink: "Terremoto" },
        { title: "Inundaciones", description: "Desbordamiento de agua que inunda terrenos.",
          whatToDo: ["Evacúa si te lo indican.", "Muévete a terrenos altos.", "No camines sobre agua en movimiento."],
          whatNotToDo: ["No ignores las alertas.", "No conduzcas por zonas inundadas."],
          whenToCall: "Llama al 112 si hay atrapados o cortes eléctricos.",
          videoLink: "Inundación" },
        { title: "Incendios Forestales", description: "Fuegos no controlados en áreas de vegetación.",
          whatToDo: ["Prepara un kit.", "Sigue rutas de evacuación.", "Mójate si es seguro."],
          whatNotToDo: ["No combatas el fuego solo.", "No bloquees rutas."],
          whenToCall: "Llama al 112 si ves humo o fuego.",
          videoLink: "Incendio forestal" }
    ];

    const brigadeData = [
        { title: "Uso del Extintor (P.A.S)", description: "Método universal para operar un extintor.",
          whatToDo: ["Evalúa la situación.", "Apunta a la base del fuego.", "Aprieta y mueve de lado a lado."],
          whatNotToDo: ["No te pongas entre el fuego y la salida.", "No uses agua en fuegos eléctricos."],
          whenToCall: "Llama al 112 si el fuego es grande o hay humo denso.",
          videoLink: "Uso de extintor" },
        { title: "Tipos de Extintores", description: "Conocer el tipo de extintor es crucial.",
          whatToDo: ["Clase A: sólidos.", "Clase B: líquidos.", "Clase C: eléctricos."],
          whatNotToDo: ["No uses el extintor incorrecto.", "No uses agua en clase C."],
          whenToCall: "Llama al 112 si no puedes controlar el fuego.",
          videoLink: "Tipos de extintores" },
        { title: "Triage en Emergencias", description: "Clasificación de víctimas para priorizar atención.",
          whatToDo: ["Usa etiquetas de colores.", "Evalúa respiración y estado mental."],
          whatNotToDo: ["No atiendas primero heridas leves.", "No muevas lesionados graves."],
          whenToCall: "Llama al 112 para informar número de víctimas.",
          videoLink: "Triage" }
    ];

    const manualsContent = {
        user: {
            title: "Manual de Usuario",
            icon: "fas fa-book",
            summary: "Guía completa para usar la plataforma.",
            content: `<h3>1. Bienvenido</h3><p>Esta herramienta te ayuda a actuar ante emergencias...</p>`
        },
        technical: {
            title: "Manual Técnico",
            icon: "fas fa-cogs",
            summary: "Documentación técnica del sistema.",
            content: `<h3>1. Arquitectura</h3><p>La aplicación está desarrollada en HTML, CSS y JavaScript.</p>`
        }
    };

    // --- ELEMENTOS DEL DOM ---
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section-content');
    const emergencyBtn = document.getElementById('emergencyCallBtn');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.getElementById('contact-form');
    const savedContactsContainer = document.getElementById('saved-contacts');
    const generateCertBtn = document.getElementById('generate-cert-btn');
    const certificateContainer = document.getElementById('certificate-container');
    const manualsListContainer = document.getElementById('manuals-list');
    const modalOverlay = document.getElementById('manual-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const trainerNameInput = document.getElementById('trainer-name');
    const participantNameInput = document.getElementById('participant-name');
    const courseNameInput = document.getElementById('course-name');
    const courseDateInput = document.getElementById('course-date');
    const printableCertificateContainer = document.getElementById('printableCertificate');

    // --- FUNCIONES ---
    function getRelevantImageUrl(title) {
        return `https://source.unsplash.com/featured/?${encodeURIComponent(title)}`;
    }

    function showSection(sectionId) {
        sections.forEach(s => s.classList.remove('active'));
        navButtons.forEach(b => b.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    }

    function renderCards(data, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('article');
            card.className = 'guide-card';
            const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title)}`;
            card.innerHTML = `
                <img src="${getRelevantImageUrl(item.title)}" alt="${item.title}">
                <div class="guide-card-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <div class="guide-card-details">
                        <h5>Qué Hacer:</h5>
                        <ul>${item.whatToDo.map(x => `<li>${x}</li>`).join('')}</ul>
                        <h5>Qué NO Hacer:</h5>
                        <ul>${item.whatNotToDo.map(x => `<li class="not">${x}</li>`).join('')}</ul>
                        <h5>Cuándo Llamar:</h5>
                        <ul><li class="emergency">${item.whenToCall}</li></ul>
                        <a href="${youtubeSearchUrl}" target="_blank" class="video-link">
                            <i class="fas fa-play-circle"></i> Ver Video
                        </a>
                    </div>
                </div>`;
            container.appendChild(card);
        });
    }

    function renderManualSummaries() {
        manualsListContainer.innerHTML = '';
        Object.keys(manualsContent).forEach(key => {
            const m = manualsContent[key];
            const card = document.createElement('div');
            card.className = 'manual-summary-card';
            card.innerHTML = `<h3><i class="${m.icon}"></i> ${m.title}</h3><p>${m.summary}</p><button data-manual="${key}">Ver Manual</button>`;
            manualsListContainer.appendChild(card);
        });
    }

    function openManual(id) {
        const m = manualsContent[id];
        modalBody.innerHTML = m ? m.content : '<p>No disponible.</p>';
        modalOverlay.classList.add('show');
    }

    function closeModal() {
        modalOverlay.classList.remove('show');
    }

    function saveContacts(c) {
        localStorage.setItem('emergencyContacts', JSON.stringify(c));
    }

    function loadContacts() {
        const c = localStorage.getItem('emergencyContacts');
        return c ? JSON.parse(c) : [];
    }

    function displayContacts() {
        const cs = loadContacts();
        savedContactsContainer.innerHTML = '';
        if (cs.length === 0) {
            savedContactsContainer.innerHTML = '<p>No hay contactos guardados.</p>';
            return;
        }
        cs.forEach((c, i) => {
            const card = document.createElement('div');
            card.className = `contact-card ${c.isQuarantined ? 'quarantined' : ''}`;
            card.innerHTML = `
                <h4>${c.name}</h4>
                <a href="tel:${c.phone}"><i class="fas fa-phone"></i> ${c.phone}</a>
                <div class="contact-card-actions">
                    <button class="btn-call" onclick="window.location.href='tel:${c.phone}'"><i class="fas fa-phone"></i></button>
                    <button class="btn-delete" onclick="deleteContact(${i})"><i class="fas fa-trash"></i></button>
                    <button class="btn-quarantine" onclick="toggleQuarantine(${i})"><i class="fas fa-ban"></i></button>
                </div>`;
            savedContactsContainer.appendChild(card);
        });
    }

    window.deleteContact = function(index) {
        if (confirm("¿Eliminar este contacto?")) {
            const cs = loadContacts();
            cs.splice(index, 1);
            saveContacts(cs);
            displayContacts();
        }
    }

    window.toggleQuarantine = function(index) {
        const cs = loadContacts();
        cs[index].isQuarantined = !cs[index].isQuarantined;
        saveContacts(cs);
        displayContacts();
    }

    function generateCertificate(trainer, participant, course, date) {
        certificateContainer.innerHTML = `
            <div class="certificate">
                <h1>Certificado de Capacitación</h1>
                <p>Se certifica que</p>
                <div class="cert-name">${participant}</div>
                <p>ha completado el curso</p>
                <div class="cert-details">"${course}"</div>
                <p>impartido por ${trainer}</p>
                <p class="cert-date">Fecha: ${date}</p>
                <div class="cert-signature">Firma del Capacitador</div>
            </div>
            <button class="print-btn" onclick="printCertificate()">
                <i class="fas fa-print"></i> Imprimir Certificado
            </button>`;
    }

    window.printCertificate = function() {
        const cert = document.querySelector('.certificate').outerHTML;
        printableCertificateContainer.innerHTML = cert;
        window.print();
        printableCertificateContainer.innerHTML = '';
    };

    // --- EVENTOS ---
    navButtons.forEach(b => b.addEventListener('click', () => showSection(b.dataset.section)));

    emergencyBtn.addEventListener('click', () => {
        if (confirm("¿Llamar a emergencias (112)?")) alert("Simulando llamada a emergencias...");
    });

    searchInput.addEventListener('input', (e) => {
        const text = e.target.value.toLowerCase();
        const activeSection = document.querySelector('.section-content.active');
        activeSection.querySelectorAll('.guide-card').forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(text) ? '' : 'none';
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const phone = document.getElementById('contact-phone').value;
        const cs = loadContacts();
        cs.push({ name, phone, isQuarantined: false });
        saveContacts(cs);
        displayContacts();
        contactForm.reset();
        alert("Contacto guardado.");
    });

    generateCertBtn.addEventListener('click', () => {
        const trainer = trainerNameInput.value.trim();
        const participant = participantNameInput.value.trim();
        const course = courseNameInput.value.trim();
        const date = courseDateInput.value;
        if (trainer && participant && course && date) {
            generateCertificate(trainer, participant, course, date);
        } else alert("Completa todos los campos.");
    });

    manualsListContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') openManual(e.target.dataset.manual);
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

    // --- RENDERIZAR INICIO ---
    renderCards(firstAidData, 'first-aid-cards');
    renderCards(disasterData, 'disaster-cards');
    renderCards(brigadeData, 'brigade-cards');
    renderManualSummaries();
    displayContacts();
});
