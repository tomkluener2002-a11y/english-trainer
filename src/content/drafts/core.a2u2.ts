// Generiert von scripts/gen-drafts.ts aus content-drafts/core.a2u2.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.a2u2",
  "title": "Was ist passiert?",
  "description": "Über die Vergangenheit sprechen mit dem Past Simple.",
  "cefr": "A2",
  "color": "red",
  "icon": "📖",
  "topics": [
    "Past Simple regelmäßig",
    "Unregelmäßige Verben",
    "Am Wochenende",
    "Fragen in der Vergangenheit"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Regelmäßige Verben: -ed",
      "text": "Die meisten Verben bekommen im Past Simple die Endung -ed, und zwar bei allen Personen gleich. Endet das Verb auf -y nach einem Konsonanten, wird daraus -ied (study → studied). Endet es auf -e, kommt nur ein -d dazu (live → lived).",
      "examples": [
        {
          "en": "I walked to the park.",
          "de": "Ich ging zu Fuß zum Park."
        },
        {
          "en": "She studied English.",
          "de": "Sie lernte Englisch."
        }
      ]
    },
    {
      "title": "Unregelmäßige Verben lernst du auswendig",
      "text": "Viele häufige Verben haben eine eigene Vergangenheitsform. Sie ist für alle Personen gleich: I went, you went, she went. Sag also nicht „goed“ oder „buyed“. Typisch sind go → went, see → saw, have → had und buy → bought.",
      "examples": [
        {
          "en": "We went home.",
          "de": "Wir gingen nach Hause."
        },
        {
          "en": "He bought a bike.",
          "de": "Er kaufte ein Fahrrad."
        }
      ]
    },
    {
      "title": "Fragen und Verneinung mit did",
      "text": "Für Fragen und Verneinungen in der Vergangenheit brauchst du did bzw. didn't. Danach steht immer die Grundform des Verbs, ohne -ed und ohne Vergangenheitsform. Richtig ist Did you go?, nicht Did you went?",
      "examples": [
        {
          "en": "Did you sleep well?",
          "de": "Hast du gut geschlafen?"
        },
        {
          "en": "I didn't go to work.",
          "de": "Ich ging nicht zur Arbeit."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.a2u2.l1",
      "title": "Regelmäßige Verben",
      "description": "Die Vergangenheit mit -ed bilden",
      "introduces": [
        "core.a2u2.yesterday",
        "core.a2u2.walked",
        "core.a2u2.played",
        "core.a2u2.cooked",
        "core.a2u2.watched",
        "core.a2u2.studied"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u2.yesterday"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u2.walked"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I walked to school yesterday.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Ich ging gestern zu Fuß zur Schule.",
              "correct": true
            },
            {
              "text": "Ich gehe morgen zur Schule."
            },
            {
              "text": "Ich fahre gestern mit dem Bus zur Schule."
            }
          ],
          "explanation": "Regelmäßige Verben bekommen im Past Simple die Endung -ed: walk → walked.",
          "words": [
            "core.a2u2.walked",
            "core.a2u2.yesterday"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u2.played"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u2.cooked"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "walked",
              "de": "ging zu Fuß"
            },
            {
              "en": "played",
              "de": "spielte"
            },
            {
              "en": "cooked",
              "de": "kochte"
            },
            {
              "en": "yesterday",
              "de": "gestern"
            }
          ],
          "words": [
            "core.a2u2.walked",
            "core.a2u2.played",
            "core.a2u2.cooked",
            "core.a2u2.yesterday"
          ]
        },
        {
          "id": "e07",
          "type": "translate",
          "direction": "en-de",
          "prompt": "My mother cooked dinner yesterday.",
          "answer": "Meine Mutter kochte gestern das Abendessen.",
          "accepted": [
            "Gestern kochte meine Mutter das Abendessen."
          ],
          "distractors": [
            "Vater",
            "morgen",
            "kochen"
          ],
          "words": [
            "core.a2u2.cooked",
            "core.a2u2.yesterday",
            "core.mother"
          ]
        },
        {
          "id": "e08",
          "type": "listen-choice",
          "audio": "We played football yesterday.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wir spielten gestern Fußball.",
              "correct": true
            },
            {
              "text": "Wir spielen morgen Fußball."
            },
            {
              "text": "Wir spielten gestern Tennis."
            }
          ],
          "words": [
            "core.a2u2.played",
            "core.a2u2.yesterday"
          ]
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "Yesterday I ___ to the park.",
          "accepted": [
            "walked"
          ],
          "hint": "zu Fuß gehen",
          "translation": "Gestern ging ich zu Fuß zum Park.",
          "words": [
            "core.a2u2.walked",
            "core.park"
          ]
        },
        {
          "id": "e10",
          "type": "intro",
          "word": "core.a2u2.watched"
        },
        {
          "id": "e11",
          "type": "intro",
          "word": "core.a2u2.studied"
        },
        {
          "id": "e12",
          "type": "fill",
          "sentence": "She ___ English at school.",
          "choices": [
            {
              "text": "studied",
              "correct": true
            },
            {
              "text": "study"
            },
            {
              "text": "studying"
            }
          ],
          "translation": "Sie lernte Englisch in der Schule.",
          "explanation": "Aus study wird studied: y nach Konsonant wird zu -ied.",
          "words": [
            "core.a2u2.studied"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "I watched a film last night.",
          "accepted": [
            "I watched a movie last night."
          ],
          "translation": "Ich sah gestern Abend einen Film.",
          "words": [
            "core.a2u2.watched"
          ]
        },
        {
          "id": "e14",
          "type": "speak",
          "text": "I studied English and I watched a film.",
          "translation": "Ich lernte Englisch und sah einen Film.",
          "words": [
            "core.a2u2.studied",
            "core.a2u2.watched"
          ]
        }
      ]
    },
    {
      "id": "core.a2u2.l2",
      "title": "Unregelmäßige Verben",
      "description": "Die wichtigsten unregelmäßigen Verben",
      "introduces": [
        "core.a2u2.went",
        "core.a2u2.saw",
        "core.a2u2.ate",
        "core.a2u2.took",
        "core.a2u2.had",
        "core.a2u2.bought"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u2.went"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u2.saw"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Wort ist die Vergangenheit von „go“ (gehen)?",
          "choices": [
            {
              "text": "went",
              "correct": true
            },
            {
              "text": "goes"
            },
            {
              "text": "gone"
            }
          ],
          "explanation": "Die Vergangenheit von go ist went. gone brauchst du nur mit have, z.B. have gone.",
          "words": [
            "core.a2u2.went"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u2.ate"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u2.took"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "went",
              "de": "ging"
            },
            {
              "en": "saw",
              "de": "sah"
            },
            {
              "en": "ate",
              "de": "aß"
            },
            {
              "en": "took",
              "de": "nahm"
            }
          ],
          "words": [
            "core.a2u2.went",
            "core.a2u2.saw",
            "core.a2u2.ate",
            "core.a2u2.took"
          ]
        },
        {
          "id": "e07",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich aß gestern einen Apfel.",
          "answer": "I ate an apple yesterday.",
          "accepted": [
            "Yesterday I ate an apple."
          ],
          "distractors": [
            "eat",
            "today",
            "bread"
          ],
          "words": [
            "core.a2u2.ate",
            "core.a2u2.yesterday"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u2.had"
        },
        {
          "id": "e09",
          "type": "listen-choice",
          "audio": "We had pasta for dinner.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wir hatten Pasta zum Abendessen.",
              "correct": true
            },
            {
              "text": "Wir kochten Pasta zum Abendessen."
            },
            {
              "text": "Wir hatten Suppe zum Mittagessen."
            }
          ],
          "words": [
            "core.a2u2.had"
          ]
        },
        {
          "id": "e10",
          "type": "intro",
          "word": "core.a2u2.bought"
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Yesterday she ___ a new bag.",
          "accepted": [
            "bought"
          ],
          "hint": "kaufte",
          "translation": "Gestern kaufte sie eine neue Tasche.",
          "words": [
            "core.a2u2.bought"
          ]
        },
        {
          "id": "e12",
          "type": "choice",
          "prompt": "Wie sagt man „Ich machte ein Foto.“ auf Englisch?",
          "choices": [
            {
              "text": "I took a photo.",
              "correct": true
            },
            {
              "text": "I made a photo."
            },
            {
              "text": "I taken a photo."
            }
          ],
          "explanation": "take → took. „Ein Foto machen“ heißt auf Englisch „take a photo“.",
          "words": [
            "core.a2u2.took"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Am Markt",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Hi Mia! I went to the market yesterday.",
              "de": "Hi Mia! Ich ging gestern auf den Markt."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Nice! Was it good?",
              "de": "Schön! War es gut?"
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Yes! I saw a nice bag and I bought it.",
              "de": "Ja! Ich sah eine schöne Tasche und kaufte sie."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Cool! I had lunch at the station.",
              "de": "Cool! Ich hatte Mittagessen am Bahnhof."
            }
          ],
          "question": "Was hat Ben gekauft?",
          "choices": [
            {
              "text": "Eine Tasche",
              "correct": true
            },
            {
              "text": "Ein Buch"
            },
            {
              "text": "Einen Apfel"
            }
          ],
          "words": [
            "core.a2u2.went",
            "core.a2u2.saw",
            "core.a2u2.bought",
            "core.a2u2.had",
            "core.station"
          ]
        }
      ]
    },
    {
      "id": "core.a2u2.l3",
      "title": "Am Wochenende",
      "description": "Was hast du am Wochenende gemacht?",
      "introduces": [
        "core.a2u2.weekend",
        "core.a2u2.last",
        "core.a2u2.cinema",
        "core.a2u2.party",
        "core.a2u2.shopping",
        "core.a2u2.tired"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u2.weekend"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u2.last"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "last weekend",
          "questionLang": "en",
          "choices": [
            {
              "text": "letztes Wochenende",
              "correct": true
            },
            {
              "text": "nächstes Wochenende"
            },
            {
              "text": "jedes Wochenende"
            }
          ],
          "explanation": "Nach last steht keine Präposition: last weekend, nicht on last weekend.",
          "words": [
            "core.a2u2.last",
            "core.a2u2.weekend"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u2.cinema"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u2.party"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "weekend",
              "de": "Wochenende"
            },
            {
              "en": "cinema",
              "de": "Kino"
            },
            {
              "en": "party",
              "de": "Feier"
            },
            {
              "en": "last",
              "de": "letzte"
            }
          ],
          "words": [
            "core.a2u2.weekend",
            "core.a2u2.cinema",
            "core.a2u2.party",
            "core.a2u2.last"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u2.shopping"
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u2.tired"
        },
        {
          "id": "e09",
          "type": "listen-choice",
          "audio": "I was tired after the party.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich war nach der Party müde.",
              "correct": true
            },
            {
              "text": "Ich war vor der Party müde."
            },
            {
              "text": "Ich war nach der Party fröhlich."
            }
          ],
          "words": [
            "core.a2u2.tired",
            "core.a2u2.party"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "We went shopping on Saturday.",
          "answer": "Wir gingen am Samstag einkaufen.",
          "accepted": [
            "Am Samstag gingen wir einkaufen."
          ],
          "distractors": [
            "Kino",
            "Feier",
            "letzten"
          ],
          "words": [
            "core.a2u2.shopping",
            "core.a2u2.went"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Last Saturday we went to the ___.",
          "accepted": [
            "cinema"
          ],
          "hint": "Kino",
          "translation": "Letzten Samstag gingen wir ins Kino.",
          "words": [
            "core.a2u2.cinema"
          ]
        },
        {
          "id": "e12",
          "type": "fill",
          "sentence": "Ben invited us to his ___ on Friday.",
          "choices": [
            {
              "text": "party",
              "correct": true
            },
            {
              "text": "shopping"
            },
            {
              "text": "tired"
            }
          ],
          "translation": "Ben hat uns für Freitag zu seiner Party eingeladen.",
          "explanation": "party heißt hier Feier. Die politische Partei heißt political party.",
          "words": [
            "core.a2u2.party"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "Do you like shopping?",
          "translation": "Magst du einkaufen?",
          "words": [
            "core.a2u2.shopping"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Am Telefon",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Hi Mia! How was your weekend?",
              "de": "Hi Mia! Wie war dein Wochenende?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Great! Last Saturday I went to the cinema.",
              "de": "Super! Letzten Samstag ging ich ins Kino."
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Nice! And on Sunday?",
              "de": "Schön! Und am Sonntag?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "On Sunday I was tired. We had a party at home.",
              "de": "Am Sonntag war ich müde. Wir hatten zu Hause eine Party."
            }
          ],
          "question": "Was hat Mia am Samstag gemacht?",
          "choices": [
            {
              "text": "Sie ist ins Kino gegangen.",
              "correct": true
            },
            {
              "text": "Sie hat eingekauft."
            },
            {
              "text": "Sie war zu Hause."
            }
          ],
          "words": [
            "core.a2u2.weekend",
            "core.a2u2.last",
            "core.a2u2.cinema",
            "core.a2u2.tired",
            "core.a2u2.party"
          ]
        }
      ]
    },
    {
      "id": "core.a2u2.l4",
      "title": "Fragen & Verneinung",
      "description": "Fragen und Verneinung mit did",
      "introduces": [
        "core.a2u2.did",
        "core.a2u2.didnt",
        "core.a2u2.where",
        "core.a2u2.slept",
        "core.a2u2.happened"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u2.did"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u2.didnt"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welche Frage heißt „Bist du in den Park gegangen?“",
          "choices": [
            {
              "text": "Did you go to the park?",
              "correct": true
            },
            {
              "text": "Did you went to the park?"
            },
            {
              "text": "Did you going to the park?"
            }
          ],
          "explanation": "Nach did steht immer die Grundform: did go, nicht went oder going.",
          "words": [
            "core.a2u2.did",
            "core.park"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u2.where"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u2.slept"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "where",
              "de": "wo / wohin"
            },
            {
              "en": "slept",
              "de": "schlief"
            },
            {
              "en": "did",
              "de": "Hilfsverb für Fragen"
            },
            {
              "en": "didn't",
              "de": "nicht (verneint)"
            }
          ],
          "words": [
            "core.a2u2.where",
            "core.a2u2.slept",
            "core.a2u2.did",
            "core.a2u2.didnt"
          ]
        },
        {
          "id": "e07",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wohin bist du gegangen?",
          "answer": "Where did you go?",
          "distractors": [
            "went",
            "is",
            "slept"
          ],
          "words": [
            "core.a2u2.where",
            "core.a2u2.did"
          ]
        },
        {
          "id": "e08",
          "type": "listen-choice",
          "audio": "Did you sleep well?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Hast du gut geschlafen?",
              "correct": true
            },
            {
              "text": "Hast du gut gegessen?"
            },
            {
              "text": "Hast du gut gespielt?"
            }
          ],
          "words": [
            "core.a2u2.did",
            "core.a2u2.slept"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.a2u2.happened"
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "What happened?",
          "answer": "Was ist passiert?",
          "distractors": [
            "wer",
            "warum",
            "gestern"
          ],
          "words": [
            "core.a2u2.happened"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Last night I ___ very well.",
          "accepted": [
            "slept"
          ],
          "hint": "schlafen",
          "translation": "Letzte Nacht schlief ich sehr gut.",
          "words": [
            "core.a2u2.slept"
          ]
        },
        {
          "id": "e12",
          "type": "fill",
          "sentence": "What ___ yesterday?",
          "choices": [
            {
              "text": "happened",
              "correct": true
            },
            {
              "text": "happen"
            },
            {
              "text": "happens"
            }
          ],
          "translation": "Was ist gestern passiert?",
          "explanation": "Nach what steht die Vergangenheit: happened, nicht happen.",
          "words": [
            "core.a2u2.happened"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "Where did you go last night?",
          "translation": "Wo warst du letzte Nacht?",
          "words": [
            "core.a2u2.where",
            "core.a2u2.did"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Am Morgen",
          "lines": [
            {
              "speaker": "a",
              "name": "Mia",
              "en": "Hi Sam! What happened? You look tired.",
              "de": "Hi Sam! Was ist passiert? Du siehst müde aus."
            },
            {
              "speaker": "b",
              "name": "Sam",
              "en": "I didn't sleep well last night.",
              "de": "Ich schlief letzte Nacht nicht gut."
            },
            {
              "speaker": "a",
              "name": "Mia",
              "en": "Oh no! Did you go out?",
              "de": "Oh nein! Bist du ausgegangen?"
            },
            {
              "speaker": "b",
              "name": "Sam",
              "en": "No, I stayed at home.",
              "de": "Nein, ich bin zu Hause geblieben."
            }
          ],
          "question": "Warum ist Sam müde?",
          "choices": [
            {
              "text": "Er hat schlecht geschlafen.",
              "correct": true
            },
            {
              "text": "Er hat zu viel gegessen."
            },
            {
              "text": "Er war im Park."
            }
          ],
          "words": [
            "core.a2u2.happened",
            "core.a2u2.didnt",
            "core.a2u2.did",
            "core.a2u2.slept",
            "core.a2u2.tired"
          ]
        }
      ]
    },
    {
      "id": "core.a2u2.l5",
      "title": "Wiederholung",
      "description": "Alles aus Was ist passiert? – regelmäßig und unregelmäßig",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Welches Wort ist die Vergangenheit von „sehen“?",
          "choices": [
            {
              "text": "saw",
              "correct": true
            },
            {
              "text": "seen"
            },
            {
              "text": "see"
            }
          ],
          "explanation": "Die Vergangenheit von see ist saw. seen brauchst du nur mit have (have seen).",
          "words": [
            "core.a2u2.saw"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "cooked",
              "de": "kochte"
            },
            {
              "en": "studied",
              "de": "lernte"
            },
            {
              "en": "bought",
              "de": "kaufte"
            },
            {
              "en": "slept",
              "de": "schlief"
            },
            {
              "en": "happened",
              "de": "passierte"
            }
          ],
          "words": [
            "core.a2u2.cooked",
            "core.a2u2.studied",
            "core.a2u2.bought",
            "core.a2u2.slept",
            "core.a2u2.happened"
          ]
        },
        {
          "id": "e03",
          "type": "listen-choice",
          "audio": "Last weekend we went to the cinema.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Letztes Wochenende gingen wir ins Kino.",
              "correct": true
            },
            {
              "text": "Nächstes Wochenende gehen wir ins Kino."
            },
            {
              "text": "Letztes Wochenende gingen wir in den Park."
            }
          ],
          "words": [
            "core.a2u2.last",
            "core.a2u2.weekend",
            "core.a2u2.cinema",
            "core.a2u2.went"
          ]
        },
        {
          "id": "e04",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Gestern spielte ich Tennis.",
          "answer": "I played tennis yesterday.",
          "accepted": [
            "Yesterday I played tennis."
          ],
          "distractors": [
            "play",
            "tomorrow",
            "went"
          ],
          "words": [
            "core.a2u2.played",
            "core.a2u2.yesterday"
          ]
        },
        {
          "id": "e05",
          "type": "type",
          "sentence": "My son ___ to school yesterday.",
          "accepted": [
            "went"
          ],
          "hint": "ging",
          "translation": "Mein Sohn ging gestern zur Schule.",
          "words": [
            "core.a2u2.went",
            "core.son"
          ]
        },
        {
          "id": "e06",
          "type": "fill",
          "sentence": "Yesterday we ___ a big breakfast.",
          "choices": [
            {
              "text": "had",
              "correct": true
            },
            {
              "text": "have"
            },
            {
              "text": "has"
            }
          ],
          "translation": "Gestern hatten wir ein großes Frühstück.",
          "explanation": "had ist die Vergangenheit von have.",
          "words": [
            "core.a2u2.had"
          ]
        },
        {
          "id": "e07",
          "type": "listen-type",
          "audio": "She ate an apple and took a photo.",
          "translation": "Sie aß einen Apfel und machte ein Foto.",
          "words": [
            "core.a2u2.ate",
            "core.a2u2.took"
          ]
        },
        {
          "id": "e08",
          "type": "choice",
          "prompt": "Welche Frage ist richtig? („Wo hast du den Film gesehen?“)",
          "choices": [
            {
              "text": "Where did you see the film?",
              "correct": true
            },
            {
              "text": "Where did you saw the film?"
            },
            {
              "text": "Where you did see the film?"
            }
          ],
          "explanation": "Nach did immer die Grundform: see, nicht saw.",
          "words": [
            "core.a2u2.did",
            "core.a2u2.saw",
            "core.a2u2.where"
          ]
        },
        {
          "id": "e09",
          "type": "dialogue",
          "title": "Ein Wochenende",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Priya! Did you have a good weekend?",
              "de": "Hi Priya! Hattest du ein gutes Wochenende?"
            },
            {
              "speaker": "b",
              "name": "Priya",
              "en": "Yes! On Saturday I cooked dinner for my family.",
              "de": "Ja! Am Samstag kochte ich das Abendessen für meine Familie."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Nice! Did you go shopping too?",
              "de": "Schön! Bist du auch einkaufen gegangen?"
            },
            {
              "speaker": "b",
              "name": "Priya",
              "en": "No, I was tired. I slept all day.",
              "de": "Nein, ich war müde. Ich schlief den ganzen Tag."
            }
          ],
          "question": "Was hat Priya am Samstag gemacht?",
          "choices": [
            {
              "text": "Sie hat das Abendessen gekocht.",
              "correct": true
            },
            {
              "text": "Sie ist einkaufen gegangen."
            },
            {
              "text": "Sie ist ins Kino gegangen."
            }
          ],
          "words": [
            "core.a2u2.cooked",
            "core.a2u2.shopping",
            "core.a2u2.tired",
            "core.a2u2.slept",
            "core.a2u2.weekend"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "My brother didn't come to the party.",
          "answer": "Mein Bruder kam nicht zur Party.",
          "distractors": [
            "Schwester",
            "Kino",
            "gingen"
          ],
          "words": [
            "core.a2u2.didnt",
            "core.a2u2.party",
            "core.brother"
          ]
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Mein Vater ging gestern ins Krankenhaus.",
          "answer": "My father went to the hospital yesterday.",
          "accepted": [
            "Yesterday my father went to the hospital."
          ],
          "distractors": [
            "goes",
            "tomorrow",
            "nurse"
          ],
          "words": [
            "core.a2u2.went",
            "core.father",
            "core.hospital",
            "core.a2u2.yesterday"
          ]
        },
        {
          "id": "e12",
          "type": "choice",
          "prompt": "Welcher Satz ist richtig? (Er hat gestern nicht geschlafen.)",
          "choices": [
            {
              "text": "He didn't sleep yesterday.",
              "correct": true
            },
            {
              "text": "He didn't slept yesterday."
            },
            {
              "text": "He not sleep yesterday."
            }
          ],
          "explanation": "Nach didn't steht die Grundform: sleep, nicht slept.",
          "words": [
            "core.a2u2.didnt",
            "core.a2u2.slept"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "Last weekend I walked to the cinema and I watched a film.",
          "translation": "Letztes Wochenende ging ich zu Fuß ins Kino und sah einen Film.",
          "words": [
            "core.a2u2.last",
            "core.a2u2.weekend",
            "core.a2u2.walked",
            "core.a2u2.cinema",
            "core.a2u2.watched"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.a2u2.yesterday",
    "en": "yesterday",
    "de": "gestern",
    "pos": "adv",
    "example": "Yesterday I cooked pasta.",
    "exampleDe": "Gestern kochte ich Nudeln.",
    "note": "Ohne Präposition: „yesterday“, nicht „on yesterday“."
  },
  {
    "id": "core.a2u2.walked",
    "en": "walked",
    "de": "ging zu Fuß",
    "pos": "verb",
    "example": "I walked to the park yesterday.",
    "exampleDe": "Ich ging gestern zu Fuß zum Park.",
    "altDe": [
      "spazierte"
    ],
    "note": "Grundform: walk. Regelmäßig: + -ed."
  },
  {
    "id": "core.a2u2.played",
    "en": "played",
    "de": "spielte",
    "pos": "verb",
    "example": "We played football yesterday.",
    "exampleDe": "Wir spielten gestern Fußball.",
    "note": "Grundform: play (spielen). Regelmäßig: + -ed."
  },
  {
    "id": "core.a2u2.cooked",
    "en": "cooked",
    "de": "kochte",
    "pos": "verb",
    "example": "My mother cooked dinner yesterday.",
    "exampleDe": "Meine Mutter kochte gestern das Abendessen.",
    "note": "Grundform: cook (kochen). Regelmäßig: + -ed."
  },
  {
    "id": "core.a2u2.watched",
    "en": "watched",
    "de": "sah (fern) / schaute an",
    "pos": "verb",
    "example": "I watched a film last night.",
    "exampleDe": "Ich sah gestern Abend einen Film.",
    "note": "Grundform: watch. Bei Filmen und Serien: „watch a film“."
  },
  {
    "id": "core.a2u2.studied",
    "en": "studied",
    "de": "lernte / studierte",
    "pos": "verb",
    "example": "She studied English at school.",
    "exampleDe": "Sie lernte Englisch in der Schule.",
    "note": "Aus study wird studied: y nach Konsonant wird zu -ied."
  },
  {
    "id": "core.a2u2.went",
    "en": "went",
    "de": "ging",
    "pos": "verb",
    "example": "We went to the cinema.",
    "exampleDe": "Wir gingen ins Kino.",
    "altDe": [
      "fuhr"
    ],
    "note": "Grundform: go (gehen). Unregelmäßig: nicht „goed“ sagen."
  },
  {
    "id": "core.a2u2.saw",
    "en": "saw",
    "de": "sah",
    "pos": "verb",
    "example": "I saw a nice bag.",
    "exampleDe": "Ich sah eine schöne Tasche.",
    "note": "Grundform: see (sehen). „seen“ brauchst du nur mit have."
  },
  {
    "id": "core.a2u2.had",
    "en": "had",
    "de": "hatte",
    "pos": "verb",
    "example": "We had pasta for dinner.",
    "exampleDe": "Wir hatten Nudeln zum Abendessen.",
    "note": "Grundform: have (haben)."
  },
  {
    "id": "core.a2u2.ate",
    "en": "ate",
    "de": "aß",
    "pos": "verb",
    "example": "I ate an apple after school.",
    "exampleDe": "Ich aß nach der Schule einen Apfel.",
    "note": "Grundform: eat (essen)."
  },
  {
    "id": "core.a2u2.bought",
    "en": "bought",
    "de": "kaufte",
    "pos": "verb",
    "example": "Ben bought a new bike.",
    "exampleDe": "Ben kaufte ein neues Fahrrad.",
    "note": "Grundform: buy (kaufen). Nicht „buyed“."
  },
  {
    "id": "core.a2u2.took",
    "en": "took",
    "de": "nahm / machte (ein Foto)",
    "pos": "verb",
    "example": "I took a photo of the park.",
    "exampleDe": "Ich machte ein Foto vom Park.",
    "note": "Grundform: take. „Ein Foto machen“ heißt auf Englisch „take a photo“, nicht „make a photo“."
  },
  {
    "id": "core.a2u2.weekend",
    "en": "weekend",
    "de": "das Wochenende",
    "pos": "noun",
    "example": "I was tired at the weekend.",
    "exampleDe": "Am Wochenende war ich müde.",
    "altEn": [
      "the weekend"
    ],
    "altDe": [
      "Wochenende"
    ],
    "note": "Britisch: „at the weekend“. Mit „last“ keine Präposition: „last weekend“."
  },
  {
    "id": "core.a2u2.last",
    "en": "last",
    "de": "letzte / letzter / letztes",
    "pos": "adj",
    "example": "Last weekend we went to the cinema.",
    "exampleDe": "Letztes Wochenende gingen wir ins Kino.",
    "altDe": [
      "letzte",
      "letzter",
      "letztes"
    ],
    "note": "Vor „last“ keine Präposition: „last weekend“, nicht „on last weekend“."
  },
  {
    "id": "core.a2u2.cinema",
    "en": "cinema",
    "de": "das Kino",
    "emoji": "🎬",
    "pos": "noun",
    "example": "We went to the cinema on Friday.",
    "exampleDe": "Am Freitag gingen wir ins Kino.",
    "altEn": [
      "the cinema",
      "movie theater"
    ],
    "altDe": [
      "Kino"
    ],
    "note": "Wohin: „to the cinema“ (ins Kino). Wo: „at the cinema“ (im Kino)."
  },
  {
    "id": "core.a2u2.party",
    "en": "party",
    "de": "die Party / Feier",
    "emoji": "🥳",
    "pos": "noun",
    "example": "Ben invited us to his party.",
    "exampleDe": "Ben hat uns zu seiner Party eingeladen.",
    "altDe": [
      "Party",
      "Feier"
    ],
    "note": "Achtung: die Partei heißt „political party“."
  },
  {
    "id": "core.a2u2.shopping",
    "en": "shopping",
    "de": "das Einkaufen",
    "emoji": "🛍️",
    "pos": "noun",
    "example": "We went shopping on Saturday.",
    "exampleDe": "Wir gingen am Samstag einkaufen.",
    "altDe": [
      "einkaufen"
    ],
    "note": "„go shopping“ heißt einkaufen gehen."
  },
  {
    "id": "core.a2u2.tired",
    "en": "tired",
    "de": "müde",
    "emoji": "😴",
    "pos": "adj",
    "example": "I was tired after the party.",
    "exampleDe": "Ich war nach der Party müde.",
    "altDe": [
      "erschöpft"
    ],
    "note": "„tired“ heißt müde, nicht traurig („sad“)."
  },
  {
    "id": "core.a2u2.did",
    "en": "did",
    "de": "Hilfsverb für Fragen (Vergangenheit)",
    "pos": "other",
    "example": "Did you have fun?",
    "exampleDe": "Hattest du Spaß?",
    "note": "Nach did steht die Grundform: „Did you go?“, nicht „Did you went?“."
  },
  {
    "id": "core.a2u2.didnt",
    "en": "didn't",
    "de": "nicht (Vergangenheit verneint)",
    "pos": "other",
    "example": "I didn't sleep well.",
    "exampleDe": "Ich schlief nicht gut.",
    "altEn": [
      "did not"
    ],
    "note": "Verneinung mit didn't, danach die Grundform: „I didn't go.“"
  },
  {
    "id": "core.a2u2.where",
    "en": "where",
    "de": "wo / wohin",
    "pos": "other",
    "example": "Where did you go?",
    "exampleDe": "Wohin bist du gegangen?",
    "note": "Fragt nach dem Ort: „Where did you go?“"
  },
  {
    "id": "core.a2u2.slept",
    "en": "slept",
    "de": "schlief",
    "pos": "verb",
    "example": "I slept nine hours last night.",
    "exampleDe": "Ich schlief letzte Nacht neun Stunden.",
    "note": "Grundform: sleep (schlafen). Unregelmäßig."
  },
  {
    "id": "core.a2u2.happened",
    "en": "happened",
    "de": "passierte / geschah",
    "pos": "verb",
    "example": "What happened yesterday?",
    "exampleDe": "Was ist gestern passiert?",
    "note": "Grundform: happen. „What happened?“ heißt „Was ist passiert?“ – der Titel dieser Unit."
  }
]
