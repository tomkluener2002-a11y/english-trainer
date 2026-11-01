// Generiert von scripts/gen-drafts.ts aus content-drafts/core.b2u2.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.b2u2",
  "title": "Medien & Nachrichten",
  "description": "Nachrichten verstehen und das Passiv sicher nutzen.",
  "cefr": "B2",
  "color": "teal",
  "icon": "📰",
  "topics": [
    "Passiv",
    "Schlagzeilen",
    "Indirekte Rede",
    "Zusammenfassen"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Passiv: be + Partizip II",
      "text": "Das Passiv bildest du mit einer Form von to be und dem Partizip II (publish, published). Die Zeitform steckt im to be: is/are für Präsens, was/were für Vergangenheit, will be für Zukunft. Wer etwas tut, ist oft unwichtig oder unbekannt und fehlt deshalb im Satz.",
      "examples": [
        {
          "en": "The report is published every Monday.",
          "de": "Der Bericht wird jeden Montag veröffentlicht."
        },
        {
          "en": "The man was arrested last night.",
          "de": "Der Mann wurde letzte Nacht festgenommen."
        },
        {
          "en": "The results will be announced on Friday.",
          "de": "Die Ergebnisse werden am Freitag bekannt gegeben."
        }
      ]
    },
    {
      "title": "Indirekte Rede: Zeitverschiebung",
      "text": "Berichtest du, was jemand gesagt hat, rückst du die Zeitform meist eine Stufe zurück: is wird zu was, have zu had, will zu would. Bei warn steht die Person direkt danach: warn someone that …",
      "examples": [
        {
          "en": "He said he was tired.",
          "de": "Er sagte, er sei müde."
        },
        {
          "en": "She admitted that she had lost the key.",
          "de": "Sie gab zu, dass sie den Schlüssel verloren hatte."
        },
        {
          "en": "She warned us that the bus was late.",
          "de": "Sie warnte uns, dass der Bus Verspätung hatte."
        }
      ]
    },
    {
      "title": "Schlagzeilen lesen",
      "text": "Schlagzeilen sind kurz: Artikel und Hilfsverben wie is oder was fallen oft weg. Eine Zukunft wird dann mit to + Verb ausgedrückt. Suche das Verb, das die Handlung trägt, dann verstehst du die Meldung.",
      "examples": [
        {
          "en": "Mayor denies rumors.",
          "de": "Bürgermeister bestreitet Gerüchte."
        },
        {
          "en": "Storm to hit coast tonight.",
          "de": "Sturm soll heute Nacht die Küste treffen."
        },
        {
          "en": "Two rescued from river.",
          "de": "Zwei aus dem Fluss gerettet."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.b2u2.l1",
      "title": "Meldungen",
      "description": "Passiv im Präsens: veröffentlichen, ankündigen, berichten",
      "introduces": [
        "core.b2u2.publish",
        "core.b2u2.report",
        "core.b2u2.announce"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u2.publish"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u2.report"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet „publish“?",
          "question": "publish",
          "questionLang": "en",
          "choices": [
            {
              "text": "veröffentlichen",
              "correct": true
            },
            {
              "text": "löschen"
            },
            {
              "text": "verschieben"
            }
          ],
          "words": [
            "core.b2u2.publish"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u2.announce"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "publish",
              "de": "veröffentlichen"
            },
            {
              "en": "announce",
              "de": "ankündigen"
            },
            {
              "en": "report",
              "de": "der Bericht"
            },
            {
              "en": "teacher",
              "de": "der Lehrer"
            }
          ],
          "words": [
            "core.b2u2.publish",
            "core.b2u2.announce",
            "core.b2u2.report",
            "core.teacher"
          ]
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "The report is published every Monday.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Der Bericht wird jeden Montag veröffentlicht.",
              "correct": true
            },
            {
              "text": "Der Bericht wurde am Montag veröffentlicht."
            },
            {
              "text": "Die Berichte veröffentlichen jeden Montag."
            }
          ],
          "words": [
            "core.b2u2.publish",
            "core.b2u2.report"
          ]
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "The new guide ___ published online every week.",
          "choices": [
            {
              "text": "is",
              "correct": true
            },
            {
              "text": "are"
            },
            {
              "text": "am"
            }
          ],
          "translation": "Der neue Leitfaden wird jede Woche online veröffentlicht.",
          "explanation": "Passiv = to be + Partizip II. „The guide“ ist Singular, also is.",
          "words": [
            "core.b2u2.publish"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Der Bericht wird jeden Montag veröffentlicht.",
          "answer": "The report is published every Monday.",
          "accepted": [
            "Every Monday the report is published."
          ],
          "distractors": [
            "publishes",
            "are",
            "publishing"
          ],
          "words": [
            "core.b2u2.report",
            "core.b2u2.publish"
          ]
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "The results are ___ on Friday.",
          "accepted": [
            "announced"
          ],
          "hint": "ankündigen (Partizip II)",
          "translation": "Die Ergebnisse werden am Freitag bekannt gegeben.",
          "words": [
            "core.b2u2.announce"
          ]
        },
        {
          "id": "e10",
          "type": "speak",
          "text": "The new plans were announced on Monday.",
          "translation": "Die neuen Pläne wurden am Montag angekündigt.",
          "words": [
            "core.b2u2.announce"
          ]
        },
        {
          "id": "e11",
          "type": "listen-type",
          "audio": "The school news was published online.",
          "translation": "Die Nachricht der Schule wurde online veröffentlicht.",
          "words": [
            "core.b2u2.publish"
          ]
        },
        {
          "id": "e12",
          "type": "dialogue",
          "title": "Neuigkeiten",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Have you read the news today?",
              "de": "Hast du heute die Nachrichten gelesen?"
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "No. What happened?",
              "de": "Nein. Was ist passiert?"
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "A new library will be built next year. It was announced yesterday.",
              "de": "Eine neue Bibliothek wird nächstes Jahr gebaut. Sie wurde gestern angekündigt."
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "Great news!",
              "de": "Tolle Neuigkeiten!"
            }
          ],
          "question": "Wann wurde die Bibliothek angekündigt?",
          "choices": [
            {
              "text": "Gestern",
              "correct": true
            },
            {
              "text": "Nächstes Jahr"
            },
            {
              "text": "Heute früh"
            }
          ],
          "words": [
            "core.b2u2.announce"
          ]
        }
      ]
    },
    {
      "id": "core.b2u2.l2",
      "title": "Was passiert ist",
      "description": "Passiv in der Vergangenheit: festnehmen, evakuieren, retten, verbieten",
      "introduces": [
        "core.b2u2.arrest",
        "core.b2u2.suspect",
        "core.b2u2.evacuate",
        "core.b2u2.rescue",
        "core.b2u2.ban"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u2.arrest"
        },
        {
          "id": "e02",
          "type": "choice",
          "prompt": "Was bedeutet „arrest“?",
          "question": "arrest",
          "questionLang": "en",
          "choices": [
            {
              "text": "festnehmen",
              "correct": true
            },
            {
              "text": "verurteilen"
            },
            {
              "text": "befreien"
            }
          ],
          "words": [
            "core.b2u2.arrest"
          ]
        },
        {
          "id": "e03",
          "type": "intro",
          "word": "core.b2u2.suspect"
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u2.evacuate"
        },
        {
          "id": "e05",
          "type": "listen-choice",
          "audio": "The suspect was arrested in the evening.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Der Verdächtige wurde am Abend festgenommen.",
              "correct": true
            },
            {
              "text": "Der Verdächtige wurde am Abend freigelassen."
            },
            {
              "text": "Der Verdächtige hat am Abend gestanden."
            }
          ],
          "words": [
            "core.b2u2.suspect",
            "core.b2u2.arrest"
          ]
        },
        {
          "id": "e06",
          "type": "translate",
          "direction": "en-de",
          "prompt": "The families were evacuated from the flood zone.",
          "answer": "Die Familien wurden aus dem Überschwemmungsgebiet evakuiert.",
          "accepted": [
            "Familien wurden aus dem Überschwemmungsgebiet evakuiert."
          ],
          "distractors": [
            "gerettet",
            "verboten",
            "verhaftet"
          ],
          "words": [
            "core.b2u2.evacuate"
          ]
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "The man ___ arrested last night.",
          "choices": [
            {
              "text": "was",
              "correct": true
            },
            {
              "text": "were"
            },
            {
              "text": "is"
            }
          ],
          "translation": "Der Mann wurde letzte Nacht festgenommen.",
          "explanation": "Vergangenheit im Passiv: was/were + Partizip II. „The man“ ist Singular.",
          "words": [
            "core.b2u2.arrest"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b2u2.rescue"
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "Two people were ___ from the river.",
          "accepted": [
            "rescued"
          ],
          "hint": "retten",
          "translation": "Zwei Menschen wurden aus dem Fluss gerettet.",
          "words": [
            "core.b2u2.rescue"
          ]
        },
        {
          "id": "e10",
          "type": "match",
          "pairs": [
            {
              "en": "arrest",
              "de": "festnehmen"
            },
            {
              "en": "evacuate",
              "de": "evakuieren"
            },
            {
              "en": "rescue",
              "de": "retten"
            },
            {
              "en": "suspect",
              "de": "der Verdächtige"
            }
          ],
          "words": [
            "core.b2u2.arrest",
            "core.b2u2.evacuate",
            "core.b2u2.rescue",
            "core.b2u2.suspect"
          ]
        },
        {
          "id": "e11",
          "type": "listen-type",
          "audio": "The school was evacuated this morning.",
          "translation": "Die Schule wurde heute Morgen evakuiert.",
          "words": [
            "core.b2u2.evacuate"
          ]
        },
        {
          "id": "e12",
          "type": "intro",
          "word": "core.b2u2.ban"
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Rauchen ist im Gebäude verboten.",
          "answer": "Smoking is banned in the building.",
          "accepted": [
            "In the building, smoking is banned."
          ],
          "distractors": [
            "was",
            "bans",
            "above"
          ],
          "words": [
            "core.b2u2.ban"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Nachrichten am Morgen",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Did you hear the news this morning?",
              "de": "Hast du heute Morgen die Nachrichten gehört?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "No. What happened?",
              "de": "Nein. Was ist passiert?"
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "A man was arrested near the station. The school was evacuated.",
              "de": "Ein Mann wurde am Bahnhof festgenommen. Die Schule wurde evakuiert."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Was anyone hurt?",
              "de": "Wurde jemand verletzt?"
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "No, but two people were rescued from the river.",
              "de": "Nein, aber zwei Menschen wurden aus dem Fluss gerettet."
            }
          ],
          "question": "Wer wurde festgenommen?",
          "choices": [
            {
              "text": "Ein Mann",
              "correct": true
            },
            {
              "text": "Die Schule"
            },
            {
              "text": "Zwei Personen"
            }
          ],
          "words": [
            "core.b2u2.arrest",
            "core.b2u2.evacuate",
            "core.b2u2.rescue"
          ]
        }
      ]
    },
    {
      "id": "core.b2u2.l3",
      "title": "Schlagzeilen",
      "description": "Nachrichten verstehen und kurz zusammenfassen",
      "introduces": [
        "core.b2u2.headline",
        "core.b2u2.crisis",
        "core.b2u2.surge",
        "core.b2u2.summarize",
        "core.b2u2.main-point"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u2.headline"
        },
        {
          "id": "e02",
          "type": "choice",
          "prompt": "Welches Bild zeigt „die Schlagzeile“?",
          "choices": [
            {
              "text": "headline",
              "emoji": "📰",
              "correct": true
            },
            {
              "text": "weather",
              "emoji": "🌦️"
            },
            {
              "text": "cheese",
              "emoji": "🧀"
            }
          ],
          "words": [
            "core.b2u2.headline"
          ]
        },
        {
          "id": "e03",
          "type": "intro",
          "word": "core.b2u2.crisis"
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u2.surge"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "headline",
              "de": "die Schlagzeile"
            },
            {
              "en": "crisis",
              "de": "die Krise"
            },
            {
              "en": "surge",
              "de": "der starke Anstieg"
            },
            {
              "en": "report",
              "de": "der Bericht"
            }
          ],
          "words": [
            "core.b2u2.headline",
            "core.b2u2.crisis",
            "core.b2u2.surge",
            "core.b2u2.report"
          ]
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "There was a surge in energy prices.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Es gab einen starken Anstieg der Energiepreise.",
              "correct": true
            },
            {
              "text": "Die Energiepreise sind stark gesunken."
            },
            {
              "text": "Der Energieverbrauch ist gleich geblieben."
            }
          ],
          "words": [
            "core.b2u2.surge"
          ]
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "The ___ was short and catchy.",
          "choices": [
            {
              "text": "headline",
              "correct": true
            },
            {
              "text": "crisis"
            },
            {
              "text": "surge"
            }
          ],
          "translation": "Die Schlagzeile war kurz und einprägsam.",
          "explanation": "Hier geht es um die Überschrift, nicht um eine Krise oder einen Anstieg.",
          "words": [
            "core.b2u2.headline"
          ]
        },
        {
          "id": "e08",
          "type": "type",
          "sentence": "The company is in a financial ___.",
          "accepted": [
            "crisis"
          ],
          "hint": "Krise",
          "translation": "Das Unternehmen steckt in einer finanziellen Krise.",
          "words": [
            "core.b2u2.crisis"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.b2u2.summarize"
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Kannst du den Artikel in zwei Sätzen zusammenfassen?",
          "answer": "Can you summarize the article in two sentences?",
          "accepted": [
            "In two sentences, can you summarize the article?"
          ],
          "distractors": [
            "summary",
            "crisis",
            "headline"
          ],
          "words": [
            "core.b2u2.summarize"
          ]
        },
        {
          "id": "e11",
          "type": "intro",
          "word": "core.b2u2.main-point"
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "What is the main point of the article?",
          "translation": "Was ist die Kernaussage des Artikels?",
          "words": [
            "core.b2u2.main-point"
          ]
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "en-de",
          "prompt": "The main point is that prices are rising.",
          "answer": "Die Kernaussage ist, dass die Preise steigen.",
          "accepted": [
            "Dass die Preise steigen, ist die Kernaussage."
          ],
          "distractors": [
            "Schlagzeile",
            "gesunken",
            "Krise"
          ],
          "words": [
            "core.b2u2.main-point"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Zeitung lesen",
          "lines": [
            {
              "speaker": "a",
              "name": "Anna",
              "en": "Look at this headline. The town votes on a new park.",
              "de": "Schau dir diese Schlagzeile an. Die Stadt stimmt über einen neuen Park ab."
            },
            {
              "speaker": "b",
              "name": "Sam",
              "en": "Can you summarize the article?",
              "de": "Kannst du den Artikel zusammenfassen?"
            },
            {
              "speaker": "a",
              "name": "Anna",
              "en": "Yes. The main point is that the town will build a new park next year.",
              "de": "Die Kernaussage ist, dass die Stadt nächstes Jahr einen neuen Park baut."
            },
            {
              "speaker": "b",
              "name": "Sam",
              "en": "Perfect, thanks. That is a clear summary.",
              "de": "Perfekt, danke. Das ist eine klare Zusammenfassung."
            }
          ],
          "question": "Was ist die Kernaussage des Artikels?",
          "choices": [
            {
              "text": "Die Stadt baut nächstes Jahr einen Park.",
              "correct": true
            },
            {
              "text": "Die Stadt hat eine Krise."
            },
            {
              "text": "Der Park wurde verboten."
            }
          ],
          "words": [
            "core.b2u2.headline",
            "core.b2u2.summarize",
            "core.b2u2.main-point"
          ]
        }
      ]
    },
    {
      "id": "core.b2u2.l4",
      "title": "Indirekte Rede",
      "description": "Behaupten, bestreiten, zugeben und warnen",
      "introduces": [
        "core.b2u2.claim",
        "core.b2u2.deny",
        "core.b2u2.admit",
        "core.b2u2.warn",
        "core.b2u2.according-to"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u2.claim"
        },
        {
          "id": "e02",
          "type": "choice",
          "prompt": "Was bedeutet „claimed“ in diesem Satz?",
          "question": "He claimed he was tired.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Er behauptete, er sei müde.",
              "correct": true
            },
            {
              "text": "Er hat einen Anspruch auf Urlaub."
            },
            {
              "text": "Er war sehr müde und hat geschlafen."
            }
          ],
          "words": [
            "core.b2u2.claim"
          ]
        },
        {
          "id": "e03",
          "type": "intro",
          "word": "core.b2u2.deny"
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u2.admit"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Sie gab zu, dass sie den Schlüssel verloren hatte.",
          "answer": "She admitted that she had lost the key.",
          "accepted": [
            "She had lost the key, she admitted."
          ],
          "distractors": [
            "denied",
            "claimed",
            "warned"
          ],
          "words": [
            "core.b2u2.admit"
          ]
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "The mayor denied the rumors.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Der Bürgermeister bestritt die Gerüchte.",
              "correct": true
            },
            {
              "text": "Der Bürgermeister gab die Gerüchte zu."
            },
            {
              "text": "Der Bürgermeister verbot die Gerüchte."
            }
          ],
          "words": [
            "core.b2u2.deny"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b2u2.warn"
        },
        {
          "id": "e08",
          "type": "fill",
          "sentence": "She ___ us that the bus was late.",
          "choices": [
            {
              "text": "warned",
              "correct": true
            },
            {
              "text": "warn"
            },
            {
              "text": "warning"
            }
          ],
          "translation": "Sie warnte uns, dass der Bus Verspätung hatte.",
          "explanation": "Vergangenheit nach she, dann Person + that.",
          "words": [
            "core.b2u2.warn"
          ]
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "He ___ taking the money.",
          "accepted": [
            "denied"
          ],
          "hint": "bestreiten (Vergangenheit)",
          "translation": "Er bestritt, das Geld genommen zu haben.",
          "words": [
            "core.b2u2.deny"
          ]
        },
        {
          "id": "e10",
          "type": "match",
          "pairs": [
            {
              "en": "claim",
              "de": "behaupten"
            },
            {
              "en": "deny",
              "de": "bestreiten"
            },
            {
              "en": "admit",
              "de": "zugeben"
            },
            {
              "en": "warn",
              "de": "warnen"
            }
          ],
          "words": [
            "core.b2u2.claim",
            "core.b2u2.deny",
            "core.b2u2.admit",
            "core.b2u2.warn"
          ]
        },
        {
          "id": "e11",
          "type": "intro",
          "word": "core.b2u2.according-to"
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "According to the police, nobody was hurt.",
          "translation": "Laut der Polizei wurde niemand verletzt.",
          "words": [
            "core.b2u2.according-to"
          ]
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "en-de",
          "prompt": "According to the report, prices will rise.",
          "answer": "Laut dem Bericht werden die Preise steigen.",
          "accepted": [
            "Laut dem Bericht steigen die Preise."
          ],
          "distractors": [
            "fallen",
            "Krise",
            "Schlagzeile"
          ],
          "words": [
            "core.b2u2.according-to",
            "core.b2u2.report"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Pressekonferenz",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "The mayor denied the rumors yesterday.",
              "de": "Der Bürgermeister hat die Gerüchte gestern bestritten."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Did he admit anything?",
              "de": "Hat er irgendetwas zugegeben?"
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "No. He said the reports were wrong.",
              "de": "Nein. Er sagte, die Berichte seien falsch."
            }
          ],
          "question": "Was hat der Bürgermeister getan?",
          "choices": [
            {
              "text": "Er hat die Gerüchte bestritten.",
              "correct": true
            },
            {
              "text": "Er hat zugegeben, dass die Gerüchte stimmen."
            },
            {
              "text": "Er hat die Berichte bestätigt."
            }
          ],
          "words": [
            "core.b2u2.deny",
            "core.b2u2.admit"
          ]
        }
      ]
    },
    {
      "id": "core.b2u2.l5",
      "title": "Wiederholung",
      "description": "Alle Wörter der Unit gemischt, ohne neue Wörter",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Welches Wort bedeutet „die Krise“?",
          "choices": [
            {
              "text": "crisis",
              "correct": true
            },
            {
              "text": "surge"
            },
            {
              "text": "claim"
            }
          ],
          "words": [
            "core.b2u2.crisis"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "publish",
              "de": "veröffentlichen"
            },
            {
              "en": "arrest",
              "de": "festnehmen"
            },
            {
              "en": "deny",
              "de": "bestreiten"
            },
            {
              "en": "surge",
              "de": "der starke Anstieg"
            },
            {
              "en": "summarize",
              "de": "zusammenfassen"
            }
          ],
          "words": [
            "core.b2u2.publish",
            "core.b2u2.arrest",
            "core.b2u2.deny",
            "core.b2u2.surge",
            "core.b2u2.summarize"
          ]
        },
        {
          "id": "e03",
          "type": "listen-choice",
          "audio": "The company will announce the results on Friday.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Das Unternehmen kündigt die Ergebnisse für Freitag an.",
              "correct": true
            },
            {
              "text": "Das Unternehmen hat die Ergebnisse am Freitag verschoben."
            },
            {
              "text": "Die Ergebnisse wurden am Freitag gestohlen."
            }
          ],
          "words": [
            "core.b2u2.announce"
          ]
        },
        {
          "id": "e04",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Der Verdächtige wurde festgenommen.",
          "answer": "The suspect was arrested.",
          "distractors": [
            "is",
            "admitted",
            "has"
          ],
          "words": [
            "core.b2u2.suspect",
            "core.b2u2.arrest"
          ]
        },
        {
          "id": "e05",
          "type": "fill",
          "sentence": "Yesterday the company ___ that the report was wrong.",
          "choices": [
            {
              "text": "denied",
              "correct": true
            },
            {
              "text": "deny"
            },
            {
              "text": "denies"
            }
          ],
          "translation": "Gestern bestritt das Unternehmen, dass der Bericht falsch war.",
          "explanation": "Mit „yesterday“ steht die Vergangenheit: denied.",
          "words": [
            "core.b2u2.deny"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "The main ___ of the article is clear.",
          "accepted": [
            "point"
          ],
          "hint": "Kernaussage (zweites Wort)",
          "translation": "Die Kernaussage des Artikels ist klar.",
          "words": [
            "core.b2u2.main-point"
          ]
        },
        {
          "id": "e07",
          "type": "listen-type",
          "audio": "Can you summarize the news in one sentence?",
          "translation": "Kannst du die Nachrichten in einem Satz zusammenfassen?",
          "words": [
            "core.b2u2.summarize"
          ]
        },
        {
          "id": "e08",
          "type": "choice",
          "prompt": "Was bedeutet „a sales surge“?",
          "question": "a sales surge",
          "questionLang": "en",
          "choices": [
            {
              "text": "ein starker Anstieg der Verkäufe",
              "correct": true
            },
            {
              "text": "ein Rückgang der Verkäufe"
            },
            {
              "text": "eine Verkaufsveranstaltung"
            }
          ],
          "words": [
            "core.b2u2.surge"
          ]
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "en-de",
          "prompt": "According to the police, two people were rescued.",
          "answer": "Laut der Polizei wurden zwei Personen gerettet.",
          "accepted": [
            "Zwei Personen wurden laut der Polizei gerettet."
          ],
          "distractors": [
            "verboten",
            "Krise",
            "festgenommen"
          ],
          "words": [
            "core.b2u2.according-to",
            "core.b2u2.rescue"
          ]
        },
        {
          "id": "e10",
          "type": "dialogue",
          "title": "Die Nachrichten",
          "lines": [
            {
              "speaker": "a",
              "name": "Tom",
              "en": "Did you read the headline about the flood?",
              "de": "Hast du die Schlagzeile über die Überschwemmung gelesen?"
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "Yes. The families were evacuated.",
              "de": "Ja. Die Familien wurden evakuiert."
            },
            {
              "speaker": "a",
              "name": "Tom",
              "en": "Right. And the mayor denied the claims.",
              "de": "Stimmt. Und der Bürgermeister hat die Behauptungen bestritten."
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "I think the main point is that the city needs help.",
              "de": "Ich finde, die Kernaussage ist, dass die Stadt Hilfe braucht."
            }
          ],
          "question": "Was ist laut Lisa die Kernaussage?",
          "choices": [
            {
              "text": "Die Stadt braucht Hilfe.",
              "correct": true
            },
            {
              "text": "Der Bürgermeister wurde festgenommen."
            },
            {
              "text": "Der Bericht wurde verboten."
            }
          ],
          "words": [
            "core.b2u2.headline",
            "core.b2u2.evacuate",
            "core.b2u2.deny",
            "core.b2u2.claim",
            "core.b2u2.main-point"
          ]
        },
        {
          "id": "e11",
          "type": "speak",
          "text": "The authorities warned that the storm would arrive tonight.",
          "translation": "Die Behörden warnten, dass der Sturm heute Nacht eintreffen würde.",
          "words": [
            "core.b2u2.warn"
          ]
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "The climbers were ___ by helicopter.",
          "accepted": [
            "rescued"
          ],
          "hint": "retten",
          "translation": "Die Bergsteiger wurden per Hubschrauber gerettet.",
          "words": [
            "core.b2u2.rescue"
          ]
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Das Verbot wurde am Montag angekündigt.",
          "answer": "The ban was announced on Monday.",
          "accepted": [
            "On Monday, the ban was announced."
          ],
          "distractors": [
            "publish",
            "banned",
            "deny"
          ],
          "words": [
            "core.b2u2.ban",
            "core.b2u2.announce"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.b2u2.publish",
    "en": "publish",
    "de": "veröffentlichen",
    "pos": "verb",
    "example": "The results are published every Monday.",
    "exampleDe": "Die Ergebnisse werden jeden Montag veröffentlicht.",
    "altDe": [
      "publizieren",
      "herausgeben"
    ],
    "note": "Passiv: is/are/was + published."
  },
  {
    "id": "core.b2u2.announce",
    "en": "announce",
    "de": "ankündigen",
    "pos": "verb",
    "example": "The company announced new plans on Monday.",
    "exampleDe": "Das Unternehmen kündigte am Montag neue Pläne an.",
    "altDe": [
      "bekanntgeben",
      "verkünden"
    ],
    "note": "Das Nomen dazu heißt an announcement (Ankündigung)."
  },
  {
    "id": "core.b2u2.report",
    "en": "report",
    "de": "der Bericht",
    "emoji": "📊",
    "pos": "noun",
    "example": "The report was sent to the manager.",
    "exampleDe": "Der Bericht wurde an den Chef geschickt.",
    "altEn": [
      "reports"
    ],
    "altDe": [
      "Bericht",
      "Meldung"
    ],
    "note": "Als Verb heißt to report: berichten, melden."
  },
  {
    "id": "core.b2u2.arrest",
    "en": "arrest",
    "de": "festnehmen",
    "emoji": "🚔",
    "pos": "verb",
    "example": "The man was arrested last night.",
    "exampleDe": "Der Mann wurde letzte Nacht festgenommen.",
    "altDe": [
      "verhaften"
    ],
    "note": "Passiv Vergangenheit: was/were arrested. Als Nomen: an arrest (Festnahme)."
  },
  {
    "id": "core.b2u2.suspect",
    "en": "suspect",
    "de": "der Verdächtige / die Verdächtige",
    "emoji": "🕵️",
    "pos": "noun",
    "example": "The suspect was arrested in the evening.",
    "exampleDe": "Der Verdächtige wurde am Abend festgenommen.",
    "altEn": [
      "suspects"
    ],
    "altDe": [
      "Verdächtiger",
      "Verdächtige",
      "Tatverdächtiger"
    ],
    "note": "Betonung: SUS-pect (Nomen), sus-PECT (Verb: verdächtigen)."
  },
  {
    "id": "core.b2u2.evacuate",
    "en": "evacuate",
    "de": "evakuieren",
    "pos": "verb",
    "example": "The families were evacuated from the flood zone.",
    "exampleDe": "Die Familien wurden aus dem Überschwemmungsgebiet evakuiert.",
    "altDe": [
      "räumen"
    ],
    "note": "Nicht mit to vacate verwechseln (eine Wohnung räumen, verlassen)."
  },
  {
    "id": "core.b2u2.rescue",
    "en": "rescue",
    "de": "retten",
    "emoji": "🚑",
    "pos": "verb",
    "example": "Two people were rescued from the river.",
    "exampleDe": "Zwei Menschen wurden aus dem Fluss gerettet.",
    "altEn": [
      "rescues",
      "rescued"
    ],
    "altDe": [
      "Rettung"
    ],
    "note": "Als Nomen: the rescue = die Rettung."
  },
  {
    "id": "core.b2u2.ban",
    "en": "ban",
    "de": "verbieten",
    "emoji": "🚫",
    "pos": "verb",
    "example": "Smoking is banned in the building.",
    "exampleDe": "Rauchen ist im Gebäude verboten.",
    "altEn": [
      "bans",
      "banned"
    ],
    "altDe": [
      "untersagen"
    ],
    "note": "Im Passiv oft is/was banned. Als Nomen: a ban (ein Verbot)."
  },
  {
    "id": "core.b2u2.headline",
    "en": "headline",
    "de": "die Schlagzeile",
    "emoji": "📰",
    "pos": "noun",
    "example": "The headline was short and catchy.",
    "exampleDe": "Die Schlagzeile war kurz und einprägsam.",
    "altEn": [
      "headlines"
    ],
    "altDe": [
      "Überschrift",
      "Schlagzeilen"
    ],
    "note": "Schlagzeilen lassen oft Artikel und Hilfsverben weg: „Town votes on new park.“"
  },
  {
    "id": "core.b2u2.crisis",
    "en": "crisis",
    "de": "die Krise",
    "emoji": "🆘",
    "pos": "noun",
    "example": "The country is in a deep crisis.",
    "exampleDe": "Das Land steckt in einer tiefen Krise.",
    "altEn": [
      "crises"
    ],
    "altDe": [
      "Krisen"
    ],
    "note": "Plural: crises (ausgesprochen KRY-seez)."
  },
  {
    "id": "core.b2u2.surge",
    "en": "surge",
    "de": "der starke Anstieg",
    "emoji": "📈",
    "pos": "noun",
    "example": "There was a surge in energy prices.",
    "exampleDe": "Es gab einen starken Anstieg der Energiepreise.",
    "altDe": [
      "Anstieg",
      "starker Anstieg"
    ],
    "note": "Als Verb heißt to surge: stark ansteigen."
  },
  {
    "id": "core.b2u2.summarize",
    "en": "summarize",
    "de": "zusammenfassen",
    "pos": "verb",
    "example": "Can you summarize the article in two sentences?",
    "exampleDe": "Kannst du den Artikel in zwei Sätzen zusammenfassen?",
    "altEn": [
      "summarise",
      "summarizes",
      "summarized"
    ],
    "altDe": [
      "resümieren"
    ],
    "note": "Das Nomen dazu heißt a summary (die Zusammenfassung)."
  },
  {
    "id": "core.b2u2.main-point",
    "en": "main point",
    "de": "die Kernaussage",
    "pos": "phrase",
    "example": "What is the main point of the article?",
    "exampleDe": "Was ist die Kernaussage des Artikels?",
    "altEn": [
      "the main point",
      "main points"
    ],
    "altDe": [
      "Hauptaussage",
      "Hauptpunkt"
    ],
    "note": "Gehört zum Zusammenfassen: the main point = das Wichtigste."
  },
  {
    "id": "core.b2u2.claim",
    "en": "claim",
    "de": "behaupten",
    "pos": "verb",
    "example": "He claimed he was tired.",
    "exampleDe": "Er behauptete, er sei müde.",
    "altEn": [
      "claims",
      "claimed"
    ],
    "altDe": [
      "Behauptung"
    ],
    "note": "Auch das Nomen: a claim = eine Behauptung oder ein Anspruch."
  },
  {
    "id": "core.b2u2.deny",
    "en": "deny",
    "de": "bestreiten",
    "pos": "verb",
    "example": "The mayor denied the rumors.",
    "exampleDe": "Der Bürgermeister bestritt die Gerüchte.",
    "altEn": [
      "denies",
      "denied"
    ],
    "altDe": [
      "abstreiten",
      "leugnen"
    ],
    "note": "deny + -ing: He denied taking the money."
  },
  {
    "id": "core.b2u2.admit",
    "en": "admit",
    "de": "zugeben",
    "pos": "verb",
    "example": "She admitted that she had lost the key.",
    "exampleDe": "Sie gab zu, dass sie den Schlüssel verloren hatte.",
    "altEn": [
      "admits",
      "admitted"
    ],
    "altDe": [
      "eingestehen"
    ],
    "note": "admit + that-Satz oder admit + -ing: She admitted losing the key."
  },
  {
    "id": "core.b2u2.warn",
    "en": "warn",
    "de": "warnen",
    "pos": "verb",
    "example": "She warned us that the bus was late.",
    "exampleDe": "Sie warnte uns, dass der Bus Verspätung hatte.",
    "altEn": [
      "warns",
      "warned"
    ],
    "note": "Mit Person: warn someone that … (jemanden warnen, dass …)."
  },
  {
    "id": "core.b2u2.according-to",
    "en": "according to",
    "de": "laut",
    "pos": "phrase",
    "example": "According to the police, nobody was hurt.",
    "exampleDe": "Laut der Polizei wurde niemand verletzt.",
    "altDe": [
      "gemäß",
      "zufolge"
    ],
    "note": "Typisch in Nachrichten, um die Quelle zu nennen."
  }
]
