export const locales = ["pl", "en", "de", "no", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export interface LocaleConfig {
  lang: string;
  hreflang: string;
  slug: string;           // URL subdirectory slug for the main landing page
  flag: string;
  nativeName: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
    h1: string;
    h2Budget: string;
    h2Docs: string;
    h2Progress: string;
    h2Project: string;
  };
  ui: {
    heroWords: string[];
    navCta: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    problemIntro: string;
    question1: string;
    question2: string;
    question3: string;
    appName: string;
    appCtaBtn: string;
    taglineBudget: string;
    headingBudget: string;
    bodyBudget: string;
    bulletsBudget: string[];
    taglineDocs: string;
    headingDocs: string;
    bodyDocs: string;
    bulletsDocs: string[];
    taglineProgress: string;
    headingProgress: string;
    bodyProgress: string;
    bulletsProgress: string[];
    taglineProject: string;
    headingProject: string;
    bodyProject: string;
    bulletsProject: string[];
    forWhomLabel: string;
    forWhomHeading: string;
    cards: { icon: string; title: string; desc: string }[];
    faqLabel: string;
    faqItems: { question: string; answer: string }[];
    ctaLabel: string;
    ctaHeading: string;
    ctaBody: string;
    ctaBtn: string;
    ctaNote: string;
    footerPrivacy: string;
    footerContact: string;
    footerRights: string;
    contact: {
      sectionLabel: string;
      heading: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
      errorMsg: string;
    };
  };
}

export const i18n: Record<Locale, LocaleConfig> = {
  pl: {
    lang: "pl",
    hreflang: "pl",
    slug: "aplikacja-do-zarzadzania-budowa",
    flag: "🇵🇱",
    nativeName: "Polski",
    seo: {
      title: "BuildIQ – Aplikacja do zarządzania budową domu",
      description: "Zarządzaj budżetem, dokumentami i postępami budowy w jednym miejscu. Koniec z chaosem. Aplikacja dla inwestorów indywidualnych budujących dom.",
      keywords: ["aplikacja do zarządzania budową", "budowa domu aplikacja", "kontrola budżetu budowy", "inwestor indywidualny", "zarządzanie dokumentami budowa"],
      ogLocale: "pl_PL",
      h1: "Przejmij kontrolę nad swoją budową",
      h2Budget: "Wiesz ile wydałeś. Wiesz ile zostało.",
      h2Docs: "Koniec z papierami w szufladzie.",
      h2Progress: "Widzisz co jest zrobione. Co czeka. Co się opóźnia.",
      h2Project: "Rzuty, model 3D i dane — zawsze przy sobie.",
    },
    ui: {
      heroWords: ["TY", "MASZ", "KONTROLĘ"],
      navCta: "Zacznij teraz",
      heroSubtitle: "Budżet, dokumenty i postępy — wszystko w jednym miejscu, zawsze pod ręką.",
      heroCtaPrimary: "Zacznij teraz — to nic nie kosztuje",
      heroCtaSecondary: "Zobacz jak działa",
      problemIntro: "Czy to Twoja sytuacja?",
      question1: "Boisz się chaosu na swojej budowie?",
      question2: "Martwisz się, że źle zarządzisz budżetem?",
      question3: "Obawiasz się zgubionych dokumentów?",
      appName: "BuildIQ",
      appCtaBtn: "Pobierz i zapanuj nad swoją budową →",
      taglineBudget: "Budżet i koszty",
      headingBudget: "Wiesz ile wydałeś. Wiesz ile zostało.",
      bodyBudget: "Każda faktura, każdy przelew — przypisane do etapu i kategorii. Nie musisz liczyć z pamięci. BuildIQ pilnuje budżetu za Ciebie i ostrzega, zanim przekroczysz limit.",
      bulletsBudget: ["Budżet planowany vs. rzeczywisty — zawsze aktualny", "Alert przy przekroczeniu progów wydatków", "Podgląd kosztów per wykonawca i etap"],
      taglineDocs: "Dokumenty i faktury",
      headingDocs: "Koniec z papierami w szufladzie.",
      bodyDocs: "Zrób zdjęcie faktury na budowie — znajdziesz ją za rok. Pozwolenia, umowy, gwarancje, projekty — wszystko w jednym miejscu, dostępne z telefonu.",
      bulletsDocs: ["Skanowanie faktur zdjęciem telefonem", "Automatyczne przypisanie do etapu", "Wyszukiwanie po dacie, wykonawcy, kwocie"],
      taglineProgress: "Postępy i etapy",
      headingProgress: "Widzisz co jest zrobione. Co czeka. Co się opóźnia.",
      bodyProgress: "Etapy prac rozpisane w czasie. Zaznaczasz ukończenie, dodajesz zdjęcia z postępu robót. Masz czarno na białym, kiedy co miało być gotowe.",
      bulletsProgress: ["Harmonogram z etapami i terminami", "Foto-dziennik budowy przy każdym etapie", "Widok opóźnień i blokad"],
      taglineProject: "Projekt i dokumentacja",
      headingProject: "Rzuty, model 3D i dane — zawsze przy sobie.",
      bodyProject: "Projekt budowlany, rzuty kondygnacji, specyfikacje materiałów. Nie szukasz na komputerze — masz to przy sobie na budowie, w telefonie.",
      bulletsProject: ["Rzuty kondygnacji z możliwością adnotacji", "Model 3D poglądowy budynku", "Specyfikacja materiałów i dostawców"],
      forWhomLabel: "Dla kogo",
      forWhomHeading: "Zrobione dla ludzi, którzy budują sami.",
      cards: [
        { icon: "🏗️", title: "Inwestor indywidualny", desc: "Budujesz dom dla siebie i rodziny. Nie masz kierownika budowy. Chcesz wiedzieć, że wszystko idzie zgodnie z planem i budżetem." },
        { icon: "🔨", title: "Budowa systemem gospodarczym", desc: "Koordynujesz kilku wykonawców jednocześnie. Każdy robi swoje — Ty musisz widzieć całość. BuildIQ daje Ci ten widok." },
        { icon: "📋", title: "Kontrola bez chaosu", desc: "Masz generalnego wykonawcę, ale chcesz weryfikować postępy i faktury. Nie chcesz być zaskoczony. Chcesz dowodów." },
      ],
      faqLabel: "Często zadawane pytania",
      faqItems: [
        { question: "Czy muszę być technicznie obeznany, żeby z tego korzystać?", answer: "Nie. Aplikacja działa jak notes — tyle że inteligentny. Dodajesz faktury zdjęciem, wpisujesz kwoty, zaznaczasz etapy. Żadnych arkuszy, żadnego specjalistycznego oprogramowania." },
        { question: "Czy moje dane są bezpieczne?", answer: "Tak. Dokumenty i dane budowy przechowywane są szyfrowane i dostępne tylko dla Ciebie. Możesz w każdej chwili wyeksportować wszystko do PDF lub CSV." },
        { question: "Mam już Excela do budżetu. Po co mi to?", answer: "Excel nie wysyła alertów gdy przekraczasz budżet. Nie przechowuje zdjęć postępów przy każdym wpisie. Nie łączy faktury z konkretnym wykonawcą i etapem. BuildIQ robi to wszystko." },
        { question: "Na jakich urządzeniach działa aplikacja?", answer: "Na każdym. Aplikacja działa w przeglądarce mobilnej i desktopowej. Planujesz na laptopie, sprawdzasz na budowie z telefonu. Wszystko zsynchronizowane." },
      ],
      ctaLabel: "Zacznij teraz",
      ctaHeading: "Twoja budowa.",
      ctaBody: "Przestań zarządzać chaosem. Zacznij zarządzać budową.",
      ctaBtn: "Przejmij kontrolę nad swoją budową",
      ctaNote: "Bez karty kredytowej. Bez wiązania na stałe.",
      footerPrivacy: "Polityka prywatności",
      footerContact: "Kontakt",
      footerRights: "Wszelkie prawa zastrzeżone.",
      contact: {
        sectionLabel: "Kontakt",
        heading: "Napisz do nas.",
        subtitle: "Masz pytania? Chcesz poznać szczegóły? Odezwij się — odpiszemy szybko.",
        nameLabel: "Imię",
        namePlaceholder: "Jan Kowalski",
        emailLabel: "Adres e-mail",
        emailPlaceholder: "jan@example.com",
        phoneLabel: "Telefon (opcjonalnie)",
        phonePlaceholder: "+48 600 000 000",
        messageLabel: "Wiadomość",
        messagePlaceholder: "Napisz o swojej budowie lub zadaj pytanie...",
        submitBtn: "Wyślij wiadomość →",
        successMsg: "Wiadomość wysłana! Odezwiemy się wkrótce.",
        errorMsg: "Coś poszło nie tak. Spróbuj ponownie.",
      },
    },
  },

  en: {
    lang: "en",
    hreflang: "en",
    slug: "construction-management-app",
    flag: "🇬🇧",
    nativeName: "English",
    seo: {
      title: "BuildIQ – Construction Management App for Home Builders",
      description: "Manage your construction budget, documents and progress in one place. Stop the chaos. The app for individual home builders and self-build projects.",
      keywords: ["construction management app", "home building app", "self build management", "construction budget tracker", "building project app"],
      ogLocale: "en_US",
      h1: "Take control of your construction project",
      h2Budget: "Know what you've spent. Know what's left.",
      h2Docs: "No more paperwork in drawers.",
      h2Progress: "See what's done. What's next. What's delayed.",
      h2Project: "Floor plans, 3D model and data — always with you.",
    },
    ui: {
      heroWords: ["YOU", "OWN", "IT"],
      navCta: "Get started",
      heroSubtitle: "Budget, documents and progress — all in one place, always at hand.",
      heroCtaPrimary: "Get started — it's free",
      heroCtaSecondary: "See how it works",
      problemIntro: "Does this sound familiar?",
      question1: "Afraid of losing control of your build?",
      question2: "Worried you'll mismanage your budget?",
      question3: "Scared of losing important documents?",
      appName: "BuildIQ",
      appCtaBtn: "Download and take control of your build →",
      taglineBudget: "Budget & costs",
      headingBudget: "Know what you've spent. Know what's left.",
      bodyBudget: "Every invoice, every payment — assigned to a phase and category. No mental math. BuildIQ tracks your budget and warns you before you go over.",
      bulletsBudget: ["Planned vs. actual budget — always up to date", "Alerts when spending thresholds are exceeded", "Cost breakdown per contractor and phase"],
      taglineDocs: "Documents & invoices",
      headingDocs: "No more paperwork in drawers.",
      bodyDocs: "Snap a photo of an invoice on site — find it a year later. Permits, contracts, warranties, plans — all in one place, accessible from your phone.",
      bulletsDocs: ["Scan invoices with your phone camera", "Auto-assign to project phase", "Search by date, contractor or amount"],
      taglineProgress: "Progress & phases",
      headingProgress: "See what's done. What's next. What's delayed.",
      bodyProgress: "Work phases laid out in time. Mark completion, add progress photos. You always know what was supposed to be done and when.",
      bulletsProgress: ["Schedule with phases and deadlines", "Photo diary attached to each phase", "View delays and blockers"],
      taglineProject: "Plans & project data",
      headingProject: "Floor plans, 3D model and data — always with you.",
      bodyProject: "Construction drawings, floor plans, material specs. No more searching on your laptop — it's on your phone on the building site.",
      bulletsProject: ["Annotatable floor plans", "3D overview model", "Material and supplier specifications"],
      forWhomLabel: "Who it's for",
      forWhomHeading: "Built for people who build on their own.",
      cards: [
        { icon: "🏗️", title: "Individual investor", desc: "You're building a home for yourself and your family. No site manager. You want to know everything is going to plan and on budget." },
        { icon: "🔨", title: "Self-build project", desc: "You're coordinating multiple contractors at once. Everyone does their part — you need to see the whole picture. BuildIQ gives you that view." },
        { icon: "📋", title: "Control without chaos", desc: "You have a general contractor but want to verify progress and invoices. No surprises. You want proof." },
      ],
      faqLabel: "Frequently asked questions",
      faqItems: [
        { question: "Do I need to be tech-savvy to use this?", answer: "No. The app works like a smart notebook. Add invoices by photo, enter amounts, mark phases. No spreadsheets, no specialist software." },
        { question: "Is my data secure?", answer: "Yes. Your documents and build data are encrypted and only accessible to you. You can export everything to PDF or CSV at any time." },
        { question: "I already use Excel for my budget. Why do I need this?", answer: "Excel doesn't send alerts when you exceed your budget. It doesn't store progress photos with each entry. It doesn't link invoices to specific contractors and phases. BuildIQ does all of that." },
        { question: "What devices does the app work on?", answer: "All of them. The app works in mobile and desktop browsers. Plan on your laptop, check on site from your phone. Everything synced in real time." },
      ],
      ctaLabel: "Get started",
      ctaHeading: "Your build.",
      ctaBody: "Stop managing chaos. Start managing your build.",
      ctaBtn: "Take control of your construction project",
      ctaNote: "No credit card. No long-term commitment.",
      footerPrivacy: "Privacy policy",
      footerContact: "Contact",
      footerRights: "All rights reserved.",
      contact: {
        sectionLabel: "Contact",
        heading: "Get in touch.",
        subtitle: "Have questions? Want to know more? Reach out — we'll get back to you quickly.",
        nameLabel: "Name",
        namePlaceholder: "John Smith",
        emailLabel: "Email address",
        emailPlaceholder: "john@example.com",
        phoneLabel: "Phone (optional)",
        phonePlaceholder: "+1 000 000 0000",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your build or ask a question...",
        submitBtn: "Send message →",
        successMsg: "Message sent! We'll be in touch soon.",
        errorMsg: "Something went wrong. Please try again.",
      },
    },
  },

  de: {
    lang: "de",
    hreflang: "de",
    slug: "bauprojekt-management-app",
    flag: "🇩🇪",
    nativeName: "Deutsch",
    seo: {
      title: "BuildIQ – Bauprojekt Management App für Hausbau",
      description: "Budget, Dokumente und Baufortschritt an einem Ort verwalten. Schluss mit dem Chaos. Die App für private Bauherren.",
      keywords: ["bauprojekt management app", "hausbau app", "baubudget verwalten", "bauprojekt software", "privatbauherr app"],
      ogLocale: "de_DE",
      h1: "Übernehmen Sie die Kontrolle über Ihr Bauprojekt",
      h2Budget: "Sie wissen, was ausgegeben wurde. Was noch übrig ist.",
      h2Docs: "Schluss mit Papierkram in Schubladen.",
      h2Progress: "Sehen Sie, was erledigt ist. Was wartet. Was sich verzögert.",
      h2Project: "Grundrisse, 3D-Modell und Daten — immer dabei.",
    },
    ui: {
      heroWords: ["SIE", "HABEN", "KONTROLLE"],
      navCta: "Jetzt starten",
      heroSubtitle: "Budget, Dokumente und Fortschritt — alles an einem Ort, immer griffbereit.",
      heroCtaPrimary: "Jetzt starten — kostenlos",
      heroCtaSecondary: "So funktioniert es",
      problemIntro: "Kennen Sie das?",
      question1: "Haben Sie Angst vor dem Chaos auf Ihrer Baustelle?",
      question2: "Sorgen Sie sich, das Budget falsch zu verwalten?",
      question3: "Fürchten Sie den Verlust wichtiger Dokumente?",
      appName: "BuildIQ",
      appCtaBtn: "Herunterladen und Bauprojekt kontrollieren →",
      taglineBudget: "Budget & Kosten",
      headingBudget: "Sie wissen, was ausgegeben wurde. Was noch übrig ist.",
      bodyBudget: "Jede Rechnung, jede Zahlung — einer Phase und Kategorie zugeordnet. Kein Kopfrechnen mehr. BuildIQ verfolgt Ihr Budget und warnt Sie, bevor Sie es überschreiten.",
      bulletsBudget: ["Geplantes vs. tatsächliches Budget — immer aktuell", "Warnungen bei Überschreitung von Ausgabenschwellen", "Kostenaufschlüsselung pro Auftragnehmer und Phase"],
      taglineDocs: "Dokumente & Rechnungen",
      headingDocs: "Schluss mit Papierkram in Schubladen.",
      bodyDocs: "Machen Sie ein Foto einer Rechnung auf der Baustelle — finden Sie sie ein Jahr später wieder. Genehmigungen, Verträge, Garantien — alles an einem Ort, vom Telefon aus zugänglich.",
      bulletsDocs: ["Rechnungen per Handyfoto scannen", "Automatische Zuweisung zur Bauphase", "Suche nach Datum, Auftragnehmer oder Betrag"],
      taglineProgress: "Fortschritt & Phasen",
      headingProgress: "Sehen Sie, was erledigt ist. Was wartet. Was sich verzögert.",
      bodyProgress: "Arbeitsphasen zeitlich dargestellt. Fertigstellung markieren, Fortschrittsfotos hinzufügen. Sie wissen immer, was wann fertig sein sollte.",
      bulletsProgress: ["Zeitplan mit Phasen und Fristen", "Fotodokumentation je Bauphase", "Übersicht über Verzögerungen"],
      taglineProject: "Pläne & Projektdaten",
      headingProject: "Grundrisse, 3D-Modell und Daten — immer dabei.",
      bodyProject: "Bauzeichnungen, Grundrisse, Materialspezifikationen. Kein Suchen mehr am Laptop — alles auf dem Telefon auf der Baustelle.",
      bulletsProject: ["Kommentierbare Grundrisse", "3D-Übersichtsmodell", "Material- und Lieferantenspezifikationen"],
      forWhomLabel: "Für wen",
      forWhomHeading: "Gebaut für Menschen, die selbst bauen.",
      cards: [
        { icon: "🏗️", title: "Privatbauherr", desc: "Sie bauen ein Haus für sich und Ihre Familie. Kein Bauleiter. Sie möchten wissen, dass alles nach Plan und Budget läuft." },
        { icon: "🔨", title: "Selbstbauprojekt", desc: "Sie koordinieren mehrere Auftragnehmer gleichzeitig. Jeder macht seinen Teil — Sie müssen das Gesamtbild sehen. BuildIQ gibt Ihnen diesen Überblick." },
        { icon: "📋", title: "Kontrolle ohne Chaos", desc: "Sie haben einen Generalunternehmer, möchten aber Fortschritt und Rechnungen überprüfen. Keine Überraschungen. Sie wollen Belege." },
      ],
      faqLabel: "Häufig gestellte Fragen",
      faqItems: [
        { question: "Muss ich technisch versiert sein, um das zu nutzen?", answer: "Nein. Die App funktioniert wie ein intelligentes Notizbuch. Rechnungen per Foto hinzufügen, Beträge eingeben, Phasen markieren. Keine Tabellen, keine Spezialsoftware." },
        { question: "Sind meine Daten sicher?", answer: "Ja. Ihre Dokumente und Baudaten werden verschlüsselt gespeichert und sind nur für Sie zugänglich. Sie können jederzeit alles als PDF oder CSV exportieren." },
        { question: "Ich nutze bereits Excel für mein Budget. Warum brauche ich das?", answer: "Excel sendet keine Warnungen bei Budgetüberschreitung. Es speichert keine Fortschrittsfotos bei jedem Eintrag. BuildIQ macht all das." },
        { question: "Auf welchen Geräten funktioniert die App?", answer: "Auf allen. Die App funktioniert in mobilen und Desktop-Browsern. Planen Sie am Laptop, prüfen Sie auf der Baustelle vom Telefon. Alles in Echtzeit synchronisiert." },
      ],
      ctaLabel: "Jetzt starten",
      ctaHeading: "Ihr Bauprojekt.",
      ctaBody: "Hören Sie auf, Chaos zu verwalten. Fangen Sie an, Ihr Bauprojekt zu verwalten.",
      ctaBtn: "Kontrolle über Ihr Bauprojekt übernehmen",
      ctaNote: "Keine Kreditkarte. Keine langfristige Bindung.",
      footerPrivacy: "Datenschutz",
      footerContact: "Kontakt",
      footerRights: "Alle Rechte vorbehalten.",
      contact: {
        sectionLabel: "Kontakt",
        heading: "Schreiben Sie uns.",
        subtitle: "Haben Sie Fragen? Möchten Sie mehr erfahren? Melden Sie sich — wir antworten schnell.",
        nameLabel: "Name",
        namePlaceholder: "Max Mustermann",
        emailLabel: "E-Mail-Adresse",
        emailPlaceholder: "max@example.com",
        phoneLabel: "Telefon (optional)",
        phonePlaceholder: "+49 000 000 0000",
        messageLabel: "Nachricht",
        messagePlaceholder: "Erzählen Sie uns von Ihrem Bauprojekt...",
        submitBtn: "Nachricht senden →",
        successMsg: "Nachricht gesendet! Wir melden uns bald.",
        errorMsg: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      },
    },
  },

  no: {
    lang: "no",
    hreflang: "no",
    slug: "byggeprosjekt-administrasjon-app",
    flag: "🇳🇴",
    nativeName: "Norsk",
    seo: {
      title: "BuildIQ – App for byggeprosjekt og boligbygging",
      description: "Administrer budsjett, dokumenter og byggefremdrift på ett sted. Slutt på kaos. Appen for private byggherrer.",
      keywords: ["byggeprosjekt app", "boligbygging app", "byggebudsjett", "selvbygger app", "byggeprosjekt administrasjon"],
      ogLocale: "nb_NO",
      h1: "Ta kontroll over byggeprosjektet ditt",
      h2Budget: "Vet hva du har brukt. Vet hva som er igjen.",
      h2Docs: "Slutt på papirer i skuffer.",
      h2Progress: "Se hva som er gjort. Hva som venter. Hva som er forsinket.",
      h2Project: "Plantegninger, 3D-modell og data — alltid med deg.",
    },
    ui: {
      heroWords: ["DU", "HAR", "KONTROLL"],
      navCta: "Kom i gang",
      heroSubtitle: "Budsjett, dokumenter og fremdrift — alt på ett sted, alltid tilgjengelig.",
      heroCtaPrimary: "Kom i gang — det er gratis",
      heroCtaSecondary: "Se hvordan det fungerer",
      problemIntro: "Kjenner du deg igjen?",
      question1: "Er du redd for kaos på byggeplassen?",
      question2: "Er du bekymret for å misforvalte budsjettet?",
      question3: "Er du redd for å miste viktige dokumenter?",
      appName: "BuildIQ",
      appCtaBtn: "Last ned og ta kontroll over byggeprosjektet →",
      taglineBudget: "Budsjett & kostnader",
      headingBudget: "Vet hva du har brukt. Vet hva som er igjen.",
      bodyBudget: "Hver faktura, hver betaling — tilordnet en fase og kategori. Ingen hoderegning. BuildIQ sporer budsjettet ditt og advarer deg før du overskrider det.",
      bulletsBudget: ["Planlagt vs. faktisk budsjett — alltid oppdatert", "Varsler når utgiftsgrenser overskrides", "Kostnadsoversikt per entreprenør og fase"],
      taglineDocs: "Dokumenter & fakturaer",
      headingDocs: "Slutt på papirer i skuffer.",
      bodyDocs: "Ta et bilde av en faktura på byggeplassen — finn den et år senere. Tillatelser, kontrakter, garantier — alt på ett sted, tilgjengelig fra telefonen.",
      bulletsDocs: ["Skann fakturaer med telefonkameraet", "Auto-tilordning til byggetrinn", "Søk etter dato, entreprenør eller beløp"],
      taglineProgress: "Fremdrift & faser",
      headingProgress: "Se hva som er gjort. Hva som venter. Hva som er forsinket.",
      bodyProgress: "Arbeidsfaser lagt ut i tid. Merk fullføring, legg til fremdriftsbilder. Du vet alltid hva som skulle vært ferdig og når.",
      bulletsProgress: ["Timeplan med faser og frister", "Fotodagbok tilknyttet hver fase", "Oversikt over forsinkelser"],
      taglineProject: "Plantegninger & prosjektdata",
      headingProject: "Plantegninger, 3D-modell og data — alltid med deg.",
      bodyProject: "Byggetegninger, plantegninger, materialspesifikasjoner. Ikke mer leting på laptopen — det er på telefonen på byggeplassen.",
      bulletsProject: ["Kommenterbare plantegninger", "3D-oversiktsmodell", "Material- og leverandørspesifikasjoner"],
      forWhomLabel: "Hvem er det for",
      forWhomHeading: "Laget for folk som bygger selv.",
      cards: [
        { icon: "🏗️", title: "Privat byggherre", desc: "Du bygger et hjem for deg selv og familien. Ingen byggeleder. Du vil vite at alt går etter plan og budsjett." },
        { icon: "🔨", title: "Selvbyggprosjekt", desc: "Du koordinerer flere entreprenører samtidig. Alle gjør sin del — du trenger å se helhetsbildet. BuildIQ gir deg det." },
        { icon: "📋", title: "Kontroll uten kaos", desc: "Du har en hovedentreprenør, men vil verifisere fremdrift og fakturaer. Ingen overraskelser. Du vil ha bevis." },
      ],
      faqLabel: "Ofte stilte spørsmål",
      faqItems: [
        { question: "Må jeg være teknisk kyndig for å bruke dette?", answer: "Nei. Appen fungerer som en smart notatbok. Legg til fakturaer med bilde, skriv inn beløp, merk faser. Ingen regneark, ingen spesialprogramvare." },
        { question: "Er dataene mine sikre?", answer: "Ja. Dokumentene og byggdataene dine er kryptert og kun tilgjengelig for deg. Du kan eksportere alt til PDF eller CSV når som helst." },
        { question: "Jeg bruker allerede Excel for budsjettet mitt. Hvorfor trenger jeg dette?", answer: "Excel sender ikke varsler når du overskrider budsjettet. Det lagrer ikke fremdriftsbilder med hver oppføring. BuildIQ gjør alt dette." },
        { question: "Hvilke enheter fungerer appen på?", answer: "Alle. Appen fungerer i mobile og desktop-nettlesere. Planlegg på laptopen, sjekk på byggeplassen fra telefonen. Alt synkronisert i sanntid." },
      ],
      ctaLabel: "Kom i gang",
      ctaHeading: "Ditt byggeprosjekt.",
      ctaBody: "Slutt å administrere kaos. Begynn å administrere byggeprosjektet ditt.",
      ctaBtn: "Ta kontroll over byggeprosjektet ditt",
      ctaNote: "Ingen kredittkort. Ingen langsiktig forpliktelse.",
      footerPrivacy: "Personvernpolicy",
      footerContact: "Kontakt",
      footerRights: "Alle rettigheter forbeholdt.",
      contact: {
        sectionLabel: "Kontakt",
        heading: "Skriv til oss.",
        subtitle: "Har du spørsmål? Vil du vite mer? Ta kontakt — vi svarer raskt.",
        nameLabel: "Navn",
        namePlaceholder: "Ola Nordmann",
        emailLabel: "E-postadresse",
        emailPlaceholder: "ola@example.com",
        phoneLabel: "Telefon (valgfritt)",
        phonePlaceholder: "+47 000 00 000",
        messageLabel: "Melding",
        messagePlaceholder: "Fortell oss om byggeprosjektet ditt...",
        submitBtn: "Send melding →",
        successMsg: "Melding sendt! Vi tar kontakt snart.",
        errorMsg: "Noe gikk galt. Prøv igjen.",
      },
    },
  },

  fr: {
    lang: "fr",
    hreflang: "fr",
    slug: "application-gestion-chantier",
    flag: "🇫🇷",
    nativeName: "Français",
    seo: {
      title: "BuildIQ – Application de gestion de chantier pour particuliers",
      description: "Gérez votre budget, vos documents et l'avancement de votre chantier en un seul endroit. Fini le chaos. L'appli pour les maîtres d'ouvrage particuliers.",
      keywords: ["application gestion chantier", "app construction maison", "suivi budget construction", "maître ouvrage particulier", "gestion documents chantier"],
      ogLocale: "fr_FR",
      h1: "Prenez le contrôle de votre chantier",
      h2Budget: "Savoir ce que vous avez dépensé. Ce qu'il reste.",
      h2Docs: "Fini les papiers dans les tiroirs.",
      h2Progress: "Voyez ce qui est fait. Ce qui attend. Ce qui est en retard.",
      h2Project: "Plans, modèle 3D et données — toujours avec vous.",
    },
    ui: {
      heroWords: ["VOUS", "PRENEZ", "CONTRÔLE"],
      navCta: "Commencer",
      heroSubtitle: "Budget, documents et avancement — tout en un seul endroit, toujours à portée de main.",
      heroCtaPrimary: "Commencer — c'est gratuit",
      heroCtaSecondary: "Voir comment ça marche",
      problemIntro: "Vous reconnaissez-vous ?",
      question1: "Avez-vous peur du chaos sur votre chantier ?",
      question2: "Êtes-vous inquiet de mal gérer votre budget ?",
      question3: "Craignez-vous de perdre des documents importants ?",
      appName: "BuildIQ",
      appCtaBtn: "Télécharger et prendre le contrôle de votre chantier →",
      taglineBudget: "Budget & coûts",
      headingBudget: "Savoir ce que vous avez dépensé. Ce qu'il reste.",
      bodyBudget: "Chaque facture, chaque paiement — assigné à une phase et une catégorie. Fini les calculs mentaux. BuildIQ suit votre budget et vous avertit avant de dépasser.",
      bulletsBudget: ["Budget prévu vs. réel — toujours à jour", "Alertes en cas de dépassement des seuils", "Décomposition des coûts par entrepreneur et phase"],
      taglineDocs: "Documents & factures",
      headingDocs: "Fini les papiers dans les tiroirs.",
      bodyDocs: "Prenez une photo d'une facture sur le chantier — retrouvez-la un an plus tard. Permis, contrats, garanties — tout en un seul endroit, accessible depuis votre téléphone.",
      bulletsDocs: ["Scanner les factures avec la caméra du téléphone", "Attribution automatique à la phase du projet", "Recherche par date, entrepreneur ou montant"],
      taglineProgress: "Avancement & phases",
      headingProgress: "Voyez ce qui est fait. Ce qui attend. Ce qui est en retard.",
      bodyProgress: "Phases de travaux planifiées dans le temps. Marquez l'achèvement, ajoutez des photos d'avancement. Vous savez toujours ce qui devait être fait et quand.",
      bulletsProgress: ["Planning avec phases et délais", "Journal photo attaché à chaque phase", "Vue des retards et blocages"],
      taglineProject: "Plans & données projet",
      headingProject: "Plans, modèle 3D et données — toujours avec vous.",
      bodyProject: "Plans de construction, plans d'étage, spécifications de matériaux. Plus besoin de chercher sur le laptop — tout est sur le téléphone sur le chantier.",
      bulletsProject: ["Plans annotables", "Modèle 3D de synthèse", "Spécifications des matériaux et fournisseurs"],
      forWhomLabel: "Pour qui",
      forWhomHeading: "Conçu pour les gens qui construisent eux-mêmes.",
      cards: [
        { icon: "🏗️", title: "Maître d'ouvrage particulier", desc: "Vous construisez une maison pour vous et votre famille. Pas de chef de chantier. Vous voulez savoir que tout se passe selon le plan et le budget." },
        { icon: "🔨", title: "Autoconstruction", desc: "Vous coordonnez plusieurs entrepreneurs simultanément. Chacun fait sa part — vous devez voir l'ensemble. BuildIQ vous donne cette vue." },
        { icon: "📋", title: "Contrôle sans chaos", desc: "Vous avez un entrepreneur général mais voulez vérifier l'avancement et les factures. Pas de surprises. Vous voulez des preuves." },
      ],
      faqLabel: "Questions fréquentes",
      faqItems: [
        { question: "Dois-je être technophile pour utiliser ceci ?", answer: "Non. L'application fonctionne comme un carnet intelligent. Ajoutez des factures par photo, saisissez des montants, marquez des phases. Pas de tableurs, pas de logiciel spécialisé." },
        { question: "Mes données sont-elles sécurisées ?", answer: "Oui. Vos documents et données de construction sont chiffrés et accessibles uniquement par vous. Vous pouvez tout exporter en PDF ou CSV à tout moment." },
        { question: "J'utilise déjà Excel pour mon budget. Pourquoi en ai-je besoin ?", answer: "Excel n'envoie pas d'alertes quand vous dépassez votre budget. Il ne stocke pas de photos d'avancement avec chaque entrée. BuildIQ fait tout cela." },
        { question: "Sur quels appareils fonctionne l'application ?", answer: "Sur tous. L'application fonctionne dans les navigateurs mobiles et desktop. Planifiez sur l'ordinateur, vérifiez sur le chantier depuis le téléphone. Tout synchronisé en temps réel." },
      ],
      ctaLabel: "Commencer",
      ctaHeading: "Votre chantier.",
      ctaBody: "Arrêtez de gérer le chaos. Commencez à gérer votre chantier.",
      ctaBtn: "Prenez le contrôle de votre chantier",
      ctaNote: "Sans carte de crédit. Sans engagement long terme.",
      footerPrivacy: "Politique de confidentialité",
      footerContact: "Contact",
      footerRights: "Tous droits réservés.",
      contact: {
        sectionLabel: "Contact",
        heading: "Écrivez-nous.",
        subtitle: "Des questions ? Vous voulez en savoir plus ? Contactez-nous — nous répondons rapidement.",
        nameLabel: "Prénom",
        namePlaceholder: "Jean Dupont",
        emailLabel: "Adresse e-mail",
        emailPlaceholder: "jean@example.com",
        phoneLabel: "Téléphone (optionnel)",
        phonePlaceholder: "+33 0 00 00 00 00",
        messageLabel: "Message",
        messagePlaceholder: "Parlez-nous de votre chantier...",
        submitBtn: "Envoyer le message →",
        successMsg: "Message envoyé ! Nous vous répondrons bientôt.",
        errorMsg: "Une erreur s'est produite. Veuillez réessayer.",
      },
    },
  },
};