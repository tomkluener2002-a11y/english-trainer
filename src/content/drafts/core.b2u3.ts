// Generiert von scripts/gen-drafts.ts aus content-drafts/core.b2u3.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.b2u3",
  "title": "Was wäre, wenn …",
  "description": "Hypothesen und Konditionalsätze 2 und 3.",
  "cefr": "B2",
  "color": "yellow",
  "icon": "🔮",
  "topics": [
    "Second Conditional",
    "Third Conditional",
    "wish / if only",
    "Bedauern ausdrücken"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Second Conditional: Hypothesen über die Gegenwart",
      "text": "Für Dinge, die gerade nicht wahr oder unwahrscheinlich sind, gilt: if + Past Simple, would + Grundform. Bei to be steht im if-Satz meist „were“, auch bei I und he/she/it.",
      "examples": [
        {
          "en": "If I were rich, I would buy a boat.",
          "de": "Wenn ich reich wäre, würde ich ein Boot kaufen."
        },
        {
          "en": "If I had more time, I would learn Spanish.",
          "de": "Wenn ich mehr Zeit hätte, würde ich Spanisch lernen."
        }
      ]
    },
    {
      "title": "Third Conditional: Bedauern über die Vergangenheit",
      "text": "Für Dinge, die nicht passiert sind, gilt: if + had + Partizip II, would have + Partizip II. Der Satz beschreibt, was dann passiert wäre.",
      "examples": [
        {
          "en": "If I had studied harder, I would have passed the exam.",
          "de": "Wenn ich fleißiger gelernt hätte, hätte ich die Prüfung bestanden."
        },
        {
          "en": "If she had left earlier, she would have caught the train.",
          "de": "Wenn sie früher losgefahren wäre, hätte sie den Zug erwischt."
        }
      ]
    },
    {
      "title": "wish und if only: Wünsche",
      "text": "Wünsche über die Gegenwart: wish / if only + Past Simple (I wish I had). Wünsche über die Vergangenheit: wish / if only + had + Partizip II (I wish I had known). Nach wish steht nicht would, außer bei Gewohnheiten und Ärger.",
      "examples": [
        {
          "en": "I wish I had more time.",
          "de": "Ich wünschte, ich hätte mehr Zeit."
        },
        {
          "en": "I wish I had studied.",
          "de": "Ich wünschte, ich hätte gelernt."
        },
        {
          "en": "If only I had listened!",
          "de": "Hätte ich doch nur zugehört!"
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.b2u3.l1",
      "title": "Hypothesen",
      "description": "Was wäre, wenn …? Second Conditional",
      "introduces": [
        "core.b2u3.imagine",
        "core.b2u3.lottery",
        "core.b2u3.would",
        "core.b2u3.hypothetical",
        "core.b2u3.unlikely"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u3.imagine"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u3.lottery"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "Imagine you win the lottery.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Stell dir vor, du gewinnst im Lotto.",
              "correct": true
            },
            {
              "text": "Du hast gestern im Lotto verloren."
            },
            {
              "text": "Du kaufst morgen ein Lotterielos."
            }
          ],
          "explanation": "Imagine heißt „sich etwas vorstellen“. Damit beginnt oft eine Hypothese.",
          "words": [
            "core.b2u3.imagine"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u3.would"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b2u3.hypothetical"
        },
        {
          "id": "e06",
          "type": "fill",
          "sentence": "If I ___ taller, I would play basketball.",
          "choices": [
            {
              "text": "were",
              "correct": true
            },
            {
              "text": "am"
            },
            {
              "text": "would"
            }
          ],
          "translation": "Wenn ich größer wäre, würde ich Basketball spielen.",
          "explanation": "Second Conditional: if + Past Simple (were), would + Grundform. Im if-Satz steht nie would.",
          "words": [
            "core.b2u3.would",
            "core.tall"
          ]
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "If I had more time, I would learn Spanish.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wenn ich mehr Zeit hätte, würde ich Spanisch lernen.",
              "correct": true
            },
            {
              "text": "Wenn ich mehr Zeit habe, lerne ich Spanisch."
            },
            {
              "text": "Ich hatte viel Zeit und habe Spanisch gelernt."
            }
          ],
          "words": [
            "core.b2u3.would"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wenn ich Zeit hätte, würde ich dich besuchen.",
          "answer": "If I had the time, I would visit you.",
          "accepted": [
            "If I had time, I would visit you."
          ],
          "distractors": [
            "will",
            "am",
            "have"
          ],
          "explanation": "Hypothese in der Gegenwart: had (Past Simple) und would.",
          "words": [
            "core.b2u3.would"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.b2u3.unlikely"
        },
        {
          "id": "e10",
          "type": "match",
          "pairs": [
            {
              "en": "imagine",
              "de": "sich etwas vorstellen"
            },
            {
              "en": "lottery",
              "de": "die Lotterie"
            },
            {
              "en": "would",
              "de": "würde"
            },
            {
              "en": "hypothetical",
              "de": "hypothetisch"
            },
            {
              "en": "unlikely",
              "de": "unwahrscheinlich"
            }
          ],
          "words": [
            "core.b2u3.imagine",
            "core.b2u3.lottery",
            "core.b2u3.would",
            "core.b2u3.hypothetical",
            "core.b2u3.unlikely"
          ]
        },
        {
          "id": "e11",
          "type": "fill",
          "sentence": "If I had a boat, I ___ sail every day.",
          "choices": [
            {
              "text": "would",
              "correct": true
            },
            {
              "text": "will"
            },
            {
              "text": "am"
            }
          ],
          "translation": "Wenn ich ein Boot hätte, würde ich jeden Tag segeln.",
          "explanation": "Im Hauptsatz steht would. „will“ passt nur bei echten Plänen, nicht bei Hypothesen.",
          "words": [
            "core.b2u3.would"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "It is unlikely, but possible.",
          "translation": "Es ist unwahrscheinlich, aber möglich.",
          "words": [
            "core.b2u3.unlikely"
          ]
        },
        {
          "id": "e13",
          "type": "type",
          "sentence": "If we ___ the lottery, we would buy a boat.",
          "accepted": [
            "won"
          ],
          "hint": "gewinnen",
          "translation": "Wenn wir im Lotto gewinnen würden, würden wir ein Boot kaufen.",
          "words": [
            "core.b2u3.lottery",
            "core.b2u3.would"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein Lotto-Traum",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "What would you do if you won the lottery?",
              "de": "Was würdest du tun, wenn du im Lotto gewinnen würdest?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I would travel around the world. And you?",
              "de": "Ich würde um die Welt reisen. Und du?"
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "I would buy a small house by the sea.",
              "de": "Ich würde ein kleines Haus am Meer kaufen."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "That is unlikely, but I can dream!",
              "de": "Das ist unwahrscheinlich, aber man darf ja träumen!"
            }
          ],
          "question": "Was würde Sam mit dem Gewinn machen?",
          "choices": [
            {
              "text": "Ein Haus am Meer kaufen",
              "correct": true
            },
            {
              "text": "Um die Welt reisen"
            },
            {
              "text": "Ein Boot kaufen"
            }
          ],
          "words": [
            "core.b2u3.lottery",
            "core.b2u3.would",
            "core.b2u3.unlikely"
          ]
        }
      ]
    },
    {
      "id": "core.b2u3.l2",
      "title": "Vergangene Chancen",
      "description": "Was wäre gewesen, wenn …? Third Conditional",
      "introduces": [
        "core.b2u3.regret",
        "core.b2u3.exam",
        "core.b2u3.pass-an-exam",
        "core.b2u3.miss-out-on",
        "core.b2u3.opportunity"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u3.regret"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u3.exam"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „die Prüfung“?",
          "choices": [
            {
              "text": "exam",
              "emoji": "📝",
              "correct": true
            },
            {
              "text": "lottery",
              "emoji": "🎟️"
            },
            {
              "text": "holiday",
              "emoji": "🏖️"
            }
          ],
          "words": [
            "core.b2u3.exam",
            "core.b2u3.lottery"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u3.pass-an-exam"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b2u3.miss-out-on"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "regret",
              "de": "bereuen"
            },
            {
              "en": "exam",
              "de": "die Prüfung"
            },
            {
              "en": "pass an exam",
              "de": "eine Prüfung bestehen"
            },
            {
              "en": "miss out on",
              "de": "etwas verpassen"
            },
            {
              "en": "lottery",
              "de": "die Lotterie"
            }
          ],
          "words": [
            "core.b2u3.regret",
            "core.b2u3.exam",
            "core.b2u3.pass-an-exam",
            "core.b2u3.miss-out-on",
            "core.b2u3.lottery"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b2u3.opportunity"
        },
        {
          "id": "e08",
          "type": "fill",
          "sentence": "If I ___ harder, I would have passed the exam.",
          "choices": [
            {
              "text": "had studied",
              "correct": true
            },
            {
              "text": "studied"
            },
            {
              "text": "would have studied"
            }
          ],
          "translation": "Wenn ich fleißiger gelernt hätte, hätte ich die Prüfung bestanden.",
          "explanation": "Third Conditional: if + had + Partizip II, would have + Partizip II. Es geht um etwas, das nicht passiert ist.",
          "words": [
            "core.b2u3.exam",
            "core.b2u3.pass-an-exam"
          ]
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wenn ich früher gekommen wäre, hätte ich ihn gesehen.",
          "answer": "If I had arrived earlier, I would have seen him.",
          "distractors": [
            "will",
            "see",
            "did"
          ],
          "explanation": "Vergangenheit im if-Satz: had + Partizip II. Im Hauptsatz: would have + Partizip II."
        },
        {
          "id": "e10",
          "type": "listen-type",
          "audio": "I regret that I did not study.",
          "translation": "Ich bereue, dass ich nicht gelernt habe.",
          "words": [
            "core.b2u3.regret"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "If she had ___ the train, she would have been on time.",
          "accepted": [
            "caught"
          ],
          "hint": "erwischen",
          "translation": "Wenn sie den Zug erwischt hätte, wäre sie pünktlich gewesen."
        },
        {
          "id": "e12",
          "type": "speak",
          "text": "If I had known, I would have helped you.",
          "translation": "Wenn ich das gewusst hätte, hätte ich dir geholfen."
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Nach der Prüfung",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "I failed the exam. I really regret it.",
              "de": "Ich bin durchgefallen. Ich bereue es wirklich."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Why? Did you study?",
              "de": "Warum? Hast du gelernt?"
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "No, I did not. If I had studied, I would have passed.",
              "de": "Nein. Wenn ich gelernt hätte, hätte ich bestanden."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Well, you missed a great opportunity. Next time!",
              "de": "Tja, du hast eine große Chance verpasst. Nächstes Mal!"
            }
          ],
          "question": "Warum ist Sam durchgefallen?",
          "choices": [
            {
              "text": "Er hat nicht gelernt.",
              "correct": true
            },
            {
              "text": "Er hat den Zug verpasst."
            },
            {
              "text": "Die Prüfung war zu leicht."
            }
          ],
          "words": [
            "core.b2u3.exam",
            "core.b2u3.regret",
            "core.b2u3.opportunity"
          ]
        }
      ]
    },
    {
      "id": "core.b2u3.l3",
      "title": "Wünsche",
      "description": "Ich wünschte, … und wenn doch nur …",
      "introduces": [
        "core.b2u3.wish",
        "core.b2u3.if-only",
        "core.b2u3.fluent",
        "core.b2u3.homesick"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u3.wish"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u3.if-only"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I wish I had more time.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Ich wünschte, ich hätte mehr Zeit.",
              "correct": true
            },
            {
              "text": "Ich habe mehr Zeit, als ich brauche."
            },
            {
              "text": "Ich werde bald mehr Zeit haben."
            }
          ],
          "words": [
            "core.b2u3.wish"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u3.fluent"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b2u3.homesick"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "wish",
              "de": "sich wünschen"
            },
            {
              "en": "if only",
              "de": "wenn doch nur"
            },
            {
              "en": "fluent",
              "de": "fließend"
            },
            {
              "en": "homesick",
              "de": "heimwehkrank"
            },
            {
              "en": "regret",
              "de": "bereuen"
            }
          ],
          "words": [
            "core.b2u3.wish",
            "core.b2u3.if-only",
            "core.b2u3.fluent",
            "core.b2u3.homesick",
            "core.b2u3.regret"
          ]
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "I wish I ___ more time.",
          "choices": [
            {
              "text": "had",
              "correct": true
            },
            {
              "text": "have"
            },
            {
              "text": "will have"
            }
          ],
          "translation": "Ich wünschte, ich hätte mehr Zeit.",
          "explanation": "Nach wish steht die Vergangenheitsform, auch wenn es um die Gegenwart geht: I wish I had.",
          "words": [
            "core.b2u3.wish"
          ]
        },
        {
          "id": "e08",
          "type": "listen-choice",
          "audio": "If only I could speak French fluently.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wenn ich nur fließend Französisch sprechen könnte.",
              "correct": true
            },
            {
              "text": "Ich spreche fließend Französisch, und das ist gut."
            },
            {
              "text": "Ich habe Französisch fließend gelernt."
            }
          ],
          "words": [
            "core.b2u3.if-only",
            "core.b2u3.fluent"
          ]
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich wünschte, ich könnte fließend Spanisch sprechen.",
          "answer": "I wish I could speak Spanish fluently.",
          "distractors": [
            "can",
            "had",
            "spoken"
          ],
          "words": [
            "core.b2u3.wish",
            "core.b2u3.fluent"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "I feel ___ when I am far from my family.",
          "accepted": [
            "homesick"
          ],
          "hint": "heimwehkrank",
          "translation": "Ich habe Heimweh, wenn ich weit weg von meiner Familie bin.",
          "words": [
            "core.b2u3.homesick"
          ]
        },
        {
          "id": "e11",
          "type": "dialogue",
          "title": "Ein langer Tag",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "I am so tired. I wish I had more time to sleep.",
              "de": "Ich bin so müde. Ich wünschte, ich hätte mehr Zeit zum Schlafen."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Oh, if only I could take a day off!",
              "de": "Ach, wenn ich nur einen Tag frei nehmen könnte!"
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Are you homesick? You look sad.",
              "de": "Hast du Heimweh? Du siehst traurig aus."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "A little. I wish I were at home with my family.",
              "de": "Ein bisschen. Ich wünschte, ich wäre zu Hause bei meiner Familie."
            }
          ],
          "question": "Wie fühlt sich Mia?",
          "choices": [
            {
              "text": "Ein bisschen heimwehkrank",
              "correct": true
            },
            {
              "text": "Sehr glücklich und entspannt"
            },
            {
              "text": "Wütend auf Ben"
            }
          ],
          "words": [
            "core.b2u3.wish",
            "core.b2u3.if-only",
            "core.b2u3.homesick"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "If only I had a bit more energy.",
          "translation": "Wenn ich nur etwas mehr Energie hätte.",
          "words": [
            "core.b2u3.if-only"
          ]
        }
      ]
    },
    {
      "id": "core.b2u3.l4",
      "title": "Bedauern",
      "description": "Was hättest du anders machen sollen? Entschuldigen und Ratschläge geben",
      "introduces": [
        "core.b2u3.mistake",
        "core.b2u3.apologise",
        "core.b2u3.should-have",
        "core.b2u3.unfortunately",
        "core.b2u3.in-hindsight",
        "core.b2u3.if-i-were-you"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u3.mistake"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u3.apologise"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I am sorry. It was my mistake.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Es tut mir leid. Es war mein Fehler.",
              "correct": true
            },
            {
              "text": "Danke. Es war dein Erfolg."
            },
            {
              "text": "Keine Sorge, das war seine Idee."
            }
          ],
          "words": [
            "core.b2u3.mistake",
            "core.b2u3.apologise"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u3.should-have"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b2u3.unfortunately"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "mistake",
              "de": "der Fehler"
            },
            {
              "en": "apologise",
              "de": "sich entschuldigen"
            },
            {
              "en": "should have",
              "de": "hätte … sollen"
            },
            {
              "en": "unfortunately",
              "de": "leider"
            },
            {
              "en": "regret",
              "de": "bereuen"
            }
          ],
          "words": [
            "core.b2u3.mistake",
            "core.b2u3.apologise",
            "core.b2u3.should-have",
            "core.b2u3.unfortunately",
            "core.b2u3.regret"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b2u3.in-hindsight"
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b2u3.if-i-were-you"
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "I ___ called her earlier.",
          "choices": [
            {
              "text": "should have",
              "correct": true
            },
            {
              "text": "should"
            },
            {
              "text": "would"
            }
          ],
          "translation": "Ich hätte sie früher anrufen sollen.",
          "explanation": "should have + Partizip II: Bedauern oder Vorwurf über etwas, das nicht passiert ist.",
          "words": [
            "core.b2u3.should-have"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "In hindsight, I should have studied more.",
          "answer": "Im Nachhinein hätte ich mehr lernen sollen.",
          "distractors": [
            "Fehler",
            "heute",
            "weniger"
          ],
          "words": [
            "core.b2u3.in-hindsight",
            "core.b2u3.should-have"
          ]
        },
        {
          "id": "e11",
          "type": "fill",
          "sentence": "If I ___ you, I would apologise.",
          "choices": [
            {
              "text": "were",
              "correct": true
            },
            {
              "text": "am"
            },
            {
              "text": "have"
            }
          ],
          "translation": "An deiner Stelle würde ich mich entschuldigen.",
          "explanation": "if I were you = an deiner Stelle. Im Ratschlag steht immer „were“.",
          "words": [
            "core.b2u3.if-i-were-you",
            "core.b2u3.apologise"
          ]
        },
        {
          "id": "e12",
          "type": "listen-choice",
          "audio": "I should have listened to you.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich hätte auf dich hören sollen.",
              "correct": true
            },
            {
              "text": "Ich soll auf dich hören."
            },
            {
              "text": "Ich habe dir gerade zugehört."
            }
          ],
          "words": [
            "core.b2u3.should-have"
          ]
        },
        {
          "id": "e13",
          "type": "type",
          "sentence": "I'm sorry I didn't ___ to your party.",
          "accepted": [
            "come"
          ],
          "hint": "kommen",
          "translation": "Es tut mir leid, dass ich nicht zu deiner Party gekommen bin.",
          "words": [
            "core.b2u3.apologise"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein Missverständnis",
          "lines": [
            {
              "speaker": "a",
              "name": "Lisa",
              "en": "You missed the meeting yesterday. Everyone waited.",
              "de": "Du hast das Meeting gestern verpasst. Alle haben gewartet."
            },
            {
              "speaker": "b",
              "name": "Tom",
              "en": "I am sorry. My phone was off. Unfortunately, I did not read my messages.",
              "de": "Es tut mir leid. Mein Handy war aus. Leider habe ich meine Nachrichten nicht gelesen."
            },
            {
              "speaker": "a",
              "name": "Lisa",
              "en": "In hindsight, you should have called the office.",
              "de": "Im Nachhinein hättest du im Büro anrufen sollen."
            },
            {
              "speaker": "b",
              "name": "Tom",
              "en": "You are right. It was my mistake.",
              "de": "Du hast recht. Es war mein Fehler."
            }
          ],
          "question": "Was hat Tom verpasst?",
          "choices": [
            {
              "text": "Das Meeting",
              "correct": true
            },
            {
              "text": "Den Bus"
            },
            {
              "text": "Den Geburtstag"
            }
          ],
          "words": [
            "core.b2u3.mistake",
            "core.b2u3.unfortunately",
            "core.b2u3.should-have",
            "core.b2u3.in-hindsight"
          ]
        }
      ]
    },
    {
      "id": "core.b2u3.l5",
      "title": "Wiederholung",
      "description": "Alles aus Was wäre, wenn …",
      "exercises": [
        {
          "id": "e01",
          "type": "listen-choice",
          "audio": "If I had known, I would have helped you.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wenn ich das gewusst hätte, hätte ich dir geholfen.",
              "correct": true
            },
            {
              "text": "Wenn ich das wüsste, würde ich dir helfen."
            },
            {
              "text": "Ich wusste es nicht und habe dir nicht geholfen."
            }
          ],
          "words": [
            "core.b2u3.would"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "regret",
              "de": "bereuen"
            },
            {
              "en": "homesick",
              "de": "heimwehkrank"
            },
            {
              "en": "mistake",
              "de": "der Fehler"
            },
            {
              "en": "fluent",
              "de": "fließend"
            },
            {
              "en": "unlikely",
              "de": "unwahrscheinlich"
            }
          ],
          "words": [
            "core.b2u3.regret",
            "core.b2u3.homesick",
            "core.b2u3.mistake",
            "core.b2u3.fluent",
            "core.b2u3.unlikely"
          ]
        },
        {
          "id": "e03",
          "type": "fill",
          "sentence": "If she ___ earlier, she would have caught the train.",
          "choices": [
            {
              "text": "had left",
              "correct": true
            },
            {
              "text": "left"
            },
            {
              "text": "would have left"
            }
          ],
          "translation": "Wenn sie früher losgefahren wäre, hätte sie den Zug erwischt.",
          "explanation": "Third Conditional: if + had + Partizip II. Im Hauptsatz: would have + Partizip II."
        },
        {
          "id": "e04",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wenn ich mehr Zeit hätte, würde ich öfter reisen.",
          "answer": "If I had more time, I would travel more often.",
          "distractors": [
            "will",
            "am",
            "has"
          ],
          "words": [
            "core.b2u3.would"
          ]
        },
        {
          "id": "e05",
          "type": "listen-type",
          "audio": "It is unlikely, but I would love to try.",
          "translation": "Es ist unwahrscheinlich, aber ich würde es gern versuchen.",
          "words": [
            "core.b2u3.unlikely",
            "core.b2u3.would"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "Don't ___ this opportunity!",
          "accepted": [
            "miss out on"
          ],
          "hint": "etwas verpassen",
          "translation": "Verpass diese Chance nicht!",
          "words": [
            "core.b2u3.miss-out-on",
            "core.b2u3.opportunity"
          ]
        },
        {
          "id": "e07",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I should have known better.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Ich hätte es besser wissen sollen.",
              "correct": true
            },
            {
              "text": "Ich weiß es besser als du."
            },
            {
              "text": "Ich kenne das schon gut."
            }
          ],
          "words": [
            "core.b2u3.should-have"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Unfortunately, the exam was difficult.",
          "answer": "Leider war die Prüfung schwer.",
          "distractors": [
            "Gewinn",
            "Lotterie",
            "Abend"
          ],
          "words": [
            "core.b2u3.unfortunately",
            "core.b2u3.exam"
          ]
        },
        {
          "id": "e09",
          "type": "dialogue",
          "title": "Ein Wochenende-Plan",
          "lines": [
            {
              "speaker": "a",
              "name": "Priya",
              "en": "What would you do with a free weekend?",
              "de": "Was würdest du mit einem freien Wochenende machen?"
            },
            {
              "speaker": "b",
              "name": "Omar",
              "en": "If I had the time, I would go hiking.",
              "de": "Wenn ich Zeit hätte, würde ich wandern gehen."
            },
            {
              "speaker": "a",
              "name": "Priya",
              "en": "Then why did you not go last week? You should have gone!",
              "de": "Warum bist du nicht letzte Woche gegangen? Du hättest gehen sollen!"
            },
            {
              "speaker": "b",
              "name": "Omar",
              "en": "You are right. I wish I had planned it earlier.",
              "de": "Du hast recht. Ich wünschte, ich hätte es früher geplant."
            }
          ],
          "question": "Was würde Omar gern tun?",
          "choices": [
            {
              "text": "Wandern gehen",
              "correct": true
            },
            {
              "text": "Im Lotto spielen"
            },
            {
              "text": "Eine Prüfung machen"
            }
          ],
          "words": [
            "core.b2u3.would",
            "core.b2u3.should-have",
            "core.b2u3.wish"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "___ I had more time!",
          "choices": [
            {
              "text": "If only",
              "correct": true
            },
            {
              "text": "Although"
            },
            {
              "text": "Unless"
            }
          ],
          "translation": "Wenn ich nur mehr Zeit hätte!",
          "explanation": "if only + Past Simple: starker Wunsch über die Gegenwart, wie wish.",
          "words": [
            "core.b2u3.if-only"
          ]
        },
        {
          "id": "e11",
          "type": "listen-choice",
          "audio": "Unfortunately, I am not fluent in French.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Leider spreche ich nicht fließend Französisch.",
              "correct": true
            },
            {
              "text": "Zum Glück spreche ich fließend Französisch."
            },
            {
              "text": "Ich spreche gern Französisch."
            }
          ],
          "words": [
            "core.b2u3.unfortunately",
            "core.b2u3.fluent"
          ]
        },
        {
          "id": "e12",
          "type": "speak",
          "text": "I should have started studying earlier.",
          "translation": "Ich hätte früher mit dem Lernen anfangen sollen.",
          "words": [
            "core.b2u3.should-have"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.b2u3.imagine",
    "en": "imagine",
    "de": "sich etwas vorstellen",
    "pos": "verb",
    "example": "Imagine you have a boat.",
    "exampleDe": "Stell dir vor, du hast ein Boot.",
    "altDe": [
      "vorstellen",
      "sich vorstellen"
    ],
    "note": "„Imagine …“ leitet oft eine Hypothese ein."
  },
  {
    "id": "core.b2u3.lottery",
    "en": "lottery",
    "de": "die Lotterie / das Lotto",
    "emoji": "🎟️",
    "pos": "noun",
    "example": "She won the lottery last year.",
    "exampleDe": "Sie hat letztes Jahr im Lotto gewonnen.",
    "altEn": [
      "the lottery"
    ],
    "altDe": [
      "Lotterie",
      "Lotto"
    ],
    "note": "Auf Englisch „lottery“ oder „the lottery“, nicht „lotto“ (das Wort meint eher das Spiel in Großbritannien)."
  },
  {
    "id": "core.b2u3.would",
    "en": "would",
    "de": "würde / würden",
    "pos": "other",
    "example": "I would travel more.",
    "exampleDe": "Ich würde öfter reisen.",
    "altDe": [
      "würde",
      "würden"
    ],
    "note": "Im Hauptsatz einer Hypothese: would + Grundform („would travel“). Nicht im if-Satz."
  },
  {
    "id": "core.b2u3.hypothetical",
    "en": "hypothetical",
    "de": "hypothetisch / angenommen",
    "pos": "adj",
    "example": "Let us look at a hypothetical case.",
    "exampleDe": "Schauen wir uns einen angenommenen Fall an.",
    "altDe": [
      "angenommen",
      "theoretisch"
    ],
    "note": "Beschreibt eine Situation, die nur gedacht ist und (noch) nicht passiert."
  },
  {
    "id": "core.b2u3.unlikely",
    "en": "unlikely",
    "de": "unwahrscheinlich",
    "pos": "adj",
    "example": "It is unlikely to rain today.",
    "exampleDe": "Es ist unwahrscheinlich, dass es heute regnet.",
    "altDe": [
      "unwahrscheinlich"
    ],
    "note": "Gegenteil: „likely“ (wahrscheinlich)."
  },
  {
    "id": "core.b2u3.regret",
    "en": "regret",
    "de": "bereuen / bedauern",
    "pos": "verb",
    "example": "I regret my decision.",
    "exampleDe": "Ich bereue meine Entscheidung.",
    "altDe": [
      "bereuen",
      "bedauern"
    ],
    "note": "„regret + -ing“ für etwas, das passiert ist: „I regret not studying.“"
  },
  {
    "id": "core.b2u3.exam",
    "en": "exam",
    "de": "die Prüfung",
    "emoji": "📝",
    "pos": "noun",
    "example": "The exam is on Friday.",
    "exampleDe": "Die Prüfung ist am Freitag.",
    "altEn": [
      "examination"
    ],
    "altDe": [
      "Prüfung",
      "Klausur"
    ],
    "note": "Eine Prüfung „bestehen“ = pass an exam; „durchfallen“ = fail an exam."
  },
  {
    "id": "core.b2u3.pass-an-exam",
    "en": "pass an exam",
    "de": "eine Prüfung bestehen",
    "pos": "phrase",
    "example": "I passed the exam on my second try.",
    "exampleDe": "Ich habe die Prüfung beim zweiten Versuch bestanden.",
    "altEn": [
      "pass the exam"
    ],
    "altDe": [
      "bestehen",
      "die Prüfung bestehen"
    ],
    "note": "„to pass“ allein heißt auch „vorbeigehen“. Für Prüfungen: „pass an exam“. Gegenteil: „fail an exam“."
  },
  {
    "id": "core.b2u3.miss-out-on",
    "en": "miss out on",
    "de": "etwas verpassen",
    "pos": "phrase",
    "example": "I missed out on the party.",
    "exampleDe": "Ich habe die Party verpasst.",
    "altEn": [
      "miss out on something"
    ],
    "altDe": [
      "verpassen"
    ],
    "note": "„miss“ allein heißt auch „vermissen“. Mit „out on“: etwas Schönes verpassen."
  },
  {
    "id": "core.b2u3.opportunity",
    "en": "opportunity",
    "de": "die Gelegenheit / die Chance",
    "pos": "noun",
    "example": "This is a great opportunity.",
    "exampleDe": "Das ist eine großartige Chance.",
    "altEn": [
      "chance"
    ],
    "altDe": [
      "Gelegenheit",
      "Chance",
      "Möglichkeit"
    ],
    "note": "Oft mit „a great / good / rare opportunity“."
  },
  {
    "id": "core.b2u3.wish",
    "en": "wish",
    "de": "sich wünschen",
    "pos": "verb",
    "example": "I wish I had a bigger flat.",
    "exampleDe": "Ich wünschte, ich hätte eine größere Wohnung.",
    "altDe": [
      "wünschen",
      "sich wünschen"
    ],
    "note": "Gegenwart: „I wish I had“. Vergangenheit: „I wish I had known“."
  },
  {
    "id": "core.b2u3.if-only",
    "en": "if only",
    "de": "wenn doch nur / hätte ich doch nur",
    "pos": "phrase",
    "example": "If only I had listened!",
    "exampleDe": "Hätte ich doch nur zugehört!",
    "altDe": [
      "wenn doch nur",
      "hätte ich doch nur"
    ],
    "note": "Stärker und emotionaler als „I wish“. Oft mit Ausrufezeichen."
  },
  {
    "id": "core.b2u3.fluent",
    "en": "fluent",
    "de": "fließend",
    "pos": "adj",
    "example": "She is fluent in three languages.",
    "exampleDe": "Sie spricht drei Sprachen fließend.",
    "altDe": [
      "fließend",
      "flüssig"
    ],
    "note": "Immer mit „in“: „fluent in English“. Adverb: „fluently“."
  },
  {
    "id": "core.b2u3.homesick",
    "en": "homesick",
    "de": "heimwehkrank",
    "pos": "adj",
    "example": "He gets homesick when he travels.",
    "exampleDe": "Er bekommt Heimweh, wenn er reist.",
    "altDe": [
      "heimwehkrank",
      "Heimweh"
    ],
    "note": "Das Gefühl selbst heißt „homesickness“ (Heimweh)."
  },
  {
    "id": "core.b2u3.mistake",
    "en": "mistake",
    "de": "der Fehler",
    "pos": "noun",
    "example": "Everyone makes mistakes.",
    "exampleDe": "Jeder macht Fehler.",
    "altDe": [
      "Fehler",
      "Irrtum"
    ],
    "note": "„make a mistake“ (einen Fehler machen), nicht „do a mistake“."
  },
  {
    "id": "core.b2u3.apologise",
    "en": "apologise",
    "de": "sich entschuldigen",
    "pos": "verb",
    "example": "I apologise for the delay.",
    "exampleDe": "Ich entschuldige mich für die Verspätung.",
    "altEn": [
      "apologize"
    ],
    "altDe": [
      "sich entschuldigen",
      "um Entschuldigung bitten"
    ],
    "note": "Mit „for“: sich wofür entschuldigen. Die Form „sorry“ ist im Alltag lockerer."
  },
  {
    "id": "core.b2u3.should-have",
    "en": "should have",
    "de": "hätte … sollen",
    "pos": "phrase",
    "example": "You should have called me.",
    "exampleDe": "Du hättest mich anrufen sollen.",
    "altDe": [
      "hätte sollen",
      "hätte besser"
    ],
    "note": "Bedauern oder Vorwurf über die Vergangenheit: should have + Partizip II."
  },
  {
    "id": "core.b2u3.unfortunately",
    "en": "unfortunately",
    "de": "leider",
    "pos": "adv",
    "example": "Unfortunately, the shop is closed.",
    "exampleDe": "Leider ist der Laden geschlossen.",
    "altDe": [
      "leider"
    ],
    "note": "Am Satzanfang mit Komma. Kündigt eine schlechte Nachricht höflich an."
  },
  {
    "id": "core.b2u3.in-hindsight",
    "en": "in hindsight",
    "de": "im Nachhinein / rückblickend",
    "pos": "phrase",
    "example": "In hindsight, the plan was a mistake.",
    "exampleDe": "Im Nachhinein war der Plan ein Fehler.",
    "altEn": [
      "with hindsight"
    ],
    "altDe": [
      "im Nachhinein",
      "rückblickend",
      "hinterher"
    ],
    "note": "Blick auf das Ergebnis. „Looking back“ ist eine Alternative."
  },
  {
    "id": "core.b2u3.if-i-were-you",
    "en": "if I were you",
    "de": "an deiner Stelle",
    "pos": "phrase",
    "example": "If I were you, I would apologise.",
    "exampleDe": "An deiner Stelle würde ich mich entschuldigen.",
    "altEn": [
      "if I was you"
    ],
    "altDe": [
      "an deiner Stelle",
      "an Ihrer Stelle"
    ],
    "note": "Um einen Rat zu geben. Standard ist „were“, auch bei I."
  }
]
