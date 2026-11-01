// Generiert von scripts/gen-drafts.ts aus content-drafts/core.a1u4.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.a1u4",
  "title": "Mein Tag",
  "description": "Uhrzeit, Wochentage und dein Tagesablauf im Present Simple.",
  "cefr": "A1",
  "color": "pink",
  "icon": "⏰",
  "topics": [
    "Uhrzeit",
    "Wochentage",
    "Tagesablauf",
    "Present Simple"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "at, on, in: Uhrzeit, Tage, Tageszeit",
      "text": "Vor einer Uhrzeit steht at (at seven), vor einem Wochentag on (on Monday). Tageszeiten brauchen in: in the morning (morgens), in the evening (abends). Nachts sagt man at night.",
      "examples": [
        {
          "en": "I get up at seven.",
          "de": "Ich stehe um sieben auf."
        },
        {
          "en": "We meet on Friday.",
          "de": "Wir treffen uns am Freitag."
        },
        {
          "en": "I work in the morning.",
          "de": "Ich arbeite morgens."
        }
      ]
    },
    {
      "title": "Present Simple: he/she/it bekommt -s",
      "text": "Bei I, you, we und they bleibt das Verb gleich (I work). Bei he, she und it kommt ein -s dazu (she gets up). Nach -sh, -ch, -ss und -o hängst du -es an: she finishes, he goes.",
      "examples": [
        {
          "en": "I work at nine.",
          "de": "Ich arbeite um neun."
        },
        {
          "en": "She gets up at seven.",
          "de": "Sie steht um sieben auf."
        },
        {
          "en": "He finishes at five.",
          "de": "Er hört um fünf auf."
        }
      ]
    },
    {
      "title": "Halb, Viertel vor und nach",
      "text": "Im Englischen nennt half past die Stunde, die schon begonnen hat: half past seven ist 7:30, also im Deutschen halb acht. quarter past heißt Viertel nach, quarter to heißt Viertel vor. Volle Stunden enden auf o'clock.",
      "examples": [
        {
          "en": "It is half past seven.",
          "de": "Es ist halb acht."
        },
        {
          "en": "It is quarter to eight.",
          "de": "Es ist Viertel vor acht."
        },
        {
          "en": "It is seven o'clock.",
          "de": "Es ist sieben Uhr."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.a1u4.l1",
      "title": "Uhrzeit",
      "description": "Wie spät ist es? Volle Stunden, Viertel und halbe Stunden.",
      "introduces": [
        "core.a1u4.what-time",
        "core.a1u4.oclock",
        "core.a1u4.half-past",
        "core.a1u4.quarter-past",
        "core.a1u4.quarter-to"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a1u4.what-time"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a1u4.oclock"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welche Frage heißt „Wie spät ist es?“",
          "choices": [
            {
              "text": "What time is it?",
              "correct": true
            },
            {
              "text": "What day is it?"
            },
            {
              "text": "Where is it?"
            }
          ],
          "words": [
            "core.a1u4.what-time"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a1u4.half-past"
        },
        {
          "id": "e05",
          "type": "choice",
          "prompt": "Welches Bild zeigt „sieben Uhr“?",
          "choices": [
            {
              "text": "seven o'clock",
              "emoji": "🕖",
              "correct": true
            },
            {
              "text": "nine o'clock",
              "emoji": "🕘"
            },
            {
              "text": "twelve o'clock",
              "emoji": "🕛"
            }
          ],
          "words": [
            "core.a1u4.oclock"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.a1u4.quarter-past"
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a1u4.quarter-to"
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "It is quarter past nine.",
          "answer": "Es ist Viertel nach neun.",
          "distractors": [
            "halb",
            "vor",
            "zehn"
          ],
          "explanation": "quarter past nine = 9:15, also Viertel nach neun.",
          "words": [
            "core.a1u4.quarter-past"
          ]
        },
        {
          "id": "e09",
          "type": "match",
          "pairs": [
            {
              "en": "What time is it?",
              "de": "Wie spät ist es?"
            },
            {
              "en": "o'clock",
              "de": "Uhr (volle Stunde)"
            },
            {
              "en": "half past",
              "de": "halb"
            },
            {
              "en": "quarter past",
              "de": "Viertel nach"
            },
            {
              "en": "quarter to",
              "de": "Viertel vor"
            }
          ],
          "words": [
            "core.a1u4.what-time",
            "core.a1u4.oclock",
            "core.a1u4.half-past",
            "core.a1u4.quarter-past",
            "core.a1u4.quarter-to"
          ]
        },
        {
          "id": "e10",
          "type": "listen-choice",
          "audio": "It is half past seven.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Es ist halb acht.",
              "correct": true
            },
            {
              "text": "Es ist halb sieben."
            },
            {
              "text": "Es ist sieben Uhr."
            }
          ],
          "words": [
            "core.a1u4.half-past"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "It is ___ past nine.",
          "accepted": [
            "quarter",
            "a quarter"
          ],
          "hint": "Viertel",
          "translation": "Es ist Viertel nach neun.",
          "words": [
            "core.a1u4.quarter-past"
          ]
        },
        {
          "id": "e12",
          "type": "fill",
          "sentence": "It is quarter ___ eight.",
          "choices": [
            {
              "text": "to",
              "correct": true
            },
            {
              "text": "past"
            },
            {
              "text": "at"
            }
          ],
          "translation": "Es ist Viertel vor acht.",
          "explanation": "quarter to = Viertel vor (7:45). quarter past eight wäre 8:15.",
          "words": [
            "core.a1u4.quarter-to"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "It is quarter to eight.",
          "translation": "Es ist Viertel vor acht.",
          "words": [
            "core.a1u4.quarter-to"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein Treffen",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! What time is it?",
              "de": "Hi Anna! Wie spät ist es?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "It is quarter to eight.",
              "de": "Es ist Viertel vor acht."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Oh no! Our meeting is at eight!",
              "de": "Oh nein! Unser Treffen ist um acht!"
            }
          ],
          "question": "Wann beginnt das Treffen?",
          "choices": [
            {
              "text": "Um acht Uhr",
              "correct": true
            },
            {
              "text": "Um Viertel vor acht"
            },
            {
              "text": "Um halb acht"
            }
          ],
          "words": [
            "core.a1u4.what-time",
            "core.a1u4.quarter-to",
            "core.a1u4.oclock"
          ]
        }
      ]
    },
    {
      "id": "core.a1u4.l2",
      "title": "Wochentage",
      "description": "Montag bis Samstag und Termine nennen mit on.",
      "introduces": [
        "core.a1u4.monday",
        "core.a1u4.tuesday",
        "core.a1u4.wednesday",
        "core.a1u4.thursday",
        "core.a1u4.friday",
        "core.a1u4.saturday"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a1u4.monday"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a1u4.tuesday"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welcher Wochentag ist „der Dienstag“?",
          "choices": [
            {
              "text": "tuesday",
              "correct": true
            },
            {
              "text": "monday"
            }
          ],
          "words": [
            "core.a1u4.tuesday",
            "core.a1u4.monday"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a1u4.wednesday"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a1u4.thursday"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "monday",
              "de": "Montag"
            },
            {
              "en": "tuesday",
              "de": "Dienstag"
            },
            {
              "en": "wednesday",
              "de": "Mittwoch"
            },
            {
              "en": "thursday",
              "de": "Donnerstag"
            }
          ],
          "words": [
            "core.a1u4.monday",
            "core.a1u4.tuesday",
            "core.a1u4.wednesday",
            "core.a1u4.thursday"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a1u4.friday"
        },
        {
          "id": "e08",
          "type": "listen-choice",
          "audio": "See you on Friday!",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Bis Freitag!",
              "correct": true
            },
            {
              "text": "Bis Donnerstag!"
            },
            {
              "text": "Bis Samstag!"
            }
          ],
          "words": [
            "core.a1u4.friday"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.a1u4.saturday"
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wir treffen uns am Mittwoch.",
          "answer": "We meet on Wednesday.",
          "distractors": [
            "at",
            "in",
            "is"
          ],
          "explanation": "Vor Wochentagen steht on: on Wednesday.",
          "words": [
            "core.a1u4.wednesday"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "I work on ___.",
          "accepted": [
            "Monday"
          ],
          "hint": "Montag",
          "translation": "Ich arbeite am Montag.",
          "words": [
            "core.a1u4.monday"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "We meet on Saturday.",
          "translation": "Wir treffen uns am Samstag.",
          "words": [
            "core.a1u4.saturday"
          ]
        },
        {
          "id": "e13",
          "type": "fill",
          "sentence": "We meet ___ Thursday.",
          "choices": [
            {
              "text": "on",
              "correct": true
            },
            {
              "text": "at"
            },
            {
              "text": "in"
            }
          ],
          "translation": "Wir treffen uns am Donnerstag.",
          "explanation": "Vor Wochentagen steht immer on, nie at oder in.",
          "words": [
            "core.a1u4.thursday"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Termin ausmachen",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Do you work on Friday?",
              "de": "Arbeitest du am Freitag?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "No, I do not. Let's meet on Saturday!",
              "de": "Nein, nicht. Lass uns am Samstag treffen!"
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Great, see you on Saturday!",
              "de": "Super, bis Samstag!"
            }
          ],
          "question": "Wann treffen sie sich?",
          "choices": [
            {
              "text": "Am Samstag",
              "correct": true
            },
            {
              "text": "Am Freitag"
            },
            {
              "text": "Am Montag"
            }
          ],
          "words": [
            "core.a1u4.friday",
            "core.a1u4.saturday"
          ]
        }
      ]
    },
    {
      "id": "core.a1u4.l3",
      "title": "Mein Tagesablauf",
      "description": "Aufstehen, frühstücken, zur Arbeit gehen und ins Bett.",
      "introduces": [
        "core.a1u4.get-up",
        "core.a1u4.have-breakfast",
        "core.a1u4.go-to-work",
        "core.a1u4.come-home",
        "core.a1u4.go-to-bed"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a1u4.get-up"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a1u4.have-breakfast"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet „get up“?",
          "choices": [
            {
              "text": "aufstehen",
              "correct": true
            },
            {
              "text": "frühstücken"
            },
            {
              "text": "ins Bett gehen"
            }
          ],
          "words": [
            "core.a1u4.get-up",
            "core.a1u4.have-breakfast"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a1u4.go-to-work"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a1u4.come-home"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "get up",
              "de": "aufstehen"
            },
            {
              "en": "have breakfast",
              "de": "frühstücken"
            },
            {
              "en": "go to work",
              "de": "zur Arbeit gehen"
            },
            {
              "en": "come home",
              "de": "nach Hause kommen"
            }
          ],
          "words": [
            "core.a1u4.get-up",
            "core.a1u4.have-breakfast",
            "core.a1u4.go-to-work",
            "core.a1u4.come-home"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a1u4.go-to-bed"
        },
        {
          "id": "e08",
          "type": "listen-choice",
          "audio": "I go to bed at ten.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich gehe um zehn ins Bett.",
              "correct": true
            },
            {
              "text": "Ich gehe um zehn zur Arbeit."
            },
            {
              "text": "Ich komme um zehn nach Hause."
            }
          ],
          "words": [
            "core.a1u4.go-to-bed"
          ]
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "en-de",
          "prompt": "I have breakfast at eight.",
          "answer": "Ich frühstücke um acht Uhr.",
          "accepted": [
            "Ich frühstücke um acht."
          ],
          "distractors": [
            "Bett",
            "zur",
            "Hause"
          ],
          "explanation": "have breakfast = frühstücken. Wörtlich „Frühstück haben“.",
          "words": [
            "core.a1u4.have-breakfast"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "I get ___ at seven.",
          "accepted": [
            "up"
          ],
          "hint": "auf",
          "translation": "Ich stehe um sieben auf.",
          "explanation": "get up: das up gehört immer dazu.",
          "words": [
            "core.a1u4.get-up"
          ]
        },
        {
          "id": "e11",
          "type": "fill",
          "sentence": "I go ___ work at half past eight.",
          "choices": [
            {
              "text": "to",
              "correct": true
            },
            {
              "text": "at"
            },
            {
              "text": "in"
            }
          ],
          "translation": "Ich gehe um halb neun zur Arbeit.",
          "explanation": "go to work – ohne the: nicht „to the work“.",
          "words": [
            "core.a1u4.go-to-work"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "I come home at six.",
          "translation": "Ich komme um sechs nach Hause.",
          "words": [
            "core.a1u4.come-home"
          ]
        },
        {
          "id": "e13",
          "type": "type",
          "sentence": "I ___ to bed at ten.",
          "accepted": [
            "go"
          ],
          "hint": "gehen",
          "translation": "Ich gehe um zehn ins Bett.",
          "words": [
            "core.a1u4.go-to-bed"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Mein Morgen",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! I get up at seven. And you?",
              "de": "Hi Anna! Ich stehe um sieben auf. Und du?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I get up at half past six. I have breakfast at seven.",
              "de": "Ich stehe um halb sieben auf. Ich frühstücke um sieben."
            }
          ],
          "question": "Wann frühstückt Anna?",
          "choices": [
            {
              "text": "Um sieben Uhr",
              "correct": true
            },
            {
              "text": "Um sechs Uhr"
            },
            {
              "text": "Um acht Uhr"
            }
          ],
          "words": [
            "core.a1u4.get-up",
            "core.a1u4.have-breakfast"
          ]
        }
      ]
    },
    {
      "id": "core.a1u4.l4",
      "title": "Arbeit & Wochenende",
      "description": "Wann fängt die Arbeit an, wann hört sie auf? Was machst du am Sonntag?",
      "introduces": [
        "core.a1u4.usually",
        "core.a1u4.start",
        "core.a1u4.finish",
        "core.a1u4.sunday",
        "core.a1u4.weekend"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a1u4.usually"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a1u4.start"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet „usually“?",
          "choices": [
            {
              "text": "normalerweise",
              "correct": true
            },
            {
              "text": "manchmal"
            },
            {
              "text": "nie"
            }
          ],
          "words": [
            "core.a1u4.usually"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a1u4.finish"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "usually",
              "de": "normalerweise"
            },
            {
              "en": "start",
              "de": "anfangen"
            },
            {
              "en": "finish",
              "de": "aufhören"
            },
            {
              "en": "get up",
              "de": "aufstehen"
            }
          ],
          "words": [
            "core.a1u4.usually",
            "core.a1u4.start",
            "core.a1u4.finish",
            "core.a1u4.get-up"
          ]
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "Work starts at nine.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Die Arbeit fängt um neun an.",
              "correct": true
            },
            {
              "text": "Die Arbeit endet um neun."
            },
            {
              "text": "Die Arbeit ist um neun vorbei."
            }
          ],
          "words": [
            "core.a1u4.start"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a1u4.sunday"
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a1u4.weekend"
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich arbeite am Wochenende.",
          "answer": "I work at the weekend.",
          "distractors": [
            "in",
            "to",
            "finish"
          ],
          "explanation": "Britisch sagt man at the weekend (amerikanisch on the weekend).",
          "words": [
            "core.a1u4.weekend"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "Work ___ at nine.",
          "choices": [
            {
              "text": "starts",
              "correct": true
            },
            {
              "text": "start"
            },
            {
              "text": "starting"
            }
          ],
          "translation": "Die Arbeit fängt um neun an.",
          "explanation": "Work ist wie es (it): Das Verb bekommt -s.",
          "words": [
            "core.a1u4.start"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "I ___ work at five.",
          "accepted": [
            "finish"
          ],
          "hint": "aufhören",
          "translation": "Ich höre um fünf mit der Arbeit auf.",
          "words": [
            "core.a1u4.finish"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "I usually get up at seven.",
          "translation": "Ich stehe normalerweise um sieben auf.",
          "words": [
            "core.a1u4.usually",
            "core.a1u4.get-up"
          ]
        },
        {
          "id": "e13",
          "type": "type",
          "sentence": "We usually meet on ___.",
          "accepted": [
            "Sunday"
          ],
          "hint": "Sonntag",
          "translation": "Wir treffen uns normalerweise am Sonntag.",
          "words": [
            "core.a1u4.sunday",
            "core.a1u4.usually"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Am Wochenende",
          "lines": [
            {
              "speaker": "a",
              "name": "Tom",
              "en": "Do you work at the weekend?",
              "de": "Arbeitest du am Wochenende?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "No. On Sunday I usually meet friends.",
              "de": "Nein. Am Sonntag treffe ich normalerweise Freunde."
            },
            {
              "speaker": "a",
              "name": "Tom",
              "en": "Nice! Have fun!",
              "de": "Schön! Viel Spaß!"
            }
          ],
          "question": "Wann trifft Mia normalerweise Freunde?",
          "choices": [
            {
              "text": "Am Sonntag",
              "correct": true
            },
            {
              "text": "Am Samstag"
            },
            {
              "text": "Am Montag"
            }
          ],
          "words": [
            "core.a1u4.weekend",
            "core.a1u4.sunday",
            "core.a1u4.usually"
          ]
        }
      ]
    },
    {
      "id": "core.a1u4.l5",
      "title": "Wiederholung",
      "description": "Alles aus Mein Tag, gemischt.",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Wie sagst du „Viertel vor neun“?",
          "choices": [
            {
              "text": "quarter to nine",
              "correct": true
            },
            {
              "text": "quarter past nine"
            },
            {
              "text": "half past nine"
            }
          ],
          "words": [
            "core.a1u4.quarter-to",
            "core.a1u4.quarter-past",
            "core.a1u4.half-past"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "monday",
              "de": "Montag"
            },
            {
              "en": "friday",
              "de": "Freitag"
            },
            {
              "en": "weekend",
              "de": "Wochenende"
            },
            {
              "en": "get up",
              "de": "aufstehen"
            },
            {
              "en": "come home",
              "de": "nach Hause kommen"
            }
          ],
          "words": [
            "core.a1u4.monday",
            "core.a1u4.friday",
            "core.a1u4.weekend",
            "core.a1u4.get-up",
            "core.a1u4.come-home"
          ]
        },
        {
          "id": "e03",
          "type": "listen-choice",
          "audio": "I finish work at five.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich höre um fünf mit der Arbeit auf.",
              "correct": true
            },
            {
              "text": "Ich fange um fünf mit der Arbeit an."
            },
            {
              "text": "Ich stehe um fünf auf."
            }
          ],
          "words": [
            "core.a1u4.finish"
          ]
        },
        {
          "id": "e04",
          "type": "fill",
          "sentence": "Let's meet ___ Monday.",
          "choices": [
            {
              "text": "on",
              "correct": true
            },
            {
              "text": "at"
            },
            {
              "text": "in"
            }
          ],
          "translation": "Lass uns am Montag treffen.",
          "words": [
            "core.a1u4.monday"
          ]
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "en-de",
          "prompt": "He starts work at nine.",
          "answer": "Er fängt um neun an.",
          "distractors": [
            "auf",
            "Bett",
            "zehn"
          ],
          "words": [
            "core.a1u4.start"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "I ___ breakfast at eight.",
          "accepted": [
            "have"
          ],
          "hint": "essen, haben",
          "translation": "Ich frühstücke um acht.",
          "words": [
            "core.a1u4.have-breakfast"
          ]
        },
        {
          "id": "e07",
          "type": "choice",
          "prompt": "Welche Antwort passt zu „What time is it?“",
          "choices": [
            {
              "text": "It is half past seven.",
              "correct": true
            },
            {
              "text": "It is Monday."
            },
            {
              "text": "I am a teacher."
            }
          ],
          "words": [
            "core.a1u4.what-time",
            "core.a1u4.half-past"
          ]
        },
        {
          "id": "e08",
          "type": "listen-type",
          "audio": "We meet on Thursday.",
          "translation": "Wir treffen uns am Donnerstag.",
          "words": [
            "core.a1u4.thursday"
          ]
        },
        {
          "id": "e09",
          "type": "speak",
          "text": "I come home at six and I go to bed at ten.",
          "translation": "Ich komme um sechs nach Hause und gehe um zehn ins Bett.",
          "words": [
            "core.a1u4.come-home",
            "core.a1u4.go-to-bed"
          ]
        },
        {
          "id": "e10",
          "type": "dialogue",
          "title": "Im Büro",
          "lines": [
            {
              "speaker": "a",
              "name": "Tom",
              "en": "What time is it?",
              "de": "Wie spät ist es?"
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "It is quarter to nine. I start work at nine.",
              "de": "Es ist Viertel vor neun. Ich fange um neun an."
            },
            {
              "speaker": "a",
              "name": "Tom",
              "en": "Oh no, I am late!",
              "de": "Oh nein, ich bin zu spät!"
            }
          ],
          "question": "Wann fängt Lisas Arbeit an?",
          "choices": [
            {
              "text": "Um neun Uhr",
              "correct": true
            },
            {
              "text": "Um acht Uhr"
            },
            {
              "text": "Um Viertel vor neun"
            }
          ],
          "words": [
            "core.a1u4.what-time",
            "core.a1u4.quarter-to",
            "core.a1u4.start"
          ]
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich komme am Freitag um sechs nach Hause.",
          "answer": "I come home at six on Friday.",
          "accepted": [
            "I come home on Friday at six."
          ],
          "distractors": [
            "in",
            "to",
            "go"
          ],
          "words": [
            "core.a1u4.come-home",
            "core.a1u4.friday"
          ]
        },
        {
          "id": "e12",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "the weekend",
          "questionLang": "en",
          "choices": [
            {
              "text": "Das Wochenende",
              "correct": true
            },
            {
              "text": "Die Woche"
            },
            {
              "text": "Der Morgen"
            }
          ],
          "words": [
            "core.a1u4.weekend"
          ]
        },
        {
          "id": "e13",
          "type": "fill",
          "sentence": "She ___ work at five.",
          "choices": [
            {
              "text": "finishes",
              "correct": true
            },
            {
              "text": "finish"
            },
            {
              "text": "finishing"
            }
          ],
          "translation": "Sie hört um fünf mit der Arbeit auf.",
          "explanation": "she = he/she/it: nach -sh bekommt das Verb -es.",
          "words": [
            "core.a1u4.finish"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.a1u4.monday",
    "en": "Monday",
    "de": "der Montag",
    "pos": "noun",
    "example": "I work on Monday.",
    "exampleDe": "Ich arbeite am Montag."
  },
  {
    "id": "core.a1u4.tuesday",
    "en": "Tuesday",
    "de": "der Dienstag",
    "pos": "noun",
    "example": "Today is Tuesday.",
    "exampleDe": "Heute ist Dienstag."
  },
  {
    "id": "core.a1u4.wednesday",
    "en": "Wednesday",
    "de": "der Mittwoch",
    "pos": "noun",
    "example": "We meet on Wednesday.",
    "exampleDe": "Wir treffen uns am Mittwoch.",
    "note": "Meist ausgesprochen wie „WENZ-dei“."
  },
  {
    "id": "core.a1u4.thursday",
    "en": "Thursday",
    "de": "der Donnerstag",
    "pos": "noun",
    "example": "See you on Thursday.",
    "exampleDe": "Bis Donnerstag.",
    "note": "Das „th“ spricht man mit der Zungenspitze zwischen den Zähnen."
  },
  {
    "id": "core.a1u4.friday",
    "en": "Friday",
    "de": "der Freitag",
    "pos": "noun",
    "example": "See you on Friday!",
    "exampleDe": "Bis Freitag!"
  },
  {
    "id": "core.a1u4.saturday",
    "en": "Saturday",
    "de": "der Samstag",
    "pos": "noun",
    "example": "We meet on Saturday.",
    "exampleDe": "Wir treffen uns am Samstag.",
    "altDe": [
      "Sonnabend"
    ],
    "note": "In Norddeutschland sagt man auch „Sonnabend“."
  },
  {
    "id": "core.a1u4.what-time",
    "en": "What time is it?",
    "de": "Wie spät ist es?",
    "pos": "phrase",
    "example": "What time is it? – It is nine o'clock.",
    "exampleDe": "Wie spät ist es? – Es ist neun Uhr.",
    "altEn": [
      "what time is it"
    ],
    "altDe": [
      "Wie viel Uhr ist es?"
    ]
  },
  {
    "id": "core.a1u4.oclock",
    "en": "o'clock",
    "de": "Uhr (volle Stunde)",
    "emoji": "🕖",
    "pos": "other",
    "example": "It is seven o'clock.",
    "exampleDe": "Es ist sieben Uhr.",
    "altEn": [
      "oclock"
    ],
    "altDe": [
      "Uhr"
    ],
    "note": "Nur bei vollen Stunden: seven o'clock = 7:00."
  },
  {
    "id": "core.a1u4.half-past",
    "en": "half past",
    "de": "halb (+ nächste Stunde)",
    "pos": "phrase",
    "example": "It is half past seven.",
    "exampleDe": "Es ist halb acht.",
    "altEn": [
      "half past"
    ],
    "note": "Achtung: Englisch nimmt die aktuelle Stunde, Deutsch die nächste."
  },
  {
    "id": "core.a1u4.quarter-past",
    "en": "quarter past",
    "de": "Viertel nach",
    "pos": "phrase",
    "example": "It is quarter past nine.",
    "exampleDe": "Es ist Viertel nach neun.",
    "altEn": [
      "a quarter past"
    ],
    "note": "quarter past nine = 9:15."
  },
  {
    "id": "core.a1u4.quarter-to",
    "en": "quarter to",
    "de": "Viertel vor",
    "pos": "phrase",
    "example": "It is quarter to eight.",
    "exampleDe": "Es ist Viertel vor acht.",
    "altEn": [
      "a quarter to"
    ],
    "note": "quarter to eight = 7:45."
  },
  {
    "id": "core.a1u4.get-up",
    "en": "get up",
    "de": "aufstehen",
    "emoji": "⏰",
    "pos": "verb",
    "example": "I get up at seven.",
    "exampleDe": "Ich stehe um sieben auf.",
    "altDe": [
      "ich stehe auf"
    ],
    "note": "Phrasal verb: immer mit up (nicht nur „get“)."
  },
  {
    "id": "core.a1u4.have-breakfast",
    "en": "have breakfast",
    "de": "frühstücken",
    "emoji": "🍳",
    "pos": "phrase",
    "example": "I have breakfast at eight.",
    "exampleDe": "Ich frühstücke um acht.",
    "altDe": [
      "Frühstück essen"
    ],
    "note": "Wörtlich „Frühstück haben“. „make breakfast“ heißt „Frühstück machen“."
  },
  {
    "id": "core.a1u4.go-to-work",
    "en": "go to work",
    "de": "zur Arbeit gehen",
    "emoji": "🏢",
    "pos": "phrase",
    "example": "I go to work at half past eight.",
    "exampleDe": "Ich gehe um halb neun zur Arbeit.",
    "altDe": [
      "zur Arbeit fahren"
    ],
    "note": "Ohne Artikel: to work, nicht „to the work“."
  },
  {
    "id": "core.a1u4.come-home",
    "en": "come home",
    "de": "nach Hause kommen",
    "emoji": "🏠",
    "pos": "phrase",
    "example": "I come home at six.",
    "exampleDe": "Ich komme um sechs nach Hause.",
    "altDe": [
      "heimkommen"
    ],
    "note": "Ohne „to“: come home, nicht „come to home“."
  },
  {
    "id": "core.a1u4.go-to-bed",
    "en": "go to bed",
    "de": "ins Bett gehen",
    "emoji": "🛏️",
    "pos": "phrase",
    "example": "I go to bed at ten.",
    "exampleDe": "Ich gehe um zehn ins Bett.",
    "note": "Ohne Artikel: to bed, nicht „to the bed“."
  },
  {
    "id": "core.a1u4.sunday",
    "en": "Sunday",
    "de": "der Sonntag",
    "pos": "noun",
    "example": "We usually meet on Sunday.",
    "exampleDe": "Wir treffen uns normalerweise am Sonntag."
  },
  {
    "id": "core.a1u4.weekend",
    "en": "weekend",
    "de": "das Wochenende",
    "emoji": "🎉",
    "pos": "noun",
    "example": "Do you work at the weekend?",
    "exampleDe": "Arbeitest du am Wochenende?",
    "altEn": [
      "the weekend",
      "at the weekend"
    ],
    "altDe": [
      "Wochenende"
    ],
    "note": "Britisch: at the weekend. Amerikanisch: on the weekend."
  },
  {
    "id": "core.a1u4.usually",
    "en": "usually",
    "de": "normalerweise",
    "pos": "adv",
    "example": "I usually get up at seven.",
    "exampleDe": "Ich stehe normalerweise um sieben auf.",
    "altDe": [
      "gewöhnlich",
      "meistens"
    ],
    "note": "Steht vor dem Vollverb: I usually work."
  },
  {
    "id": "core.a1u4.start",
    "en": "start",
    "de": "anfangen, beginnen",
    "pos": "verb",
    "example": "Work starts at nine.",
    "exampleDe": "Die Arbeit fängt um neun an.",
    "altDe": [
      "anfangen",
      "beginnen"
    ],
    "note": "Bei he/she/it: starts."
  },
  {
    "id": "core.a1u4.finish",
    "en": "finish",
    "de": "aufhören, beenden",
    "pos": "verb",
    "example": "I finish work at five.",
    "exampleDe": "Ich höre um fünf auf zu arbeiten.",
    "altDe": [
      "beenden",
      "Feierabend machen"
    ],
    "note": "Bei he/she/it: finishes (-es nach sh)."
  }
]
