// Generiert von scripts/gen-drafts.ts aus content-drafts/core.a2u3.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.a2u3",
  "title": "Freizeit & Hobbys",
  "description": "Hobbys, Sport und Häufigkeit ausdrücken.",
  "cefr": "A2",
  "color": "teal",
  "icon": "⚽",
  "topics": [
    "Hobbys",
    "Sport",
    "Häufigkeitsadverbien",
    "Einladungen"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Häufigkeitsadverbien: wohin damit?",
      "text": "always, usually, often, sometimes und never stehen vor dem Vollverb: I often go running. Steht ein to be (am, is, are), kommt das Adverb dahinter: I am always tired. Nach der Häufigkeit fragst du mit How often …?",
      "examples": [
        {
          "en": "I often go running.",
          "de": "Ich gehe oft joggen."
        },
        {
          "en": "She is never late.",
          "de": "Sie ist nie zu spät."
        }
      ]
    },
    {
      "title": "play, go oder do?",
      "text": "Bei Ballsportarten nimmst du play (play football, play tennis). Bei Aktivitäten mit -ing nimmst du go (go swimming, go running). Bei Yoga und Karate nimmst du do. In der 3. Person heißt es does: Mia does yoga.",
      "examples": [
        {
          "en": "Tom plays football on Sundays.",
          "de": "Tom spielt sonntags Fußball."
        },
        {
          "en": "We go swimming in summer.",
          "de": "Im Sommer gehen wir schwimmen."
        }
      ]
    },
    {
      "title": "Einladen und antworten",
      "text": "Mit Would you like to …? lädst du höflich ein, lockerer geht es mit Do you want to …? Zusagen kannst du mit That sounds great!, absagen mit Sorry, I can't.",
      "examples": [
        {
          "en": "Would you like to come with us?",
          "de": "Möchtest du mit uns kommen?"
        },
        {
          "en": "Sorry, I can't. I am busy.",
          "de": "Tut mir leid, ich kann nicht. Ich bin beschäftigt."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.a2u3.l1",
      "title": "Hobbys",
      "description": "Über deine Freizeitbeschäftigungen sprechen",
      "introduces": [
        "core.a2u3.hobby",
        "core.a2u3.music",
        "core.a2u3.free-time",
        "core.a2u3.reading",
        "core.a2u3.cooking"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u3.hobby"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u3.music"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „die Musik“?",
          "choices": [
            {
              "text": "music",
              "emoji": "🎵",
              "correct": true
            },
            {
              "text": "hobby",
              "emoji": "🎨"
            }
          ],
          "words": [
            "core.a2u3.music",
            "core.a2u3.hobby"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u3.free-time"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Sonntags habe ich viel Freizeit.",
          "answer": "On Sundays I have a lot of free time.",
          "distractors": [
            "hobby",
            "music",
            "reading"
          ],
          "words": [
            "core.a2u3.free-time"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.a2u3.reading"
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "My hobby is reading.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Mein Hobby ist Lesen.",
              "correct": true
            },
            {
              "text": "Mein Hobby ist Kochen."
            },
            {
              "text": "Meine Musik ist laut."
            }
          ],
          "words": [
            "core.a2u3.hobby",
            "core.a2u3.reading",
            "core.my"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u3.cooking"
        },
        {
          "id": "e09",
          "type": "match",
          "pairs": [
            {
              "en": "hobby",
              "de": "Hobby"
            },
            {
              "en": "free time",
              "de": "Freizeit"
            },
            {
              "en": "music",
              "de": "Musik"
            },
            {
              "en": "reading",
              "de": "Lesen"
            },
            {
              "en": "cooking",
              "de": "Kochen"
            }
          ],
          "words": [
            "core.a2u3.hobby",
            "core.a2u3.free-time",
            "core.a2u3.music",
            "core.a2u3.reading",
            "core.a2u3.cooking"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "I like cooking.",
          "answer": "Ich koche gern.",
          "accepted": [
            "Gern koche ich."
          ],
          "distractors": [
            "Musik",
            "Freizeit",
            "Lesen"
          ],
          "words": [
            "core.a2u3.cooking"
          ]
        },
        {
          "id": "e11",
          "type": "fill",
          "sentence": "Music is my favourite ___.",
          "choices": [
            {
              "text": "hobby",
              "correct": true
            },
            {
              "text": "hobbies"
            },
            {
              "text": "free time"
            }
          ],
          "translation": "Musik ist mein Lieblingshobby.",
          "explanation": "Nach my favourite steht der Singular: my favourite hobby.",
          "words": [
            "core.a2u3.hobby",
            "core.a2u3.music"
          ]
        },
        {
          "id": "e12",
          "type": "listen-type",
          "audio": "Cooking is my favourite hobby.",
          "accepted": [
            "Cooking is my favorite hobby."
          ],
          "translation": "Kochen ist mein Lieblingshobby.",
          "words": [
            "core.a2u3.cooking",
            "core.a2u3.hobby"
          ]
        },
        {
          "id": "e13",
          "type": "speak",
          "text": "My favourite hobby is cooking.",
          "translation": "Mein Lieblingshobby ist Kochen.",
          "words": [
            "core.a2u3.cooking"
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
              "en": "What is your hobby, Anna?",
              "de": "Was ist dein Hobby, Anna?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Reading. I read a lot in the library.",
              "de": "Lesen. Ich lese viel in der Bibliothek."
            },
            {
              "speaker": "a",
              "name": "Tom",
              "en": "Cool! I love music in my free time.",
              "de": "Cool! Ich liebe Musik in meiner Freizeit."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Nice! Let's listen to music together.",
              "de": "Schön! Lass uns zusammen Musik hören."
            }
          ],
          "question": "Was ist Annas Hobby?",
          "choices": [
            {
              "text": "Lesen",
              "correct": true
            },
            {
              "text": "Musik"
            },
            {
              "text": "Kochen"
            }
          ],
          "words": [
            "core.a2u3.hobby",
            "core.a2u3.reading",
            "core.a2u3.music",
            "core.a2u3.free-time",
            "core.library"
          ]
        }
      ]
    },
    {
      "id": "core.a2u3.l2",
      "title": "Sport",
      "description": "Sportarten und Aktivitäten benennen",
      "introduces": [
        "core.a2u3.sport",
        "core.a2u3.play-football",
        "core.a2u3.go-swimming",
        "core.a2u3.do-yoga",
        "core.a2u3.go-running"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u3.sport"
        },
        {
          "id": "e02",
          "type": "choice",
          "prompt": "Welches Bild zeigt „der Sport“?",
          "choices": [
            {
              "text": "sport",
              "emoji": "🏅",
              "correct": true
            },
            {
              "text": "music",
              "emoji": "🎵"
            },
            {
              "text": "cooking",
              "emoji": "🍳"
            }
          ],
          "words": [
            "core.a2u3.sport",
            "core.a2u3.music",
            "core.a2u3.cooking"
          ]
        },
        {
          "id": "e03",
          "type": "intro",
          "word": "core.a2u3.play-football"
        },
        {
          "id": "e04",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Tom spielt sonntags Fußball.",
          "answer": "Tom plays football on Sundays.",
          "accepted": [
            "On Sundays Tom plays football."
          ],
          "distractors": [
            "does",
            "goes",
            "sport"
          ],
          "words": [
            "core.a2u3.play-football"
          ]
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u3.go-swimming"
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "We go swimming in summer.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wir gehen im Sommer schwimmen.",
              "correct": true
            },
            {
              "text": "Wir spielen im Sommer Fußball."
            },
            {
              "text": "Wir machen im Sommer Yoga."
            }
          ],
          "words": [
            "core.a2u3.go-swimming"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u3.do-yoga"
        },
        {
          "id": "e08",
          "type": "fill",
          "sentence": "Mia ___ yoga every morning.",
          "choices": [
            {
              "text": "does",
              "correct": true
            },
            {
              "text": "do"
            },
            {
              "text": "goes"
            }
          ],
          "translation": "Mia macht jeden Morgen Yoga.",
          "explanation": "Bei she/he/it heißt es does. Für Yoga und Karate nimmt man do.",
          "words": [
            "core.a2u3.do-yoga"
          ]
        },
        {
          "id": "e09",
          "type": "intro",
          "word": "core.a2u3.go-running"
        },
        {
          "id": "e10",
          "type": "match",
          "pairs": [
            {
              "en": "sport",
              "de": "Sport"
            },
            {
              "en": "play football",
              "de": "Fußball spielen"
            },
            {
              "en": "go swimming",
              "de": "schwimmen gehen"
            },
            {
              "en": "do yoga",
              "de": "Yoga machen"
            },
            {
              "en": "go running",
              "de": "joggen gehen"
            }
          ],
          "words": [
            "core.a2u3.sport",
            "core.a2u3.play-football",
            "core.a2u3.go-swimming",
            "core.a2u3.do-yoga",
            "core.a2u3.go-running"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "Ben goes ___ before work.",
          "accepted": [
            "running",
            "jogging"
          ],
          "hint": "joggen",
          "translation": "Ben geht vor der Arbeit joggen.",
          "words": [
            "core.a2u3.go-running"
          ]
        },
        {
          "id": "e12",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Do you play football?",
          "answer": "Spielst du Fußball?",
          "distractors": [
            "gehst",
            "macht",
            "Yoga"
          ],
          "words": [
            "core.a2u3.play-football"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "Do you do yoga in the mornings?",
          "translation": "Machst du morgens Yoga?",
          "words": [
            "core.a2u3.do-yoga"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Sport am Wochenende",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Do you want to go swimming on Saturday?",
              "de": "Hast du Lust, samstags schwimmen zu gehen?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "I cannot. I do yoga on Saturdays.",
              "de": "Ich kann nicht. Samstags mache ich Yoga."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Okay. Ben and I go running on Saturdays.",
              "de": "Okay. Ben und ich gehen samstags joggen."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Good for you! Have fun.",
              "de": "Gut für euch! Viel Spaß."
            }
          ],
          "question": "Was macht Mia am Samstag?",
          "choices": [
            {
              "text": "Yoga",
              "correct": true
            },
            {
              "text": "Schwimmen"
            },
            {
              "text": "Joggen"
            }
          ],
          "words": [
            "core.a2u3.go-swimming",
            "core.a2u3.do-yoga",
            "core.a2u3.go-running",
            "core.a2u3.sport"
          ]
        }
      ]
    },
    {
      "id": "core.a2u3.l3",
      "title": "Wie oft?",
      "description": "Häufigkeit mit always, usually, often, sometimes und never ausdrücken",
      "introduces": [
        "core.a2u3.always",
        "core.a2u3.never",
        "core.a2u3.usually",
        "core.a2u3.often",
        "core.a2u3.sometimes",
        "core.a2u3.how-often"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u3.always"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u3.never"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Wort bedeutet „nie“?",
          "choices": [
            {
              "text": "never",
              "correct": true
            },
            {
              "text": "always"
            }
          ],
          "words": [
            "core.a2u3.never",
            "core.a2u3.always"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.a2u3.usually"
        },
        {
          "id": "e05",
          "type": "translate",
          "direction": "en-de",
          "prompt": "We usually eat at home.",
          "answer": "Wir essen meistens zu Hause.",
          "accepted": [
            "Wir essen zu Hause meistens."
          ],
          "distractors": [
            "nie",
            "immer",
            "Schule"
          ],
          "words": [
            "core.a2u3.usually"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.a2u3.often"
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "I often go running.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich gehe oft joggen.",
              "correct": true
            },
            {
              "text": "Ich gehe nie joggen."
            },
            {
              "text": "Ich gehe immer schwimmen."
            }
          ],
          "words": [
            "core.a2u3.often",
            "core.a2u3.go-running"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u3.sometimes"
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "Ben ___ goes running before work.",
          "choices": [
            {
              "text": "usually",
              "correct": true
            },
            {
              "text": "never"
            }
          ],
          "translation": "Ben geht meistens vor der Arbeit joggen.",
          "explanation": "Das Adverb steht vor dem Vollverb: Ben usually goes running.",
          "words": [
            "core.a2u3.usually",
            "core.a2u3.never",
            "core.a2u3.go-running"
          ]
        },
        {
          "id": "e10",
          "type": "intro",
          "word": "core.a2u3.how-often"
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Wie oft gehst du schwimmen?",
          "answer": "How often do you go swimming?",
          "distractors": [
            "is",
            "are",
            "does"
          ],
          "words": [
            "core.a2u3.how-often",
            "core.a2u3.go-swimming"
          ]
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "I ___ go running after work.",
          "accepted": [
            "sometimes"
          ],
          "hint": "manchmal",
          "translation": "Ich gehe nach der Arbeit manchmal joggen.",
          "words": [
            "core.a2u3.sometimes",
            "core.a2u3.go-running"
          ]
        },
        {
          "id": "e13",
          "type": "listen-type",
          "audio": "We never play football.",
          "accepted": [
            "We never play soccer."
          ],
          "translation": "Wir spielen nie Fußball.",
          "words": [
            "core.a2u3.never",
            "core.a2u3.play-football"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Wie oft?",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "How often do you go swimming, Anna?",
              "de": "Wie oft gehst du schwimmen, Anna?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I go swimming twice a week. And you?",
              "de": "Ich gehe zweimal pro Woche schwimmen. Und du?"
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "I never go swimming. I usually play football.",
              "de": "Ich gehe nie schwimmen. Ich spiele meistens Fußball."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Nice! Football is my favourite sport.",
              "de": "Schön! Fußball ist mein Lieblingssport."
            }
          ],
          "question": "Wie oft geht Ben schwimmen?",
          "choices": [
            {
              "text": "Nie",
              "correct": true
            },
            {
              "text": "Zweimal pro Woche"
            },
            {
              "text": "Jeden Tag"
            }
          ],
          "words": [
            "core.a2u3.how-often",
            "core.a2u3.go-swimming",
            "core.a2u3.never",
            "core.a2u3.usually",
            "core.a2u3.play-football"
          ]
        }
      ]
    },
    {
      "id": "core.a2u3.l4",
      "title": "Einladungen",
      "description": "Jemanden einladen, zusagen, absagen und einen Termin vorschlagen",
      "introduces": [
        "core.a2u3.would-you-like-to",
        "core.a2u3.sounds-great",
        "core.a2u3.lets-go",
        "core.a2u3.what-about",
        "core.a2u3.sorry-cant",
        "core.a2u3.busy"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.a2u3.would-you-like-to"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.a2u3.sounds-great"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "That sounds great!",
          "questionLang": "en",
          "choices": [
            {
              "text": "Das klingt toll!",
              "correct": true
            },
            {
              "text": "Tut mir leid."
            },
            {
              "text": "Bis später."
            }
          ],
          "words": [
            "core.a2u3.sounds-great"
          ]
        },
        {
          "id": "e04",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Möchtest du mit uns kommen?",
          "answer": "Would you like to come with us?",
          "distractors": [
            "Do",
            "are",
            "busy"
          ],
          "words": [
            "core.a2u3.would-you-like-to"
          ]
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.a2u3.lets-go"
        },
        {
          "id": "e06",
          "type": "listen-choice",
          "audio": "Let's go to the park.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Lass uns in den Park gehen.",
              "correct": true
            },
            {
              "text": "Wir sind im Park."
            },
            {
              "text": "Wo ist der Park?"
            }
          ],
          "words": [
            "core.a2u3.lets-go",
            "core.park"
          ]
        },
        {
          "id": "e07",
          "type": "intro",
          "word": "core.a2u3.what-about"
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.a2u3.sorry-cant"
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "Would you like to come? Sorry, I ___.",
          "choices": [
            {
              "text": "can't",
              "correct": true
            },
            {
              "text": "am"
            },
            {
              "text": "like"
            }
          ],
          "translation": "Möchtest du kommen? Tut mir leid, ich kann nicht.",
          "explanation": "Sorry, I can't heißt: Tut mir leid, ich kann nicht.",
          "words": [
            "core.a2u3.sorry-cant",
            "core.a2u3.would-you-like-to"
          ]
        },
        {
          "id": "e10",
          "type": "intro",
          "word": "core.a2u3.busy"
        },
        {
          "id": "e11",
          "type": "translate",
          "direction": "en-de",
          "prompt": "I am busy on Friday.",
          "answer": "Am Freitag bin ich beschäftigt.",
          "accepted": [
            "Ich bin am Freitag beschäftigt."
          ],
          "distractors": [
            "Montag",
            "bist",
            "gern"
          ],
          "words": [
            "core.a2u3.busy"
          ]
        },
        {
          "id": "e12",
          "type": "match",
          "pairs": [
            {
              "en": "Would you like to …?",
              "de": "Möchtest du …?"
            },
            {
              "en": "Let's go",
              "de": "Lass uns gehen"
            },
            {
              "en": "That sounds great!",
              "de": "Das klingt toll!"
            },
            {
              "en": "What about …?",
              "de": "Wie wäre es mit …?"
            },
            {
              "en": "Sorry, I can't.",
              "de": "Tut mir leid, ich kann nicht."
            }
          ],
          "words": [
            "core.a2u3.would-you-like-to",
            "core.a2u3.lets-go",
            "core.a2u3.sounds-great",
            "core.a2u3.what-about",
            "core.a2u3.sorry-cant"
          ]
        },
        {
          "id": "e13",
          "type": "type",
          "sentence": "What ___ Saturday?",
          "accepted": [
            "about"
          ],
          "hint": "Wie wäre es mit …",
          "translation": "Wie wäre es mit Samstag?",
          "words": [
            "core.a2u3.what-about"
          ]
        },
        {
          "id": "e14",
          "type": "speak",
          "text": "That sounds great! Let's go.",
          "translation": "Das klingt toll! Lass uns gehen.",
          "words": [
            "core.a2u3.sounds-great",
            "core.a2u3.lets-go"
          ]
        },
        {
          "id": "e15",
          "type": "dialogue",
          "title": "Ein Treffen planen",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Would you like to come to the park?",
              "de": "Möchtest du in den Park kommen?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Sorry, I can't. I am busy on Saturday.",
              "de": "Tut mir leid, ich kann nicht. Am Samstag bin ich beschäftigt."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "What about Sunday?",
              "de": "Wie wäre es mit Sonntag?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "That sounds great! Let's go at ten.",
              "de": "Das klingt toll! Lass uns um zehn gehen."
            }
          ],
          "question": "Wann treffen sich Sam und Mia?",
          "choices": [
            {
              "text": "Am Sonntag um zehn",
              "correct": true
            },
            {
              "text": "Am Samstag um zehn"
            },
            {
              "text": "Am Montag um zehn"
            }
          ],
          "words": [
            "core.a2u3.would-you-like-to",
            "core.a2u3.sorry-cant",
            "core.a2u3.busy",
            "core.a2u3.what-about",
            "core.a2u3.sounds-great",
            "core.a2u3.lets-go"
          ]
        }
      ]
    },
    {
      "id": "core.a2u3.l5",
      "title": "Wiederholung",
      "description": "Alle Wörter der Unit mischen, ohne neue Wörter",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Welches Bild zeigt „schwimmen gehen“?",
          "choices": [
            {
              "text": "go swimming",
              "emoji": "🏊",
              "correct": true
            },
            {
              "text": "play football",
              "emoji": "⚽"
            },
            {
              "text": "do yoga",
              "emoji": "🧘"
            }
          ],
          "words": [
            "core.a2u3.go-swimming",
            "core.a2u3.play-football",
            "core.a2u3.do-yoga"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "hobby",
              "de": "Freizeitbeschäftigung"
            },
            {
              "en": "free time",
              "de": "Freizeit"
            },
            {
              "en": "cooking",
              "de": "Kochen"
            },
            {
              "en": "sport",
              "de": "Sport"
            },
            {
              "en": "usually",
              "de": "meistens"
            }
          ],
          "words": [
            "core.a2u3.hobby",
            "core.a2u3.free-time",
            "core.a2u3.cooking",
            "core.a2u3.sport",
            "core.a2u3.usually"
          ]
        },
        {
          "id": "e03",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich gehe manchmal joggen.",
          "answer": "I sometimes go running.",
          "accepted": [
            "Sometimes I go running."
          ],
          "distractors": [
            "often",
            "busy",
            "hobby"
          ],
          "words": [
            "core.a2u3.sometimes",
            "core.a2u3.go-running"
          ]
        },
        {
          "id": "e04",
          "type": "listen-choice",
          "audio": "She is always on time.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Sie ist immer pünktlich.",
              "correct": true
            },
            {
              "text": "Sie ist nie pünktlich."
            },
            {
              "text": "Sie ist manchmal pünktlich."
            }
          ],
          "words": [
            "core.a2u3.always"
          ]
        },
        {
          "id": "e05",
          "type": "fill",
          "sentence": "He ___ meat.",
          "choices": [
            {
              "text": "never eats",
              "correct": true
            },
            {
              "text": "eats never"
            },
            {
              "text": "never eat"
            }
          ],
          "translation": "Er isst nie Fleisch.",
          "explanation": "Das Adverb steht vor dem Verb, und bei he/she/it bekommt das Verb ein -s.",
          "words": [
            "core.a2u3.never"
          ]
        },
        {
          "id": "e06",
          "type": "translate",
          "direction": "en-de",
          "prompt": "Let's go swimming on Sunday.",
          "answer": "Lass uns am Sonntag schwimmen gehen.",
          "distractors": [
            "Fußball",
            "Yoga",
            "Joggen"
          ],
          "words": [
            "core.a2u3.lets-go",
            "core.a2u3.go-swimming"
          ]
        },
        {
          "id": "e07",
          "type": "listen-type",
          "audio": "We go jogging in the park on Sundays.",
          "accepted": [
            "We go running in the park on Sundays."
          ],
          "translation": "Wir gehen sonntags im Park joggen.",
          "words": [
            "core.a2u3.go-running",
            "core.park"
          ]
        },
        {
          "id": "e08",
          "type": "type",
          "sentence": "We play football ___ Sundays.",
          "accepted": [
            "on"
          ],
          "hint": "am (Wochentag)",
          "translation": "Wir spielen sonntags Fußball.",
          "words": [
            "core.a2u3.play-football"
          ]
        },
        {
          "id": "e09",
          "type": "choice",
          "prompt": "Welches Bild zeigt „das Lesen“?",
          "choices": [
            {
              "text": "reading",
              "emoji": "📖",
              "correct": true
            },
            {
              "text": "music",
              "emoji": "🎵"
            },
            {
              "text": "cooking",
              "emoji": "🍳"
            }
          ],
          "words": [
            "core.a2u3.reading",
            "core.a2u3.music",
            "core.a2u3.cooking"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich gehe oft schwimmen.",
          "answer": "I often go swimming.",
          "accepted": [
            "Often I go swimming."
          ],
          "distractors": [
            "never",
            "always",
            "hobby"
          ],
          "words": [
            "core.a2u3.often",
            "core.a2u3.go-swimming"
          ]
        },
        {
          "id": "e11",
          "type": "speak",
          "text": "I go swimming twice a week.",
          "translation": "Ich gehe zweimal pro Woche schwimmen.",
          "words": [
            "core.a2u3.go-swimming"
          ]
        },
        {
          "id": "e12",
          "type": "listen-choice",
          "audio": "How often do you go swimming?",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Wie oft gehst du schwimmen?",
              "correct": true
            },
            {
              "text": "Wann gehst du schwimmen?"
            },
            {
              "text": "Wo gehst du schwimmen?"
            }
          ],
          "words": [
            "core.a2u3.how-often",
            "core.a2u3.go-swimming"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Am Wochenende",
          "lines": [
            {
              "speaker": "a",
              "name": "Tom",
              "en": "What about Saturday? Would you like to go swimming?",
              "de": "Wie wäre es mit Samstag? Möchtest du schwimmen gehen?"
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "Sorry, I can't. I am busy on Saturday.",
              "de": "Tut mir leid, ich kann nicht. Am Samstag bin ich beschäftigt."
            },
            {
              "speaker": "a",
              "name": "Tom",
              "en": "No problem. How about Sunday?",
              "de": "Kein Problem. Wie wäre es mit Sonntag?"
            },
            {
              "speaker": "b",
              "name": "Lisa",
              "en": "That sounds great! Let's go running together.",
              "de": "Das klingt toll! Lass uns zusammen joggen gehen."
            }
          ],
          "question": "Was machen Tom und Lisa am Sonntag?",
          "choices": [
            {
              "text": "Joggen gehen",
              "correct": true
            },
            {
              "text": "Schwimmen gehen"
            },
            {
              "text": "Yoga machen"
            }
          ],
          "words": [
            "core.a2u3.what-about",
            "core.a2u3.would-you-like-to",
            "core.a2u3.sorry-cant",
            "core.a2u3.busy",
            "core.a2u3.sounds-great",
            "core.a2u3.lets-go",
            "core.a2u3.go-running",
            "core.a2u3.go-swimming"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.a2u3.hobby",
    "en": "hobby",
    "de": "das Hobby",
    "emoji": "🎨",
    "pos": "noun",
    "example": "Cooking is my favourite hobby.",
    "exampleDe": "Kochen ist mein Lieblingshobby.",
    "altDe": [
      "Freizeitbeschäftigung"
    ]
  },
  {
    "id": "core.a2u3.free-time",
    "en": "free time",
    "de": "die Freizeit",
    "pos": "noun",
    "example": "I have a lot of free time on Sundays.",
    "exampleDe": "Sonntags habe ich viel Freizeit.",
    "altEn": [
      "spare time"
    ],
    "altDe": [
      "freie Zeit"
    ]
  },
  {
    "id": "core.a2u3.music",
    "en": "music",
    "de": "die Musik",
    "emoji": "🎵",
    "pos": "noun",
    "example": "I listen to music in the car.",
    "exampleDe": "Ich höre im Auto Musik."
  },
  {
    "id": "core.a2u3.reading",
    "en": "reading",
    "de": "das Lesen",
    "emoji": "📖",
    "pos": "noun",
    "example": "Reading is very relaxing.",
    "exampleDe": "Lesen ist sehr entspannend.",
    "note": "Gerundium: I like reading = Ich lese gern."
  },
  {
    "id": "core.a2u3.cooking",
    "en": "cooking",
    "de": "das Kochen",
    "emoji": "🍳",
    "pos": "noun",
    "example": "I enjoy cooking for my friends.",
    "exampleDe": "Ich koche gern für meine Freunde.",
    "altDe": [
      "Kochen"
    ]
  },
  {
    "id": "core.a2u3.sport",
    "en": "sport",
    "de": "der Sport",
    "emoji": "🏅",
    "pos": "noun",
    "example": "Sport is good for you.",
    "exampleDe": "Sport ist gut für dich.",
    "altEn": [
      "sports"
    ]
  },
  {
    "id": "core.a2u3.play-football",
    "en": "play football",
    "de": "Fußball spielen",
    "emoji": "⚽",
    "pos": "phrase",
    "example": "Tom plays football on Sundays.",
    "exampleDe": "Tom spielt sonntags Fußball.",
    "altEn": [
      "play soccer"
    ],
    "note": "play für Ballsportarten: play tennis, play basketball."
  },
  {
    "id": "core.a2u3.go-swimming",
    "en": "go swimming",
    "de": "schwimmen gehen",
    "emoji": "🏊",
    "pos": "phrase",
    "example": "We go swimming in the lake in summer.",
    "exampleDe": "Im Sommer gehen wir im See schwimmen.",
    "note": "go + -ing für Aktivitäten: go running, go hiking."
  },
  {
    "id": "core.a2u3.do-yoga",
    "en": "do yoga",
    "de": "Yoga machen",
    "emoji": "🧘",
    "pos": "phrase",
    "example": "Mia does yoga every morning.",
    "exampleDe": "Mia macht jeden Morgen Yoga.",
    "altDe": [
      "Yoga üben"
    ],
    "note": "do für Yoga und Karate: do karate."
  },
  {
    "id": "core.a2u3.go-running",
    "en": "go running",
    "de": "joggen gehen",
    "emoji": "🏃",
    "pos": "phrase",
    "example": "Ben goes running before work.",
    "exampleDe": "Ben geht vor der Arbeit joggen.",
    "altEn": [
      "go jogging"
    ],
    "altDe": [
      "laufen gehen"
    ]
  },
  {
    "id": "core.a2u3.always",
    "en": "always",
    "de": "immer",
    "pos": "adv",
    "example": "She is always on time.",
    "exampleDe": "Sie ist immer pünktlich.",
    "note": "Vor dem Vollverb, nach to be: I am always tired."
  },
  {
    "id": "core.a2u3.usually",
    "en": "usually",
    "de": "meistens",
    "pos": "adv",
    "example": "We usually eat at home.",
    "exampleDe": "Wir essen meistens zu Hause.",
    "altDe": [
      "normalerweise",
      "gewöhnlich"
    ]
  },
  {
    "id": "core.a2u3.often",
    "en": "often",
    "de": "oft",
    "pos": "adv",
    "example": "I often go running.",
    "exampleDe": "Ich gehe oft joggen."
  },
  {
    "id": "core.a2u3.sometimes",
    "en": "sometimes",
    "de": "manchmal",
    "pos": "adv",
    "example": "Sometimes I cook for my friends.",
    "exampleDe": "Manchmal koche ich für meine Freunde.",
    "altDe": [
      "ab und zu"
    ]
  },
  {
    "id": "core.a2u3.never",
    "en": "never",
    "de": "nie",
    "pos": "adv",
    "example": "He never eats meat.",
    "exampleDe": "Er isst nie Fleisch.",
    "altDe": [
      "niemals"
    ]
  },
  {
    "id": "core.a2u3.how-often",
    "en": "How often …?",
    "de": "Wie oft …?",
    "pos": "phrase",
    "example": "How often do you go swimming?",
    "exampleDe": "Wie oft gehst du schwimmen?",
    "altEn": [
      "how often"
    ],
    "note": "Antworten: once a week, twice a week, every day."
  },
  {
    "id": "core.a2u3.would-you-like-to",
    "en": "Would you like to …?",
    "de": "Möchtest du …?",
    "pos": "phrase",
    "example": "Would you like to come with us?",
    "exampleDe": "Möchtest du mit uns kommen?",
    "altEn": [
      "would you like to"
    ],
    "altDe": [
      "Hast du Lust, …?"
    ],
    "note": "Höfliche Einladung. Lockerer: Do you want to …?"
  },
  {
    "id": "core.a2u3.lets-go",
    "en": "let's go",
    "de": "Lass uns gehen",
    "pos": "phrase",
    "example": "Let's go to the park.",
    "exampleDe": "Lass uns in den Park gehen.",
    "altEn": [
      "let us go",
      "lets go"
    ],
    "altDe": [
      "Lasst uns gehen"
    ]
  },
  {
    "id": "core.a2u3.sounds-great",
    "en": "That sounds great!",
    "de": "Das klingt toll!",
    "pos": "phrase",
    "example": "Pizza tonight? That sounds great!",
    "exampleDe": "Pizza heute Abend? Das klingt toll!",
    "altEn": [
      "that sounds good"
    ],
    "altDe": [
      "Das klingt super!",
      "Das hört sich toll an!"
    ]
  },
  {
    "id": "core.a2u3.what-about",
    "en": "What about …?",
    "de": "Wie wäre es mit …?",
    "pos": "phrase",
    "example": "What about Saturday?",
    "exampleDe": "Wie wäre es mit Samstag?",
    "altEn": [
      "what about"
    ],
    "altDe": [
      "Was hältst du von …?"
    ]
  },
  {
    "id": "core.a2u3.sorry-cant",
    "en": "Sorry, I can't.",
    "de": "Tut mir leid, ich kann nicht.",
    "pos": "phrase",
    "example": "Sorry, I can't come on Monday.",
    "exampleDe": "Tut mir leid, am Montag kann ich nicht kommen.",
    "altEn": [
      "Sorry, I cannot."
    ],
    "altDe": [
      "Leider kann ich nicht."
    ]
  },
  {
    "id": "core.a2u3.busy",
    "en": "busy",
    "de": "beschäftigt",
    "pos": "adj",
    "example": "I am busy on Friday.",
    "exampleDe": "Am Freitag bin ich beschäftigt.",
    "altDe": [
      "viel zu tun"
    ],
    "note": "Falscher Freund: nicht mit business (Geschäft) verwechseln."
  }
]
