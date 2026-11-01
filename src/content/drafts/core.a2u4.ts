// Generiert von scripts/gen-drafts.ts aus content-drafts/core.a2u4.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.a2u4",
  "title": "Pläne & Verabredungen",
  "description": "Zukunft mit \"going to\" und \"will\", Termine vereinbaren.",
  "cefr": "A2",
  "color": "yellow",
  "icon": "📅",
  "topics": [
    "going to",
    "will",
    "Termine",
    "Vorschläge machen"
  ],
  "status": "ready",
  "milestone": true,
  "tips": [
    {
      "title": "going to für Pläne",
      "text": "Für Pläne, die du schon hast, nutzt du be going to: am / is / are + going to + Grundform. Verneinung: am / is / are + not going to.",
      "examples": [
        {
          "en": "I am going to visit my aunt.",
          "de": "Ich habe vor, meine Tante zu besuchen."
        },
        {
          "en": "She is not going to come.",
          "de": "Sie wird nicht kommen."
        }
      ]
    },
    {
      "title": "will für spontane Entscheidungen",
      "text": "Spontane Entscheidungen, Angebote und Versprechen drückst du mit will + Grundform aus. Die Verneinung ist won't (will not). Nach will folgt immer die Grundform, nie -s oder -ing.",
      "examples": [
        {
          "en": "I will call you later.",
          "de": "Ich rufe dich später an."
        },
        {
          "en": "I won't be late.",
          "de": "Ich komme nicht zu spät."
        }
      ]
    },
    {
      "title": "Vorschläge machen",
      "text": "Let's + Grundform schlägt eine gemeinsame Aktion vor. How about + -ing fragt nach einer Idee. Zustimmen kannst du mit That sounds good.",
      "examples": [
        {
          "en": "Let's go to the park.",
          "de": "Lass uns in den Park gehen."
        },
        {
          "en": "How about going to the cinema?",
          "de": "Wie wäre es, ins Kino zu gehen?"
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.a2u4.l1",
      "title": "Pläne machen",
      "description": "going to für Pläne und Termine im Alltag",
      "introduces": [
        "core.a2u4.be-going-to",
        "core.a2u4.tomorrow",
        "core.a2u4.plan",
        "core.a2u4.visit",
        "core.a2u4.this-weekend",
        "core.a2u4.cinema"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u4.be-going-to"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u4.tomorrow"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet „be going to“?",
          "choices": [
            {
              "text": "vorhaben zu",
              "correct": true
            },
            {
              "text": "gerne gehen"
            },
            {
              "text": "gerade gegangen sein"
            }
          ],
          "words": [
            "core.a2u4.be-going-to"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u4.plan"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u4.visit"
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "I am going to visit my aunt.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich habe vor, meine Tante zu besuchen.",
              "correct": true
            },
            {
              "text": "Ich habe meine Tante gestern besucht."
            },
            {
              "text": "Meine Tante besucht mich morgen."
            }
          ],
          "words": [
            "core.a2u4.visit",
            "core.a2u4.be-going-to"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u4.this-weekend"
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u4.cinema"
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich gehe dieses Wochenende ins Kino.",
          "answer": "I am going to the cinema this weekend.",
          "distractors": [
            "on",
            "are",
            "at"
          ],
          "words": [
            "core.a2u4.be-going-to",
            "core.a2u4.this-weekend",
            "core.a2u4.cinema"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "We ___ going to visit Anna tomorrow.",
          "choices": [
            {
              "text": "are",
              "correct": true
            },
            {
              "text": "is"
            },
            {
              "text": "am"
            }
          ],
          "translation": "Wir haben vor, Anna morgen zu besuchen.",
          "explanation": "I → am, he/she/it → is, we/you/they → are.",
          "words": [
            "core.a2u4.be-going-to",
            "core.a2u4.tomorrow"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "She is going to ___ her grandma on Sunday.",
          "accepted": [
            "visit"
          ],
          "hint": "besuchen",
          "translation": "Sie hat vor, am Sonntag ihre Oma zu besuchen.",
          "words": [
            "core.a2u4.visit"
          ]
        },
        {
          "id": "e12",
          "type": "match",
          "pairs": [
            {
              "en": "plan",
              "de": "der Plan"
            },
            {
              "en": "tomorrow",
              "de": "morgen"
            },
            {
              "en": "visit",
              "de": "besuchen"
            },
            {
              "en": "this weekend",
              "de": "an diesem Wochenende"
            },
            {
              "en": "cinema",
              "de": "das Kino"
            }
          ],
          "words": [
            "core.a2u4.plan",
            "core.a2u4.tomorrow",
            "core.a2u4.visit",
            "core.a2u4.this-weekend",
            "core.a2u4.cinema"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Am Wochenende",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "What are you going to do this weekend?",
              "de": "Was hast du am Wochenende vor?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I am going to the cinema on Saturday. That is the plan.",
              "de": "Ich gehe am Samstag ins Kino. Das ist der Plan."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Great. I am going to visit my aunt on Sunday.",
              "de": "Super. Ich besuche am Sonntag meine Tante."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Have a nice time!",
              "de": "Viel Spaß!"
            }
          ],
          "question": "Wohin geht Anna am Samstag?",
          "choices": [
            {
              "text": "Ins Kino",
              "correct": true
            },
            {
              "text": "Zu ihrer Tante"
            },
            {
              "text": "In den Park"
            }
          ],
          "words": [
            "core.a2u4.be-going-to",
            "core.a2u4.this-weekend",
            "core.a2u4.cinema",
            "core.a2u4.plan",
            "core.a2u4.visit"
          ]
        }
      ]
    },
    {
      "id": "core.a2u4.l2",
      "title": "Spontan entscheiden",
      "description": "will für Entscheidungen im Moment und Versprechen",
      "introduces": [
        "core.a2u4.will",
        "core.a2u4.call",
        "core.a2u4.later",
        "core.a2u4.bring",
        "core.a2u4.promise",
        "core.a2u4.sure"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u4.will"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u4.call"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I will call you.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Ich rufe dich an.",
              "correct": true
            },
            {
              "text": "Ich habe dich angerufen."
            },
            {
              "text": "Ich rufe dich gerade an."
            }
          ],
          "words": [
            "core.a2u4.will",
            "core.a2u4.call"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u4.later"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u4.bring"
        },
        {
          "id": "e06",
          "type": "listen-type",
          "audio": "Can you bring some chairs?",
          "translation": "Kannst du ein paar Stühle mitbringen?",
          "accepted": [
            "Could you bring some chairs?"
          ],
          "words": [
            "core.a2u4.bring"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u4.promise"
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich verspreche, dass ich da bin.",
          "answer": "I promise I will be there.",
          "distractors": [
            "am",
            "sure",
            "later"
          ],
          "words": [
            "core.a2u4.promise",
            "core.a2u4.will"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.a2u4.sure"
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "___, I can help.",
          "choices": [
            {
              "text": "Sure",
              "correct": true
            },
            {
              "text": "Sorry"
            },
            {
              "text": "Busy"
            }
          ],
          "translation": "Klar, ich kann helfen.",
          "explanation": "Sure! ist eine typische Antwort auf eine Bitte.",
          "words": [
            "core.a2u4.sure"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Don't worry, I ___ be there.",
          "accepted": [
            "will"
          ],
          "hint": "werde",
          "translation": "Keine Sorge, ich werde da sein.",
          "words": [
            "core.a2u4.will"
          ]
        },
        {
          "id": "e12",
          "type": "match",
          "pairs": [
            {
              "en": "call",
              "de": "anrufen"
            },
            {
              "en": "later",
              "de": "später"
            },
            {
              "en": "bring",
              "de": "mitbringen"
            },
            {
              "en": "promise",
              "de": "versprechen"
            },
            {
              "en": "sure",
              "de": "klar"
            }
          ],
          "words": [
            "core.a2u4.call",
            "core.a2u4.later",
            "core.a2u4.bring",
            "core.a2u4.promise",
            "core.a2u4.sure"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Eine Bitte",
          "lines": [
            {
              "speaker": "a",
              "name": "Mia",
              "en": "Can you bring some chairs tomorrow?",
              "de": "Kannst du morgen ein paar Stühle mitbringen?"
            },
            {
              "speaker": "b",
              "name": "Leo",
              "en": "Sure. I will bring them. I will call you later.",
              "de": "Klar. Ich bringe sie mit. Ich rufe dich später an."
            }
          ],
          "question": "Was bringt Leo mit?",
          "choices": [
            {
              "text": "Stühle",
              "correct": true
            },
            {
              "text": "Kuchen"
            },
            {
              "text": "Decken"
            }
          ],
          "words": [
            "core.a2u4.bring",
            "core.a2u4.sure",
            "core.a2u4.will",
            "core.a2u4.call",
            "core.a2u4.later"
          ]
        }
      ]
    },
    {
      "id": "core.a2u4.l3",
      "title": "Termine & Zeiten",
      "description": "Termine vereinbaren, Verfügbarkeit und Uhrzeiten",
      "introduces": [
        "core.a2u4.appointment",
        "core.a2u4.meeting",
        "core.a2u4.busy",
        "core.a2u4.on-monday",
        "core.a2u4.free",
        "core.a2u4.at-three"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u4.appointment"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u4.meeting"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „der Termin“?",
          "choices": [
            {
              "text": "appointment",
              "emoji": "📅",
              "correct": true
            },
            {
              "text": "meeting",
              "emoji": "🤝"
            },
            {
              "text": "cinema",
              "emoji": "🎬"
            }
          ],
          "words": [
            "core.a2u4.appointment",
            "core.a2u4.meeting",
            "core.a2u4.cinema"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u4.busy"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u4.on-monday"
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "Sorry, I am busy on Monday.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Tut mir leid, ich habe am Montag keine Zeit.",
              "correct": true
            },
            {
              "text": "Gute Idee, wir treffen uns am Montag."
            },
            {
              "text": "Wie spät ist es am Montag?"
            }
          ],
          "words": [
            "core.a2u4.busy",
            "core.a2u4.on-monday"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u4.free"
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u4.at-three"
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "en-de",
          "prompt": "The meeting starts at three o'clock.",
          "answer": "Die Besprechung beginnt um drei Uhr.",
          "distractors": [
            "Termin",
            "Montag",
            "Zeit"
          ],
          "words": [
            "core.a2u4.meeting",
            "core.a2u4.at-three"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "The party is ___ Monday.",
          "choices": [
            {
              "text": "on",
              "correct": true
            },
            {
              "text": "in"
            },
            {
              "text": "at"
            }
          ],
          "translation": "Die Party ist am Montag.",
          "explanation": "Wochentage immer mit on: on Monday.",
          "words": [
            "core.a2u4.on-monday"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "The class starts ___ three o'clock.",
          "accepted": [
            "at"
          ],
          "hint": "um",
          "translation": "Der Kurs beginnt um drei Uhr.",
          "words": [
            "core.a2u4.at-three"
          ]
        },
        {
          "id": "e12",
          "type": "match",
          "pairs": [
            {
              "en": "appointment",
              "de": "der Termin"
            },
            {
              "en": "busy",
              "de": "beschäftigt"
            },
            {
              "en": "free",
              "de": "Zeit haben"
            },
            {
              "en": "meeting",
              "de": "die Besprechung"
            },
            {
              "en": "at three o'clock",
              "de": "um drei Uhr"
            }
          ],
          "words": [
            "core.a2u4.appointment",
            "core.a2u4.busy",
            "core.a2u4.free",
            "core.a2u4.meeting",
            "core.a2u4.at-three"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Ein Termin",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Are you free on Friday?",
              "de": "Hast du am Freitag Zeit?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Sorry, I am busy. I have an appointment at three o'clock.",
              "de": "Tut mir leid, ich bin beschäftigt. Ich habe um drei Uhr einen Termin."
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "No problem. Can we meet on Saturday?",
              "de": "Kein Problem. Können wir uns am Samstag treffen?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Yes, that works.",
              "de": "Ja, das passt."
            }
          ],
          "question": "Um wie viel Uhr hat Anna ihren Termin?",
          "choices": [
            {
              "text": "Um drei Uhr",
              "correct": true
            },
            {
              "text": "Um zehn Uhr"
            },
            {
              "text": "Um fünf Uhr"
            }
          ],
          "words": [
            "core.a2u4.busy",
            "core.a2u4.appointment",
            "core.a2u4.at-three",
            "core.a2u4.free"
          ]
        }
      ]
    },
    {
      "id": "core.a2u4.l4",
      "title": "Vorschläge machen",
      "description": "Vorschläge machen, annehmen und einen Treffpunkt ausmachen",
      "introduces": [
        "core.a2u4.lets",
        "core.a2u4.how-about",
        "core.a2u4.sounds-good",
        "core.a2u4.good-idea",
        "core.a2u4.picnic"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u4.lets"
        },
        {
          "id": "e02",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "Let's go to the park.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Lass uns in den Park gehen.",
              "correct": true
            },
            {
              "text": "Wir waren gestern im Park."
            },
            {
              "text": "Gehst du in den Park?"
            }
          ],
          "words": [
            "core.a2u4.lets"
          ]
        },
        {
          "id": "e03",
          "type": "intro",
          "word": "core.a2u4.how-about"
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u4.sounds-good"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Das klingt gut.",
          "answer": "That sounds good.",
          "accepted": [
            "Sounds good."
          ],
          "distractors": [
            "bad",
            "busy",
            "sure"
          ],
          "words": [
            "core.a2u4.sounds-good"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.a2u4.good-idea"
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u4.picnic"
        },
        {
          "id": "e08",
          "type": "listen-type",
          "audio": "How about a picnic in the park?",
          "translation": "Wie wäre es mit einem Picknick im Park?",
          "accepted": [
            "What about a picnic in the park?"
          ],
          "words": [
            "core.a2u4.how-about",
            "core.a2u4.picnic"
          ]
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "Good ___! Let's do it.",
          "choices": [
            {
              "text": "idea",
              "correct": true
            },
            {
              "text": "busy"
            },
            {
              "text": "later"
            }
          ],
          "translation": "Gute Idee! Machen wir es.",
          "explanation": "good idea = gute Idee, ohne Artikel vor idea.",
          "words": [
            "core.a2u4.good-idea"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "How about ___ to the cinema?",
          "accepted": [
            "going"
          ],
          "hint": "gehen",
          "translation": "Wie wäre es, ins Kino zu gehen?",
          "words": [
            "core.a2u4.how-about",
            "core.a2u4.cinema"
          ]
        },
        {
          "id": "e11",
          "type": "match",
          "pairs": [
            {
              "en": "let's",
              "de": "lass uns"
            },
            {
              "en": "how about …?",
              "de": "wie wäre es mit …?"
            },
            {
              "en": "sounds good",
              "de": "das klingt gut"
            },
            {
              "en": "good idea",
              "de": "gute Idee"
            },
            {
              "en": "picnic",
              "de": "das Picknick"
            }
          ],
          "words": [
            "core.a2u4.lets",
            "core.a2u4.how-about",
            "core.a2u4.sounds-good",
            "core.a2u4.good-idea",
            "core.a2u4.picnic"
          ]
        },
        {
          "id": "e12",
          "type": "listen-choice",
          "audio": "Let's meet at the cinema on Friday.",
          "prompt": "Was wird vorgeschlagen?",
          "choices": [
            {
              "text": "Sich am Freitag im Kino zu treffen.",
              "correct": true
            },
            {
              "text": "Am Freitag zu arbeiten."
            },
            {
              "text": "Am Freitag ins Kino zu gehen, aber das Kino ist geschlossen."
            }
          ],
          "words": [
            "core.a2u4.lets",
            "core.a2u4.cinema"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "How about a picnic on Sunday?",
          "translation": "Wie wäre es mit einem Picknick am Sonntag?",
          "words": [
            "core.a2u4.how-about",
            "core.a2u4.picnic"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein Vorschlag",
          "lines": [
            {
              "speaker": "a",
              "name": "Priya",
              "en": "Let's go on a picnic this weekend.",
              "de": "Lass uns dieses Wochenende ein Picknick machen."
            },
            {
              "speaker": "b",
              "name": "Omar",
              "en": "Good idea! How about Sunday?",
              "de": "Gute Idee! Wie wäre es mit Sonntag?"
            },
            {
              "speaker": "a",
              "name": "Priya",
              "en": "Sounds good. I will bring the food.",
              "de": "Klingt gut. Ich bringe das Essen mit."
            },
            {
              "speaker": "b",
              "name": "Omar",
              "en": "Great. I will call you tomorrow.",
              "de": "Super. Ich rufe dich morgen an."
            }
          ],
          "question": "Wer bringt das Essen mit?",
          "choices": [
            {
              "text": "Priya",
              "correct": true
            },
            {
              "text": "Omar"
            },
            {
              "text": "Beide zusammen"
            }
          ],
          "words": [
            "core.a2u4.lets",
            "core.a2u4.good-idea",
            "core.a2u4.how-about",
            "core.a2u4.sounds-good",
            "core.a2u4.picnic"
          ]
        }
      ]
    },
    {
      "id": "core.a2u4.l5",
      "title": "Wiederholung",
      "description": "Alle Wörter der Unit gemischt, ohne neue Wörter",
      "exercises": [
        {
          "id": "e01",
          "type": "listen-choice",
          "audio": "I am going to visit my grandma on Sunday.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich habe vor, am Sonntag meine Oma zu besuchen.",
              "correct": true
            },
            {
              "text": "Ich habe meine Oma am Sonntag besucht."
            },
            {
              "text": "Meine Oma hat am Sonntag Zeit."
            }
          ],
          "words": [
            "core.a2u4.be-going-to",
            "core.a2u4.visit"
          ]
        },
        {
          "id": "e02",
          "type": "choice",
          "prompt": "Welches Bild zeigt „ein Picknick“?",
          "choices": [
            {
              "text": "picnic",
              "emoji": "🧺",
              "correct": true
            },
            {
              "text": "cinema",
              "emoji": "🎬"
            },
            {
              "text": "appointment",
              "emoji": "📅"
            }
          ],
          "words": [
            "core.a2u4.picnic",
            "core.a2u4.cinema",
            "core.a2u4.appointment"
          ]
        },
        {
          "id": "e03",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Let's meet tomorrow.",
          "answer": "Lass uns morgen treffen.",
          "distractors": [
            "Kino",
            "später",
            "Termin"
          ],
          "words": [
            "core.a2u4.lets",
            "core.a2u4.tomorrow"
          ]
        },
        {
          "id": "e04",
          "type": "fill",
          "sentence": "I ___ call you later.",
          "choices": [
            {
              "text": "will",
              "correct": true
            },
            {
              "text": "am"
            },
            {
              "text": "promise"
            }
          ],
          "translation": "Ich rufe dich später an.",
          "explanation": "Spontane Entscheidung: will + Grundform.",
          "words": [
            "core.a2u4.will",
            "core.a2u4.call",
            "core.a2u4.later"
          ]
        },
        {
          "id": "e05",
          "type": "listen-type",
          "audio": "The appointment is at three o'clock.",
          "translation": "Der Termin ist um drei Uhr.",
          "accepted": [
            "The appointment is at three."
          ],
          "words": [
            "core.a2u4.appointment",
            "core.a2u4.at-three"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "Please ___ your friends to the picnic.",
          "accepted": [
            "bring"
          ],
          "hint": "mitbringen",
          "translation": "Bitte bring deine Freunde zum Picknick mit.",
          "words": [
            "core.a2u4.bring",
            "core.a2u4.picnic"
          ]
        },
        {
          "id": "e07",
          "type": "match",
          "pairs": [
            {
              "en": "sure",
              "de": "klar"
            },
            {
              "en": "promise",
              "de": "versprechen"
            },
            {
              "en": "meeting",
              "de": "die Besprechung"
            },
            {
              "en": "cinema",
              "de": "das Kino"
            },
            {
              "en": "busy",
              "de": "beschäftigt"
            }
          ],
          "words": [
            "core.a2u4.sure",
            "core.a2u4.promise",
            "core.a2u4.meeting",
            "core.a2u4.cinema",
            "core.a2u4.busy"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wir gehen am Wochenende ins Kino.",
          "answer": "We are going to the cinema this weekend.",
          "distractors": [
            "on",
            "later",
            "bring"
          ],
          "words": [
            "core.a2u4.be-going-to",
            "core.a2u4.cinema",
            "core.a2u4.this-weekend"
          ]
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "We have a ___ for the weekend.",
          "accepted": [
            "plan"
          ],
          "hint": "Plan",
          "translation": "Wir haben einen Plan für das Wochenende.",
          "words": [
            "core.a2u4.plan"
          ]
        },
        {
          "id": "e10",
          "type": "speak",
          "text": "I am going to visit my aunt this weekend.",
          "translation": "Ich habe vor, dieses Wochenende meine Tante zu besuchen.",
          "words": [
            "core.a2u4.be-going-to",
            "core.a2u4.visit",
            "core.a2u4.this-weekend"
          ]
        },
        {
          "id": "e11",
          "type": "listen-choice",
          "audio": "Sounds good. See you on Monday.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Das klingt gut. Wir sehen uns am Montag.",
              "correct": true
            },
            {
              "text": "Das klingt schlecht. Wir sehen uns am Montag."
            },
            {
              "text": "Das klingt gut. Wir sehen uns am Freitag."
            }
          ],
          "words": [
            "core.a2u4.sounds-good",
            "core.a2u4.on-monday"
          ]
        },
        {
          "id": "e12",
          "type": "dialogue",
          "title": "Ein Kinoabend",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Are you free on Saturday?",
              "de": "Hast du am Samstag Zeit?"
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "Yes. Let's go to the cinema!",
              "de": "Ja. Lass uns ins Kino gehen!"
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Good idea. How about the film at three o'clock?",
              "de": "Gute Idee. Wie wäre es mit dem Film um drei Uhr?"
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "Sure. I will bring the tickets.",
              "de": "Klar. Ich bringe die Karten mit."
            }
          ],
          "question": "Was bringt Lisa mit?",
          "choices": [
            {
              "text": "Die Karten",
              "correct": true
            },
            {
              "text": "Das Essen"
            },
            {
              "text": "Die Stühle"
            }
          ],
          "words": [
            "core.a2u4.free",
            "core.a2u4.lets",
            "core.a2u4.cinema",
            "core.a2u4.good-idea",
            "core.a2u4.how-about",
            "core.a2u4.sure",
            "core.a2u4.will",
            "core.a2u4.bring",
            "core.a2u4.at-three"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.a2u4.be-going-to",
    "en": "be going to",
    "de": "vorhaben zu / werden",
    "pos": "phrase",
    "example": "I am going to visit my aunt.",
    "exampleDe": "Ich habe vor, meine Tante zu besuchen.",
    "altEn": [
      "am going to",
      "is going to",
      "are going to"
    ],
    "altDe": [
      "vorhaben zu",
      "werden"
    ],
    "note": "Für Pläne: am / is / are + going to + Grundform."
  },
  {
    "id": "core.a2u4.tomorrow",
    "en": "tomorrow",
    "de": "morgen",
    "pos": "adv",
    "example": "See you tomorrow.",
    "exampleDe": "Bis morgen.",
    "note": "Ohne at oder on davor: tomorrow, nicht on tomorrow."
  },
  {
    "id": "core.a2u4.plan",
    "en": "plan",
    "de": "der Plan / planen",
    "pos": "noun",
    "example": "We have a plan for the weekend.",
    "exampleDe": "Wir haben einen Plan für das Wochenende.",
    "altEn": [
      "plans"
    ],
    "altDe": [
      "Plan",
      "planen"
    ],
    "note": "Als Verb: to plan = planen."
  },
  {
    "id": "core.a2u4.visit",
    "en": "visit",
    "de": "besuchen",
    "pos": "verb",
    "example": "I visit my grandma on Sunday.",
    "exampleDe": "Ich besuche meine Oma am Sonntag.",
    "altDe": [
      "Besuch machen"
    ],
    "note": "Ohne to: I visit my aunt, nicht I visit to my aunt."
  },
  {
    "id": "core.a2u4.this-weekend",
    "en": "this weekend",
    "de": "an diesem Wochenende",
    "pos": "phrase",
    "example": "I am free this weekend.",
    "exampleDe": "Ich habe an diesem Wochenende Zeit.",
    "altDe": [
      "am Wochenende",
      "dieses Wochenende"
    ],
    "note": "Ohne on davor: this weekend, nicht on this weekend."
  },
  {
    "id": "core.a2u4.cinema",
    "en": "cinema",
    "de": "das Kino",
    "emoji": "🎬",
    "pos": "noun",
    "example": "We go to the cinema on Friday.",
    "exampleDe": "Wir gehen am Freitag ins Kino.",
    "altEn": [
      "movie theater"
    ],
    "altDe": [
      "Kino"
    ],
    "note": "US-Englisch: movie theater."
  },
  {
    "id": "core.a2u4.will",
    "en": "will",
    "de": "werde / wird (spontan)",
    "pos": "other",
    "example": "I will call you later.",
    "exampleDe": "Ich rufe dich später an.",
    "altDe": [
      "werde",
      "wird"
    ],
    "note": "Für spontane Entscheidungen und Versprechen. Danach immer die Grundform."
  },
  {
    "id": "core.a2u4.later",
    "en": "later",
    "de": "später",
    "pos": "adv",
    "example": "Let's talk later.",
    "exampleDe": "Lass uns später reden.",
    "altDe": [
      "nachher"
    ],
    "note": "Nicht mit latter (der Letztere) verwechseln."
  },
  {
    "id": "core.a2u4.call",
    "en": "call",
    "de": "anrufen",
    "emoji": "📞",
    "pos": "verb",
    "example": "Please call me tomorrow.",
    "exampleDe": "Bitte ruf mich morgen an.",
    "altDe": [
      "telefonieren"
    ],
    "note": "Ohne to: I will call you, nicht I will call to you."
  },
  {
    "id": "core.a2u4.bring",
    "en": "bring",
    "de": "mitbringen",
    "pos": "verb",
    "example": "Can you bring some chairs?",
    "exampleDe": "Kannst du ein paar Stühle mitbringen?",
    "altDe": [
      "bringen"
    ],
    "note": "Etwas zu dem Ort bringen, an dem du gerade bist oder hinkommst."
  },
  {
    "id": "core.a2u4.promise",
    "en": "promise",
    "de": "versprechen",
    "pos": "verb",
    "example": "I promise I will be there.",
    "exampleDe": "Ich verspreche, dass ich da bin.",
    "altDe": [
      "Versprechen",
      "das Versprechen"
    ],
    "note": "Als Nomen: a promise = ein Versprechen."
  },
  {
    "id": "core.a2u4.sure",
    "en": "sure",
    "de": "klar / sicher",
    "pos": "adj",
    "example": "Sure, I can help.",
    "exampleDe": "Klar, ich kann helfen.",
    "altDe": [
      "klar",
      "sicher",
      "natürlich"
    ],
    "note": "Als Antwort auf eine Bitte: Sure! = Klar!"
  },
  {
    "id": "core.a2u4.appointment",
    "en": "appointment",
    "de": "der Termin",
    "emoji": "📅",
    "pos": "noun",
    "example": "I have an appointment at three.",
    "exampleDe": "Ich habe um drei einen Termin.",
    "altEn": [
      "an appointment"
    ],
    "altDe": [
      "Termin"
    ],
    "note": "Für feste Termine, z.B. beim Arzt. Für Treffen mit Freunden eher meeting."
  },
  {
    "id": "core.a2u4.meeting",
    "en": "meeting",
    "de": "das Treffen / die Besprechung",
    "emoji": "🤝",
    "pos": "noun",
    "example": "The meeting starts at nine.",
    "exampleDe": "Die Besprechung beginnt um neun.",
    "altEn": [
      "a meeting"
    ],
    "altDe": [
      "Treffen",
      "Besprechung",
      "Meeting"
    ],
    "note": "Auch für ein privates Treffen gebräuchlich."
  },
  {
    "id": "core.a2u4.free",
    "en": "free",
    "de": "frei / Zeit haben",
    "pos": "adj",
    "example": "Are you free tomorrow?",
    "exampleDe": "Hast du morgen Zeit?",
    "altDe": [
      "frei",
      "Zeit haben"
    ],
    "note": "Bedeutet auch kostenlos: free entry."
  },
  {
    "id": "core.a2u4.busy",
    "en": "busy",
    "de": "beschäftigt / keine Zeit",
    "pos": "adj",
    "example": "Sorry, I am busy today.",
    "exampleDe": "Tut mir leid, ich habe heute keine Zeit.",
    "altDe": [
      "beschäftigt",
      "keine Zeit"
    ],
    "note": "Das Gegenteil von free."
  },
  {
    "id": "core.a2u4.on-monday",
    "en": "on Monday",
    "de": "am Montag",
    "pos": "phrase",
    "example": "The party is on Monday.",
    "exampleDe": "Die Party ist am Montag.",
    "altDe": [
      "Montag"
    ],
    "note": "Wochentage immer mit on: on Monday, on Friday."
  },
  {
    "id": "core.a2u4.at-three",
    "en": "at three o'clock",
    "de": "um drei Uhr",
    "pos": "phrase",
    "example": "The class starts at three o'clock.",
    "exampleDe": "Der Kurs beginnt um drei Uhr.",
    "altEn": [
      "at 3 o'clock",
      "at three"
    ],
    "altDe": [
      "um drei",
      "um 3 Uhr",
      "um 15 Uhr"
    ],
    "note": "Uhrzeiten mit at: at ten, at half past six."
  },
  {
    "id": "core.a2u4.lets",
    "en": "Let's …",
    "de": "Lass uns … / Lasst uns …",
    "pos": "phrase",
    "example": "Let's go to the park.",
    "exampleDe": "Lass uns in den Park gehen.",
    "altEn": [
      "let us"
    ],
    "altDe": [
      "Lasst uns"
    ],
    "note": "Let's ist kurz für let us, danach die Grundform: Let's go."
  },
  {
    "id": "core.a2u4.how-about",
    "en": "How about …?",
    "de": "Wie wäre es mit …?",
    "pos": "phrase",
    "example": "How about a picnic?",
    "exampleDe": "Wie wäre es mit einem Picknick?",
    "altEn": [
      "What about …?"
    ],
    "altDe": [
      "Was hältst du von …?"
    ],
    "note": "Danach eine -ing-Form: How about going …?"
  },
  {
    "id": "core.a2u4.sounds-good",
    "en": "That sounds good.",
    "de": "Das klingt gut.",
    "pos": "phrase",
    "example": "Friday? That sounds good.",
    "exampleDe": "Freitag? Das klingt gut.",
    "altEn": [
      "Sounds good.",
      "That sounds great."
    ],
    "altDe": [
      "Klingt gut.",
      "Das hört sich gut an."
    ],
    "note": "Typische Zustimmung zu einem Vorschlag."
  },
  {
    "id": "core.a2u4.good-idea",
    "en": "good idea",
    "de": "gute Idee",
    "pos": "phrase",
    "example": "Good idea! Let's do it.",
    "exampleDe": "Gute Idee! Machen wir es.",
    "altEn": [
      "great idea",
      "nice idea"
    ],
    "altDe": [
      "Super Idee",
      "Prima Idee"
    ],
    "note": "Mit a davor: a good idea."
  },
  {
    "id": "core.a2u4.picnic",
    "en": "picnic",
    "de": "das Picknick",
    "emoji": "🧺",
    "pos": "noun",
    "example": "We have a picnic in the park.",
    "exampleDe": "Wir machen ein Picknick im Park.",
    "altEn": [
      "a picnic"
    ],
    "altDe": [
      "Picknick"
    ],
    "note": "Man sagt: have a picnic oder go on a picnic."
  }
]
