// Generiert von scripts/gen-drafts.ts aus content-drafts/core.b2u1.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.b2u1",
  "title": "Diskutieren",
  "description": "Argumentieren, abwägen und überzeugen.",
  "cefr": "B2",
  "color": "red",
  "icon": "⚖️",
  "topics": [
    "Argumente",
    "Einschränkungen",
    "Linking Words",
    "Überzeugen"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "although, despite, however",
      "text": "Nach although folgt ein vollständiger Satz mit Subjekt und Verb. Nach despite (oder in spite of) folgt ein Nomen oder eine -ing-Form. However heißt „trotzdem“ oder „jedoch“, steht am Satzanfang und wird mit Komma abgetrennt.",
      "examples": [
        {
          "en": "Although it was late, we stayed.",
          "de": "Obwohl es spät war, sind wir geblieben."
        },
        {
          "en": "Despite the late hour, we stayed.",
          "de": "Trotz der späten Stunde sind wir geblieben."
        },
        {
          "en": "It was late. However, we stayed.",
          "de": "Es war spät. Trotzdem sind wir geblieben."
        }
      ]
    },
    {
      "title": "Meinung abschwächen",
      "text": "Mit I would argue that (ich würde argumentieren, dass) und to some extent (bis zu einem gewissen Grad) klingt eine Aussage höflicher als ein direktes „You are wrong“. Mit I concede that räumst du einen Punkt ein, ohne deine Position aufzugeben.",
      "examples": [
        {
          "en": "I would argue that the plan is reasonable.",
          "de": "Ich würde argumentieren, dass der Plan vernünftig ist."
        },
        {
          "en": "This is true to some extent.",
          "de": "Das stimmt bis zu einem gewissen Grad."
        },
        {
          "en": "I concede that the price is high.",
          "de": "Ich räume ein, dass der Preis hoch ist."
        }
      ]
    },
    {
      "title": "Linking Words am Satzanfang",
      "text": "Linking Words wie therefore, moreover oder on the other hand stehen meist nach einem Punkt und werden mit Komma abgetrennt. Ein Komma allein zwischen zwei vollständigen Sätzen reicht nicht.",
      "examples": [
        {
          "en": "It is cheap. Therefore, I buy it.",
          "de": "Es ist billig. Deshalb kaufe ich es."
        },
        {
          "en": "The hotel was expensive. Nevertheless, I liked it.",
          "de": "Das Hotel war teuer. Trotzdem hat es mir gefallen."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.b2u1.l1",
      "title": "Argumente",
      "description": "Eine Meinung begründen und Position beziehen",
      "introduces": [
        "core.b2u1.argument",
        "core.b2u1.evidence",
        "core.b2u1.reasonable",
        "core.b2u1.in-favour-of",
        "core.b2u1.i-would-argue-that"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u1.argument"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u1.evidence"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Wort bedeutet „der Beweis / die Belege“?",
          "choices": [
            {
              "text": "evidence",
              "correct": true
            },
            {
              "text": "agreement"
            },
            {
              "text": "mood"
            }
          ],
          "words": [
            "core.b2u1.evidence"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u1.reasonable"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Das ist ein vernünftiges Argument.",
          "answer": "That is a reasonable argument.",
          "distractors": [
            "unreasonable",
            "evidence",
            "an"
          ],
          "words": [
            "core.b2u1.reasonable",
            "core.b2u1.argument"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b2u1.in-favour-of"
        },
        {
          "id": "e07",
          "type": "match",
          "pairs": [
            {
              "en": "argument",
              "de": "Argument"
            },
            {
              "en": "evidence",
              "de": "Beleg / Beweis"
            },
            {
              "en": "reasonable",
              "de": "vernünftig"
            },
            {
              "en": "in favour of",
              "de": "für (etwas)"
            }
          ],
          "words": [
            "core.b2u1.argument",
            "core.b2u1.evidence",
            "core.b2u1.reasonable",
            "core.b2u1.in-favour-of"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b2u1.i-would-argue-that"
        },
        {
          "id": "e09",
          "type": "listen-choice",
          "audio": "I would argue that the evidence is weak.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich würde argumentieren, dass der Beleg schwach ist.",
              "correct": true
            },
            {
              "text": "Ich würde zustimmen, dass der Beleg stark ist."
            },
            {
              "text": "Ich würde zugeben, dass der Beleg schwach ist."
            }
          ],
          "words": [
            "core.b2u1.i-would-argue-that",
            "core.b2u1.evidence"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "Most people are ___ the plan, because it saves money.",
          "choices": [
            {
              "text": "in favour of",
              "correct": true
            },
            {
              "text": "against"
            },
            {
              "text": "reasonable"
            }
          ],
          "translation": "Die meisten Menschen sind für den Plan, weil er Geld spart.",
          "explanation": "in favour of = für. against = dagegen.",
          "words": [
            "core.b2u1.in-favour-of"
          ]
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "en-de",
          "prompt": "I would argue that the plan is reasonable.",
          "answer": "Ich würde argumentieren, dass der Plan vernünftig ist.",
          "distractors": [
            "Beweis",
            "unvernünftig",
            "bist"
          ],
          "words": [
            "core.b2u1.i-would-argue-that",
            "core.b2u1.reasonable"
          ]
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "Before you believe it, you need solid ___.",
          "accepted": [
            "evidence"
          ],
          "hint": "Belege",
          "translation": "Bevor du es glaubst, brauchst du handfeste Belege.",
          "words": [
            "core.b2u1.evidence"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "The argument is reasonable.",
          "translation": "Das Argument ist vernünftig.",
          "words": [
            "core.b2u1.argument",
            "core.b2u1.reasonable"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Zug oder Auto?",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Let's take the train. It is cheaper.",
              "de": "Lass uns den Zug nehmen. Er ist günstiger."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I would argue that the car is more reasonable. It is faster.",
              "de": "Ich würde argumentieren, dass das Auto vernünftiger ist. Es ist schneller."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "That is a fair point, but the train is more comfortable.",
              "de": "Das ist ein berechtigter Einwand, aber der Zug ist bequemer."
            }
          ],
          "question": "Wofür spricht Anna?",
          "choices": [
            {
              "text": "Für das Auto",
              "correct": true
            },
            {
              "text": "Für den Zug"
            },
            {
              "text": "Für das Fahrrad"
            }
          ],
          "words": [
            "core.b2u1.i-would-argue-that",
            "core.b2u1.reasonable"
          ]
        }
      ]
    },
    {
      "id": "core.b2u1.l2",
      "title": "Einschränkungen",
      "description": "Zugeben, dass es Gegenargumente gibt",
      "introduces": [
        "core.b2u1.although",
        "core.b2u1.despite",
        "core.b2u1.however",
        "core.b2u1.drawback",
        "core.b2u1.to-some-extent"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u1.although"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u1.despite"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welcher Satz ist richtig? (Obwohl es spät war, sind wir geblieben.)",
          "choices": [
            {
              "text": "Although it was late, we stayed.",
              "correct": true
            },
            {
              "text": "Despite it was late, we stayed."
            },
            {
              "text": "Despite of the late hour, we stayed."
            }
          ],
          "explanation": "although + Satz. despite + Nomen. Nie „despite of“.",
          "words": [
            "core.b2u1.although",
            "core.b2u1.despite"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u1.however"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Es war teuer. Trotzdem haben wir es gekauft.",
          "answer": "It was expensive. However, we bought it.",
          "distractors": [
            "Although",
            "despite",
            "cheap"
          ],
          "explanation": "However = trotzdem. Es steht am Satzanfang, mit Komma.",
          "words": [
            "core.b2u1.however"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b2u1.drawback"
        },
        {
          "id": "e07",
          "type": "match",
          "pairs": [
            {
              "en": "argument",
              "de": "Argument"
            },
            {
              "en": "although",
              "de": "obwohl"
            },
            {
              "en": "despite",
              "de": "trotz"
            },
            {
              "en": "drawback",
              "de": "Nachteil"
            },
            {
              "en": "however",
              "de": "jedoch"
            }
          ],
          "words": [
            "core.b2u1.argument",
            "core.b2u1.although",
            "core.b2u1.despite",
            "core.b2u1.drawback",
            "core.b2u1.however"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b2u1.to-some-extent"
        },
        {
          "id": "e09",
          "type": "listen-choice",
          "audio": "This is true to some extent.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Das stimmt bis zu einem gewissen Grad.",
              "correct": true
            },
            {
              "text": "Das stimmt vollkommen."
            },
            {
              "text": "Das ist eine gute Frage."
            }
          ],
          "words": [
            "core.b2u1.to-some-extent"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "The plan works, ___ it is expensive.",
          "choices": [
            {
              "text": "although",
              "correct": true
            },
            {
              "text": "despite"
            },
            {
              "text": "drawback"
            }
          ],
          "translation": "Der Plan funktioniert, obwohl er teuer ist.",
          "explanation": "although + Satz. despite braucht ein Nomen oder eine -ing-Form.",
          "words": [
            "core.b2u1.although",
            "core.b2u1.despite"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "The main ___ of the plan is the high cost.",
          "accepted": [
            "drawback",
            "disadvantage"
          ],
          "hint": "Nachteil",
          "translation": "Der größte Nachteil des Plans sind die hohen Kosten.",
          "words": [
            "core.b2u1.drawback"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "Despite the rain, we went for a walk.",
          "translation": "Trotz des Regens sind wir spazieren gegangen.",
          "words": [
            "core.b2u1.despite"
          ]
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Although it is expensive, the car is reasonable.",
          "answer": "Obwohl das Auto teuer ist, ist es vernünftig.",
          "distractors": [
            "Beweis",
            "Nachteil",
            "trotzdem"
          ],
          "words": [
            "core.b2u1.although",
            "core.b2u1.reasonable"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein neues Auto",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "This car is very fast, but it is expensive.",
              "de": "Dieses Auto ist sehr schnell, aber es ist teuer."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "True. Despite the price, I like it.",
              "de": "Stimmt. Trotz des Preises gefällt es mir."
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Do you think it is reasonable to buy it?",
              "de": "Findest du es vernünftig, es zu kaufen?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "To some extent. The main drawback is the cost.",
              "de": "Bis zu einem gewissen Grad. Der größte Nachteil sind die Kosten."
            }
          ],
          "question": "Was ist laut Mia der größte Nachteil?",
          "choices": [
            {
              "text": "Die Kosten",
              "correct": true
            },
            {
              "text": "Die Geschwindigkeit"
            },
            {
              "text": "Die Farbe"
            }
          ],
          "words": [
            "core.b2u1.despite",
            "core.b2u1.to-some-extent",
            "core.b2u1.drawback",
            "core.b2u1.reasonable"
          ]
        }
      ]
    },
    {
      "id": "core.b2u1.l3",
      "title": "Verbinden",
      "description": "Linking Words für einen logischen Aufbau",
      "introduces": [
        "core.b2u1.moreover",
        "core.b2u1.therefore",
        "core.b2u1.on-the-other-hand",
        "core.b2u1.nevertheless",
        "core.b2u1.consequence"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u1.moreover"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u1.therefore"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welcher Satz ist grammatisch korrekt?",
          "choices": [
            {
              "text": "It is cheap. Therefore, I buy it.",
              "correct": true
            },
            {
              "text": "Therefore it is cheap, I buy it."
            },
            {
              "text": "It is cheap, therefore I buying it."
            }
          ],
          "explanation": "Therefore steht nach einem Punkt und wird mit Komma abgetrennt.",
          "words": [
            "core.b2u1.therefore"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u1.on-the-other-hand"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Das Auto ist teuer. Andererseits ist es sehr sicher.",
          "answer": "The car is expensive. On the other hand, it is very safe.",
          "distractors": [
            "Moreover",
            "Despite",
            "consequence"
          ],
          "words": [
            "core.b2u1.on-the-other-hand"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b2u1.nevertheless"
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b2u1.consequence"
        },
        {
          "id": "e08",
          "type": "match",
          "pairs": [
            {
              "en": "moreover",
              "de": "außerdem"
            },
            {
              "en": "therefore",
              "de": "deshalb"
            },
            {
              "en": "on the other hand",
              "de": "andererseits"
            },
            {
              "en": "nevertheless",
              "de": "trotzdem"
            },
            {
              "en": "consequence",
              "de": "Folge"
            }
          ],
          "words": [
            "core.b2u1.moreover",
            "core.b2u1.therefore",
            "core.b2u1.on-the-other-hand",
            "core.b2u1.nevertheless",
            "core.b2u1.consequence"
          ]
        },
        {
          "id": "e09",
          "type": "listen-choice",
          "audio": "Nevertheless, the results were good.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Trotzdem waren die Ergebnisse gut.",
              "correct": true
            },
            {
              "text": "Deshalb waren die Ergebnisse gut."
            },
            {
              "text": "Außerdem waren die Ergebnisse schlecht."
            }
          ],
          "words": [
            "core.b2u1.nevertheless"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "The hotel was expensive. ___, it was very comfortable.",
          "choices": [
            {
              "text": "Nevertheless",
              "correct": true
            },
            {
              "text": "Therefore"
            },
            {
              "text": "consequence"
            }
          ],
          "translation": "Das Hotel war teuer. Trotzdem war es sehr komfortabel.",
          "explanation": "Nevertheless leitet einen Gegensatz ein. Therefore würde eine Folge ausdrücken.",
          "words": [
            "core.b2u1.nevertheless",
            "core.b2u1.therefore"
          ]
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "en-de",
          "prompt": "The bus is cheap. Moreover, it is fast.",
          "answer": "Der Bus ist günstig. Außerdem ist er schnell.",
          "distractors": [
            "Andererseits",
            "Trotzdem",
            "Folge"
          ],
          "words": [
            "core.b2u1.moreover"
          ]
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "The project was delayed. As a ___, the costs went up.",
          "accepted": [
            "consequence",
            "result"
          ],
          "hint": "Folge",
          "translation": "Das Projekt verzögerte sich. Als Folge stiegen die Kosten.",
          "words": [
            "core.b2u1.consequence"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "On the other hand, the hotel is very quiet.",
          "translation": "Andererseits ist das Hotel sehr ruhig.",
          "words": [
            "core.b2u1.on-the-other-hand"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein Hotel",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "The hotel is expensive. Nevertheless, I like it.",
              "de": "Das Hotel ist teuer. Trotzdem gefällt es mir."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I see. On the other hand, the rooms are very small.",
              "de": "Ich verstehe. Andererseits sind die Zimmer sehr klein."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "True. Moreover, the breakfast is excellent.",
              "de": "Stimmt. Außerdem ist das Frühstück ausgezeichnet."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Then I think it is a good choice.",
              "de": "Dann finde ich, es ist eine gute Wahl."
            }
          ],
          "question": "Was findet Sam am Hotel gut?",
          "choices": [
            {
              "text": "Das Frühstück",
              "correct": true
            },
            {
              "text": "Die Zimmer"
            },
            {
              "text": "Den Preis"
            }
          ],
          "words": [
            "core.b2u1.nevertheless",
            "core.b2u1.on-the-other-hand",
            "core.b2u1.moreover"
          ]
        }
      ]
    },
    {
      "id": "core.b2u1.l4",
      "title": "Überzeugen",
      "description": "Andere für deine Sicht gewinnen",
      "introduces": [
        "core.b2u1.convince",
        "core.b2u1.persuade",
        "core.b2u1.admit",
        "core.b2u1.concede",
        "core.b2u1.outweigh"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b2u1.convince"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b2u1.persuade"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Wort bedeutet „überreden“, also jemanden dazu bringen, etwas zu tun?",
          "choices": [
            {
              "text": "persuade",
              "correct": true
            },
            {
              "text": "admit"
            },
            {
              "text": "outweigh"
            }
          ],
          "words": [
            "core.b2u1.persuade"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b2u1.admit"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich gebe zu, dass du recht hast.",
          "answer": "I admit that you are right.",
          "accepted": [
            "I admit you are right."
          ],
          "distractors": [
            "wrong",
            "outweigh",
            "persuade"
          ],
          "words": [
            "core.b2u1.admit"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b2u1.concede"
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.b2u1.outweigh"
        },
        {
          "id": "e08",
          "type": "match",
          "pairs": [
            {
              "en": "convince",
              "de": "überzeugen"
            },
            {
              "en": "persuade",
              "de": "überreden"
            },
            {
              "en": "admit",
              "de": "zugeben"
            },
            {
              "en": "concede",
              "de": "einräumen"
            },
            {
              "en": "outweigh",
              "de": "überwiegen"
            }
          ],
          "words": [
            "core.b2u1.convince",
            "core.b2u1.persuade",
            "core.b2u1.admit",
            "core.b2u1.concede",
            "core.b2u1.outweigh"
          ]
        },
        {
          "id": "e09",
          "type": "listen-choice",
          "audio": "The costs outweigh the benefits.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Die Kosten überwiegen die Vorteile.",
              "correct": true
            },
            {
              "text": "Die Vorteile überwiegen die Kosten."
            },
            {
              "text": "Die Vorteile kosten viel."
            }
          ],
          "words": [
            "core.b2u1.outweigh"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "I could not ___ him that the plan would work.",
          "choices": [
            {
              "text": "convince",
              "correct": true
            },
            {
              "text": "admit"
            },
            {
              "text": "outweigh"
            }
          ],
          "translation": "Ich konnte ihn nicht davon überzeugen, dass der Plan funktioniert.",
          "explanation": "convince + that: jemanden von etwas überzeugen. persuade + to: jemanden zu etwas überreden.",
          "words": [
            "core.b2u1.convince"
          ]
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "en-de",
          "prompt": "She persuaded me to try the new café.",
          "answer": "Sie hat mich überredet, das neue Café auszuprobieren.",
          "distractors": [
            "einräumen",
            "Vorteile",
            "Kosten"
          ],
          "words": [
            "core.b2u1.persuade"
          ]
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "I have to ___ that you were right about the price.",
          "accepted": [
            "admit",
            "concede"
          ],
          "hint": "zugeben / einräumen",
          "translation": "Ich muss zugeben, dass du beim Preis recht hattest.",
          "words": [
            "core.b2u1.admit",
            "core.b2u1.concede"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "I have to admit that the view is stunning.",
          "translation": "Ich muss zugeben, dass die Aussicht atemberaubend ist.",
          "words": [
            "core.b2u1.admit"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Eine neue Software",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "We should switch to the new software. It saves time.",
              "de": "Wir sollten zur neuen Software wechseln. Sie spart Zeit."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "I admit it is useful, but the costs are too high.",
              "de": "Ich gebe zu, sie ist nützlich, aber die Kosten sind zu hoch."
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Can I persuade you to test it for one week?",
              "de": "Kann ich dich überreden, sie eine Woche lang zu testen?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Okay, you have convinced me that it is worth a try.",
              "de": "Okay, du hast mich davon überzeugt, dass es einen Versuch wert ist."
            }
          ],
          "question": "Wie entscheidet sich Mia am Ende?",
          "choices": [
            {
              "text": "Sie testet die Software eine Woche lang.",
              "correct": true
            },
            {
              "text": "Sie lehnt die Software ganz ab."
            },
            {
              "text": "Sie fragt nach dem Preis."
            }
          ],
          "words": [
            "core.b2u1.admit",
            "core.b2u1.persuade",
            "core.b2u1.convince"
          ]
        }
      ]
    },
    {
      "id": "core.b2u1.l5",
      "title": "Wiederholung",
      "description": "Alles aus Diskutieren",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Welches Wort bedeutet „der Nachteil“?",
          "choices": [
            {
              "text": "drawback",
              "correct": true
            },
            {
              "text": "in favour of"
            },
            {
              "text": "convince"
            }
          ],
          "words": [
            "core.b2u1.drawback",
            "core.b2u1.in-favour-of",
            "core.b2u1.convince"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "evidence",
              "de": "Beleg"
            },
            {
              "en": "although",
              "de": "obwohl"
            },
            {
              "en": "despite",
              "de": "trotz"
            },
            {
              "en": "moreover",
              "de": "außerdem"
            },
            {
              "en": "therefore",
              "de": "deshalb"
            }
          ],
          "words": [
            "core.b2u1.evidence",
            "core.b2u1.although",
            "core.b2u1.despite",
            "core.b2u1.moreover",
            "core.b2u1.therefore"
          ]
        },
        {
          "id": "e03",
          "type": "listen-choice",
          "audio": "I would argue that the plan is reasonable.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich würde argumentieren, dass der Plan vernünftig ist.",
              "correct": true
            },
            {
              "text": "Ich würde zugeben, dass der Plan unvernünftig ist."
            },
            {
              "text": "Der Plan ist teuer, aber vernünftig."
            }
          ],
          "words": [
            "core.b2u1.i-would-argue-that",
            "core.b2u1.reasonable"
          ]
        },
        {
          "id": "e04",
          "type": "fill",
          "sentence": "The bridge is old. ___, it is still safe.",
          "choices": [
            {
              "text": "Nevertheless",
              "correct": true
            },
            {
              "text": "Therefore"
            },
            {
              "text": "Despite"
            }
          ],
          "translation": "Die Brücke ist alt. Trotzdem ist sie noch sicher.",
          "explanation": "Nevertheless = trotzdem. Es leitet einen Gegensatz ein.",
          "words": [
            "core.b2u1.nevertheless"
          ]
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Obwohl der Preis hoch ist, lohnt es sich.",
          "answer": "Although the price is high, it is worth it.",
          "distractors": [
            "despite",
            "concede",
            "drawback"
          ],
          "words": [
            "core.b2u1.although"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "That is a fair ___, but I still disagree.",
          "accepted": [
            "argument",
            "point"
          ],
          "hint": "Argument / Punkt",
          "translation": "Das ist ein fairer Punkt, aber ich bin trotzdem nicht einverstanden.",
          "words": [
            "core.b2u1.argument"
          ]
        },
        {
          "id": "e07",
          "type": "listen-type",
          "audio": "As a consequence, the costs went up.",
          "translation": "Als Folge stiegen die Kosten.",
          "words": [
            "core.b2u1.consequence"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "I concede that the price is high.",
          "answer": "Ich räume ein, dass der Preis hoch ist.",
          "distractors": [
            "Folge",
            "trotzdem",
            "überwiegen"
          ],
          "words": [
            "core.b2u1.concede"
          ]
        },
        {
          "id": "e09",
          "type": "choice",
          "prompt": "Welcher Satz ist richtig?",
          "choices": [
            {
              "text": "Despite the heavy rain, we went outside.",
              "correct": true
            },
            {
              "text": "Despite it was raining, we went outside."
            },
            {
              "text": "Despite of the rain, we went outside."
            }
          ],
          "explanation": "despite + Nomen. despite + Satz ist falsch.",
          "words": [
            "core.b2u1.despite"
          ]
        },
        {
          "id": "e10",
          "type": "dialogue",
          "title": "Zug oder Auto?",
          "lines": [
            {
              "speaker": "a",
              "name": "Priya",
              "en": "I would argue that the train is the more reasonable choice.",
              "de": "Ich würde argumentieren, dass der Zug die vernünftigere Wahl ist."
            },
            {
              "speaker": "b",
              "name": "Omar",
              "en": "I admit it is cheap. However, the train is often late.",
              "de": "Ich gebe zu, er ist günstig. Jedoch hat der Zug oft Verspätung."
            },
            {
              "speaker": "a",
              "name": "Priya",
              "en": "True, but on the other hand, we can read on the train.",
              "de": "Stimmt, aber andererseits können wir im Zug lesen."
            },
            {
              "speaker": "b",
              "name": "Omar",
              "en": "You have almost persuaded me. Let's take the train.",
              "de": "Du hast mich fast überredet. Nehmen wir den Zug."
            }
          ],
          "question": "Wofür entscheiden sie sich?",
          "choices": [
            {
              "text": "Den Zug",
              "correct": true
            },
            {
              "text": "Das Auto"
            },
            {
              "text": "Den Bus"
            }
          ],
          "words": [
            "core.b2u1.i-would-argue-that",
            "core.b2u1.reasonable",
            "core.b2u1.admit",
            "core.b2u1.however",
            "core.b2u1.on-the-other-hand",
            "core.b2u1.persuade"
          ]
        },
        {
          "id": "e11",
          "type": "speak",
          "text": "Despite the costs, I would argue that it is worth it.",
          "translation": "Trotz der Kosten würde ich argumentieren, dass es sich lohnt.",
          "words": [
            "core.b2u1.despite",
            "core.b2u1.i-would-argue-that"
          ]
        },
        {
          "id": "e12",
          "type": "fill",
          "sentence": "The benefits ___ the costs.",
          "choices": [
            {
              "text": "outweigh",
              "correct": true
            },
            {
              "text": "persuade"
            },
            {
              "text": "admit"
            }
          ],
          "translation": "Die Vorteile überwiegen die Kosten.",
          "explanation": "outweigh = überwiegen. Die Vorteile sind das Subjekt.",
          "words": [
            "core.b2u1.outweigh"
          ]
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Das stimmt bis zu einem gewissen Grad.",
          "answer": "That is true to some extent.",
          "distractors": [
            "despite",
            "admit",
            "drawback"
          ],
          "words": [
            "core.b2u1.to-some-extent"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.b2u1.argument",
    "en": "argument",
    "de": "das Argument",
    "pos": "noun",
    "example": "That is a reasonable argument.",
    "exampleDe": "Das ist ein vernünftiges Argument.",
    "altDe": [
      "Argument"
    ],
    "note": "Ein sachliches Argument ist „a strong argument“ oder „a good argument“."
  },
  {
    "id": "core.b2u1.evidence",
    "en": "evidence",
    "de": "der Beweis / die Belege",
    "pos": "noun",
    "example": "There is no evidence for this claim.",
    "exampleDe": "Für diese Behauptung gibt es keine Belege.",
    "altDe": [
      "Beweis",
      "Belege",
      "Beweise"
    ],
    "note": "Unzählbar: kein „an evidence“. Ein Beleg heißt „a piece of evidence“."
  },
  {
    "id": "core.b2u1.reasonable",
    "en": "reasonable",
    "de": "vernünftig / angemessen",
    "pos": "adj",
    "example": "That is a reasonable price.",
    "exampleDe": "Das ist ein angemessener Preis.",
    "altDe": [
      "vernünftig",
      "angemessen",
      "plausibel"
    ],
    "note": "Nicht mit „realistic“ verwechseln. Reasonable heißt vernünftig oder angemessen."
  },
  {
    "id": "core.b2u1.in-favour-of",
    "en": "in favour of",
    "de": "für (etwas)",
    "pos": "phrase",
    "example": "Most people are in favour of the plan.",
    "exampleDe": "Die meisten Menschen sind für den Plan.",
    "altEn": [
      "in favor of"
    ],
    "altDe": [
      "dafür",
      "für"
    ],
    "note": "Gegenteil: „against“ (dagegen)."
  },
  {
    "id": "core.b2u1.i-would-argue-that",
    "en": "I would argue that",
    "de": "ich würde argumentieren, dass",
    "pos": "phrase",
    "example": "I would argue that the plan is reasonable.",
    "exampleDe": "Ich würde argumentieren, dass der Plan vernünftig ist.",
    "altEn": [
      "I'd argue that"
    ],
    "altDe": [
      "ich würde behaupten, dass"
    ],
    "note": "Abgeschwächte Meinung. Klingt höflicher als „You are wrong“."
  },
  {
    "id": "core.b2u1.although",
    "en": "although",
    "de": "obwohl",
    "pos": "other",
    "example": "Although it was late, we stayed.",
    "exampleDe": "Obwohl es spät war, sind wir geblieben.",
    "altDe": [
      "obgleich",
      "wenngleich"
    ],
    "note": "Nach although steht ein Satz mit Subjekt und Verb. Nicht „although … but“ im selben Satz."
  },
  {
    "id": "core.b2u1.despite",
    "en": "despite",
    "de": "trotz",
    "pos": "prep",
    "example": "Despite the rain, we went out.",
    "exampleDe": "Trotz des Regens sind wir rausgegangen.",
    "altEn": [
      "in spite of"
    ],
    "altDe": [
      "trotz"
    ],
    "note": "Danach ein Nomen oder eine -ing-Form: „despite the rain“. Nicht „despite it rained“."
  },
  {
    "id": "core.b2u1.however",
    "en": "however",
    "de": "jedoch / trotzdem",
    "pos": "adv",
    "example": "It was expensive. However, we bought it.",
    "exampleDe": "Es war teuer. Trotzdem haben wir es gekauft.",
    "altDe": [
      "jedoch",
      "trotzdem",
      "allerdings"
    ],
    "note": "Am Satzanfang mit Komma: „However, …“. Verbindet nicht zwei Sätze ohne Punkt."
  },
  {
    "id": "core.b2u1.drawback",
    "en": "drawback",
    "de": "der Nachteil",
    "pos": "noun",
    "example": "The main drawback is the cost.",
    "exampleDe": "Der größte Nachteil sind die Kosten.",
    "altEn": [
      "disadvantage"
    ],
    "altDe": [
      "Nachteil"
    ],
    "note": "Gegenteil: „advantage“ (Vorteil)."
  },
  {
    "id": "core.b2u1.to-some-extent",
    "en": "to some extent",
    "de": "bis zu einem gewissen Grad",
    "pos": "phrase",
    "example": "I agree to some extent.",
    "exampleDe": "Ich stimme bis zu einem gewissen Grad zu.",
    "altEn": [
      "to a certain extent"
    ],
    "altDe": [
      "teilweise",
      "in gewissem Maße"
    ],
    "note": "Schwächt eine Zustimmung ab. Gegenteil: „completely“ (völlig)."
  },
  {
    "id": "core.b2u1.moreover",
    "en": "moreover",
    "de": "außerdem",
    "pos": "adv",
    "example": "The bus is cheap. Moreover, it is fast.",
    "exampleDe": "Der Bus ist günstig. Außerdem ist er schnell.",
    "altEn": [
      "furthermore"
    ],
    "altDe": [
      "außerdem",
      "zudem",
      "darüber hinaus"
    ],
    "note": "Fügt einen weiteren Punkt hinzu. Steht nach einem Punkt, mit Komma."
  },
  {
    "id": "core.b2u1.nevertheless",
    "en": "nevertheless",
    "de": "trotzdem / dennoch",
    "pos": "adv",
    "example": "It was raining. Nevertheless, we went for a walk.",
    "exampleDe": "Es regnete. Trotzdem sind wir spazieren gegangen.",
    "altEn": [
      "nonetheless"
    ],
    "altDe": [
      "trotzdem",
      "dennoch"
    ],
    "note": "Formeller als „but“ oder „however“ im Alltag."
  },
  {
    "id": "core.b2u1.therefore",
    "en": "therefore",
    "de": "deshalb / daher",
    "pos": "adv",
    "example": "It is cheap. Therefore, I buy it.",
    "exampleDe": "Es ist billig. Deshalb kaufe ich es.",
    "altDe": [
      "deshalb",
      "daher",
      "folglich"
    ],
    "note": "Drückt eine Folge aus. Steht nach einem Punkt, mit Komma."
  },
  {
    "id": "core.b2u1.on-the-other-hand",
    "en": "on the other hand",
    "de": "andererseits",
    "pos": "phrase",
    "example": "It is expensive. On the other hand, it lasts for years.",
    "exampleDe": "Es ist teuer. Andererseits hält es jahrelang.",
    "altDe": [
      "andererseits",
      "auf der anderen Seite"
    ],
    "note": "Stellt eine Gegenposition vor."
  },
  {
    "id": "core.b2u1.consequence",
    "en": "consequence",
    "de": "die Folge",
    "pos": "noun",
    "example": "As a consequence, the costs went up.",
    "exampleDe": "Als Folge stiegen die Kosten.",
    "altDe": [
      "Folge",
      "Konsequenz"
    ],
    "note": "Feste Wendung: „as a consequence“ oder „as a result“ (infolgedessen)."
  },
  {
    "id": "core.b2u1.convince",
    "en": "convince",
    "de": "überzeugen",
    "pos": "verb",
    "example": "I could not convince him that the plan works.",
    "exampleDe": "Ich konnte ihn nicht davon überzeugen, dass der Plan funktioniert.",
    "altDe": [
      "überzeugen"
    ],
    "note": "„convince someone that …“: jemanden von etwas überzeugen. Mit „to“ sagt man „persuade“."
  },
  {
    "id": "core.b2u1.persuade",
    "en": "persuade",
    "de": "überreden",
    "pos": "verb",
    "example": "She persuaded me to try the new café.",
    "exampleDe": "Sie hat mich überredet, das neue Café auszuprobieren.",
    "altDe": [
      "überreden"
    ],
    "note": "„persuade someone to do something“: jemanden dazu bringen, etwas zu tun."
  },
  {
    "id": "core.b2u1.admit",
    "en": "admit",
    "de": "zugeben",
    "pos": "verb",
    "example": "I admit that I was wrong.",
    "exampleDe": "Ich gebe zu, dass ich mich geirrt habe.",
    "altDe": [
      "zugeben",
      "eingestehen"
    ],
    "note": "„admit that …“ für Fehler oder Tatsachen. Für einen Punkt im Streit eher „concede“."
  },
  {
    "id": "core.b2u1.concede",
    "en": "concede",
    "de": "einräumen",
    "pos": "verb",
    "example": "I concede that the price is high.",
    "exampleDe": "Ich räume ein, dass der Preis hoch ist.",
    "altDe": [
      "einräumen",
      "zugestehen"
    ],
    "note": "Einen Punkt in einer Diskussion einräumen, ohne die eigene Position aufzugeben."
  },
  {
    "id": "core.b2u1.outweigh",
    "en": "outweigh",
    "de": "überwiegen",
    "pos": "verb",
    "example": "The benefits outweigh the costs.",
    "exampleDe": "Die Vorteile überwiegen die Kosten.",
    "note": "Das Subjekt ist das Wichtigere: „The benefits outweigh the costs.“"
  }
]
