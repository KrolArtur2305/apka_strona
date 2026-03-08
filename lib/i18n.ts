export const locales = ["pl", "en", "de", "no", "sv"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export interface LocaleConfig {
  lang: string;
  hreflang: string;
  slug: string;
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
      keywords: ["aplikacja do zarządzania budową", "budowa domu aplikacja", "kontrola budżetu budowy", "inwestor indywidualny", "zarządzanie dokumentami budowa", "aplikacja dla budującego dom", "harmonogram budowy", "koszty budowy domu", "dziennik budowy aplikacja", "zarządzanie wykonawcami budowa", "budowa systemem gospodarczym", "aplikacja budowlana android", "kontrola budowy domu"],
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
        { question: "Czy poradzę sobie bez specjalistycznej wiedzy?", answer: "Tak. Aplikacja jest zaprojektowana dla inwestora budującego dom, nie dla księgowego ani kierownika budowy. Dodajesz fakturę, wpisujesz kwotę, zaznaczasz etap. Resztę system porządkuje za Ciebie." },
        { question: "Na jakim urządzeniu mogę z tego korzystać?", answer: "Na telefonie, tablecie i komputerze. Sprawdzasz budżet na budowie, przeglądasz dokumenty w domu, planujesz kolejne etapy gdziekolwiek jesteś." },
        { question: "Dlaczego to lepsze niż arkusz w Excelu?", answer: "Bo łączy budżet, dokumenty i postępy w jednym systemie. Nie tylko liczysz — widzisz całą budowę jako całość. I podejmujesz decyzje na podstawie aktualnych danych, a nie domysłów." },
        { question: "Czy to ma sens, jeśli buduję systemem gospodarczym?", answer: "Właśnie wtedy ma największy sens. Gdy sam zarządzasz budową, potrzebujesz jednego miejsca do kontroli wydatków, dokumentów i postępów. Inaczej chaos rośnie z każdym tygodniem." },
      ],
      ctaLabel: "Zacznij teraz",
      ctaHeading: "Twoja budowa.",
      ctaBody: "Przestań zarządzać chaosem. Zacznij zarządzać budową.",
      ctaBtn: "Przejmij kontrolę nad swoją budową",
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
    flag: "🇺🇸",
    nativeName: "English",
    seo: {
      title: "BuildIQ – Construction Management App for Home Builders",
      description: "Manage your construction budget, documents and progress in one place. Stop the chaos. The app for individual home builders and self-build projects.",
      keywords: ["construction management app", "home building app", "self build management", "construction budget tracker", "building project app", "home construction app", "diy home build app", "construction project manager", "residential construction app", "home builder software", "construction budget app", "building site management", "owner builder app", "construction progress tracker", "home renovation management app"],
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
        { question: "Can I manage this without specialist knowledge?", answer: "Yes. The app is designed for someone building a home, not an accountant or site manager. Add an invoice, enter the amount, mark the phase. The system takes care of the rest." },
        { question: "What devices can I use it on?", answer: "Phone, tablet and computer. Check your budget on site, review documents at home, plan the next phases wherever you are." },
        { question: "Why is this better than a spreadsheet?", answer: "Because it connects budget, documents and progress in one system. You don't just count — you see the whole build as one picture. And you make decisions based on real data, not guesswork." },
        { question: "Does this make sense if I'm self-managing the build?", answer: "That's exactly when it makes the most sense. When you're managing the build yourself, you need one place to control spending, documents and progress. Otherwise chaos grows every week." },
      ],
      ctaLabel: "Get started",
      ctaHeading: "Your build.",
      ctaBody: "Stop managing chaos. Start managing your build.",
      ctaBtn: "Take control of your construction project",
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
      keywords: ["bauprojekt management app", "hausbau app", "baubudget verwalten", "bauprojekt software", "privatbauherr app", "hausbau kosten app", "bautagebuch app", "selbstbau haus app", "bauprojekt koordination", "hausbau dokumente verwalten", "baukosten tracker", "bauprojekt fortschritt", "bauherr app android"],
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
        { question: "Komme ich ohne Fachkenntnisse zurecht?", answer: "Ja. Die App ist für jemanden konzipiert, der ein Haus baut, nicht für einen Buchhalter oder Bauleiter. Rechnung hinzufügen, Betrag eingeben, Phase markieren. Den Rest erledigt das System." },
        { question: "Auf welchen Geräten kann ich es nutzen?", answer: "Telefon, Tablet und Computer. Budget auf der Baustelle prüfen, Dokumente zu Hause einsehen, nächste Phasen planen — wo immer Sie sind." },
        { question: "Warum ist das besser als eine Tabelle?", answer: "Weil es Budget, Dokumente und Fortschritt in einem System verbindet. Sie sehen das gesamte Bauprojekt als Einheit und treffen Entscheidungen auf Basis aktueller Daten." },
        { question: "Macht das Sinn, wenn ich selbst baue?", answer: "Genau dann macht es am meisten Sinn. Wenn Sie selbst bauen, brauchen Sie einen Ort zur Kontrolle von Ausgaben, Dokumenten und Fortschritt. Sonst wächst das Chaos jede Woche." },
      ],
      ctaLabel: "Jetzt starten",
      ctaHeading: "Ihr Bauprojekt.",
      ctaBody: "Hören Sie auf, Chaos zu verwalten. Fangen Sie an, Ihr Bauprojekt zu verwalten.",
      ctaBtn: "Kontrolle über Ihr Bauprojekt übernehmen",
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
      keywords: ["byggeprosjekt app", "boligbygging app", "byggebudsjett", "selvbygger app", "byggeprosjekt administrasjon", "husbygging app", "bygge hus app", "byggeprosjekt tracker", "byggebudsjett app", "byggedagbok app", "boligprosjekt styring", "byggeprosjekt dokumenter", "privat byggherre app"],
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
        { question: "Klarer jeg meg uten spesialistkunnskap?", answer: "Ja. Appen er laget for noen som bygger hus, ikke for en regnskapsfører eller byggeleder. Legg til faktura, skriv inn beløp, merk fase. Systemet ordner resten." },
        { question: "Hvilke enheter kan jeg bruke det på?", answer: "Telefon, nettbrett og datamaskin. Sjekk budsjettet på byggeplassen, se gjennom dokumenter hjemme, planlegg neste faser hvor enn du er." },
        { question: "Hvorfor er dette bedre enn et regneark?", answer: "Fordi det kobler budsjett, dokumenter og fremdrift i ett system. Du ser hele byggeprosjektet som én helhet og tar beslutninger basert på faktiske data." },
        { question: "Gir dette mening hvis jeg bygger selv?", answer: "Det er akkurat da det gir mest mening. Når du styrer bygget selv, trenger du ett sted for kontroll av utgifter, dokumenter og fremdrift. Ellers vokser kaoset hver uke." },
      ],
      ctaLabel: "Kom i gang",
      ctaHeading: "Ditt byggeprosjekt.",
      ctaBody: "Slutt å administrere kaos. Begynn å administrere byggeprosjektet ditt.",
      ctaBtn: "Ta kontroll over byggeprosjektet ditt",
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

  sv: {
    lang: "sv",
    hreflang: "sv",
    slug: "byggprojekt-hantering-app",
    flag: "🇸🇪",
    nativeName: "Svenska",
    seo: {
      title: "BuildIQ – App för byggprojekt och husbyggande",
      description: "Hantera budget, dokument och byggframsteg på ett ställe. Slut på kaos. Appen för privata byggherrar.",
      keywords: ["byggprojekt app", "husbygge app", "byggnadsbudget", "självbyggare app", "byggprojekt hantering", "bygga hus app", "byggprojekt tracker", "byggnadsbudget app", "byggdagbok app", "bostadsprojekt styrning", "byggprojekt dokument", "privat byggherre app", "husbyggnad app"],
      ogLocale: "sv_SE",
      h1: "Ta kontroll över ditt byggprojekt",
      h2Budget: "Vet vad du har spenderat. Vet vad som är kvar.",
      h2Docs: "Slut på papper i lådor.",
      h2Progress: "Se vad som är klart. Vad som väntar. Vad som är försenat.",
      h2Project: "Planlösningar, 3D-modell och data — alltid med dig.",
    },
    ui: {
      heroWords: ["DU", "HAR", "KONTROLL"],
      navCta: "Kom igång",
      heroSubtitle: "Budget, dokument och framsteg — allt på ett ställe, alltid tillgängligt.",
      heroCtaPrimary: "Kom igång — det är gratis",
      heroCtaSecondary: "Se hur det fungerar",
      problemIntro: "Känner du igen dig?",
      question1: "Är du rädd för kaos på byggarbetsplatsen?",
      question2: "Är du orolig för att missköta budgeten?",
      question3: "Är du rädd för att förlora viktiga dokument?",
      appName: "BuildIQ",
      appCtaBtn: "Ladda ner och ta kontroll över ditt byggprojekt →",
      taglineBudget: "Budget & kostnader",
      headingBudget: "Vet vad du har spenderat. Vet vad som är kvar.",
      bodyBudget: "Varje faktura, varje betalning — tilldelad en fas och kategori. Ingen huvudräkning. BuildIQ spårar din budget och varnar dig innan du går över.",
      bulletsBudget: ["Planerad vs. faktisk budget — alltid uppdaterad", "Varningar när utgiftsgränser överskrids", "Kostnadsuppdelning per entreprenör och fas"],
      taglineDocs: "Dokument & fakturor",
      headingDocs: "Slut på papper i lådor.",
      bodyDocs: "Ta ett foto av en faktura på byggplatsen — hitta den ett år senare. Tillstånd, kontrakt, garantier — allt på ett ställe, tillgängligt från telefonen.",
      bulletsDocs: ["Skanna fakturor med telefonkameran", "Auto-tilldelning till byggfas", "Sök efter datum, entreprenör eller belopp"],
      taglineProgress: "Framsteg & faser",
      headingProgress: "Se vad som är klart. Vad som väntar. Vad som är försenat.",
      bodyProgress: "Arbetsfaser utlagda i tid. Markera slutförande, lägg till framstegsfoton. Du vet alltid vad som skulle vara klart och när.",
      bulletsProgress: ["Schema med faser och deadlines", "Fotodagbok kopplad till varje fas", "Översikt över förseningar"],
      taglineProject: "Planlösningar & projektdata",
      headingProject: "Planlösningar, 3D-modell och data — alltid med dig.",
      bodyProject: "Byggritningar, planlösningar, materialspecifikationer. Inte mer letande på laptopen — det finns på telefonen på byggplatsen.",
      bulletsProject: ["Kommenterbar planlösning", "3D-översiktsmodell", "Material- och leverantörsspecifikationer"],
      forWhomLabel: "Vem är det för",
      forWhomHeading: "Byggt för folk som bygger själva.",
      cards: [
        { icon: "🏗️", title: "Privat byggherre", desc: "Du bygger ett hem för dig själv och familjen. Ingen platschef. Du vill veta att allt går enligt plan och budget." },
        { icon: "🔨", title: "Självbyggprojekt", desc: "Du koordinerar flera entreprenörer samtidigt. Alla gör sin del — du behöver se helhetsbilden. BuildIQ ger dig det." },
        { icon: "📋", title: "Kontroll utan kaos", desc: "Du har en generalentreprenör men vill verifiera framsteg och fakturor. Inga överraskningar. Du vill ha bevis." },
      ],
      faqLabel: "Vanliga frågor",
      faqItems: [
        { question: "Klarar jag mig utan specialistkunskap?", answer: "Ja. Appen är designad för någon som bygger hus, inte för en revisor eller platschef. Lägg till faktura, ange belopp, markera fas. Systemet sköter resten." },
        { question: "Vilka enheter kan jag använda det på?", answer: "Telefon, surfplatta och dator. Kolla budgeten på byggplatsen, granska dokument hemma, planera nästa faser var du än är." },
        { question: "Varför är detta bättre än ett kalkylblad?", answer: "För att det kopplar ihop budget, dokument och framsteg i ett system. Du ser hela byggprojektet som en helhet och fattar beslut baserade på aktuell data." },
        { question: "Är detta meningsfullt om jag bygger själv?", answer: "Det är precis då det är mest meningsfullt. När du hanterar bygget själv behöver du ett ställe för kontroll av utgifter, dokument och framsteg. Annars växer kaoset varje vecka." },
      ],
      ctaLabel: "Kom igång",
      ctaHeading: "Ditt byggprojekt.",
      ctaBody: "Sluta hantera kaos. Börja hantera ditt byggprojekt.",
      ctaBtn: "Ta kontroll över ditt byggprojekt",
      footerContact: "Kontakt",
      footerRights: "Alla rättigheter förbehållna.",
      contact: {
        sectionLabel: "Kontakt",
        heading: "Skriv till oss.",
        subtitle: "Har du frågor? Vill du veta mer? Hör av dig — vi svarar snabbt.",
        nameLabel: "Namn",
        namePlaceholder: "Erik Svensson",
        emailLabel: "E-postadress",
        emailPlaceholder: "erik@example.com",
        phoneLabel: "Telefon (valfritt)",
        phonePlaceholder: "+46 000 000 00",
        messageLabel: "Meddelande",
        messagePlaceholder: "Berätta om ditt byggprojekt...",
        submitBtn: "Skicka meddelande →",
        successMsg: "Meddelande skickat! Vi hör av oss snart.",
        errorMsg: "Något gick fel. Försök igen.",
      },
    },
  },
};