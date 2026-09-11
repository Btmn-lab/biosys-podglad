// Treść redakcyjna strony BioSys. Generowane — nie edytować ręcznie.
// Źródło prawdy: panel CMS. Zmiany wprowadzaj tam, nie tutaj.
window.__TRESC = RES => {
// Zdjęcia wplecione między pulpity w karuzeli hero (strona główna).
// Kolejność paneli: 0 pulpit RCP, 1 foto, 2 pulpit KD, 3 foto, 4 foto, 5 pulpit Task Timer, 6 foto, 7 foto.
const HERO_PHOTO_AT = {
  1: RES('heroph1','assets/m/hero-bramki-recepcja.webp'),
  3: RES('heroph2','assets/m/hero-kolowrot-biurowiec.webp'),
  4: RES('heroph3','assets/m/hero-bramki-lobby.webp'),
  6: RES('heroph4','assets/m/hero-bramka-skrzydlowa.webp'),
  7: RES('heroph5','assets/m/hero-rejestrator-scienny.webp')
};
const KD_MINI = [
  {img:RES('brus1','assets/brus1.webp'), cap:'Bramka w recepcji'},
  {img:RES('ts1000','assets/ts1000.webp'), cap:'Przejście jednoosobowe w zakładzie'},
  {img:RES('bw1','assets/bw-1.webp'), cap:'Przejście pełnej wysokości'},
  {img:RES('rejestrator1','assets/rejestrator-1.webp'), cap:'Czytnik przy drzwiach'},
  {img:RES('rfidkarta','assets/rfid-karta.webp'), cap:'Identyfikator pracownika'},
  {img:RES('bramawysoka2','assets/m/brama-wysoka-2.webp'), cap:'Kołowrót pełnej wysokości na wejściu do zakładu'},
  {img:RES('bramawysoka5','assets/m/brama-wysoka-5.webp'), cap:'Kołowrót z czytnikami w obu kierunkach'},
  {img:RES('bramawysoka4','assets/brama-wysoka-4.webp'), cap:'Kołowrót przy portierni'},
  {img:RES('antenauhf3','assets/m/antena-uhf-3.webp'), cap:'Anteny UHF na wjeździe na teren'},
  {img:RES('antenauhf2','assets/antena-uhf-2.webp'), cap:'Antena UHF nad przejazdem przy szlabanie'}
];
const CASE_STUDIES = [
{
  key:'polan', brand:'POLAN Sp. z o.o.', meta:'Przetwory warzywne i owocowe · produkcja i biuro',
  logo:'assets/cases/polan.svg', logoMaxH:26, logoDark:false,
  tags:['RCP','KD','Comarch Optima'],
  title:'Kołowrót zdarzeń – jak połączenie systemu RCP i KD usprawniło działanie firmy POLAN',
  lead:'POLAN to polsko-francuska spółka z o.o., specjalizująca się w produkcji wysokiej jakości przetworów warzywnych i owocowych. Firma od lat stawia na rozwój i nowoczesne technologie, które wspierają codzienną pracę – zarówno na hali produkcyjnej, jak i w biurze.',
  blocks:[
    {label:'WYZWANIE', paras:[
      'Dane o czasie pracy były najpierw zbierane na listach papierowych, następnie po ręcznej weryfikacji były wprowadzane do systemu Comarch Optima. Ten wieloetapowy proces wydłużał czas obsługi i stwarzał ryzyko błędów. Pojawiały się też rozbieżności, których źródła trudno było ustalić.',
      'Klient chciał ograniczyć dostęp do strefy produkcyjnej tylko dla osób posiadających uprawnienia. Sytuację skomplikował podział zespołu na pracowników produkcyjnych i biurowych – ich tryb pracy był zupełnie różny, co utrudniało wdrożenie uniwersalnych zasad.'
    ]},
    {label:'ROZWIĄZANIE', paras:[
      'Naszym pierwszym krokiem była seria spotkań z zespołem POLAN – chcieliśmy poznać specyfikę ich pracy, zrozumieć źródła trudności i dobrać rozwiązanie adekwatne do potrzeb obu grup pracowników. Rozmowy ujawniły, że przyczyną większości problemów była ręczna ewidencja czasu pracy. Papierowe listy były uzupełniane nieregularnie i często zawierały błędy – co miało wpływ na dane w raportach, a tym samym na decyzje biznesowe.',
      'Wspólnie z zespołem POLAN zaprojektowaliśmy rozwiązanie „uszczelniające” procesy rejestracji obecności. Kluczowym elementem było zintegrowanie systemu Rejestracji Czasu Pracy z Kontrolą Dostępu – tak, aby wejście na teren produkcji automatycznie oznaczało rozpoczęcie pracy, a wyjście – jej zakończenie lub wyjście na przerwę.',
      'W praktyce oznaczało to montaż dwustronnego kołowrotu z czytnikami, który zapewnia odpowiednią przepustowość na przejściu. Wejście jest możliwe wyłącznie po odbiciu karty, co eliminuje przypadki „wejścia na gapę”. Dla pracowników biurowych przygotowano dedykowane punkty rejestracji czasu pracy. Ich przejścia na produkcję są neutralne dla systemu RCP.',
      'W obszarze wymiany danych BioSys zaproponował narzędzie do współpracy z Comarch Optima. Dedykowany integrator zapewnia wymianę danych w obszarach: czasu pracy, profili pracowników i absencji. Dane zebrane w systemie RCP są skutecznie przenoszone do programu kadrowo-płacowego.'
    ]},
    {label:'EFEKT', paras:[], hasQuote:true, author:'Mateusz Pikul', quote:[
      '“Wprowadzenie systemu przyniosło nam konkretne, wymierne korzyści. Dzięki integracji z systemem Comarch Optima procesy kadrowe, które wcześniej były czasochłonne i obarczone ryzykiem błędów – zostały zautomatyzowane i znacząco skrócone.',
      'Dane o obecnościach są teraz rzetelne i dostępne w czasie rzeczywistym co ułatwia raportowanie. Dzięki wykorzystaniu kontroli dostępu podczas rejestracji czasu pracy zyskaliśmy pewność zdarzeń i podnieśliśmy poziom bezpieczeństwa. To była jedna z lepszych decyzji operacyjnych.”'
    ]}
  ]
},
{
  key:'bemarc', brand:'Bemarc Sp. z o.o.', meta:'Meble ekspozycyjne i wyposażenie wnętrz · Jasin pod Poznaniem',
  logo:'assets/cases/bemarc-white.svg', logoMaxH:24, logoDark:true,
  tags:['Web Pracownik'],
  title:'Od tablicy korkowej do cyfrowego HR-u czyli jak Bemarc uporządkował procesy kadrowe z Web Pracownikiem',
  lead:'Bemarc Sp. z o.o. to producent mebli ekspozycyjnych i wyposażenia wnętrz komercyjnych z siedzibą w Jasinie pod Poznaniem. Działa nieprzerwanie od 1980 roku.',
  blocks:[
    {label:'O FIRMIE', paras:[
      'Bemarc Sp. z o.o. to producent mebli ekspozycyjnych i wyposażenia wnętrz komercyjnych z siedzibą w Jasinie pod Poznaniem. Działa nieprzerwanie od 1980 roku. To nowoczesna organizacja łącząca wieloletnie doświadczenie z własnym parkiem maszynowym i elastycznym podejściem projektowym. Realizuje zarówno indywidualne projekty, jak i duże kontrakty dla globalnych marek polskich oraz zagranicznych z branży biżuteryjnej, odzieżowej, farmaceutycznej. Firma jest otwarta na nowe wyzwania.'
    ]},
    {label:'WYZWANIE', paras:[
      'Wraz z rozwojem firmy i rosnącym zatrudnieniem, tradycyjny sposób obsługi kadrowej zaczął przysparzać problemów. Ręczna obsługa ewidencji czasu pracy i wniosków papierowych wymagała zwiększonego zaangażowania po stronie kadr i kierowników.',
      'Pracownicy często dopytywali o swoje grafiki, nie wiedzieli, ile urlopu im zostało. Dział kadr i kierownicy byli odrywani od swoich obowiązków powtarzającymi się pytaniami. Rosło ryzyko błędów, a komunikacja między działami stawała się powolna i niewydajna. W skrócie: za dużo papieru, za mało porządku.'
    ]},
    {label:'ROZWIĄZANIE', paras:[
      'Firma zdecydowała się na wdrożenie panelu pracownika, czyli systemu Web Pracownik od BioSys. Kluczowe było to, że nie wprowadzano wszystkiego naraz – proces zaczął się od analizy sytuacji i potrzeb, a potem przeszedł przez etapy wdrożenia, szkolenia i adaptacji.',
      'Początkowo skupiono się na udostępnieniu pracownikom elektronicznego panelu z dostępem do grafików, informacji o nieobecnościach i danych kadrowych w jednym miejscu – przez komputer lub telefon. Z czasem system rozbudowano o funkcję składania wniosków, powiadomienia mailowe, rejestrację zdarzeń. Całość została dostosowana do rytmu pracy firmy i sposobu zarządzania zespołami.'
    ]},
    {label:'EFEKT', paras:[], hasQuote:true, author:'Paulina Marciniak, dyrektor operacyjny', quote:[
      '“Od kiedy wdrożyliśmy elektroniczny panel pracownika nasz zespół kadrowy oszczędza kilka godzin pracy w skali miesiąca. Czas ten możemy przeznaczyć na realizację innych projektów. Pracownicy w końcu mają jasność co do grafików i swojego czasu pracy. Komunikują nam, że wszystko stało się prostsze i bardziej transparentne“'
    ]}
  ]
},
{
  key:'mitsui', brand:'MITSUI HIGH-TEC (EUROPE)', meta:'Precyzyjne rdzenie silnikowe dla motoryzacji · ponad 250 pracowników',
  logo:'assets/cases/mitsui.svg', logoMaxH:52, logoDark:false,
  tags:['RCP','enova'],
  title:'Bezbłędny przekaz – jak RCP i integracja z Enovą usprawniły codzienną pracę w MITSUI HIGH-TEC (EUROPE)',
  lead:'MITSUI HIGH-TEC (EUROPE) to firma o japońskich korzeniach, obecna w Polsce od 2018 roku. Specjalizuje się w produkcji precyzyjnych rdzeni silnikowych, dostarczanych do czołowych producentów z branży motoryzacyjnej. Zatrudnia w Polsce ponad 250 pracowników.',
  blocks:[
    {label:'WYZWANIE', paras:[
      'Mitsui początkowo prowadziła ewidencję czasu pracy na papierowych listach. Choć to rozwiązanie wydawało się proste, w praktyce generowało wiele problemów - błędy przy przepisywaniu danych czy opóźnienia w uzupełnianiu godzin.',
      'Dodatkowo dane wymagały wprowadzania do systemu kadrowo-płacowego Enova, co pochłaniało cenny czas zespołu i wiązało się z ryzykiem błędów ludzkich.'
    ]},
    {label:'ROZWIĄZANIE', paras:[
      'Współpracę z Mitsui rozpoczęliśmy – jak zawsze – od dokładnego zrozumienia ich procesów i weryfikacji możliwości integracyjnych. Kluczem było nie tylko wyeliminowanie papierowych list, ale też zapewnienie spójności danych i wygodnego ich przekazywania do systemu kadrowego.',
      'W pierwszym kroku zaproponowaliśmy system RCP, który wpisze się w specyfikę pracy Klienta i wyeliminuje papierowe listy obecności. Zautomatyzował on proces rejestracji wejść i wyjść, zapewniając transparentność danych oraz spójność we wszystkich działach.',
      'Następnym etapem była integracja z systemem Enova, używanym przez dział kadr do naliczania wynagrodzeń. Dane z RCP trafiają bezpośrednio do Enovy, eliminując konieczność ich ręcznego przepisywania. Zespół kadrowy może teraz przesyłać dane w dogodnym dla siebie czasie - szybko, wygodnie i bez ryzyka pomyłek.'
    ]},
    {label:'EFEKT', paras:[], hasQuote:true, author:'Monika Sulikowska', quote:[
      '“Dzięki wdrożeniu nowego systemu zyskaliśmy nie tylko czas, ale też pewność, że dane z których wyliczamy płace są w 100% poprawne.',
      'Nie musimy już przepisywać ich ręcznie, ani sprawdzać czy wszystko się zgadza. Wiemy, że dane raz zatwierdzone w systemie RCP trafią kompletne do systemu Enova.',
      'Automatyzacja obecnych procesów i integracja z Enova zmieniły na plus naszą codzienność w zespole.”'
    ]}
  ]
},
{
  key:'nacomi', brand:'NACOMI GROUP Sp. z o.o.', meta:'Kosmetyki naturalne · wdrożenie od 2023 roku',
  logo:'', logoMaxH:0, logoDark:false, wordmark:'NACOMI',
  tags:['RCP','REKORD'],
  title:'Rejestracja czasu pracy zintegrowana z systemem REKORD',
  lead:'NACOMI GROUP Sp. z o.o. to jeden z najbardziej rozpoznawalnych polskich producentów kosmetyków naturalnych. Dynamiczny rozwój firmy oraz rosnące zatrudnienie sprawiły, że organizacja potrzebowała rozwiązania, które usprawni ewidencję czasu pracy i będzie w pełni współpracowało z wykorzystywanym systemem kadrowo-płacowym REKORD.',
  blocks:[
    {label:'WYZWANIE', paras:[
      'W 2023 roku firma trafiła do BioSys z polecenia, poszukując systemu Rejestracji Czasu Pracy, który zautomatyzuje proces przekazywania danych do systemu REKORD. Priorytetem było ograniczenie ręcznych czynności wykonywanych przez dział kadr.',
      'Po przeprowadzeniu analizy procesów zaproponowaliśmy wdrożenie systemu RCP z integracją z REKORD.'
    ]},
    {label:'ROZWIĄZANIE', paras:[
      'System został początkowo przygotowany z myślą o obsłudze do 250 pracowników. Wraz z dynamicznym rozwojem firmy w 2026 roku licencja została rozszerzona o kolejne profile użytkowników, bez konieczności zmiany wdrożonego rozwiązania.',
      'Możliwości systemu okazały się znacznie większe niż początkowo zakładano. Oprócz integracji z REKORD-em, NACOMI zaczęło wykorzystywać zgromadzone dane również w innych procesach organizacyjnych, dzięki czemu system stał się ważnym źródłem informacji wspierającym codzienną działalność firmy.',
      'Jak podkreśla osoba odpowiedzialna za projekt po stronie BioSys, już na etapie analizy założono, że rozwiązanie powinno odpowiadać nie tylko na bieżące potrzeby klienta, ale również umożliwiać jego dalszy rozwój.'
    ], hasQuote:true, author:'Krzysztof Górski, Head of Sales, BioSys', quote:[
      '„Naszym celem nie było wyłącznie wdrożenie systemu RCP. Chcieliśmy stworzyć rozwiązanie, które będzie rozwijało się razem z klientem. Rozszerzenie licencji oraz wykorzystanie danych z systemu w kolejnych procesach pokazują, że przyjęta koncepcja sprawdziła się w praktyce.”'
    ]},
    {label:'EFEKT', paras:[
      'Dzięki automatycznej wymianie danych pomiędzy systemami dział kadr ograniczył liczbę powtarzalnych czynności i zyskał nawet kilkanaście godzin pracy w skali miesiąca. Z rozwiązania korzysta obecnie kilku użytkowników, a zgromadzone dane wspierają nie tylko rozliczanie czasu pracy, ale również inne procesy organizacyjne. Firma zyskała skalowalne narzędzie, które rozwija się wraz z jej potrzebami.'
    ], hasQuote:true, author:'Eleonora Dziękiewicz, Dział Kadr, NACOMI GROUP', quote:[
      '„Największą zmianą było dla nas wyeliminowanie powtarzalnych czynności związanych z przekazywaniem danych. Dzięki automatycznej integracji z systemem REKORD oszczędzamy sporo czasu i możemy skupić się na właściwej pracy działu kadr, zamiast poświęcać go na ręczne operacje i ich weryfikację.”'
    ]}
  ]
},
{
  key:'zuk', brand:'ZUK Oświęcim', meta:'Usługi komunalne · praca w wielu lokalizacjach',
  logo:'assets/cases/zuk.svg', logoMaxH:52, logoDark:false,
  tags:['RCP','enova365'],
  title:'RCP zbudowane na zaufaniu',
  lead:'Zakład Usług Komunalnych Sp. z o.o. w Oświęcimiu odpowiada za realizację kluczowych usług komunalnych na rzecz mieszkańców miasta.',
  blocks:[
    {label:'O KLIENCIE', paras:[
      'Zakład Usług Komunalnych Sp. z o.o. w Oświęcimiu odpowiada za realizację kluczowych usług komunalnych na rzecz mieszkańców miasta. Spółka zajmuje się m.in. utrzymaniem czystości, pielęgnacją terenów zielonych oraz obsługą infrastruktury komunalnej. W codziennej działalności niezwykle istotna jest sprawna organizacja pracy oraz efektywne zarządzanie zespołami pracującymi w różnych lokalizacjach.'
    ]},
    {label:'WYZWANIE', paras:[
      'Końcem 2021 roku ZUK Oświęcim rozpoczął poszukiwanie odpowiedniego rozwiązania do elektronicznej rejestracji czasu pracy. Głównym celem nie było monitorowanie pracowników, lecz usprawnienie procesów administracyjnych i wyeliminowanie czasochłonnych czynności związanych z rozliczaniem czasu pracy oraz nadgodzin.',
      'Jak podkreśla Dyrektor Techniczno-Handlowy Sławomir Czekaj, organizacja od zawsze stawia na partnerskie relacje z pracownikami. Potrzebowała jednak rozwiązania, które zapewni przejrzyste zasady ewidencji czasu pracy, zautomatyzuje przekazywanie danych do systemu kadrowo-płacowego oraz ograniczy liczbę ręcznych operacji wykonywanych przez dział kadr.'
    ]},
    {label:'ROZWIĄZANIE', paras:[
      'Projekt rozpoczęliśmy od analizy organizacji pracy oraz sposobu rozliczania czasu pracy. Już podczas pierwszych rozmów wiedzieliśmy, że kluczowe będzie dopasowanie rozwiązania do sposobu funkcjonowania Klienta, a nie wdrożenie standardowego systemu RCP.',
      'Zaproponowaliśmy system zintegrowany z enova365, który został uruchomiony na kilku czytnikach rozmieszczonych w różnych lokalizacjach przedsiębiorstwa. Całość została skonfigurowana tak, aby maksymalnie zautomatyzować proces ewidencji czasu pracy i przekazywania danych do działu kadr.'
    ], hasQuote:true, author:'Krzysztof Górski, Lider Zespołu Konsultantów, BioSys', quote:[
      '„Najważniejsze było zrozumienie potrzeb klienta. Nie szukał narzędzia do kontrolowania pracowników, lecz rozwiązania, które uporządkuje proces rozliczania czasu pracy i odciąży dział kadr od powtarzalnych obowiązków. Naszą rolą było dopasowanie technologii do sposobu funkcjonowania organizacji, a nie odwrotnie.”'
    ]},
    {label:'EFEKT', paras:[
      'Od momentu wdrożenia w 2022 roku system wspiera pracę ZUK Oświęcim, automatyzując ewidencję czasu pracy. Dział kadr zyskał narzędzie, które znacząco ograniczyło liczbę ręcznych czynności, a rozliczanie godzin pracy i nadgodzin stało się szybsze, bardziej przejrzyste i oparte na jednolitych zasadach.',
      'Projekt pokazał, że nowoczesny system RCP może przede wszystkim usprawniać organizację pracy i zwiększać transparentność procesów, pozostawiając jednocześnie kulturę organizacyjną opartą na zaufaniu i partnerskich relacjach z pracownikami.'
    ], hasQuote:true, author:'Sławomir Czekaj, Dyrektor Techniczno-Handlowy, ZUK Oświęcim', quote:[
      '„Od początku zależało nam na tym, aby system wspierał pracę działu kadr, a nie zmieniał naszego podejścia do pracowników. Dzięki automatyzacji zyskaliśmy przejrzysty proces rozliczania czasu pracy i nadgodzin, co ułatwia codzienną pracę wszystkim zaangażowanym.”'
    ]}
  ]
}
];
const PAGES = [
{
  key:'home', tag:'Start', isHome:true, kicker:'SYSTEMY RCP I KD DLA ORGANIZACJI ZARZĄDZANYCH NA DANYCH', kicker2:'Systemy RCP i KD projektowane pod procesy firmy',
  title1:'Spójny ekosystem do', title2:'lepszych decyzji biznesowych.',
  intro:'BioSys łączy rejestrację czasu pracy, poprawę bezpieczeństwa i obliczanie czasu zleceń i czynności w jeden spójny proces — od pracownika do zarządu.\nZbuduj z nami swoje idealne rozwiązanie.',
  ctaShort:'Umów konsultację procesu', secondaryCta:'Oblicz potencjał oszczędności',
  ctaLabel:'Zacznij od procesu, który dziś kosztuje najwięcej czasu — 30-minutowa analiza: skala, model pracy, integracje i priorytety wdrożenia, bez zobowiązań.',
  heroVariant:'dashboard', hasForm:true,
  dashTitle:'Rejestracja czasu pracy', stats:[{label:'Obecni teraz',value:'183'},{label:'Nieobecni',value:'8'},{label:'Wnioski do decyzji',value:'12'}], barVals:[45,58,68,50,62,48,72,80,58]
},
{
  key:'onas', tag:'O nas', isOnas:true, kicker:'O NAS', kicker2:'BioSys — specjaliści od mierzenia czasu pracy',
  title1:'Jesteśmy specjalistami od mierzenia czasu pracy.', title2:'Projektujemy systemy, które działają latami.',
  intro:'Projektujemy i wdrażamy systemy Rejestracji Czasu Pracy i Kontroli Dostępu dla firm produkcyjnych, logistycznych, biurowych i placówek medycznych. Nasze rozwiązania rozwijają się wraz z biznesem klienta, a współpraca serwisowa trwa zwykle długo po zamknięciu wdrożenia.',
  ctaShort:'Skontaktuj się z nami', secondaryCta:'Zobacz nasze wdrożenia',
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz dowiedzieć się więcej o BioSys? Skontaktuj się z nami — odpowiemy na wszystkie pytania.',
  // Historia, oś czasu i zarząd — teksty czekają na uzupełnienie przez klienta.
  // Placeholdery zapisane w nawiasach kwadratowych, żeby było widać, czego brakuje.
  aboutHistKicker:'HISTORIA',
  aboutHistTitle:'[Nagłówek sekcji z historią — jedno zdanie]',
  aboutHistLead:'[Lead — dwa, trzy zdania o tym, skąd wzięła się firma.]',
  aboutHistParas:[
    '[Akapit 1 — początek: skąd pomysł, kto go miał, jaki problem miał rozwiązywać.]',
    '[Akapit 2 — rozwój: pierwsze wdrożenia, własna produkcja, kolejne generacje urządzeń.]',
    '[Akapit 3 — dziś: skala działania, zespół, w którą stronę firma idzie dalej.]'
  ],
  aboutTimeKicker:'OŚ CZASU',
  aboutTimeTitle:'[Nagłówek sekcji z osią czasu]',
  aboutTimeline:[
    {y:'2007', t:'Idea', d:'[Jak narodził się pomysł na BioSys — jedno, dwa zdania.]'},
    {y:'2008', t:'Powstanie firmy', d:'[Założenie BioSys i pierwsi klienci.]'},
    {y:'[rok]', t:'[Pierwszy rejestrator]', d:'[Pierwsze własne urządzenie i pierwsze wdrożenia.]'},
    {y:'[rok]', t:'[Druga generacja urządzeń]', d:'[Co się zmieniło względem pierwszej generacji.]'},
    {y:'[rok]', t:'[Własne oprogramowanie]', d:'[Start autorskiego systemu do rozliczania czasu pracy.]'},
    {y:'[rok]', t:'[Kontrola dostępu]', d:'[Rozszerzenie oferty o systemy KD.]'},
    {y:'[rok]', t:'[Trzecia generacja urządzeń]', d:'[Kolejna generacja rejestratorów.]'},
    {y:'[rok]', t:'[Platforma WEB]', d:'[Panel pracownika i przełożonego w przeglądarce.]'},
    {y:'[rok]', t:'[Etatomierz]', d:'[Premiera oprogramowania Etatomierz.]'},
    {y:'Dziś', t:'[Gdzie jesteśmy dzisiaj]', d:'[Skala: wdrożenia, urządzenia w pracy, zasięg obsługi.]'}
  ],
  aboutBoardKicker:'ZARZĄD',
  aboutBoardTitle:'[Nagłówek sekcji z zarządem]',
  aboutBoardLead:'[Lead — jedno, dwa zdania o zarządzie.]',
  aboutBoard:[
    {img:'assets/karol-jura.webp', n:'Karol Jura', r:'[Stanowisko]', d:'[Jedno zdanie o tym, za co odpowiada.]'},
    {img:'assets/pawel-zurek.webp', n:'Paweł Żurek', r:'[Stanowisko]', d:'[Jedno zdanie o tym, za co odpowiada.]'},
    {img:'assets/andrzej-pilch.webp', n:'Andrzej Pilch', r:'[Stanowisko]', d:'[Jedno zdanie o tym, za co odpowiada.]'}
  ]
},
{
  key:'onas-case', tag:'Case study', isOnasChild:true, kicker:'O NAS', kicker2:'Wdrożenia BioSys w praktyce',
  title1:'Case study.', title2:'Wdrożenia opisane przez naszych klientów.',
  intro:'Każde wdrożenie zaczyna się od procesu, który dziś kosztuje najwięcej czasu. Poniżej opisy wdrożeń: sytuacja wyjściowa, zakres prac i efekt po uruchomieniu systemu.',
  ctaShort:'Porozmawiaj o swoim wdrożeniu', secondaryCta:'',
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz poznać szczegóły któregoś z wdrożeń? Napisz do nas.',
  caseLead:'Pięć wdrożeń opisanych razem z klientami: wyzwanie, przebieg projektu i efekt po uruchomieniu systemu. Rozwiń wybrane wdrożenie, aby przeczytać całość.'
},
{
  key:'onas-referencje', tag:'Referencje', isOnasChild:true, kicker:'O NAS', kicker2:'Opinie klientów BioSys',
  title1:'Referencje.', title2:'Co mówią firmy po wdrożeniu.',
  intro:'Nasze systemy pracują w firmach produkcyjnych, placówkach medycznych, logistyce i administracji publicznej. Poniżej firmy, które wystawiły nam list referencyjny — pogrupowane według branży.',
  ctaShort:'Poproś o listę referencyjną', secondaryCta:'',
  checklist:['Listy referencyjne od klientów','Wdrożenia w produkcji, logistyce i medycynie','Systemy pracujące od lat'],
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Potrzebujesz referencji z Twojej branży? Przygotujemy listę firm o podobnym profilu.',
  refsLead:'Skany listów referencyjnych oraz dane kontaktowe osób odpowiedzialnych za wdrożenie udostępniamy na etapie rozmów handlowych — wystarczy wskazać branżę o profilu zbliżonym do Twojej firmy.',
},
{
  key:'onas-praca', tag:'Kariera w BioSys', isOnasChild:true, kicker:'O NAS', kicker2:'Praca w BioSys',
  title1:'Kariera w BioSys.', title2:'Dołącz do zespołu.',
  intro:'Jesteśmy BioSys. Tworzymy zaawansowane oprogramowanie i produkujemy urządzenia, które pomagają firmom efektywnie zarządzać czasem pracy oraz dbać o bezpieczeństwo na terenie całego kraju.\nNie jesteśmy sztywną korporacją — stawiamy na proste zasady, partnerskie relacje, merytoryczne działanie i brak zbędnej biurokracji.',
  ctaShort:'Zobacz ogłoszenie', secondaryCta:'',
  heroVariant:'career', hasForm:false, hasCtaBand:true,
  ctaLabel:'Nie widzisz stanowiska dla siebie? Wyślij zgłoszenie spontaniczne — wracamy do zgłoszeń przy kolejnych rekrutacjach.',
  jobsLead:'Poniżej rekrutacja, którą prowadzimy obecnie. Zgłoszenia przyjmujemy przez formularz na dole strony — trafiają na praca@biosys.pl.',
  careerFacts:[
    {v:'1 600+', l:'zakończonych wdrożeń'},
    {v:'650 000', l:'pracowników każdego dnia rejestruje czas pracy w naszych systemach'},
    {v:'18 000', l:'urządzeń codziennie pracuje na sukces naszych Klientów'},
    {v:'Kraków', l:'biuro przy ul. Józefa Friedleina 4-6'}
  ],
  careerWhat:[
    {num:'01', t:'Oprogramowanie', d:'Ewidencja czasu pracy, grafiki, nadgodziny, wnioski i rozliczanie produkcji — w jednym systemie, dla biura i dla hali.', tags:['Etatomierz','Etatomierz WEB','Web Pracownik','TaskTimer']},
    {num:'02', t:'Urządzenia', d:'Projektujemy i produkujemy własny sprzęt — od rejestratora na ścianie po zasilanie całej instalacji KD.', tags:['Rejestratory czasu pracy','Kontrolery i czytniki','Bramki obrotowe i uchylne','Zasilacze']},
    {num:'03', t:'Wdrożenia i opieka', d:'Wchodzimy w procesy klienta, ustawiamy system pod jego regulamin pracy i zostajemy z nim na lata.', tags:['Analiza procesów','Konfiguracja pod regulamin','Integracje kadrowo-płacowe','Szkolenia i serwis']}
  ],
  jobOffer:{
    title:'Account Manager (Wdrożenia produktowe & Relacje B2B)',
    meta:['Kraków, ul. Józefa Friedleina 4-6','umowa o pracę, kontrakt B2B','pełny etat','specjalista / specjalistka (mid / regular)','praca stacjonarna','praca od zaraz'],
    about:[
      'Szukamy do zespołu doświadczonej osoby na stanowisko Account Managera, która wejdzie w rolę merytorycznego przewodnika i eksperta produktowego dla naszych klientów. Połączysz u nas dwa kluczowe obszary: koordynację i samodzielną, funkcjonalną konfigurację wdrożenia systemu u nowych klientów oraz długofalową opiekę, doradztwo i biznesowy rozwój przypisanej bazy firm.',
      'Jeśli lubisz technologię, chcesz poznać nasz produkt od podszewki i przełożyć to na partnerską sprzedaż – to stanowisko jest dla Ciebie.'
    ],
    duties:[
      {t:'Koordynacja onboardingu i samodzielna konfiguracja systemu (cel: wdrożenie w terminie!)',
       d:'Przejmujesz klienta od zespołu New Business zaraz po podpisaniu umowy. Od tego momentu stajesz się „dyrygentem” całego procesu. Twoim nadrzędnym zadaniem jest sprawić, by system ruszył w ustalonym z klientem terminie.',
       items:[
         'Spinasz zasoby wewnętrzne: Planujesz i koordynujesz pracę techników (którzy montują czytniki) oraz helpdesku (którzy instalują bazy SQL i konfigurują sieć). Ty nadzorujesz postępy.',
         'Działasz merytorycznie: Siadasz z działem kadr/HR klienta, analizujesz ich regulamin pracy i samodzielnie konfigurujesz dla nich system (ustawiasz logikę rozliczania nadgodzin, godzin nocnych, grafików czy urlopów), a na koniec uczysz ich, jak sprawnie z tego korzystać.',
         'Trzymasz stery i urealniasz oczekiwania: Klienci bywają wymagający, a terminy gonią. Jeśli projekt zwalnia z winy klienta lub pojawia się spór, nie boisz się przeprowadzić szczerej, „prostującej” rozmowy, asertywnie wyznaczyć granic i sprowadzić wdrożenia z powrotem na właściwe tory.'
       ]},
      {t:'Rozwój bazy klientów (Upselling & Cross-selling)',
       d:'Otrzymujesz pod opiekę dedykowany koszyk naszych kluczowych klientów. Ponieważ znasz system od podszewki i sam go konfigurowałeś, dokładnie wiesz, czego potrzebują. Pomagasz im dobierać kolejne funkcjonalności, nowe moduły oprogramowania czy dodatkowe czytniki w miarę rozwoju ich biznesu.', items:[]},
      {t:'Pilnowanie parametru Churn (Retencja)',
       d:'Dbasz o relacje z klientami tak, aby czuli, że mają w Biosys prawdziwego partnera i eksperta. Regularnie weryfikujesz ich zadowolenie i reagujesz proaktywnie, aby nie pomyśleli o zmianie dostawcy.', items:[]},
      {t:'Eskalacja i wsparcie',
       d:'Nasz zespół Helpdesku (I linia) rozwiązuje 80% codziennych spraw technicznych. Ty wkraczasz jako merytoryczny doradca w tematach najbardziej skomplikowanych konfiguracyjnie lub wtedy, gdy stały klient potrzebuje niestandardowego rozwiązania biznesowego.', items:[]}
    ],
    reqLead:'Czego od Ciebie oczekujemy?',
    requirements:[
      {t:'Doświadczenia w roli Account Managera, Opiekuna Klienta B2B lub koordynatora wdrożeń IT', hasD:true, d:'(mile widziane w branży systemów kadrowo-płacowych, ERP lub pokrewnych).'},
      {t:'Zacięcia analitycznego i chęci doskonałego poznania produktu:', hasD:true, d:'Będziesz samodzielnie konfigurować reguły rozliczania czasu pracy. Musisz mieć „techniczny zmysł”, lubić wchodzić głęboko w opcje i parametry oprogramowania oraz czerpać satysfakcję ze znalezienia idealnego ustawienia systemu pod trudny regulamin pracy klienta.'},
      {t:'Odporności, asertywności i umiejętności koordynacji:', hasD:true, d:'Potrafisz egzekwować terminy (od zespołu i od klienta), lubisz mieć kontrolę nad harmonogramem i potrafisz z uśmiechem, ale stanowczo, „naprostować” dyskusję z trudnym partnerem biznesowym.'},
      {t:'Zdolności trenerskich i łatwości przekazywania wiedzy:', hasD:true, d:'Będziesz uczyć ludzi obsługi naszego systemu. Musisz mieć do tego cierpliwość, potrafić tłumaczyć zawiłe funkcje prostym językiem i budować zaufanie jako ekspert.'},
      {t:'Merytorycznego podejścia do sprzedaży:', hasD:true, d:'Nie szukamy „telemarketera”. Chcemy partnera biznesowego, który potrafi przeanalizować procesy u klienta i naturalnie zaproponować mu moduł, który rozwiąże jego problem (stawiamy na doradztwo, nie na agresywną sprzedaż).'}
    ],
    splitLead:'Ważne – co leży po Twojej stronie, a co po stronie innych zespołów:',
    split:[
      {t:'Twoje zadanie', d:'Koordynacja całego projektu wdrożeniowego, pilnowanie terminów, dogłębne poznanie systemu Biosys, jego samodzielna konfiguracja funkcjonalna pod klienta (grafiki, nadgodziny, reguły rozliczania) oraz szkolenie użytkowników.'},
      {t:'Zadanie innych zespołów', d:'My zajmujemy się fizycznym montażem urządzeń na ścianach, przeciąganiem kabli, instalacją baz SQL na serwerach oraz integracjami sieciowymi. Do tych zadań dostajesz pełne wsparcie naszych techników i administratorów. Jeżeli masz doświadczenie w środowiskach serwerowych, bazach danych, środowiskach sieciowych - to będzie to mile widziane.'}
    ],
    weOffer:[
      {t:'Stabilność + Motywujący system prowizyjny:', d:'Otrzymasz stałe wynagrodzenie podstawowe (podstawa na umowie B2B lub UoP) oraz w pełni przejrzysty, dwuskładnikowy system prowizyjny: upsell/cross-sell + okresowa premia retencyjna za utrzymanie niskiego poziomu churn (klientów odchodzących) w Twojej bazie.'},
      {t:'Praktyczne i bezstresowe wdrożenie:', d:'Zapomnij o nudnej teorii. U nas architekturę systemów i sprzętu poznasz na realnych, ciekawych projektach pod okiem doświadczonych kolegów. Nauczymy Cię wszystkich tajników konfiguracji.'},
      {t:'Biuro w Krakowie:', d:'Pracujemy stacjonarnie z naszego biura w bardzo dobrze skomunikowanej części Krakowa (okolice Nowego Kleparza, ul. Friedleina).'},
      {t:'Kulturę organizacyjną:', d:'Cenimy partnerskie relacje, płaską strukturę, realne efekty i brak bezsensownych procedur. Masz realny wpływ na to, jak usprawniamy nasze procesy.'},
      {t:'Narzędzia pracy:', d:'Laptop z dodatkowymi monitorami, telefon, CRM i pełne wsparcie techniczne na każdym etapie.'},
      {t:'Benefity:', d:'Prywatna opieka medyczna (LUXMED), karta sportowa (Multisport), brak dress code’u, pyszna kawa i herbata bez limitu.'}
    ],
    benefits:['dofinansowanie zajęć sportowych','brak dress code’u','kawa / herbata','program rekomendacji pracowników','dofinansowanie prywatnej opieki medycznej']
  },
  jobsValues:[
    {t:'Partnerskie relacje',d:'Płaska struktura i proste zasady. Rozmawiamy wprost, bez korporacyjnych procedur i zbędnej biurokracji.'},
    {t:'Merytoryczne działanie',d:'Liczy się znajomość produktu i realny efekt u klienta, nie liczba wysłanych maili.'},
    {t:'Wdrożenie na realnych projektach',d:'Systemy i sprzęt poznajesz na bieżących wdrożeniach, pod okiem doświadczonych kolegów.'},
    {t:'Realny wpływ',d:'Zgłaszasz i wprowadzasz zmiany w naszych procesach — decyzje podejmujemy szybko.'}
  ],
  jobsProcess:[
    {t:'Analiza CV',d:'Czytamy każde zgłoszenie i odpowiadamy, jeśli profil pasuje do roli.'},
    {t:'Krótka rozmowa telefoniczna',d:'10–15 minut na potwierdzenie najważniejszych szczegółów i oczekiwań.'},
    {t:'Rozmowa online',d:'Około 20 minut na MS Teams o dotychczasowym doświadczeniu.'},
    {t:'Spotkanie w biurze',d:'Rozmowa o konkretnych przypadkach, pokaz sprzętu i poznanie zespołu.'},
    {t:'Decyzja',d:'Informację zwrotną lub ofertę przekazujemy w maksymalnie 2 tygodnie od pierwszego kontaktu.'}
  ]
},{
  key:'kontakt', tag:'Kontakt', isKontakt:true, kicker:'KONTAKT', kicker2:'Działamy na terenie całego kraju',
  title1:'Kontakt', title2:'z BioSys.',
  intro:'Obsługujemy zgłoszenia serwisowe obecnych klientów i rozmawiamy z firmami, które dopiero szukają systemu. Wybierz ścieżkę, która dotyczy Ciebie.',
  ctaShort:'Wyślij zapytanie', secondaryCta:'Zadzwoń do nas',
  heroVariant:'none', hasForm:false, hasCtaBand:false,
  contactPaths:true
},
{
  key:'rcp', tag:'Rejestracja czasu pracy', isRcp:true, kicker:'REJESTRACJA CZASU PRACY', kicker2:'System RCP dla firm',
  title1:'Rejestracja czasu pracy.', title2:'Zautomatyzuj ewidencję i rozliczenia.',
  intro:'System RCP BioSys rejestruje obecność pracowników, prowadzi ewidencję czasu pracy i przygotowuje dane do rozliczeń kadrowo-płacowych. Działa w biurze, na hali produkcyjnej i przy pracy zdalnej.',
  ctaShort:'Umów analizę procesu', secondaryCta:'Policz oszczędności',
  heroVariant:'dashboard', hasForm:false, hasCtaBand:true,
  dashTitle:'Ewidencja czasu pracy', stats:[{label:'Obecni dziś',value:'248'},{label:'Wnioski',value:'11'},{label:'Zamknięcie miesiąca',value:'3h'}], barVals:[55,64,50,72,58,66,60,78],
  ctaLabel:'Chcesz zobaczyć, jak RCP zadziała w Twojej firmie? Umów prezentację systemu.'
},
{
  key:'rcp-rozliczanie', tag:'Rozliczanie czasu pracy', isRcpChild:true, kicker:'REJESTRACJA CZASU PRACY',
  kicker2:'Rozliczanie czasu pracy',
  title1:'Rozliczanie czasu pracy', title2:'bez ręcznych korekt.',
  intro:'Automatyczne przeliczanie godzin, nadgodzin i dodatków na podstawie zarejestrowanych zdarzeń. Dane gotowe do przekazania do systemu kadrowo-płacowego.',
  ctaShort:'Umów demonstrację', secondaryCta:'Zobacz moduły RCP',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz skrócić zamknięcie miesiąca? Skontaktuj się z nami.',
  specs:[
    {k:'Zakres',v:'godziny, nadgodziny, dodatki, absencje'},
    {k:'Zgodność',v:'reguły Kodeksu Pracy i układów zbiorowych'},
    {k:'Wynik',v:'dane gotowe do systemu kadrowo-płacowego'},
    {k:'Efekt',v:'zamknięcie miesiąca w godzinach zamiast dni'}
  ]
},
{
  key:'rcp-ewidencja', tag:'Ewidencja czasu pracy', isRcpChild:true, kicker:'REJESTRACJA CZASU PRACY',
  kicker2:'Ewidencja czasu pracy',
  title1:'Ewidencja czasu pracy', title2:'w pełni elektroniczna.',
  intro:'Kompletna, cyfrowa dokumentacja czasu pracy każdego pracownika. Zastępuje papierowe listy obecności i arkusze prowadzone ręcznie.',
  ctaShort:'Umów demonstrację', secondaryCta:'Zobacz moduły RCP',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz odejść od papierowych list obecności? Napisz do nas.',
  specs:[
    {k:'Forma',v:'dokumentacja w pełni elektroniczna'},
    {k:'Zakres',v:'obecności, absencje, grafiki, wnioski'},
    {k:'Dostęp',v:'kadry, przełożeni i pracownik w swoim panelu'},
    {k:'Archiwizacja',v:'historia dostępna na potrzeby kontroli'}
  ]
},
{
  key:'rcp-zdalna', tag:'Zdalna Rejestracja Czasu Pracy', isRcpChild:true, kicker:'REJESTRACJA CZASU PRACY',
  kicker2:'Zdalna Rejestracja Czasu Pracy',
  title1:'Zdalna Rejestracja', title2:'Czasu Pracy.',
  intro:'Rejestracja rozpoczęcia i zakończenia pracy poza siedzibą firmy — dla pracy zdalnej, hybrydowej i zespołów mobilnych.',
  ctaShort:'Umów demonstrację', secondaryCta:'Zobacz moduły RCP',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Rozliczasz pracę zdalną lub zespoły w terenie? Porozmawiajmy o konfiguracji.',
  specs:[
    {k:'Zastosowanie',v:'praca zdalna, hybrydowa i mobilna'},
    {k:'Rejestracja',v:'start i koniec pracy poza siedzibą firmy'},
    {k:'Nadzór',v:'podgląd dla przełożonego w czasie rzeczywistym'},
    {k:'Rozliczenie',v:'wspólna ewidencja z pracą stacjonarną'}
  ]
},
{
  key:'wiedza', tag:'Rejestracja czasu pracy — baza wiedzy', isKb:true, kicker:'BAZA WIEDZY', kicker2:'Rejestracja czasu pracy — kompendium',
  title1:'Rejestracja czasu pracy.', title2:'Ewidencja, przepisy, metody rejestracji i rozliczanie.',
  intro:'Kompletne opracowanie o rejestracji czasu pracy: czym jest ewidencja czasu pracy, jakie obowiązki nakłada Kodeks pracy, jak działa system RCP, jakimi metodami rejestruje się zdarzenia i jak wygląda rozliczanie okresu rozliczeniowego oraz integracja z systemem kadrowo-płacowym.',
  ctaShort:'Umów analizę procesu', secondaryCta:'',
  checklist:['Ewidencja i przepisy','Metody rejestracji','Rozliczanie i integracje'],
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz przełożyć te zasady na konfigurację systemu w swojej firmie? Umów bezpłatną analizę procesu.',
  kbBody:[
    {h:'Czym jest rejestracja czasu pracy', p:[
      'Rejestracja czasu pracy (RCP) to zbieranie i przetwarzanie informacji o tym, kiedy pracownik rozpoczął pracę, kiedy ją zakończył oraz co działo się pomiędzy tymi zdarzeniami: przerwy, wyjścia służbowe, wyjścia prywatne, praca w innej lokalizacji. W systemie informatycznym każde takie zdarzenie ma identyfikator pracownika, datę, godzinę, czytnik i typ. Z tych pojedynczych zapisów powstaje ewidencja czasu pracy, a z niej raporty dla kadr, płac i przełożonych.',
      'Rejestracja czasu pracy nie jest tym samym co kontrola obecności na terenie zakładu. Czasem pracy jest okres, w którym pracownik pozostaje w dyspozycji pracodawcy, a nie każda minuta spędzona w budynku. Dlatego system rozdziela typy zdarzeń i przypisuje im różny wpływ na wynik: wyjście służbowe nie przerywa czasu pracy, wyjście prywatne przerywa, a przerwa może być wliczana albo niewliczana zależnie od regulaminu.',
      'W firmach, które prowadzą ewidencję ręcznie, dane o czasie pracy powstają dwa albo trzy razy: pracownik podpisuje listę, przełożony ją weryfikuje, kadry przepisują wynik do systemu kadrowo-płacowego. Każdy z tych etapów jest miejscem, w którym powstaje rozbieżność, a jej źródła po miesiącu nie da się już ustalić. Rejestracja elektroniczna eliminuje przepisywanie: dane wchodzą do systemu raz, w momencie zdarzenia.'
    ]},
    {h:'Obowiązek prowadzenia ewidencji czasu pracy', p:[
      'Artykuł 149 § 1 Kodeksu pracy nakłada na pracodawcę obowiązek prowadzenia ewidencji czasu pracy pracownika do celów prawidłowego ustalenia jego wynagrodzenia i innych świadczeń związanych z pracą, a na żądanie pracownika — udostępnienia mu tej ewidencji. Przepis nie wskazuje formy: ewidencja może być prowadzona w postaci elektronicznej i coraz częściej jest, bo tylko wtedy da się ją odtworzyć na potrzeby kontroli bez ręcznego zbierania dokumentów.',
      'Zakres karty ewidencji określa § 6 rozporządzenia Ministra Rodziny, Pracy i Polityki Społecznej z 10 grudnia 2018 r. w sprawie dokumentacji pracowniczej. Karta obejmuje między innymi liczbę godzin pracy oraz godzinę rozpoczęcia i zakończenia pracy, liczbę godzin nadliczbowych, dni wolne z oznaczeniem tytułu ich udzielenia, godziny dyżurów, zwolnienia od pracy oraz inne usprawiedliwione i nieusprawiedliwione nieobecności. To lista pól, które raport z systemu RCP musi odwzorować, żeby ewidencja była kompletna.',
      'Normy czasu pracy wyznacza art. 129 § 1 Kodeksu pracy: 8 godzin na dobę i przeciętnie 40 godzin w przeciętnie pięciodniowym tygodniu pracy w przyjętym okresie rozliczeniowym. Do tego dochodzą prawa do odpoczynku — co najmniej 11 godzin nieprzerwanego odpoczynku dobowego (art. 132) i 35 godzin odpoczynku tygodniowego (art. 133). Naruszenia odpoczynku widać wyłącznie w danych o godzinach faktycznych; sam harmonogram ich nie pokaże.',
      'Praca ponad normy albo ponad przedłużony dobowy wymiar wynikający z rozkładu stanowi pracę w godzinach nadliczbowych z dodatkiem 50% lub 100% wynagrodzenia (art. 151 i 151¹). Kwalifikacja zależy od dnia tygodnia, pory doby i przyjętego systemu czasu pracy — i właśnie dlatego reguły opłaca się ustawić raz w systemie, a nie rozstrzygać je co miesiąc w arkuszu kalkulacyjnym.'
    ]},
    {h:'Jak działa system RCP w praktyce', p:[
      'Punkt wyjścia to identyfikacja pracownika. Najczęściej jest to karta lub brelok zbliżeniowy, terminal biometryczny, kod PIN albo aplikacja WEB dla osób pracujących zdalnie i w terenie. Zdarzenie zostaje potwierdzone na wyświetlaczu terminala i trafia do bazy — jeśli łącze jest chwilowo niedostępne, terminal buforuje zapisy i wysyła je po odzyskaniu połączenia, więc żadne odbicie nie ginie.',
      'Drugą warstwą jest harmonogram. Ewidencja bez planu pracy pokazuje wyłącznie sumę godzin; dopiero porównanie planu z rzeczywistością daje informację o spóźnieniu, wcześniejszym wyjściu, pracy w dniu wolnym i nadgodzinach. Grafiki buduje się dla grup pracowników, zmian, brygad, a w systemach równoważnym, ruchu ciągłego czy czterobrygadowym plan bywa jedynym punktem odniesienia dla rozliczenia.',
      'Trzecia warstwa to reguły przeliczania. System stosuje limity dobowe i średniotygodniowe, zasady zaliczania przerw, progi dodatków za pracę w nocy i w niedzielę, sposób rozliczania wyjść prywatnych i odpracowań. Reguły definiuje się raz, na etapie wdrożenia, i przypisuje do grup pracowników — dzięki temu każdy miesiąc rozlicza się tak samo, niezależnie od tego, kto tego dnia obsługuje kadry.',
      'Czwarta warstwa to obieg wniosków. Urlopy, wyjścia, korekty odbić i zmiany grafiku pracownik składa w panelu, przełożony akceptuje, a zaakceptowany wniosek automatycznie wchodzi do ewidencji. Kadry przestają być skrzynką na maile, a historia decyzji zostaje w systemie razem ze zdarzeniami, do których się odnosi.'
    ]},
    {h:'Metody rejestracji: karta, biometria, PIN, aplikacja', p:[
      'Karty i breloki zbliżeniowe to najtańszy i najszybszy sposób rejestracji, sprawdzony w dużych zespołach produkcyjnych i magazynowych. Odbicie zajmuje ułamek sekundy, co ma znaczenie na przejściu, przez które w kilka minut przechodzi cała zmiana. Wadą jest możliwość przekazania karty innej osobie — problem rozwiązuje się łącząc rejestrację z kontrolą dostępu przy kołowrocie albo dodając weryfikację biometryczną w wybranych punktach.',
      'Terminale biometryczne rozpoznają cechę fizyczną — najczęściej odcisk palca lub geometrię dłoni — i eliminują odbijanie za kolegę. Wdrożenie biometrii wymaga jednak przemyślenia podstawy przetwarzania danych: dane biometryczne pracowników należą do szczególnych kategorii danych, więc zakres i sposób ich użycia trzeba udokumentować i ograniczyć do niezbędnego minimum.',
      'PIN jest rozwiązaniem awaryjnym i uzupełniającym — przydaje się, gdy pracownik zapomni karty albo gdy punkt rejestracji obsługuje niewielką grupę osób. Aplikacja WEB i mobilna obsługuje pracę zdalną, hybrydową i zespoły w terenie: pracownik rejestruje start i koniec pracy z telefonu lub przeglądarki, a przełożony widzi status na bieżąco. Wszystkie metody trafiają do jednej ewidencji, więc praca stacjonarna i zdalna rozliczają się wspólnie.'
    ]},
    {h:'Rozliczanie czasu pracy i zamknięcie miesiąca', p:[
      'Zamknięcie miesiąca w ewidencji prowadzonej ręcznie polega na uzgadnianiu: kadry porównują listę obecności z grafikiem, wyjaśniają luki, dopisują absencje, przeliczają nadgodziny i wprowadzają wynik do systemu płacowego. W firmie o kilkuset pracownikach ten proces zajmuje dni i zawsze kończy się kilkoma pozycjami przyjętymi na słowo.',
      'W systemie RCP zamknięcie miesiąca to weryfikacja wyjątków. Dane są już przeliczone, więc kadry przeglądają wyłącznie pozycje wymagające decyzji: brakujące odbicia, nadgodziny do zatwierdzenia, nieobecności bez dokumentu, przekroczenia odpoczynku. Reszta ewidencji jest gotowa i spójna z zapisami zdarzeń, do których zawsze można wrócić.',
      'Efekt widać w trzech miejscach. Skraca się czas przygotowania danych do płac. Znika kategoria sporów, których nie da się rozstrzygnąć, bo każda pozycja ma źródło w konkretnym zdarzeniu. Pojawiają się dane, których wcześniej nie było: rzeczywisty rozkład nadgodzin między działami, skala absencji w okresach szczytowych, obsada zmian względem planu.'
    ]},
    {h:'Integracja z systemem kadrowo-płacowym', p:[
      'Ewidencja czasu pracy ma wartość operacyjną dopiero wtedy, gdy jej wynik trafia do systemu, w którym liczone są wynagrodzenia. Integracja wymienia zwykle trzy grupy danych: kartoteki pracowników (żeby nie zakładać ich dwa razy), czas pracy i nadgodziny w podziale na składniki oraz absencje wraz z tytułem i dokumentem.',
      'Kierunek wymiany zależy od tego, gdzie prowadzi się kartotekę. Najczęściej dane osobowe i strukturę organizacyjną utrzymuje system kadrowo-płacowy, a system RCP dostaje z niego pracowników i oddaje przeliczony czas pracy. Zakres pól, częstotliwość wymiany i sposób obsługi korekt ustala się na etapie wdrożenia — to najważniejsza część projektu, bo od niej zależy, czy dane naprawdę przestaną być przepisywane ręcznie.'
    ]},
    {h:'Wdrożenie: co warto przygotować', p:[
      'Przed wdrożeniem opłaca się spisać cztery rzeczy. Pierwsza: obowiązujące systemy czasu pracy i grupy pracowników, których dotyczą. Druga: zasady, które dziś funkcjonują zwyczajowo — zaliczanie przerw, tolerancje spóźnień, odpracowania, wyjścia prywatne. Trzecia: punkty rejestracji i ich przepustowość, czyli ile osób przechodzi przez dane przejście w godzinie szczytu. Czwarta: docelowy zakres integracji z systemem kadrowo-płacowym.',
      'Kolejność prac jest zwykle taka sama: analiza procesu, konfiguracja reguł i grafików, montaż urządzeń, testy na wybranej grupie, szkolenie kadr i przełożonych, uruchomienie produkcyjne, a po pierwszym pełnym okresie rozliczeniowym — przegląd wyjątków i korekta reguł. Wdrożenie kończy się nie w dniu montażu czytników, ale po pierwszym miesiącu zamkniętym w nowym trybie.'
    ]}
  ],
  kbLink:{ key:'sol-rcp', t:'RCP — Rejestracja czasu pracy', d:'Zobacz, jak ewidencja czasu pracy, harmonogramy, wnioski i integracje działają w naszym systemie.' }
},
{
  key:'wiedza-kd', tag:'Kontrola dostępu — baza wiedzy', isKb:true, kicker:'BAZA WIEDZY', kicker2:'Kontrola dostępu (KD) — kompendium',
  title1:'Kontrola dostępu (KD).', title2:'Strefy, uprawnienia, urządzenia i przepisy.',
  intro:'Opracowanie o kontroli dostępu: z czego składa się system KD, jak wygląda identyfikacja pracownika, jak projektuje się strefy i uprawnienia, jakie wymagania stawiają ewakuacja i ochrona danych osobowych oraz co daje wspólna baza z rejestracją czasu pracy.',
  ctaShort:'Umów analizę procesu', secondaryCta:'',
  checklist:['Strefy i uprawnienia','Urządzenia i zasilanie','Ewakuacja i RODO'],
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Planujesz kontrolę dostępu w obiekcie? Umów bezpłatną analizę — dobierzemy urządzenia do przejść i stref.',
  kbBody:[
    {h:'Czym jest kontrola dostępu', p:[
      'Kontrola dostępu (KD) to system, który rozstrzyga, kto i kiedy może wejść do wskazanej strefy. Decyzja opiera się na uprawnieniach przypisanych do konkretnego pracownika oraz na harmonogramie — ta sama karta może otwierać drzwi magazynu w godzinach zmiany i nie otwierać ich w nocy. Każde przejście, również odrzucone, zostaje zapisane w rejestrze zdarzeń.',
      'W praktyce kontrola dostępu zastępuje zestaw rozwiązań, które w firmach funkcjonują obok siebie: klucze, kody do zamków szyfrowych, listy osób upoważnionych i ustalenia przekazywane ustnie. Klucz nie ma historii i nie da się go odebrać zdalnie; karta ma jedno i drugie. Odebranie uprawnień pracownikowi, który odszedł z firmy, jest operacją w systemie, a nie wymianą zamków.',
      'Kontrola dostępu bywa też narzędziem porządkującym odpowiedzialność. Jeśli do strefy o podwyższonym ryzyku — rozdzielni, serwerowni, magazynu substancji chemicznych, pomieszczenia z dokumentacją osobową — mogą wejść wyłącznie osoby przeszkolone, ograniczenie techniczne jest prostsze do utrzymania niż procedura opierająca się na dyscyplinie.'
    ]},
    {h:'Z czego składa się system', p:[
      'Warstwa pierwsza to punkt identyfikacji: czytnik kart zbliżeniowych, terminal biometryczny, klawiatura PIN. Czytnik odczytuje identyfikator i przekazuje go dalej — sam nie podejmuje decyzji, dzięki czemu jego demontaż nie otwiera przejścia.',
      'Warstwa druga to kontroler, który przechowuje uprawnienia i harmonogramy oraz podejmuje decyzję o otwarciu. Kontroler pracuje również przy zerwanej łączności z serwerem, na własnej kopii uprawnień, i buforuje zdarzenia do czasu odzyskania połączenia. To on odpowiada za czas reakcji przejścia.',
      'Warstwa trzecia to element wykonawczy: zwora elektromagnetyczna, elektrozaczep, rygiel, napęd kołowrotu lub bramki. Dobór zależy od skrzydła drzwi, wymaganej siły trzymania i drogi ewakuacyjnej — na drodze ewakuacyjnej element musi zwalniać przejście przy zaniku napięcia albo po sygnale z systemu pożarowego.',
      'Warstwa czwarta to zasilanie. Zasilacz buforowy z akumulatorem utrzymuje przejścia w gotowości przy zaniku sieci; bez niego cały system przestaje działać w momencie, w którym jest najbardziej potrzebny. Do tego dochodzą przyciski wyjścia awaryjnego, czujniki otwarcia i okablowanie, którego trasę projektuje się razem z przejściami.'
    ]},
    {h:'Identyfikacja: karta, biometria, PIN, telefon', p:[
      'Karta zbliżeniowa pozostaje podstawą, bo jest tania, szybka i łatwa do wydania oraz zablokowania. Jej ograniczeniem jest przenoszalność — kartę można pożyczyć. Tam, gdzie ma to znaczenie, stosuje się drugi czynnik: PIN po odbiciu karty albo weryfikację biometryczną w wybranych punktach.',
      'Biometria wiąże uprawnienie z osobą, a nie z nośnikiem, i jest naturalnym rozwiązaniem w strefach o podwyższonym ryzyku. Jej wdrożenie wymaga jednak decyzji formalnych: dane biometryczne to szczególna kategoria danych osobowych, więc zakres przetwarzania, podstawa i okres przechowywania muszą być udokumentowane, a rozwiązanie ograniczone do przejść, w których faktycznie jest potrzebne.',
      'PIN sprawdza się jako metoda uzupełniająca i awaryjna, a identyfikator w telefonie — tam, gdzie liczy się wygoda gości i pracowników mobilnych. Niezależnie od metody uprawnienia opisuje ten sam model: pracownik, strefa, harmonogram, wyjątek.'
    ]},
    {h:'Strefy, uprawnienia i harmonogramy', p:[
      'Projekt kontroli dostępu zaczyna się od podziału obiektu na strefy, a nie od listy drzwi. Strefa to obszar o wspólnych zasadach wejścia: hala produkcyjna, magazyn wyrobów gotowych, część biurowa, serwerownia, laboratorium, archiwum. Dopiero do stref przypisuje się przejścia i grupy pracowników.',
      'Uprawnienie łączy grupę pracowników ze strefą i przedziałem czasu. Model grupowy jest jedyną wersją, która daje się utrzymać w dłuższym okresie — uprawnienia przypisywane pojedynczo rozjeżdżają się po kilku miesiącach zmian personalnych. Wyjątki, gości i uprawnienia czasowe obsługuje się osobno, z datą wygaśnięcia.',
      'Rejestr zdarzeń jest efektem ubocznym, który bywa najcenniejszy: pokazuje, kto był w strefie w momencie zdarzenia, czy próby wejścia bez uprawnień się powtarzają i czy przejścia są używane zgodnie z projektem. Na jego podstawie powstaje też lista obecności w strefie na potrzeby ewakuacji.'
    ]},
    {h:'Bezpieczeństwo, ewakuacja i przepisy', p:[
      'Kontrola dostępu nie może utrudniać ewakuacji. Przejścia na drogach ewakuacyjnych wyposaża się w elementy zwalniające blokadę po zaniku napięcia lub po sygnale z systemu sygnalizacji pożarowej, a także w przyciski awaryjnego otwarcia. Rozwiązania te uzgadnia się z projektem instalacji przeciwpożarowej obiektu — to warunek odbioru, a nie opcja.',
      'Drugi obszar formalny to dane osobowe. Rejestr przejść jest zbiorem danych o pracownikach, więc zakres zbieranych informacji, czas przechowywania i krąg osób z dostępem do rejestru należy określić i udokumentować. Przy biometrii wymagania są ostrzejsze i warto ograniczyć ją do stref, w których inne metody nie wystarczają.',
      'Trzeci obszar to procedury. System jest tak dobry, jak proces nadawania i odbierania uprawnień: zatrudnienie, zmiana stanowiska, odejście z firmy i wydanie karty gościowi muszą mieć przypisaną osobę odpowiedzialną. Bez tego po roku uprawnienia przestają odpowiadać rzeczywistej strukturze organizacji.'
    ]},
    {h:'Kontrola dostępu i rejestracja czasu pracy na jednej bazie', p:[
      'Kontrola dostępu i rejestracja czasu pracy operują na tej samej kartotece pracowników i na tych samych identyfikatorach, dlatego najczęściej wdraża się je razem. Jedno odbicie może otwierać przejście i jednocześnie rozpoczynać czas pracy, co eliminuje sytuację, w której pracownik jest na terenie zakładu, ale w ewidencji nie ma go wcale.',
      'Połączenie systemów porządkuje również rozliczenie grup pracujących w różnym trybie. Wejście na produkcję przez kołowrót z czytnikiem oznacza start pracy, a przejścia pracowników biurowych między strefami są dla ewidencji neutralne, bo rejestrują się w dedykowanych punktach. Reguły ustala się raz, a dane pozostają spójne.',
      'Z perspektywy utrzymania jedna baza oznacza jedno miejsce nadawania i odbierania uprawnień oraz jeden zestaw danych do audytu. Pracownik dodany raz jest widoczny w obu obszarach; odejście z firmy zamyka jednocześnie dostęp do stref i rejestrację czasu pracy.'
    ]},
    {h:'Wdrożenie i utrzymanie', p:[
      'Przed wdrożeniem warto przygotować cztery informacje: podział obiektu na strefy, wykaz przejść z rodzajem drzwi i wymaganą przepustowością, listę grup pracowników wraz z zasadami dostępu oraz wymagania ewakuacyjne wynikające z projektu obiektu. Te dane wystarczają, aby dobrać urządzenia i policzyć zakres prac.',
      'Utrzymanie systemu to przede wszystkim dyscyplina uprawnień i kontrola elementów mechanicznych: zamków, kołowrotów, samozamykaczy, akumulatorów w zasilaczach buforowych. Akumulator zużywa się po kilku latach i jest najczęstszą przyczyną awarii ujawniającej się dopiero przy zaniku zasilania, dlatego jego wymiana powinna mieć stały termin w harmonogramie przeglądów.'
    ]}
  ],
  kbLink:{ key:'sol-kd', t:'Kontrola dostępu BioSys', d:'Zobacz urządzenia, czytniki, kontrolery i zasilanie oraz zakres wdrożenia kontroli dostępu.' }
},
{
  key:'wiedza-tt', tag:'Zlecenia produkcyjne — baza wiedzy', isKb:true, kicker:'BAZA WIEDZY', kicker2:'Zlecenia produkcyjne — kompendium',
  title1:'Zlecenia produkcyjne.', title2:'Rejestracja czasu, wskaźniki i integracje z ERP.',
  intro:'Opracowanie o rozliczaniu zleceń produkcyjnych: czym różni się czas technologiczny od rzeczywistego, jak rejestruje się czynności w ramach zlecenia, jakimi urządzeniami i na jakich zasadach, jakie wskaźniki KRI i KPI można urealnić dzięki takim danym oraz jak system wymienia dane z ERP i MES.',
  ctaShort:'Umów demonstrację', secondaryCta:'',
  checklist:['Zlecenie, zadanie, czynność','Dane w trybie rzeczywistym','Wskaźniki KRI i KPI'],
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Pracujesz na zleceniach produkcyjnych lub projektach? Umów bezpłatną demonstrację Task Timer.',
  kbBody:[
    {h:'Czym są zlecenia produkcyjne i po co mierzyć ich czas', p:[
      'Zlecenie produkcyjne to jednostka pracy, którą można rozliczyć osobno: zamówienie klienta, partia produktu, projekt, naprawa. W przeciwieństwie do rejestracji czasu pracy, która liczy obecność pracownika w firmie, rozliczanie zleceń liczy, na co ten czas został realnie przeznaczony — które zlecenie, zadanie i czynność pracownik wykonywał w danej godzinie.',
      'Punktem odniesienia jest czas technologiczny — norma wyliczona dla danej czynności. Rejestrowany czas rzeczywisty rzadko jest z nią identyczny, a różnica między nimi wskazuje etapy, które w praktyce trwają dłużej niż zakładano i generują wyższe koszty, niż wynika to z kalkulacji.',
      'Potrzeba takiego pomiaru pojawia się przede wszystkim w produkcji niskoseryjnej i na indywidualne zamówienie, w firmach usługowych i projektowych rozliczających etapy, w logistyce magazynowej i serwisach prowadzących naprawy oraz w zakładach, którym brakuje danych o czasie trwania awarii i przestojów.'
    ]},
    {h:'Obiekt rozliczenia: zlecenie, zadanie, czynność', p:[
      'System rozlicza pracę na trzech poziomach: zlecenie jako całość, zadania lub etapy, z których się składa, oraz czynności wykonywane w ich ramach. Pracownik wybiera zlecenie, nad którym będzie pracował, a następnie rejestruje rozpoczęcie konkretnej czynności — to jedno działanie zastępuje kartę pracy wypełnianą ręcznie po zmianie.',
      'Rejestracja działa dla wielu osób jednocześnie, także z jednego terminala: kilku pracowników przy tym samym stanowisku może w tym samym czasie rejestrować zdarzenia w różnych zleceniach, bez kolizji danych.',
      'Osobną kategorią są zdarzenia specjalne — awaria, przestój produkcyjny, zdarzenie losowe — rejestrowane wraz z czasem trwania i miejscem wystąpienia. Bez takiego zapisu czas utracony rozkłada się niewidocznie po innych kategoriach i nie da się go później wyodrębnić.'
    ]},
    {h:'Urządzenia: terminal POS i stacja PC', p:[
      'Najczęstszym punktem rejestracji jest przemysłowy terminal POS — tam, gdzie pracownicy nie mają własnych komputerów, a z jednego urządzenia korzysta w ciągu zmiany wiele osób. Duży, czytelny wyświetlacz pokazuje opis aktualnej czynności; otwarcie kolejnego zadania automatycznie zamyka poprzednie, a bezczynność kończy się auto-wylogowaniem.',
      'Terminale POS są budowane do pracy w zapyleniu i niskich temperaturach hali produkcyjnej lub magazynu i do działania potrzebują tylko zasilania oraz podłączenia do sieci LAN. Tam, gdzie pracownicy mają dostęp do komputera — biuro projektowe, stanowisko administracyjne — rejestracja działa też ze stacji PC.'
    ]},
    {h:'Dane w trybie rzeczywistym', p:[
      'Zarejestrowany czas przelicza się na bieżąco: system prezentuje sumy częściowe dla poszczególnych zadań i łączny czas realizacji całego zlecenia, a lista aktywnych działań jest zawsze aktualna — widać, czym w danym momencie zajmuje się każdy pracownik.',
      'To pozwala porównywać zlecenia aktywne z zakończonymi i oceniać wydajność osób wykonujących podobne czynności na podstawie faktycznych danych, a nie deklaracji z karty pracy.'
    ]},
    {h:'Wskaźniki KRI i KPI oparte na czasie zleceń', p:[
      'Dane z rejestracji zasilają Wskaźniki Rezultatu (RI) i Wskaźniki Efektywności (PI), z których buduje się Kluczowe Wskaźniki Rezultatu (KRI) i Kluczowe Wskaźniki Efektywności (KPI) całego przedsiębiorstwa.',
      'Wśród wskaźników, które urealniają się dzięki takim danym, są: czas realizacji procesu produkcyjnego (Lead Time), efektywność czasu pracy (ECP), czas utracony w wyniku awarii, przestojów i wypadków przy pracy, efektywność wykorzystania maszyn (OEE) oraz średni czas naprawy (MTTR).',
      'Każdy z tych wskaźników jest tak dobry, jak dane wejściowe — szacunek zastąpiony zapisem z terminala zmienia go z orientacyjnej liczby w podstawę decyzji.'
    ]},
    {h:'Integracje z ERP i MES', p:[
      'Task Timer wymienia dane z większością programów klasy ERP dostępnych na polskim rynku — wśród zintegrowanych systemów są Comarch Optima, SAP, Enova365, WAPro ERP, Gratyfikant, Symfonia i TETA.',
      'Zlecenia zaczytane z systemu ERP nie muszą być rozpisywane drugi raz, a wymianę danych można przygotować jednokierunkowo albo obustronnie: system pobiera zlecenia, dokonuje pomiaru i obliczeń, a wynik odsyła zwrotnie do ERP lub MES.',
      'Raportowanie korzysta z kreatora raportów i tabeli przestawnej: układ i nazwy kolumn dopasowuje się do potrzeb odbiorcy, a dane przeliczają się „w locie” według przygotowanego szablonu.'
    ]},
    {h:'Wdrożenie: co przygotować przed startem', p:[
      'Przed wdrożeniem warto ustalić trzy rzeczy: listę zleceń, zadań i czynności, które mają być rozliczane, liczbę i rozmieszczenie punktów rejestracji (terminale POS, stacje PC) oraz zakres wymiany danych z systemem ERP lub MES, jeśli firma już z takiego korzysta.',
      'System można rozbudować o rejestrację czasu pracy (RCP) na tej samej bazie pracowników — jedno wdrożenie obsługuje wtedy zarówno obecność, jak i rozliczenie zleceń, bez duplikowania kartoteki osób.'
    ]}
  ],
  kbLink:{ key:'sol-tasktimer', t:'Task Timer BioSys', d:'Zobacz, jak rejestracja zleceń, czynności i zdarzeń specjalnych działa w naszym systemie.' }
},
{
  key:'wiedza-pobierz', tag:'Materiały do pobrania', isKb:true, kicker:'BAZA WIEDZY', kicker2:'Materiały do pobrania',
  title1:'Materiały do pobrania.', title2:'Wzory dokumentów czasu pracy, gotowe do wydruku.',
  intro:'Wzory, z których korzysta się na co dzień w kadrach i na produkcji: miesięczna karta ewidencji czasu pracy, karta pracy do rozliczenia zlecenia, wniosek urlopowy razem ze zgodą na wyjście prywatne oraz miesięczny harmonogram pracy. Każdy dokument ma format A4, komplet rubryk i podstawę prawną w stopce.',
  ctaShort:'Umów analizę procesu', secondaryCta:'',
  checklist:['Format A4, gotowe do druku','Bez zakładania konta','Komplet rubryk i kodów'],
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Wypełnianie tych kart zajmuje kadrom kilka godzin w miesiącu. Umów bezpłatną analizę procesu i zobacz, ile z tego przejmuje system.',
  dlTitle:'Cztery wzory, które zastępują arkusz prowadzony ręcznie',
  dlLead:'Pliki otwierają się w nowej karcie i drukują bezpośrednio z przeglądarki — bez rejestracji, bez podawania adresu e-mail. Każdy wzór ma logotyp BioSys z hasłem „Czas pod kontrolą” i przypis z podstawą prawną, więc możesz go od razu włożyć do dokumentacji.',
  dlNote:'Wzory pobierasz bez formularza. Rozbudowane poradniki wdrożeniowe — projekt stref kontroli dostępu, migracja danych z arkuszy, konfiguracja reguł rozliczania — wysyłamy na wskazany adres e-mail; poproś o nie w formularzu kontaktowym.',
  downloads:[
    {cat:'Czas pracy', name:'Ewidencja czasu pracy — miesięczna karta', format:'A4 poziomo · 1 strona',
      desc:'Karta jednego pracownika na cały miesiąc: godziny rozpoczęcia i zakończenia, przerwa, godziny przepracowane, nadgodziny, praca w nocy i kod nieobecności. Na dole suma miesięczna, legenda dwunastu kodów i miejsce na podpisy.',
      meta:['31 dni + suma','12 kodów nieobecności','art. 149 Kodeksu pracy'],
      href:'materialy/ewidencja-czasu-pracy-wzor.dc.html'},
    {cat:'Produkcja', name:'Karta pracy — rozliczenie zlecenia produkcyjnego', format:'A4 poziomo · 1 strona',
      desc:'Rozliczenie jednego zlecenia: osiemnaście wierszy na czynności i etapy, czas rzeczywisty obok technologicznego, kolumna odchylenia i ilość wykonana. Osobna tabela na zdarzenia specjalne — awarie, przestoje i zdarzenia losowe wraz z miejscem wystąpienia.',
      meta:['18 czynności','odchylenie od normy','awarie i przestoje'],
      href:'materialy/karta-pracy-zlecenie-wzor.dc.html'},
    {cat:'Kadry', name:'Wniosek urlopowy i zgoda na wyjście prywatne', format:'A4 pionowo · 1 strona',
      desc:'Dwa formularze na jednej stronie. Część A: wniosek o urlop z sześcioma rodzajami do zaznaczenia, terminem, liczbą dni i zastępstwem. Część B: wyjście prywatne z godziną wyjścia i powrotu oraz terminem odpracowania i przypisem o art. 151 § 2¹ Kodeksu pracy.',
      meta:['6 rodzajów urlopu','wyjście i odpracowanie','trzy podpisy'],
      href:'materialy/wniosek-urlopowy-wyjscie-prywatne-wzor.dc.html'},
    {cat:'Czas pracy', name:'Harmonogram (grafik) pracy — miesiąc', format:'A4 poziomo · 1 strona',
      desc:'Siatka piętnastu pracowników na dni od 1 do 31, z kolumnami planu godzin, normy i różnicy. Dziewięć oznaczeń zmian i nieobecności — od zmiany nocnej po delegację — oraz przypis o terminie przekazania rozkładu pracownikom.',
      meta:['15 pracowników × 31 dni','9 oznaczeń zmian','art. 129 § 3 Kodeksu pracy'],
      href:'materialy/harmonogram-pracy-wzor.dc.html'}
  ],
  kbBody:[
    {h:'Jak korzystać z tych wzorów', p:[
      'Każdy plik otwiera się jako gotowa strona A4 i drukuje wprost z przeglądarki — skrót Ctrl+P (na macOS Cmd+P) pozwala wydrukować kartę albo zapisać ją jako PDF. Wzory nie wymagają rejestracji ani podania adresu e-mail.',
      'Wypełniać można je odręcznie po wydruku albo elektronicznie, jeśli zapiszesz plik jako PDF i użyjesz narzędzia do adnotacji. Karty mają rubryki opisane tak, jak nazywa je Kodeks pracy i rozporządzenie o dokumentacji pracowniczej, więc dane z nich przenosi się do listy płac bez tłumaczenia pojęć.',
      'Wzory są neutralne i pasują do firmy o dowolnej wielkości. Jeśli w Twoim regulaminie pracy funkcjonują własne kody nieobecności albo dodatkowe rubryki, dopisz je w kolumnie „Uwagi” — struktura karty tego nie psuje.'
    ]},
    {h:'Kiedy wzór przestaje wystarczać', p:[
      'Papierowa karta i arkusz kalkulacyjny sprawdzają się do kilku osób. Powyżej tego progu zaczyna dominować praca administracyjna: przepisywanie godzin, dopytywanie o brakujące wpisy, korekty po zamknięciu miesiąca i ustalanie, kto wpisał dane za kogo.',
      'Drugi sygnał to niezgodności, których nie da się rozstrzygnąć. Papierowa lista obecności nie zapisuje, kto i kiedy dokonał wpisu, więc spór o spóźnienie albo o wyjście prywatne kończy się słowem przeciwko słowu. Zapis z rejestratora ma znacznik czasu i nie podlega uzupełnianiu po fakcie.',
      'Trzeci to skala danych. Przy kilkunastu zleceniach dziennie ręczne karty pracy nie dają odpowiedzi, ile realnie zajmuje etap produkcji i który z nich odbiega od normy — bez porównania czasu technologicznego z rzeczywistym kalkulacja kosztów opiera się na szacunku.'
    ]},
    {h:'Pytania i odpowiedzi o dokumentację czasu pracy', p:[
      'Czy ewidencja czasu pracy musi być prowadzona w konkretnej formie? Nie. Przepisy nie narzucają formy — ewidencja może być papierowa albo elektroniczna. Określony jest natomiast zakres danych, który musi zawierać, oraz obowiązek jej prowadzenia dla każdego pracownika (art. 149 Kodeksu pracy).',
      'Czy pracownik podpisuje kartę ewidencji? Przepisy tego nie wymagają. Wielu pracodawców zbiera podpis jako potwierdzenie zapoznania się z rozliczeniem miesiąca i dlatego w naszym wzorze jest na niego miejsce — obok podpisu przełożonego.',
      'Kiedy trzeba przekazać pracownikom harmonogram? Rozkład czasu pracy przekazuje się co najmniej tydzień przed rozpoczęciem okresu, na jaki został sporządzony; okres ten nie może być krótszy niż miesiąc (art. 129 § 3 Kodeksu pracy).',
      'Czy odpracowanie wyjścia prywatnego to nadgodziny? Nie, jeżeli wyjście zostało udzielone na pisemny wniosek pracownika — czas odpracowania nie stanowi wtedy pracy w godzinach nadliczbowych (art. 151 § 2¹ Kodeksu pracy). Odpracowanie nie może jednak naruszać prawa do odpoczynku dobowego i tygodniowego.',
      'Jak długo przechowuje się dokumentację czasu pracy? Dokumentacja pracownicza, w tym ewidencja czasu pracy, jest przechowywana przez 10 lat licząc od końca roku kalendarzowego, w którym stosunek pracy ustał — dla pracowników zatrudnionych od 1 stycznia 2019 roku.'
    ]}
  ],
  kbLink:{ key:'sol-rcp', t:'RCP — Rejestracja czasu pracy', d:'Zobacz, jak te same dane powstają automatycznie: ewidencja, grafiki, wnioski i raporty w jednym systemie.' }
},
{
  key:'sol-rcp', tag:'RCP — Rejestracja czasu pracy', isSolution:true, kicker:'ROZWIĄZANIA BIOSYS',
  kicker2:'RCP — Rejestracja czasu pracy',
  title1:'Rejestracja czasu pracy.', title2:'Etatomierz — jeden system do rejestracji i rozliczania czasu pracy.',
  intro:'Etatomierz to autorskie oprogramowanie BioSys do rejestracji i rozliczania czasu pracy. Zbiera zdarzenia z czytników, terminali i aplikacji, przelicza je według obowiązujących zasad i przygotowuje gotową ewidencję czasu pracy dla kadr i płac.',
  solTeaser:'Ewidencja obecności, grafiki, nadgodziny, wnioski i raporty w jednym systemie. Zgodność z Kodeksem Pracy i gotowe integracje kadrowo-płacowe.',
  ctaShort:'Umów prezentację', secondaryCta:'',
  checklist:['Ewidencja czasu pracy gotowa dla kadr','Grafiki, wnioski i nieobecności w jednym miejscu','Integracje z systemami kadrowo-płacowymi'],
  productLead:'Zamień papierowe listy obecności i arkusze prowadzone ręcznie na jedną ewidencję czasu pracy. Zyskaj pewność, kto, kiedy i ile godzin przepracował.',
  productBenefits:[
    {t:'Ewidencja bez ręcznych korekt', d:'Zdarzenia z czytników, terminali i aplikacji przeliczają się według reguł obowiązujących w firmie.'},
    {t:'Intuicyjna obsługa na co dzień', d:'Kierownik, kadry i zarząd widzą dokładnie ten zakres danych, który ich dotyczy.'},
    {t:'Zamknięcie miesiąca w kilkanaście minut', d:'Gotowe raporty ewidencji dla całej załogi, przekazywane wprost do kadr i płac.'},
    {t:'Zgodność z Kodeksem Pracy', d:'Nadgodziny, dodatki i nieobecności rozliczane zgodnie z przepisami'},
    {t:'RCP w chmurze (SaaS)', d:'Bez własnych serwerów i bez kosztów utrzymania infrastruktury — płacisz abonament.'},
    {t:'RCP lokalnie — zakup', d:'System kupujesz na własność i uruchamiasz na swojej infrastrukturze.'}
  ],
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz zobaczyć Etatomierz na danych ze swojej firmy? Umów prezentację.',
  solFeatures:[
    {t:'Rejestracja wieloźródłowa',d:'Czytniki kartowe lub PIN, aplikacja WEB — wszystkie źródła trafiają do jednej ewidencji.'},
    {t:'Uprawnienia i role',d:'Osobne widoki dla operatorów systemu: kierowników, kadr, zarządu. Każdy widzi dokładnie ten zakres danych, który go dotyczy.'},
    {t:'Grafiki pracy i nieobecności',d:'Planowanie zmian dla pracowników i grup, planowanie absencji, porównanie planu z normą'},
    {t:'Ewidencja czasu pracy',d:'Przeliczanie zarejestrowanych zdarzeń w oparciu o grafik i ustalone reguły na gotowe raporty ewidencji.'},
    {t:'Wnioski elektroniczne',d:'Wnioskowanie o dowolny rodzaj absencji, skorygowanie błędnego/brakującego zdarzenia, wnioski o odbiór godzin i inne.'},
    {t:'Raporty dla wszystkich operatorów',d:'Listy obecności, raporty wykonania, raporty niezgodności, raporty absencji.'}
  ],
  solBullets:['Firm pracujących w systemie: podstawowym, równoważnym, zadaniowym lub łączących to wszystko w ramach organizacji','Firm nieposiadających jednego źródła danych o czasie pracy, rozliczających go w wielu plikach Excel','Organizacji z kilkoma lokalizacjami i potrzebą centralnej ewidencji','Firm pracujących w systemie 3-zmianowym, ruchu ciągłym, systemie 4-brygadowym','Firm rozliczających pracowników według różnych reguł i zasad','Firm zatrudniających pracowników stałych i tymczasowych (APT)'],
  specs:[
    {k:'Zakres',v:'rejestracja, absencje, grafiki, wnioski, raporty'},
    {k:'Udostępnienie',v:'Chmura (SaaS) — bez własnych serwerów\nOn-premise (Lokalnie) — na własnej infrastrukturze'},
    {k:'Zgodność',v:'Kodeks pracy, RODO'},
    {k:'Integracje',v:'systemy kadrowo-płacowe i ERP'}
  ],
  solPainsTitle:'Jeżeli mierzysz się choćby z jednym z tych wyzwań:',
  painsKicker:'SYTUACJE I ROZWIĄZANIA',
  painsTitlePre:'Jeżeli mierzysz się choćby z ', painsTitleHi:'jednym z tych wyzwań:', painsLead:'',
  solPains:[
    {t:'Papierowe listy obecności nie dają pewności, że zebrane dane są realne',d:'Papierowa lista obecności nie eliminuje ryzyka wpisywania danych za inne osoby oraz późniejszego uzupełniania zapisów.',s:'Elektroniczny rejestrator rejestruje dokładny czas co do sekundy. Zero ręcznego dopisywania i fałszowania godzin.'},
    {t:'W Twoim obecnym systemie pracownicy wymieniają się kartami',d:'Samo odbicie karty nie gwarantuje, że rejestracji dokonał właściwy pracownik.',s:'Moduł foto-rejestracji. Płacisz wyłącznie za obecność osoby, która faktycznie zarejestrowała swoją kartę.'},
    {t:'Spóźnienia i wcześniejsze wyjścia dezorganizują pracę zespołu',d:'Nikt nie weryfikuje faktycznych godzin przyjścia i wyjścia, co sprzyja nadużyciom i wpisywaniu na listę nieprawdziwych danych.',s:'System automatycznie wyłapuje każde spóźnienie i wcześniejsze wyjście. Masz twarde dane do egzekwowania regulaminu i sprawiedliwego traktowania reszty załogi.'},
    {t:'Brak kontroli nad wyjściami prywatnymi poza firmę',d:'Nie wiesz, kto, kiedy i na jak długo opuszcza firmę w czasie pracy.',s:'Dedykowany przycisk „Wyjście prywatne / Papieros” na czytniku. Wyjścia przestają być bezpłatnym czasem pracy, a zespół widzi, że zasady są równe dla wszystkich.'},
    {t:'Przerwy są zbyt częste i zbyt długie.',d:'Nikt nie mierzy, ile razy pracownik wychodzi na przerwę ani ile łącznie na nich spędza czasu.',s:'Automatyczny pomiar czasu trwania przerw. System sam pilnuje limitów i flaguje przekroczenia, oszczędzając Twoje pieniądze.'},
    {t:'Papierowe wnioski angażują dużo czasu a pytania „ile pozostało mi urlopu?” to codzienność',d:'Ręczne składanie wniosków oraz brak bieżącej informacji o dostępnym urlopie zabierają czas pracownikom i osobom zajmującym się ich obsługą.',s:'Samoobsługowy portal pracowniczy. Każdy sprawdzi swój bilans urlopowy w swoim profilu w kilka chwil, bez angażowania kadr.'},
    {t:'Ręczne przygotowanie raportów czasu pracy „na już”',d:'Zestawienie obecności trzeba przygotować ręcznie, gdy jest potrzebne natychmiast.',s:'Jedno kliknięcie i masz gotowy, pełny raport. Aktualne dane o obecnościach i czasie pracy dostajesz na ekranie tu i teraz.'},
    {t:'Dane o czasie pracy są przepisywane ręcznie do systemu kadrowo-płacowego',d:'Godziny z listy papierowej są przepisywane ręcznie do programu kadrowego. To zabiera mnóstwo czasu i generuje pomyłki.',s:'Automatyczny eksport danych do Twojego programu kadrowego (Optima, Enova, Symfonia i inne). Zero ręcznego przepisywania cyfr z kartek.'},
    {t:'Rozliczenie czasu pracy pochłania początek każdego miesiąca.',d:'Ręczne sprawdzanie i rozliczanie godzin całej załogi zajmuje kadrom wiele godzin i odciąga je od innych ważnych zadań.',s:'Gotowy raport czasu pracy w kilkanaście minut dla całej załogi. System na bieżąco zlicza czas, nadgodziny, noce i spóźnienia. Kadry wreszcie zamykają miesiąc bez stresu.'},
    {t:'Twój obecny system nie spełnia Twoich oczekiwań',d:'Obecne narzędzie nie obsługuje Twoich reguł rozliczania, brakuje w nim raportów albo wsparcia producenta.',s:'Przejęcie wdrożenia od podstaw: analiza obecnej konfiguracji, migracja danych i uruchomienie systemu dopasowanego do Twoich reguł. Zachowujesz historię, zyskujesz opiekę producenta.'}
  ],
  painsOutro:{t:'…to pora skończyć z rozproszonymi danymi i postawić na jeden system od BioSys.',d:''},
  solElementsLead:'Jesteśmy producentem systemu RCP. Wdrażamy kompletne rozwiązanie, które porządkuje, automatyzuje i usprawnia aktualne procesy związane z rozliczaniem czasu pracy.',
  solElements:[
    {t:'Oprogramowanie do zarządzania',d:'Nowoczesne i intuicyjne narzędzie do zarządzania czasem pracy wraz z pełnym raportowaniem.'},
    {t:'Niezawodne czytniki',d:'Urządzenia dopasowane do warunków biurowych, przemysłowych i zewnętrznych.'},
    {t:'Kompleksowe uruchomienie',d:'Sprawna instalacja, konfiguracja narzędzia i przeszkolenie z obsługi.'},
    {t:'Stała opieka',d:'Wsparcie dostępne na każdym etapie korzystania z systemu.'}
  ],
  solWhyLead:'Nie sprzedajemy tylko oprogramowania i czytników – układamy cały proces.',
  solWhyLead2:'Diagnozujemy wąskie gardła w Twojej firmie i wdrażamy sprawdzone rozwiązania do planowania, rejestracji i rozliczania czasu pracy. Nasz zespół wdrożeniowy przenosi sprawdzone praktyki z ponad tysiąca naszych klientów wprost do Twojej firmy, tnąc zbędne koszty i chaos.',
  solWhyLead3:'Sprawdź, co zyskasz dzięki wdrożeniu BioSys.',
  solWhy:[
    {t:'Mniejsze ryzyko',d:'Zanim wdrożymy system, weryfikujemy Twoje założenia. Dzięki temu nie „przepalisz” budżetu na rozwiązanie, które nie działa.'},
    {t:'Pewność efektu',d:'Nasz zespół realizował już ponad 1500 wdrożeń. Działamy kompleksowo: od sprzętu po szkolenie, bez przerzucania odpowiedzialności na innych.'},
    {t:'Spokój na lata',d:'Nasze wsparcie nie kończy się po starcie systemu. Masz dostęp do ekspertów i opcję wsparcia VIP – bez kolejek i z szybką reakcją.'},
    {t:'Partnerstwo, nie transakcja',d:'Nie sprzedajemy „na siłę”. Jeśli nie mamy pewności, że system zrealizuje cele wdrożeniowe nie podejmujemy się współpracy.'}
  ],
  solQuote:'„Wdrażamy tylko przemyślane rozwiązania, dlatego podejmujemy się współpracy tylko wtedy, gdy jesteśmy przekonani, że realnie poprawią sytuację Klienta.”',
  solQuoteAuthor:'Karol Jura — członek zarządu BioSys ds. wdrożeń systemów',
  solStatsNote:'Nasze produkty kierujemy do firm zatrudniających od 20 pracowników.',
  solStats:[
    {v:'1 600+',l:'zakończonych wdrożeń'},
    {v:'50 000',l:'godzin wsparcia i opieki rocznie świadczymy naszym Klientom'},
    {v:'5 000',l:'kierowników codziennie zarządza zespołami z wykorzystaniem naszych systemów'},
    {v:'18 000',l:'urządzeń codziennie pracuje na sukces naszych Klientów'},
    {v:'650 000',l:'pracowników każdego dnia rejestruje czas pracy w naszych systemach'}
  ],
  solPerson:{
    name:'Krzysztof Górski', role:'Konsultant systemów RCP, KD, ZADANIA',
    bio:'Łączy wieloletnie doświadczenie konsultanta z praktycznym podejściem do potrzeb biznesu. Zrealizował kilkaset inicjatyw doradczych dla firm o różnej wielkości i z wszystkich branż (m.in. Kross, Blachy Pruszyński, FoodCare, Siemens, LX Pantos, Eveline Cosmetics, Porsche, Bombardier, Graal).',
    bio2:'Kluczowym obszarem ekspertyzy jest integracja i wymiana danych — tak, by osadzone w procesach klientów przynosiły wymierne korzyści biznesowe.',
    tel:'+48 791 030 770', telHref:'tel:+48791030770',
    mail:'krzysztof.gorski@biosys.pl', mailHref:'mailto:krzysztof.gorski@biosys.pl',
    note:'Sprawdź dostępność bezpłatnych testów systemu.'
  }
},
{
  key:'sol-kd', tag:'KD — Kontrola dostępu', isSolution:true, kicker:'ROZWIĄZANIA BIOSYS',
  kicker2:'KD — Kontrola dostępu',
  title1:'Kontrola dostępu.', title2:'Bezpieczeństwo skrojone na miarę Twoich potrzeb.',
  checklist:['Karty niemożliwe do skopiowania','Podgląd budynku LIVE','Wspólna baza z Czasem Pracy (RCP)','Szyfrowana i całkowicie bezpieczna transmisja','Koncesja MSWiA – certyfikowani eksperci i pewne wdrożenie'],
  intro:'Niezależnie od tego, czy zarządzasz biurem, siecią magazynów, czy zakładem produkcyjnym — System BioSys działa jak cyfrowy stróż Twojej firmy.\nZamiast pęków łatwych do zgubienia kluczy, dajesz ludziom jeden nowoczesny identyfikator: kartę, brelok, telefon lub szybki odczyt twarzy.\nTo centralny mózg budynku: spina biura, bramy i serwerownie w jeden bezpieczny ekosystem, wie, kto stoi przed drzwiami lub szlabanem i w ułamku sekundy decyduje, czy go wpuścić — Ty ustalasz zasady, a system sam pilnuje porządku.',
  kdGains:[
    {t:'Święty spokój i pełna kontrola ruchu', lead:'Pełna kontrola stref:', d:'Każdy pracownik i gość wchodzi tylko tam, gdzie ma uprawnienia. System czuwa 24/7 i rejestruje każde przyłożenie karty oraz próby forsowania drzwi.', icon:'M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z M9.2 12.2l2 2 3.6-3.9'},
    {t:'Natychmiastowe blokowanie zgubionych kart', lead:'Natychmiastowe unieważnianie dostępu:', d:'Zgubiona karta lub koniec umowy? Jeden klik w systemie wycofuje uprawnienia w ułamku sekundy – bez wymiany zamków i kosztownych ślusarzy.', icon:'M3 6.5h18v11H3z M3 10.5h18 M2.5 3.5l19 17'},
    {t:'Automatyczne raporty ewakuacyjne na 1 kliknięcie', lead:'Automatyczne listy ewakuacyjne PPOŻ:', d:'W razie alarmu system w czasie rzeczywistym generuje dokładną listę obecnych na obiekcie, drastycznie ułatwiając akcję służbom ratunkowym.', icon:'M15 4h4.5v16H15 M3.5 12h8.5 M9 9l3 3-3 3'},
    {t:'Jeden identyfikator do wszystkiego (KD + RCP)', lead:'Synergia KD z Rejestracją Czasu Pracy:', d:'Ta sama karta służy do otwierania drzwi i rozliczania godzin pracy. Jedna baza danych oznacza zero przepisywania danych i zbędnej biurokracji.', icon:'M3 6.5h12v11H3z M3 10.5h12 M18.5 8.5v4l2.5 1.5'},
    {t:'Najbezpieczniejszy system na rynku', lead:'Certyfikowane bezpieczeństwo (Grade 1 do 4):', d:'Szyfrowanie AES-128 i zaawansowane karty Mifare DESFire uniemożliwiają sklonowanie identyfikatora i zabezpieczają kluczowe strefy przed wyciekiem danych.', icon:'M6 11h12v9.5H6z M9 11V8.2a3 3 0 016 0V11 M12 15v2.5'},
    {t:'Wirtualna Mapa LIVE dla ochrony i zarządu', lead:'Wirtualna Mapa LIVE:', d:'Ochrona i zarząd zyskują interaktywny podgląd budynku na żywo – z możliwością zdalnego otwierania przejść i sprawdzania ścieżek ruchu pracowników.', icon:'M3 5.5h18v11.5H3z M9.5 20.5h5 M12 17v3.5 M8 11.5l2.5 2.5 5-5'},
    {t:'Oszczędność na polisie ubezpieczeniowej budynku', lead:'Niższa składka za ubezpieczenie:', d:'Wdrożenie certyfikowanego systemu Kontroli Dostępu o wysokim poziomie bezpieczeństwa spełnia rygorystyczne wymogi ubezpieczycieli, co przekłada się na bezpośrednią obniżkę corocznych kosztów polisy firmy.', icon:'M3.5 8l5.5 5.5 4-4L20.5 17 M20.5 12.5V17h-4.5'}
  ],
  kdFor:[
    {n:'01', t:'Biura', c:'#2563EB', ct:'#1D4ED8', tint:'rgba(37,99,235,.07)', line:'rgba(37,99,235,.22)', icon:'M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3', tag:'Wygoda i prostota', need:'Wygodna obsługa pracowników i gości, sprawne nadawanie kart, prosty program.', sol:'Karta lub telefon zamiast kluczy, nadanie uprawnień w kilka sekund i rejestr wejść gości bez papierowej książki.'},
    {n:'02', t:'Magazyny i centra logistyczne', c:'#0FA9B4', ct:'#0D8577', tint:'rgba(15,169,180,.09)', line:'rgba(15,169,180,.28)', icon:'M3 8.5 12 4l9 4.5v7L12 20l-9-4.5zM3 8.5 12 13l9-4.5M12 13v7', tag:'Obsada i strefy', need:'Szybka weryfikacja obsady, kontrola dostępu do stref magazynowych, integracja z czasem pracy.', sol:'Jeden identyfikator do drzwi, bramek i rozliczenia godzin oraz podgląd obsady na hali w czasie rzeczywistym.'},
    {n:'03', t:'Zakłady produkcyjne', c:'#B45309', ct:'#B45309', tint:'rgba(245,158,11,.11)', line:'rgba(245,158,11,.32)', icon:'M3 21h18M4 21V11l5 3V11l5 3V8l6 4v9M8 17h2M14 17h3', tag:'Ciągłość i PPOŻ', need:'Ochrona linii technologicznych, automatyczne listy ewakuacyjne PPOŻ, elastyczne uprawnienia.', sol:'Strefy dostępu przypisane do brygad i stanowisk, a w razie alarmu lista obecnych na obiekcie generowana automatycznie.'},
    {n:'04', t:'Placówki medyczne, laboratoria i obiekty strategiczne', c:'#0284C7', ct:'#0369A1', tint:'rgba(56,189,248,.12)', line:'rgba(56,189,248,.34)', icon:'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6zM12 9.5v5M9.5 12h5', tag:'Maksymalna ochrona', need:'Bezkompromisowa ochrona danych osobowych, leków i badań R&D przed podsłuchem i kopiowaniem.', sol:'Szyfrowana transmisja i karty odporne na klonowanie, pełny audyt każdego wejścia do apteki, serwerowni czy laboratorium.'}
  ],
  kdAreas:[
    {num:'01', t:'Strefa wjazdu i strefa zewnętrzna', sub:'Obwód obiektu', badge:'PIERWSZA LINIA OBRONY', img:'assets/m/kd-strefa-wjazdu-01.webp',
     icon:'M3 20V9.5l9-5.5 9 5.5V20 M3 20h18 M9 20v-5h6v5',
     d:'Brama wjazdowa i ogrodzenie to pierwsza linia obrony Twojego zakładu. System automatycznie decyduje, kto wjeżdża i wchodzi na teren firmy.',
     items:[
       {t:'Szlabany i bramy wjazdowe:', d:'automatyczne otwieranie dla aut pracowników, dostawców i gości – wygodnie, bez wysiadania z samochodu (np. przez odczyt tablic rejestracyjnych lub karty dalekiego zasięgu).'},
       {t:'Wysokie kołowroty i bramki obrotowe:', d:'bezpieczne, jednopunktowe wejścia dla pieszych przy portierni i na ogrodzeniu obwodowym.'},
       {t:'Doki przeładunkowe i bramy segmentowe:', d:'dostęp do stref magazynowych wyłącznie dla uprawnionych kierowców i operatorów wózków.'}
     ]},
    {num:'02', t:'Wejścia budynkowe i ruch pieszy', sub:'Recepcje i ciągi komunikacyjne', badge:'PŁYNNY RUCH', img:'assets/m/kd-wejscia-budynkowe-02.webp',
     icon:'M15 4h4.5v16H15 M3.5 12h8.5 M9 9l3 3-3 3',
     d:'Płynne przemieszczanie się pracowników przy jednoczesnej blokadzie dla osób nieupoważnionych.',
     items:[
       {t:'Tradycyjne drzwi i przejścia biurowe:', d:'zamki elektromagnetyczne, otwarcie kartą, brelokiem lub telefonem – połączone z rejestracją wejść i wyjść.'},
       {t:'Niskie kołowroty z wygrodzeniami:', d:'płynna weryfikacja i organizacja ruchu pracowników w holach głównych i na wejściach do biur.'},
       {t:'Punkty rejestracji czasu pracy (RCP):', d:'montaż wolnostojących lub wiszących rejestratorów czasowych w strefie wejścia albo pełna integracja funkcji rejestracji bezpośrednio w kołowrotach i drzwiach.'},
       {t:'Obsługa wind:', d:'zabezpieczenie dostępu do wind – korzystanie z dźwigów osobowych wyłącznie dla uprawnionych użytkowników.'},
       {t:'Palarnie i strefy wypoczynku:', d:'autoryzacja wejść do wyznaczonych stref relaksu (często połączona z RCP do monitorowania czasu przerw).'}
     ]},
    {num:'03', t:'Strefa produkcyjna, magazynowa i BHP', sub:'Procedury i higiena', badge:'BEZPIECZEŃSTWO PROCESU', img:'assets/m/kd-strefa-produkcyjna-03.webp',
     icon:'M3 20h18 M5 20V9l7-5 7 5v11 M9.5 20v-6h5v6',
     d:'Połączenie bezpieczeństwa mienia z rygorystycznymi procedurami higienicznymi i operacyjnymi.',
     items:[
       {t:'Śluzy osobowe i strefy czyste:', d:'kaskadowy dostęp do pomieszczeń produkcyjnych, w których wejście wymaga przejścia przez wyznaczoną ścieżkę.'},
       {t:'Integracja ze stacjami dezynfekcji:', d:'kołowrót lub drzwi odblokowują się dopiero po prawidłowym zdezynfekowaniu rąk przez pracownika (kluczowe na produkcji spożywczej i farmaceutycznej).'},
       {t:'Rygorystyczny podział na strefę czystą i brudną:', d:'koniec z migracją pracowników i mieszaniem ciągów komunikacyjnych na produkcji. Karty dostępu blokują przejście personelu z obszarów brudnych (np. magazyn surowca, przyjęcie towaru) do stref czystych (np. konfekcjonowanie, strefa pakowania) bez przejścia wymaganego procesu higienicznego.'},
       {t:'Wejścia na hale produkcyjne i magazynowe:', d:'zabezpieczenie stref z maszynami, surowcami i wyrobami gotowymi przed osobami bez przeszkolenia BHP.'}
     ]},
    {num:'04', t:'Pomieszczenia krytyczne i specjalne', sub:'Wysoki rygor bezpieczeństwa', badge:'NAJWYŻSZY RYGOR', img:'assets/m/kd-pomieszczenia-krytyczne-04.webp',
     icon:'M6 11h12v9.5H6z M9 11V8.2a3 3 0 016 0V11 M12 15v2.5',
     d:'Miejsca, które wymagają najwyższego poziomu ochrony danych, mienia i tajemnic handlowych.',
     items:[
       {t:'Serwerownie i węzły IT:', d:'rygorystyczna kontrola dostępu dla działu IT z pełną historią wejść i szyfrowaniem (np. Grade 3/4).'},
       {t:'Strefy R&D, laboratoria i depozyty:', d:'zabezpieczenie pomieszczeń z prototypami, dokumentami, gotówką lub odczynnikami.'},
       {t:'Archiwa i pomieszczenia z dokumentacją:', d:'rygorystyczna kontrola dostępu do stref z aktami, umowami i danymi wrażliwymi. System rejestruje każde wejście oraz próbę otwarcia drzwi przez osoby nieupoważnione (pełna zgodność z RODO i wewnętrznymi procedurami).'},
       {t:'Szatnie pracownicze:', d:'kontrola wejść do szatni i stref socjalnych – dostęp wyłącznie dla uprawnionych pracowników (np. z podziałem na płeć, zmiany czy wymogi stref higienicznych).'}
     ]}
  ],
  kdLadder:[
    {n:'Dopasuj bezpieczeństwo do swojej firmy', l:'Certyfikaty i standardy', sub:'Norma PN-EN 60839-11-1', badge:'GWARANCJA BEZPIECZEŃSTWA',
     title:'Dopasuj bezpieczeństwo do swojej firmy',
     d:'Ten sam system obsłuży małe biuro i obiekt o krytycznym znaczeniu. Różnica leży w poziomie zabezpieczeń, który wybierasz — i możesz go podnieść w dowolnym momencie.',
     items:[
       {t:'Certyfikat Najwyższej Klasy (Norma Grade 4):', d:'nasz system spełnia rygorystyczne normy europejskie PN-EN 60839-11-1 stosowane w obiektach o krytycznym znaczeniu.'},
       {t:'Bankowy standard szyfrowania (AES-128 & TLS 1.3):', d:'transmisja danych od karty po serwer jest zabezpieczona dokładnie tak samo, jak bankowość elektroniczna.'},
       {t:'Karty niemożliwe do sklonowania (Mifare DESFire & OSDP v2.2):', d:'zapomnij o podrabianiu przepustek – nowoczesne czytniki i szyfrowane karty uniemożliwiają kopiowanie sygnału.'}
     ]},
    {n:'Poziom podstawowy', l:'Wygoda i niski koszt', sub:'Typowe obiekty: małe biura, sklepy, lokale usługowe', badge:'POZIOM PODSTAWOWY',
     title:'Poziom podstawowy — kontrola przejść w podstawowym zakresie',
     d:'Rozwiązanie dla obiektów o niskim ryzyku, gdzie celem jest uporządkowanie dostępu i eliminacja kluczy mechanicznych. Szybki montaż, prosta obsługa i najniższy koszt wdrożenia.',
     items:[
       {t:'Dane na karcie:', d:'brak szyfrowania'},
       {t:'Karta ↔ czytnik:', d:'brak szyfrowania'},
       {t:'Czytnik ↔ kontroler:', d:'brak szyfrowania'},
       {t:'Kontroler ↔ serwer KD (sieć LAN):', d:'brak szyfrowania'}
     ]},
    {n:'Poziom średni', l:'Ochrona magazynów i produkcji', sub:'Typowe obiekty: duże biura, magazyny, hale produkcyjne oraz serwerownie, placówki medyczne', badge:'POZIOM ŚREDNI',
     title:'Poziom średni — optymalne połączenie wygody i podwyższonej ochrony',
     d:'Najczęściej wybierany poziom, który porządkuje ruch w całej firmie — od biur i stref czasowych po obszary krytyczne, takie jak produkcja, magazyny wysokiego składowania czy serwerownie. Zabezpiecza strefy o wysokim ryzyku i dane osobowe przed nieuprawnionym wejściem, zachowując pełną historię zdarzeń, prostą obsługę i atrakcyjną cenę.',
     items:[
       {t:'Dane na karcie:', d:'szyfrowane (karty Mifare Sectors)'},
       {t:'Karta ↔ czytnik:', d:'szyfrowane'},
       {t:'Czytnik ↔ kontroler:', d:'brak szyfrowania'},
       {t:'Kontroler ↔ serwer KD (sieć LAN):', d:'szyfrowane (SSL, TLS 1.2 i TLS 1.3)'}
     ]},
    {n:'Poziom zaawansowany', l:'Bezkompromisowa ochrona infrastruktury krytycznej', sub:'Typowe obiekty: R&D, depozyty, laboratoria, obiekty strategiczne', badge:'POZIOM ZAAWANSOWANY',
     title:'Poziom zaawansowany — ochrona obiektów krytycznych. Pełne szyfrowanie transmisji od karty po serwer.',
     d:'Najwyższy poziom przewidziany normą. Pełne szyfrowanie na każdym etapie — od karty, przez czytnik i kontroler, aż po serwer — bez słabych ogniw w łańcuchu transmisji.',
     items:[
       {t:'Dane na karcie:', d:'szyfrowane (karty Mifare DESFire AES-128)'},
       {t:'Karta ↔ czytnik:', d:'szyfrowane (AES-128)'},
       {t:'Czytnik ↔ kontroler:', d:'szyfrowane (OSDP v2.2, AES-128)'},
       {t:'Kontroler ↔ serwer KD (sieć LAN):', d:'szyfrowane (SSL, TLS 1.2 i TLS 1.3)'}
     ]}
  ],
  kdMapPoints:[
    {t:'Szybki podgląd', d:'Zobacz na graficznej mapie obiektu, ile osób przebywa w poszczególnych strefach.'},
    {t:'Ścieżki przejścia', d:'Jednym kliknięciem sprawdź historię ruchu wybranego pracownika.'},
    {t:'Zdalne otwieranie', d:'Otwieraj drzwi lub zwalniaj blokady bezpośrednio z poziomu aplikacji (np. dla gości czy kurierów).'}
  ],
  kdZones:[
    {zone:'Produkcja — hala A', n:'128', state:'Dostęp otwarty', color:'#0FA9B4'},
    {zone:'Magazyn wysoki', n:'34', state:'Dostęp otwarty', color:'#0FA9B4'},
    {zone:'Serwerownia', n:'2', state:'Strefa ograniczona', color:'#38BDF8'},
    {zone:'Laboratorium R&D', n:'6', state:'Grade 4 · śluza', color:'#38BDF8'}
  ],
  kdRcpPoints:[
    {t:'Jedna edycja', d:'Nowy pracownik, zmiana stanowiska czy odejście z firmy — wpisujesz zmianę raz, a system automatycznie aktualizuje uprawnienia i rejestr czasu pracy.'},
    {t:'Jeden identyfikator', d:'Pracownik używa tej samej karty do wejścia do budynku i rejestracji godzin pracy.'},
    {t:'Automatyczne listy obecności', d:'Zawsze wiesz, kto faktycznie przebywa na terenie zakładu.'}
  ],
  kdSecurity:[
    {t:'Szyfrowanie End-to-End (AES-128)', d:'Kompletne bezpieczeństwo danych na każdym etapie: od zbliżenia karty, przez czytnik i kontroler, aż po serwer. Brak słabych ogniw w łańcuchu transmisji.'},
    {t:'Najwyższa Klasa Bezpieczeństwa (Grade 4)', d:'Zgodność z wyśrubowaną normą europejską PN-EN 60839-11-1 (Grade 4) oznacza ochronę przeznaczoną dla obiektów o najwyższym ryzyku i krytycznym znaczeniu.'},
    {t:'Odporność na Klonowanie Kart', d:'Zastosowanie technologii Mifare DESFire z kluczami szyfrującymi skutecznie uniemożliwia nieautoryzowane kopiowanie przepustek i dostęp osób niepowołanych.'},
    {t:'Bankowy Standard Szyfrowania', d:'Komunikacja serwera ze stacjami roboczymi zabezpieczona protokołami TLS 1.2 i TLS 1.3 — tymi samymi, które chronią bankowość elektroniczną.'}
  ],
  kdAudience:[
    {t:'Biura i obiekty wielonajemcze', need:'Wygodna obsługa pracowników i gości, sprawne nadawanie kart, prosty program.', level:'Grade 1–2', levelNote:'Standardowa kontrola dostępu, nastawiona na wygodę i niski koszt.'},
    {t:'Magazyny i centra logistyczne', need:'Szybka weryfikacja obsady, kontrola dostępu do stref magazynowych, integracja z czasem pracy.', level:'Grade 2–3', levelNote:'Optymalne połączenie bezpieczeństwa i wydajności.'},
    {t:'Zakłady produkcyjne i strefy przemysłowe', need:'Ochrona linii technologicznych, automatyczne listy ewakuacyjne PPOŻ, elastyczne uprawnienia.', level:'Grade 2–3', levelNote:'Z opcją podwyższonej ochrony dla stref kluczowych.'},
    {t:'Placówki medyczne, laboratoria i obiekty strategiczne', need:'Bezkompromisowa ochrona danych osobowych, leków i badań R&D przed podsłuchem i kopiowaniem.', level:'Grade 3–4', levelNote:'Pełne szyfrowanie end-to-end (AES-128, Mifare DESFire).'}
  ],
  solTeaser:'Zarządzanie wejściami do budynków i stref newralgicznych, scenariusze przejść i pełna historia zdarzeń — zintegrowane z RCP.',
  ctaShort:'Skonsultuj bezpłatnie swój obiekt', secondaryCta:'',
  productLead:'Zamień tradycyjne zamki na nowoczesne karty, breloki lub telefon. Zyskaj pełną kontrolę nad tym, kto, kiedy i gdzie może wchodzić na teren Twojego obiektu.',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  securityTitle:'Strefy pod kontrolą', securitySubtitle:'Uprawnienia, harmonogramy przejść i pełna historia zdarzeń.',
  badges:['✓ Strefy i harmonogramy','✓ Historia zdarzeń','✓ Wspólna baza z RCP'],
  ctaLabel:'Zaplanuj kontrolę dostępu w swoim obiekcie — dobierzemy urządzenia i konfigurację.',
  solFeatures:[
    {t:'Architektura i weryfikacja',d:'Licencja wielostanowiskowa — z programu może korzystać wielu operatorów. System obsługuje nieograniczoną liczbę przejść sterowanych centralnie, weryfikuje pracownika metodą zbliżeniową lub biometryczną i automatycznie pobiera zdarzenia do bazy danych.'},
    {t:'Strefy i uprawnienia',d:'Uprawnienia nadaje się dowolnie — indywidualnie, według grupy lub według stanowiska. Schematy uprawnień dostępowych można przenieść na nowego pracownika bez ręcznego dodawania przejść, a osobno ustawia się dostęp czasowy i dostęp awaryjny.'},
    {t:'Wirtualna mapa LIVE',d:'Podgląd w czasie rzeczywistym na wszystkie strefy objęte kontrolą dostępu: weryfikacja liczby osób w pomieszczeniu lub strefie, ścieżka przejścia pracownika po terenie zakładu oraz zarządzanie przejściami z poziomu aplikacji, w tym zdalne zwalnianie blokady.'},
    {t:'Specjalne tryby przejścia',d:'Tryb śluzy uniemożliwia otwarcie kilku drzwi jednocześnie, tryb antipassback rejestruje wyjście tylko po wejściu, tryb pierwszego otwarcia wymaga autoryzacji osoby uprawnionej, a tryb otwarcia grupowego — autoryzacji określonej liczby osób.'},
    {t:'Raporty i powiadomienia',d:'Dowolna liczba raportów w oparciu o kafelkowy interfejs, eksport do plików xls, xlsx, csv, txt, pdf, png, jpg, html i innych oraz powiadomienia e-mail do administratora, na przykład o zbyt długim otwarciu drzwi, próbie nieautoryzowanego otwarcia lub braku synchronizacji z kontrolerem.'},
    {t:'Integracja z RCP',d:'Jedna baza pracowników i jedna karta dla obu systemów. Zatrudnienie, zmianę stanowiska i odejście pracownika obsługuje się raz, bez rozbieżności między kadrami a ochroną. Lista osób obecnych na terenie jest gotowa w każdej chwili, również do ewakuacji.'}
  ],
  solChips:['Najwyższy standard bezpieczeństwa','Szyfrowanie danych','Integracja PPOŻ','Ewakuacja'],
  solPoints:[
    {t:'Szyfrowanie End-to-End (AES-128)', d:'Kompletne bezpieczeństwo danych na każdym etapie: od zbliżenia karty, przez czytnik i kontroler, aż po serwer. Brak słabych ogniw w łańcuchu transmisji.'},
    {t:'Najwyższa Klasa Bezpieczeństwa (Grade 4)', d:'Zgodność z wyśrubowaną normą europejską PN-EN 60839-11-1 (Grade 4) oznacza ochronę przeznaczoną dla obiektów o najwyższym ryzyku i krytycznym znaczeniu.'},
    {t:'Odporność na Klonowanie Kart', d:'Zastosowanie technologii Mifare DESFire z kluczami szyfrującymi skutecznie uniemożliwia nieautoryzowane kopiowanie przepustek i dostęp osób niepowołanych.'},
    {t:'Bankowy Standard Szyfrowania', d:'Komunikacja serwera ze stacjami roboczymi zabezpieczona protokołami TLS 1.2 i TLS 1.3 — tymi samymi, które chronią bankowość elektroniczną.'}
  ],
  solBullets:['Zakłady produkcyjne ze strefami o ograniczonym dostępie','Magazyny i centra logistyczne','Obiekty biurowe z recepcją i wieloma najemcami','Placówki ochrony zdrowia i laboratoria'],
  productBenefits:[
    {t:'Wygoda bez pęku kluczy', d:'Drzwi, bramy i szlabany otwierasz jedną kartą, telefonem lub odczytem twarzy.'},
    {t:'Intuicyjna obsługa na co dzień', d:'Zaawansowana technologia w środku, a na wierzchu prosty interfejs, z którym poradzi sobie każdy.'},
    {t:'Zgubiona karta?', d:'Cofasz dostęp jednym kliknięciem – bez wymiany zamków i kosztów ślusarza.'},
    {t:'Bezpieczna ewakuacja PPOŻ', d:'Automatyczna lista obecnych w budynku w czasie rzeczywistym'}
  ]
},
{
  key:'sol-tasktimer', tag:'Task Timer — rozliczanie produkcji', isSolution:true, kicker:'ROZWIĄZANIA BIOSYS',
  kicker2:'Rozliczenie produkcji — TaskTimer',
  title1:'Task Timer —', title2:'system, dzięki któremu będziesz sprawnie zarządzał.',
  intro:'TaskTimer to system dla firm, które działają w oparciu o zlecenia produkcyjne lub indywidualne projekty. System umożliwia rejestrację i kontrolę czasu wykonania czynności lub zadań w ramach całych zleceń: pracownik wybiera zlecenie nad którym będzie pracować, a następnie rejestruje rozpoczęcie czynności w ramach zlecenia. Czas rejestrowany przez pracowników system przelicza w trybie rzeczywistym: oblicza sumy częściowe dla zadań/czynności, prezentuje łączny czas realizacji dla całego zlecenia i udostępnia raporty z wykonanej pracy.',
  solTeaser:'System dla firm pracujących na zleceniach produkcyjnych i projektach. Rejestracja czasu czynności w ramach zlecenia, przeliczanie w trybie rzeczywistym i raporty z wykonanej pracy.',
  ctaShort:'Umów demonstrację', secondaryCta:'',
  checklist:['Rejestracja czasu zleceń i czynności','Przeliczanie w trybie rzeczywistym','Integracje z systemami ERP/BI'],
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Porozmawiajmy o tym jak możemy dopasować system Task Timer do Twojego biznesu.',
  productLead:'Pracownik wybiera zlecenie i rejestruje czynność na terminalu POS lub stacji PC. System przelicza czas w trybie rzeczywistym i pokazuje, ile realnie zajmuje każdy etap zlecenia.',
  productBenefits:[
    {t:'Czas zlecenia bez ręcznych zapisów', d:'Rozpoczęcie i zakończenie czynności rejestruje pracownik — bez kart pracy wypełnianych po zmianie.'},
    {t:'Sumy w trybie rzeczywistym', d:'Sumy częściowe dla zadań i łączny czas realizacji całego zlecenia widoczne na żywo.'},
    {t:'Dane do kalkulacji kosztów', d:'Porównanie czasu technologicznego z rzeczywistym wskazuje etapy, które generują najwyższe koszty.'},
    {t:'Wymiana danych z ERP i MES', d:'Zlecenia zaczytujesz z systemu ERP, a wyniki pomiaru przekazujesz zwrotnie — jednokierunkowo lub obustronnie.'}
  ],
  ttFor:[
    {n:'01', t:'Produkcja na indywidualne zamówienie', tag:'Zlecenia jednostkowe', c:'#2563EB', ct:'#1D4ED8', tint:'rgba(37,99,235,.07)', line:'rgba(37,99,235,.22)',
      icon:'M4 21V10l5-3v3l5-3v14M14 21V7l6-3v17M3 21h18',
      need:'Produkcja niskoseryjna — każde zlecenie ma inny przebieg, więc czas technologiczny rzadko zgadza się z rzeczywistym.',
      sol:'Rejestracja czynności w ramach zlecenia i porównanie czasu technologicznego z rzeczywistym dla każdego etapu.'},
    {n:'02', t:'Firmy usługowe i projektowe', tag:'Projekty i etapy', c:'#0FA9B4', ct:'#0D8577', tint:'rgba(15,169,180,.09)', line:'rgba(15,169,180,.28)',
      icon:'M9 4h6v3H9zM7 7h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM9 12h6M9 16h4',
      need:'Praca rozliczana projektami: trudno wskazać, ile godzin pochłonął konkretny etap i kto nad nim pracował.',
      sol:'Sumy częściowe dla zadań i łączny czas projektu, z podziałem na pracowników i czynności.'},
    {n:'03', t:'Logistyka magazynowa i serwis', tag:'Naprawy i magazyn', c:'#B45309', ct:'#B45309', tint:'rgba(245,158,11,.10)', line:'rgba(245,158,11,.30)',
      icon:'M3 7h11v9H3zM14 10h4l3 3v3h-7M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
      need:'Indywidualne naprawy i praca magazynowa wykonywane równolegle przez wiele osób na wspólnym stanowisku.',
      sol:'Jednoczesna rejestracja zdarzeń dla wielu osób w wielu zleceniach, także z jednego terminala POS.'},
    {n:'04', t:'Zakłady z awariami i przestojami', tag:'Utrzymanie ruchu', c:'#0284C7', ct:'#0369A1', tint:'rgba(56,189,248,.10)', line:'rgba(56,189,248,.32)',
      icon:'M12 4l8 15H4l8-15zM12 10v4M12 16.5v.5',
      need:'Brak informacji o rzeczywistym czasie trwania awarii i przestojów oraz o miejscu ich wystąpienia.',
      sol:'Rejestracja zdarzeń specjalnych — awarii, przestojów i zdarzeń losowych — wraz z czasem i miejscem wystąpienia.'}
  ],
  solFeatures:[
    {t:'Czas wykonania zlecenia',d:'Jaki czas został poświęcony przez pracowników na powierzone im zadania.'},
    {t:'Wydajność pracowników',d:'Jak prezentuje się wydajność pracy poszczególnych osób.'},
    {t:'Postęp zadań',d:'Jak wygląda postęp w realizacji aktywnych zleceń i projektów.'},
    {t:'Porównanie czasu',d:'Jakie są różnice między czasem technologicznym, a rzeczywistym (zarejestrowanym).'},
    {t:'Praca wielu osób jednocześnie',d:'System pozwala na jednoczesną rejestrację zdarzeń dla wielu osób w ramach wielu zleceń.'},
    {t:'Zdarzenia specjalne',d:'Możliwość rejestracji zdarzeń specjalnych: awaria, przestoje produkcyjne, zdarzenia losowe itp.'}
  ],
  painsKicker:'KORZYŚCI WDROŻENIA', painsTitlePre:'System jako narzędzie ', painsTitleHi:'wspierające procesy', painsTitlePost:' w firmie.',
  painsLead:'System dostarcza rzeczywiste dane o czasie pracy i realizacji zleceń. Na ich podstawie łatwiej policzyć i urealnić wskaźniki, którymi mierzysz firmę.',
  painTableHead:['KRI','RI','PI','KPI'],
  painTableRows:[],
  painKpisBadge:'Wskaźniki i pomiar', painKpisTitle:'Urealnione wskaźniki',
  painKpisLead:'Rzetelne dane z rejestracji czasu zleceń pozwalają urealnić wyliczenia następujących wskaźników:',
  painKpis:[
    'Czas realizacji procesu produkcyjnego (Lead Time)',
    'Efektywność czasu pracy (ECP)',
    'Czas utracony w wyniku awarii, przestojów produkcyjnych, wypadków przy pracy',
    'Efektywność Wykorzystania Maszyn (OEE)',
    'Średni czas naprawy (MTTR)'
  ],
  painGroups:[
    {iconKey:'chart',title:'Informacje, dane statystyczne, wiedza, aby działać lepiej',sub:'Dane i wiedza',intro:'System zbiera i przetwarza dane na temat faktycznego czasu, który został wykorzystany na wykonanie zlecenia. Ułatwia to realną ocenę wydajność produkcji, pozwala poznać faktyczną ilość godzin, którą przedsiębiorstwo przeznacza na realizacje projektów.',leadIn:'Wybrane dane dostępne w systemie pozwalają zobaczyć:',bullets:[
      'dokładny czas rzeczywisty (z uwzględnieniem czynników wpływających na cały proces) każdego etapu zlecenia,',
      'porównanie aktywnych zleceń z archiwalnymi,',
      'wydajność wykorzystania czasu pracy poszczególnych osób,',
      'czym aktualnie zajmuje się pracownik, jaką pracę wykonywał w danym dniu, ile jest aktywnych zleceń,',
      'etapy pracy nad projektem.'
    ]},
    {iconKey:'cost',title:'Redukcja kosztów',sub:'Koszty',intro:'Zyskujesz informacje, które pozwalają kalkulować koszty zgodnie z zasadą dzisiejszy czas rzeczywisty staje się czasem technologicznym jutro. Zebrane dane dają możliwość wskazania obszarów produkcji, które są szczególnie czasochłonne oraz wyodrębnienie etapów procesu, które generują najwyższe koszty.',leadIn:'System:',bullets:[
      'wskaże czas pracy przy poszczególnym zleceniu (również dla tych niestandardowych) co ułatwi oszacowanie kosztów,',
      'pozwoli na redukcję stanowisk administracyjnych (elektroniczne zbieranie i przetwarzanie informacji),',
      'daje możliwość integracji z programem zewnętrznym (typu ERP i MES),',
      'skraca proces rejestracji czynności dzięki zastosowaniu nowoczesnych terminali POS,',
      'eliminuje potrzebę sporządzania tradycyjnej ewidencji przez pracowników.'
    ]},
    {iconKey:'screen',title:'Nowoczesne podejście do projektów',sub:'Organizacja pracy',intro:'Wdrożenie systemu pozwala na stworzenie elektronicznej ewidencji i całkowite wyeliminowanie papierowej dokumentacji.',leadIn:'Przedsiębiorca zyskuje m.in.:',bullets:[
      'rozległą bazę danych na temat czasu realizacji zleceń oraz łatwy dostęp do informacji archiwalnych,',
      'rozbudowany moduł raportowania,',
      'możliwość rozbudowania aplikacji o dodatkowe komponenty np. system RCP.'
    ]}
  ],
  solBullets:['Firmy produkcyjne produkujące na indywidualne zamówienie (produkcja niskoseryjna)','Firmy usługowe działające w oparciu o projekty','Firmy logistyczne: logistyka magazynowa, serwisy prowadzące indywidualne naprawy','Firmy produkcyjne, którym brakuje informacji o rzeczywistym czasie trwania awarii i przestojów oraz miejscu ich wystąpienia'],
  specs:[
    {k:'Obiekt rozliczenia',v:'zlecenie, zadanie, czynność'},
    {k:'Rejestracja',v:'przemysłowe urządzenia POS lub stacja PC'},
    {k:'Aktualność danych',v:'tryb rzeczywisty, sumy częściowe i łączny czas zlecenia'},
    {k:'Integracje',v:'Dostępne integracje z systemami ERP/BI'},
    {k:'Wymiana danych',v:'jednokierunkowa lub obustronna z ERP i MES'},
    {k:'Raporty',v:'kreator raportów i tabela przestawna'}
  ],
  seoTitle:'Sprawdź korzyści wdrożenia systemu Task Timer',
  seoLead:'Rejestruj, mierz i analizuj. Poniżej trzy obszary, w których dane z systemu Task Timer zmieniają sposób prowadzenia produkcji, oraz sposób pracy z urządzeniami, integracjami i raportami.',
  seoBlocks:[
    {t:'Kontrola stanu zleceń', d:'Informacje na temat rzeczywistego czasu poświęcanego na wykonanie produktu, zlecenia i czynności — dane dostępne na „żywo”, zawsze aktualna lista prowadzonych działań i realna ocena efektywności etapów produkcyjnych. Analityka ilościowa w powiązaniu z realnym czasem dla zlecenia, produktu i czynności pozwala ocenić pracowników wykonujących podobne czynności oraz rejestrować awarie i przestoje produkcyjne.'},
    {t:'Kontrola kosztów', d:'Porównanie czasu technologicznego z rzeczywistym i ponowna kalkulacja kosztów przedsiębiorstwa na nowych danych. Identyfikacja obszarów szczególnie czasochłonnych, analiza etapów produkcji pod kątem kosztów i redukcja prac administracyjnych — system zbierze konieczne dane. Praca na terminalu lub stacji PC klienta oznacza niski koszt uruchomienia, a łatwy proces logowania i obsługi minimalizuje koszt szkolenia załogi.'},
    {t:'Optymalizacja procesów', d:'Elektroniczna ewidencja zleceń eliminuje dokumentację papierową, a baza danych o czasie wykorzystywanym na produkcji daje łatwy dostęp do danych archiwalnych. System można zintegrować z programem zewnętrznym typu ERP czy MES i wymieniać dane z systemami wewnątrz firmy. Raportowanie opiera się na danych występujących w systemie — pracowniku, zleceniu i czynności — z wykorzystaniem tabeli przestawnej.'},
    {t:'Wskaźniki KRI i KPI', d:'System rejestruje dane wykorzystywane przy opracowywaniu Wskaźników Rezultatu (RI) i Wskaźników Efektywności (PI), a w efekcie Kluczowych Wskaźników Rezultatu (KRI) i Efektywności (KPI). Rzeczywiste dane urealniają między innymi: czas realizacji procesu produkcyjnego (Lead Time), efektywność czasu pracy (ECP), czas utracony w wyniku awarii, przestojów i wypadków przy pracy, efektywność wykorzystania maszyn (OEE) oraz średni czas naprawy (MTTR).'},
    {t:'Pracuj na dowolnym urządzeniu', d:'Najczęściej wybieraną metodą rejestracji czasu zleceń jest korzystanie z przemysłowych urządzeń POS — stosuje się je tam, gdzie pracownicy nie mają dedykowanych komputerów, a z jednego urządzenia korzysta wiele osób jednocześnie. Duży, czytelny wyświetlacz z opisami czynności pozwala sprawdzić aktualnie realizowane zadanie, otwarcie kolejnego zamyka poprzednie, a auto-wylogowanie działa przy bezczynności. Urządzenia POS pracują w zapyleniu i niskich temperaturach, a do pracy wymagają tylko prądu i kabla sieciowego LAN. Do systemu można też zalogować się ze stacji roboczej PC.'},
    {t:'Wymieniaj dane pomiędzy systemami', d:'Task Timer wymienia dane z większością dostępnych na rynku programów klasy ERP — integrowaliśmy go z Comarch Optima, SAP, Enova365, WAPro ERP, Gratyfikant, Symfonia i TETA. Integracja pozwala zaczytać zlecenia wprowadzone do systemu ERP, więc osoba pracująca na systemie zadaniowym nie musi rozpisywać ich raz jeszcze, a informacje raz wprowadzone do głównego systemu zachowują spójność między działami. Wymianę można przygotować jednokierunkowo albo obustronnie: zaczytać dane, dokonać pomiaru czasu i obliczeń, a gotowe dane przekazać zwrotnie do MES, ERP lub innych systemów.'},
    {t:'Twórz dopasowane raporty', d:'Kreator raportów wspomaga dostosowywanie zestawień: raporty zgodne z Twoimi wymaganiami, dowolna zmiana układu i nazw kolumn dla widoczności danych, zestawienia w oparciu o tabelę przestawną oraz dane przeliczane „w locie” i dopasowane do przygotowanego szablonu.'}
  ]
},
{
  key:'skd-rejestratory-czasu', tag:'Rejestratory czasu pracy', isSkdChild:true, skdGroup:'root', kicker:'URZĄDZENIA BIOSYS',
  kicker2:'Rejestratory czasu pracy',
  title1:'Rejestratory', title2:'czasu pracy.',
  intro:'Urządzenie przy wejściu, na którym pracownik zaznacza początek i koniec pracy oraz przerwy. Zamiast podpisu na liście zostaje zapis, z którego kadry rozliczają miesiąc. Do wyboru są wersje z klawiaturą i z ekranem dotykowym, do biura i do hali.',
  checklist:['Zamiast papierowej listy obecności','Odczyt kartą, brelokiem lub kodem','Wersje do biura i do hali'],
  ctaShort:'Zapytaj o rejestratory', secondaryKey:'skd-kontrolery', secondaryCta:'Zobacz kontrolery',
  heroVariant:'photo', hasForm:false, hasCtaBand:true,
  ctaLabel:'Powiedz nam, ile osób pracuje w firmie i gdzie ma stanąć urządzenie — dobierzemy wersję i pokażemy ją na żywo.',
  gallery:[
    {img:RES('rcp400','assets/rcp-400.webp'), cap:'Wersja odporna na pył i wilgoć'},
    {img:RES('rcp300','assets/rcp-300.webp'), cap:'Wersja z wysokim ekranem'},
    {img:RES('rcp200','assets/rcp-200.webp'), cap:'Wersja z ekranem dotykowym'},
    {img:RES('rcp100','assets/rcp-100.webp'), cap:'Wersja z klawiaturą — do hali i magazynu'}
  ],
  galleryTitle:'Jak to wygląda',
  galleryLead:'Kilka wersji urządzeń, które montujemy przy wejściach. Konkretny model dobieramy pod firmę — dostępność zmienia się razem z ofertą naszych dostawców.',
  seoTitle:'Rejestrator czasu pracy — co daje firmie',
  seoLead:'Rejestrator zamienia obecność w zapis, którego nikt nie musi przepisywać. Pracownik zaznacza wejście, wyjście i przerwę, a kadry pracują na gotowych danych zamiast zbierać podpisy i poprawiać listy.',
  seoBlocks:[
    {t:'Koniec papierowych list', d:'Obecność zapisuje się w momencie odbicia, więc nie trzeba pilnować podpisów ani przepisywać godzin do arkusza. Kierownik widzi, kto jest na zmianie, a kadry zamykają miesiąc na danych, które już są w systemie.'},
    {t:'Przerwy rozliczane jednakowo', d:'Urządzenie rozdziela pracę i przerwę, a w wersjach z ekranem także wyjście służbowe i prywatne. Zasady są takie same dla wszystkich, więc rozliczenie nie budzi wątpliwości w zespole.'},
    {t:'Działa też bez sieci', d:'Jeśli zabraknie łączności z serwerem, urządzenie zapamiętuje odbicia i przekazuje je po jej odzyskaniu. Praca zakładu nie zatrzymuje się z powodu awarii sieci.'},
    {t:'Dobór i montaż', d:'Wersję dobieramy do miejsca: biuro, hala produkcyjna, wejście na zewnątrz. Montaż, uruchomienie i szkolenie prowadzi nasz zespół, a po wdrożeniu zostaje opieka serwisowa.'}
  ]
},
{
  key:'skd-kontrolery', tag:'Kontrolery dostępu', isSkdChild:true, skdGroup:'root', kicker:'URZĄDZENIA BIOSYS',
  kicker2:'Kontrolery dostępu',
  title1:'Kontrolery', title2:'dostępu.',
  intro:'Element, który decyduje, czy przejście się otworzy. Kontroler sprawdza uprawnienie, zwalnia drzwi, bramkę albo kołowrót i zapisuje każde wejście. Działa też wtedy, gdy zabraknie łączności z serwerem.',
  checklist:['Decyzja o otwarciu w jednym miejscu','Historia wszystkich wejść','Drzwi, bramki i kołowroty'],
  ctaShort:'Zapytaj o kontrolery', secondaryKey:'skd-czytniki-kart', secondaryCta:'Zobacz identyfikatory',
  heroVariant:'photo', hasForm:false, hasCtaBand:true,
  ctaLabel:'Napisz, ile przejść chcesz objąć kontrolą i jak są dziś otwierane — zaproponujemy rozwiązanie.',
  gallery:[
    {img:RES('brus1','assets/brus1.webp'), cap:'Bramka w recepcji'},
    {img:RES('ts1000','assets/ts1000.webp'), cap:'Przejście jednoosobowe w zakładzie'},
    {img:RES('bw1','assets/bw-1.webp'), cap:'Przejście pełnej wysokości'}
  ],
  galleryTitle:'Przejścia, którymi steruje kontroler',
  galleryLead:'Te same zasady dostępu obsługują drzwi biurowe, bramki w recepcji i przejścia na terenie zakładu. Wykonanie dobieramy do obiektu — sprzęt kompletujemy u różnych dostawców.',
  seoTitle:'Kontrola dostępu — kto i gdzie może wejść',
  seoLead:'Kontroler zamienia uprawnienia na konkretne otwarcie przejścia. Uprawnienia nadaje się w jednym miejscu, a system pamięta, kto i kiedy przeszedł — bez prowadzenia zeszytu wydanych kluczy.',
  seoBlocks:[
    {t:'Uprawnienia w jednym miejscu', d:'Dostęp do stref nadaje się i odbiera w systemie, bez wymiany zamków i dorabiania kluczy. Zmiana obowiązuje od razu na wszystkich przejściach, także po godzinach pracy.'},
    {t:'Historia wejść', d:'Każde przejście zostaje zapisane, więc w razie pytań widać, kto był w danym miejscu i o której. To samo odbicie może służyć rozliczeniu czasu pracy.'},
    {t:'Bezpieczeństwo i ewakuacja', d:'Przejścia zwalniają się przy zaniku zasilania i na sygnał z systemu przeciwpożarowego, a wyjścia awaryjne pozostają drożne niezależnie od uprawnień.'},
    {t:'Praca bez łączności', d:'Kontroler pamięta uprawnienia i zapisuje zdarzenia także wtedy, gdy serwer jest niedostępny. Po odzyskaniu łączności dane trafiają do systemu.'}
  ]
},
{
  key:'skd-czytniki-kart', tag:'Identyfikatory zbliżeniowe', isSkdChild:true, skdGroup:'root', kicker:'URZĄDZENIA BIOSYS',
  kicker2:'Identyfikatory zbliżeniowe',
  title1:'Identyfikatory', title2:'zbliżeniowe.',
  intro:'To, czym pracownik potwierdza, kim jest — karta, brelok, opaska albo naklejka. Wystarczy zbliżyć identyfikator do urządzenia przy wejściu, żeby zarejestrować obecność i otworzyć przejście, do którego pracownik ma uprawnienie.',
  checklist:['Karta, brelok, opaska lub naklejka','Nadruk z imieniem i zdjęciem','Jeden identyfikator do wszystkich przejść'],
  ctaShort:'Zapytaj o identyfikatory', secondaryKey:'skd-kontrolery', secondaryCta:'Zobacz kontrolery',
  heroVariant:'photo', hasForm:false, hasCtaBand:true,
  ctaLabel:'Powiedz, w jakich warunkach pracują Twoi pracownicy — dobierzemy identyfikator, który się u nich sprawdzi.',
  gallery:[
    {img:RES('rfkarta','assets/rfid-karta.webp'), cap:'Karta z możliwością nadruku'},
    {img:RES('rfbrelok','assets/rfid-brelok.webp'), cap:'Brelok na kluczach'},
    {img:RES('rfopaska','assets/rfid-opaska.webp'), cap:'Opaska na rękę — do pracy w rękawicach'},
    {img:RES('rfnaklejka','assets/m/rfid-naklejka.webp'), cap:'Naklejka na telefon lub kask'}
  ],
  galleryTitle:'Czym pracownik się identyfikuje',
  galleryLead:'Identyfikator dobiera się do warunków pracy — karta w biurze, brelok lub opaska tam, gdzie karta szybko się niszczy. Każdy ma własny numer, więc rozpoznanie jest jednoznaczne.',
  seoTitle:'Identyfikatory zbliżeniowe dla pracowników',
  seoLead:'Identyfikacja pracownika to podstawa i rozliczania czasu pracy, i kontroli dostępu. Jeden identyfikator obsługuje wejście na teren, drzwi do stref i rejestrację obecności.',
  seoBlocks:[
    {t:'Jeden identyfikator, wiele zastosowań', d:'Ta sama karta otwiera przejścia, do których pracownik ma uprawnienie, i służy do rejestrowania obecności. Nie trzeba nosić kilku identyfikatorów ani pamiętać kodu.'},
    {t:'Dobór do warunków pracy', d:'W biurze wystarcza karta, którą można opisać nadrukiem. W hali i na budowie lepiej sprawdza się brelok albo opaska — nie niszczą się w kieszeni odzieży roboczej i są pod ręką w rękawicach.'},
    {t:'Zgubiony identyfikator', d:'Utracony identyfikator blokuje się w systemie i wydaje nowy. Nie ma potrzeby wymiany zamków ani odbierania kluczy pozostałym pracownikom.'},
    {t:'Widoczny identyfikator firmowy', d:'Kartę można opisać nadrukiem z imieniem, stanowiskiem i zdjęciem, więc pełni też rolę identyfikatora noszonego w widocznym miejscu — przydaje się przy odwiedzających i pracach na terenie klienta.'}
  ]
},
{
  key:'skd-infokiosk', tag:'Panele dotykowe (POS)', isSkdChild:true, skdGroup:'root', kicker:'URZĄDZENIA BIOSYS',
  kicker2:'Panele dotykowe (POS)',
  title1:'Panele dotykowe (POS) —', title2:'samoobsługa pracownika.',
  intro:'Stanowisko dla pracowników, którzy nie mają służbowego komputera. Po zbliżeniu karty widzą stan urlopu, przepracowane godziny i grafik zmian, mogą złożyć wniosek i wydrukować potwierdzenie.',
  checklist:['Urlop i godziny bez pytania kadr','Wniosek składany na miejscu','Ekran dotykowy przy hali lub szatni'],
  ctaShort:'Zapytaj o panele dotykowe', secondaryKey:'skd-rejestratory-czasu', secondaryCta:'Zobacz rejestratory',
  heroVariant:'none', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz odciążyć kadry z pytań o urlopy i nadgodziny? Zapytaj o panele dotykowe.',

  seoTitle:'Panel samoobsługowy dla pracowników',
  seoLead:'Większość pytań do kadr dotyczy tego samego: ile zostało urlopu, ile wyszło nadgodzin, jaki jest grafik. Panel odpowiada na nie od razu, bez maila i bez wizyty w biurze.',
  seoBlocks:[
    {t:'Mniej pytań do kadr', d:'Pracownik sprawdza swoje dane sam, w drodze na zmianę lub po niej. Dział kadr przestaje odpowiadać na te same pytania kilkadziesiąt razy w miesiącu.'},
    {t:'Wnioski składane na miejscu', d:'Urlop, wyjście służbowe czy korekta zdarzenia trafiają do systemu z panelu i idą dalej do akceptacji przełożonego. Nic nie ginie na kartce.'},
    {t:'Dla zespołów bez komputerów', d:'Panel stawia się tam, gdzie pracownicy naprawdę bywają: przy wejściu do hali, w szatni, przy portierni. Obsługa polega na zbliżeniu karty i dotknięciu ekranu.'},
    {t:'Potwierdzenie na papierze', d:'Jeśli pracownik potrzebuje wydruku — na przykład potwierdzenia salda urlopu — panel może go wydać na miejscu.'}
  ]
},
{
  key:'skd-kolowroty', tag:'Bramki obrotowe (kołowroty)', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Bramki obrotowe — kołowroty',
  title1:'Bramki obrotowe', title2:'(kołowroty).',
  intro:'Kołowroty trójramienne przepuszczają dokładnie jedną osobę na jedną autoryzację. Ramiona zwalniają się po zbliżeniu karty, wpisaniu kodu PIN lub odczycie odcisku palca, a każde przejście trafia jednocześnie do kontroli dostępu i do ewidencji czasu pracy.',
  checklist:['Jedna osoba na jedną autoryzację','Ramiona zwalniane przy ewakuacji','IP 54 — montaż także pod zadaszeniem'],
  ctaShort:'Zapytaj o kołowroty', secondaryKey:'skd-bramki-uchylne', secondaryCta:'Zobacz bramki uchylne',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Dobierzemy kołowrót do natężenia ruchu, warunków montażu i sposobu identyfikacji pracowników. Skontaktuj się z nami.',
  specs:[
    {k:'Typ',v:'kołowrót trójramienny, przejście jednoosobowe'},
    {k:'Kierunek pracy',v:'jednokierunkowy lub dwukierunkowy'},
    {k:'Identyfikacja',v:'karta i brelok RFID, kod PIN, odcisk palca'},
    {k:'Integracja',v:'Etatomierz, Etatomierz WEB, kontrola dostępu BioSys'}
  ],
  modelsTitle:'Modele kołowrotów',
  modelsLead:'Oba modele mają identyczne parametry pracy i różnią się szerokością przejścia oraz konfiguracją czytników.',
  models:[
    {
      img:RES('ts1000','assets/ts1000.webp'),
      name:'Kołowrót TS1000',
      desc:'Pojedyncze przejście z głowicą pod czytnik zbliżeniowy i moduł biometryczny. Węższa podstawa — sprawdza się w portierniach i wejściach o ograniczonej szerokości.',
      specs:[
      {k:'Napięcie wejściowe',v:'AC 100 – 240V; 50-60Hz'},
      {k:'Klasa szczelności',v:'IP 54'},
      {k:'Środowisko działania',v:'wewnątrz i na zewnątrz pod zadaszeniem'},
      {k:'Długość ramion (mm)',v:'500'},
      {k:'Temperatura działania',v:'-28’C do 60’C'},
      {k:'Wilgotność',v:'5% – 80%'},
      {k:'Waga całkowita',v:'40kg'},
      {k:'Przepustowość',v:'od 48 osób/min'},
      {k:'Wymiary (mm)',v:'dł.: 520, szer.: 280, wys.: 980'},
      {k:'Sygnał sterujący',v:'styki bezprądowe (dry-contact)'}
      ]
    },
    {
      img:RES('ts1200','assets/ts1200.webp'),
      name:'Tripod TS1200',
      desc:'Wersja z szerszą podstawą i sygnalizacją stanu przejścia na głowicy, przystosowana do zestawiania w ciągi dwu- i wielotorowe przy wejściach o dużym natężeniu ruchu.',
      specs:[
      {k:'Napięcie wejściowe',v:'AC 100 – 240V; 50-60Hz'},
      {k:'Klasa szczelności',v:'IP 54'},
      {k:'Środowisko działania',v:'wewnątrz i na zewnątrz pod zadaszeniem'},
      {k:'Długość ramion (mm)',v:'500'},
      {k:'Temperatura działania',v:'-28’C do 60’C'},
      {k:'Wilgotność',v:'5% – 80%'},
      {k:'Waga całkowita',v:'40kg'},
      {k:'Przepustowość',v:'od 48 osób/min'},
      {k:'Wymiary (mm)',v:'dł.: 600, szer.: 330, wys.: 980'},
      {k:'Sygnał sterujący',v:'styki bezprądowe (dry-contact)'}
      ]
    }
  ],
  seoTitle:'Kołowroty w kontroli dostępu i rejestracji czasu pracy',
  seoLead:'Kołowrót zamienia wejście na teren zakładu w zarejestrowane zdarzenie. Konstrukcja trójramienna przepuszcza jedną osobę na jedną autoryzację, więc liczba odbić odpowiada liczbie osób na terenie — to podstawa zarówno dla ewidencji czasu pracy, jak i dla list obecności wykorzystywanych podczas ewakuacji.',
  seoBlocks:[
    {t:'Gdzie sprawdza się kołowrót', d:'Zakłady produkcyjne, magazyny, centra logistyczne, place budowy i obiekty, w których ruch pracowniczy koncentruje się na początku i końcu zmiany. Kołowrót obsługuje duży, powtarzalny ruch pieszy przy niewielkim zapotrzebowaniu na miejsce i nie wymaga stałego nadzoru recepcji. Po godzinach pracy pozostaje jedynym drożnym przejściem, a pozostałe wejścia pracują jako awaryjne.'},
    {t:'Jedno odbicie, dwa systemy', d:'Autoryzacja, która zwalnia ramię, jest tym samym zdarzeniem, na którym opiera się rozliczenie czasu pracy. Godzina wejścia nie jest deklaracją pracownika, lecz zapisem systemowym, a kadry rozliczają miesiąc na danych z tego samego rejestru. Kołowrót można skonfigurować tak, aby rozróżniał wejście, wyjście oraz wyjście służbowe i prywatne.'},
    {t:'Bezpieczeństwo i ewakuacja', d:'Zanik zasilania lub sygnał z systemu przeciwpożarowego zwalnia ramiona i pozostawia przejście drożne. Instalację uzupełnia przycisk otwarcia awaryjnego oraz zasilacz buforowy, który podtrzymuje pracę urządzenia w czasie przerwy w dostawie prądu. Klasa szczelności IP 54 pozwala montować kołowrót również na zewnątrz, pod zadaszeniem.'},
    {t:'Dobór, montaż i serwis', d:'O wyborze modelu decyduje natężenie ruchu w szczycie, liczba pracowników na zmianie, dostępna szerokość przejścia i sposób identyfikacji. Wdrożenie prowadzi jeden zespół: projekt przejścia, montaż konstrukcji i czytników, konfiguracja uprawnień, szkolenie ochrony i pracowników. Po uruchomieniu zostaje serwis oraz przeglądy okresowe mechanizmu obrotowego.'}
  ]
},
{
  key:'skd-bramki-uchylne', tag:'Bramki uchylne', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Bramki uchylne',
  title1:'Bramki', title2:'uchylne.',
  intro:'Bramki ze skrzydłami uchylnymi do recepcji, biur i przejść o dużym natężeniu ruchu. Przepuszczają osoby szybciej niż kołowrót, a szerokie przejście pozwala przejść z wózkiem, bagażem lub w wersji dla osób z niepełnosprawnościami.',
  checklist:['Przejście 90 cm — dostępne dla wózków','Do 10 otworzeń na minutę','Stal nierdzewna SUS304'],
  ctaShort:'Zapytaj o bramki uchylne', secondaryKey:'skd-kolowroty', secondaryCta:'Zobacz kołowroty',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz dobrać bramkę do recepcji lub przejścia o dużym ruchu? Napisz do nas.',
  specs:[
    {k:'Typ',v:'bramka ze skrzydłem uchylnym'},
    {k:'Materiał',v:'stal nierdzewna SUS304'},
    {k:'Szerokość przejścia',v:'90 cm'},
    {k:'Napięcie zasilania',v:'230 V AC'},
    {k:'Identyfikacja',v:'karta i brelok RFID, kod PIN, biometria'},
    {k:'Awaria zasilania',v:'skrzydło zwalniane do pozycji otwartej'},
    {k:'Integracja',v:'Etatomierz, Etatomierz WEB, kontrola dostępu BioSys'}
  ],
  modelsTitle:'Model bramki uchylnej',
  modelsLead:'Bramka jednoskrzydłowa do zestawiania w ciągi — dwa słupki tworzą przejście dwukierunkowe, kolejne rozbudowują wejście o następne torowiska.',
  models:[
    {
      img:RES('brus1','assets/brus1.webp'),
      name:'Bramka uchylna BS-BRUS1',
      desc:'Słupek ze stali nierdzewnej z czytnikiem zbliżeniowym, sygnalizacją LED na głowicy i szklanym skrzydłem uchylnym. Szerokość przejścia 90 cm obsługuje ruch z wózkiem, bagażem oraz przejście osób z niepełnosprawnościami.',
      specs:[
      {k:'Napięcie zasilania',v:'230 V AC'},
      {k:'Pobór mocy typ.',v:'29 VA'},
      {k:'Pobór mocy maks.',v:'82 VA'},
      {k:'Zakres temperatury pracy',v:'od -28°C do +60°C'},
      {k:'Zakres wilgotności powietrza',v:'od 5% do 80%'},
      {k:'Ilość otworzeń na minutę',v:'do 10'},
      {k:'Materiał',v:'stal nierdzewna SUS304'},
      {k:'Szerokość przejścia',v:'90 cm'},
      {k:'Wysokość słupka',v:'1090 mm'}
      ]
    }
  ],
  seoTitle:'Bramki uchylne — szybkie przejście w kontroli dostępu',
  seoLead:'Bramka uchylna to przejście ze skrzydłem otwieranym po autoryzacji: karta zbliżeniowa, kod PIN lub biometria zwalnia skrzydło, a zdarzenie trafia do systemu kontroli dostępu i ewidencji czasu pracy. W przeciwieństwie do kołowrotu daje przejście o szerokości 90 cm, więc obsługuje ruch z wózkiem, bagażem oraz osoby z niepełnosprawnościami.',
  seoBlocks:[
    {t:'Gdzie sprawdza się bramka uchylna', d:'Recepcje biurowe, budynki wielonajemcowe, banki, urzędy, przychodnie i biurowce z ruchem gości. Bramka uchylna przepuszcza osoby szybciej niż kołowrót — do 10 otworzeń na minutę — i wygląda jak element wykończenia holu, a nie jak konstrukcja przemysłowa. Często zestawia się ją w ciągi: osobne torowiska na wejście i wyjście oraz szersze przejście dla osób z niepełnosprawnościami.'},
    {t:'Dostępność i komfort przejścia', d:'Szerokość 90 cm to przejście dla wózka inwalidzkiego, wózka bagażowego i osoby z walizką. Skrzydło otwiera się w kierunku ruchu, a sygnalizacja LED na głowicy słupka informuje o statusie autoryzacji. Konstrukcja ze stali nierdzewnej SUS304 pracuje w temperaturze od -28°C do +60°C i przy wilgotności od 5% do 80%.'},
    {t:'Bezpieczeństwo i ewakuacja', d:'Zanik zasilania lub sygnał z systemu przeciwpożarowego zwalnia skrzydło i pozostawia przejście drożne, zgodnie z wymaganiami dróg ewakuacyjnych. Instalację uzupełnia przycisk otwarcia awaryjnego oraz zasilacz buforowy podtrzymujący pracę przy przerwie w dostawie prądu. Czujniki w słupku zabezpieczają przed zamknięciem skrzydła na osobie w przejściu.'},
    {t:'Dobór, montaż i serwis', d:'O konfiguracji decyduje natężenie ruchu w szczycie, liczba torowisk, sposób identyfikacji i aranżacja holu. Wdrożenie prowadzi jeden zespół: projekt przejścia, montaż słupków i czytników, konfiguracja uprawnień oraz szkolenie recepcji. Po uruchomieniu zostaje serwis i przeglądy okresowe mechanizmu skrzydła.'}
  ]
},
{
  key:'skd-bramy-wysokie', tag:'Bramy wysokie (stadionowe)', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Bramy wysokie — stadionowe',
  title1:'Bramy wysokie', title2:'(stadionowe).',
  intro:'Pełnowymiarowe bramy obrotowe uniemożliwiające przejście nad lub pod konstrukcją. Stosowane na obiektach sportowych, terenach przemysłowych i wszędzie tam, gdzie przejście musi być kontrolowane bez nadzoru pracownika ochrony.',
  checklist:['Konstrukcja pełnej wysokości — 2220 mm','Stal nierdzewna SUS304, IP 54','Praca bez nadzoru ochrony'],
  ctaShort:'Zapytaj o bramy wysokie', secondaryKey:'skd-kolowroty', secondaryCta:'Zobacz kołowroty',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Planujesz kontrolę wejść na obiekt bez stałego nadzoru ochrony? Skontaktuj się z nami.',
  specs:[
    {k:'Typ',v:'brama obrotowa pełnej wysokości (full height)'},
    {k:'Materiał',v:'stal nierdzewna SUS304'},
    {k:'Stopień ochrony',v:'IP 54 — montaż na zewnątrz'},
    {k:'Szerokość przejścia',v:'580 mm'},
    {k:'Zasilanie sterownika',v:'~230 V AC'},
    {k:'Identyfikacja',v:'karta i brelok RFID, kod PIN, biometria'},
    {k:'Integracja',v:'Etatomierz, Etatomierz WEB, kontrola dostępu BioSys'}
  ],
  modelsTitle:'Modele bram wysokich',
  modelsLead:'Oba modele mają tę samą konstrukcję i parametry pracy — różnią się liczbą przejść w jednej bramie.',
  models:[
    {
      img:RES('bw1','assets/bw-1.webp'),
      name:'Brama wysoka BS-BW-1',
      desc:'Jedno przejście kontrolowane w konstrukcji pełnej wysokości, z sygnalizacją kierunku na belce górnej i czytnikiem na słupku. Do wejść i wyjść obsługiwanych pojedynczo.',
      specs:[
      {k:'Stopień ochrony',v:'IP 54'},
      {k:'Napięcie zasilania sterownika',v:'~230 V AC'},
      {k:'Pobór mocy maks.',v:'45 W'},
      {k:'Zakres temperatury pracy',v:'od -28°C do +60°C'},
      {k:'Zakres wilgotności powietrza',v:'od 0% do 95%'},
      {k:'Waga netto',v:'239 kg'},
      {k:'Materiał',v:'stal nierdzewna SUS304'},
      {k:'Szerokość przejścia',v:'580 mm'},
      {k:'Wysokość konstrukcji',v:'2220 mm'}
      ]
    },
    {
      img:RES('bw2','assets/m/bw-2.webp'),
      name:'Brama wysoka BS-BW-2',
      desc:'Dwa przejścia we wspólnej konstrukcji — osobno dla wejścia i wyjścia albo dwa równoległe torowiska na wejściu o dużym natężeniu ruchu. Każde przejście ma własny czytnik i sygnalizację kierunku.',
      specs:[
      {k:'Stopień ochrony',v:'IP 54'},
      {k:'Napięcie zasilania sterownika',v:'~230 V AC'},
      {k:'Pobór mocy maks.',v:'90 W'},
      {k:'Zakres temperatury pracy',v:'od -28°C do +60°C'},
      {k:'Zakres wilgotności powietrza',v:'od 0% do 95%'},
      {k:'Waga netto',v:'265 kg'},
      {k:'Materiał',v:'stal nierdzewna SUS304'},
      {k:'Szerokość przejścia',v:'580 mm'},
      {k:'Wysokość konstrukcji',v:'2220 mm'}
      ]
    }
  ],
  seoTitle:'Bramy wysokie — bramki obrotowe pełnej wysokości w kontroli dostępu',
  seoLead:'Brama wysoka, nazywana też bramką obrotową pełnej wysokości lub kołowrotem stadionowym, zamyka przejście na całej wysokości — od podłoża do belki górnej na 2220 mm. Nie można jej przeskoczyć ani przejść pod nią, dlatego kontroluje wejście na teren obiektu bez stałego nadzoru pracownika ochrony, a każda autoryzacja zapisuje się w systemie kontroli dostępu i w ewidencji czasu pracy.',
  seoBlocks:[
    {t:'Gdzie stosuje się bramy wysokie', d:'Stadiony i obiekty sportowe, tereny przemysłowe, place składowe, bazy transportowe, zajezdnie, składowiska surowców oraz ogrodzone wejścia na tereny zakładów produkcyjnych. Brama wysoka sprawdza się tam, gdzie przejście znajduje się w linii ogrodzenia, działa przez całą dobę i nie ma przy nim portierni ani recepcji.'},
    {t:'Konstrukcja i odporność na warunki zewnętrzne', d:'Bramy BS-BW wykonane są ze stali nierdzewnej SUS304 w stopniu ochrony IP 54, pracują w temperaturze od -28°C do +60°C i przy wilgotności do 95%. To parametry montażu na wolnym powietrzu, bez zadaszenia — kluczowe dla wejść przy ogrodzeniu. Szerokość przejścia 580 mm wymusza przejście pojedynczo, bez możliwości przeprowadzenia drugiej osoby na jednej karcie.'},
    {t:'Jedna autoryzacja, dwa systemy', d:'Odczyt karty zbliżeniowej, kodu PIN lub biometrii zwalnia mechanizm obrotowy i w tej samej chwili tworzy zdarzenie w systemie. Kadry rozliczają czas pracy na zapisach z rejestru, a ochrona widzi liczbę osób na terenie obiektu. Bramy wysokie współpracują z oprogramowaniem Etatomierz, Etatomierz WEB oraz kontrolą dostępu BioSys.'},
    {t:'Dobór, montaż i serwis', d:'O wyborze między BS-BW-1 a BS-BW-2 decyduje natężenie ruchu w szczycie i to, czy wejście i wyjście mają być rozdzielone. Wdrożenie prowadzi jeden zespół: projekt przejścia i fundamentu, montaż konstrukcji oraz czytników, konfiguracja uprawnień i szkolenie. Po uruchomieniu zostaje serwis i przeglądy okresowe mechanizmu obrotowego.'}
  ]
},
{
  key:'skd-kurtyny', tag:'Kurtyny podczerwieni', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Kurtyny podczerwieni',
  title1:'Kurtyny', title2:'podczerwieni.',
  intro:'Bariery optyczne wykrywające przejście osoby w świetle wiązek podczerwieni. Stosowane w bramkach i przejściach kontrolowanych do liczenia osób, wykrywania przejść pod wymuszeniem oraz zabezpieczenia przed przejściem dwóch osób na jednej autoryzacji.',
  ctaShort:'Zapytaj o kurtyny', secondaryKey:'skd-bramki-uchylne', secondaryCta:'Zobacz bramki uchylne',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz wykluczyć przejścia „na jednej karcie"? Skontaktuj się z nami.',
  specs:[
    {k:'Zasada działania',v:'wiązki podczerwieni wykrywające przejście osoby'},
    {k:'Funkcje',v:'liczenie osób, wykrywanie przejść nieuprawnionych'},
    {k:'Zastosowanie',v:'bramki, korytarze i przejścia kontrolowane'},
    {k:'Współpraca',v:'kontrolery dostępu i bramki BioSys'}
  ]
},
{
  key:'skd-zasilacze', tag:'Zasilacze', isSkdChild:true, skdGroup:'zasilacze', kicker:'ZASILACZE KD',
  kicker2:'Zasilacze do systemów kontroli dostępu',
  title1:'Zasilacze', title2:'do systemów kontroli dostępu.',
  intro:'Zasilanie dobrane do liczby przejść i wymagań ciągłości pracy: zasilacz buforowy z podtrzymaniem akumulatorowym, zasilacz impulsowy do instalacji bez podtrzymania oraz kompaktowy zasilacz awaryjny Mini UPS. Wszystkie współpracują z kontrolerami, czytnikami i elementami wykonawczymi BioSys.',
  checklist:['Napięcie wyjściowe 12 V DC','Podtrzymanie akumulatorowe 1,3 / 7 / 18 Ah','Mini UPS — montaż bez przeróbek instalacji'],
  ctaShort:'Zapytaj o zasilacze', secondaryKey:'skd-kontrolery', secondaryCta:'Zobacz kontrolery',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Dobierzemy zasilanie do liczby przejść, długości linii i wymaganego czasu podtrzymania. Skontaktuj się z nami.',
  specs:[
    {k:'Zasilacz buforowy',v:'12 V DC z akumulatorem — praca urządzeń przy zaniku napięcia sieciowego'},
    {k:'Zasilacz impulsowy',v:'12 V DC, wysoka sprawność, niewielkie gabaryty, bez podtrzymania'},
    {k:'Mini UPS',v:'kompaktowe zasilanie awaryjne 12 V, szybki montaż'},
    {k:'Zastosowanie',v:'kontrolery, czytniki, rejestratory i elementy wykonawcze KD'},
    {k:'Montaż',v:'obudowa naścienna, w wersji buforowej z miejscem na akumulator'},
    {k:'Efekt',v:'ciągłość działania przejść niezależnie od zasilania sieciowego'}
  ],
  modelsTitle:'Rodzaje zasilaczy',
  modelsLead:'Trzy typy zasilania w pięciu wykonaniach — wybór zależy od tego, czy instalacja ma pracować przy zaniku prądu i jak długo.',
  models:[
    {
      img:RES('zasbuf12','assets/m/zas-buforowy-12v.webp'),
      name:'Zasilacz buforowy 12 V — obudowa metalowa',
      desc:'Zasilacz do podtrzymania zasilania 12 V w obudowie metalowej z wentylacją. Podstawowe rozwiązanie dla kontroli dostępu, gdzie przejścia muszą działać także po zaniku napięcia sieciowego.',
      specs:[
      {k:'Napięcie wyjściowe',v:'12 V DC'},
      {k:'Praca buforowa',v:'z akumulatorem'},
      {k:'Obudowa',v:'metalowa, naścienna'},
      {k:'Zastosowanie',v:'kontrolery, czytniki, elementy wykonawcze KD'}
      ]
    },
    {
      img:RES('zasbuf18','assets/zas-buforowy-18ah.webp'),
      name:'Zasilacz buforowy 1,3 / 7 / 18 Ah',
      desc:'Obudowa z miejscem na akumulator o pojemności 1,3 Ah, 7 Ah lub 18 Ah — pojemność dobiera się do liczby przejść i wymaganego czasu podtrzymania.',
      specs:[
      {k:'Napięcie wyjściowe',v:'12 V DC'},
      {k:'Pojemność akumulatora',v:'1,3 Ah / 7 Ah / 18 Ah'},
      {k:'Obudowa',v:'metalowa z miejscem na akumulator'},
      {k:'Zastosowanie',v:'kontrolery, zwory, elektrozaczepy, czytniki'}
      ]
    },
    {
      img:RES('zasimpk','assets/zas-impulsowy-kostka.webp'),
      name:'Zasilacz impulsowy kostkowy',
      desc:'Wtyczkowy zasilacz 12 V do pojedynczego urządzenia — rejestratora czasu pracy, czytnika lub kontrolera przy jednym przejściu. Nie wymaga puszki ani szafki instalacyjnej.',
      specs:[
      {k:'Napięcie wejściowe',v:'100–240 V AC, 50/60 Hz'},
      {k:'Napięcie wyjściowe',v:'12 V DC'},
      {k:'Wykonanie',v:'kostkowe, wtyczkowe'},
      {k:'Podtrzymanie',v:'brak — do instalacji bez wymogu ciągłości'},
      {k:'Zastosowanie',v:'pojedynczy rejestrator, czytnik lub kontroler'}
      ]
    },
    {
      img:RES('zasimpp','assets/zas-impulsowy-przewod.webp'),
      name:'Zasilacz impulsowy z przewodem',
      desc:'Zasilacz 12 V / 1 A z odseparowanym przewodem sieciowym — do montażu w miejscach, gdzie gniazdo jest oddalone od urządzenia lub schowane w kanale kablowym.',
      specs:[
      {k:'Napięcie wejściowe',v:'100–240 V AC, 50/60 Hz'},
      {k:'Napięcie wyjściowe',v:'12 V DC / 1,0 A'},
      {k:'Przewód sieciowy',v:'odseparowany, z wtyczką'},
      {k:'Podtrzymanie',v:'brak — do instalacji bez wymogu ciągłości'},
      {k:'Zastosowanie',v:'rejestratory i czytniki w trudno dostępnych miejscach'}
      ]
    },
    {
      img:RES('zasups','assets/m/zas-miniups.webp'),
      name:'Zasilacz awaryjny Mini UPS 12 V',
      desc:'Kompaktowy Mini UPS 12 V z wbudowanym akumulatorem. Włącza się między zasilacz i urządzenie, więc dodaje podtrzymanie do istniejącej instalacji bez wymiany zasilacza i przeróbek okablowania.',
      specs:[
      {k:'Wejście',v:'DC 12 V / 1,5 A'},
      {k:'Wyjście',v:'DC 12 V / 1,0 A'},
      {k:'Energia akumulatora',v:'18 Wh'},
      {k:'Czas ładowania',v:'2 h'},
      {k:'Czas podtrzymania',v:'do 4 h'},
      {k:'Zastosowanie',v:'rejestratory, czytniki i kontrolery przy jednym przejściu'}
      ]
    }
  ],
  seoTitle:'Zasilacze do kontroli dostępu — buforowy, impulsowy i Mini UPS',
  seoLead:'Zasilanie decyduje o tym, czy kontrola dostępu działa również wtedy, gdy zabraknie prądu. W instalacjach BioSys stosuje się trzy rozwiązania: zasilacz buforowy 12 V z akumulatorem, zasilacz impulsowy 12 V bez podtrzymania oraz zasilacz awaryjny Mini UPS, który dodaje podtrzymanie do gotowej instalacji.',
  seoBlocks:[
    {t:'Zasilacz buforowy — ciągłość pracy przejścia', d:'Zasilacz buforowy łączy zasilanie sieciowe z akumulatorem: przy zaniku napięcia sieciowego urządzenia pracują dalej z baterii. Pojemność 1,3 Ah, 7 Ah lub 18 Ah dobiera się do liczby przejść, poboru zwor i elektrozaczepów oraz wymaganego czasu podtrzymania. To rozwiązanie dla przejść, które muszą pozostawać pod kontrolą także w czasie awarii.'},
    {t:'Zasilacz impulsowy — pojedyncze urządzenie', d:'Zasilacz impulsowy 12 V ma wysoką sprawność i niewielkie gabaryty, dostępny jest w wersji kostkowej oraz z odseparowanym przewodem sieciowym. Zasila rejestrator czasu pracy, czytnik lub kontroler przy jednym przejściu, tam gdzie instalacja nie wymaga podtrzymania. Wersja z przewodem ułatwia montaż, gdy gniazdo jest oddalone od urządzenia.'},
    {t:'Mini UPS — podtrzymanie bez przebudowy instalacji', d:'Zasilacz awaryjny Mini UPS 12 V ma wbudowany akumulator i włącza się pomiędzy istniejący zasilacz a urządzenie. Energia 18 Wh pozwala podtrzymać pracę rejestratora lub kontrolera do kilku godzin, a ładowanie zajmuje około dwóch godzin. Najszybszy sposób, by dodatkowo zabezpieczyć pojedyncze urządzenie w działającym systemie.'},
    {t:'Dobór zasilania i montaż', d:'Przy doborze liczy się sumaryczny pobór prądu urządzeń na linii, długość i przekrój przewodów oraz to, jak długo przejście ma działać bez zasilania sieciowego. Zasilacze montujemy razem z kontrolerami i elementami wykonawczymi, w obudowach naściennych z miejscem na akumulator. Całość instalacji — zasilanie, kontrolery, czytniki i przyciski ewakuacyjne — prowadzi jeden zespół.'}
  ]
},
{
  key:'skd-ryglujace', tag:'Urządzenia ryglujące', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Urządzenia ryglujące — zwory i elektrozaczepy',
  title1:'Urządzenia', title2:'ryglujące.',
  intro:'Elementy wykonawcze, które fizycznie utrzymują drzwi zamknięte i zwalniają je po autoryzacji: zwory elektromagnetyczne trzymające skrzydło siłą elektromagnesu oraz elektrozaczepy montowane w ościeżnicy, zwalniające zapadkę zamka. Dobór zależy od typu drzwi, wymaganej siły trzymania i przepisów ewakuacyjnych obowiązujących na przejściu.',
  ctaShort:'Zapytaj o urządzenia ryglujące', secondaryKey:'skd-kontrolery', secondaryCta:'Zobacz kontrolery',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Nie wiesz, czy w Twoich drzwiach lepiej sprawdzi się zwora czy elektrozaczep? Napisz do nas.',
  checklist:['Zwolnienie przejścia przy zaniku zasilania','Montaż na drzwiach drewnianych, metalowych i szklanych','Stabilizatory L, U i Z do każdego typu ościeżnicy'],
  specs:[
    {k:'Zwora elektromagnetyczna',v:'utrzymuje skrzydło siłą elektromagnesu, zwalnia przy zaniku zasilania'},
    {k:'Elektrozaczep',v:'montowany w ościeżnicy, zwalnia zapadkę zamka po autoryzacji'},
    {k:'Zastosowanie',v:'drzwi biurowe, techniczne, wejściowe i wewnętrzne'},
    {k:'Zasilanie',v:'zasilacz buforowy lub impulsowy KD'},
    {k:'Ewakuacja',v:'współpraca z przyciskiem ewakuacyjnym na przejściu'}
  ],
  modelsTitle:'Zwora i stabilizatory montażowe',
  modelsLead:'Zwora elektromagnetyczna z kompletem montażowym oraz trzy typy stabilizatorów, którymi dopasowuje się montaż do konstrukcji drzwi i ościeżnicy.',
  models:[
    {
      img:RES('zwem300','assets/zwora-em300.webp'),
      name:'Zwora elektromagnetyczna BS EM-300',
      desc:'Zwora natynkowa z płytą zworową i kompletem montażowym: śruby, podkładki, kołki i klucze imbusowe. Elektromagnes utrzymuje skrzydło przez cały czas zasilania, a odcięcie napięcia — po autoryzacji, sygnale z przycisku ewakuacyjnego lub zaniku prądu — zwalnia przejście.',
      specs:[
      {k:'Rodzaj',v:'zwora elektromagnetyczna natynkowa'},
      {k:'Montaż',v:'nadproże lub ościeżnica, z płytą zworową na skrzydle'},
      {k:'Stan przy braku zasilania',v:'przejście zwolnione'},
      {k:'Komplet',v:'zwora, płyta zworowa, elementy montażowe i klucze'},
      {k:'Sterowanie',v:'kontroler KD, przycisk ewakuacyjny, sygnał ppoż.'},
      {k:'Zasilanie',v:'zasilacz buforowy lub impulsowy 12 V'}
      ]
    },
    {
      img:RES('stabl','assets/stabilizator-l.webp'),
      name:'Stabilizator typu „L”',
      desc:'Para kątowników aluminiowych do montażu zwory tam, gdzie nadproże nie daje pełnej powierzchni oparcia. Kątownik przenosi płaszczyznę montażu zwory na skrzydło lub ościeżnicę drzwi otwieranych na zewnątrz.',
      specs:[
      {k:'Typ',v:'kątownik montażowy „L” (para)'},
      {k:'Materiał',v:'aluminium, powierzchnia szczotkowana'},
      {k:'Zastosowanie',v:'drzwi otwierane na zewnątrz, montaż na skrzydle'},
      {k:'Otwory',v:'gotowe otwory pod zworę i płytę zworową'}
      ]
    },
    {
      img:RES('stabu','assets/m/stabilizator-u.webp'),
      name:'Stabilizator typu „U”',
      desc:'Profil zamknięty obejmujący skrzydło z trzech stron — do drzwi szklanych bez ramy i bez możliwości wiercenia w skrzydle. Płyta zworowa mocowana jest do profilu, nie do samego skrzydła.',
      specs:[
      {k:'Typ',v:'profil obejmujący „U”'},
      {k:'Materiał',v:'aluminium, powierzchnia szczotkowana'},
      {k:'Zastosowanie',v:'drzwi szklane i skrzydła bez ramy'},
      {k:'Montaż',v:'obejmuje skrzydło, bez wiercenia w szkle'}
      ]
    },
    {
      img:RES('stabz','assets/stabilizator-z.webp'),
      name:'Stabilizator typu „Z”',
      desc:'Płyta z odsadzeniem przenosząca płaszczyznę mocowania o grubość profilu. Stosowana przy drzwiach z wąską ościeżnicą lub przy przesunięciu skrzydła względem nadproża.',
      specs:[
      {k:'Typ',v:'płyta montażowa „Z” z odsadzeniem'},
      {k:'Materiał',v:'aluminium, powierzchnia szczotkowana'},
      {k:'Zastosowanie',v:'wąska ościeżnica, przesunięcie skrzydła'},
      {k:'Otwory',v:'stożkowe, pod śruby montażowe płyty zworowej'}
      ]
    }
  ],
  seoTitle:'Zwora elektromagnetyczna w systemie kontroli dostępu',
  seoLead:'Zwora elektromagnetyczna to element wykonawczy przejścia: utrzymuje drzwi zamknięte siłą elektromagnesu i zwalnia je w momencie odcięcia zasilania. Ponieważ przejście otwiera się przy braku prądu, zwora sprawdza się na drogach ewakuacyjnych, gdzie skrzydło musi dać się otworzyć niezależnie od stanu systemu.',
  seoBlocks:[
    {t:'Jak działa zwora elektromagnetyczna', d:'Korpus zwory montuje się w nadprożu lub ościeżnicy, płytę zworową na skrzydle drzwi. Podczas zasilania elektromagnes przyciąga płytę i utrzymuje drzwi zamknięte. Autoryzacja w kontrolerze, wciśnięcie przycisku ewakuacyjnego albo zanik napięcia przerywa obwód, zwora traci siłę trzymania i skrzydło zwalnia się mechanicznie.'},
    {t:'Zwora czy elektrozaczep', d:'Zwora nie ingeruje w zamek i nie wymaga przygotowania ościeżnicy, więc łatwiej dobrać ją do drzwi już zamontowanych — również szklanych i aluminiowych. Elektrozaczep pracuje w ościeżnicy i zwalnia zapadkę zamka, przez co lepiej pasuje do drzwi z klamką i zamkiem mechanicznym. Na drogach ewakuacyjnych decyduje sposób zachowania przy zaniku zasilania.'},
    {t:'Stabilizatory L, U i Z', d:'Stabilizator dopasowuje montaż zwory do konstrukcji przejścia. Kątownik „L” przenosi montaż na skrzydło drzwi otwieranych na zewnątrz, profil „U” obejmuje skrzydło szklane bez wiercenia w szkle, płyta „Z” kompensuje przesunięcie skrzydła względem nadproża. Wszystkie wykonania są aluminiowe, z gotowymi otworami pod zworę i płytę zworową.'},
    {t:'Zasilanie i ewakuacja', d:'Zwora wymaga stałego zasilania, dlatego dobiera się ją razem z zasilaczem buforowym, który podtrzymuje przejście przy zaniku napięcia sieciowego, oraz z przyciskiem awaryjnego otwierania drzwi. W obiektach objętych wymaganiami przeciwpożarowymi sygnał z centrali ppoż. zwalnia wszystkie przejścia jednocześnie.'}
  ]
},
{
  key:'skd-przycisk', tag:'Przyciski otwarcia i ewakuacji', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Przyciski otwarcia i ewakuacji',
  title1:'Przyciski otwarcia', title2:'i ewakuacji.',
  intro:'Elementy bezpieczeństwa umożliwiające awaryjne otwarcie przejścia. Po wciśnięciu przycisku zasilanie elementu blokującego zostaje odcięte, a drzwi zwalniają się natychmiast — niezależnie od uprawnień i stanu systemu kontroli dostępu.',
  checklist:['Zwolnienie przejścia niezależne od systemu KD','Obudowa naścienna w kolorze zielonym','Dwa wykonania — otwieranie i reset rygla'],
  ctaShort:'Zapytaj o przyciski', secondaryKey:'skd-zasilacze', secondaryCta:'Zobacz zasilacze',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Potrzebujesz uzupełnić instalację o elementy ewakuacyjne? Napisz do nas.',
  specs:[
    {k:'Funkcja',v:'awaryjne zwolnienie przejścia na drodze ewakuacyjnej'},
    {k:'Działanie',v:'odcięcie zasilania elementu blokującego'},
    {k:'Montaż',v:'naścienny, przy drzwiach na drodze ewakuacyjnej'},
    {k:'Obudowa',v:'zielona, z opisem funkcji na froncie'},
    {k:'Współpraca',v:'zwory elektromagnetyczne, elektrozaczepy, kontrolery BioSys'}
  ],
  modelsTitle:'Modele przycisków',
  modelsLead:'Dwa wykonania różniące się funkcją opisaną na obudowie.',
  models:[
    {
      img:RES('przapwr','assets/przycisk-apw1r.webp'),
      name:'Przycisk ewakuacyjny BS-APW-1-R',
      desc:'Obudowa z opisem „AWARYJNE OTWIERANIE DRZWI — NACISNIJ”. Montaż przy drzwiach na drodze ewakuacyjnej, tam gdzie przejście musi dać się otworzyć bez autoryzacji.',
      specs:[
      {k:'Funkcja',v:'awaryjne otwieranie drzwi'},
      {k:'Opis na obudowie',v:'„AWARYJNE OTWIERANIE DRZWI — NACISNIJ”'},
      {k:'Obudowa',v:'naścienna, zielona'},
      {k:'Montaż',v:'na drodze ewakuacyjnej, przy drzwiach'}
      ]
    },
    {
      img:RES('przapws','assets/przycisk-apw1s.webp'),
      name:'Przycisk ewakuacyjny BS-APW-1-S',
      desc:'Obudowa z opisem „ZRESETUJ ZASILANIE RYGLA — WCIŚNIJ”. Stosowany tam, gdzie po otwarciu awaryjnym zasilanie elementu ryglującego trzeba przywrócić ręcznie na miejscu.',
      specs:[
      {k:'Funkcja',v:'reset zasilania rygla'},
      {k:'Opis na obudowie',v:'„ZRESETUJ ZASILANIE RYGLA — WCIŚNIJ”'},
      {k:'Obudowa',v:'naścienna, zielona'},
      {k:'Montaż',v:'przy przejściu kontrolowanym'}
      ]
    }
  ],
  seoTitle:'Przycisk ewakuacyjny — awaryjne otwieranie drzwi w kontroli dostępu',
  seoLead:'Przycisk ewakuacyjny zwalnia przejście niezależnie od systemu kontroli dostępu. Wciśnięcie przycisku przerywa obwód zasilania zwory elektromagnetycznej lub elektrozaczepu, więc drzwi otwierają się nawet wtedy, gdy kontroler jest niedostępny albo brak jest łączności z serwerem.',
  seoBlocks:[
    {t:'Gdzie montuje się przycisk ewakuacyjny', d:'Przy drzwiach na drogach ewakuacyjnych, przy wyjściach z hal i stref produkcyjnych, na klatkach schodowych oraz przy przejściach kontrolowanych, które jednocześnie stanowią wyjście z budynku. Zielona obudowa naścienna z opisem funkcji jest widoczna z odległości, a montaż na wysokości klamki pozwala użyć przycisku bez szukania.'},
    {t:'Jak działa awaryjne otwieranie drzwi', d:'Przycisk włączony jest w obwód zasilania elementu ryglującego. Uruchomienie przerywa obwód, zwora traci siłę trzymania i drzwi zwalniają się mechanicznie — bez udziału oprogramowania. Sygnał z przycisku można dodatkowo doprowadzić do kontrolera, aby zdarzenie trafiło do historii systemu kontroli dostępu.'},
    {t:'Dwa wykonania', d:'Wersja z opisem „AWARYJNE OTWIERANIE DRZWI” służy do zwolnienia przejścia w sytuacji zagrożenia. Wersja z opisem „ZRESETUJ ZASILANIE RYGLA” pozwala przywrócić zasilanie elementu ryglującego na miejscu, po zdarzeniu. Oba warianty mają tę samą obudowę naścienną i ten sam sposób montażu.'},
    {t:'Dobór i uzupełnienie instalacji', d:'Przyciski dobiera się razem z urządzeniami ryglującymi i zasilaniem: zwora lub elektrozaczep, zasilacz buforowy podtrzymujący pracę przy zaniku prądu oraz — jeśli obiekt tego wymaga — sygnał z systemu przeciwpożarowego zwalniający wszystkie przejścia. Całość instalacji prowadzi jeden zespół, z przeglądami okresowymi elementów ewakuacyjnych.'}
  ]
},
{
  key:'skd-nosniki', tag:'Nośniki zbliżeniowe (RFID)', isSkdChild:true, skdGroup:'urzadzenia', kicker:'URZĄDZENIA KD',
  kicker2:'Nośniki zbliżeniowe RFID',
  title1:'Nośniki', title2:'zbliżeniowe.',
  intro:'Identyfikatory, którymi pracownik rejestruje zdarzenia i otwiera przejścia. Każda karta ma swój niepowtarzalny numer ID — po tym numerze rozpoznawany jest konkretny pracownik. Jeden pracownik może mieć kilka nośników przypisanych do tego samego konta.',
  checklist:['Niepowtarzalny numer ID każdego nośnika','RFID 125 kHz, MIFARE 13,56 MHz, UHF','Personalny nadruk na karcie'],
  ctaShort:'Zapytaj o nośniki', secondaryKey:'skd-czytniki-kart', secondaryCta:'Zobacz identyfikatory',
  heroVariant:'product', hasForm:false, hasCtaBand:true,
  ctaLabel:'Nie wiesz, który nośnik sprawdzi się u Twoich pracowników? Skontaktuj się z nami.',
  specs:[
    {k:'Karta RFID 125 kHz',v:'zwana również kartą UNIQUE'},
    {k:'Karta MIFARE',v:'13,56 MHz'},
    {k:'Karta UHF',v:'o zwiększonym zasięgu'},
    {k:'Identyfikacja',v:'niepowtarzalny numer ID przypisany do pracownika'},
    {k:'Personalizacja',v:'nadruk czarno-biały lub kolorowy'},
    {k:'Współpraca',v:'czytniki kart i rejestratory czasu pracy BioSys'}
  ],
  modelsTitle:'Formaty identyfikatorów zbliżeniowych',
  modelsLead:'Identyfikatory RFID są dystrybuowane przez BioSys w różnych wersjach. W zależności od specyfiki wymagań pracodawcy mogą być dystrybuowane w formie:',
  models:[
    {
      img:RES('rfkarta','assets/rfid-karta.webp'),
      name:'Karta zbliżeniowa',
      desc:'Wielkość karty bankomatowej. Może posiadać personalny nadruk — czarno-biały lub kolorowy — i pełnić rolę identyfikatora pracowniczego.',
      specs:[
      {k:'Format',v:'karta ISO, wielkość karty bankomatowej'},
      {k:'Standardy',v:'RFID 125 kHz (UNIQUE), MIFARE 13,56 MHz, UHF'},
      {k:'Nadruk',v:'czarno-biały lub kolorowy'},
      {k:'Może zawierać',v:'firmowy identyfikator ID, imię i nazwisko, zdjęcie pracownika, logotyp firmy'}
      ]
    },
    {
      img:RES('rfbrelok','assets/rfid-brelok.webp'),
      name:'Brelok RFID',
      desc:'Nośnik na kluczach, odporny na uszkodzenia mechaniczne. Sprawdza się tam, gdzie karta w kieszeni odzieży roboczej szybko ulega zniszczeniu.',
      specs:[
      {k:'Format',v:'brelok z otworem na kółko do kluczy'},
      {k:'Standardy',v:'RFID 125 kHz (UNIQUE), MIFARE 13,56 MHz'},
      {k:'Obudowa',v:'tworzywo ABS, odporne na uszkodzenia mechaniczne'},
      {k:'Nadruk',v:'numer ID wytłoczony na obudowie'}
      ]
    },
    {
      img:RES('rfopaska','assets/rfid-opaska.webp'),
      name:'Opaska RFID',
      desc:'Noszona na ręce — do pracy w rękawicach i w wilgotnym otoczeniu, gdzie wyjęcie karty z kieszeni wydłuża każde odbicie.',
      specs:[
      {k:'Format',v:'opaska silikonowa na nadgarstek'},
      {k:'Standardy',v:'RFID 125 kHz (UNIQUE), MIFARE 13,56 MHz'},
      {k:'Zastosowanie',v:'praca w rękawicach, wilgotne otoczenie'},
      {k:'Utrzymanie',v:'materiał zmywalny, odporny na dezynfekcję'}
      ]
    },
    {
      img:RES('rfnaklejka','assets/m/rfid-naklejka.webp'),
      name:'Naklejka RFID',
      desc:'Przyklejana na telefon, kask lub istniejący identyfikator — pracownik nie nosi przy sobie dodatkowego nośnika.',
      specs:[
      {k:'Format',v:'naklejka samoprzylepna z anteną i chipem'},
      {k:'Standardy',v:'RFID 125 kHz (UNIQUE), MIFARE 13,56 MHz'},
      {k:'Montaż',v:'telefon, kask, identyfikator, obudowa narzędzia'},
      {k:'Zastosowanie',v:'gdy pracownik ma mieć jak najmniej rzeczy przy sobie'}
      ]
    }
  ],
  seoTitle:'Nośniki zbliżeniowe RFID — karty, breloki, opaski i naklejki',
  seoLead:'Każda karta ma swój niepowtarzalny numer ID. Po tym numerze rozpoznawany jest konkretny pracownik. W zależności od implementacji, w rejestratorach zbliżeniowych mogą być wykorzystywane różne rodzaje kart zbliżeniowych.',
  seoBlocks:[
    {t:'Typy kart zbliżeniowych', d:'Najpopularniejszymi typami są: karta RFID 125 kHz, zwana również kartą UNIQUE, karta MIFARE 13,56 MHz oraz karta UHF, o zwiększonym zasięgu. Wybór standardu wynika z tego, jakie czytniki pracują w obiekcie i czy identyfikacja ma działać z bliska, czy z większej odległości — na przykład przy wjeździe pojazdu na teren zakładu.'},
    {t:'Personalizacja kart', d:'Karty zbliżeniowe, o wielkości karty bankomatowej, mogą posiadać personalny nadruk (czarno-biały lub kolorowy). Mogą zawierać wewnętrzny, firmowy identyfikator ID, imię i nazwisko pracownika, zdjęcie pracownika oraz logotyp firmy. Karta pełni wtedy jednocześnie rolę identyfikatora pracowniczego i nośnika autoryzacji.'},
    {t:'Dobór nośnika do stanowiska', d:'Karta sprawdza się w biurze i tam, gdzie potrzebny jest widoczny identyfikator ze zdjęciem. Brelok jest odporny na uszkodzenia i nie niszczy się w kieszeni odzieży roboczej. Opaska pozwala odbić się bez zdejmowania rękawic, a naklejka przenosi identyfikację na telefon lub kask. Jeden pracownik może mieć kilka nośników przypisanych do tego samego konta.'},
    {t:'Wydawanie i utrata nośnika', d:'Nośniki wydaje się i blokuje w oprogramowaniu BioSys — utrata karty oznacza dezaktywację numeru ID, nie wymianę uprawnień. Nowy nośnik przypisuje się do istniejącego konta pracownika, więc historia zdarzeń i ewidencja czasu pracy pozostają ciągłe. Identyfikatory RFID dystrybuuje BioSys, także w wersjach z nadrukiem przygotowanym pod wzorzec klienta.'}
  ]
},
{
  key:'polityka', tag:'Polityka prywatności', isDoc:true, kicker:'DOKUMENTY', kicker2:'Polityka prywatności i cookies',
  title1:'Polityka', title2:'prywatności.',
  intro:'Szanowni Państwo, z dniem 25 maja 2018 r. zmieniają się obowiązujące przepisy z zakresu ochrony danych osobowych. Zaczyna obowiązywać Ogólne Rozporządzenie z dnia 27 kwietnia 2016 r. o ochronie danych osobowych (dalej „RODO”). Przekazujemy Państwu informacje, w jaki sposób przetwarzamy Państwa dane osobowe.',
  checklist:[], ctaShort:'', secondaryCta:'',
  heroVariant:'none', hasForm:false, hasCtaBand:false,
  article:[
    {h:'Kto jest administratorem danych osobowych', p:['Administratorem przetwarzanych danych osobowych jest BioSys spółka z ograniczoną odpowiedzialnością z siedzibą w Suchej Beskidzkiej, osiedle Na Stawach 6/24, 34-200 Sucha Beskidzka, wpisana do Rejestru Przedsiębiorców KRS prowadzonego przez Sąd Rejonowy dla Krakowa – Śródmieścia w Krakowie. Jesteśmy polskim producentem i dostawcą systemów Rejestracji Czasu Pracy oraz Kontroli Dostępu wspierających pracę przedsiębiorstw.']},
    {h:'Dane kontaktowe', p:['Administrator wyznaczył Inspektora ochrony danych.','Osoby, których dane dotyczą, mogą kontaktować się z Inspektorem ochrony danych we wszystkich sprawach związanych z przetwarzaniem ich danych osobowych oraz z wykonywaniem praw przysługujących im zgodnie z przepisami o ochronie danych osobowych.','Inspektor Ochrony Danych — p. Karol Banucha'], ul:[{pre:'elektronicznie: ', t:'iod@biosys.pl', href:'mailto:iod@biosys.pl'},'poczta tradycyjna: BioSys Sp. z o.o., ul. Friedleina 4-6/131, 30-009 Kraków']},
    {h:'Ochrona interesu Klientów', p:['Dokładamy szczególnej staranności w celu ochrony interesów osób, których dane dotyczą. Zapewniamy, że zbierane przez nas dane są:'], ul:['przetwarzane zgodnie z prawem,','zbierane dla oznaczonych, zgodnych z prawem celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi celami,','merytorycznie poprawne i adekwatne w stosunku do celów, w jakich są przetwarzane oraz przechowywane w postaci umożliwiającej identyfikację osób, których dotyczą, nie dłużej niż jest to niezbędne do osiągnięcia celu przetwarzania.']},
    {h:'Cel i zakres zbierania danych oraz podstawa prawna tych działań', p:['Przetwarzamy dane osobowe, które otrzymaliśmy bezpośrednio od Ciebie w celu zawarcia/wykonania umowy, zapewnienia funkcjonalności i wsparcia oferowanych produktów i rozwiązań, obsłużenia prośby o kontakt, reklamacji, zapisania na szkolenia i prezentacje, złożenia CV, umożliwienia dokonania płatności oraz celach marketingowych, a także z publicznych rejestrów (np. KRS, CEiDG).']},
    {h:'Cele przetwarzania danych', pairs:[
      {t:'Zawarcie i wykonanie umowy, w tym kontaktowanie się z klientem w związku z jej realizacją.', d:'Podstawa prawna: art. 6 ust. 1 lit. b RODO'},
      {t:'Umożliwienie wykonania umowy naszym partnerom, którzy przekazują nam dane swoich klientów celem udostępnienia im licencji.', d:'Podstawa prawna: art. 6 ust. 1 lit. f RODO. Prawnie uzasadniony cel: umożliwienie klientom naszych partnerów korzystania z naszych usług na podstawie udzielonej licencji.'},
      {t:'Rozpatrywanie skarg i reklamacji.', d:'Podstawa prawna: art. 6 ust. 1 lit. c RODO'},
      {t:'Dochodzenie roszczeń związanych z zawartą umową.', d:'Podstawa prawna: art. 6 ust. 1 lit. f RODO. Prawnie uzasadniony cel: windykacja należności i prowadzenie postępowań sądowych, a następnie egzekucyjnych.'},
      {t:'Archiwizowanie dokumentacji, tj. umów i dokumentów rozliczeniowych.', d:'Podstawa prawna: art. 6 ust. 1 lit. c RODO'},
      {t:'Prowadzenie statystyk.', d:'Podstawa prawna: art. 6 ust. 1 lit. f RODO. Prawnie uzasadniony cel: posiadanie informacji o statystykach prowadzonych przez nas działań, co pozwala nam na usprawnienie prowadzonej przez nas działalności.'},
      {t:'Prowadzenie działań marketingowych własnych produktów i usług bez wykorzystania środków komunikacji elektronicznej.', d:'Podstawa prawna: art. 6 ust. 1 lit. f RODO. Prawnie uzasadniony cel: prowadzenie działań marketingowych promujących prowadzoną działalność.'},
      {t:'Prowadzenie działań marketingowych własnych produktów i usług z wykorzystaniem środków komunikacji elektronicznej.', d:'Podstawa prawna: art. 6 ust. 1 lit. f RODO, przy czym działania te z uwagi na inne obowiązujące przepisy prowadzone są przez BioSys jedynie na podstawie posiadanych zgód. Prawnie uzasadniony cel: prowadzenie działań marketingowych promujących prowadzoną działalność.'},
      {t:'Obsługa zgłoszeń kierowanych z wykorzystaniem formularza kontaktowego, innych wniosków, w tym zapewnienie rozliczalności (wykazania spełnienia przez BioSys obowiązków wynikających z przepisów prawa).', d:'Podstawa prawna: art. 6 ust. 1 lit. f RODO. Prawnie uzasadniony cel: udzielanie odpowiedzi na zgłoszenia i zapytania kierowane z wykorzystaniem formularza kontaktowego lub w innej formie, w tym przechowywanie newralgicznych wniosków i udzielonych odpowiedzi celem zachowania zasady rozliczalności.'}
    ]},
    {h:'Czy musisz podać nam swoje dane osobowe?', p:['Podanie przez Ciebie danych jest dobrowolne, ale niektóre z Twoich danych mogą być niezbędne do zawarcia umowy, zapewnienia funkcjonalności i wsparcia oferowanych produktów i rozwiązań, obsłużenia prośby o kontakt, reklamacji, zapisania na szkolenia i prezentacje, złożenia CV, dokonania płatności oraz kontaktu w celach marketingowych.']},
    {h:'Jakie dane przetwarzamy?', p:['Przetwarzamy zarówno dane, które sam nam podałeś, jak i dane, które opracowaliśmy samodzielnie (np. przy użyciu cookies lub wykorzystywanych przez nas innych narzędzi) albo zostały nam udostępnione lub powierzone.','Przetwarzamy także dane podane nam przez urządzenie, którym posługujesz się w trakcie korzystania z naszych usług (pliki cookies). Dbamy o to, by przetwarzać tylko te dane, które są niezbędne do celu, w jakim je zbieramy (minimalizacja danych).']},
    {h:'Jak długo przechowujemy Twoje dane?', p:['Będziemy przetwarzać Twoje dane najkrócej, jak to możliwe. Dla poszczególnych przypadków czas przetwarzania danych jest następujący:'], ul:['W przypadku, gdy przetwarzamy Twoje dane na podstawie umowy, przetwarzanie będzie trwało tak długo, dopóki trwa umowa oraz okres przedawnienia ewentualnych roszczeń.','Jeżeli wyraziłeś zgodę na przetwarzanie dla określonego celu, będziemy przetwarzać Twoje dane osobowe do czasu odwołania przez Ciebie zgody.','Dane, które przetwarzamy w ramach realizacji prawnie usprawiedliwionego interesu, przetwarzać będziemy dopóki trwa ten interes. W szczególnych przypadkach, którymi są przetwarzanie danych w celach marketingu bezpośredniego, w tym profilowania, Twoje dane możemy przetwarzać do czasu wniesienia przez Ciebie sprzeciwu.','Dane przetwarzane w celu spełnienia przez nas obowiązków wynikających z obowiązujących przepisów prawa będziemy przetwarzać tak długo, jak wynika to z tych przepisów.']},
    {h:'Zautomatyzowane przetwarzanie', p:['Dane osobowe nie będą przetwarzane w sposób zautomatyzowany (w tym w formie profilowania) w ten sposób, że w wyniku takiego zautomatyzowanego przetwarzania mogłyby zapadać jakiekolwiek decyzje, miałyby być powodowane inne skutki prawne lub w inny sposób miałoby to istotnie wpływać na naszych klientów.','W ramach wykonywanych czynności korzystamy z plików cookies w ten sposób, że obserwujemy i analizujemy ruch na naszych stronach, jednakże w ramach tych czynności nie przetwarzamy danych osobowych w rozumieniu RODO.']},
    {h:'Udostępnienie danych', p:['Nie sprzedajemy danych osobowych.','Dane osobowe możemy przekazywać innym podmiotom, które będą je przetwarzały, w szczególności:'], ul:['podmiotom prowadzącym działalność pocztową lub kurierską','bankom, w przypadku konieczności prowadzenia rozliczeń','organom państwowym lub innym podmiotom uprawnionym na podstawie przepisów prawa, celem wykonania ciążących na nas obowiązków (Urząd Skarbowy, PIP, ZUS)','podmiotom wspierającym nas w prowadzonej działalności na nasze zlecenie, w szczególności dostawcom systemów zewnętrznych wspierającym naszą działalność']},
    {h:'Czy przekazujemy Twoje dane do państw spoza Europejskiego Obszaru Gospodarczego?', p:['BioSys co do zasady nie przekazuje Twoich danych do państw spoza Europejskiego Obszaru Gospodarczego, jednak ze względu na mierzenie ruchu na stronie w celach analitycznych stosujemy mechanizm Google Analytics. Z tego względu BioSys może ujawnić Google Inc. adres IP Twojego komputera.']},
    {h:'Twoje prawa — uprawnienia w zakresie przetwarzanych danych i dobrowolność podania danych', p:['Każdej osobie, której dane dotyczą, przysługuje prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem (o ile dane przetwarzanie odbywa się na podstawie zgody).','Nadto, w sytuacji gdy przetwarzanie, którego dokonujemy, narusza przepisy RODO, posiadacie Państwo prawo wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych Osobowych.','Podanie danych jest niezbędne do zawarcia umowy z BioSys. W pozostałym zakresie podanie danych jest dobrowolne.']},
    {h:'Czym są pliki cookies?', p:['Ciasteczka (ang. cookies) to niewielkie informacje tekstowe, wysyłane przez serwer WWW i zapisywane po stronie użytkownika (zazwyczaj na twardym dysku). Domyślne parametry ciasteczek pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Ciasteczka są stosowane najczęściej w przypadku stron wymagających logowania i do monitorowania aktywności odwiedzających użytkowników. Przechowywane informacje w żaden sposób nie ujawniają tożsamości osoby, która korzysta ze strony internetowej.']},
    {h:'Wykorzystanie plików cookies przez witrynę biosys.pl', ul:[{t:'logowanie do Panelu Klienta', href:'https://aktualizacje.biosys.pl:4443/otrs/customer.pl'},'pozyskiwanie anonimowych informacji dotyczących sposobu, w jaki użytkownicy korzystają ze strony internetowej biosys.pl','dane z plików analitycznych (statystyki) nie umożliwiają nam personalnej identyfikacji użytkowników korzystających z witryny biosys.pl','witryna wykorzystuje m.in. mechanizmy Google Analytics i Hotjar','celem wykorzystywania cookies jest zapewnienie wysokich standardów bezpieczeństwa']},
    {h:'Kategorie plików cookies i zgoda', p:['Pliki cookies na tej witrynie podzielone są na trzy kategorie. Niezbędne — wymagane do działania serwisu, sesji, bezpieczeństwa oraz zapisania Twojego wyboru zgód; działają zawsze. Statystyka — anonimowe pomiary ruchu i skuteczności podstron (Google Analytics). Marketing — pomiar kampanii i remarketing.','Statystyka i marketing uruchamiają się wyłącznie po wyrażeniu przez Ciebie zgody. Do momentu jej udzielenia narzędzia analityczne i marketingowe pozostają zablokowane zgodnie z mechanizmem Google Consent Mode (analytics_storage, ad_storage, ad_user_data, ad_personalization ustawione na „denied”).','Zgodę możesz zmienić lub wycofać w dowolnym momencie — kliknij „Ustawienia cookies” w stopce strony albo ikonę zgód w lewym dolnym narożniku. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.']},
    {h:'Zarządzanie plikami cookies przez użytkownika', p:['W zależności od wykorzystywanej przeglądarki internetowej użytkownik może wyłączyć lub ograniczyć funkcjonalność plików cookies. Może to uniemożliwić korzystanie z niektórych funkcjonalności, jak chociażby z dostępu do Panelu Klienta.']},
    {h:'Jak wyłączyć funkcjonalność cookies lub wyczyścić zgromadzone dane?', p:['Ustawienia realizuje się w różny sposób, w zależności od wykorzystywanej przeglądarki. Poniżej lista najpopularniejszych przeglądarek internetowych:'], ul:[{t:'Google Chrome', href:'https://support.google.com/chrome/answer/95647'},{t:'Firefox', href:'https://www.firefox.com/pl/privacy/websites/cookie-settings/'},{t:'Microsoft Edge', href:'https://support.microsoft.com/pl-PL/edge/view-and-delete-browser-history-in-microsoft-edge'},{t:'Safari', href:'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac'}]}
  ]
},
{
  key:'regulamin', tag:'Regulamin', isDoc:true, kicker:'DOKUMENTY', kicker2:'Regulamin i dokumenty',
  title1:'Regulamin.', title2:'Ogólne Warunki Handlowe.',
  intro:'Wszelkie informacje zawarte na tej stronie internetowej mają charakter informacyjny i nie stanowią oferty handlowej w rozumieniu art. 66 §1 Kodeksu Cywilnego.',
  checklist:[], ctaShort:'', secondaryCta:'',
  heroVariant:'none', hasForm:false, hasCtaBand:false,
  docsTitle:'Ogólne Warunki Handlowe',
  docsLead:'OWH mają zastosowanie do umów sprzedaży towarów i usług zawieranych przez BioSys sp. z o.o. z kontrahentami w ramach prowadzonej przez nich działalności gospodarczej lub zawodowej. Sprzedaż nie następuje na rzecz konsumentów.',
  docs:[
    {name:'OWH od 2021-04-01', desc:'Ogólne Warunki Handlowe BioSys spółka z ograniczoną odpowiedzialnością z dnia 2021-04-01.', href:RES('docowh','assets/docs/owh-biosys.pdf'), meta:'PDF'},
    {name:'2023-05-15 Oświadczenie BioSys w sprawie biometrii i fotorejestracji', desc:'Stanowisko w sprawie prawnych możliwości stosowania czytników biometrycznych oraz czytników z aparatami fotograficznymi w systemach czasu pracy i kontroli dostępu.', href:RES('docbio','assets/docs/oswiadczenie-biometria-fotorejestracja-2023-05-15.pdf'), meta:'PDF'}
  ],
  seoTitle:'Regulamin i dokumenty BioSys',
  seoLead:'Poniżej znajdują się dokumenty regulujące współpracę z BioSys sp. z o.o. oraz oświadczenia spółki dotyczące przetwarzania danych.',
  seoBlocks:[
    {t:'Charakter informacji na stronie', d:'Wszelkie informacje zawarte na tej stronie internetowej mają charakter informacyjny i nie stanowią oferty handlowej w rozumieniu art. 66 §1 Kodeksu Cywilnego. Wiążące są warunki wskazane w ofercie przygotowanej przez przedstawiciela BioSys, opatrzonej numerem oferty, datą przygotowania i terminem ważności.'},
    {t:'Zakres stosowania OWH', d:'OWH mają zastosowanie do umów sprzedaży towarów i usług zawieranych przez BioSys sp. z o.o. z kontrahentami zawierającymi te umowy w ramach działalności gospodarczej lub zawodowej. Sprzedaż nie następuje na rzecz osób fizycznych — konsumentów, więc OWH nie mają do nich zastosowania. Podpisanie umowy lub złożenie zamówienia oznacza przyjęcie OWH; w razie sprzeczności wiążąca jest umowa.'},
    {t:'Dostępność dokumentów', d:'OWH są udostępnione na stronie w sposób umożliwiający ich wielokrotne skopiowanie, przechowywanie i odtwarzanie. Na życzenie Kupującego mogą być przesłane na jego adres w formie elektronicznej lub papierowej.'},
    {t:'Dane spółki', d:'BioSys spółka z ograniczoną odpowiedzialnością, osiedle Na Stawach 6/24, 34-200 Sucha Beskidzka. KRS 0000693036 (Sąd Rejonowy dla Krakowa-Śródmieścia w Krakowie, XII Wydział Gospodarczy KRS), NIP 5521667821, REGON 120604950, nr rejestrowy BDO 000359964, kapitał zakładowy 50.000,00 zł.'}
  ]
},
{
  key:'blog', tag:'Blog', isBlog:true, kicker:'BLOG', kicker2:'Wiedza o RCP, kontroli dostępu i automatyzacji',
  title1:'Blog BioSys.', title2:'Praktyczna wiedza o czasie pracy.',
  intro:'Artykuły o rejestracji czasu pracy, kontroli dostępu i automatyzacji procesów kadrowych — pisane przez ludzi, którzy wdrażają te systemy na produkcji, w magazynach i w biurach.',
  ctaShort:'Umów analizę procesu', secondaryCta:'Zobacz rozwiązania',
  heroVariant:'articles', hasForm:false, hasCtaBand:true,
  ctaLabel:'Chcesz wiedzieć, jak te rozwiązania sprawdzą się u Ciebie? Umów bezpłatną analizę procesu.',
  articles:[
    {
      cat:'EWIDENCJA CZASU PRACY', img:RES('blog1','assets/blog-1.webp'),
      title:'Ewidencja czasu pracy – od biurokratycznego przymusu do strategicznego atutu Twojej firmy',
      d:'W erze cyfryzacji elektroniczna ewidencja czasu pracy to fundament nowoczesnego HR, który oszczędza czas, pieniądze i rozwiewa obawy związane z audytem czy RODO.',
      blocks:[
        {p:'Kiedy słyszysz „ewidencja czasu pracy”, przed oczami pojawia Ci się obraz stosu papierów i obowiązku „do odhaczenia”. A co, jeśli spojrzysz na nią z perspektywy strategicznego zarządzania firmą? Ewidencja to wymóg prawny, ale i genialne narzędzie wzmacniające zaufanie. W erze cyfryzacji elektroniczna ewidencja czasu pracy to fundament nowoczesnego HR, który oszczędza czas, pieniądze i rozwiewa obawy związane z audytem czy RODO.'},
        {p:'Papier czy cyfrowy ekran? Przepisy nie narzucają formy. Najważniejsze jest, by w archiwach niczego nie brakowało. Jeśli zależy Ci na „świętym spokoju” podczas kontroli i pewności, że wszystko przebiega zgodnie z literą prawa, postaw na cyfryzację i automatyzację, które całkowicie wyeliminują ryzyko błędu ludzkiego (tzw. human error).'},
        {h:'Lista obecności vs ewidencja, czyli pułapka, w którą łatwo wpaść'},
        {p:'Wiele firm traktuje te dokumenty zamiennie, a to błąd. Szukając odpowiedzi na to, jakie ma ewidencja czasu pracy a lista obecności różnice, zapamiętaj: lista to potwierdzenie, że dana osoba pojawiła się w zakładzie lub biurze. Nie mówi nic o nadgodzinach, delegacjach, absencjach, pracy nocnej. Podczas kontroli z urzędu PIP czy sporu sądowego odręczny autograf na nic Ci się nie zda. Twoim najsilniejszym dowodem rzetelności jest dopiero szczegółowy, analityczny zapis przepracowanych godzin.'},
        {h:'Jak prowadzić ewidencję czasu pracy zgodnie z kodeksem pracy?'},
        {p:'Zgodnie z art. 149 Kodeksu pracy, prowadzenie rejestru jest Twoim obowiązkiem już od pierwszego zatrudnionego na umowę o pracę. Jej zadaniem jest prawidłowe ustalenie pensji oraz innych świadczeń, a pracownik ma prawo wglądu w dane „na żądanie”.'},
        {p:'Są jednak wyjątki! Przepisy art. 149 § 2 k.p. zwalniają z prowadzenia ewidencji godzinowej:'},
        {ul:['osoby na zadaniowym czasie pracy','kadrę zarządzającą reprezentującą pracodawcę','pracowników otrzymujących ryczałt za nadgodziny bądź pracę w nocy']},
        {p:'Dla tej grupy wystarczy ewidencja uproszczona. Zamiast sztywnych godzin „od-do” odnotowujesz w niej:'},
        {ul:['dni wolne','rodzaj i wymiar urlopów','zwolnienia oraz inne nieobecności','dyżury']},
        {h:'Jakie są składowe ewidencji czasu pracy?'},
        {p:'Co dokładnie musi znaleźć się w dokumencie? Zajrzyj do rozporządzenia Ministra Rodziny, Pracy i Polityki Społecznej z 10 grudnia 2018 r., które precyzuje temat „co do joty”. Zgodnie z przepisami, do rejestru trafia pełen obraz czasu pracownika, czyli:'},
        {ul:['liczba przepracowanych godzin','dokładny czas rozpoczęcia i zakończenia zadań','praca w porze nocnej','nadgodziny','dni wolne z tytułu przeciętnie pięciodniowego tygodnia pracy','dyżury wraz z godzinami i miejscem ich pełnienia','urlopy','zwolnienia lekarskie','wszelkie inne nieobecności (zarówno usprawiedliwione, jak i nie)']},
        {p:'To mnóstwo zmiennych dla jednej osoby, a teraz pomnóż pracę kadr przez liczbę załogi. Nic dziwnego, że papierowe zeszyty czy Excel w końcu zawodzą. Wystarczy mały błąd, a konsekwencje ponosi cała organizacja.'},
        {h:'Więcej niż obowiązek, czyli jak rzetelna analityka chroni przed karami i buduje zaufanie'},
        {p:'Kary za brak ewidencji czasu pracy pracownika są traktowane jako wykroczenie przeciwko prawom podwładnego (art. 281 § 1 pkt 6 Kodeksu pracy), a Państwowa Inspekcja Pracy nie ma dla takich zaniedbań litości. Czego możesz się spodziewać? Grzywny od 1000 do 30 tys. zł.'},
        {p:'Prawdziwe kłopoty zaczną się w sądzie. Bez twardych logów systemowych nie masz jak obronić się przed roszczeniami o nierozliczone nadgodziny i jesteś na przegranej pozycji.'},
        {p:'Dobrze poprowadzona ewidencja to więcej niż administracyjny przymus. To fundament zaufania i zdrowej kultury w zespole. Gdy pracownicy wiedzą, że każda godzina i każdy dyżur są precyzyjnie odnotowane, czują się szanowani i traktowani uczciwie. Nie martwią się, czy ich wysiłek zostanie rzetelnie wyceniony. Efekt? Mniej spięć, większa motywacja i stabilne relacje.'},
        {p:'Twojemu biznesowi gwarantuje porządek, bezpieczeństwo prawne i realne oszczędności. Ręczne, żmudne liczenie minut z różnych źródeł, to prosta droga do pomyłek. Błędy w wypłatach oraz dni tracone przez dział HR kosztują Cię finalnie więcej niż jednorazowe wdrożenie sprawdzonego systemu.'},
        {h:'System RCP, czyli profesjonalna rejestracja czasu pracy'},
        {p:'Zarządzanie tak skomplikowaną strukturą ułatwi Ci program do ewidencji czasu pracy. W ramach nowoczesnej infrastruktury IT zainstalujemy zaawansowany rejestrator czasu pracy, który błyskawicznie zidentyfikuje pracowników za pomocą szyfrowanych kart zbliżeniowych RFID, breloków, opasek lub kodu PIN.'},
        {p:'Twoja firma działa w terenie albo opiera się na home office? Dla rozproszonych zespołów sprawdzi się program do ewidencji czasu pracy kierowców i pracowników zdalnych. W tym modelu niezastąpiona będzie rejestracja czasu pracy z geolokalizacją. Aplikacja zapisuje dokładne współrzędne GPS za każdym razem, gdy pracownicy zmieniają status logowania. Należy jednak pamiętać, że system RCP to nie sucha kontrola godzin, ale też (opcjonalnie) integracja systemu RCP z programem kadrowo-płacowym, ERP czy Business Intelligence.'},
        {p:'Oprogramowanie BioSys połączone z nowoczesnymi czytnikami całkowicie zdejmie z biznesu uciążliwą „papierologię”. Zyskasz pewne, aktualne dane, a dział kadr odzyska czas na zadania wymagające prawdziwie ludzkiego podejścia. Dlatego przestań traktować obowiązek raportowania jako zło konieczne, a spójrz na nie jak na narzędzie, które ułatwia codzienne operacje, oszczędza nerwy i buduje partnerskie relacje.'},
        {p:'Chcesz zgłębić tajniki systemów RCP? Już wkrótce opublikujemy serię wpisów rozkładających tę technologię na czynniki pierwsze.'}
      ]
    },
    {
      cat:'SYSTEMY RCP · CZĘŚĆ 1', img:RES('blog2','assets/blog-2.webp'),
      title:'Kiedy rozliczenie czasu pracy przestaje być problemem, czyli jak nowoczesna ewidencja zmieni codzienność Twojej firmy',
      d:'Największy chaos w firmie zaczyna się od kilku kartek papieru. Poznaj cztery filary skutecznego systemu RCP: oprogramowanie, sprzęt, wdrożenie i usługi.',
      blocks:[
        {p:'Największy chaos w firmie zaczyna się od kilku kartek papieru. Wyobraź sobie sytuację. Poniedziałek, godzina 6:45. Pierwsi pracownicy pojawiają się na zmianie. Ktoś podpisuje papierową listę obecności, inna osoba o tym zapomina, a kolejna spóźnia się o godzinę, ale wpisuje czas taki, jak pozostali. Przychodzi koniec miesiąca i zaczyna się najtrudniejszy okres dla działu kadr:'},
        {ul:['weryfikacja godzin i ewentualnych nadgodzin','absencji','wyjaśniania rozbieżności poprzedzających wypłaty']},
        {p:'Kadry szukają „danych” na kartkach papieru, w tabelach Excela, w e-mailach i smsach. Menadżerowie odrywani są od pracy, by potwierdzać (lub też nie) obecności. Pracownicy są poddenerwowani, gdyż nie otrzymali wynagrodzenia za nadgodziny, bo ktoś zapomniał to oznaczyć. Nagle okazuje się, że największym problemem nie jest czas pracy, a brak wiarygodnego źródła informacji o nim. A wszędzie tam, gdzie pojawia się chaos, znika efektywność.'},
        {p:'Czas pracy jest kluczowym zasobem w biznesie. Dla Twojej firmy oznacza koszty, ale i realizację celów. Dla pracowników wynagrodzenia. Inwestujesz w ludzi, technologie i rozwój? Czas także zasługuje na nowoczesny system rejestracji. Bo kiedy pracownik wie, że jego praca jest właściwie dokumentowana, a Ty masz pewność jakości danych, korzystają na tym wszyscy.'},
        {h:'Od kartki do nowoczesnego czytnika RCP – krótka historia rejestracji czasu pracy'},
        {p:'Wraz z ewolucją Twojego biznesu pojawiają się nowe wyzwania:'},
        {ul:['różne harmonogramy','praca hybrydowa lub home office','delegacje i szkolenia','wiele lokalizacji czy praca w terenie','rosnąca liczba wniosków pracowniczych']},
        {p:'Ręczna administracja wszystkich tych procesów zaczyna zabierać coraz wiele czasu, ale na szczęście jest rozwiązanie – system RCP (rejestracji i rozliczania czasu pracy) od BioSys. To zaawansowane narzędzie, które pozwoli rzetelnie zapisywać i rozliczyć wszystkie zarejestrowane zdarzenia. Ekosystem w zależności od modułów obsługuje:'},
        {ul:['zapis wejść i wyjść','harmonogramy','przerwy','pracę zdalną','integrację systemu RCP z programem kadrowo-płacowym (np. Comarch Optima, Enova) czy ERP']},
        {p:'To nie jest jeden czytnik przy wejściu, ale spójna architektura IT.'},
        {h:'Trzy elementy, które tworzą skuteczny system RCP'},
        {p:'Profesjonalny, nowoczesny system rejestracji czasu pracy składa się z czterech nierozerwalnych filarów: oprogramowania, sprzętu, wdrożenia i usług. Omówmy je po krótce.'},
        {p:'Punkt 1. Oprogramowanie RCP: miejsce, gdzie dane zaczynają pracować. Samo zapisanie obecności nie wystarczy. „Suche” dane muszą zostać przetworzone, by odciążyć dział kadr, kierowników, pracowników. Sercem infrastruktury jest autorskie oprogramowanie BioSys (wersja Desktop), wspierane przez opcjonalne moduły rozszerzające. Jego podstawowym zadaniem jest:'},
        {ul:['planowanie czasu pracy','obsługiwanie absencji','przygotowywanie raportów']},
        {p:'Punkt 2. Rejestrator czasu pracy: sprzęt do szybkiej i wygodnej rejestracji zdarzeń. Pierwszy kontakt pracowników z systemem następuje przy czytniku. Punkty rejestracji zazwyczaj są:'},
        {ul:['czytnikami na ścianie lub połączonymi z kontrolą dostępu (KD) np. w formie bramek','mobilną aplikacją do rejestracji czasu pracy']},
        {p:'W praktyce rejestratory czasu pracy są w kategoriach:'},
        {ul:['STANDARD: proste czytniki dedykowane do podstawowych zdarzeń (wejście, wyjście, przerwa).','BIZNES: o podwyższonym standardzie zapisujące do 8 zdarzeń (w tym rejestrator czasu pracy z fotorejestracją).']},
        {p:'Pracownicy mogą identyfikować się za pomocą metod zbliżeniowych lub kodów PIN. System/program do rejestracji czasu pracy uniemożliwia korzystanie z biometrii (analizy rysów twarzy, odcisków palców), na bazie obowiązujących przepisów RODO.'},
        {p:'Punkt 3 i 4. Usługi wdrożeniowe i wsparcie. Technologia wymaga odpowiedniego utrzymania, dlatego kompleksowa realizacja BioSys obejmuje usługi wdrożeniowe:'},
        {ul:['instalację','montaż (w tym pakiety Express i Standard)','szkolenia']},
        {p:'Oferujemy też wsparcie serwisowe:'},
        {ul:['od braku pakietu (gdy masz własny dział IT)','przez pakiety godzinowe','aż po SLA (umowa gwarantująca m.in. sprzęt zastępczy i szybkie czasy reakcji)']},
        {h:'Jak wybrać odpowiedni system RCP?'},
        {p:'Odpowiemy głosem eksperta z BioSys:'},
        {q:'W dobie powszechnej informacji i AI firmy coraz częściej przychodzą do nas już w jakiś sposób wyedukowane, natomiast wciąż bardzo często dominują dwa podejścia. W pierwszym główny nacisk jest położony na to, jaki czytnik wybrać, ile ma być rejestratorów – bez dokładniejszej analizy wewnętrznych procesów i potrzeb. Drugi typ zleca napisanie zapytania modelowi AI i bez żadnej walidacji przekazuje je do nas. Analizując powstały mix możliwości od różnych dostawców wygenerowany przez AI, finalnie okazuje się, że takiego rozwiązanie na rynku nie istnieje🙂. Dlatego zawsze rekomendujemy rozmowę i weryfikację swoich założeń, aby nawet Klienci, którzy pierwszy podchodzą do wyboru lub nie mają odpowiednich zasobów na analizę, określili rozwiązanie dopasowane do swoich potrzeb.'},
        {p:'Rejestracja czasu pracy może kojarzyć się z narzędziem kontroli i nadzorowania ludzi. Perspektywa zmieni się błyskawicznie, jeżeli pokażesz ją jako narzędzie uczciwego rozliczenia wykonanych przez pracowników zadań.'},
        {p:'To pierwsza z dziewięciu części serii o systemach RCP. W kolejnym wpisie: „Kryteria wyboru platformy: dlaczego sam czytnik na ścianie to zaledwie wierzchołek góry lodowej?” dowiesz się, na co zwrócić uwagę przy wyborze systemu RCP.'},
        {p:'Gotów, by odesłać papierową biurokrację na karty historii? Skontaktuj się z ekspertem BioSys i umów na bezpłatną konsultację. Przeanalizujemy specyfikę Twojej firmy i zaprojektujemy architekturę RCP, która przejmie ciężar żmudnych rozliczeń. Oddaj „czarną robotę” maszynom i odzyskaj to, co w biznesie najcenniejsze – bezbłędne dane, oszczędność czasu i pieniędzy, święty spokój i zaufanie pracowników.'}
      ]
    },
    {
      cat:'SYSTEMY RCP · CZĘŚĆ 2', img:RES('blog3','assets/blog-3.webp'),
      title:'Dlaczego czytnik to nie wszystko? Na co zwrócić uwagę wybierając system RCP',
      d:'Kwestia rejestratora czasu pracy ma znaczenie, nie zaprzeczamy. W 10-stopniowej skali w naszej ocenie czytnik to 2, max 3.',
      blocks:[
        {p:'W poprzedniej części powiedzieliśmy, z czego składa się dobry system rejestracji czasu pracy (oprogramowanie, sprzęt, wdrożenie i usługi). Dziś odpowiemy na pytanie: „który czytnik czasu pracy powinniśmy wybrać, żeby technologia nie zestarzała się po pół roku?”. Kiedy stwierdzamy, że od urządzenia nigdy nie należy zaczynać, spotykamy się ze zdziwieniem.'},
        {p:'Kwestia rejestratora czasu pracy ma znaczenie, nie zaprzeczamy. Naturalnym odruchem jest pytanie o modele i cenę, ponieważ właśnie czytnik jest kojarzony z elektroniczną ewidencją (każdy go widzi i z niego korzysta). Jednak nawet najbardziej zaawansowane urządzenie pełni w ekosystemie wyłącznie zbiera informacje, ale ich nie analizuje. W 10-stopniowej skali w naszej ocenie czytnik to 2, max 3. Reszta to dobrze dobrane oprogramowanie systemu RCP, które weryfikuje dane, układa je raporty i automatyzuje rozliczenia. To ono decyduje, czy dział kadr odzyska bezcenny czas, a Twoja firma wyeliminuje pomyłki w wypłatach. Skupienie się wyłącznie na sprzęcie, z pominięciem pytań o to, kto i w jakim celu będzie analizował spływające logi, prowadzi do zakupu technologii, która nie rozwiązuje żadnych problemów Twojego biznesu.'},
        {p:'Głos eksperta BioSys:'},
        {q:'Kiedy Klient pyta nas najpierw o model czytnika, zawsze zadajemy pytanie zwrotne: a co ma się stać z tymi danymi później? Bardzo często okazuje się, że nikt w firmie jeszcze tego nie ustalił. To właśnie ta odpowiedź powinna być kluczowa w wyborze systemu. Dobór czytnika jest oczywiście ważny, ale ważniejsze jest, aby dane przez niego zebrane ułatwiały pracę oraz była możliwa łatwa rekonfiguracji narzędzia lub jego rozbudowa, jeśli potrzeby firmy ewoluują.'},
        {h:'Audyt wewnętrzny przed wdrożeniem RCP. Zobacz, jak kilka właściwie zadanych pytań uchroni Twoją firmę przed kosztowną pomyłką'},
        {p:'Zastanawiasz się jak ocenić potrzeby firmy przed zakupem systemu RCP? Kluczem jest audyt wewnętrzny. Zbierz osoby decyzyjne, dział IT i tych, którzy na co dzień zajmują się ewidencjami oraz raportowaniem. Odpowiedzcie wspólnie na kilka pytań:'},
        {ul:['Jak dziś wygląda rejestracja czasu w Twojej firmie?','Jakie problemy generuje obecny sposób ewidencji i rozliczania czasu pracy?','Kto zajmuje się zbieraniem danych i ile czasu mu to zajmuje?','Jakie systemy pracy obowiązują w Twojej organizacji (podstawowy, równoważny, zadaniowy, a może praca odbywa się bez sztywnego grafiku)?','Ilu jest dziś pracowników i jak szybko firma planuje rosnąć?','Gdzie fizycznie odbywa się rejestracja (jedna lokalizacja czy kilka)?','Jeśli planowana jest rejestracja przerw w pracy to jaką drogę musi pokonać pracownik na terenie firmy?','Czy planowana jest integracja systemu RCP z systemem kadrowo-płacowym, ERP lub Business Intelligence (teraz lub w przyszłości)?','Jak wyobrażasz sobie działanie firmy (idealny scenariusz) po uruchomieniu systemu RCP?']},
        {p:'Szczere odpowiedzi uchronią Was przed nietrafioną inwestycją i wskażą jak wybrać system RCP dopasowany do procesów firmy.'},
        {h:'Mapowanie procesów kadrowych przed wdrożeniem RCP. Sprawdź, gdzie powstają informacyjne zatory i jak technologia może je udrożnić'},
        {p:'Aby system RCP nie był tylko ładnym urządzeniem na korytarzu, a stał się w 100% przydatnym narzędziem, musisz też prześwietlić obecne nawyki (działania) w Twojej firmie. Nad czym powinieneś „pochylić głowę”? Oto krótka checklista wyboru systemu rejestracji pracy:'},
        {ul:['Kto i kiedy planuje harmonogram pracy (bezpośredni przełożeni, kierownicy, a może wyłącznie dział kadr)?','Czy przewidujesz włączenie w proces planowania i wstępnego rozliczania nadgodzin bezpośrednich przełożonych?','Czy zwolnienia chorobowe są wpisywane ręcznie, czy zaimplementowany jest dostęp poza PUE ZUS?','Jak wygląda proces rozliczania nadgodzin (od polecenia pracy, przez akceptację, aż po finalne rozliczenie)?','Czy pracownicy rejestrują obecność przed godzinami grafiku i koniec już po nim (jak system powinien się zachować, szczególnie jeśli ten czas to nie nadgodziny)?','Jak długo trwa rozliczenie miesiąca i ile osób jest w ten proces zaangażowanych?']},
        {p:'Audyt oraz mapowanie procesów wewnętrznych pozwalają obnażyć codzienne bolączki działu kadr, kierowników i pracowników. Dzięki nim unikniesz najczęstszych błędów przy wyborze systemu RCP i skrócisz rozmowę z ekspertami BioSys o połowę. Sprawisz, że od razu mówicie o konkretach, zamiast błądzić po ogólnikach. Checklista pozwoli Wam ustalić, które funkcje będą dla Twojej firmy realną wartością, a które zbędnym kosztem, gdyż nigdy ich nie wykorzystasz w pełni ich potencjału. Unikniesz też zakupu systemu RCP z czytnikami, które nie są dostosowane do specyfiki firmy oraz obecnych przyzwyczajeń załogi.'},
        {h:'Konsultacja wdrożenia systemu rejestracji czasu pracy, czyli rozmowa z ekspertem, który chce zrozumieć Twój biznes'},
        {p:'Nie wiesz, od czego zacząć? Skorzystaj z doświadczenia BioSys. Już podczas pierwszej rozmowy konsultant podpowie Ci, jak ocenić potrzeby firmy przed zakupem systemu RCP. Wybada realne zapotrzebowania i pomoże Ci uniknąć wdrożenia systemu, który za rok okaże się za mały albo, co gorsza, zbyt rozbudowany względem wymogów Twojej firmy.'},
        {p:'Zrealizowaliśmy ponad 1500 wdrożeń. Z dużą pewnością mieliśmy okazję zetknąć się z wyzwaniami podobnymi do Twoich, a jeśli nie, to chętnie zastanowimy się, jak możemy Ci pomóc. Jeśli w trakcie konsultacji nie mamy pewności, że dany system zrealizuje Twoje cele wdrożeniowe, powiemy Ci o tym wprost. Zależy nam na współpracy, a nie jednorazowej transakcji.'},
        {p:'Skoro wiesz już, że fizyczne urządzenie to początek ścieżki, czas spojrzeć na jej metę. W kolejnej części cyklu odwrócimy proces planowania o 180 stopni. Zapraszamy do lektury wpisu: Zaczynamy od końca, czyli jaki finał rozliczeniowy w dziale kadr ma gwarantować nowa technologia?'}
      ]
    }
  ]
},
{
  key:'panel', tag:'Panel klienta', isPanel:true, kicker:'PANEL KLIENTA', kicker2:'Serwis HelpDesk BioSys',
  title1:'Panel Klienta BioSys.', title2:'Wsparcie i aktualizacje w jednym miejscu.',
  intro:'Systemy ewidencji i rejestracji czasu pracy oraz kontroli dostępu wymagają opieki serwisowej na lata. Panel Klienta to miejsce, w którym zgłaszasz zapytania do naszych techników, pobierasz aktualizacje i sprawdzasz status zgłoszenia.',
  ctaShort:'Zaloguj się do panelu', secondaryCta:'Zdalna pomoc',
  checklist:['Zgłoszenia serwisowe online','Aktualizacje Etatomierz do pobrania','Szyfrowane połączenie SSL'],
  heroVariant:'security', hasForm:false, hasCtaBand:false,
  securityTitle:'Bezpieczny dostęp do wsparcia', securitySubtitle:'Zgłoszenia i dane konfiguracyjne trafiają tylko do naszych techników.',
  badges:['✓ Szyfrowane połączenie','✓ Historia zgłoszeń','✓ Aktualizacje Etatomierz'],
  panelLinks:[
    {t:'Aktualizacje systemu',d:'Najnowsze wersje oprogramowania Etatomierz do pobrania.'},
    {t:'Zdalna pomoc',d:'Połącz się z technikiem BioSys w czasie rzeczywistym.'},
    {t:'Zgłoś problem',d:'Otwórz zgłoszenie serwisowe i śledź jego status.'},
    {t:'Kontakt z technikiem',d:'Zamów kontakt technika w sprawie konfiguracji lub aktualizacji.'}
  ]
},
{
  key:'produkcja', tag:'Produkcja', kicker:'SYSTEM RCP DLA PRODUKCJI', kicker2:'Listy obecności LIVE i raporty dla hali produkcyjnej',
  title1:'Zoptymalizuj Produkcję.', title2:'Rzeczywisty Czas Pracy i Listy Obecności LIVE.',
  intro:'Zarządzanie wydajnością na hali produkcyjnej opiera się na dyscyplinie i wysokiej dostępności zespołu. Problemy ze spóźnieniami, przeciągającymi się przerwami, czy "koleżeńskim" odbijaniem kart destabilizują planowanie. System RCP BioSys oddaje w ręce Kierowników Produkcji narzędzie do realnej kontroli – zarządzaj procesem, a nie papierami.',
  challenge:'Kierownik zmiany nie jest od bycia detektywem czy ręcznego korygowania papierowych list obecności. Dostarczamy precyzyjne dane w czasie rzeczywistym. Widzisz wyraźnie, kto jest gotowy do pracy, eliminujesz nadużycia i sprawiedliwie rozliczasz czas. Zdejmujemy ciężar administracyjny z barków brygadzistów.',
  audienceGenitive:'zarządzania produkcją',
  features:[
    {n:'01',t:'Listy obecności LIVE',d:'Stały dostęp do rzetelnych danych o dostępności załogi. Natychmiast wiesz, jakimi zasobami dysponujesz na starcie zmiany, co pozwala szybko reagować na braki przy kluczowych maszynach.'},
    {n:'02',t:'Fotorejestracja przy odbiciach',d:'Funkcja robienia zdjęcia w momencie rejestracji skutecznie eliminuje proceder odbijania kart przez kolegów. Dodatkowo weryfikujesz, czy pracownik był odpowiednio ubrany (np. w odzież ochronną) przed startem produkcji.'},
    {n:'03',t:'Skuteczne zarządzanie przerwami i spóźnieniami',d:'Automatyczne rozliczanie limitu przerw (w tym przerwy "na papierosa"). System dyscyplinuje zespół i pozwala na sprawiedliwe, równe traktowanie całej załogi – koniec z płaceniem za nieprzepracowane minuty.'},
    {n:'04',t:'Szybka delegacja zadań',d:'Bezpośredni przełożeni zyskują dostęp do szybkiej akceptacji nadgodzin czy korygowania zdarzeń wprost ze swojego pulpitu, bez zbędnych wędrówek do biura kadr.'}
  ],
  outcome:'Kierownicy zmian widzą wyłącznie swoich pracowników i pracują na bieżących, zweryfikowanych danych zamiast papierowych list. To mniej administracji na hali i szybsze reagowanie na braki kadrowe.',
  ctaLabel:'Skontaktuj się z nami i zobacz listy obecności LIVE w akcji na swojej hali produkcyjnej.', ctaShort:'Zobacz demo LIVE',
  heroVariant:'dashboard', featuresVariant:'list', hasForm:true,
  dashTitle:'Obecność na zmianie', stats:[{label:'Obecni na zmianie',value:'183'},{label:'Do weryfikacji',value:'12'},{label:'Przerwy przekroczone',value:'4'}], barVals:[70,62,80,55,68,74,60,85]
},
{
  key:'hr', tag:'HR i Zarząd', kicker:'SYSTEM RCP DLA DZIAŁU HR I ZARZĄDU', kicker2:'Automatyzacja rozliczania czasu pracy',
  title1:'Zautomatyzuj Rejestrację Czasu Pracy.', title2:'Odzyskaj czas Kadr i tnij koszty.',
  intro:'Zatory informacyjne, błędy w rozliczeniach i papierowe listy obecności to codzienność, która hamuje wiele działów Kadr. System Rejestracji Czasu Pracy (RCP) BioSys transformuje środowisko pracy HR. Automatyzujemy żmudne, powtarzalne procesy, aby specjaliści mogli skupić się na ludziach, a Zarząd na wynikach finansowych.',
  challenge:'Eliminujemy „głuchy telefon” pomiędzy przełożonymi a kadrami. Zastępujemy przestarzałe metody rzetelnym i w 100% cyfrowym procesem. System sam wychwytuje niezgodności, pomaga ukrócić nadużycia, a przede wszystkim – pilnuje pełnej zgodności z Kodeksem Pracy i układami zbiorowymi.',
  audienceGenitive:'działu HR i Zarządu',
  features:[
    {n:'01',t:'Zgodność z Kodeksem Pracy',d:'System wyręcza i wspiera operatorów. Automatycznie informuje o ewentualnych niezgodnościach podczas planowania i rozliczania godzin, minimalizując ryzyko kontroli i roszczeń.'},
    {n:'02',t:'Samoobsługa pracownicza',d:'Panel pracownika pozwala załodze samodzielnie sprawdzać limit urlopu, raporty obecności czy grafiki. Zdejmuje to z Kadr obowiązek ciągłego odpowiadania na rutynowe pytania.'},
    {n:'03',t:'Integracja z systemami Kadrowo-Płacowymi',d:'Posiadamy gotowe interfejsy do wymiany danych (K-P). Eliminujemy ryzyko pomyłek przy ręcznym przepisywaniu godzin i skracamy czas zamknięcia miesiąca z kilku dni do kilku minut.'},
    {n:'04',t:'Likwidacja papieru i realne oszczędności',d:'Odejście od list papierowych na rzecz elektronicznej, rzetelnej dokumentacji pracowniczej. Płacisz wyłącznie za faktycznie przepracowany czas, likwidując koszty spóźnień czy wcześniejszych wyjść.'}
  ],
  outcome:'Diametralna redukcja kosztów operacyjnych i uszczelnienie funduszu wynagrodzeń (oszczędności widoczne niemal natychmiast). Dział HR zostaje całkowicie odciążony z „papierologii” i powtarzalnych błędów.',
  ctaLabel:'Umów się na krótką demonstrację i zobacz, ile czasu i kapitału może zaoszczędzić Twoja firma.', ctaShort:'Umów demonstrację',
  heroVariant:'dashboard', featuresVariant:'grid', hasForm:true,
  dashTitle:'Rozliczenia i wnioski', stats:[{label:'Zamknięcie miesiąca',value:'3h'},{label:'Wnioski do akceptacji',value:'8'},{label:'Zgodność z KP',value:'100%'}], barVals:[60,45,70,50,65,55,80,58]
},
{
  key:'magazyn', tag:'Magazyn i Logistyka', kicker:'SYSTEM KD DLA MAGAZYNU I LOGISTYKI', kicker2:'Rejestracja czasu pracy i kontrola dostępu dla magazynów i logistyki',
  title1:'Niezawodna Kontrola Dostępu dla Magazynu i Logistyki.', title2:'Zabezpiecz swój obiekt.',
  intro:'Pełna kontrola nad przepływem osób w rozległych halach magazynowych i centrach logistycznych to fundament bezpieczeństwa i ciągłości operacyjnej. System Kontroli Dostępu (KD) od BioSys został zaprojektowany z myślą o Działach Utrzymania Ruchu i Dyrektorach Operacyjnych, pomagając im tworzyć bezpieczne, szczelne i łatwe w administrowaniu środowisko pracy.',
  challenge:'Zabezpieczenie terenu zakładu wymaga stabilnej i niezawodnej technologii. Nasz system skutecznie eliminuje ryzyko przebywania osób nieupoważnionych w strefach krytycznych, gwarantując jednocześnie płynność poruszania się dla autoryzowanego personelu. Ograniczamy chaos, uszczelniamy teren i minimalizujemy obciążenie działów IT.',
  audienceGenitive:'Twojego obiektu',
  features:[
    {t:'Jedno spójne środowisko',d:'Zarządzaj dostępem, czasem pracy i zadaniami z poziomu jednej, intuicyjnej aplikacji. Koniec z ręcznym przepisywaniem danych między różnymi programami.'},
    {t:'Bezpieczeństwo na najwyższym poziomie',d:'Zabezpiecz wejścia na teren zakładu. Zyskaj pewność, że opuszczenie i wejście do konkretnej strefy jest odnotowane w czasie rzeczywistym.'},
    {t:'Skalowalność i modułowość',d:'Zaczynasz od kluczowych wejść, a w miarę wzrostu potrzeb i rozbudowy hal, elastycznie modyfikujesz architekturę. System BioSys rośnie razem z Twoją infrastrukturą.'},
    {t:'Minimalizacja obciążenia operatorów',d:'Łatwy interfejs, oparty o układ znany z pakietu MS Office, obniża próg wejścia dla nowych pracowników DUR i eliminuje potrzebę wielogodzinnych szkoleń.'}
  ],
  outcome:'Otrzymujesz stabilne narzędzie, które daje pełen wgląd w to, kto i kiedy przebywa na terenie obiektu. Ograniczasz ryzyko incydentów, podnosisz standardy BHP i zabezpieczasz majątek firmy bez dodatkowego obciążania pionu technicznego.',
  ctaLabel:'Skontaktuj się z nami i sprawdź, jak skutecznie wdrożyć kontrolę dostępu w Twoim centrum logistycznym.', ctaShort:'Umów audyt bezpieczeństwa',
  heroVariant:'dashboard', featuresVariant:'grid', hasForm:true,
  dashTitle:'Strefy i wejścia', stats:[{label:'Strefy pod kontrolą',value:'12'},{label:'Wejścia dziś',value:'340'},{label:'Alerty stref',value:'2'}], barVals:[40,55,48,62,50,58,66,52]
},
{
  key:'biura', tag:'Jednostki publiczne, biura i praca hybrydowa', kicker:'SYSTEM RCP DLA BIUR I PRACY HYBRYDOWEJ', kicker2:'Cyfrowe biuro dla zespołów hybrydowych',
  title1:'Przenieś Rejestrację Czasu Pracy do Cyfrowego Świata.', title2:'Uwolnij swój dział HR.',
  intro:'Zarządzanie czasem pracy zespołów biurowych i rozliczanie modelu hybrydowego wymaga elastyczności połączonej z jasnymi procedurami. System BioSys RCP to nowoczesne środowisko, które upraszcza obieg wniosków urlopowych, rejestrację pracy zdalnej oraz dostęp do planów pracy, tworząc przyjazne cyfrowe biuro dla pracowników i dając pełną kontrolę działom HR.',
  challenge:'Działy Kadr są codziennie zasypywane pytaniami o limity urlopowe i zgłoszeniami o pracy zdalnej, co wybija ekspertów z rytmu i spowalnia procesy. Rozwiązujemy problem „głuchego telefonu”, rozproszonej komunikacji mailowej i konieczności przetwarzania dziesiątek papierowych wniosków, dostarczając zintegrowane i bezpieczne narzędzie, łatwe w utrzymaniu dla działu IT.',
  audienceGenitive:'biura',
  features:[
    {t:'Samoobsługa pracownicza',d:'Dedykowany panel pracownika pozwala załodze na samodzielne sprawdzanie limitu dni wolnych, rejestrację pracy zdalnej (Home Office) czy składanie elektronicznych wniosków. HR nie jest już punktem informacyjnym.'},
    {t:'Brak papierowej dokumentacji',d:'W erze pracy hybrydowej obieg papieru to przeżytek. Dokumentacja prowadzona w pełni elektronicznie jest bezpieczna, zgodna z prawem i nie generuje kosztów materiałów biurowych czy archiwizacji.'},
    {t:'Zgodność z Kodeksem Pracy i układami',d:'Elastyczne grafiki biurowe potrafią sprawiać problemy przy rozliczeniach. BioSys automatycznie weryfikuje planowanie i realizację, minimalizując ryzyko niezgodności bez nadmiernego obciążania przełożonych.'},
    {t:'Proste wdrożenie i utrzymanie dla IT',d:'Jeden interfejs bazujący na znajomym układzie "wstęgi", łatwy do przyswojenia przez operatorów z Kadr. Gotowe integracje wymiany danych (K-P) sprawiają, że implementacja oprogramowania odbywa się bez przestojów w firmie.'}
  ],
  outcome:'Pełna cyfryzacja i automatyzacja komunikacji na linii pracownik – przełożony – kadry. Zespoły HR zyskują przestrzeń na działania strategiczne, odzyskując dziesiątki godzin miesięcznie marnowanych wcześniej na przepisywanie danych i ręczną obsługę wniosków.',
  ctaLabel:'Zobacz system na żywo. Skontaktuj się i przenieś procesy HR na wyższy poziom.', ctaShort:'Zobacz system na żywo',
  heroVariant:'dashboard', featuresVariant:'grid', hasForm:true,
  dashTitle:'Cyfrowe biuro', stats:[{label:'Wnioski urlopowe',value:'5'},{label:'Home office dziś',value:'42'},{label:'Braki w dokumentacji',value:'0'}], barVals:[50,58,44,66,52,60,48,70]
},
{
  key:'zdrowie', tag:'Ochrona Zdrowia', kicker:'RCP I KD DLA SEKTORA MEDYCZNEGO', kicker2:'RCP i KD dla szpitali i przychodni',
  title1:'RCP i Kontrola Dostępu dla Sektora Medycznego.', title2:'Zintegruj swoje systemy.',
  intro:'Sektor ochrony zdrowia wymaga rozwiązań informatycznych o najwyższym rygorze bezpieczeństwa, niezawodności i kompatybilności. Rozwiązania BioSys z zakresu Rejestracji Czasu Pracy (RCP) i Kontroli Dostępu (KD) to stabilna infrastruktura wspierająca pracę działów IT i optymalizująca budżety kontrolowane przez Działy Zakupów.',
  challenge:'Złożona struktura zatrudnienia medycznego, konieczność restrykcyjnej ochrony stref wrażliwych (jak magazyny leków czy bloki operacyjne) oraz przestarzałe metody wymiany danych z systemami szpitalnymi to najczęstsze obciążenia dla informatyków. Dostarczamy system z centralnym zarządzaniem, który eliminuje ręczne przetwarzanie danych i izoluje krytyczne informacje.',
  audienceGenitive:'placówek medycznych',
  features:[
    {t:'Integracja z systemami zewnętrznymi (np. Infomedica)',d:'Oprogramowanie BioSys posiada gotowe mechanizmy wymiany danych. Płynna, dwukierunkowa integracja ze specjalistycznymi systemami szpitalnymi eliminuje dublowanie pracy i błędy przy przenoszeniu informacji kadrowych.'},
    {t:'Jeden interfejs dla RCP i Kontroli Dostępu',d:'Zarządzaj czasem personelu oraz autoryzacją wejść do zastrzeżonych sekcji szpitala z poziomu tej samej aplikacji. To redukcja koniecznych szkoleń, zmniejszenie liczby licencji i ułatwiona administracja sieci.'},
    {t:'Rozliczenia w środowisku zamkniętym',d:'W placówkach medycznych priorytetem jest ochrona danych pacjentów i personelu. Oferujemy system pracujący na warunkach klienta (zakup), co gwarantuje pełną izolację, zgodność z polityką bezpieczeństwa i RODO.'},
    {t:'Wdrażanie etapowe i skalowalność budżetowa',d:'Odpowiedź na bolączki Działów Zakupów. System można budować modułowo – rozpoczynając od wybranej lokalizacji lub kluczowego oddziału (np. SOR) i w miarę dostępności środków, bezpiecznie skalować go na resztę obiektu.'}
  ],
  outcome:'IT zyskuje stabilny, centralnie zarządzany ekosystem bez barier integracyjnych. Działy zakupów optymalizują wydatki poprzez elastyczne planowanie rozwoju licencji. Cała placówka jest bezpieczniejsza, a przepływ personelu uporządkowany.',
  ctaLabel:'Zoptymalizuj zarządzanie personelem medycznym. Umów się na analizę wdrożenia dla swojej placówki.', ctaShort:'Umów analizę wdrożenia',
  heroVariant:'dashboard', featuresVariant:'grid', hasForm:true,
  securityTitle:'Środowisko zakup', securitySubtitle:'Dane pacjentów i personelu pozostają w infrastrukturze placówki.',
  badges:['✓ Integracja HIS','✓ Zakup','✓ Zgodność z RODO'],
  dashTitle:'Strefy i personel', stats:[{label:'Strefy wrażliwe',value:'8'},{label:'Personel na dyżurze',value:'126'},{label:'Wejścia bez uprawnień',value:'0'}], barVals:[46,58,52,64,48,60,56,68]
},
{
  key:'oddzialy', tag:'Wiele oddziałów', kicker:'RCP I KD DLA SIECI ODDZIAŁÓW', kicker2:'Jeden system dla struktury rozproszonej',
  title1:'Jeden System RCP i KD dla Wszystkich Oddziałów.', title2:'Zarządzaj centralnie, skaluj bez ograniczeń.',
  intro:'Sieć oddziałów, magazynów czy punktów usługowych rozproszonych w wielu lokalizacjach utrudnia jednolite zarządzanie czasem pracy i dostępem. System BioSys centralizuje dane ze wszystkich lokalizacji w jednym środowisku, dając zarządowi i IT pełny obraz organizacji bez potrzeby utrzymywania osobnych narzędzi dla każdego oddziału.',
  challenge:'Różne oddziały często pracują na różnych zasadach, harmonogramach i, czasem, różnych systemach. Ujednolicamy standard rejestracji czasu pracy i kontroli dostępu, eliminując rozbieżności w raportowaniu i utrudnione porównywanie wyników między lokalizacjami.',
  audienceGenitive:'sieci oddziałów',
  features:[
    {n:'01',t:'Centralne zarządzanie z lokalnymi ustawieniami',d:'Wspólna baza danych i reguły korporacyjne, z możliwością dopasowania harmonogramów i wyjątków do specyfiki każdego oddziału.'},
    {n:'02',t:'Raportowanie zbiorcze i porównawcze',d:'Zestawienia obecności, nadgodzin i kosztów pracy w podziale na lokalizacje, dostępne z poziomu jednego pulpitu zarządu.'},
    {n:'03',t:'Wdrożenie etapowe',d:'Uruchamiasz system w jednym oddziale, weryfikujesz efekty, a następnie replikujesz konfigurację na kolejne lokalizacje bez ponownego projektowania od zera.'},
    {n:'04',t:'Spójna kontrola dostępu',d:'Jedna karta lub identyfikator działa we wszystkich lokalizacjach, którym pracownik ma zostać przypisany, z pełną historią wejść i wyjść.'}
  ],
  outcome:'Zarząd i IT otrzymują jeden, spójny obraz całej sieci oddziałów zamiast zestawu niepowiązanych arkuszy i lokalnych systemów. Standaryzacja procesu skraca czas raportowania i ułatwia podejmowanie decyzji na poziomie całej organizacji.',
  ctaLabel:'Porozmawiajmy o wdrożeniu BioSys w Twojej sieci oddziałów.', ctaShort:'Porozmawiajmy o wdrożeniu',
  heroVariant:'dashboard', featuresVariant:'list', hasForm:true,
  branchTiles:[{name:'Warszawa',count:'62'},{name:'Kraków',count:'48'},{name:'Wrocław',count:'35'},{name:'Gdańsk',count:'29'}],
  dashTitle:'Sieć oddziałów', stats:[{label:'Lokalizacje',value:'14'},{label:'Pracownicy w sieci',value:'1 240'},{label:'Rozbieżności w raportach',value:'0'}], barVals:[44,60,50,66,54,62,48,70]
}
];
const CHECKLIST = ['Zakup lub wynajem','Integracje kadrowo-płacowe','System dostosowany do wszystkich branż'];
const ROTATING_KICKERS = [
  'SYSTEMY RCP I KD DLA FIRM, KTÓRE LICZĄ CZAS I PIENIĄDZE',
  '1 600+ ZAKOŃCZONYCH WDROŻEŃ W CAŁEJ POLSCE',
  '650 000 PRACOWNIKÓW KORZYSTA Z BIOSYS KAŻDEGO DNIA',
  'INTEGRACJE KADROWO-PŁACOWE BEZ RĘCZNEGO PRZEPISYWANIA'
];
const BRANCHES = [
  {city:'Gdańsk', x:150, y:52, area:'Województwo pomorskie, warmińsko-mazurskie, zachodnio-pomorskie', tel:'+48 (58) 380 20 38', mail:'gdansk@biosys.pl'},
  {city:'Poznań', x:100, y:118, area:'Województwo wielkopolskie, łódzkie, kujawsko-pomorskie', tel:'+48 (61) 307 06 98', mail:'poznan@biosys.pl'},
  {city:'Warszawa', x:190, y:122, area:'Województwo mazowieckie, podlaskie, lubelskie', tel:'+48 (22) 299 20 27', mail:'warszawa@biosys.pl'},
  {city:'Wrocław', x:96, y:172, area:'Województwo dolnośląskie, opolskie, lubuskie', tel:'+48 (71) 307 05 47', mail:'wroclaw@biosys.pl'}
];
const INTEGRATIONS = [
  {name:'Enova365',type:'Kadry i Płace',draft:false},
  {name:'Comarch ERP Optima',type:'Kadry i Płace',draft:false},
  {name:'Infomedica',type:'Systemy szpitalne',draft:false},
  {name:'Comarch ERP XL',type:'ERP',draft:false},
  {name:'Symfonia Kadry i Płace',type:'Kadry i Płace',draft:false},
  {name:'Teta / Unit4',type:'Kadry i Płace, ERP',draft:false},
  {name:'SAP',type:'ERP',draft:false},
  {name:'Microsoft Dynamics 365',type:'ERP',draft:false},
  {name:'IFS Applications',type:'ERP',draft:false},
  {name:'Płatnik ZUS',type:'Wymiana danych',draft:false},
  {name:'i inne',type:'na życzenie',draft:true}
];
const PROCESS_STEPS = [
  {n:'01',t:'Analiza',d:'Poznajemy Twoje procedury, wyłapujemy słabe punkty i sprawdzamy, jak dzisiaj rozliczasz czas.'},
  {n:'02',t:'Projekt',d:'Dobieramy czytniki, konfigurujemy oprogramowanie i planujemy integrację z Twoimi kadrami.'},
  {n:'03',t:'Wdrożenie',d:'Montujemy sprzęt, uruchamiamy system, testujemy dane i szkolimy Twój zespół z obsługi.'},
  {n:'04',t:'Opieka',d:'Dajemy stałe wsparcie techniczne, pomagamy przy zmianach i rozbudowie systemu.'}
];
const TRUST_STATS = [
  {value:'1 600+',label:'zakończonych wdrożeń'},
  {value:'50 000',label:'godzin wsparcia i opieki rocznie świadczymy naszym Klientom'},
  {value:'5 000',label:'kierowników codziennie zarządza zespołami z wykorzystaniem naszych systemów'},
  {value:'18 000',label:'urządzeń codziennie pracuje na sukces naszych Klientów'},
  {value:'650 000',label:'pracowników każdego dnia rejestruje czas pracy w naszych systemach'}
];
const TRUST_LOGOS = [
  'IKEA','Żywiec Zdrój','Kross','Fakro','Pruszyński','Mlekpol','Adient',
  'Greenpoint','Jamar','Iskra','Dako','Wielton','Nowy Styl',
  'Selena','Amica','Sanok Rubber','Śnieżka','Bakoma','Maspex',
  'Paged','Stelmet','Cedrob','Rawlplug',
  'Rosa','Klimor','Zielona Budka','Sokołów'
];
const CLIENT_LOGOS = [
  'ikea','zywiec','kross.webp','fakro.webp','mlekpol.webp','jamar.webp',
  'iskra.webp','polfa',
  'bialogon.webp','aryzta.webp','drabest.webp','assa-abloy.webp',
  'pruszynski-color.webp','foodcare.webp','inglot.webp',
  'adient','bell','hcp.webp','biblioteka-jagiellonska.webp','biodened.webp','dako','europapier','grand-lubicz.webp',
  'greenpoint','herz.webp','lx-pantos.webp','mokate','numed.webp','pis.webp','rohling.webp','stella.webp','xella'
].map(f => {
  const NAMES = {
    ikea:'IKEA', zywiec:'Żywiec', kross:'Kross', fakro:'FAKRO', mlekpol:'Mlekpol', jamar:'Jamar',
    iskra:'Iskra', grupaazoty:'Grupa Azoty',
    konspol:'Konspol', polfa:'Polfa', foodcare:'FoodCare', inglot:'Inglot', polomarket:'Polomarket',
    'pruszynski-color':'Pruszyński',
    adient:'Adient', bell:'Bell', hcp:'H. Cegielski-Poznań', 'grand-lubicz':'Grand Lubicz', herz:'Herz',
    'biblioteka-jagiellonska':'Biblioteka Jagiellońska',
    biodened:'Biodened', dako:'Dako', europapier:'Europapier',
    aryzta:'ARYZTA', drabest:'Drabest', 'assa-abloy':'ASSA ABLOY',
    greenpoint:'Greenpoint', 'lx-pantos':'LX Pantos', mokate:'Mokate',
    numed:'Numed', pis:'Państwowa Inspekcja Sanitarna', rohling:'Rohling', stella:'Stella', xella:'Xella'
  };
  const file = f.includes('.') ? f : f + '.svg';
  const key = f.replace(/\.[a-z0-9]+$/, '');
  const base = key.replace(/-color$/, '');
  const name = NAMES[key] || NAMES[base] || base.replace(/(^|-)([a-z])/g, (m, s, c) => (s ? ' ' : '') + c.toUpperCase());
  return { src: RES('cl_' + key, `assets/clients/${file}`), alt: 'Logo klienta BioSys — ' + name };
});
const INTEGRATION_LOGOS = [
  'ZSRK','raks.webp','komax','groszek.webp','korelacja.webp','Quorum','Infor.webp','sygnity.webp','IFS.webp','Simple.webp','Vulcan.webp','rekord.webp',
  'Streamsoft','Teta.webp','macrologic.webp','Softlab.webp','Wapro.webp','BPSC.webp','Symfonia.webp','ComarchXL.webp','InfoMedica.webp','mMedica.webp','Comarch','enova365','SAP.webp'
].map(f => {
  const file = f.includes('.') ? f : f + '.svg';
  const key = f.replace(/\.[a-z0-9]+$/, '');
  return {
    src: RES('il_' + key, `assets/integrations/${file}`),
    alt: 'Integracja systemu RCP BioSys z ' + key,
    imgStyle: key === 'SAP'
      ? "max-width:100%;max-height:46px;width:auto;height:auto;object-fit:contain"
      : "max-width:100%;max-height:60px;width:auto;height:auto;object-fit:contain"
  };
});
const TESTIMONIALS = [
  {quote:'Od początku zależało nam na tym, aby system wspierał pracę działu kadr, a nie zmieniał naszego podejścia do pracowników. Dzięki automatyzacji zyskaliśmy przejrzysty proces rozliczania czasu pracy i nadgodzin, co ułatwia codzienną pracę wszystkim zaangażowanym.', name:'Sławomir Czekaj', role:'Dyrektor Techniczno-Handlowy', company:'ZUK Oświęcim', logo:'assets/cases/zuk.svg', logoH:26, logoDark:false},
  {quote:'Dzięki wdrożeniu nowego systemu **zyskaliśmy nie tylko czas, ale też pewność, że dane z których wyliczamy płace są w 100% poprawne**. Nie musimy już przepisywać ich ręcznie, ani sprawdzać czy wszystko się zgadza. Wiemy, że dane raz zatwierdzone w systemie RCP trafią kompletne do systemu Enova. Automatyzacja obecnych procesów i integracja z Enova zmieniły na plus naszą codzienność w zespole.', name:'Monika Sulikowska', role:'sp. ds. personalnych', company:'Mitsui High-tec (Europe) sp. z o.o.', logo:'assets/cases/mitsui.svg', logoH:26, logoDark:false},
  {quote:'Wprowadzenie systemu przyniosło nam **konkretne, wymierne korzyści**. Dzięki integracji z systemem Comarch Optima procesy kadrowe, które wcześniej były czasochłonne i obarczone ryzykiem błędów – **zostały zautomatyzowane i znacząco skrócone.** Dane o obecnościach są teraz rzetelne i dostępne w czasie rzeczywistym. To była jedna z lepszych decyzji operacyjnych.', name:'Mateusz Pikul', role:'kierownik produkcji', company:'Polan Polsko-Francuska sp. z o.o. joint venture', logo:'assets/cases/polan.svg', logoH:20, logoDark:false},
  {quote:'Od kiedy wdrożyliśmy elektroniczny panel pracownika nasz **zespół kadrowy oszczędza kilka godzin pracy w skali miesiąca**. Czas ten możemy przeznaczyć na realizację innych projektów. Pracownicy w końcu mają jasność co do grafików i swojego czasu pracy. Komunikują nam, że **wszystko stało się prostsze i bardziej transparentne.**', name:'Paulina Marciniak', role:'dyrektor zarządzający', company:'Bemarc sp. z o.o.', logo:'assets/cases/bemarc-white.svg', logoH:20, logoDark:true}
];
const FAQ_ITEMS = [
  {q:'Czy system obsługuje różne modele czasu pracy?',a:'Tak. Projekt konfiguracji może uwzględniać różne harmonogramy, okresy rozliczeniowe, wyjątki i role właściwe dla organizacji.'},
  {q:'Czy BioSys może działać w chmurze i dla wielu lokalizacji?',a:'Tak. Model wdrożenia — chmura, zakup lub hybrydowy — dobieramy do wymagań bezpieczeństwa i liczby lokalizacji, tak by dane pozostały spójne dla całej sieci.'},
  {q:'Jak kalkulator wylicza oszczędności?',a:'Kalkulator porównuje bieżące koszty administracyjne i błędy rozliczeniowe z czasem i kosztem po wdrożeniu automatyzacji, na podstawie danych o skali organizacji.'},
  {q:'Czy landing pages są gotowe do kampanii?',a:'Tak. Każda strona ma dedykowany nagłówek, opis wyzwań i formularz przygotowany pod parametry kampanii płatnej.'}
];
const REF_CLIENTS = [
  {"n":"ADIENT","w":"Śląskie","b":["automotive","metal produkcja"],"s":"RCP, KD","m":"ewakuacja, web pracownik","i":"WF-GANG","r":true,"o":false,"f":"assets/ref/lite/adient.webp"},
  {"n":"AOTiM","w":"Mazowieckie","b":["szpitale/ochrona zdrowia","budżetówka"],"s":"RCP","m":"SLA, integracja, system rozproszony","i":"Optima (Comarch)","r":true,"o":false,"f":"assets/ref/lite/aotim.webp"},
  {"n":"APTEKI CENTRUM","w":"Warmińsko-mazurskie","b":["handel","szpitale/ochrona zdrowia"],"s":"RCP","m":"system rozproszony","i":"","r":true,"o":false,"f":"assets/ref/lite/apteki-centrum.webp"},
  {"n":"ARCOM","w":"Małopolskie","b":["budownictwo/materiały/inżynieria"],"s":"RCP","m":"web pracownik, foto","i":"inne","r":true,"o":false,"f":"assets/ref/lite/arcom.webp"},
  {"n":"ARKA","w":"Zachodniopomorskie","b":["woda/armatura"],"s":"RCP","m":"integracja","i":"Optima (Comarch)","r":true,"o":false,"f":"assets/ref/lite/arka.webp"},
  {"n":"ASSA ABLOY","w":"Wielkopolskie","b":["usługi"],"s":"RCP, KD","m":"integracja","i":"Enova (Soneta)","r":true,"o":false,"f":"assets/ref/lite/assa-abloy.webp"},
  {"n":"B&B OPAKOWANIA","w":"Lubuskie","b":["metal produkcja"],"s":"RCP, KD","m":"web pracownik","i":"Enova (Soneta)","r":true,"o":true,"f":"assets/ref/lite/b-b-opakowania.webp"},
  {"n":"BCP OLSZÓWKA","w":"Śląskie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"web pracownik, foto, system rozproszony","i":"Infomedica","r":true,"o":false,"f":"assets/ref/lite/bcp-olszowka.webp"},
  {"n":"BIBLIOTEKA JAGIELLOŃSKA W KRAKOWIE","w":"Małopolskie","b":["budżetówka"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/biblioteka-jagiellonska.webp"},
  {"n":"BIOMASA","w":"Wielkopolskie","b":["eko/zuk/recycling"],"s":"RCP","m":"system rozproszony, integracja","i":"Optima (Comarch)","r":true,"o":false,"f":"assets/ref/lite/biomasa.webp"},
  {"n":"BITTNER","w":"Mazowieckie","b":["spożywka produkcja"],"s":"RCP","m":"SLA","i":"","r":true,"o":false,"f":"assets/ref/lite/bittner.webp"},
  {"n":"BIURO DO SPRAW SUBSTANCJI CHEMICZNYCH","w":"Łódzkie","b":["budżetówka"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/biuro-do-spraw-substancji-chemicznych.webp"},
  {"n":"CEBI","w":"Śląskie","b":["metal produkcja"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/cebi.webp"},
  {"n":"CONTEYOR","w":"Śląskie","b":["budownictwo/materiały/inżynieria"],"s":"RCP, KD","m":"web pracownik, ewakuacja","i":"","r":true,"o":false,"f":"assets/ref/lite/conteyor.webp"},
  {"n":"CUKIERNIA BIAŁOGON","w":"Świętokrzyskie","b":["spożywka produkcja"],"s":"RCP","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/cukiernia-bialogon.webp"},
  {"n":"DALIAN TALENT","w":"Małopolskie","b":["tworzywa sztuczne/szkło produkcja"],"s":"RCP, KD","m":"web pracownik","i":"inne","r":true,"o":true,"f":"assets/ref/lite/dalian-talent.webp"},
  {"n":"DCRiO","w":"Dolnośląskie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"web pracownik, foto, SLA","i":"inne","r":true,"o":false,"f":"assets/ref/lite/dcrio.webp"},
  {"n":"DENTIS","w":"Mazowieckie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/dentis.webp"},
  {"n":"DR GAJDA","w":"Zachodniopomorskie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/dr-gajda.webp"},
  {"n":"EMITERNET","w":"Śląskie","b":["usługi","elektryka","eko/zuk/recycling"],"s":"RCP","m":"system rozproszony","i":"","r":true,"o":false,"f":"assets/ref/lite/emiternet.webp"},
  {"n":"ESPEFA","w":"Małopolskie","b":["kosmetyki/farmacja/beauty"],"s":"RCP","m":"SLA","i":"","r":true,"o":false,"f":"assets/ref/lite/espefa.webp"},
  {"n":"EUROPAPIER","w":"Wielkopolskie","b":["elektryka"],"s":"RCP, KD","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/europapier.webp"},
  {"n":"EUROPHARMA","w":"Dolnośląskie","b":["kosmetyki/farmacja/beauty"],"s":"RCP","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/europharma.webp"},
  {"n":"GARDNER AEROSPACE","w":"Podkarpackie","b":["budownictwo/materiały/inżynieria"],"s":"KD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/gardner-aerospace.webp"},
  {"n":"GRAND LUBICZ USTKA","w":"Pomorskie","b":["hotele"],"s":"RCP","m":"web pracownik, SLA","i":"Optima (Comarch)","r":true,"o":false,"f":"assets/ref/lite/grand-lubicz-ustka.webp"},
  {"n":"HERZ","w":"Małopolskie","b":["woda/armatura"],"s":"RCP","m":"integracja","i":"Optima (Comarch)","r":true,"o":false,"f":"assets/ref/lite/herz.webp"},
  {"n":"INSTALACJE ST","w":"Mazowieckie","b":["tworzywa sztuczne/szkło produkcja"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/instalacje-st.webp"},
  {"n":"ISKRA ZMIŁS","w":"Świętokrzyskie","b":["metal produkcja"],"s":"RCP, KD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/iskra-zmils.webp"},
  {"n":"KLUB FITNESS","w":"Małopolskie","b":["usługi"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/klub-fitness.webp"},
  {"n":"LABOKLIN","w":"Mazowieckie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/laboklin.webp"},
  {"n":"LANDSTAL","w":"Łódzkie","b":["automotive"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/landstal.webp"},
  {"n":"LINK2PEOPLE","w":"Mazowieckie","b":["usługi"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/link2people.webp"},
  {"n":"LX PANTOS","w":"Mazowieckie","b":["logistyka/spedycja/transport"],"s":"RCP","m":"integracja, system rozproszony","i":"TETA","r":true,"o":false,"f":"assets/ref/lite/lx-pantos.webp"},
  {"n":"MASTER-TECH","w":"Łódzkie","b":["logistyka/spedycja/transport","metal produkcja"],"s":"RCP, KD","m":"ewakuacja","i":"","r":true,"o":false,"f":"assets/ref/lite/master-tech.webp"},
  {"n":"MEGAGROUP LOGISTIC","w":"Wielkopolskie","b":["logistyka/spedycja/transport"],"s":"RCP","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/megagroup-logistic.webp"},
  {"n":"MITSUI","w":"Opolskie","b":["automotive","metal produkcja"],"s":"RCP","m":"web pracownik","i":"Optima (Comarch)","r":true,"o":false,"f":"assets/ref/lite/mitsui.webp"},
  {"n":"MUDEUNG","w":"Wielkopolskie","b":["elektryka"],"s":"RCP","m":"","i":"","r":true,"o":true,"f":"assets/ref/lite/mudeung.webp"},
  {"n":"NACOMI","w":"Śląskie","b":["kosmetyki/farmacja/beauty"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/nacomi.webp"},
  {"n":"NOV-WELD","w":"Pomorskie","b":["usługi"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/nov-weld.webp"},
  {"n":"ORKLA CARE","w":"Mazowieckie","b":["kosmetyki/farmacja/beauty"],"s":"RCP, KD","m":"foto","i":"","r":true,"o":false,"f":"assets/ref/lite/orkla-care.webp"},
  {"n":"PODGIK","w":"Wielkopolskie","b":["budżetówka"],"s":"RCP","m":"web pracownik, SLA","i":"","r":true,"o":false,"f":"assets/ref/lite/podgik.webp"},
  {"n":"POLAM","w":"Śląskie","b":["metal produkcja"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/polam.webp"},
  {"n":"POLAN","w":"Małopolskie","b":["spożywka produkcja"],"s":"RCP, KD","m":"integracja","i":"Optima (Comarch)","r":true,"o":true,"f":"assets/ref/lite/polan.webp"},
  {"n":"POLFA LUBLIN","w":"Lubelskie","b":["kosmetyki/farmacja/beauty"],"s":"RCP, KD","m":"ewakuacja","i":"","r":true,"o":false,"f":"assets/ref/lite/polfa-lublin.webp"},
  {"n":"POMORSKA IZBA ARCHITEKTÓW","w":"Pomorskie","b":["budownictwo/materiały/inżynieria"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/pomorska-izba-architektow.webp"},
  {"n":"PROZON","w":"Mazowieckie","b":["usługi","eko/zuk/recycling"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/prozon.webp"},
  {"n":"RCKIK","w":"Dolnośląskie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/rckik.webp"},
  {"n":"REYNDERS","w":"Łódzkie","b":["papier"],"s":"RCP, KD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/reynders.webp"},
  {"n":"ROZBUD","w":"Podlaskie","b":["metal produkcja","budownictwo/materiały/inżynieria"],"s":"RCP","m":"system rozproszony, foto","i":"","r":true,"o":false,"f":"assets/ref/lite/rozbud.webp"},
  {"n":"SPECKABLE","w":"Wielkopolskie","b":["budownictwo/materiały/inżynieria","elektryka"],"s":"RCP, KD","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/speckable.webp"},
  {"n":"STAROSTWO POWIATOWE W BIAŁYMSTOKU","w":"Podlaskie","b":["budżetówka"],"s":"RCP","m":"SLA","i":"","r":true,"o":false,"f":"assets/ref/lite/starostwo-powiatowe-w-bialymstoku.webp"},
  {"n":"SUN GARDEN","w":"Wielkopolskie","b":["tworzywa sztuczne/szkło produkcja"],"s":"RCP, KD","m":"SLA","i":"","r":true,"o":false,"f":"assets/ref/lite/sun-garden.webp"},
  {"n":"ŚLĄSKIE CENTRUM USŁUG WSPÓLNYCH","w":"Śląskie","b":["budżetówka"],"s":"KD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/slaskie-centrum-us-ug-wspolnych.webp"},
  {"n":"TARSMAK","w":"Małopolskie","b":["spożywka produkcja"],"s":"RCP, KD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/tarsmak.webp"},
  {"n":"TECHNOTEX","w":"Dolnośląskie","b":["tekstylia/dziewiarstwo/ubrania"],"s":"RCP, KD","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/technotex.webp"},
  {"n":"TOHO","w":"Mazowieckie","b":["automotive"],"s":"RCP","m":"foto","i":"","r":true,"o":false,"f":"assets/ref/lite/toho.webp"},
  {"n":"TOLMET","w":"Łódzkie","b":["automotive","metal produkcja"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/tolmet.webp"},
  {"n":"UM ŁÓDZKIE","w":"Łódzkie","b":["budżetówka"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/um-odzkie.webp"},
  {"n":"URZĄD STATYSTYCZNY RZESZÓW","w":"Podkarpackie","b":["budżetówka"],"s":"RCP, KD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/urzad-statystyczny-rzeszow.webp"},
  {"n":"VITWORKER","w":"Kujawsko-pomorskie","b":["metal produkcja"],"s":"RCP, ZAD","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/vitworker.webp"},
  {"n":"WCPiT","w":"Wielkopolskie","b":["szpitale/ochrona zdrowia"],"s":"RCP","m":"","i":"","r":true,"o":false,"f":"assets/ref/lite/wcpit.webp"},
  {"n":"WFOŚIGW W GDAŃSKU","w":"Pomorskie","b":["budżetówka"],"s":"RCP","m":"web pracownik","i":"","r":true,"o":false,"f":"assets/ref/lite/wfosigw-w-gdansku.webp"},
  {"n":"WUP W WARSZAWIE","w":"Mazowieckie","b":["budżetówka"],"s":"RCP","m":"integracja, system rozproszony","i":"Quorum (QNT)","r":true,"o":false,"f":"assets/ref/lite/wup-w-warszawie.webp"},
  {"n":"XELLA","w":"Mazowieckie","b":["budownictwo/materiały/inżynieria"],"s":"KD","m":"ewakuacja","i":"","r":true,"o":false,"f":"assets/ref/lite/xella.webp"},
  {"n":"ŻABCZYŃSCY","w":"Mazowieckie","b":["spożywka produkcja"],"s":"RCP, KD","m":"ewakuacja","i":"","r":true,"o":false,"f":"assets/ref/lite/zabczynscy.webp"}
];
const REF_BRANCH_LABELS = {
  'metal produkcja':'Przemysł metalowy',
  'spożywka produkcja':'Przemysł spożywczy',
  'kosmetyki/farmacja/beauty':'Przemysł kosmetyczny i farmaceutyczny',
  'automotive':'Motoryzacja',
  'elektryka':'Przemysł elektrotechniczny',
  'tworzywa sztuczne/szkło produkcja':'Tworzywa sztuczne i szkło',
  'papier':'Przemysł papierniczy',
  'tekstylia/dziewiarstwo/ubrania':'Przemysł tekstylny i odzieżowy',
  'budownictwo/materiały/inżynieria':'Budownictwo i inżynieria',
  'woda/armatura':'Technologie wodne i armatura',
  'logistyka/spedycja/transport':'Logistyka i transport',
  'handel':'Handel i dystrybucja',
  'usługi':'Usługi biznesowe',
  'eko/zuk/recycling':'Gospodarka komunalna',
  'szpitale/ochrona zdrowia':'Ochrona zdrowia',
  'hotele':'Hotelarstwo',
  'budżetówka':'Administracja publiczna i instytucje',
  'meble':'Meble',
  'drzewo/drewno':'Drewno'
};
const REF_BRANCHES = (() => {
  const m = {};
  REF_CLIENTS.forEach(c => c.b.forEach(b => { m[b] = (m[b] || 0) + 1; }));
  return Object.keys(m).sort((a, b) => m[b] - m[a] || a.localeCompare(b, 'pl'))
    .map(k => ({ key: k, label: REF_BRANCH_LABELS[k] || (k.charAt(0).toUpperCase() + k.slice(1)), count: m[k] }));
})();
const KD_NEEDS = [
  { t: 'ograniczenie dostępu do stref/pomieszczeń' },
  { t: 'informacja o ilości osób przebywających w strefie / firmie' },
  { t: 'dostęp do pomieszczeń tylko w określonych godzinach' },
  { t: 'podgląd na mapę live osób poruszających się po organizacji' },
  { t: 'obsługa szlabanu lub bramy wjazdowej' },
  { t: 'uporządkowanie ruchu pracowników za pomocą kołowrotu' },
  { t: 'integracja z systemem PPOŻ' },
  { t: 'moduł ewakuacji' },
  { t: 'mój obecny system nie spełnia wszystkich oczekiwań', sub: [
    'brak oczekiwanych funkcjonalności',
    'trudne zarządzanie aplikacją',
    'utrudnione zarządzanie wieloma lokalizacjami / punktami rejestracji',
    'dane nie są synchronizowane',
    'stare urządzenia/oprogramowanie bez wsparcia',
    'brak odpowiedniego poziomu wsparcia od strony obecnego dostawcy'
  ] }
];
const GEO_REGIONS = [
  {n:'dolnośląskie', c:['Wrocław','Wałbrzych','Legnica','Jelenia Góra','Lubin','Głogów','Świdnica']},
  {n:'kujawsko-pomorskie', c:['Bydgoszcz','Toruń','Włocławek','Grudziądz','Inowrocław']},
  {n:'lubelskie', c:['Lublin','Zamość','Chełm','Biała Podlaska','Puławy','Świdnik']},
  {n:'lubuskie', c:['Gorzów Wielkopolski','Zielona Góra','Nowa Sól','Żary']},
  {n:'łódzkie', c:['Łódź','Piotrków Trybunalski','Pabianice','Tomaszów Mazowiecki','Bełchatów','Zgierz']},
  {n:'małopolskie', c:['Kraków','Tarnów','Nowy Sącz','Oświęcim','Chrzanów','Olkusz']},
  {n:'mazowieckie', c:['Warszawa','Radom','Płock','Siedlce','Pruszków','Ostrołęka','Legionowo']},
  {n:'opolskie', c:['Opole','Kędzierzyn-Koźle','Nysa','Brzeg','Kluczbork']},
  {n:'podkarpackie', c:['Rzeszów','Przemyśl','Stalowa Wola','Mielec','Tarnobrzeg','Krosno']},
  {n:'podlaskie', c:['Białystok','Suwałki','Łomża','Augustów']},
  {n:'pomorskie', c:['Gdańsk','Gdynia','Sopot','Słupsk','Tczew','Starogard Gdański','Wejherowo']},
  {n:'śląskie', c:['Katowice','Częstochowa','Sosnowiec','Gliwice','Zabrze','Bielsko-Biała','Bytom','Rybnik','Tychy']},
  {n:'świętokrzyskie', c:['Kielce','Ostrowiec Świętokrzyski','Starachowice','Skarżysko-Kamienna','Sandomierz']},
  {n:'warmińsko-mazurskie', c:['Olsztyn','Elbląg','Ełk','Ostróda','Iława','Giżycko']},
  {n:'wielkopolskie', c:['Poznań','Kalisz','Konin','Piła','Ostrów Wielkopolski','Gniezno','Leszno']},
  {n:'zachodniopomorskie', c:['Szczecin','Koszalin','Świnoujście','Stargard','Kołobrzeg','Szczecinek']}
];
const SEO_INTRO_R = [
"Firmy w województwie {R} coraz częściej łączą dwa systemy w jednym wdrożeniu: kontrolę dostępu, która decyduje, kto i gdzie może wejść, oraz rejestrację czasu pracy (RCP), która liczy godziny i nadgodziny zespołu. Systemy kontroli dostępu obejmują czytniki kart, karty dostępu i zamki elektroniczne przy drzwiach, a RCP zamienia papierową listę obecności w automatyczny zapis wejść i wyjść.",
"System kontroli dostępu i system RCP w praktyce działają na tym samym sprzęcie przy wejściu do budynku — jeden czytnik otwiera drzwi i jednocześnie odbija czas pracy. W województwie {R} wdrażamy oba rozwiązania od małych biur po zakłady produkcyjne, dobierając osprzęt (karty dostępu, czytniki linii papilarnych, terminale RCP) do wielkości zespołu i liczby wejść. Wdrożenie zwykle dzielimy na etapy, zaczynając od wejścia głównego.",
"Kontrola dostępu do pomieszczeń i rejestracja czasu pracy to dwa najczęściej wdrażane systemy bezpieczeństwa w firmach z województwa {R} — pierwszy chroni dostęp do budynku i poszczególnych stref, drugi porządkuje ewidencję godzin pracy zgodnie z wymogami Kodeksu pracy. Oba korzystają z tych samych nośników: kart dostępu, kodów lub odcisku palca. Wybór nośnika przesądza o późniejszych kosztach eksploatacji systemu.",
"Zamki elektroniczne, czytniki kart i karty dostępu zastępują w firmach tradycyjne klucze, a terminal RCP przy tym samym wejściu zbiera dane do rozliczenia czasu pracy. W województwie {R} taki połączony system wdrażamy zarówno w biurowcach, jak i na halach produkcyjnych, gdzie liczba wejść i zmianowość są większym wyzwaniem niż w małym biurze. Zakres prac ustalamy po wizji lokalnej w obiekcie.",
"Rejestracja czasu pracy i kontrola dostępu należą do systemów, które firmy w województwie {R} wdrażają najczęściej razem — jeden dostawca, jeden czytnik przy drzwiach, jedna baza pracowników. Karty dostępu, czytniki linii papilarnych i terminale RCP to najpopularniejsze urządzenia, a wybór między nimi zależy od budżetu i liczby osób w zespole."
];
const SEO_INTRO_C = [
"Firmy w mieście {C} coraz częściej łączą dwa systemy w jednym wdrożeniu: kontrolę dostępu, która decyduje, kto i gdzie może wejść, oraz rejestrację czasu pracy (RCP), która liczy godziny i nadgodziny zespołu. Systemy kontroli dostępu obejmują czytniki kart, karty dostępu i zamki elektroniczne przy drzwiach, a RCP zamienia papierową listę obecności w automatyczny zapis wejść i wyjść.",
"System kontroli dostępu i system RCP w mieście {C} najczęściej działają na tym samym sprzęcie przy wejściu do budynku — jeden czytnik otwiera drzwi i jednocześnie odbija czas pracy. Wdrażamy oba rozwiązania od małych biur po zakłady produkcyjne, dobierając osprzęt (karty dostępu, czytniki linii papilarnych, terminale RCP) do wielkości zespołu. Zakres wdrożenia ustalamy po krótkiej rozmowie o obiekcie i liczbie wejść.",
"Kontrola dostępu do pomieszczeń i rejestracja czasu pracy to dwa najczęściej wdrażane systemy bezpieczeństwa w firmach z miasta {C} — pierwszy chroni dostęp do budynku i poszczególnych stref, drugi porządkuje ewidencję godzin pracy zgodnie z wymogami Kodeksu pracy. Oba korzystają z tych samych nośników: kart dostępu, kodów lub odcisku palca. Ten sam nośnik obsługuje wtedy oba systemy naraz.",
"Zamki elektroniczne, czytniki kart i karty dostępu zastępują w firmach tradycyjne klucze, a terminal RCP przy tym samym wejściu zbiera dane do rozliczenia czasu pracy. W mieście {C} taki połączony system wdrażamy zarówno w biurach, jak i na halach produkcyjnych, gdzie liczba wejść i zmianowość bywają większym wyzwaniem niż w małym biurze. Liczbę punktów rejestracji dobieramy do układu budynku.",
"Rejestracja czasu pracy i kontrola dostępu należą do systemów, które firmy w mieście {C} wdrażają najczęściej razem — jeden dostawca, jeden czytnik przy drzwiach, jedna baza pracowników. Karty dostępu, czytniki linii papilarnych i terminale RCP to najpopularniejsze urządzenia, a wybór między nimi zależy od budżetu i liczby osób w zespole."
];
const SEO_KD = [
"Kontrola dostępu to dziś standard w budynkach biurowych, halach produkcyjnych i obiektach użyteczności publicznej. Systemy kontroli dostępu ograniczają wejście do wybranych stref tylko uprawnionym osobom — pracownikom, kontrahentom, gościom z jednorazowym kodem. W praktyce oznacza to karty dostępu lub czytniki linii papilarnych przy drzwiach, elektrozaczepy i zwory elektromagnetyczne w zamkach, a przy większych obiektach — kołowroty lub bramki obrotowe na wejściu głównym. System kontroli dostępu można rozbudować o zamki szyfrowe w pomieszczeniach o niższym priorytecie oraz domofony i wideodomofony przy wejściach dla gości. Dobrze zaprojektowana kontrola dostępu do pomieszczeń obejmuje całą strukturę budynku, od parkingu po serwerownię.",
"Dla firm szukających prostego wdrożenia dobrym punktem startu są czytniki kart przy drzwiach wejściowych i zamki elektroniczne zamiast tradycyjnych kluczy. System kontroli dostępu bez okablowania do istniejących drzwi pozwala uniknąć kucia ścian i ingerencji w instalację — bateryjne zamki komunikują się bezprzewodowo z centralą. W większych obiektach warto rozważyć kontrolę dostępu do serwerowni jako odrębną, bardziej rygorystyczną strefę, oraz integrację kontroli dostępu z alarmem, tak by system antywłamaniowy i przejścia działały jako jedna całość. Biometryczna kontrola dostępu — czytniki linii papilarnych lub rozpoznawanie twarzy — eliminuje ryzyko zgubienia lub pożyczenia karty. Przy wejściu dla gości sprawdzają się domofony i wideodomofony z podglądem z recepcji.",
"Kontrola dostępu bezprzewodowa i kontrola dostępu chmurowa zyskują na popularności, bo administrator zarządza uprawnieniami z jednego panelu w przeglądarce, bez lokalnego serwera. Nowe przejścia, zmiana zmiany pracownika czy zablokowanie zgubionej karty to kilka kliknięć, nie wizyta serwisanta. System kontroli dostępu Mifare pozostaje standardem dla firm, które już mają karty zbliżeniowe w innym systemie — czytnik kart zbliżeniowych odczytuje te same nośniki, co ułatwia integrację. System kontroli dostępu na kartę i telefon (NFC) dodatkowo pozwala otwierać drzwi smartfonem, bez konieczności noszenia dodatkowej karty. Uprawnienia można ograniczać czasowo — na przykład dostęp tylko w godzinach zmiany — a każde przejście zapisuje się w historii zdarzeń, co ułatwia późniejsze wyjaśnianie sytuacji spornych.",
"Montaż kontroli dostępu w biurowcu wielopiętrowym różni się od wdrożenia w małym biurze czy na hali produkcyjnej — liczba przejść, rodzaj drzwi i wymagania pożarowe determinują wybór osprzętu. Kontrola dostępu firma po firmie bywa też elementem większego projektu razem z instalacją elektryczną budynku. Kontrola dostępu biuro w standardzie obejmuje zwykle czytnik przy drzwiach wejściowych i recepcji, karty dostępu dla stałych pracowników oraz gościnne kody czasowe. W obiektach z wysoką rotacją osób — magazynach, centrach logistycznych — dobrze sprawdzają się bramki obrotowe połączone z listą obecności. Przy dużej liczbie przejść centrala zarządza uprawnieniami grupowo, więc dodanie nowego pracownika czy zmiana strefy dostępu zajmuje chwilę i nie wymaga wizyty serwisu w obiekcie.",
"System kontroli dostępu dla małej firmy różni się skalą, nie funkcją — nawet kilka drzwi i kilkunastu pracowników zyskuje na uporządkowanej ewidencji wejść. Zamki szyfrowe i elektrozaczepy do drzwi wewnętrznych, karty dostępu dla zespołu i prosty panel administracyjny wystarczą, by zastąpić tradycyjne klucze i wiedzieć, kto i kiedy wchodzi do budynku. W obiektach mieszanych — biurowo-produkcyjnych — kontrola dostępu do pomieszczeń wrażliwych (serwerownia, magazyn, archiwum) bywa wdrażana jako pierwszy etap, a pełne pokrycie budynku dochodzi w kolejnym. Warto od początku zaplanować okablowanie lub wersję bezprzewodową pod docelową liczbę przejść, nawet jeśli montaż obejmie na start tylko część drzwi — późniejsza rozbudowa jest wtedy tańsza i mniej inwazyjna dla wykończonych wnętrz."
];
const SEO_RCP = [
"Rejestracja czasu pracy w firmie zaczyna się od wyboru nośnika — karta pracy, czytnik linii papilarnych lub aplikacja mobilna — i sposobu rozliczania. Program do rejestracji czasu pracy zbiera odbicia z terminala RCP przy wejściu i automatycznie liczy godziny, nadgodziny i spóźnienia, zastępując papierową listę obecności. System RCP online daje wgląd w grafik pracy i harmonogram pracy z każdego miejsca, co ułatwia planowanie zmian w zakładach wielozmianowych. Dane trafiają od razu do raportu miesięcznego.",
"Oprogramowanie RCP w chmurze eliminuje potrzebę własnego serwera — dane z czytnika RCP trafiają bezpośrednio do panelu dostępnego przez przeglądarkę, a kierownik zmiany widzi obecność zespołu w czasie rzeczywistym. Mobilna rejestracja czasu pracy, czyli RCP przez aplikację, sprawdza się przy pracy w terenie i u pracowników zdalnych — logowanie odbywa się telefonem, bez fizycznego terminala. Biometryczna rejestracja czasu pracy dodatkowo wyklucza odbijanie karty za kolegę.",
"System RCP z GPS łączy ewidencję czasu pracy z lokalizacją logowania — przydatne w firmach budowlanych, serwisowych i transportowych, gdzie zespół nie pracuje z jednego biura. Rozliczanie czasu pracy i rozliczanie nadgodzin program wykonuje automatycznie według zapisanego kalendarza zmian, więc dział kadr nie liczy godzin ręcznie w arkuszu. RCP integracja z kadrami pozwala przenieść wyliczone godziny prosto do systemu płacowego, bez przepisywania danych. Raport zamyka się jednym kliknięciem.",
"Ewidencja czasu pracy wzór, jaki wielu pracodawców prowadzi jeszcze w Excelu, sprawdza się do kilku osób — powyżej tego progu program RCP dla firm przejmuje liczenie automatycznie i redukuje błędy. Czytnik kart RCP przy wejściu, terminal z ekranem dotykowym lub aplikacja na telefon — wybór nośnika zależy od tego, czy zespół pracuje stacjonarnie, w terenie czy hybrydowo. RCP dla pracowników zdalnych zwykle łączy logowanie w aplikacji z raportem dziennym zadań. Wyjątki koryguje przełożony w panelu.",
"Grafik pracy i harmonogram pracy w firmach zmianowych wymagają odrębnego modułu planowania — dobry system RCP pozwala ułożyć zmiany z wyprzedzeniem i automatycznie porównać plan z rzeczywistymi odbiciami. Lista obecności aktualizowana na żywo pomaga też w sytuacjach awaryjnych, gdy trzeba szybko sprawdzić, kto jest w budynku. RCP dla małej firmy nie musi oznaczać uproszczonego rozwiązania — ten sam system skaluje się od kilku do kilkuset stanowisk. Moduł planowania działa też na urządzeniach mobilnych."
];
const SEO_COST = [
"Ile kosztuje system kontroli dostępu w firmie zależy głównie od liczby drzwi — cena za drzwi obejmuje czytnik, zamek i okablowanie lub wersję bezprzewodową, a koszt centrali rozkłada się na cały obiekt. Montaż kontroli dostępu w biurowcu cena bywa wyższa przy starszej instalacji elektrycznej, gdzie trzeba dociągnąć przewody do każdego przejścia. System kontroli dostępu dla małej firmy koszt zaczyna się od jednorazowej inwestycji w kilka punktów, bez konieczności objęcia całego budynku od razu. Kolejne przejścia dokłada się w następnych etapach.",
"System RCP cena za pracownika miesięcznie to zwykle model abonamentowy w chmurze — płaci się za aktywne konta, a sprzęt (terminal, czytnik) kupuje się jednorazowo. Program do ewidencji czasu pracy dla 20 pracowników wychodzi więc inaczej w przeliczeniu na osobę niż wdrożenie dla stuosobowego zespołu. Najtańszy system RCP dla małej firmy często opiera się na aplikacji mobilnej bez terminala — mniejszy koszt startowy, więcej pracy ręcznej przy wyjątkach. Przy większych zespołach terminal zwraca się w kilka miesięcy dzięki oszczędności czasu kadr.",
"Wdrożenie systemu RCP w zakładzie produkcyjnym koszt obejmuje zwykle więcej punktów rejestracji niż w biurze — hala, szatnia, magazyn — oraz integrację z rozliczaniem akordu lub zmianowości. Terminal RCP z odciskiem palca cena jest wyższa niż zwykłego czytnika kart, ale eliminuje problem pożyczania karty między pracownikami. RCP z automatycznym eksportem do listy płac skraca czas działu kadr, co w większych zespołach szybko zwraca różnicę w cenie. Do budżetu warto doliczyć szkolenie zespołu i konfigurację reguł rozliczania nadgodzin.",
"Kontrola dostępu z rejestracją czasu pracy dla pracowników w jednym systemie wychodzi zwykle taniej niż dwa niezależne rozwiązania — jeden czytnik przy wejściu obsługuje zarówno otwieranie drzwi, jak i odbicie na liście obecności. Wycena instalacji kontroli dostępu w budynku wielorodzinnym różni się od biurowca liczbą wejść ogólnodostępnych i koniecznością obsługi gości czy kurierów. System kontroli dostępu na kartę i telefon (NFC) bywa droższy na starcie, ale ogranicza koszt wydawania i wymiany zgubionych kart.",
"System RCP integrowany z Comarch Optima, enova czy Symfonią pozwala przenieść wyliczone godziny prosto do systemu kadrowo-płacowego bez ręcznego wprowadzania danych — koszt integracji warto liczyć razem z licencją. Rejestracja czasu pracy dla pracowników zdalnych i hybrydowych zwykle nie wymaga terminala, więc koszt sprzętowy jest niższy, a nacisk przesuwa się na licencję aplikacji. Rejestracja czasu pracy dla agencji pracy tymczasowej musi dodatkowo rozliczać wielu pracodawców użytkowników z jednego systemu."
];
const SEO_FAQ = [
"Kodeks pracy wprost wymaga, by pracodawca prowadził ewidencję czasu pracy — dokument musi zawierać m.in. godziny rozpoczęcia i zakończenia pracy, pracę w porze nocnej, w niedziele i święta oraz w godzinach nadliczbowych. Taką ewidencję trzeba przechowywać przez 10 lat, co w praktyce oznacza, że papierowa lista obecności szybko staje się trudna do zarządzania. Czym różni się RCP od kontroli dostępu? RCP liczy czas pracy i generuje dane do rozliczeń, kontrola dostępu decyduje, kto i gdzie może wejść — w wielu firmach oba systemy działają na tym samym czytniku.",
"Czy odcisk palca do RCP jest zgodny z RODO? Tak, o ile pracodawca ma podstawę prawną (zwykle zgodę pracownika i alternatywę bez biometrii) i odpowiednio zabezpiecza dane. Biometria w pracy bywa też stosowana w kontroli dostępu do stref o wyższym priorytecie. Pracodawca może wymagać logowania GPS w aplikacji RCP przede wszystkim tam, gdzie praca odbywa się w terenie, a nie w stałym miejscu — zakres monitorowania musi być proporcjonalny do celu. Pracownikom, którzy nie wyrażą zgody na biometrię, trzeba zapewnić alternatywny sposób rejestracji — kartę zbliżeniową lub kod PIN.",
"Jak rozliczać nadgodziny w systemie równoważnym? System ten pozwala wydłużyć dobowy wymiar czasu pracy w jednym dniu w zamian za jego skrócenie w innym, w ramach ustalonego okresu rozliczeniowego — dobry program RCP liczy to automatycznie, bez ręcznego przeliczania w arkuszu. Czy lista obecności wystarczy zamiast ewidencji czasu pracy? Nie — lista obecności potwierdza tylko fakt bycia w pracy, a ewidencja musi rejestrować konkretne godziny pracy zgodnie z wymaganiami Kodeksu pracy. W praktyce oznacza to zapis godziny wejścia i wyjścia dla każdego dnia pracy.",
"Jak liczyć czas pracy przy pracy zdalnej? Zasady są te same jak w biurze — liczy się faktyczny czas wykonywania obowiązków, a nie dostępność online, choć w praktyce firmy najczęściej opierają się na raporcie z aplikacji RCP. Kary za brak ewidencji czasu pracy mogą sięgać kilku tysięcy złotych przy kontroli Państwowej Inspekcji Pracy, co dla wielu firm jest głównym argumentem za wdrożeniem systemu. System podstawowy, równoważny i zadaniowy różnią się sposobem rozliczania godzin — RCP musi umieć obsłużyć wybrany wariant. Zmiana systemu rozliczania wymaga aktualizacji regulaminu pracy.",
"Czy przerwa 15 minut wlicza się do czasu pracy? Tak, jeśli wynika z przepisów (np. dla pracujących co najmniej 6 godzin) — dobry system RCP powinien rozróżniać przerwy wliczane i niewliczane. Okres rozliczeniowy 3 czy 12 miesięcy — wybór zależy od sezonowości pracy w firmie; dłuższy okres daje więcej elastyczności w rozkładaniu nadgodzin. Jak dokumentować wyjścia prywatne w godzinach pracy? Odbicie wyjścia i powrotu w systemie RCP jest prostsze i mniej sporne niż zapis papierowy. Czas wyjścia prywatnego można odpracować w innym dniu, o ile wynika to z wniosku pracownika."
];
const SEO_LOCAL_R = [
"RCP na kartę czy na odcisk palca — co wybrać? Karta jest tańsza i szybsza do wymiany, odcisk palca wyklucza pożyczanie identyfikatora, więc wybór zależy od tego, co ważniejsze w konkretnym zespole. RCP stacjonarne czy w chmurze — chmura wygrywa tam, gdzie firma ma kilka lokalizacji i chce jeden wspólny podgląd obecności. Wdrożenia RCP i KD w województwie {R} obsługujemy od doboru sprzętu po konfigurację rozliczeń i serwis pogwarancyjny. Pierwszym krokiem jest zwykle inwentaryzacja drzwi i liczby pracowników.",
"Aplikacja mobilna czy terminal RCP przy drzwiach? Terminal sprawdza się w jednej stałej lokalizacji, aplikacja — gdy zespół pracuje w kilku miejscach lub w terenie; wiele firm łączy oba rozwiązania. Excel czy program RCP — arkusz przestaje wystarczać, gdy trzeba ręcznie sumować nadgodziny dla więcej niż kilku osób i pilnować zgodności z Kodeksem pracy. Serwis systemów RCP i kontroli dostępu w województwie {R} realizujemy zarówno przy nowych wdrożeniach, jak i modernizacji istniejącej instalacji.",
"Najlepsze programy do rejestracji czasu pracy różnią się przede wszystkim integracjami — z systemem kadrowo-płacowym, kontrolą dostępu i grafikiem zmian, nie samą funkcją odbijania karty. Darmowy program do ewidencji czasu pracy bywa dobrym startem dla kilku osób, ale szybko brakuje w nim raportów i eksportu do rozliczeń. Firmy z województwa {R} najczęściej pytają o wdrożenie RCP {RG} połączone z kontrolą dostępu w jednym systemie, bez podwójnego wprowadzania danych. Taki układ upraszcza też późniejszy serwis.",
"Kontrola dostępu bezprzewodowa czy z okablowaniem — wybór zależy od tego, czy budynek jest już wykończony, czy w trakcie budowy. System RCP dla firm z województwa {R} projektujemy tak, by rozliczanie czasu pracy i kontrola przejść działały na jednym czytniku, bez dodatkowych kosztów po stronie sprzętu. Wsparcie serwisowe obejmuje konfigurację, szkolenie zespołu i późniejsze rozszerzenia systemu. Przy modernizacji starszej instalacji sprawdzamy, które elementy — zamki, czytniki, okablowanie — można wykorzystać ponownie.",
"Wybór między systemem podstawowym a rozszerzonym pakietem RCP i KD warto zacząć od liczby drzwi i pracowników, nie od listy funkcji — mniejsze firmy często zaczynają od jednego wejścia i rozbudowują system w miarę potrzeb. Wdrożenie RCP {RG} realizujemy z doborem sprzętu odpowiednim do typu obiektu — biura, hali produkcyjnej lub placówki z ruchem klientów. Serwis i wsparcie techniczne w województwie {R} obejmują też późniejsze zmiany konfiguracji i dodawanie nowych punktów kontroli. Termin wdrożenia ustalamy z wyprzedzeniem."
];
return { CHECKLIST, CASE_STUDIES, HERO_PHOTO_AT, KD_MINI, PAGES, ROTATING_KICKERS, BRANCHES, INTEGRATIONS, PROCESS_STEPS, TRUST_STATS, TRUST_LOGOS, CLIENT_LOGOS, INTEGRATION_LOGOS, TESTIMONIALS, FAQ_ITEMS, REF_CLIENTS, REF_BRANCH_LABELS, REF_BRANCHES, KD_NEEDS, GEO_REGIONS, SEO_INTRO_R, SEO_INTRO_C, SEO_KD, SEO_RCP, SEO_COST, SEO_FAQ, SEO_LOCAL_R };
};
