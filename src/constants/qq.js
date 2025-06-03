

const QUESTIONS = [
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który morfologiczny typ owocnika Basidiomycota ma owocnik rozpostarty, ściśle przylegający do podłoża?",
        "correct_answer": "Rozpostarte",
        "incorrect_answers": [
            "Kolczaste",
            "Dzwonkowate",
            "Konsolowate"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Morfologiczny typ owocnika o powierzchni pokrytej kolcami to…",
        "correct_answer": "Kolczaste",
        "incorrect_answers": [
            "Rozpostarte",
            "Buławkowate",
            "Gasteroidalne"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Jak nazywa się morfologiczny typ owocników tworzących półkowe, hubowate struktury?",
        "correct_answer": "Konsolowate",
        "incorrect_answers": [
            "Rozpostarte",
            "Sekotioidalne",
            "Boletoidalne"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Morfologiczny typ owocników o budowie maczugowatej lub koralowatej to…",
        "correct_answer": "Buławkowate",
        "incorrect_answers": [
            "Dzwonkowate",
            "Agarykoidalne",
            "Gasteroidalne"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Podtyp kapeluszowatych owocników z rurkowatym hymenoforem, charakterystyczny dla borowików, to…",
        "correct_answer": "Boletoidalne",
        "incorrect_answers": [
            "Agarykoidalne",
            "Sekotioidalne",
            "Gasteroidalne"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 9,
        "question": "Morfologiczny typ owocników o częściowo zamkniętym hymenoforze przechodzący ewolucyjnie ku formom zamkniętym to…",
        "correct_answer": "Sekotioidalne",
        "incorrect_answers": [
            "Agarykoidalne",
            "Buławkowate",
            "Konsolowate"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który element kapelusza określa jego obwód i krawędź?",
        "correct_answer": "Brzeg kapelusza",
        "incorrect_answers": [
            "Powierzchnia kapelusza",
            "Barwa kapelusza",
            "Osadzenie trzonu"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Jak nazywa się cecha będąca podstawą oceny faktury wierzchniej strony kapelusza?",
        "correct_answer": "Powierzchnia kapelusza",
        "incorrect_answers": [
            "Brzeg kapelusza",
            "Kształt trzonu",
            "Barwa kapelusza"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Które określenie opisuje kapelusz pokryty lepką, śliską warstwą?",
        "correct_answer": "Śluzowata",
        "incorrect_answers": [
            "Zamszowata",
            "Włóknista",
            "Gładka"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Powierzchnia kapelusza przypominająca zamsz określana jest jako…",
        "correct_answer": "Zamszowata",
        "incorrect_answers": [
            "Śluzowata",
            "Gładka",
            "Łuskowana"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Czernidłak kołpakowaty posiada kapelusz o kształcie…",
        "correct_answer": "Cylindryczny",
        "incorrect_answers": [
            "Lejkowaty",
            "Wklęsły",
            "Płaski"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który z poniższych grzybów jest przykładem gatunku o cylindrycznym kapeluszu?",
        "correct_answer": "Czernidłak kołpakowaty",
        "incorrect_answers": [
            "Borowik szlachetny",
            "Pieprznik jadalny",
            "Czubajka kania"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Borowik szlachetny posiada kapelusz o kształcie…",
        "correct_answer": "Wypukły",
        "incorrect_answers": [
            "Wklęsły",
            "Lejkowaty",
            "Cylindryczny"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który z podanych gatunków ma wypukły kapelusz?",
        "correct_answer": "Borowik szlachetny",
        "incorrect_answers": [
            "Mleczaj rydz",
            "Pieprznik jadalny",
            "Monetnica maślana"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Płachetka kołpakowata charakteryzuje się kapeluszem…",
        "correct_answer": "Wypukłym z garbkiem",
        "incorrect_answers": [
            "Cylindrycznym",
            "Lejkowatym",
            "Płaskim"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Który grzyb ma kapelusz wypukły z wyraźnym garbkiem?",
        "correct_answer": "Płachetka kołpakowata",
        "incorrect_answers": [
            "Czernidłak kołpakowaty",
            "Mleczaj rydz",
            "Sarniak dachówkowaty"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Czubajka kania ma kapelusz, który u dojrzałych owocników staje się…",
        "correct_answer": "Płaski (rozpostarty)",
        "incorrect_answers": [
            "Wklęsły",
            "Lejkowaty",
            "Cylindryczny"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który z wymienionych gatunków demonstruje płaski, rozpostarty kapelusz?",
        "correct_answer": "Czubajka kania",
        "incorrect_answers": [
            "Borowik szlachetny",
            "Pieprznik jadalny",
            "Mleczaj rydz"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Mleczaj rydz charakteryzuje się kapeluszem o kształcie…",
        "correct_answer": "Wklęsły",
        "incorrect_answers": [
            "Wypukły",
            "Lejkowaty",
            "Płaski"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który grzyb z poniższych ma kapelusz wklęsły?",
        "correct_answer": "Mleczaj rydz",
        "incorrect_answers": [
            "Borowik szlachetny",
            "Czernidłak kołpakowaty",
            "Czubajka kania"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Pieprznik jadalny ma kapelusz o kształcie…",
        "correct_answer": "Lejkowaty",
        "incorrect_answers": [
            "Cylindryczny",
            "Wypukły",
            "Wklęsły"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Który gatunek posiada charakterystyczny lejkowaty kapelusz?",
        "correct_answer": "Pieprznik jadalny",
        "incorrect_answers": [
            "Mleczaj rydz",
            "Borowik szlachetny",
            "Płachetka kołpakowata"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Powierzchnia kapelusza pokryta gęstymi włóknami określana jest jako…",
        "correct_answer": "Włóknista",
        "incorrect_answers": [
            "Śluzowata",
            "Zamszowata",
            "Gładka"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Kapelusz pokryty łatkami i łuskami opisujemy terminem…",
        "correct_answer": "Łuskowana",
        "incorrect_answers": [
            "Gładka",
            "Włóknista",
            "Różnobarwna"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Kapelusz grzyba może być zróżnicowany kolorystycznie; cecha ta to…",
        "correct_answer": "Barwa kapelusza",
        "incorrect_answers": [
            "Kształt kapelusza",
            "Powierzchnia kapelusza",
            "Brzeg kapelusza"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Jak określa się kapelusz jednocześnie posiadający kilka wyraźnie odgraniczonych kolorów?",
        "correct_answer": "Wielobarwny",
        "incorrect_answers": [
            "Jednolicie ubarwiony",
            "Higrofaniczny",
            "Zamszowaty"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 9,
        "question": "Zdolność kapelusza do ciemnienia po nasiąknięciu wodą i jaśnienia po wyschnięciu to…",
        "correct_answer": "Higrofaniczność",
        "incorrect_answers": [
            "Amyloidalność",
            "Termofilia",
            "Saprotrofia"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Które z poniższych grzybów wykazują higrofaniczną zmianę barwy kapelusza?",
        "correct_answer": "Monetnica maślana",
        "incorrect_answers": [
            "Czernidłak kołpakowaty",
            "Borowik szlachetny",
            "Pieprznik jadalny"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Hymenofor zbudowany z rurek to hymenofor…",
        "correct_answer": "Rurkowaty",
        "incorrect_answers": [
            "Blaszkowaty",
            "Kolczasty",
            "Gładki"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 9,
        "question": "Który typ hymenoforu przypomina labirynt z nieregularnych komór?",
        "correct_answer": "Labiryntowaty",
        "incorrect_answers": [
            "Żyłkowaty",
            "Kolczasty",
            "Gładki"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Hymenofor pokryty sztywnymi, ostrymi kolcami określa się jako…",
        "correct_answer": "Kolczasty",
        "incorrect_answers": [
            "Żyłkowaty",
            "Rurkowaty",
            "Blaszkowaty"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Gdzie na owocniku grzyba znajduje się hymenium?",
        "correct_answer": "Na powierzchni hymenoforu",
        "incorrect_answers": [
            "W obrębie trzonu",
            "W miąższu kapelusza",
            "W podłożu"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 9,
        "question": "Prosta metoda laboratoryjna polegająca na obserwacji koloru zarodników opadających z kapelusza to…",
        "correct_answer": "Wysyp zarodników",
        "incorrect_answers": [
            "Reakcja Melzera",
            "Barwienie Laktofenolem",
            "Test KOH"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 9,
        "question": "Jaki element identyfikacji grzybów uzyskujemy dzięki wykonaniu wysypu zarodników?",
        "correct_answer": "Kolor zarodników",
        "incorrect_answers": [
            "Kształt strzępek",
            "Zapach miąższu",
            "Grubość ściany komórkowej"
        ]
    },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Głównym celem chemoprewencji jest:",
      "correct_answer": "zmniejszenie ryzyka rozwoju nowotworu",
      "incorrect_answers": [
          "leczenie już rozwiniętego raka",
          "przyspieszenie metabolizmu leków",
          "podniesienie odporności na infekcje"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Termin „chemoprewencja” pojawił się w literaturze naukowej po raz pierwszy w roku:",
      "correct_answer": "1955",
      "incorrect_answers": [
          "1945",
          "1965",
          "1975"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Badania Michaela Sporna z 1976 r. dotyczyły zastosowania jakiej witaminy w prewencji raka?",
      "correct_answer": "Witaminy A",
      "incorrect_answers": [
          "Witaminy C",
          "Witaminy D",
          "Witaminy E"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Który z poniższych procesów NIE jest bezpośrednio wymieniany jako mechanizm działania chemoprewencyjnego?",
      "correct_answer": "zwiększenie mutagenezy komórek",
      "incorrect_answers": [
          "działanie przeciwzapalne",
          "działanie antyoksydacyjne",
          "hamowanie proliferacji komórek nowotworowych"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Chemoprewencyjne działanie antyoksydacyjne polega głównie na:",
      "correct_answer": "neutralizacji nadmiaru wolnych rodników",
      "incorrect_answers": [
          "indukcji stresu oksydacyjnego",
          "blokowaniu cyklu komórkowego w fazie S",
          "aktywacji ekspresji onkogenów"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Jakie działanie chemoprewencyjne mogą mieć substancje obniżające toksyczność leków przeciwnowotworowych?",
      "correct_answer": "Łagodzenie działań niepożądanych terapii, jak np. radioterapia",
      "incorrect_answers": [
          "Zwiększenie dawki promieniowania terapeutycznego",
          "Wywoływanie oporności wielolekowej",
          "Zwiększenie mutacji DNA podczas chemioterapii"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Do naturalnych substancji chemoprewencyjnych NIE zalicza się:",
      "correct_answer": "antybiotyków β-laktamowych",
      "incorrect_answers": [
          "polifenoli",
          "karotenoidów",
          "glukozynolanów"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Która grupa polifenoli obejmuje barwniki nadające kolor czerwonym owocom i warzywom?",
      "correct_answer": "antocyjany",
      "incorrect_answers": [
          "izoflawony",
          "stilbeny",
          "flawonoidy proste"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Likopen jest przykładem:",
      "correct_answer": "karotenoidu",
      "incorrect_answers": [
          "flawonoidu",
          "glukozynolanu",
          "alkaloidu"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": 10,
      "question": "Spożycie 500 g warzyw i owoców dziennie obniża względne ryzyko zachorowania na nowotwory o około:",
      "correct_answer": "13 %",
      "incorrect_answers": [
          "3 %",
          "5 %",
          "20 %"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": 10,
      "question": "W analizowanych badaniach 200 g warzyw i owoców dziennie zmniejszało ryzyko nowotworów o:",
      "correct_answer": "3 %",
      "incorrect_answers": [
          "10 %",
          "8 %",
          "15 %"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Według danych w prezentacji, zalecana ilość warzyw i owoców dla efektu chemoprewencyjnego jest wyrażona w gramach na:",
      "correct_answer": "dzień",
      "incorrect_answers": [
          "tydzień",
          "miesiąc",
          "posiłek"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Jednym z głównych ograniczeń klinicznego zastosowania kurkuminy jest:",
      "correct_answer": "niska biodostępność związana z szybkim metabolizmem",
      "incorrect_answers": [
          "wysoka toksyczność w dawkach terapeutycznych",
          "brak aktywności przeciwzapalnej",
          "silne działanie psychoaktywne"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Która z poniższych substancji bywa łączona z kurkuminą w celu zwiększenia jej biodostępności?",
      "correct_answer": "piperyna",
      "incorrect_answers": [
          "kwas askorbinowy",
          "selen",
          "kwas foliowy"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "W badaniach klinicznych kurkumina była najczęściej oceniana w terapii którego nowotworu?",
      "correct_answer": "prostaty",
      "incorrect_answers": [
          "płuca",
          "skóry",
          "mózgu"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "W badaniach klinicznych lepsze efekty obserwowano dla likopenu pochodzącego z:",
      "correct_answer": "przetworów pomidorowych",
      "incorrect_answers": [
          "syntetycznych kapsułek z likopenem",
          "oleju palmowego",
          "soku z marchwi"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Jednym z efektów suplementacji likopenu u pacjentów onkologicznych było:",
      "correct_answer": "obniżenie poziomu PSA",
      "incorrect_answers": [
          "zwiększenie poziomu estrogenów",
          "hiperpigmentacja skóry",
          "wzrost ciśnienia krwi"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Likopen należy do związków o działaniu:",
      "correct_answer": "przeciwzapalnym i antyoksydacyjnym",
      "incorrect_answers": [
          "antybiotycznym",
          "psychostymulującym",
          "hepatotoksycznym"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": 10,
      "question": "Sulforafan powstaje z glukorafaniny głównie w wyniku działania enzymu:",
      "correct_answer": "mirozinazy",
      "incorrect_answers": [
          "peroksydazy",
          "lipoksydazy",
          "transglutaminazy"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "W prezentacji wspomniano, że gotowanie warzyw wpływa na powstawanie sulforafanu poprzez:",
      "correct_answer": "przeniesienie konwersji do flory bakteryjnej jelit",
      "incorrect_answers": [
          "zwiększenie aktywności mirozinazy",
          "pełne zniszczenie glukorafaniny",
          "karamelizację cukrów"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": 10,
      "question": "W badaniach klinicznych sulforafan przyczynił się do wydłużenia całkowitego czasu przeżycia u pacjentów z:",
      "correct_answer": "rakiem trzustki poddawanych chemioterapii paliatywnej",
      "incorrect_answers": [
          "czerniakiem w fazie zaawansowanej",
          "glejakiem wielopostaciowym",
          "białaczką limfoblastyczną"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Głównym źródłem resweratrolu w diecie człowieka jest:",
      "correct_answer": "skórka winogron",
      "incorrect_answers": [
          "kiełki pszenicy",
          "nasiona słonecznika",
          "liście szpinaku"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Jednym z problemów ograniczających zastosowanie resweratrolu jest:",
      "correct_answer": "izomeryzacja, która czyni aktywną tylko formę trans",
      "incorrect_answers": [
          "tendencja do tworzenia kryształów w układzie krwionośnym",
          "silne działanie immunosupresyjne",
          "brak jakichkolwiek danych klinicznych"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": 10,
      "question": "W badaniach klinicznych resweratrol NIE wykazał znaczącego wpływu na:",
      "correct_answer": "poziom PSA i rozmiar prostaty",
      "incorrect_answers": [
          "metylację genów związanych z rakiem piersi",
          "apoptozę komórek jelita",
          "wydzielanie PGE2"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Głównym roślinnym źródłem izoflawonów jest:",
      "correct_answer": "soja",
      "incorrect_answers": [
          "pszenica",
          "kukurydza",
          "ziemniaki"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "W krajach Azji dzienne spożycie izoflawonów wynosi średnio:",
      "correct_answer": "30–50 mg",
      "incorrect_answers": [
          "5–10 mg",
          "80–100 mg",
          "150–200 mg"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": 10,
      "question": "Potencjalnym zagrożeniem wynikającym z wysokiego spożycia izoflawonów jest:",
      "correct_answer": "efekt goitrogenny",
      "incorrect_answers": [
          "neurotoksyczność",
          "mutacja mitochondrialna",
          "akumulacja metali ciężkich"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": 10,
      "question": "Przykładem leku stosowanego chemoprewencyjnie w raku jelita grubego są:",
      "correct_answer": "niesteroidowe leki przeciwzapalne (NLPZ)",
      "incorrect_answers": [
          "β-blokery",
          "statyny",
          "benzodiazepiny"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Finasteryd w strategii chemoprewencyjnej jest stosowany w celu zmniejszenia ryzyka:",
      "correct_answer": "raka prostaty",
      "incorrect_answers": [
          "raka trzustki",
          "raka jelita grubego",
          "raka tarczycy"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": 10,
      "question": "Retinoidy wykazują działanie chemoprewencyjne przede wszystkim w nawrotach raka:",
      "correct_answer": "płuc",
      "incorrect_answers": [
          "nerek",
          "skóry",
          "mózgu"
      ]
  },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Według WHO do którego roku depresja ma stać się najczęściej występującą chorobą na świecie?",
        "correct_answer": "2030",
        "incorrect_answers": [
            "2025",
            "2040",
            "2050"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Jaki procent pacjentów z depresją jest lekooporny?",
        "correct_answer": "30%",
        "incorrect_answers": [
            "10%",
            "20%",
            "50%"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Który polisacharyd izolowany z Lentinula edodes pełni rolę adiuwantu w terapii nowotworów?",
        "correct_answer": "Lentinan",
        "incorrect_answers": [
            "Chitozan",
            "Agaritin",
            "Muscymol"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Erinacyna A, związek stymulujący NGF, jest charakterystyczna dla którego gatunku grzyba?",
        "correct_answer": "Hericium erinaceus",
        "incorrect_answers": [
            "Ganoderma lucidum",
            "Pleurotus ostreatus",
            "Agaricus bisporus"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Która tryptamina, strukturalnie podobna do serotoniny, jest badana jako lek na depresję?",
        "correct_answer": "Psylocybina",
        "incorrect_answers": [
            "Muscymol",
            "Dopamina",
            "Lentinan"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "W którym roku FDA przyznała status „terapii przełomowej” psylocybinie w depresji opornej na leczenie (TRD)?",
        "correct_answer": "2018",
        "incorrect_answers": [
            "2016",
            "2019",
            "2021"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Spożycie jakiego rodzaju żywności bogatej w β-glukany wiąże się z niższym ryzykiem depresji według badania z lat 2005-2016?",
        "correct_answer": "Grzybów",
        "incorrect_answers": [
            "Czerwonego mięsa",
            "Cukru rafinowanego",
            "Nabiału"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Który z poniższych gatunków grzybów znajduje się na Czerwonej liście Polski i jest znany z działania hipotensyjnego?",
        "correct_answer": "Ganoderma lucidum",
        "incorrect_answers": [
            "Pleurotus ostreatus",
            "Flammulina velutipes",
            "Agaricus bisporus"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "Peptyd o aktywności ACE-inhibitorowej z Macrocybe gigantea wykazał działanie zbliżone do którego leku?",
        "correct_answer": "Kaptopril",
        "incorrect_answers": [
            "Metformina",
            "Ibuprofen",
            "Atorwastatyna"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "U myszy z cukrzycą wodny ekstrakt Ganoderma lucidum podawano w dawce:",
        "correct_answer": "300 mg/kg przez 4 tygodnie",
        "incorrect_answers": [
            "30 mg/kg przez 2 tygodnie",
            "500 mg/kg przez 1 tydzień",
            "100 mg/kg przez 8 tygodni"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Jaka była doustna dawka ekstraktu z shiitake (Lentinula edodes) stosowana u pacjentów onkologicznych?",
        "correct_answer": "1800 mg na dzień",
        "incorrect_answers": [
            "500 mg na dzień",
            "2500 mg na dzień",
            "50 mg na dzień"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Jakie związki w grzybach zaliczane są do prebiotyków i fermentują w jelicie grubym do krótkołańcuchowych kwasów tłuszczowych?",
        "correct_answer": "Polisacharydy (β-glukany)",
        "incorrect_answers": [
            "Alkaloidy",
            "Karotenoidy",
            "Sterole"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "L-tryptofan obecny w grzybach jest prekursorem biosyntezy którego neuroprzekaźnika?",
        "correct_answer": "Serotoniny",
        "incorrect_answers": [
            "Acetylocholiny",
            "GABA",
            "Glutaminianu"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Która z wymienionych chorób została sklasyfikowana jako choroba cywilizacyjna w XXI wieku?",
        "correct_answer": "Nadciśnienie tętnicze",
        "incorrect_answers": [
            "Gruźlica",
            "Szkorbut",
            "Malaria"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "W hierarchii wiarygodności danych naukowych najwyżej znajdują się:",
        "correct_answer": "Metaanalizy i przeglądy systematyczne",
        "incorrect_answers": [
            "Pojedyncze publikacje",
            "Opinia eksperta",
            "Doniesienia medialne"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "Która substancja aktywna w Amanita muscaria odpowiada za jej toksyczność?",
        "correct_answer": "Muscymol",
        "incorrect_answers": [
            "Psylocyna",
            "Lentinan",
            "Ergosterol"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Jaki odsetek pacjentów onkologicznych korzysta z jakiejś formy terapii wspomagającej?",
        "correct_answer": "20-50 %",
        "incorrect_answers": [
            "5-10 %",
            "60-80 %",
            ">90 %"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "β-1,3-glukany stymulują przede wszystkim które komórki układu odpornościowego?",
        "correct_answer": "Limfocyty T i komórki NK",
        "incorrect_answers": [
            "Erytrocyty",
            "Neurony",
            "Płytki krwi"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "U rolników uprawiających które dwa gatunki grzybów zaobserwowano około 40 % niższą zachorowalność na raka?",
        "correct_answer": "Flammulina velutipes i Agaricus subrufescens",
        "incorrect_answers": [
            "Pleurotus ostreatus i Trametes versicolor",
            "Ganoderma lucidum i Hericium erinaceus",
            "Lentinula edodes i Inonotus obliquus"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Który rodzaj metabolitów w Ganoderma lucidum zmniejszał ekspresję adipogenicznego czynnika transkrypcyjnego i aktywował szlak AMPK?",
        "correct_answer": "Polisacharydy",
        "incorrect_answers": [
            "Alkaloidy",
            "Flawonoidy",
            "Fitoestrogeny"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Angiotensynę konwertuje enzym ACE, którego zahamowanie przez związki z grzybów wpływa głównie na:",
        "correct_answer": "Ciśnienie krwi",
        "incorrect_answers": [
            "Poziom cholesterolu",
            "Temperaturę ciała",
            "Syntezę kortyzolu"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Który grzyb jadalny jest szczególnie skuteczny w obniżaniu poziomu cholesterolu całkowitego i LDL?",
        "correct_answer": "Pleurotus ostreatus",
        "incorrect_answers": [
            "Agaricus campestris",
            "Morchella vulgaris",
            "Cordyceps militaris"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "Jaki odsetek uczestników badania klinicznego z psylocybiną w TRD doświadczył ostrych negatywnych skutków psychicznych lub fizycznych?",
        "correct_answer": "20 %",
        "incorrect_answers": [
            "5 %",
            "35 %",
            "60 %"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Stwierdzenie, że LD50 muscymolu jest mniejsze niż kokainy i fentanylu oznacza, że muscymol jest:",
        "correct_answer": "Bardziej toksyczny",
        "incorrect_answers": [
            "Mniej toksyczny",
            "Nietoksyczny",
            "Obojętny"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Muscymol, związek neurotoksyczny, występuje naturalnie w grzybie:",
        "correct_answer": "Amanita muscaria",
        "incorrect_answers": [
            "Lentinula edodes",
            "Pleurotus ostreatus",
            "Agaricus bisporus"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Jakie działanie wykazała mieszanina lektyn A i B z Agaricus bisporus na komórki nowotworowe?",
        "correct_answer": "Antyproliferacyjne",
        "incorrect_answers": [
            "Prooksydacyjne",
            "Neurotoksyczne",
            "Hipotensyjne"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "Zastąpienie 20 % wołowiny pieczarkami białymi w badaniu klinicznym skutkowało przede wszystkim:",
        "correct_answer": "Zmniejszeniem BMI i obwodu brzucha",
        "incorrect_answers": [
            "Spadkiem poziomu wapnia",
            "Wzrostem ciśnienia krwi",
            "Przyrostem masy mięśniowej"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Wzrost wydzielania którego hormonu jelitowego stymulowany jest przez krótkołańcuchowe kwasy tłuszczowe powstające z fermentacji grzybowych glukanów?",
        "correct_answer": "GLP-1",
        "incorrect_answers": [
            "Grelina",
            "Leptyna",
            "IGF-1"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "β-glukany, chityna i chitozan należą do grupy:",
        "correct_answer": "Polisacharydów",
        "incorrect_answers": [
            "Terpenów",
            "Alkaloidów",
            "Steroidów"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "Substancja 3,3,5,5-tetrametylo-4-piperidon o działaniu hipotensyjnym została wyizolowana z:",
        "correct_answer": "Marasmius androsaceus",
        "incorrect_answers": [
            "Pleurotus sajor-caju",
            "Sparassis crispa",
            "Hypsizygus marmoreus"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Jaka forma stosowania psylocybiny została określona w wykładzie jako „niemożliwa w warunkach domowych”?",
        "correct_answer": "Mikrodozowanie",
        "incorrect_answers": [
            "Makrodawkowanie",
            "Inhalacja",
            "Dożylne podanie"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Średni przyrost masy ciała u kobiet w ciągu 10 lat po rzuceniu palenia wynosi około:",
        "correct_answer": "5 kg",
        "incorrect_answers": [
            "1 kg",
            "10 kg",
            "0 kg"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Który gatunek grzyba zawiera oligopeptyd-inhibitor ACE o mocy porównywalnej z kaptoprilem?",
        "correct_answer": "Hypsizygus marmoreus",
        "incorrect_answers": [
            "Lentinula edodes",
            "Agaricus campestris",
            "Cordyceps militaris"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "W badaniu klinicznym z udziałem 233 uczestników z TRD stosowano dawki psylocybiny 25 mg, 10 mg oraz:",
        "correct_answer": "1 mg",
        "incorrect_answers": [
            "5 mg",
            "15 mg",
            "30 mg"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Regularne spożywanie którego produktu spożywczego, w połączeniu z aktywnością fizyczną, wskazano jako korzystne w profilaktyce chorób cywilizacyjnych?",
        "correct_answer": "Grzybów",
        "incorrect_answers": [
            "Nadmiernej soli",
            "Tylko białka zwierzęcego",
            "Wysokocukrowych napojów"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "W produkcji lentinanu grzybnia Lentinula edodes była zaszczepiana na podłożu zawierającym:",
        "correct_answer": "Wytłoki z trzciny cukrowej i odtłuszczony ryż",
        "incorrect_answers": [
            "Trociny dębowe i otręby",
            "Słomę pszeniczną i kukurydzę",
            "Skórki jabłek i pszenicę"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": 11,
        "question": "W modelu zwierzęcym zastosowanie 5 % proszku maitake (Grifola frondosa) w diecie przez 9 tygodni spowodowało:",
        "correct_answer": "Znaczne obniżenie ciśnienia krwi",
        "incorrect_answers": [
            "Hiperlipidemię",
            "Wzrost masy ciała",
            "Spadek liczby leukocytów"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Który gatunek grzyba, zawierający triterpenoidy i polisacharydy, zwiększa wrażliwość na insulinę i obniża poziom glukozy?",
        "correct_answer": "Wolfiporia extensa",
        "incorrect_answers": [
            "Inonotus obliquus",
            "Trametes versicolor",
            "Boletus bicolor"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": 11,
        "question": "Która substancja określana jest jako psychoplastogen i wywołuje trwały wpływ na strukturę neuronów już po jednorazowym podaniu?",
        "correct_answer": "Psylocybina",
        "incorrect_answers": [
            "Muscymol",
            "Ergosterol",
            "Chitozan"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": 11,
        "question": "Polisacharydy z grzybów ulegają fermentacji do związków, które w jelicie grubym tworzą:",
        "correct_answer": "Krótkołańcuchowe kwasy tłuszczowe",
        "incorrect_answers": [
            "Długie łańcuchy białkowe",
            "Gazy szlachetne",
            "Alkaloidy"
        ]
    },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Dlaczego grzyby wyższe (makrogrzyby) uznaje się za cenny surowiec kosmetyczny?",
          "correct_answer": "Można je uprawiać w kontrolowanych warunkach, co gwarantuje powtarzalną jakość",
          "incorrect_answers": [
            "Są jedynym naturalnym źródłem retinolu",
            "Nie zawierają żadnych alergenów",
            "Wytwarzają wyłącznie kwasy tłuszczowe"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "W jakich segmentach produktów najczęściej wykorzystuje się składniki z grzybów wyższych?",
          "correct_answer": "Dermokosmetyki, kosmetyki naturalne i urban skincare",
          "incorrect_answers": [
            "Dezodoranty w aerozolu",
            "Perfumy syntetyczne",
            "Samoopalacze z DHA"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Który polisacharyd grzybowy odpowiada za działanie nawilżające i immunomodulujące?",
          "correct_answer": "β-glukan",
          "incorrect_answers": [
            "Celuloza",
            "Agar-agar",
            "Inulina"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Jakie działanie kosmetyczne przypisuje się terpenoidom występującym w grzybach?",
          "correct_answer": "Wspomagają syntezę kolagenu i stabilizują barierę hydrolipidową",
          "incorrect_answers": [
            "Pobudzają produkcję melaniny",
            "Hamują podziały keratynocytów",
            "Silnie redukują sebum w 24 h"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Która grupa związków grzybowych wspomaga ochronę skóry przed promieniowaniem UV?",
          "correct_answer": "Polifenole i melaniny",
          "incorrect_answers": [
            "Ksantofile",
            "Saponiny",
            "Alkilolaminy"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Ergotionina, obecna w grzybach, przede wszystkim chroni:",
          "correct_answer": "mitochondria przed stresem oksydacyjnym",
          "incorrect_answers": [
            "keratynę przed degradacją",
            "sebum przed utlenianiem UVB",
            "kwas hialuronowy przed rozpadem enzymatycznym"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Chitozan pozyskiwany z grzybów wykazuje działanie:",
          "correct_answer": "przeciwbakteryjne i filmotwórcze",
          "incorrect_answers": [
            "wybielające i fotosensybilizujące",
            "oksydacyjne i komedogenne",
            "keratolityczne na poziomie 50% kwasów AHA"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Który gatunek grzyba jest uważany za naturalną alternatywę dla kwasu hialuronowego dzięki silnemu nawilżeniu skóry?",
          "correct_answer": "Tremella fuciformis",
          "incorrect_answers": [
            "Ganoderma lucidum",
            "Cordyceps sinensis",
            "Antrodia cinnamomea"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Jakie działanie kosmetyczne przypisuje się grzybowi Lentinula edodes (shiitake)?",
          "correct_answer": "Rozjaśniające i antyoksydacyjne, synergiczne z witaminą C",
          "incorrect_answers": [
            "Silnie złuszczające i keratolityczne",
            "Fotoutrwalające barwnik melaniny",
            "Natychmiastowo liftingujące przez koagulację białek"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Ganoderma lucidum (Reishi) w formulacjach kosmetycznych działa głównie:",
          "correct_answer": "adaptogennie, łagodząco i przeciwzapalnie",
          "incorrect_answers": [
            "komedogennie, zwiększając wydzielanie sebum",
            "promując syntezę melaniny w piegach",
            "zwiększając złuszczanie naskórka poprzez kwasy fenolowe"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Jaki efekt przypisuje się grzybom Cordyceps sinensis/militaris w pielęgnacji skóry?",
          "correct_answer": "Rewitalizacja i poprawa mikrokrążenia",
          "incorrect_answers": [
            "Głębokie matowienie skóry",
            "Natychmiastowa depigmentacja",
            "Wyzwalanie reakcji fototoksycznej"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Który z poniższych grzybów charakteryzuje się wyjątkowo silnym działaniem antyoksydacyjnym i przeciwzmarszczkowym?",
          "correct_answer": "Antrodia cinnamomea",
          "incorrect_answers": [
            "Poria cocos",
            "Hericium erinaceus",
            "Meripilus giganteus"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Jakie korzyści kosmetyczne zapewnia Inonotus obliquus (chaga)?",
          "correct_answer": "Regeneracja skóry i ochrona mikrobiomu",
          "incorrect_answers": [
            "Silne działanie fotosensytyzujące",
            "Wzrost produkcji sebum o 80 %",
            "Natychmiastowy efekt botoksu"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Poria cocos w kosmetyce wykazuje działanie:",
          "correct_answer": "łagodzące i wzmacniające barierę skórną",
          "incorrect_answers": [
            "dehydrujące i drażniące",
            "trwale barwiące skórę",
            "promujące rogowacenie okołomieszkowe"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Która z poniższych form surowca drożdżowego nie została wymieniona w prezentacji?",
          "correct_answer": "olej drożdżowy",
          "incorrect_answers": [
            "ekstrakt drożdżowy",
            "filtrat fermentacyjny",
            "lizat komórkowy"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Jakiej grupy witamin dostarczają drożdże wykorzystywane w kosmetologii?",
          "correct_answer": "Witamin z grupy B",
          "incorrect_answers": [
            "Witamin A i D",
            "Witamin K",
            "Witamin F (NNKT)"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Drożdżowe składniki są popularne w kosmetykach przeciwtrądzikowych oraz:",
          "correct_answer": "anti-aging i rozjaśniających",
          "incorrect_answers": [
            "samoutrwalających makijaż",
            "trwale koloryzujących włosy",
            "dezodorantach antyperspiracyjnych w kulce"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "hard",
          "category": 12,
          "question": "Ergotionina jest aktywnie transportowana do komórek skóry przez białko określane skrótem:",
          "correct_answer": "ETT",
          "incorrect_answers": [
            "MCT1",
            "GLUT4",
            "OAT3"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Chitozan stosowany w kosmetykach pozyskuje się z grzybowej:",
          "correct_answer": "chityny",
          "incorrect_answers": [
            "gliadyny",
            "keratyny",
            "pektyny"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "W jakiego typu produktach najczęściej stosuje się chitozan grzybowy?",
          "correct_answer": "Emulsje łagodzące i preparaty do skóry trądzikowej",
          "incorrect_answers": [
            "Perfumy z nutą orientalną",
            "Odżywki do rzęs z bimatoprostem",
            "Samowysychające lakiery do paznokci"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Ekstrakty wodne z grzybów charakteryzują się głównie działaniem:",
          "correct_answer": "łagodzącym i nawilżającym",
          "incorrect_answers": [
            "silnie złuszczającym",
            "trwale koloryzującym skórę",
            "fototoksycznym"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Ekstrakty alkoholowe z grzybów wykorzystuje się w kosmetykach przede wszystkim ze względu na ich działanie:",
          "correct_answer": "przeciwbakteryjne",
          "incorrect_answers": [
            "promujące komedogenezę",
            "silnie komedolityczne",
            "brązujące na zasadzie reakcji Maillarda"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Sproszkowane owocniki lub grzybnia najczęściej stanowią bazę dla:",
          "correct_answer": "maseczek i peelingów",
          "incorrect_answers": [
            "perfum w olejku",
            "korektorów mineralnych",
            "żeli antycellulitowych z kofeiną"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Które gatunki grzybów poleca się szczególnie do pielęgnacji cery suchej?",
          "correct_answer": "Tremella fuciformis i Cordyceps",
          "incorrect_answers": [
            "Ganoderma i Hericium",
            "Antrodia i Shiitake",
            "Poria cocos i Meripilus"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Do pielęgnacji cery dojrzałej rekomenduje się przede wszystkim:",
          "correct_answer": "Ganoderma lucidum i Lentinula edodes",
          "incorrect_answers": [
            "Cordyceps i Tremella",
            "Inonotus i Meripilus",
            "Hericium i Poria"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Cera problematyczna (np. trądzikowa) może skorzystać z właściwości:",
          "correct_answer": "Hericium erinaceus i Ganoderma lucidum",
          "incorrect_answers": [
            "Tremella i Cordyceps",
            "Poria i Shiitake",
            "Antrodia i Chaga"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "Jakie grzyby wskazano jako szczególnie korzystne dla cery naczyniowej?",
          "correct_answer": "Cordyceps i Meripilus",
          "incorrect_answers": [
            "Ganoderma i Poria",
            "Tremella i Antrodia",
            "Shiitake i Chaga"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "hard",
          "category": 12,
          "question": "Który gatunek wymieniono jako potencjalne źródło reakcji alergicznych u niektórych osób?",
          "correct_answer": "Lentinula edodes (shiitake)",
          "incorrect_answers": [
            "Cordyceps militaris",
            "Ganoderma lucidum",
            "Tremella fuciformis"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "W prezentacji zwrócono uwagę na różnice jakościowe pomiędzy:",
          "correct_answer": "owocnikiem a grzybnią (mycelium)",
          "incorrect_answers": [
            "lasem a szklarnią",
            "ekstraktem wodnym a CO₂",
            "szamponem a odżywką"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": 12,
          "question": "Jakim językiem posługują się nazwy składników grzybowych w wykazie INCI?",
          "correct_answer": "łacińskim",
          "incorrect_answers": [
            "greckim",
            "angielskim",
            "hiszpańskim"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": 12,
          "question": "CosIng, wspomniany w prezentacji, to przede wszystkim baza danych:",
          "correct_answer": "Unii Europejskiej zawierająca nazwy INCI i funkcje kosmetyczne składników",
          "incorrect_answers": [
            "WHO dotycząca bezpieczeństwa leków",
            "FDA zatwierdzająca filtry UV",
            "ISO opisująca normy mikrobiologiczne"
          ]
        },
        
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Który z poniższych związków jest wskazany w dokumencie jako unikalny metabolit wtórny wytwarzany przez algi i ceniony w kosmetyce?",
              "correct_answer": "Florotanniny",
              "incorrect_answers": [
                "Likopen",
                "Melatonina",
                "Resweratrol"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Algi są przedstawiane jako przyjazne środowisku źródło składników kosmetycznych głównie dlatego, że rosną szybko i generują stosunkowo __________.",
              "correct_answer": "niską emisję CO₂",
              "incorrect_answers": [
                "wysokie pobranie azotu",
                "brak zapotrzebowania na minerały",
                "kwaśne ścieki"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Która bezpośrednia korzyść dla skóry NIE jest wymieniona wśród wielokierunkowych działań alg w dokumencie?",
              "correct_answer": "Złuszczanie martwego naskórka",
              "incorrect_answers": [
                "Nawilżanie",
                "Działanie przeciwzapalne",
                "Ochrona"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Ochronny film tworzony przez składniki algowe pomaga przede wszystkim zmniejszyć który parametr fizjologiczny skóry?",
              "correct_answer": "przeznaskórkową utratę wody (TEWL)",
              "incorrect_answers": [
                "pH skóry",
                "indeks melaniny",
                "gęstość gruczołów łojowych"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Który mechanizm opisany w dokumencie polega na neutralizacji reaktywnych form tlenu w skórze?",
              "correct_answer": "Działanie antyoksydacyjne",
              "incorrect_answers": [
                "Regulacja sebum",
                "Mikro-peeling",
                "Wazokonstrykcja"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Według dokumentu algi stymulują syntezę którego białka strukturalnego skóry, wspierając jej jędrność i elastyczność?",
              "correct_answer": "Kolagen",
              "incorrect_answers": [
                "Keratyna",
                "Fibronektyna",
                "Elastaza"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Który polimer pochodzący z alg jest wyróżniony jako zagęstnik i stabilizator żeli oraz emulsji kosmetycznych?",
              "correct_answer": "Alginiany",
              "incorrect_answers": [
                "Celuloza",
                "Pektyna",
                "Chitozan"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Pigment z brunatnic ceniony w kosmetyce zarówno za barwę, jak i właściwości ochronne to __________.",
              "correct_answer": "Fukoksantyna",
              "incorrect_answers": [
                "Betanina",
                "Kwas karminowy",
                "Likopen"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "hard",
              "category": 13,
              "question": "Dodanie alginianów do emulsji zapobiega przede wszystkim __________.",
              "correct_answer": "wysychaniu podczas przechowywania",
              "incorrect_answers": [
                "utlenianiu tłuszczów",
                "podnoszeniu pH",
                "ściemnieniu koloru"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Która rodzina polisacharydów algowych została opisana jako żelująca, nawilżająca i ochronna?",
              "correct_answer": "Karageny",
              "incorrect_answers": [
                "Ligniny",
                "Pektyny",
                "Glikogeny"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Mannitol i sorbitol pozyskiwane z alg należą do której klasy związków chemicznych?",
              "correct_answer": "Alkohole cukrowe",
              "incorrect_answers": [
                "Terpenoidy",
                "Peptydy",
                "Alkaloidy"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Astaksantyna z alg jest ceniona w kosmetyce głównie za silne działanie __________.",
              "correct_answer": "antyoksydacyjne",
              "incorrect_answers": [
                "złuszczające",
                "zapachowe",
                "chelatujące"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Która mikroalga jest znana z właściwości detoksykujących, regenerujących i antyoksydacyjnych?",
              "correct_answer": "Spirulina",
              "incorrect_answers": [
                "Porphyra",
                "Hematococcus",
                "Nannochloropsis"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Gatunki Laminaria wspomagają utrzymanie bariery lipidowej skóry oraz stymulują syntezę którego białka?",
              "correct_answer": "Kolagen",
              "incorrect_answers": [
                "Elastyna",
                "Filagryna",
                "Aktyna"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Chondrus crispus wzmacnia włosy, ponieważ dostarcza dużych ilości __________.",
              "correct_answer": "karagenu",
              "incorrect_answers": [
                "skwalenu",
                "kwasu krzemowego",
                "beta-glukanu"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Fukoidany z brunatnic są wyróżnione ze względu na pomoc w leczeniu której przewlekłej, łuszczącej się choroby skóry?",
              "correct_answer": "łuszczycy",
              "incorrect_answers": [
                "trądziku różowatego",
                "bielactwa",
                "melasmy"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "W atopowym zapaleniu skóry (AZS) ekstrakty z alg pomagają przede wszystkim wzmacniać __________ skóry.",
              "correct_answer": "barierę hydrolipidową",
              "incorrect_answers": [
                "sieć melaniny",
                "zakończenia nerwowe",
                "połączenia desmosomalne"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "hard",
              "category": 13,
              "question": "Aktywne składniki alg pomagają zmniejszyć hiperpigmentację poprzez hamowanie którego kluczowego enzymu melanogenezy?",
              "correct_answer": "tyrozynazy",
              "incorrect_answers": [
                "elastazy",
                "lipazy",
                "cyklooksygenazy"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Maski żelowe zawierające agar i alginian sodu zapewniają przede wszystkim jaką korzyść wymienioną w dokumencie?",
              "correct_answer": "nawilżenie i ukojenie skóry",
              "incorrect_answers": [
                "natychmiastową opaleniznę",
                "stymulację wzrostu włosów",
                "chemiczny peeling"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Lotiony i mgiełki z ekstraktami Chlorelli i Spiruliny wykazują działanie antyoksydacyjne, przeciwzapalne oraz __________.",
              "correct_answer": "rozjaśniające",
              "incorrect_answers": [
                "depilujące",
                "samoopalające",
                "chłodzące"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Astaksantyna, fikobiliny i florotanniny są wprowadzane głównie do której kategorii kosmetyków w celu ochrony UV?",
              "correct_answer": "filtrów przeciwsłonecznych",
              "incorrect_answers": [
                "szamponów",
                "kremów pod oczy",
                "serum na noc"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "easy",
              "category": 13,
              "question": "Która czerwona alga, zwana też mchem irlandzkim, dostarcza karagenu i pełni funkcję humektanta?",
              "correct_answer": "Chondrus crispus",
              "incorrect_answers": [
                "Corallina officinalis",
                "Hypnea musciformis",
                "Fucus serratus"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "medium",
              "category": 13,
              "question": "Corallina officinalis jest wyróżniona z powodu wysokiej zawartości wapnia, magnezu i __________, korzystnej dla metabolizmu skóry.",
              "correct_answer": "żelaza",
              "incorrect_answers": [
                "cynku",
                "selenu",
                "miedzi"
              ]
            },
            {
              "type": "multiple",
              "difficulty": "hard",
              "category": 13,
              "question": "Macrocystis pyrifera dostarcza alginian oraz który alkohol cukrowy o wyraźnym działaniu rewitalizującym?",
              "correct_answer": "mannitol",
              "incorrect_answers": [
                "ksylitol",
                "rybitol",
                "gliceryna"
              ]
            },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Który rosyjski naukowiec jako pierwszy w 1940 r. użył terminu „adaptogen” w odniesieniu do owoców cytryńca chińskiego (Schisandra chinensis)?",
                  "correct_answer": "Mikołaj Lazarev",
                  "incorrect_answers": [
                    "Israel Brekhman",
                    "Ilja Miecznikow",
                    "Iwan Pawłow"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "W którym roku Israel Brekhman zaproponował farmakodynamiczną charakterystykę adaptogenów, badając korzeń żeń-szenia koreańskiego (Panax ginseng)?",
                  "correct_answer": "1968",
                  "incorrect_answers": [
                    "1955",
                    "1975",
                    "1984"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Która z poniższych właściwości NIE należy do klasycznej definicji adaptogenu?",
                  "correct_answer": "Wywoływanie uzależnienia",
                  "incorrect_answers": [
                    "Brak toksyczności",
                    "Odpowiedź niespecyficzna",
                    "Aktywność normalizująca funkcje organizmu"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Jak nazywa się tonik stosowany w sytuacjach nadmiernego obciążenia organizmu, który poprzez modulację poziomu kortyzolu poprawia witalność i homeostazę?",
                  "correct_answer": "Adaptogen tonik",
                  "incorrect_answers": [
                    "Stymulant klasyczny",
                    "Diuretyk ziołowy",
                    "Antyoksydant wtórny"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "hard",
                  "category": 14,
                  "question": "Które z podanych roślin jednocześnie spełniają kryteria adaptogenu i działają jako tonik ukierunkowany na określony narząd lub układ?",
                  "correct_answer": "Korzeń różeńca górskiego i owoc cytryńca chińskiego",
                  "incorrect_answers": [
                    "Liść kokainowca i nasienie guarany",
                    "Ziele pokrzywy i kwiatostan głogu",
                    "Kora wierzby i liść aloesu"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Jaką kluczową różnicę podkreśla porównanie adaptogenu stymulanta (np. korzeń żeń-szenia) ze stymulantem klasycznym (np. nasienie guarany)?",
                  "correct_answer": "Adaptogen nie powoduje wtórnego spadku wydolności po pobudzeniu",
                  "incorrect_answers": [
                    "Adaptogen działa wyłącznie na układ pokarmowy",
                    "Stymulant klasyczny obniża poziom kortyzolu trwale",
                    "Stymulant klasyczny nie wpływa na układ nerwowy"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Jak określa się łagodne mimetyki stresu, które „uczą” organizm radzić sobie lepiej z silniejszymi stresorami?",
                  "correct_answer": "Eustresory",
                  "incorrect_answers": [
                    "Distresory",
                    "Neurotoksyny",
                    "Prooksydanty"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Które z poniższych stwierdzeń najlepiej opisuje wpływ adaptogenów na odpowiedź organizmu na bodziec stresowy?",
                  "correct_answer": "Obniżają wrażliwość i zmniejszają wysokość reakcji stresowej",
                  "incorrect_answers": [
                    "Całkowicie blokują wydzielanie adrenaliny",
                    "Powodują wzrost kortyzolu niezależnie od stresu",
                    "Wywołują długotrwały efekt adrenaliny"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "hard",
                  "category": 14,
                  "question": "Który hormon stresu jest bezpośrednio modulowany przez adaptogeny, co zostało zilustrowane na wykresie poziomów w warunkach in vitro i in vivo?",
                  "correct_answer": "Kortyzol",
                  "incorrect_answers": [
                    "Insulina",
                    "Tyroksyna",
                    "Melatonina"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Jakiego rodzaju zjawisko porównano do „szczepionki stresu”, którą buduje się poprzez regularne przyjmowanie adaptogenu?",
                  "correct_answer": "Budowanie wytrzymałości fizycznej przez ćwiczenia",
                  "incorrect_answers": [
                    "Wzrost masy mięśniowej po diecie wysokobiałkowej",
                    "Detoksykację wątroby sokami",
                    "Szybkie odchudzanie dietą ketogeniczną"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Jakie dwie kluczowe cechy czynią adaptogen przydatnym szczególnie w okresie rekonwalescencji?",
                  "correct_answer": "Obniżona wytrzymałość i nadmierne obciążenie organizmu",
                  "incorrect_answers": [
                    "Nadmiar adrenaliny i wysoka masa ciała",
                    "Wysoki poziom glukozy i hiperlipidemia",
                    "Zwiększone łaknienie i odwodnienie"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Która z niżej wymienionych grup roślin zawiera wyłącznie przykłady uznanych adaptogenów według klasycznej definicji?",
                  "correct_answer": "Panax ginseng, Withania somnifera, Rhodiola rosea",
                  "incorrect_answers": [
                    "Glycyrrhiza glabra, Centella asiatica, Boswellia serrata",
                    "Salvia miltiorrhiza, Uncaria tomentosa, Lepidium meyenii",
                    "Ziele serdecznika, nasienie guarany, liść miłorzębu"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "hard",
                  "category": 14,
                  "question": "Które z poniższych związków chemicznych SĄ bezpośrednio odpowiedzialne za adaptogenne i immunomodulujące działanie korzenia żeń-szenia (Panax ginseng)?",
                  "correct_answer": "Ginsenozydy (panaksozydy)",
                  "incorrect_answers": [
                    "Tanshinony",
                    "Kumaryny",
                    "Alkaloidy indolowe"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Jak nazywa się przetworzona forma żeń-szenia, którą uzyskuje się przez 1-2-krotne działanie parą wodną i suszenie korzenia?",
                  "correct_answer": "Czerwony żeń-szeń",
                  "incorrect_answers": [
                    "Biały żeń-szeń",
                    "Czarny żeń-szeń",
                    "Złoty żeń-szeń"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "W badaniach klinicznych wykazano, że wyciąg z korzenia żeń-szenia poprawia wydolność fizyczną poprzez:",
                  "correct_answer": "Zwiększenie zużycia tlenu przez mięśnie",
                  "incorrect_answers": [
                    "Bezpośrednie podniesienie poziomu glukozy we krwi",
                    "Hamowanie syntezy ATP w mięśniach",
                    "Zwiększenie produkcji kwasu mlekowego"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "hard",
                  "category": 14,
                  "question": "Który ginsenozyd występuje w większej ilości w Panax ginseng niż w Panax quinquefolius i odpowiada m.in. za działanie stymulujące ośrodkowy układ nerwowy?",
                  "correct_answer": "Rg1",
                  "incorrect_answers": [
                    "Rb1",
                    "Rd",
                    "Re"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Jakie są potencjalne działania niepożądane wynikające z długotrwałego (> 3 mies.) przyjmowania wysokich dawek żeń-szenia?",
                  "correct_answer": "Bezsenność, nadciśnienie i objawy „zespołu uzależnienia żeńszeniowego”",
                  "incorrect_answers": [
                    "Hipotermia i senność",
                    "Trwała hipoglikemia",
                    "Silna fotouczulenie skóry"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Która roślina, nazywana żeń-szeniem syberyjskim, zawiera eleuterozydy i jest uznawana za tańszy odpowiednik Panax ginseng?",
                  "correct_answer": "Eleutherococcus senticosus",
                  "incorrect_answers": [
                    "Astragalus mongholicus",
                    "Rhaponticum carthamoides",
                    "Lessertia frutescens"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Główne przeciwwskazania do długotrwałego stosowania eleuterokoka kolczastego to:",
                  "correct_answer": "Nadciśnienie, miażdżyca i bezsenność",
                  "incorrect_answers": [
                    "Hipotonia, anemia i nadmierna senność",
                    "Choroba wrzodowa żołądka i refluks",
                    "Niedoczynność tarczycy i cukrzyca typu 1"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "hard",
                  "category": 14,
                  "question": "Który lignan występujący w owocach cytryńca chińskiego (Schisandra chinensis) uznaje się za marker ich jakości i aktywności farmakologicznej?",
                  "correct_answer": "Schizandryna A",
                  "incorrect_answers": [
                    "Salidrozyd",
                    "Baikalina",
                    "Glicyryzyna"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Salidrozyd, odpowiadający za wiele efektów różeńca górskiego (Rhodiola rosea), wykazał w badaniach działanie:",
                  "correct_answer": "Neuro- i kardioprotekcyjne",
                  "incorrect_answers": [
                    "Silnie diuretyczne",
                    "Antyhistaminowe",
                    "Cholinolityczne"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "easy",
                  "category": 14,
                  "question": "Które tradycyjne systemy medyczne opisują ashwagandhę (Withania somnifera) jako środek przywracający witalność (rasayana)?",
                  "correct_answer": "Ajurweda",
                  "incorrect_answers": [
                    "Unani",
                    "Homeopatia",
                    "Medycyna tybetańska"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "hard",
                  "category": 14,
                  "question": "Jakie steroidowe związki laktonowe występują w ashwagandzie i odpowiadają za jej wielokierunkowe działanie adaptogenne i cytoprotekcyjne?",
                  "correct_answer": "Witanolidy",
                  "incorrect_answers": [
                    "Ekdysteroidy",
                    "Tanshinony",
                    "Kardenolidy"
                  ]
                },
                {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": 14,
                  "question": "Za które dwa główne efekty kliniczne odpowiada astragalozyd IV zawarty w korzeniu traganka mongolskiego (Astragalus mongholicus)?",
                  "correct_answer": "Adaptogenne i antyoksydacyjne",
                  "incorrect_answers": [
                    "Silnie antybiotyczne i hepatotoksyczne",
                    "Prokoagulacyjne i hipoglikemiczne",
                    "Sedatywne i hipotermiczne"
                  ]
                },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Borowina to torf leczniczy o stopniu humifikacji wyższym niż…",
                        "correct_answer": "H3",
                        "incorrect_answers": [
                            "H1",
                            "H2",
                            "H6"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Aby spełniać wymogi kopaliny leczniczej, borowina musi zawierać (w przeliczeniu na suchą masę) ponad …% substancji organicznych.",
                        "correct_answer": "75",
                        "incorrect_answers": [
                            "50",
                            "60",
                            "65"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Typowy zakres zawartości wody w borowinie wynosi…",
                        "correct_answer": "90–95 %",
                        "incorrect_answers": [
                            "50–55 %",
                            "70–75 %",
                            "30–35 %"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Związki humusowe mogą stanowić maksymalnie około …% wszystkich substancji organicznych borowiny.",
                        "correct_answer": "90",
                        "incorrect_answers": [
                            "10",
                            "40",
                            "60"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Który z kwasów humusowych jest rozpuszczalny w wodzie w całym zakresie pH?",
                        "correct_answer": "Kwas fulwowy",
                        "incorrect_answers": [
                            "Kwas huminowy",
                            "Kwas hymatomelanowy",
                            "Humina"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Kwasów huminowych w torfie może być od… do… % suchej masy.",
                        "correct_answer": "10–43",
                        "incorrect_answers": [
                            "1–5",
                            "50–60",
                            "70–80"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Temperatura borowiny 42–45 °C jest przez pacjenta odczuwana jak kąpiel wodna o temperaturze około…",
                        "correct_answer": "37 °C",
                        "incorrect_answers": [
                            "25 °C",
                            "30 °C",
                            "40 °C"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Która z poniższych cech NIE należy do właściwości fizykochemicznych borowiny?",
                        "correct_answer": "Wysokie przewodnictwo cieplne",
                        "incorrect_answers": [
                            "Duża pojemność wodna",
                            "Duża pojemność cieplna",
                            "Zdolność sorpcyjna"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Jednym z efektów działania borowiny jest hamowanie enzymu…",
                        "correct_answer": "hialuronidazy",
                        "incorrect_answers": [
                            "amylazy",
                            "lipazy",
                            "pepsyny"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Redukcja peroksydacji lipidów przez borowinę jest związana głównie z jej działaniem…",
                        "correct_answer": "antyoksydacyjnym",
                        "incorrect_answers": [
                            "fototoksycznym",
                            "termogenicznym",
                            "hemopoetycznym"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Kwas huminowy wykazuje działanie fotoprotekcyjne, chroniąc komórki przed uszkodzeniami wywołanymi przez…",
                        "correct_answer": "promieniowanie UV",
                        "incorrect_answers": [
                            "promieniowanie gamma",
                            "promieniowanie rentgenowskie",
                            "pole magnetyczne"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Mechanizm antyoksydacyjny kwasów huminowych obejmuje m.in. chelatowanie jonów…",
                        "correct_answer": "żelaza i miedzi",
                        "incorrect_answers": [
                            "sodu i potasu",
                            "wapnia i magnezu",
                            "cynku i selenu"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Które działanie kwasów fulwowych przyczynia się do hamowania degradacji kolagenu w skórze?",
                        "correct_answer": "przeciwstarzeniowe",
                        "incorrect_answers": [
                            "fotokatalityczne",
                            "keratolityczne",
                            "depigmentacyjne"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Połączenie sylimaryny z piperyną i kwasem fulwowym powoduje…",
                        "correct_answer": "zwiększenie biodostępności sylimaryny",
                        "incorrect_answers": [
                            "obniżenie pH krwi",
                            "zmniejszenie wchłaniania wapnia",
                            "zwiększenie toksyczności sylimaryny"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Zalecana temperatura całkowitej kąpieli borowinowej wynosi…",
                        "correct_answer": "40–42 °C",
                        "incorrect_answers": [
                            "32–34 °C",
                            "50–52 °C",
                            "60–62 °C"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Maksymalny czas pojedynczego dużego fasonu borowinowego to…",
                        "correct_answer": "30 minut",
                        "incorrect_answers": [
                            "5 minut",
                            "60 minut",
                            "90 minut"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Po całkowitym zawijaniu borowinowym zaleca się odpoczynek trwający około…",
                        "correct_answer": "1 godziny",
                        "incorrect_answers": [
                            "10 minut",
                            "24 godzin",
                            "5 godzin"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Temperatura małych okładów borowinowych może sięgać nawet…",
                        "correct_answer": "46 °C",
                        "incorrect_answers": [
                            "38 °C",
                            "55 °C",
                            "62 °C"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Zawijania borowinowe są szczególnie zalecane przy zespołach bólowych…",
                        "correct_answer": "kręgosłupa",
                        "incorrect_answers": [
                            "żuchwy",
                            "nadgarstka",
                            "łokcia"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Okłady borowinowe stosuje się w zmianach zwyrodnieniowych…",
                        "correct_answer": "stawów biodrowych",
                        "incorrect_answers": [
                            "stawów skroniowych",
                            "stawów śródręcza",
                            "stawów skokowych"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Krwawienia w obrębie dróg rodnych stanowią dla zabiegów borowinowych…",
                        "correct_answer": "przeciwwskazanie",
                        "incorrect_answers": [
                            "wskazanie",
                            "czynnik obojętny",
                            "standardowe zalecenie"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Gorące zabiegi borowinowe mogą łagodzić objawy okołomenopauzalne, takie jak…",
                        "correct_answer": "uderzenia gorąca",
                        "incorrect_answers": [
                            "tętniaki aorty",
                            "odmrożenia",
                            "ślepota nocna"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Zaburzenia rytmu serca są w kontekście peloterapii borowinowej…",
                        "correct_answer": "przeciwwskazaniem",
                        "incorrect_answers": [
                            "wskazaniem",
                            "neutralne",
                            "dodatkową korzyścią"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Minimalny wiek pacjenta do stosowania zabiegów borowinowych to powyżej…",
                        "correct_answer": "7 lat",
                        "incorrect_answers": [
                            "1 roku",
                            "12 lat",
                            "18 lat"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "W przypadku choroby nowotworowej zabiegi borowinowe są…",
                        "correct_answer": "bezwzględnie przeciwwskazane",
                        "incorrect_answers": [
                            "czasowo wskazane",
                            "zalecane",
                            "obojętne"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "hard",
                        "category": 15,
                        "question": "Rozporządzenie Ministra Środowiska z 20 stycznia 2015 r. (R10) dopuszcza stosowanie odpadów torfowych wyłącznie na terenach…",
                        "correct_answer": "leśnych, zieleni miejskiej oraz w ogrodach i parkach",
                        "incorrect_answers": [
                            "odłogowanych pól uprawnych",
                            "stref przemysłowych",
                            "placów budowy"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "W kosmetyce borowina jest najczęściej stosowana w formie…",
                        "correct_answer": "maseczek, okładów i zawijań",
                        "incorrect_answers": [
                            "aerozoli",
                            "iniekcji domięśniowych",
                            "gwintów ortodontycznych"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Jakie działanie borowiny w kosmetykach odpowiada za ochronę skóry przed utratą elastyczności?",
                        "correct_answer": "odmładzające",
                        "incorrect_answers": [
                            "keratolityczne",
                            "fototoksyczne",
                            "silikonujące"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "easy",
                        "category": 15,
                        "question": "Ostre stany zapalne skóry są w gabinetach kosmetycznych…",
                        "correct_answer": "przeciwwskazaniem do zabiegów z borowiną",
                        "incorrect_answers": [
                            "głównym wskazaniem",
                            "czynnikiem neutralnym",
                            "warunkiem wstępnym"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Dzięki małemu przewodnictwu cieplnemu borowina…",
                        "correct_answer": "długo utrzymuje stałą temperaturę podczas zabiegu",
                        "incorrect_answers": [
                            "szybko oddaje ciepło do otoczenia",
                            "obniża pH skóry",
                            "przyspiesza krążenie limfy"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "hard",
                        "category": 15,
                        "question": "Prezentacja opisuje miejscową krioterapię borowinową prowadzoną w temperaturze około…",
                        "correct_answer": "+3 °C",
                        "incorrect_answers": [
                            "–20 °C",
                            "0 °C",
                            "–80 °C"
                        ]
                    },
                    {
                        "type": "multiple",
                        "difficulty": "medium",
                        "category": 15,
                        "question": "Do bitumin borowiny zaliczamy m.in.…",
                        "correct_answer": "woski",
                        "incorrect_answers": [
                            "celulozę",
                            "kwasy fulwowe",
                            "pektyny"
                        ]
                    },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 16,
                          "question": "Wybierz surowiec adaptogenny, określany mianem żeń-szenia indyjskiego:",
                          "correct_answer": "korzeń witanii",
                          "incorrect_answers": [
                            "korzeń różeńca",
                            "korzeń eleuterokoka",
                            "korzeń żeń-szenia koreańskiego"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 16,
                          "question": "Jakie może być niekorzystne działanie nadmiernego spożycia selenu z żywności?",
                          "correct_answer": "objawy zatrucia, takie jak łamliwość paznokci i wypadanie włosów",
                          "incorrect_answers": [
                            "zwiększone ryzyko przeziębień",
                            "osłabienie wzroku",
                            "niedobór żelaza"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 16,
                          "question": "Wskaż zdanie prawdziwe definiujące UL (Upper Limit):",
                          "correct_answer": "UL to maksymalna dzienna ilość składnika odżywczego, której spożycie nie wiąże się z ryzykiem niekorzystnych skutków zdrowotnych u większości ludzi.",
                          "incorrect_answers": [
                            "UL to zalecana dzienna ilość składnika odżywczego, która pokrywa zapotrzebowanie większości populacji.",
                            "UL to minimalna ilość składnika odżywczego potrzebna do uniknięcia niedoborów u większości zdrowej populacji.",
                            "UL to ilość składnika odżywczego, która pokrywa indywidualne zapotrzebowanie konkretnej osoby na dany dzień."
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 16,
                          "question": "Działanie adaptogenów:",
                          "correct_answer": "polega na zwiększeniu wytrzymałości organizmu i przystosowaniu do trudnych warunków (stres psychiczny, fizyczny)",
                          "incorrect_answers": [
                            "polega na lepszej akomodacji oczu i wyostrzeniu zmysłu słuchu, zwłaszcza w trudnych warunkach",
                            "jest związane z wpływem na układ pokarmowy i pozwala na przyjmowanie dużych ilości słodyczy bez wpływu na poziom glukozy (tzw. adaptacja glukostatyczna)",
                            "wynika z wpływu na transkrypcję DNA, dzięki czemu ewolucyjne zmiany adaptacyjne zachodzą w przyspieszonym tempie"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 16,
                          "question": "Jako środki skracające czas trwania infekcji stosowane są wyciągi z trzech gatunków jeżówek (Echinacea purpurea, E. angustifolia, E. pallida). Prawda czy fałsz?",
                          "correct_answer": "Fałsz",
                          "incorrect_answers": [
                            "Prawda"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 16,
                          "question": "Chemoprewencja to proces polegający na:",
                          "correct_answer": "stosowaniu naturalnych substancji w celu zmniejszenia ryzyka zachorowania na raka",
                          "incorrect_answers": [
                            "unikaniu jedzenia warzyw kapustnych podczas terapii choroby nowotworowej",
                            "stosowaniu prawidłowej diety, bogatej w antyoksydanty, zamiast leków w terapii choroby nowotworowej",
                            "stosowaniu chemioterapii (leki onkologiczne) w terapii choroby nowotworowej"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Alginiany mają zastosowanie apteczne jako:",
                          "correct_answer": "opatrunki",
                          "incorrect_answers": [
                            "leki p/w cukrzycowe",
                            "leki p/w lękowe",
                            "cytostatyki"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Który z polisacharydów alg brunatnych tworzy ochronny film na skórze, ograniczając transepidermalną utratę wody i wspierając regenerację?",
                          "correct_answer": "fukoidyna",
                          "incorrect_answers": [
                            "agar",
                            "laminaryna",
                            "karagen"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Jakie substancje obecne w algach wspierają układ odpornościowy?",
                          "correct_answer": "polisacharydy i białka",
                          "incorrect_answers": [
                            "sole mineralne z ołowiem",
                            "tłuszcze nasycone",
                            "barwniki syntetyczne"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Spirulina jest:",
                          "correct_answer": "bakterią",
                          "incorrect_answers": [
                            "krasnorostem",
                            "zielenicą",
                            "brunatnicą"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Karagen pozyskiwany jest z:",
                          "correct_answer": "krasnorostów",
                          "incorrect_answers": [
                            "brunatnic",
                            "spiruliny",
                            "zielenic"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Gdzie najczęściej prowadzi się hodowlę mikroalg na skalę przemysłową?",
                          "correct_answer": "w bioreaktorach lub otwartych stawach",
                          "incorrect_answers": [
                            "w zamkniętych laboratoriach",
                            "na powierzchni skał",
                            "w glebie"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Zielenice zawierają znaczące ilości:",
                          "correct_answer": "chlorofilu",
                          "incorrect_answers": [
                            "fikoerytryny",
                            "fikocyjaniny",
                            "fukoksantyny"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Jaką metodę najczęściej stosuje się do pozyskiwania substancji bioaktywnych z alg?",
                          "correct_answer": "ekstrakcję rozpuszczalnikową",
                          "incorrect_answers": [
                            "destylację parową",
                            "mrożenie i suszenie",
                            "fermentację alkoholową"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Najlepszym źródłem chlorofilu jest:",
                          "correct_answer": "Chlorella vulgaris",
                          "incorrect_answers": [
                            "Volvox",
                            "Spirulina pacifica",
                            "Chlamydomonas nivalis"
                          ]
                        },
                        {
                          "type": "multiple",
                          "difficulty": "hard",
                          "category": 17,
                          "question": "Jakie działanie wykazuje ekstrakt z alg Chlorella w pielęgnacji skóry?",
                          "correct_answer": "łagodzące, regenerujące i p/w zapalne",
                          "incorrect_answers": [
                            "silnie złuszczające i rozjaśniające",
                            "tylko ochronne przed promieniowaniem UV",
                            "wysuszające i regulujące wydzielanie potu"
                          ]
                        },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Co zawiera śluz ślimaka, co sprawia, że jest popularnym składnikiem kosmetyków regenerujących?",
                              "correct_answer": "alantoinę i kolagen",
                              "incorrect_answers": [
                                "retinol i melaniny",
                                "tylko wodę i tłuszcze",
                                "kreatynę"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Jakie wyróżniamy rodzaje miodów, w zależności od pochodzenia?",
                              "correct_answer": "miód nektarowy, miód spadziowy lub miód nektarowo-spadziowy",
                              "incorrect_answers": [
                                "miód z beczki drewnianej, plastikowej, metalowej",
                                "z łąki, lasu, pola",
                                "od pszczelarza, bartnika, hodowcy"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "W jakich jednostkach chorobowych może być wykorzystywana felinoterapia?",
                              "correct_answer": "zaburzenia snu i przewlekły ból",
                              "incorrect_answers": [
                                "urazy ortopedyczne",
                                "nowotwory krwi i skóry",
                                "choroby zakaźne i grzybicze"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Jakie zastosowanie ma tran w medycynie i suplementacji?",
                              "correct_answer": "wzmacnia odporność, wspiera zdrowie serca, skóry i kości",
                              "incorrect_answers": [
                                "stosowany jest jedynie w preparatach dermatologicznych",
                                "wspomaga trawienie i obniża poziom wapnia we krwi",
                                "jest stosowany wyłącznie jako środek przeczyszczający"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "W pszczelarstwie, co to jest pyłek kwiatowy, inaczej obnóża pyłkowe?",
                              "correct_answer": "to naturalny pyłek kwiatowy zbierany przez pszczoły, przynoszony do ula w postaci grudek na tylnej parze odnóży",
                              "incorrect_answers": [
                                "mikroskopijne komórki pochodzące z dolnej części kwiatostanu",
                                "komórki roślinne pokrywające grzbiet i odwłok pszczoły",
                                "rozdrobnione części kwiatów przyklejone do pszczelich odnóży"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Który składnik pochodzenia zwierzęcego stanowi źródło naturalnych antykoagulantów i jest stosowany w lekach przeciwzakrzepowych?",
                              "correct_answer": "heparyna",
                              "incorrect_answers": [
                                "jad pszczeli",
                                "chitozan",
                                "propolis"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Która forma zooterapii jest najczęściej stosowana u osób z mózgowym porażeniem dziecięcym w celu poprawy równowagi i koordynacji?",
                              "correct_answer": "hipoterapia",
                              "incorrect_answers": [
                                "felinoterapia",
                                "dogoterapia",
                                "delfinoterapia"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Który składnik pochodzenia morskiego jest używany w peelingach mechanicznych?",
                              "correct_answer": "muszle morskie",
                              "incorrect_answers": [
                                "jedwab",
                                "gąbka morska",
                                "kawior"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Co to jest apiterapia?",
                              "correct_answer": "to zastosowanie produktów pszczelich w profilaktyce medycznej",
                              "incorrect_answers": [
                                "nie używa się takiego określenia",
                                "to roślina występująca tylko w obrębie pasieki",
                                "to oddziaływanie pszczół na środowisko naturalne"
                              ]
                            },
                            {
                              "type": "multiple",
                              "difficulty": "hard",
                              "category": 18,
                              "question": "Jakie jest zastosowanie i właściwości pierzgi pszczelej?",
                              "correct_answer": "to wysoko-proteinowy pokarm pszczeli, bogaty m.in. w białko, witaminy oraz związki mineralne",
                              "incorrect_answers": [
                                "pierzga pszczela nie posiada żadnych właściwości",
                                "to surowiec służący do dezynfekcji wnętrza ula",
                                "to wytrzymały materiał służący do budowy ula"
                              ]
                            },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Grzyby jadalne są obecnie zaliczane do:",
                                  "correct_answer": "żywności funkcjonalnej",
                                  "incorrect_answers": [
                                    "nowej żywności",
                                    "żadna odpowiedź nie jest poprawna",
                                    "nie mają znaczenia jako żywność funkcjonalna"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Najdłużej stosowane w onkologii związki pochodzenia grzybowego o działaniu immunostymulującym to:",
                                  "correct_answer": "β-glukany",
                                  "incorrect_answers": [
                                    "flawonoidy",
                                    "ksylany",
                                    "kumaryny"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Ergotioneina:",
                                  "correct_answer": "jej znaczne ilości zawierają grzyby jadalne/lecznicze",
                                  "incorrect_answers": [
                                    "występuje powszechnie w grzybach niższych",
                                    "jest związkiem bez znaczenia dietetycznego",
                                    "występuje w kiełkach"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Metody biotechnologiczne:",
                                  "correct_answer": "pozwalają uzyskać grzybnię o znaczeniu leczniczym, w tym wzbogacaną w pierwiastki prozdrowotne",
                                  "incorrect_answers": [
                                    "powodują zamieranie grzybni",
                                    "stosuje się jedynie w odniesieniu do grzybów niższych",
                                    "nie są stosowane do otrzymywania grzybni grzybów leczniczych"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Gatunkiem o udowodnionej w badaniach klinicznych aktywności przeciwlękowej i poprawiającej nastrój jest:",
                                  "correct_answer": "soplówka jeżowata",
                                  "incorrect_answers": [
                                    "pieczarka dwuzarodnikowa",
                                    "borowik szlachetny",
                                    "boczniak ostrygowaty"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Grzyby posiadają potencjał w profilaktyce otyłości, ze względu na:",
                                  "correct_answer": "niską kaloryczność i regulację mikrobioty jelitowej",
                                  "incorrect_answers": [
                                    "wysoką zawartość pierwiastków śladowych takich jak Cr, Cu, Ni",
                                    "niską zawartość chityny, zwiększające przepuszczalność jelit",
                                    "wysoką kaloryczność i jednocześnie niską zawartość białek"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Najskuteczniejszą metodą ekstrakcji materiału grzybowego, która pozwala na otrzymanie pełnego spektrum substancji bioaktywnych jest:",
                                  "correct_answer": "podwójna ekstrakcja (wodno-alkoholowa)",
                                  "incorrect_answers": [
                                    "ekstrakcja wodna",
                                    "ekstrakcja w rozpuszczalnikach nieorganicznych",
                                    "ekstrakcja alkoholowa"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Która z poniższych cech morfologicznych jest typowa dla muchomora zielonawego (Amanita phalloides)?",
                                  "correct_answer": "oliwkowo zielony kapelusz, białe blaszki, bulwiasta nasada trzonu z pochwą i pierścieniem",
                                  "incorrect_answers": [
                                    "żółto-pomarańczowy kapelusz, rurkowaty hymenofor, smukły trzon bez pochwy",
                                    "biały kapelusz, blaszki przyrośnięte do trzonu, brak pierścienia",
                                    "czerwony kapelusz z białymi brodawkami, brak pochwy u nasady trzonu"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Który z poniższych grzybów jest naturalną alternatywą dla kwasu hialuronowego ze względu na silne właściwości nawilżające?",
                                  "correct_answer": "Tremella fuciformis",
                                  "incorrect_answers": [
                                    "Inonotus obliquus",
                                    "Lentinula edodes",
                                    "Ganoderma lucidum"
                                  ]
                                },
                                {
                                  "type": "multiple",
                                  "difficulty": "hard",
                                  "category": 19,
                                  "question": "Jakie są główne zalety prowadzenia hodowli mycelialnych w bioreaktorach?",
                                  "correct_answer": "jednorodność warunków, możliwość automatyzacji i większa wydajność",
                                  "incorrect_answers": [
                                    "możliwość prowadzenia hodowli w warunkach naturalnych",
                                    "zdolność do uzyskania owocników w warunkach polowych",
                                    "mniejsza kontrola nad procesem, ale niższe koszty"
                                  ]
                                },
                              
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Olibanum to oleogumożywica pozyskiwana z Boswellia serrata o potencjale leczniczym w stanach zapalnych stawów potwierdzonym danymi z badań klinicznych.",
                                    "correct_answer": "Prawda",
                                    "incorrect_answers": ["Fałsz"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż zdanie prawdziwe.",
                                    "correct_answer": "W Europie produkty z pluskwicy groniastej są rekomendowane jako łagodzące symptomy menopauzalne",
                                    "incorrect_answers": [
                                      "Genisteina należy do grupy alkaloidów o działaniu estrogennym; wykazuje także aktywność przeciwutleniającą, przeciwzapalną i chemoprewencyjną",
                                      "Fitoestrogeny to składniki olejków eterycznych o strukturze podobnej do 17β-estradiolu",
                                      "Głównym źródłem pozyskiwania trans-resweratrolu są nasiona soi"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż zdanie zawierające nieprawidłowe, fałszywe informacje.",
                                    "correct_answer": "Hederae folium – liść bluszczu zawiera saponiny triterpenowe, które po podaniu doustnym drażnią zakończenia nerwowe w błonie śluzowej żołądka co powoduje odruchową sekrecję wodnistego śluzu w oskrzelach.",
                                    "incorrect_answers": [
                                      "Jedną z saponin zawartych w liściach bluszczu jest α-hederyna, która oprócz działania sekretolitycznego wykazuje również aktywność rozszerzającą oskrzela.",
                                      "Hederae folium – liść bluszczu zawiera saponiny triterpenowe, które po podaniu doustnym drażnią zakończenia nerwowe w błonie śluzowej oskrzeli co powoduje odruchową sekrecję wodnistego śluzu w oskrzelach.",
                                      "Hederae folium – liść bluszczu jest surowcem, który wg rekomendacji Europejskiej Agencji Leków (EMA) może być zastosowany w przypadku produktywnego kaszlu u dziecka w wieku 3 lat."
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż surowiec, którego nie stosuje się w mieszankach wspomagających trawienie.",
                                    "correct_answer": "Nasienie kasztanowca (Hippocastani semen)",
                                    "incorrect_answers": [
                                      "Liść mięty (Menthae piperitae folium)",
                                      "Korzeń mniszka (Taraxaci officinalis radix)",
                                      "Ziele drapacza (Cnici benedicti herba)"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Fitoterapia jest jedyną metodą leczenia reumatoidalnego zapalenia stawów.",
                                    "correct_answer": "Fałsz",
                                    "incorrect_answers": ["Prawda"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż surowiec wykorzystywany w celu przyspieszenia gojenia siniaków i obrzęków.",
                                    "correct_answer": "Kwiat arniki (Arnicae flos)",
                                    "incorrect_answers": [
                                      "Kwiat lawendy (Lavandulae flos)",
                                      "Owoc anyżu (Anisi fructus)",
                                      "Korzeń prawoślazu (Althaeae radix)"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Europejska Agencja Leków (EMA) zaleca stosowanie Salicis cortex w stanach przeziębieniowych z towarzyszącą gorączką u dzieci powyżej 3. roku życia.",
                                    "correct_answer": "Fałsz",
                                    "incorrect_answers": ["Prawda"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "W profilaktyce nawrotów infekcji bakteryjnych pęcherza moczowego oraz wspomagająco w leczeniu łagodnych chorób zapalnych dolnych dróg moczowych najlepszym wyborem spośród poniższych mieszanek jest:",
                                    "correct_answer": "Solidaginis virgaureae herba + Betulae folium + Orthosiphonis folium + Uvae ursi folium",
                                    "incorrect_answers": [
                                      "Thymi herba + Liquiritiae radix + Hederae folium + Anisi fructus",
                                      "Rhei radix + Frangulae cortex + Anisi fructus + Sennae foliolum",
                                      "Helichrysi flos + Menthae piperitae folium + Gentianae radix + Juniperi galbulus"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wybierz poprawne zastosowanie żelu aloesowego w dermatologii.",
                                    "correct_answer": "Oparzenia",
                                    "incorrect_answers": ["Opryszczka", "Osutka", "Onycholiza"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż surowiec przeciwbiegunkowy, z którego odwary mogą być stosowane u dzieci.",
                                    "correct_answer": "Owoc suchy borówki czernicy (Vaccinium myrtillus fructus siccus)",
                                    "incorrect_answers": ["Owoc pokrzyku", "Owoc cisu", "Owoc borówki brusznicy"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Frakcja polifenolowa o aktywności obniżającej poziom lipidów została pozyskana z:",
                                    "correct_answer": "Owoców bergamoty",
                                    "incorrect_answers": [
                                      "Owoców pomarańczy gorzkiej",
                                      "Owoców cytryny",
                                      "Owoców pomarańczy słodkiej"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż zestaw surowców zawierających wyłącznie takie, które po podaniu doustnym mają działanie osłaniające i powlekające, dzięki czemu mogą być stosowane w przypadku suchego kaszlu i podrażnienia gardła.",
                                    "correct_answer": "Althaeae radix (korzeń prawoślazu) + Lichen islandicus (porost islandzki)",
                                    "incorrect_answers": [
                                      "Hederae folium (liść bluszczu) + Althaeae radix (korzeń prawoślazu)",
                                      "Thymi herba (ziele tymianku) + Salviae officinalis folium (liść szałwii)",
                                      "Salicis cortex (kora wierzby) + Anisi fructus (owoc anyżu)"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "W przypadku suchej, podrażnionej skóry u dzieci w wieku 1 roku można polecić preparaty do kąpieli przygotowane z:",
                                    "correct_answer": "Avenae fructus (ziarno owsa)",
                                    "incorrect_answers": ["Kamfory", "Capsici fructus (owoc pieprzowca)", "Olejku z liści szałwii lekarskiej"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Substancje roślinne o działaniu nasercowym (cardiacum)…",
                                    "correct_answer": "To liście naparstnicy purpurowej (Digitalis purpurea) oraz naparstnicy wełnistej (Digitalis lanata), które stosuje się wyłącznie w postaci nalewek mianowanych (tinctura titrata).",
                                    "incorrect_answers": [
                                      "To także liść miłorzębu, którego związki aktywne działają inotropowo (+), wykazując powinowactwo do komórek mięśnia sercowego.",
                                      "To ziele konwalii oraz miłka wiosennego, które wykorzystuje się wyłącznie do izolacji czystych glikozydów nasercowych.",
                                      "To, poza zielem konwalii i miłka, także kwiatostan głogu, który uznaje się za surowiec bezpieczny, gdyż nie zawiera glikozydów nasercowych."
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż zdanie poprawne dotyczące liścia miłorzębu (Ginkgo biloba).",
                                    "correct_answer": "W zaburzeniach krążenia mózgowego oraz pamięci krótkotrwałej stosujemy standaryzowane wyciągi z liścia miłorzębu (Ginkgonis folium), którego aktywność wynika z zawartości frakcji flawonoidowej oraz pochodnych terpenowych.",
                                    "incorrect_answers": [
                                      "Do frakcji terpenowej liścia miłorzębu (Ginkgonis fructus) należy ginkgolid B, którego obecność powoduje zwiększoną tendencję do tworzenia zakrzepów.",
                                      "Składnikiem pożądanym w wyciągu standaryzowanym z liścia miłorzębu są kwasy ginkgolowe, które wpływają na poprawę pamięci krótkotrwałej.",
                                      "W zaburzeniach pamięci długotrwałej oraz migrenach stosujemy standaryzowane wyciągi z owoców miłorzębu (Ginkgonis fructus), których aktywność wynika z zawartości frakcji flawonoidowej oraz pochodnych terpenowych."
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż zdanie zawierające prawdziwe informacje dotyczące korzenia pierwiosnka i liścia bluszczu.",
                                    "correct_answer": "Primulae radix (korzeń pierwiosnka) podobnie jak Hederae folium (liść bluszczu) należy do surowców saponinowych, które mają działanie wykrztuśne.",
                                    "incorrect_answers": [
                                      "Primulae radix podobnie jak Hederae folium należy do surowców śluzowych, które po podaniu doustnym mają działanie przeciwzapalne i osłaniające błonę śluzową jamy ustnej i gardła.",
                                      "Primulae radix podobnie jak Hederae folium należy do surowców saponinowych, jednak korzeń pierwiosnka ma działanie ochronne wobec śluzówki żołądka, podczas gdy liść bluszczu nie posiada takiego działania, lecz ma aktywność uszczelniającą naczynia krwionośne.",
                                      "Primulae radix podobnie jak Hederae folium należy do surowców saponinowych, jednak surowce te różnią się działaniem. Korzeń pierwiosnka ma działanie wykrztuśne, podczas gdy liść bluszczu nie posiada takiego działania, lecz ma aktywność uszczelniającą naczynia krwionośne."
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Mentol jest składnikiem olejku z mięty pieprzowej, który po zastosowaniu w okolicy nozdrzy u dziecka poniżej 2. roku życia może wywołać bezdech.",
                                    "correct_answer": "Prawda",
                                    "incorrect_answers": ["Fałsz"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Które surowce mogą obniżać poziom glukozy we krwi?",
                                    "correct_answer": "Liść gurmaru, guma guar, liść morwy",
                                    "incorrect_answers": [
                                      "Liść gurmaru, kwiat lawendy, korzeń rzewienia",
                                      "Liść morwy, owocnia fasoli, kora dębu",
                                      "Liść morwy, korzeń żeń-szenia koreańskiego, kora kruszyny"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Ziele dziurawca (Hyperici herba) wykazuje odmienny kierunek działania w zależności od rodzaju przetworu: w zaburzeniach trawienia stosuje się wyciągi wodne, natomiast w łagodnych postaciach depresji wyciągi lipofilowe.",
                                    "correct_answer": "Prawda",
                                    "incorrect_answers": ["Fałsz"]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "W terapii hemoroidów stosujemy:",
                                    "correct_answer": "Wyciągi roślinne o różnym działaniu, w tym: ściągające, uszczelniające naczynia i poprawiające krążenie, przeciwzapalne oraz gojące",
                                    "incorrect_answers": [
                                      "Podstawą terapii są środki znieczulające (jak Menthae piperitae oleum) oraz zabiegi chirurgiczne, rzadko stosuje się wyciągi roślinne",
                                      "Wyłącznie środki działające miejscowo, w formie maści, żeli, czopków, kąpieli",
                                      "Surowce garbnikowe, bo tylko działanie ściągające i hamujące drobne krwawienia ma sens"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wskaż zestaw surowców wykazujących działanie uspokajające:",
                                    "correct_answer": "Valerianae radix, Lupulinum, Melissae folium",
                                    "incorrect_answers": [
                                      "Lavandulae flos, Valerianae radix, Mate folium",
                                      "Humulinum, Hyperici herba, Ginkgonis folium",
                                      "Melissae folium, Cacao semen, Valerianae radix"
                                    ]
                                  },
                                  {
                                    "type": "multiple",
                                    "difficulty": "hard",
                                    "category": 20,
                                    "question": "Wybierz prawdziwe zdanie dotyczące surowców przeczyszczających:",
                                    "correct_answer": "Surowce antranoidowe, takie jak korzeń rzewienia czy listek senesu, można stosować doraźnie lub krótkotrwale, wyłącznie u dorosłych.",
                                    "incorrect_answers": [
                                      "Surowce antranoidowe, takie jak korzeń rzewienia czy listek senesu, można stosować doraźnie lub krótkotrwale, u dzieci i dorosłych.",
                                      "Surowce antranoidowe, takie jak korzeń rzewienia czy listek senesu, można stosować bez żadnych ograniczeń.",
                                      "Surowce antranoidowe, takie jak nasienie lnu czy babki płesznik, można stosować bez żadnych ograniczeń."
                                    ]
                                  }
                                ,
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Olejek eteryczny to aromatyczna mieszanina związków, zawierająca pochodne o budowie terpenowej i nieterpenowej (np. fenolowej). Olejki mogą być gromadzone w każdej części rośliny, a otrzymywane są najczęściej przez destylację z parą wodną lub wyciskanie.",
                                      "correct_answer": "Prawda",
                                      "incorrect_answers": ["Fałsz"]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Do działań niepożądanych po zastosowaniu surowców o działaniu przeczyszczającym zawierających antrazwiązki należą:",
                                      "correct_answer": "wszystkie wymienione",
                                      "incorrect_answers": [
                                          "bolesne skurcze jelit",
                                          "przy dłuższym stosowaniu – zaburzenia elektrolitowe, atonia jelit",
                                          "podrażnienie narządów miednicy mniejszej – nasilenie krwawień miesiączkowych"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Gorycze to związki… Wskaż zdanie fałszywe.",
                                      "correct_answer": "występujące wyłącznie w rodzaju Gentiana – goryczka.",
                                      "incorrect_answers": [
                                          "należące do różnych grup chemicznych.",
                                          "charakteryzujące się smakiem gorzkim.",
                                          "działające poprzez pobudzenie receptorów w jamie ustnej, a efektem jest wzrost wydzielania soków trawiennych."
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Śluzy należą do metabolitów wtórnych, produkowanych fizjologicznie, charakteryzujących się pęcznieniem, żelowaniem i ciągliwością.",
                                      "correct_answer": "Fałsz",
                                      "incorrect_answers": ["Prawda"]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Do polifenoli roślinnych zaliczamy:",
                                      "correct_answer": "flawonoidy i garbniki",
                                      "incorrect_answers": [
                                          "irydoidy i gorycze",
                                          "wszystkie związki chemiczne zawierające grupę fenolową",
                                          "olejki eteryczne"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Wskaż zdanie fałszywe dotyczące grupy flawonoidów:",
                                      "correct_answer": "Antocyjany działają estrogennie, modulując aktywność receptorów estrogenowych poprzez podobieństwo budowy przestrzennej do naturalnych estrogenów.",
                                      "incorrect_answers": [
                                          "Wpływ uszczelniający flawonoidów na ściany naczyń włosowatych nazywany jest działaniem „typu witaminy P”.",
                                          "Flawonoidy to barwniki roślinne, wykazujące właściwości antyoksydacyjne.",
                                          "Flawonolignany zawarte w owocach ostropestu działają regeneracyjnie na komórki wątroby."
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Domieszki są pożądanym składnikiem substancji roślinnej i nie są traktowane jako zanieczyszczenia.",
                                      "correct_answer": "Fałsz",
                                      "incorrect_answers": ["Prawda"]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Metabolity podstawowe (pierwotne) pełnią następujące funkcje w roślinach:",
                                      "correct_answer": "są materiałem budulcowym oraz zapasowym",
                                      "incorrect_answers": [
                                          "ich produkcja jest formą adaptacji chemicznej do zewnętrznych czynników środowiskowych",
                                          "wspierają mechanizmy obronne",
                                          "pomagają w reprodukcji, np. wabiąc owady"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Dopasuj grupę związków lub wydzielinę roślinną do jej cechy charakterystycznej (podaj pełne zestawienie):",
                                      "correct_answer": "oleożywice – frakcje żywicy rozpuszczone w olejku eterycznym; garbniki – wykazują właściwości ściągające; kumaryny – niektóre związki mogą wykazywać właściwości fotouczulające; alkaloidy – związki posiadające atom azotu w strukturze",
                                      "incorrect_answers": [
                                          "garbniki – frakcje żywicy rozpuszczone w olejku eterycznym; oleożywice – wykazują właściwości ściągające; kumaryny – związki posiadające atom azotu w strukturze; alkaloidy – niektóre związki mogą wykazywać właściwości fotouczulające",
                                          "oleożywice – wykazują właściwości ściągające; garbniki – frakcje żywicy rozpuszczone w olejku eterycznym; kumaryny – związki posiadające atom azotu w strukturze; alkaloidy – niektóre związki mogą wykazywać właściwości fotouczulające",
                                          "oleożywice – związki posiadające atom azotu w strukturze; garbniki – niektóre związki mogą wykazywać właściwości fotouczulające; kumaryny – frakcje żywicy rozpuszczone w olejku eterycznym; alkaloidy – wykazują właściwości ściągające"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Wskaż zdanie fałszywe dotyczące definicji „substancji roślinnej o działaniu leczniczym”:",
                                      "correct_answer": "Substancja roślinna o działaniu leczniczym to wyłącznie roślina o tradycji stosowania w medycynie ludowej.",
                                      "incorrect_answers": [
                                          "Substancja roślinna o działaniu leczniczym może wchodzić w skład species.",
                                          "Substancja roślinna o działaniu leczniczym musi spełniać wymogi określone w Farmakopei Polskiej.",
                                          "Substancja roślinna o działaniu leczniczym jest pozyskiwana z upraw oraz ze stanu naturalnego."
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Komitet ds. Produktów Leczniczych Roślinnych (HMPC):",
                                      "correct_answer": "jest to jeden z komitetów naukowych EMA odpowiedzialny za tworzenie monografii",
                                      "incorrect_answers": [
                                          "jest to jeden z komitetów naukowych WHO odpowiedzialny za tworzenie monografii",
                                          "jest organem Urzędu Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych",
                                          "jest odpowiedzialny za rejestrację suplementów diety"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Pojęcie „well established use” dla substancji roślinnych oznacza:",
                                      "correct_answer": "o ugruntowanym zastosowaniu medycznym",
                                      "incorrect_answers": [
                                          "dotychczas nie stosowane w lecznictwie",
                                          "stosowane od pięciu lat na określonym terenie",
                                          "pozyskiwane z kontrolowanych upraw"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Tradycyjny produkt leczniczy roślinny to:",
                                      "correct_answer": "produkt z określonymi ograniczeniami w odniesieniu do wskazań",
                                      "incorrect_answers": [
                                          "synonim leku homeopatycznego",
                                          "produkt bez ograniczeń odnośnie do wskazań o ile dostarczy się danych dotyczących tradycyjnego stosowania przez co najmniej 30 lat",
                                          "wyłącznie produkt o udowodnionym stosowaniu w systemie Tradycyjnej Medycyny Chińskiej"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Uzupełnij zdanie: Farmakognostyczne metody badań...",
                                      "correct_answer": "Wszystkie powyższe odpowiedzi są prawidłowe.",
                                      "incorrect_answers": [
                                          "służą kontroli jakości substancji roślinnych.",
                                          "obejmują m.in. badania mikroskopowe i makroskopowe substancji roślinnych.",
                                          "są ujęte w Farmakopei Polskiej."
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Produkt leczniczy roślinny:",
                                      "correct_answer": "to produkt zawierający substancje roślinne lub/i przetwory roślinne",
                                      "incorrect_answers": [
                                          "to każdy produkt wytworzony z roślin",
                                          "to produkt zawierający wyłącznie związki izolowane z roślin",
                                          "to synonim extractum siccum"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Dopasuj polskie części roślin do ich łacińskich nazw (podaj pełne zestawienie):",
                                      "correct_answer": "kwiat – Flos; owoc – Fructus; liść – Folium; korzeń – Radix; ziele – Herba",
                                      "incorrect_answers": [
                                          "kwiat – Radix; owoc – Fructus; liść – Folium; korzeń – Flos; ziele – Herba",
                                          "kwiat – Flos; owoc – Folium; liść – Fructus; korzeń – Radix; ziele – Herba",
                                          "kwiat – Herba; owoc – Flos; liść – Folium; korzeń – Radix; ziele – Fructus"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Substancją roślinną jest:",
                                      "correct_answer": "wysuszona część rośliny, grzyby, porosty, niektóre wydzieliny roślinne",
                                      "incorrect_answers": [
                                          "nalewka wykonana z określonej części rośliny",
                                          "oczyszczona frakcja zawierająca związki czynne",
                                          "wyłącznie wydzielina roślinna np. oleożywica"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Od czego zależy profil fitochemiczny substancji roślinnej?",
                                      "correct_answer": "wszystkie powyższe",
                                      "incorrect_answers": [
                                          "od genotypu",
                                          "od warunków glebowo-klimatycznych",
                                          "od warunków suszenia i przechowywania"
                                      ]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Skład jakościowo-ilościowy substancji roślinnych pozyskiwanych z upraw jest zawsze niezmienny.",
                                      "correct_answer": "Fałsz",
                                      "incorrect_answers": ["Prawda"]
                                  },
                                  {
                                      "type": "multiple",
                                      "difficulty": "hard",
                                      "category": 21,
                                      "question": "Fitoterapia to:",
                                      "correct_answer": "dział terapii wykorzystujący w celach leczniczych produkty lecznicze roślinne",
                                      "incorrect_answers": [
                                          "synonim farmakologii",
                                          "nauka o ziołach stosowanych leczniczo w tradycyjnej medycynie chińskiej",
                                          "wiedza o zastosowaniu leczniczym fitolu"
                                      ]
                                  }
                              ]
                              
                                
                              
                          

export default QUESTIONS