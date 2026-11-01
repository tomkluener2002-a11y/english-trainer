// Generiert von scripts/gen-drafts.ts aus content-drafts/core.b1u1.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.b1u1",
  "title": "Erfahrungen",
  "description": "Present Perfect: Was hast du schon erlebt?",
  "cefr": "B1",
  "color": "blue",
  "icon": "🌍",
  "topics": [
    "Present Perfect",
    "ever / never",
    "since / for",
    "Erlebnisse erzählen"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Present Perfect: have / has + Partizip II",
      "text": "Du bildest das Present Perfect mit have (bei I, you, we, they) bzw. has (bei he, she, it) und dem Partizip II. Es passt, wenn du sagst, dass etwas schon einmal passiert ist, aber nicht wann. Den Zeitpunkt nennst du nicht.",
      "examples": [
        {
          "en": "I have been to Rome.",
          "de": "Ich war schon mal in Rom."
        },
        {
          "en": "She has eaten sushi.",
          "de": "Sie hat schon mal Sushi gegessen."
        },
        {
          "en": "We have seen this film.",
          "de": "Wir haben diesen Film schon gesehen."
        }
      ]
    },
    {
      "title": "ever und never",
      "text": "ever steht in Fragen, never in Aussagen und heißt dann „noch nie“. Beide stehen zwischen have und dem Partizip. Bei never brauchst du kein zusätzliches not.",
      "examples": [
        {
          "en": "Have you ever been to Spain?",
          "de": "Warst du schon mal in Spanien?"
        },
        {
          "en": "I have never eaten sushi.",
          "de": "Ich habe noch nie Sushi gegessen."
        }
      ]
    },
    {
      "title": "been oder gone?",
      "text": "have been to heißt: Man war schon mal dort, ist aber wieder da. have gone to heißt: Man ist dorthin gefahren und noch nicht zurück. Deutsche Lernende verwechseln die beiden oft.",
      "examples": [
        {
          "en": "I have been to Rome.",
          "de": "Ich war schon mal in Rom."
        },
        {
          "en": "He has gone to Paris.",
          "de": "Er ist nach Paris gefahren (und noch nicht zurück)."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.b1u1.l1",
      "title": "Schon erlebt?",
      "description": "have + Partizip, ever und never",
      "introduces": [
        "core.b1u1.experience",
        "core.b1u1.been",
        "core.b1u1.ever",
        "core.b1u1.never"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u1.experience"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u1.been"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "experience",
          "questionLang": "en",
          "choices": [
            {
              "text": "die Erfahrung",
              "correct": true
            },
            {
              "text": "die Erlaubnis"
            },
            {
              "text": "das Ergebnis"
            }
          ],
          "words": [
            "core.b1u1.experience"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u1.ever"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u1.never"
        },
        {
          "id": "e06",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich war schon mal in Rom.",
          "answer": "I have been to Rome.",
          "distractors": [
            "go",
            "was",
            "am"
          ],
          "explanation": "have been = war schon einmal dort (Partizip II von be).",
          "words": [
            "core.b1u1.been"
          ]
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "Have you ever been to London?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Warst du schon einmal in London?",
              "correct": true
            },
            {
              "text": "Warst du gestern in London?"
            },
            {
              "text": "Bist du nach London gezogen?"
            }
          ],
          "words": [
            "core.b1u1.ever",
            "core.b1u1.been"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "I have never been to London.",
          "answer": "Ich war noch nie in London.",
          "accepted": [
            "Ich war nie in London."
          ],
          "distractors": [
            "gestern",
            "Paris",
            "hat"
          ],
          "words": [
            "core.b1u1.never",
            "core.b1u1.been"
          ]
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "She has ___ to Berlin.",
          "choices": [
            {
              "text": "been",
              "correct": true
            },
            {
              "text": "was"
            },
            {
              "text": "is"
            }
          ],
          "translation": "Sie war schon mal in Berlin.",
          "explanation": "has been to = war schon mal dort.",
          "words": [
            "core.b1u1.been"
          ]
        },
        {
          "id": "e10",
          "type": "listen-type",
          "audio": "I have been here before.",
          "translation": "Ich war schon mal hier.",
          "accepted": [
            "I've been here before."
          ],
          "words": [
            "core.b1u1.been"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Have you ___ been to Japan?",
          "accepted": [
            "ever"
          ],
          "hint": "jemals / schon einmal",
          "translation": "Warst du schon mal in Japan?",
          "words": [
            "core.b1u1.ever"
          ]
        },
        {
          "id": "e12",
          "type": "dialogue",
          "title": "Im Gespräch",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Have you ever been to Rome?",
              "de": "Warst du schon mal in Rom?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "No, I have never been there. But I have been to Paris.",
              "de": "Nein, ich war noch nie dort. Aber ich war schon in Paris."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Oh, nice! Was it good?",
              "de": "Oh, schön! War es gut?"
            }
          ],
          "question": "Wo war Anna schon?",
          "choices": [
            {
              "text": "In Paris",
              "correct": true
            },
            {
              "text": "In Rom"
            },
            {
              "text": "In Berlin"
            }
          ],
          "words": [
            "core.b1u1.ever",
            "core.b1u1.never",
            "core.b1u1.been"
          ]
        }
      ]
    },
    {
      "id": "core.b1u1.l2",
      "title": "Partizipien",
      "description": "Unregelmäßige Partizipien: seen, eaten, met, gone",
      "introduces": [
        "core.b1u1.seen",
        "core.b1u1.eaten",
        "core.b1u1.met",
        "core.b1u1.gone"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u1.seen"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u1.eaten"
        },
        {
          "id": "e03",
          "type": "match",
          "pairs": [
            {
              "en": "seen",
              "de": "gesehen"
            },
            {
              "en": "eaten",
              "de": "gegessen"
            },
            {
              "en": "been",
              "de": "gewesen"
            },
            {
              "en": "experience",
              "de": "Erfahrung"
            }
          ],
          "words": [
            "core.b1u1.seen",
            "core.b1u1.eaten",
            "core.b1u1.been",
            "core.b1u1.experience"
          ]
        },
        {
          "id": "e04",
          "type": "choice",
          "prompt": "Welche Form ist das Partizip II von „sehen“?",
          "choices": [
            {
              "text": "seen",
              "correct": true
            },
            {
              "text": "saw"
            },
            {
              "text": "see"
            }
          ],
          "words": [
            "core.b1u1.seen"
          ]
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u1.met"
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b1u1.gone"
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "I have ___ your sister at a party.",
          "choices": [
            {
              "text": "met",
              "correct": true
            },
            {
              "text": "meet"
            },
            {
              "text": "saw"
            }
          ],
          "translation": "Ich habe deine Schwester auf einer Party kennengelernt.",
          "explanation": "Partizip II von meet ist met, ohne -ed.",
          "words": [
            "core.b1u1.met"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "He has gone to Paris.",
          "answer": "Er ist nach Paris gefahren.",
          "distractors": [
            "gestern",
            "fährt",
            "hat"
          ],
          "explanation": "has gone = ist dorthin gefahren und noch nicht zurück.",
          "words": [
            "core.b1u1.gone"
          ]
        },
        {
          "id": "e09",
          "type": "listen-type",
          "audio": "We have seen this film before.",
          "translation": "Wir haben diesen Film schon gesehen.",
          "accepted": [
            "We've seen this film before."
          ],
          "words": [
            "core.b1u1.seen"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "They have ___ sushi before.",
          "accepted": [
            "eaten"
          ],
          "hint": "gegessen",
          "translation": "Sie haben schon mal Sushi gegessen.",
          "words": [
            "core.b1u1.eaten"
          ]
        },
        {
          "id": "e11",
          "type": "listen-choice",
          "audio": "I have never met him.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich habe ihn noch nie getroffen.",
              "correct": true
            },
            {
              "text": "Ich habe ihn gestern getroffen."
            },
            {
              "text": "Ich will ihn bald treffen."
            }
          ],
          "words": [
            "core.b1u1.met",
            "core.b1u1.never"
          ]
        },
        {
          "id": "e12",
          "type": "dialogue",
          "title": "Beim Essen",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Have you ever eaten sushi?",
              "de": "Hast du schon mal Sushi gegessen?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "No, never. But I have eaten Thai food.",
              "de": "Nein, noch nie. Aber ich habe thailändisches Essen gegessen."
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Really? I have been to Thailand.",
              "de": "Echt? Ich war schon in Thailand."
            }
          ],
          "question": "Was hat Mia schon gegessen?",
          "choices": [
            {
              "text": "Thailändisches Essen",
              "correct": true
            },
            {
              "text": "Sushi"
            },
            {
              "text": "Pizza"
            }
          ],
          "words": [
            "core.b1u1.ever",
            "core.b1u1.never",
            "core.b1u1.eaten",
            "core.b1u1.been"
          ]
        }
      ]
    },
    {
      "id": "core.b1u1.l3",
      "title": "Seit wann?",
      "description": "since, for sowie already und yet",
      "introduces": [
        "core.b1u1.since",
        "core.b1u1.for",
        "core.b1u1.already",
        "core.b1u1.yet"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u1.since"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u1.for"
        },
        {
          "id": "e03",
          "type": "fill",
          "sentence": "I have lived here ___ Monday.",
          "choices": [
            {
              "text": "since",
              "correct": true
            },
            {
              "text": "for"
            },
            {
              "text": "from"
            }
          ],
          "translation": "Ich wohne seit Montag hier.",
          "explanation": "since + Zeitpunkt (Montag, 2019). for + Zeitraum (two years).",
          "words": [
            "core.b1u1.since"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u1.already"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u1.yet"
        },
        {
          "id": "e06",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich war schon dort.",
          "answer": "I have already been there.",
          "accepted": [
            "I have been there already."
          ],
          "distractors": [
            "go",
            "for",
            "since"
          ],
          "explanation": "already steht zwischen have und dem Partizip.",
          "words": [
            "core.b1u1.already",
            "core.b1u1.been"
          ]
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "Have you finished yet?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Bist du schon fertig?",
              "correct": true
            },
            {
              "text": "Hast du gestern gegessen?"
            },
            {
              "text": "Warst du gestern fertig?"
            }
          ],
          "words": [
            "core.b1u1.yet"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "We have known each other for years.",
          "answer": "Wir kennen uns schon seit Jahren.",
          "accepted": [
            "Wir kennen uns seit Jahren."
          ],
          "distractors": [
            "für",
            "gestern",
            "wohnen"
          ],
          "explanation": "for ist hier „seit“, nicht „für“.",
          "words": [
            "core.b1u1.for"
          ]
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "I haven't finished ___.",
          "choices": [
            {
              "text": "yet",
              "correct": true
            },
            {
              "text": "already"
            },
            {
              "text": "ever"
            }
          ],
          "translation": "Ich bin noch nicht fertig.",
          "explanation": "yet = noch nicht, steht am Satzende.",
          "words": [
            "core.b1u1.yet",
            "core.b1u1.already"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "I have known him ___ ten years.",
          "accepted": [
            "for"
          ],
          "hint": "seit (Zeitraum)",
          "translation": "Ich kenne ihn schon seit zehn Jahren.",
          "words": [
            "core.b1u1.for"
          ]
        },
        {
          "id": "e11",
          "type": "listen-type",
          "audio": "We have lived in Berlin for two years.",
          "translation": "Wir wohnen seit zwei Jahren in Berlin.",
          "words": [
            "core.b1u1.for"
          ]
        },
        {
          "id": "e12",
          "type": "speak",
          "text": "I have already seen that film.",
          "translation": "Ich habe den Film schon gesehen.",
          "words": [
            "core.b1u1.already",
            "core.b1u1.seen"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Im Büro",
          "lines": [
            {
              "speaker": "a",
              "name": "Kim",
              "en": "Have you finished the report yet?",
              "de": "Bist du schon mit dem Bericht fertig?"
            },
            {
              "speaker": "b",
              "name": "Leo",
              "en": "Not yet. I have worked on it for three hours.",
              "de": "Noch nicht. Ich arbeite schon seit drei Stunden daran."
            },
            {
              "speaker": "a",
              "name": "Kim",
              "en": "Oh, I have already finished mine.",
              "de": "Oh, meinen habe ich schon fertig."
            }
          ],
          "question": "Wie lange arbeitet Leo schon am Bericht?",
          "choices": [
            {
              "text": "Drei Stunden",
              "correct": true
            },
            {
              "text": "Seit neun Uhr"
            },
            {
              "text": "Seit Montag"
            }
          ],
          "words": [
            "core.b1u1.since",
            "core.b1u1.for",
            "core.b1u1.already",
            "core.b1u1.yet"
          ]
        }
      ]
    },
    {
      "id": "core.b1u1.l4",
      "title": "Erlebnisse erzählen",
      "description": "Reisen, Konzerte und once",
      "introduces": [
        "core.b1u1.trip",
        "core.b1u1.concert",
        "core.b1u1.abroad",
        "core.b1u1.amazing",
        "core.b1u1.once"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u1.trip"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u1.concert"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „der Ausflug“?",
          "choices": [
            {
              "text": "trip",
              "emoji": "🧳",
              "correct": true
            },
            {
              "text": "concert",
              "emoji": "🎵"
            }
          ],
          "words": [
            "core.b1u1.trip",
            "core.b1u1.concert"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u1.abroad"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u1.amazing"
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "It was an amazing trip to Spain.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Es war eine großartige Reise nach Spanien.",
              "correct": true
            },
            {
              "text": "Es war ein großartiges Konzert in Spanien."
            },
            {
              "text": "Es war eine schlechte Reise nach Spanien."
            }
          ],
          "words": [
            "core.b1u1.amazing",
            "core.b1u1.trip"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b1u1.once"
        },
        {
          "id": "e08",
          "type": "match",
          "pairs": [
            {
              "en": "abroad",
              "de": "im Ausland"
            },
            {
              "en": "amazing",
              "de": "großartig"
            },
            {
              "en": "once",
              "de": "einmal"
            },
            {
              "en": "concert",
              "de": "das Konzert"
            }
          ],
          "words": [
            "core.b1u1.abroad",
            "core.b1u1.amazing",
            "core.b1u1.once",
            "core.b1u1.concert"
          ]
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich war schon einmal auf einem Konzert.",
          "answer": "I have been to a concert once.",
          "distractors": [
            "go",
            "is",
            "was"
          ],
          "explanation": "once am Ende: einmal.",
          "words": [
            "core.b1u1.been",
            "core.b1u1.concert",
            "core.b1u1.once"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "She has lived ___ for five years.",
          "choices": [
            {
              "text": "abroad",
              "correct": true
            },
            {
              "text": "in"
            },
            {
              "text": "to"
            }
          ],
          "translation": "Sie hat fünf Jahre im Ausland gelebt.",
          "explanation": "abroad braucht keine Präposition: lived abroad.",
          "words": [
            "core.b1u1.abroad",
            "core.b1u1.for"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Have you ever ___ abroad?",
          "accepted": [
            "been",
            "lived"
          ],
          "hint": "gewesen / gelebt",
          "translation": "Warst du schon einmal im Ausland?",
          "words": [
            "core.b1u1.ever",
            "core.b1u1.abroad"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "Have you ever been to a concert?",
          "translation": "Warst du schon mal auf einem Konzert?",
          "words": [
            "core.b1u1.concert",
            "core.b1u1.ever"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "I have been there once.",
          "translation": "Ich war schon einmal dort.",
          "words": [
            "core.b1u1.been",
            "core.b1u1.once"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Urlaubserzählung",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Have you ever been abroad?",
              "de": "Warst du schon mal im Ausland?"
            },
            {
              "speaker": "b",
              "name": "Priya",
              "en": "Yes, I have. It was an amazing trip to Italy.",
              "de": "Ja, schon. Es war eine großartige Reise nach Italien."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Wow! I have never been abroad.",
              "de": "Wow! Ich war noch nie im Ausland."
            }
          ],
          "question": "Was stimmt?",
          "choices": [
            {
              "text": "Priya war schon im Ausland.",
              "correct": true
            },
            {
              "text": "Sam war schon im Ausland."
            },
            {
              "text": "Beide waren schon im Ausland."
            }
          ],
          "words": [
            "core.b1u1.ever",
            "core.b1u1.abroad",
            "core.b1u1.amazing",
            "core.b1u1.trip",
            "core.b1u1.never"
          ]
        }
      ]
    },
    {
      "id": "core.b1u1.l5",
      "title": "Wiederholung",
      "description": "Alle Wörter der Unit mischen, keine neuen Wörter",
      "exercises": [
        {
          "id": "e01",
          "type": "fill",
          "sentence": "I have ___ to Rome.",
          "choices": [
            {
              "text": "been",
              "correct": true
            },
            {
              "text": "was"
            },
            {
              "text": "saw"
            }
          ],
          "translation": "Ich war schon mal in Rom.",
          "words": [
            "core.b1u1.been"
          ]
        },
        {
          "id": "e02",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich habe schon einmal Sushi gegessen.",
          "answer": "I have eaten sushi once.",
          "distractors": [
            "ate",
            "gone",
            "yet"
          ],
          "words": [
            "core.b1u1.eaten",
            "core.b1u1.once"
          ]
        },
        {
          "id": "e03",
          "type": "listen-choice",
          "audio": "Have you ever seen a concert abroad?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Hast du schon mal ein Konzert im Ausland gesehen?",
              "correct": true
            },
            {
              "text": "Hast du gestern ein Konzert gesehen?"
            },
            {
              "text": "Hast du schon mal im Ausland gearbeitet?"
            }
          ],
          "words": [
            "core.b1u1.ever",
            "core.b1u1.seen",
            "core.b1u1.concert",
            "core.b1u1.abroad"
          ]
        },
        {
          "id": "e04",
          "type": "match",
          "pairs": [
            {
              "en": "never",
              "de": "noch nie"
            },
            {
              "en": "already",
              "de": "schon"
            },
            {
              "en": "yet",
              "de": "noch nicht"
            },
            {
              "en": "once",
              "de": "einmal"
            }
          ],
          "words": [
            "core.b1u1.never",
            "core.b1u1.already",
            "core.b1u1.yet",
            "core.b1u1.once"
          ]
        },
        {
          "id": "e05",
          "type": "fill",
          "sentence": "We have known each other ___ years.",
          "choices": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "since"
            },
            {
              "text": "from"
            }
          ],
          "translation": "Wir kennen uns seit Jahren.",
          "explanation": "for + Zeitraum (years). since braucht einen Zeitpunkt.",
          "words": [
            "core.b1u1.for",
            "core.b1u1.since"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "She has worked here ___ Monday.",
          "accepted": [
            "since"
          ],
          "hint": "seit (Zeitpunkt)",
          "translation": "Sie arbeitet seit Montag hier.",
          "words": [
            "core.b1u1.since"
          ]
        },
        {
          "id": "e07",
          "type": "listen-type",
          "audio": "I have never been to Paris.",
          "translation": "Ich war noch nie in Paris.",
          "words": [
            "core.b1u1.never",
            "core.b1u1.been"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Have you been to Japan?",
          "answer": "Warst du schon in Japan?",
          "distractors": [
            "gegessen",
            "Nein",
            "nie"
          ],
          "words": [
            "core.b1u1.been"
          ]
        },
        {
          "id": "e09",
          "type": "choice",
          "prompt": "Welcher Satz ist richtig?",
          "choices": [
            {
              "text": "I have met him before.",
              "correct": true
            },
            {
              "text": "I have meet him before."
            },
            {
              "text": "I have met him yesterday."
            }
          ],
          "explanation": "Mit have + Partizip passt kein Zeitpunkt wie yesterday.",
          "words": [
            "core.b1u1.met"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "Have you finished ___?",
          "accepted": [
            "yet"
          ],
          "hint": "schon (in Fragen)",
          "translation": "Bist du schon fertig?",
          "words": [
            "core.b1u1.yet"
          ]
        },
        {
          "id": "e11",
          "type": "dialogue",
          "title": "Am Telefon",
          "lines": [
            {
              "speaker": "a",
              "name": "Leo",
              "en": "Have you ever been to a concert abroad?",
              "de": "Warst du schon mal auf einem Konzert im Ausland?"
            },
            {
              "speaker": "b",
              "name": "Kim",
              "en": "Yes, once. It was an amazing concert in Rome.",
              "de": "Ja, einmal. Es war ein tolles Konzert in Rom."
            },
            {
              "speaker": "a",
              "name": "Leo",
              "en": "Wow! I have never been to Rome.",
              "de": "Wow! Ich war noch nie in Rom."
            },
            {
              "speaker": "b",
              "name": "Kim",
              "en": "You should go. It is a great trip.",
              "de": "Du solltest hinfahren. Es ist eine tolle Reise."
            }
          ],
          "question": "Wo war Kim auf einem Konzert?",
          "choices": [
            {
              "text": "In Rom",
              "correct": true
            },
            {
              "text": "In Paris"
            },
            {
              "text": "Zu Hause"
            }
          ],
          "words": [
            "core.b1u1.ever",
            "core.b1u1.concert",
            "core.b1u1.abroad",
            "core.b1u1.once",
            "core.b1u1.amazing",
            "core.b1u1.never",
            "core.b1u1.trip"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "She has gone to London.",
          "translation": "Sie ist nach London gefahren.",
          "words": [
            "core.b1u1.gone"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "I have seen a concert abroad.",
          "translation": "Ich habe schon mal ein Konzert im Ausland gesehen.",
          "words": [
            "core.b1u1.seen",
            "core.b1u1.concert",
            "core.b1u1.abroad"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.b1u1.experience",
    "en": "experience",
    "de": "die Erfahrung",
    "pos": "noun",
    "example": "It was a great experience.",
    "exampleDe": "Es war eine tolle Erfahrung.",
    "altEn": [
      "experiences"
    ],
    "altDe": [
      "Erfahrung",
      "das Erlebnis"
    ],
    "note": "Auch Berufserfahrung heißt work experience."
  },
  {
    "id": "core.b1u1.ever",
    "en": "ever",
    "de": "jemals / schon einmal",
    "pos": "adv",
    "example": "Have you ever been to Spain?",
    "exampleDe": "Warst du schon einmal in Spanien?",
    "altDe": [
      "jemals",
      "schon einmal",
      "schon mal"
    ],
    "note": "Steht in Fragen zwischen have und dem Partizip."
  },
  {
    "id": "core.b1u1.never",
    "en": "never",
    "de": "noch nie / nie",
    "pos": "adv",
    "example": "I have never eaten sushi.",
    "exampleDe": "Ich habe noch nie Sushi gegessen.",
    "altDe": [
      "nie",
      "noch nie"
    ],
    "note": "Steht zwischen have und dem Partizip. Ein zusätzliches not brauchst du nicht."
  },
  {
    "id": "core.b1u1.been",
    "en": "been",
    "de": "gewesen / war",
    "pos": "verb",
    "example": "I have been to Rome.",
    "exampleDe": "Ich war schon in Rom.",
    "altDe": [
      "gewesen",
      "war"
    ],
    "note": "Partizip II von be (sein). have been to = war schon einmal dort."
  },
  {
    "id": "core.b1u1.seen",
    "en": "seen",
    "de": "gesehen",
    "pos": "verb",
    "example": "We have seen this film before.",
    "exampleDe": "Wir haben diesen Film schon gesehen.",
    "note": "Partizip II von see (sehen)."
  },
  {
    "id": "core.b1u1.eaten",
    "en": "eaten",
    "de": "gegessen",
    "pos": "verb",
    "example": "She has eaten Thai food before.",
    "exampleDe": "Sie hat schon mal thailändisches Essen gegessen.",
    "note": "Partizip II von eat (essen)."
  },
  {
    "id": "core.b1u1.gone",
    "en": "gone",
    "de": "gegangen / gefahren",
    "pos": "verb",
    "example": "He has gone to Paris.",
    "exampleDe": "Er ist nach Paris gefahren.",
    "note": "have gone to = ist weg und noch nicht zurück. Partizip II von go."
  },
  {
    "id": "core.b1u1.met",
    "en": "met",
    "de": "kennengelernt / getroffen",
    "pos": "verb",
    "example": "I have met your sister.",
    "exampleDe": "Ich habe deine Schwester kennengelernt.",
    "altDe": [
      "getroffen"
    ],
    "note": "Partizip II von meet."
  },
  {
    "id": "core.b1u1.since",
    "en": "since",
    "de": "seit (Zeitpunkt)",
    "pos": "prep",
    "example": "I have lived here since Monday.",
    "exampleDe": "Ich wohne seit Montag hier.",
    "note": "since + Zeitpunkt, z.B. since 2019 oder since Monday."
  },
  {
    "id": "core.b1u1.for",
    "en": "for",
    "de": "seit (Zeitraum)",
    "pos": "prep",
    "example": "We have known each other for years.",
    "exampleDe": "Wir kennen uns schon seit Jahren.",
    "note": "for + Zeitraum, z.B. for two years. Achtung: for heißt auch „für“."
  },
  {
    "id": "core.b1u1.already",
    "en": "already",
    "de": "schon / bereits",
    "pos": "adv",
    "example": "I have already eaten.",
    "exampleDe": "Ich habe schon gegessen.",
    "altDe": [
      "bereits"
    ],
    "note": "Steht zwischen have und dem Partizip."
  },
  {
    "id": "core.b1u1.yet",
    "en": "yet",
    "de": "noch nicht / schon (in Fragen)",
    "pos": "adv",
    "example": "Have you finished yet?",
    "exampleDe": "Bist du schon fertig?",
    "altDe": [
      "noch nicht",
      "schon"
    ],
    "note": "Steht am Satzende: I haven't finished yet."
  },
  {
    "id": "core.b1u1.trip",
    "en": "trip",
    "de": "die Reise / der Ausflug",
    "emoji": "🧳",
    "pos": "noun",
    "example": "We went on a trip to the mountains.",
    "exampleDe": "Wir haben einen Ausflug in die Berge gemacht.",
    "altDe": [
      "Reise",
      "Ausflug",
      "Fahrt"
    ],
    "note": "Für eine kurze Reise. Für eine lange Reise sagt man journey."
  },
  {
    "id": "core.b1u1.abroad",
    "en": "abroad",
    "de": "im Ausland / ins Ausland",
    "pos": "adv",
    "example": "She has lived abroad for years.",
    "exampleDe": "Sie hat jahrelang im Ausland gelebt.",
    "altDe": [
      "im Ausland",
      "ins Ausland"
    ],
    "note": "Ohne Präposition: lived abroad, nicht „in abroad“."
  },
  {
    "id": "core.b1u1.concert",
    "en": "concert",
    "de": "das Konzert",
    "emoji": "🎵",
    "pos": "noun",
    "example": "I have been to a rock concert.",
    "exampleDe": "Ich war schon mal auf einem Rockkonzert.",
    "altDe": [
      "Konzert"
    ]
  },
  {
    "id": "core.b1u1.amazing",
    "en": "amazing",
    "de": "großartig / toll",
    "pos": "adj",
    "example": "It was an amazing experience.",
    "exampleDe": "Es war ein großartiges Erlebnis.",
    "altDe": [
      "großartig",
      "toll",
      "unglaublich"
    ],
    "note": "Stärker als good. Man sagt es für sehr gute Erlebnisse."
  },
  {
    "id": "core.b1u1.once",
    "en": "once",
    "de": "einmal",
    "pos": "adv",
    "example": "I have seen him once.",
    "exampleDe": "Ich habe ihn einmal gesehen.",
    "altDe": [
      "ein Mal"
    ],
    "note": "once = einmal. twice = zweimal."
  }
]
