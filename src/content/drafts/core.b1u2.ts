// Generiert von scripts/gen-drafts.ts aus content-drafts/core.b1u2.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.b1u2",
  "title": "Arbeit & Alltag",
  "description": "Über deinen Job, Aufgaben und Kollegen sprechen.",
  "cefr": "B1",
  "color": "purple",
  "icon": "💼",
  "topics": [
    "Aufgaben beschreiben",
    "Meetings",
    "Höflich bitten",
    "Modalverben"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Modalverben: immer ohne -s",
      "text": "Modalverben wie can, could, must, should und would ändern sich nicht. Auch bei he, she und it steht kein -s dahinter, danach folgt die Grundform ohne to. have to ist kein Modalverb und bekommt bei he, she und it ein -s: has to.",
      "examples": [
        {
          "en": "She must leave now.",
          "de": "Sie muss jetzt gehen."
        },
        {
          "en": "He should call the manager.",
          "de": "Er sollte den Chef anrufen."
        },
        {
          "en": "She has to work on Monday.",
          "de": "Sie muss am Montag arbeiten."
        }
      ]
    },
    {
      "title": "must, have to und don't have to",
      "text": "must und have to heißen beide „müssen“. must klingt eher nach einer eigenen Verpflichtung, have to eher nach einer Regel von außen. Verneint bedeutet mustn't „nicht dürfen“ (Verbot), don't have to dagegen „nicht müssen“ (es ist nicht nötig).",
      "examples": [
        {
          "en": "You must sign the form.",
          "de": "Du musst das Formular unterschreiben."
        },
        {
          "en": "You mustn't smoke here.",
          "de": "Hier darfst du nicht rauchen."
        },
        {
          "en": "You don't have to come early.",
          "de": "Du musst nicht früh kommen."
        }
      ]
    },
    {
      "title": "Höflich bitten: could und would",
      "text": "Mit Could you …? oder Would you …? bittest du höflicher als mit Can you …?. Danach steht immer die Grundform des Verbs. Would you mind …? wird mit -ing fortgesetzt und heißt „Würde es dir etwas ausmachen, …?“.",
      "examples": [
        {
          "en": "Could you help me?",
          "de": "Könntest du mir helfen?"
        },
        {
          "en": "Would you mind sending me the file?",
          "de": "Würde es dir etwas ausmachen, mir die Datei zu schicken?"
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.b1u2.l1",
      "title": "Im Team",
      "description": "Kollegen, Chefs, Aufgaben und Verantwortung",
      "introduces": [
        "core.b1u2.colleague",
        "core.b1u2.manager",
        "core.b1u2.task",
        "core.b1u2.deadline",
        "core.b1u2.responsible",
        "core.b1u2.in-charge-of"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u2.colleague"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u2.manager"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „der Kollege / die Kollegin“?",
          "choices": [
            {
              "text": "colleague",
              "emoji": "🧑‍🤝‍🧑",
              "correct": true
            },
            {
              "text": "manager",
              "emoji": "👔"
            },
            {
              "text": "teacher",
              "emoji": "🧑‍🏫"
            }
          ],
          "words": [
            "core.b1u2.colleague",
            "core.b1u2.manager"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u2.task"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u2.deadline"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "colleague",
              "de": "Kollege"
            },
            {
              "en": "manager",
              "de": "Chef"
            },
            {
              "en": "task",
              "de": "Aufgabe"
            },
            {
              "en": "deadline",
              "de": "Frist"
            }
          ],
          "words": [
            "core.b1u2.colleague",
            "core.b1u2.manager",
            "core.b1u2.task",
            "core.b1u2.deadline"
          ]
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "My manager is very nice.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Mein Chef ist sehr nett.",
              "correct": true
            },
            {
              "text": "Mein Kollege ist sehr laut."
            },
            {
              "text": "Meine Mutter ist sehr nett."
            }
          ],
          "words": [
            "core.b1u2.manager"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b1u2.responsible"
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.b1u2.in-charge-of"
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Sie ist für das neue Projekt zuständig.",
          "answer": "She is in charge of the new project.",
          "accepted": [
            "She is responsible for the new project."
          ],
          "distractors": [
            "at",
            "on",
            "deadline"
          ],
          "explanation": "in charge of (zuständig für) steht immer mit of.",
          "words": [
            "core.b1u2.in-charge-of"
          ]
        },
        {
          "id": "e11",
          "type": "fill",
          "sentence": "I am responsible ___ the budget.",
          "choices": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "of"
            },
            {
              "text": "in"
            }
          ],
          "translation": "Ich bin für das Budget verantwortlich.",
          "explanation": "responsible steht immer mit for: responsible for …",
          "words": [
            "core.b1u2.responsible"
          ]
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "Please ask your ___ for help.",
          "accepted": [
            "manager",
            "boss"
          ],
          "hint": "Chef / Chefin",
          "translation": "Bitte frag deinen Chef um Hilfe.",
          "words": [
            "core.b1u2.manager"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "I am responsible for the budget.",
          "translation": "Ich bin für das Budget verantwortlich.",
          "words": [
            "core.b1u2.responsible"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "In der Kaffeeküche",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! Who is in charge of the new project?",
              "de": "Hi Anna! Wer ist für das neue Projekt zuständig?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Priya is. She is my manager.",
              "de": "Priya. Sie ist meine Chefin."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Oh no, the deadline is on Friday!",
              "de": "Oh nein, die Frist ist am Freitag!"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Don't worry. Ask Priya for help.",
              "de": "Keine Sorge. Frag Priya um Hilfe."
            }
          ],
          "question": "Wer ist für das neue Projekt zuständig?",
          "choices": [
            {
              "text": "Priya",
              "correct": true
            },
            {
              "text": "Sam"
            },
            {
              "text": "Anna"
            }
          ],
          "words": [
            "core.b1u2.in-charge-of",
            "core.b1u2.manager",
            "core.b1u2.deadline"
          ]
        }
      ]
    },
    {
      "id": "core.b1u2.l2",
      "title": "Meetings",
      "description": "Besprechungen, Tagesordnung und den aktuellen Stand erfragen",
      "introduces": [
        "core.b1u2.meeting",
        "core.b1u2.agenda",
        "core.b1u2.report",
        "core.b1u2.agree",
        "core.b1u2.suggest",
        "core.b1u2.update"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u2.meeting"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u2.agenda"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „das Meeting“?",
          "choices": [
            {
              "text": "meeting",
              "emoji": "🤝",
              "correct": true
            },
            {
              "text": "deadline",
              "emoji": "📆"
            },
            {
              "text": "task",
              "emoji": "📝"
            }
          ],
          "words": [
            "core.b1u2.meeting",
            "core.b1u2.deadline",
            "core.b1u2.task"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u2.report"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u2.agree"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "meeting",
              "de": "Besprechung"
            },
            {
              "en": "agenda",
              "de": "Tagesordnung"
            },
            {
              "en": "report",
              "de": "Bericht"
            },
            {
              "en": "agree",
              "de": "zustimmen"
            }
          ],
          "words": [
            "core.b1u2.meeting",
            "core.b1u2.agenda",
            "core.b1u2.report",
            "core.b1u2.agree"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b1u2.suggest"
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich schlage vor, uns am Montag zu treffen.",
          "answer": "I suggest meeting on Monday.",
          "accepted": [
            "I suggest that we meet on Monday."
          ],
          "distractors": [
            "agree",
            "at",
            "suggesting"
          ],
          "explanation": "Nach suggest steht die -ing-Form: suggest doing …",
          "words": [
            "core.b1u2.suggest",
            "core.b1u2.meeting"
          ]
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "I ___ with you.",
          "accepted": [
            "agree"
          ],
          "hint": "zustimmen",
          "translation": "Ich stimme dir zu.",
          "words": [
            "core.b1u2.agree"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "We have a ___ every Monday at ten.",
          "choices": [
            {
              "text": "meeting",
              "correct": true
            },
            {
              "text": "colleague"
            },
            {
              "text": "agree"
            }
          ],
          "translation": "Wir haben jeden Montag um zehn ein Meeting.",
          "explanation": "Nach a folgt ein Nomen: a meeting.",
          "words": [
            "core.b1u2.meeting"
          ]
        },
        {
          "id": "e11",
          "type": "intro",
          "word": "core.b1u2.update"
        },
        {
          "id": "e12",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "Can you give us an update?",
          "questionLang": "en",
          "choices": [
            {
              "text": "Kannst du uns den aktuellen Stand geben?",
              "correct": true
            },
            {
              "text": "Kannst du uns etwas zu essen bringen?"
            },
            {
              "text": "Kannst du uns den Weg zeigen?"
            }
          ],
          "words": [
            "core.b1u2.update"
          ]
        },
        {
          "id": "e13",
          "type": "listen-choice",
          "audio": "I agree with you.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich stimme dir zu.",
              "correct": true
            },
            {
              "text": "Ich brauche den Bericht."
            },
            {
              "text": "Ich habe keine Zeit."
            }
          ],
          "words": [
            "core.b1u2.agree"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Vor dem Meeting",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! Are you ready for the meeting?",
              "de": "Hi Anna! Bist du bereit für das Meeting?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Yes. Let's look at the agenda first.",
              "de": "Ja. Schauen wir uns zuerst die Tagesordnung an."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "I agree. Can you give us an update on the project?",
              "de": "Einverstanden. Kannst du uns den aktuellen Stand zum Projekt geben?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Sure. I will send you the report today.",
              "de": "Klar. Ich schicke dir heute den Bericht."
            }
          ],
          "question": "Wann bekommt Sam den Bericht?",
          "choices": [
            {
              "text": "Heute.",
              "correct": true
            },
            {
              "text": "Morgen."
            },
            {
              "text": "Am Freitag."
            }
          ],
          "words": [
            "core.b1u2.meeting",
            "core.b1u2.agenda",
            "core.b1u2.agree",
            "core.b1u2.update",
            "core.b1u2.report"
          ]
        }
      ]
    },
    {
      "id": "core.b1u2.l3",
      "title": "Höflich bitten",
      "description": "Gefallen erbitten, Verfügbarkeit klären und Termine verschieben",
      "introduces": [
        "core.b1u2.could",
        "core.b1u2.would",
        "core.b1u2.favour",
        "core.b1u2.available",
        "core.b1u2.urgent",
        "core.b1u2.reschedule"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u2.could"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u2.would"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "Could you help me?",
          "questionLang": "en",
          "choices": [
            {
              "text": "Könntest du mir helfen?",
              "correct": true
            },
            {
              "text": "Musst du mir helfen?"
            },
            {
              "text": "Hilfst du mir gerade?"
            }
          ],
          "words": [
            "core.b1u2.could"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u2.favour"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "could",
              "de": "könntest"
            },
            {
              "en": "would",
              "de": "würdest"
            },
            {
              "en": "favour",
              "de": "Gefallen"
            }
          ],
          "words": [
            "core.b1u2.could",
            "core.b1u2.would",
            "core.b1u2.favour"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b1u2.available"
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "Are you ___ on Thursday?",
          "choices": [
            {
              "text": "available",
              "correct": true
            },
            {
              "text": "urgent"
            },
            {
              "text": "favour"
            }
          ],
          "translation": "Bist du am Donnerstag verfügbar?",
          "explanation": "Are you available …? heißt: Hast du Zeit …?",
          "words": [
            "core.b1u2.available"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b1u2.urgent"
        },
        {
          "id": "e09",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "This is urgent.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Das ist dringend.",
              "correct": true
            },
            {
              "text": "Das ist teuer."
            },
            {
              "text": "Das ist lustig."
            }
          ],
          "words": [
            "core.b1u2.urgent"
          ]
        },
        {
          "id": "e10",
          "type": "listen-type",
          "audio": "Would you send me the file, please?",
          "translation": "Würdest du mir bitte die Datei schicken?",
          "accepted": [
            "Would you please send me the file?"
          ],
          "words": [
            "core.b1u2.would"
          ]
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Could you do me a favour?",
          "answer": "Könntest du mir einen Gefallen tun?",
          "accepted": [
            "Könnten Sie mir einen Gefallen tun?"
          ],
          "distractors": [
            "Musst",
            "Gestern",
            "Hilfst"
          ],
          "words": [
            "core.b1u2.could",
            "core.b1u2.favour"
          ]
        },
        {
          "id": "e12",
          "type": "intro",
          "word": "core.b1u2.reschedule"
        },
        {
          "id": "e13",
          "type": "listen-choice",
          "audio": "Can we reschedule the meeting?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Können wir das Meeting verschieben?",
              "correct": true
            },
            {
              "text": "Können wir das Meeting bezahlen?"
            },
            {
              "text": "Können wir das Meeting beginnen?"
            }
          ],
          "words": [
            "core.b1u2.reschedule"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Im Büro",
          "lines": [
            {
              "speaker": "a",
              "name": "Anna",
              "en": "Hi Ben, could you do me a favour?",
              "de": "Hi Ben, könntest du mir einen Gefallen tun?"
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "Sure. What do you need?",
              "de": "Klar. Was brauchst du?"
            },
            {
              "speaker": "a",
              "name": "Anna",
              "en": "Are you available on Thursday? It is urgent.",
              "de": "Bist du am Donnerstag verfügbar? Es ist dringend."
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "Sorry, I am busy. Can we reschedule?",
              "de": "Tut mir leid, ich bin beschäftigt. Können wir den Termin verschieben?"
            }
          ],
          "question": "Warum kann Ben am Donnerstag nicht?",
          "choices": [
            {
              "text": "Er ist beschäftigt.",
              "correct": true
            },
            {
              "text": "Er ist krank."
            },
            {
              "text": "Er ist im Urlaub."
            }
          ],
          "words": [
            "core.b1u2.could",
            "core.b1u2.favour",
            "core.b1u2.available",
            "core.b1u2.urgent",
            "core.b1u2.reschedule"
          ]
        }
      ]
    },
    {
      "id": "core.b1u2.l4",
      "title": "Pflichten & Regeln",
      "description": "Müssen, sollen und dürfen: Was ist Pflicht, was nicht?",
      "introduces": [
        "core.b1u2.must",
        "core.b1u2.have-to",
        "core.b1u2.should",
        "core.b1u2.must-not",
        "core.b1u2.dont-have-to"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u2.must"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u2.have-to"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "You must sign the form.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Du musst das Formular unterschreiben.",
              "correct": true
            },
            {
              "text": "Du hast das Formular unterschrieben."
            },
            {
              "text": "Du willst das Formular sehen."
            }
          ],
          "words": [
            "core.b1u2.must"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u2.should"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u2.must-not"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "must",
              "de": "müssen"
            },
            {
              "en": "should",
              "de": "sollte"
            },
            {
              "en": "mustn't",
              "de": "nicht dürfen"
            }
          ],
          "words": [
            "core.b1u2.must",
            "core.b1u2.should",
            "core.b1u2.must-not"
          ]
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "You mustn't smoke here.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Hier darfst du nicht rauchen.",
              "correct": true
            },
            {
              "text": "Hier musst du rauchen."
            },
            {
              "text": "Hier kannst du rauchen."
            }
          ],
          "words": [
            "core.b1u2.must-not"
          ]
        },
        {
          "id": "e08",
          "type": "fill",
          "sentence": "I ___ write a report today.",
          "choices": [
            {
              "text": "have to",
              "correct": true
            },
            {
              "text": "has to"
            },
            {
              "text": "have"
            }
          ],
          "translation": "Ich muss heute einen Bericht schreiben.",
          "explanation": "Bei I, you, we und they: have to. Bei he, she und it: has to.",
          "words": [
            "core.b1u2.have-to",
            "core.b1u2.report"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.b1u2.dont-have-to"
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Du musst nicht früh kommen.",
          "answer": "You don't have to come early.",
          "accepted": [
            "You do not have to come early."
          ],
          "distractors": [
            "mustn't",
            "should",
            "late"
          ],
          "explanation": "don't have to = nicht müssen. mustn't wäre verboten, das ist hier nicht gemeint.",
          "words": [
            "core.b1u2.dont-have-to"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "It is the rule: you ___ sign the form.",
          "accepted": [
            "must"
          ],
          "hint": "musst",
          "translation": "Das ist die Regel: Du musst das Formular unterschreiben.",
          "words": [
            "core.b1u2.must"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "You should check the deadline.",
          "translation": "Du solltest die Frist prüfen.",
          "words": [
            "core.b1u2.should",
            "core.b1u2.deadline"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "I have to finish the report by Friday.",
          "translation": "Ich muss den Bericht bis Freitag fertigstellen.",
          "words": [
            "core.b1u2.have-to",
            "core.b1u2.report"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Im Büro",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! I have to finish the report today.",
              "de": "Hi Anna! Ich muss heute den Bericht fertigstellen."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "You don't have to. The deadline is on Monday.",
              "de": "Du musst nicht. Die Frist ist am Montag."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Oh, good. Can I leave early today?",
              "de": "Oh, gut. Kann ich heute früher gehen?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Yes, but you mustn't forget the meeting at four.",
              "de": "Ja, aber du darfst das Meeting um vier nicht vergessen."
            }
          ],
          "question": "Was muss Sam heute nicht tun?",
          "choices": [
            {
              "text": "Den Bericht heute fertigstellen.",
              "correct": true
            },
            {
              "text": "Am Meeting um vier teilnehmen."
            },
            {
              "text": "Zum Chef gehen."
            }
          ],
          "words": [
            "core.b1u2.have-to",
            "core.b1u2.dont-have-to",
            "core.b1u2.deadline",
            "core.b1u2.must-not",
            "core.b1u2.meeting"
          ]
        }
      ]
    },
    {
      "id": "core.b1u2.l5",
      "title": "Wiederholung",
      "description": "Alle Wörter der Unit gemischt, ohne neue Wörter",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Welches Bild zeigt „die Aufgabe“?",
          "choices": [
            {
              "text": "task",
              "emoji": "📝",
              "correct": true
            },
            {
              "text": "meeting",
              "emoji": "🤝"
            },
            {
              "text": "report",
              "emoji": "📊"
            }
          ],
          "words": [
            "core.b1u2.task",
            "core.b1u2.meeting",
            "core.b1u2.report"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "agenda",
              "de": "Tagesordnung"
            },
            {
              "en": "available",
              "de": "verfügbar"
            },
            {
              "en": "urgent",
              "de": "dringend"
            },
            {
              "en": "reschedule",
              "de": "verschieben"
            },
            {
              "en": "responsible",
              "de": "verantwortlich"
            }
          ],
          "words": [
            "core.b1u2.agenda",
            "core.b1u2.available",
            "core.b1u2.urgent",
            "core.b1u2.reschedule",
            "core.b1u2.responsible"
          ]
        },
        {
          "id": "e03",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich bin für die Frist zuständig.",
          "answer": "I am in charge of the deadline.",
          "accepted": [
            "I am responsible for the deadline."
          ],
          "distractors": [
            "at",
            "agree",
            "report"
          ],
          "words": [
            "core.b1u2.in-charge-of",
            "core.b1u2.deadline",
            "core.b1u2.responsible"
          ]
        },
        {
          "id": "e04",
          "type": "listen-choice",
          "audio": "Could you send me the report today?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Könntest du mir heute den Bericht schicken?",
              "correct": true
            },
            {
              "text": "Musst du mir heute den Bericht schicken?"
            },
            {
              "text": "Hast du mir heute den Bericht geschickt?"
            }
          ],
          "words": [
            "core.b1u2.could",
            "core.b1u2.report"
          ]
        },
        {
          "id": "e05",
          "type": "fill",
          "sentence": "I totally ___ with you.",
          "choices": [
            {
              "text": "agree",
              "correct": true
            },
            {
              "text": "agenda"
            },
            {
              "text": "deadline"
            }
          ],
          "translation": "Ich stimme dir voll und ganz zu.",
          "words": [
            "core.b1u2.agree"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "Please give us an ___ on the project.",
          "accepted": [
            "update"
          ],
          "hint": "aktueller Stand",
          "translation": "Bitte gib uns einen aktuellen Stand zum Projekt.",
          "words": [
            "core.b1u2.update"
          ]
        },
        {
          "id": "e07",
          "type": "speak",
          "text": "We agree on the agenda.",
          "translation": "Wir einigen uns auf die Tagesordnung.",
          "words": [
            "core.b1u2.agree",
            "core.b1u2.agenda"
          ]
        },
        {
          "id": "e08",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "You mustn't park here.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Hier darfst du nicht parken.",
              "correct": true
            },
            {
              "text": "Hier musst du parken."
            },
            {
              "text": "Hier kannst du gerne parken."
            }
          ],
          "words": [
            "core.b1u2.must-not"
          ]
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "We ___ to be in the office at nine.",
          "choices": [
            {
              "text": "have",
              "correct": true
            },
            {
              "text": "has"
            },
            {
              "text": "must"
            }
          ],
          "translation": "Wir müssen um neun im Büro sein.",
          "explanation": "Bei we steht have to, nicht has to.",
          "words": [
            "core.b1u2.have-to"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Are you available on Monday?",
          "answer": "Bist du am Montag verfügbar?",
          "accepted": [
            "Sind Sie am Montag verfügbar?"
          ],
          "distractors": [
            "Musst",
            "gestern",
            "Bericht"
          ],
          "words": [
            "core.b1u2.available"
          ]
        },
        {
          "id": "e11",
          "type": "listen-type",
          "audio": "Let's agree on the agenda first.",
          "translation": "Einigen wir uns zuerst auf die Tagesordnung.",
          "accepted": [
            "Let us agree on the agenda first."
          ],
          "words": [
            "core.b1u2.agree",
            "core.b1u2.agenda"
          ]
        },
        {
          "id": "e12",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "Could you suggest a time?",
          "questionLang": "en",
          "choices": [
            {
              "text": "Könntest du eine Uhrzeit vorschlagen?",
              "correct": true
            },
            {
              "text": "Könntest du eine Uhrzeit vergessen?"
            },
            {
              "text": "Könntest du eine Uhrzeit bezahlen?"
            }
          ],
          "words": [
            "core.b1u2.could",
            "core.b1u2.suggest"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Im Meeting",
          "lines": [
            {
              "speaker": "a",
              "name": "Priya",
              "en": "Good morning, everyone. Here is the agenda.",
              "de": "Guten Morgen, alle zusammen. Hier ist die Tagesordnung."
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "Thanks. Can you give us an update on the project?",
              "de": "Danke. Kannst du uns den aktuellen Stand zum Projekt geben?"
            },
            {
              "speaker": "a",
              "name": "Priya",
              "en": "Sure. The report is ready, and I am in charge of it.",
              "de": "Klar. Der Bericht ist fertig, und ich bin dafür zuständig."
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "Great. Then we don't have to meet again this week.",
              "de": "Super. Dann müssen wir uns diese Woche nicht noch einmal treffen."
            }
          ],
          "question": "Wofür ist Priya zuständig?",
          "choices": [
            {
              "text": "Für den Bericht.",
              "correct": true
            },
            {
              "text": "Für die Urlaubsplanung."
            },
            {
              "text": "Für das Budget."
            }
          ],
          "words": [
            "core.b1u2.agenda",
            "core.b1u2.update",
            "core.b1u2.in-charge-of",
            "core.b1u2.report",
            "core.b1u2.dont-have-to"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.b1u2.colleague",
    "en": "colleague",
    "de": "der Kollege / die Kollegin",
    "emoji": "🧑‍🤝‍🧑",
    "pos": "noun",
    "example": "My colleague helps me with the reports.",
    "exampleDe": "Meine Kollegin hilft mir bei den Berichten.",
    "altEn": [
      "a colleague"
    ],
    "altDe": [
      "Kollege",
      "Kollegin",
      "der Kollege",
      "die Kollegin"
    ],
    "note": "Gemeint sind Menschen aus demselben Team oder Betrieb."
  },
  {
    "id": "core.b1u2.manager",
    "en": "manager",
    "de": "der Chef / die Chefin",
    "emoji": "👔",
    "pos": "noun",
    "example": "My manager is very nice.",
    "exampleDe": "Mein Chef ist sehr nett.",
    "altEn": [
      "a manager"
    ],
    "altDe": [
      "Chef",
      "Chefin",
      "Manager",
      "Managerin",
      "Vorgesetzter",
      "Vorgesetzte"
    ],
    "note": "Umgangssprachlich sagt man auch „boss“."
  },
  {
    "id": "core.b1u2.task",
    "en": "task",
    "de": "die Aufgabe",
    "emoji": "📝",
    "pos": "noun",
    "example": "My main task is to answer emails.",
    "exampleDe": "Meine Hauptaufgabe ist es, E-Mails zu beantworten.",
    "altDe": [
      "Aufgabe",
      "Arbeitsauftrag"
    ]
  },
  {
    "id": "core.b1u2.deadline",
    "en": "deadline",
    "de": "die Frist / der Abgabetermin",
    "emoji": "📆",
    "pos": "noun",
    "example": "The deadline is on Friday.",
    "exampleDe": "Die Frist ist am Freitag.",
    "altDe": [
      "Frist",
      "Abgabetermin",
      "Termin"
    ],
    "note": "Typisch im Job: to meet a deadline = eine Frist einhalten."
  },
  {
    "id": "core.b1u2.responsible",
    "en": "responsible",
    "de": "verantwortlich",
    "pos": "adj",
    "example": "I am responsible for the budget.",
    "exampleDe": "Ich bin für das Budget verantwortlich.",
    "altDe": [
      "zuständig"
    ],
    "note": "Immer mit for: responsible for …"
  },
  {
    "id": "core.b1u2.in-charge-of",
    "en": "in charge of",
    "de": "zuständig für",
    "pos": "phrase",
    "example": "She is in charge of the new project.",
    "exampleDe": "Sie ist für das neue Projekt zuständig.",
    "altEn": [
      "be in charge of"
    ],
    "altDe": [
      "verantwortlich für",
      "die Leitung haben"
    ],
    "note": "Gleiche Bedeutung wie „responsible for“, aber mit of."
  },
  {
    "id": "core.b1u2.meeting",
    "en": "meeting",
    "de": "das Meeting / die Besprechung",
    "emoji": "🤝",
    "pos": "noun",
    "example": "We have a meeting at ten.",
    "exampleDe": "Wir haben um zehn ein Meeting.",
    "altEn": [
      "a meeting"
    ],
    "altDe": [
      "Besprechung",
      "Meeting",
      "Sitzung"
    ],
    "note": "Auch für Termine mit Kunden: a meeting with a client."
  },
  {
    "id": "core.b1u2.agenda",
    "en": "agenda",
    "de": "die Tagesordnung",
    "pos": "noun",
    "example": "Let's look at the agenda first.",
    "exampleDe": "Schauen wir uns zuerst die Tagesordnung an.",
    "altDe": [
      "Tagesordnung"
    ],
    "note": "Im Deutschen heißt Agenda eher Programm oder Plan; im Meeting: Tagesordnung."
  },
  {
    "id": "core.b1u2.report",
    "en": "report",
    "de": "der Bericht",
    "emoji": "📊",
    "pos": "noun",
    "example": "I will send you the report today.",
    "exampleDe": "Ich schicke dir heute den Bericht.",
    "altEn": [
      "a report"
    ],
    "altDe": [
      "Bericht"
    ]
  },
  {
    "id": "core.b1u2.agree",
    "en": "agree",
    "de": "zustimmen / einverstanden sein",
    "pos": "verb",
    "example": "I agree with you.",
    "exampleDe": "Ich stimme dir zu.",
    "altEn": [
      "agree with"
    ],
    "altDe": [
      "zustimmen",
      "einverstanden sein",
      "einverstanden"
    ],
    "note": "Immer mit with: agree with someone."
  },
  {
    "id": "core.b1u2.suggest",
    "en": "suggest",
    "de": "vorschlagen",
    "pos": "verb",
    "example": "I suggest meeting on Monday.",
    "exampleDe": "Ich schlage vor, uns am Montag zu treffen.",
    "altDe": [
      "vorschlagen",
      "anregen"
    ],
    "note": "Nach suggest steht die -ing-Form: suggest doing …"
  },
  {
    "id": "core.b1u2.update",
    "en": "update",
    "de": "der aktuelle Stand / die Neuigkeiten",
    "pos": "noun",
    "example": "Can you give us an update?",
    "exampleDe": "Kannst du uns den aktuellen Stand geben?",
    "altEn": [
      "an update",
      "give an update"
    ],
    "altDe": [
      "aktueller Stand",
      "Neuigkeiten",
      "Information"
    ],
    "note": "Als Verb heißt to update: aktualisieren."
  },
  {
    "id": "core.b1u2.could",
    "en": "could",
    "de": "könntest / könnten",
    "pos": "verb",
    "example": "Could you send me the file?",
    "exampleDe": "Könntest du mir die Datei schicken?",
    "altDe": [
      "könntest du",
      "könnten Sie"
    ],
    "note": "Höflicher als „can“, wenn du um etwas bittest."
  },
  {
    "id": "core.b1u2.would",
    "en": "would",
    "de": "würdest / würden",
    "pos": "verb",
    "example": "Would you send me the file, please?",
    "exampleDe": "Würdest du mir bitte die Datei schicken?",
    "altDe": [
      "würdest du",
      "würden Sie"
    ],
    "note": "Would you mind …? = Würde es dir etwas ausmachen, …?"
  },
  {
    "id": "core.b1u2.favour",
    "en": "favour",
    "de": "der Gefallen",
    "pos": "noun",
    "example": "Could you do me a favour?",
    "exampleDe": "Könntest du mir einen Gefallen tun?",
    "altEn": [
      "favor",
      "a favour",
      "a favor"
    ],
    "altDe": [
      "Gefallen",
      "Gefälligkeit"
    ],
    "note": "Britisch „favour“, amerikanisch „favor“ – beides richtig."
  },
  {
    "id": "core.b1u2.available",
    "en": "available",
    "de": "verfügbar / erreichbar / frei",
    "pos": "adj",
    "example": "Are you available on Thursday?",
    "exampleDe": "Bist du am Donnerstag verfügbar?",
    "altDe": [
      "verfügbar",
      "erreichbar",
      "frei",
      "Zeit haben"
    ],
    "note": "Are you available …? heißt: Hast du Zeit …?"
  },
  {
    "id": "core.b1u2.reschedule",
    "en": "reschedule",
    "de": "verschieben (einen Termin)",
    "pos": "verb",
    "example": "Can we reschedule the meeting?",
    "exampleDe": "Können wir das Meeting verschieben?",
    "altDe": [
      "verschieben",
      "umlegen",
      "den Termin verschieben"
    ],
    "note": "Nur für Termine. Allgemein sagt man postpone."
  },
  {
    "id": "core.b1u2.urgent",
    "en": "urgent",
    "de": "dringend",
    "pos": "adj",
    "example": "This is urgent.",
    "exampleDe": "Das ist dringend.",
    "altDe": [
      "eilig"
    ],
    "note": "Das Adverb dazu heißt urgently."
  },
  {
    "id": "core.b1u2.must",
    "en": "must",
    "de": "müssen",
    "pos": "verb",
    "example": "You must sign the form.",
    "exampleDe": "Du musst das Formular unterschreiben.",
    "altDe": [
      "muss",
      "musst",
      "müssen"
    ],
    "note": "Nach must steht die Grundform ohne to: You must sign."
  },
  {
    "id": "core.b1u2.have-to",
    "en": "have to",
    "de": "müssen (Pflicht von außen)",
    "pos": "phrase",
    "example": "I have to write a report today.",
    "exampleDe": "Ich muss heute einen Bericht schreiben.",
    "altEn": [
      "has to"
    ],
    "altDe": [
      "müssen",
      "muss",
      "musst"
    ],
    "note": "he/she/it: has to. Verneint: don't have to."
  },
  {
    "id": "core.b1u2.should",
    "en": "should",
    "de": "sollte / sollten",
    "pos": "verb",
    "example": "You should check the deadline.",
    "exampleDe": "Du solltest die Frist prüfen.",
    "altDe": [
      "sollte",
      "solltest",
      "sollten"
    ],
    "note": "Ein Rat, keine Pflicht."
  },
  {
    "id": "core.b1u2.must-not",
    "en": "mustn't",
    "de": "nicht dürfen",
    "pos": "verb",
    "example": "You mustn't smoke here.",
    "exampleDe": "Hier darfst du nicht rauchen.",
    "altEn": [
      "must not"
    ],
    "altDe": [
      "nicht dürfen",
      "darfst nicht",
      "darf nicht"
    ],
    "note": "Verbot. Nicht verwechseln mit „don't have to“."
  },
  {
    "id": "core.b1u2.dont-have-to",
    "en": "don't have to",
    "de": "nicht müssen",
    "pos": "phrase",
    "example": "You don't have to come early.",
    "exampleDe": "Du musst nicht früh kommen.",
    "altEn": [
      "do not have to",
      "doesn't have to",
      "does not have to"
    ],
    "altDe": [
      "nicht müssen",
      "musst nicht",
      "brauchst nicht"
    ],
    "note": "Es ist nicht verboten, aber auch nicht nötig."
  }
]
