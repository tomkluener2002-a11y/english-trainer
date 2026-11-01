// Generiert von scripts/gen-drafts.ts aus content-drafts/core.b1u3.json – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'

export const unit: Unit = {
  "id": "core.b1u3",
  "title": "Meinungen",
  "description": "Zustimmen, widersprechen und begründen.",
  "cefr": "B1",
  "color": "orange",
  "icon": "💬",
  "topics": [
    "Meinung äußern",
    "Zustimmen & widersprechen",
    "Vergleiche",
    "Begründungen"
  ],
  "status": "ready",
  "tips": [
    {
      "title": "Meinung: I think + ganzer Satz",
      "text": "Nach I think, I believe und in my opinion folgt immer ein vollständiger Satz mit Subjekt und Verb. Das Wort that darfst du weglassen: I think (that) it is good. Bei I believe bleibt das Verb ohne -s.",
      "examples": [
        {
          "en": "I think it is a good idea.",
          "de": "Ich finde, es ist eine gute Idee."
        },
        {
          "en": "In my opinion, this plan is good.",
          "de": "Meiner Meinung nach ist dieser Plan gut."
        },
        {
          "en": "I believe you are right.",
          "de": "Ich glaube, du hast recht."
        }
      ]
    },
    {
      "title": "Vergleiche: -er, more und than",
      "text": "Mit than (als) vergleichst du zwei Dinge. Lange Adjektive bekommen more (more interesting), kurze eine Endung auf -er. Unregelmäßig sind good → better → the best und bad → worse → the worst.",
      "examples": [
        {
          "en": "This film is better than the book.",
          "de": "Dieser Film ist besser als das Buch."
        },
        {
          "en": "This film is more interesting than the book.",
          "de": "Dieser Film ist interessanter als das Buch."
        },
        {
          "en": "This is the best idea.",
          "de": "Das ist die beste Idee."
        }
      ]
    },
    {
      "title": "Gründe nennen: because, because of, that's why",
      "text": "Vor einem Satz steht because, vor einem Nomen because of (wegen). Mit That's why nennst du die Folge: erst der Grund, dann that's why, dann die Folge.",
      "examples": [
        {
          "en": "I stay inside because it is cold.",
          "de": "Ich bleibe drinnen, weil es kalt ist."
        },
        {
          "en": "We stay home because of the rain.",
          "de": "Wir bleiben wegen des Regens zu Hause."
        },
        {
          "en": "It is cold. That's why I wear a coat.",
          "de": "Es ist kalt. Deshalb ziehe ich einen Mantel an."
        }
      ]
    }
  ],
  "lessons": [
    {
      "id": "core.b1u3.l1",
      "title": "Meine Meinung",
      "description": "Mit I think, I believe und in my opinion sagen, was du denkst",
      "introduces": [
        "core.b1u3.i-think",
        "core.b1u3.in-my-opinion",
        "core.b1u3.opinion",
        "core.b1u3.i-believe"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u3.i-think"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u3.in-my-opinion"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I think it is a good idea.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Ich finde, es ist eine gute Idee.",
              "correct": true
            },
            {
              "text": "Ich habe eine gute Idee."
            },
            {
              "text": "Es ist eine schlechte Idee."
            }
          ],
          "words": [
            "core.b1u3.i-think"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u3.opinion"
        },
        {
          "id": "e05",
          "type": "intro",
          "word": "core.b1u3.i-believe"
        },
        {
          "id": "e06",
          "type": "match",
          "pairs": [
            {
              "en": "I think",
              "de": "ich finde"
            },
            {
              "en": "in my opinion",
              "de": "meiner Meinung nach"
            },
            {
              "en": "I believe",
              "de": "ich glaube"
            },
            {
              "en": "opinion",
              "de": "die Meinung"
            }
          ],
          "words": [
            "core.b1u3.i-think",
            "core.b1u3.in-my-opinion",
            "core.b1u3.i-believe",
            "core.b1u3.opinion"
          ]
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "I think we should wait.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich finde, wir sollten warten.",
              "correct": true
            },
            {
              "text": "Ich glaube, wir sollten gehen."
            },
            {
              "text": "Ich habe keine Zeit zu warten."
            }
          ],
          "words": [
            "core.b1u3.i-think"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Meiner Meinung nach ist dieser Plan gut.",
          "answer": "In my opinion, this plan is good.",
          "accepted": [
            "This plan is good, in my opinion."
          ],
          "distractors": [
            "idea",
            "bad",
            "often"
          ],
          "words": [
            "core.b1u3.in-my-opinion"
          ]
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "I ___ you are right.",
          "choices": [
            {
              "text": "believe",
              "correct": true
            },
            {
              "text": "believes"
            },
            {
              "text": "believing"
            }
          ],
          "translation": "Ich glaube, du hast recht.",
          "explanation": "Bei I bleibt das Verb ohne -s: I believe, nie I believes.",
          "words": [
            "core.b1u3.i-believe"
          ]
        },
        {
          "id": "e10",
          "type": "type",
          "sentence": "In my ___, we should start now.",
          "accepted": [
            "opinion"
          ],
          "hint": "Meinung",
          "translation": "Meiner Meinung nach sollten wir jetzt anfangen.",
          "words": [
            "core.b1u3.opinion",
            "core.b1u3.in-my-opinion"
          ]
        },
        {
          "id": "e11",
          "type": "listen-type",
          "audio": "In my opinion, this idea is good.",
          "translation": "Meiner Meinung nach ist diese Idee gut.",
          "accepted": [
            "In my view, this idea is good."
          ],
          "words": [
            "core.b1u3.in-my-opinion"
          ]
        },
        {
          "id": "e12",
          "type": "speak",
          "text": "I think we should start today.",
          "translation": "Ich finde, wir sollten heute anfangen.",
          "words": [
            "core.b1u3.i-think"
          ]
        },
        {
          "id": "e13",
          "type": "dialogue",
          "title": "Über einen neuen Plan",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! What do you think of the new plan?",
              "de": "Hi Anna! Was hältst du vom neuen Plan?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "In my opinion, it is a good plan.",
              "de": "Meiner Meinung nach ist es ein guter Plan."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "I believe it is too expensive.",
              "de": "Ich glaube, er ist zu teuer."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I think we can talk about the price.",
              "de": "Ich finde, wir können über den Preis reden."
            }
          ],
          "question": "Was meint Anna zum neuen Plan?",
          "choices": [
            {
              "text": "Er ist gut.",
              "correct": true
            },
            {
              "text": "Er ist zu teuer."
            },
            {
              "text": "Er ist schlecht."
            }
          ],
          "words": [
            "core.b1u3.in-my-opinion",
            "core.b1u3.i-believe",
            "core.b1u3.i-think"
          ]
        }
      ]
    },
    {
      "id": "core.b1u3.l2",
      "title": "Zustimmen & Widerspruch",
      "description": "Zustimmen, widersprechen und mit „I don't think so“ verneinen",
      "introduces": [
        "core.b1u3.agree",
        "core.b1u3.disagree",
        "core.b1u3.right",
        "core.b1u3.wrong",
        "core.b1u3.i-dont-think-so",
        "core.b1u3.exactly"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u3.agree"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u3.disagree"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Welches Bild zeigt „zustimmen“?",
          "choices": [
            {
              "text": "agree",
              "emoji": "👍",
              "correct": true
            },
            {
              "text": "disagree",
              "emoji": "👎"
            },
            {
              "text": "opinion",
              "emoji": "💭"
            }
          ],
          "words": [
            "core.b1u3.agree",
            "core.b1u3.disagree",
            "core.b1u3.opinion"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u3.right"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "agree",
              "de": "zustimmen"
            },
            {
              "en": "disagree",
              "de": "widersprechen"
            },
            {
              "en": "right",
              "de": "richtig"
            },
            {
              "en": "opinion",
              "de": "die Meinung"
            }
          ],
          "words": [
            "core.b1u3.agree",
            "core.b1u3.disagree",
            "core.b1u3.right",
            "core.b1u3.opinion"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b1u3.wrong"
        },
        {
          "id": "e07",
          "type": "listen-choice",
          "audio": "I disagree with the plan.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Ich widerspreche dem Plan.",
              "correct": true
            },
            {
              "text": "Ich stimme dem Plan zu."
            },
            {
              "text": "Der Plan ist sehr gut."
            }
          ],
          "words": [
            "core.b1u3.disagree"
          ]
        },
        {
          "id": "e08",
          "type": "intro",
          "word": "core.b1u3.i-dont-think-so"
        },
        {
          "id": "e09",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich glaube nicht.",
          "answer": "I don't think so.",
          "distractors": [
            "agree",
            "wrong",
            "yes"
          ],
          "words": [
            "core.b1u3.i-dont-think-so"
          ]
        },
        {
          "id": "e10",
          "type": "fill",
          "sentence": "That answer is ___.",
          "choices": [
            {
              "text": "wrong",
              "correct": true
            },
            {
              "text": "wrongly"
            },
            {
              "text": "agree"
            }
          ],
          "translation": "Diese Antwort ist falsch.",
          "explanation": "Nach is steht ein Adjektiv (wrong), kein Adverb (wrongly).",
          "words": [
            "core.b1u3.wrong"
          ]
        },
        {
          "id": "e11",
          "type": "intro",
          "word": "core.b1u3.exactly"
        },
        {
          "id": "e12",
          "type": "type",
          "sentence": "That is ___ what I mean.",
          "accepted": [
            "exactly"
          ],
          "hint": "genau",
          "translation": "Genau das meine ich.",
          "words": [
            "core.b1u3.exactly"
          ]
        },
        {
          "id": "e13",
          "type": "translate",
          "direction": "en-de",
          "prompt": "You are right.",
          "answer": "Du hast recht.",
          "distractors": [
            "falsch",
            "nicht",
            "Meinung"
          ],
          "words": [
            "core.b1u3.right"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Im Gespräch",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Hi Anna! I think we should change the plan.",
              "de": "Hi Anna! Ich finde, wir sollten den Plan ändern."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "I disagree. The old plan is good.",
              "de": "Ich widerspreche. Der alte Plan ist gut."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "I don't think so. The old plan is wrong.",
              "de": "Ich glaube nicht. Der alte Plan ist falsch."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Hm, I see. Let's talk about it.",
              "de": "Hm, ich verstehe. Lass uns darüber reden."
            }
          ],
          "question": "Wer findet den alten Plan gut?",
          "choices": [
            {
              "text": "Anna",
              "correct": true
            },
            {
              "text": "Sam"
            },
            {
              "text": "Beide"
            }
          ],
          "words": [
            "core.b1u3.disagree",
            "core.b1u3.wrong",
            "core.b1u3.i-dont-think-so",
            "core.b1u3.i-think"
          ]
        }
      ]
    },
    {
      "id": "core.b1u3.l3",
      "title": "Vergleiche",
      "description": "Dinge vergleichen: better, worse, the best",
      "introduces": [
        "core.b1u3.better",
        "core.b1u3.worse",
        "core.b1u3.than",
        "core.b1u3.more-interesting",
        "core.b1u3.the-best"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u3.better"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u3.worse"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "This bike is better.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Dieses Fahrrad ist besser.",
              "correct": true
            },
            {
              "text": "Dieses Fahrrad ist schlechter."
            },
            {
              "text": "Dieses Fahrrad ist teuer."
            }
          ],
          "words": [
            "core.b1u3.better"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u3.than"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "better",
              "de": "besser"
            },
            {
              "en": "worse",
              "de": "schlechter"
            },
            {
              "en": "than",
              "de": "als"
            },
            {
              "en": "wrong",
              "de": "falsch"
            }
          ],
          "words": [
            "core.b1u3.better",
            "core.b1u3.worse",
            "core.b1u3.than",
            "core.b1u3.wrong"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b1u3.more-interesting"
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "This film is ___ than the book.",
          "choices": [
            {
              "text": "more interesting",
              "correct": true
            },
            {
              "text": "interesting"
            },
            {
              "text": "more interest"
            }
          ],
          "translation": "Dieser Film ist interessanter als das Buch.",
          "explanation": "Lange Adjektive bekommen more: more interesting than.",
          "words": [
            "core.b1u3.more-interesting",
            "core.b1u3.than"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Dieser Film ist besser als das Buch.",
          "answer": "This film is better than the book.",
          "distractors": [
            "worse",
            "more",
            "interesting"
          ],
          "words": [
            "core.b1u3.better",
            "core.b1u3.than"
          ]
        },
        {
          "id": "e09",
          "type": "fill",
          "sentence": "The weather is ___ than yesterday.",
          "choices": [
            {
              "text": "worse",
              "correct": true
            },
            {
              "text": "worst"
            },
            {
              "text": "bad"
            }
          ],
          "translation": "Das Wetter ist schlechter als gestern.",
          "explanation": "Unregelmäßig: bad → worse → the worst.",
          "words": [
            "core.b1u3.worse",
            "core.b1u3.than"
          ]
        },
        {
          "id": "e10",
          "type": "intro",
          "word": "core.b1u3.the-best"
        },
        {
          "id": "e11",
          "type": "listen-choice",
          "audio": "This is the best plan.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Das ist der beste Plan.",
              "correct": true
            },
            {
              "text": "Das ist der bessere Plan."
            },
            {
              "text": "Das ist der schlechteste Plan."
            }
          ],
          "words": [
            "core.b1u3.the-best"
          ]
        },
        {
          "id": "e12",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Das ist die beste Idee.",
          "answer": "This is the best idea.",
          "distractors": [
            "better",
            "worst",
            "good"
          ],
          "words": [
            "core.b1u3.the-best"
          ]
        },
        {
          "id": "e13",
          "type": "type",
          "sentence": "Summer is the ___ season for me.",
          "accepted": [
            "best"
          ],
          "hint": "beste",
          "translation": "Sommer ist für mich die beste Jahreszeit.",
          "words": [
            "core.b1u3.the-best"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Welches Handy?",
          "lines": [
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Which phone is better, this one or that one?",
              "de": "Welches Handy ist besser, dieses oder das da?"
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "This one is better. The camera is more interesting than the other.",
              "de": "Dieses hier ist besser. Die Kamera ist interessanter als die andere."
            },
            {
              "speaker": "a",
              "name": "Sam",
              "en": "Exactly, I agree. This one is the best.",
              "de": "Genau, ich stimme zu. Dieses ist das beste."
            },
            {
              "speaker": "b",
              "name": "Anna",
              "en": "Great, then let's buy this one.",
              "de": "Super, dann kaufen wir dieses."
            }
          ],
          "question": "Welches Handy ist besser?",
          "choices": [
            {
              "text": "Dieses hier.",
              "correct": true
            },
            {
              "text": "Das andere."
            },
            {
              "text": "Beide sind gleich gut."
            }
          ],
          "words": [
            "core.b1u3.better",
            "core.b1u3.than",
            "core.b1u3.more-interesting",
            "core.b1u3.the-best",
            "core.b1u3.agree",
            "core.b1u3.exactly"
          ]
        }
      ]
    },
    {
      "id": "core.b1u3.l4",
      "title": "Begründungen",
      "description": "Gründe nennen und Folgen erklären: because, that's why",
      "introduces": [
        "core.b1u3.because",
        "core.b1u3.reason",
        "core.b1u3.thats-why",
        "core.b1u3.for-example"
      ],
      "exercises": [
        {
          "id": "e01",
          "type": "intro",
          "word": "core.b1u3.because"
        },
        {
          "id": "e02",
          "type": "intro",
          "word": "core.b1u3.reason"
        },
        {
          "id": "e03",
          "type": "choice",
          "prompt": "Was bedeutet das?",
          "question": "I stay inside because it is cold.",
          "questionLang": "en",
          "choices": [
            {
              "text": "Ich bleibe drinnen, weil es kalt ist.",
              "correct": true
            },
            {
              "text": "Ich bleibe drinnen, obwohl es kalt ist."
            },
            {
              "text": "Ich bleibe drinnen, bis es kalt ist."
            }
          ],
          "words": [
            "core.b1u3.because"
          ]
        },
        {
          "id": "e04",
          "type": "intro",
          "word": "core.b1u3.thats-why"
        },
        {
          "id": "e05",
          "type": "match",
          "pairs": [
            {
              "en": "because",
              "de": "weil"
            },
            {
              "en": "reason",
              "de": "der Grund"
            },
            {
              "en": "that's why",
              "de": "deshalb"
            },
            {
              "en": "opinion",
              "de": "die Meinung"
            }
          ],
          "words": [
            "core.b1u3.because",
            "core.b1u3.reason",
            "core.b1u3.thats-why",
            "core.b1u3.opinion"
          ]
        },
        {
          "id": "e06",
          "type": "intro",
          "word": "core.b1u3.for-example"
        },
        {
          "id": "e07",
          "type": "fill",
          "sentence": "I wear a coat ___ it is cold.",
          "choices": [
            {
              "text": "because",
              "correct": true
            },
            {
              "text": "reason"
            },
            {
              "text": "for example"
            }
          ],
          "translation": "Ich ziehe einen Mantel an, weil es kalt ist.",
          "explanation": "Zwei Sätze verbindet because. reason und for example passen hier nicht.",
          "words": [
            "core.b1u3.because"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Es ist kalt. Deshalb ziehe ich einen Mantel an.",
          "answer": "It is cold. That's why I wear a coat.",
          "distractors": [
            "because",
            "reason",
            "example"
          ],
          "words": [
            "core.b1u3.thats-why"
          ]
        },
        {
          "id": "e09",
          "type": "type",
          "sentence": "We stay home ___ of the rain.",
          "accepted": [
            "because"
          ],
          "hint": "wegen",
          "translation": "Wir bleiben wegen des Regens zu Hause.",
          "explanation": "Vor einem Nomen heißt es because of, vor einem Satz nur because.",
          "words": [
            "core.b1u3.because"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "en-de",
          "prompt": "The reason is that I am tired.",
          "answer": "Der Grund ist, dass ich müde bin.",
          "distractors": [
            "Meinung",
            "obwohl",
            "deshalb"
          ],
          "words": [
            "core.b1u3.reason"
          ]
        },
        {
          "id": "e11",
          "type": "listen-type",
          "audio": "For example, Sam likes running.",
          "translation": "Zum Beispiel läuft Sam gern.",
          "accepted": [
            "For instance, Sam likes running."
          ],
          "words": [
            "core.b1u3.for-example"
          ]
        },
        {
          "id": "e12",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Zum Beispiel ist es heute kalt.",
          "answer": "For example, it is cold today.",
          "distractors": [
            "reason",
            "opinion",
            "often"
          ],
          "words": [
            "core.b1u3.for-example"
          ]
        },
        {
          "id": "e13",
          "type": "listen-choice",
          "audio": "That's why I stay inside.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Deshalb bleibe ich drinnen.",
              "correct": true
            },
            {
              "text": "Deshalb gehe ich raus."
            },
            {
              "text": "Ich komme spät nach Hause."
            }
          ],
          "words": [
            "core.b1u3.thats-why"
          ]
        },
        {
          "id": "e14",
          "type": "dialogue",
          "title": "Ein freier Nachmittag",
          "lines": [
            {
              "speaker": "a",
              "name": "Ben",
              "en": "Why are you staying home today?",
              "de": "Warum bleibst du heute zu Hause?"
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Because I am tired. The reason is that I work hard.",
              "de": "Weil ich müde bin. Der Grund ist, dass ich viel arbeite."
            },
            {
              "speaker": "a",
              "name": "Ben",
              "en": "That's why you need a rest. For example, let's go to the park.",
              "de": "Deshalb brauchst du eine Pause. Zum Beispiel könnten wir in den Park gehen."
            },
            {
              "speaker": "b",
              "name": "Mia",
              "en": "Good idea. Thanks!",
              "de": "Gute Idee. Danke!"
            }
          ],
          "question": "Warum bleibt Mia zu Hause?",
          "choices": [
            {
              "text": "Sie ist müde.",
              "correct": true
            },
            {
              "text": "Es regnet."
            },
            {
              "text": "Sie hat kein Geld."
            }
          ],
          "words": [
            "core.b1u3.because",
            "core.b1u3.reason",
            "core.b1u3.thats-why",
            "core.b1u3.for-example"
          ]
        }
      ]
    },
    {
      "id": "core.b1u3.l5",
      "title": "Wiederholung",
      "description": "Alle Wörter der Unit gemischt, ohne neue Wörter",
      "exercises": [
        {
          "id": "e01",
          "type": "choice",
          "prompt": "Welches Bild zeigt „die Meinung“?",
          "choices": [
            {
              "text": "opinion",
              "emoji": "💭",
              "correct": true
            },
            {
              "text": "agree",
              "emoji": "👍"
            },
            {
              "text": "right",
              "emoji": "✅"
            }
          ],
          "words": [
            "core.b1u3.opinion",
            "core.b1u3.agree",
            "core.b1u3.right"
          ]
        },
        {
          "id": "e02",
          "type": "match",
          "pairs": [
            {
              "en": "better",
              "de": "besser"
            },
            {
              "en": "worse",
              "de": "schlechter"
            },
            {
              "en": "reason",
              "de": "der Grund"
            },
            {
              "en": "exactly",
              "de": "genau"
            },
            {
              "en": "for example",
              "de": "zum Beispiel"
            }
          ],
          "words": [
            "core.b1u3.better",
            "core.b1u3.worse",
            "core.b1u3.reason",
            "core.b1u3.exactly",
            "core.b1u3.for-example"
          ]
        },
        {
          "id": "e03",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich widerspreche dir.",
          "answer": "I disagree with you.",
          "distractors": [
            "agree",
            "better",
            "reason"
          ],
          "words": [
            "core.b1u3.disagree"
          ]
        },
        {
          "id": "e04",
          "type": "listen-choice",
          "audio": "Because it is cold, I stay inside.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Weil es kalt ist, bleibe ich drinnen.",
              "correct": true
            },
            {
              "text": "Obwohl es kalt ist, bleibe ich drinnen."
            },
            {
              "text": "Es ist heute warm."
            }
          ],
          "words": [
            "core.b1u3.because"
          ]
        },
        {
          "id": "e05",
          "type": "fill",
          "sentence": "She ___ with the plan.",
          "choices": [
            {
              "text": "agrees",
              "correct": true
            },
            {
              "text": "agree"
            },
            {
              "text": "agreeing"
            }
          ],
          "translation": "Sie stimmt dem Plan zu.",
          "explanation": "Bei she steht ein -s: she agrees.",
          "words": [
            "core.b1u3.agree"
          ]
        },
        {
          "id": "e06",
          "type": "type",
          "sentence": "Please give me a ___ for your choice.",
          "accepted": [
            "reason"
          ],
          "hint": "Grund",
          "translation": "Bitte gib mir einen Grund für deine Wahl.",
          "words": [
            "core.b1u3.reason"
          ]
        },
        {
          "id": "e07",
          "type": "speak",
          "text": "I think it is better than the old plan.",
          "translation": "Ich finde, es ist besser als der alte Plan.",
          "words": [
            "core.b1u3.i-think",
            "core.b1u3.better",
            "core.b1u3.than"
          ]
        },
        {
          "id": "e08",
          "type": "translate",
          "direction": "en-de",
          "prompt": "That's why I stay inside.",
          "answer": "Deshalb bleibe ich drinnen.",
          "distractors": [
            "weil",
            "Meinung",
            "gehe"
          ],
          "words": [
            "core.b1u3.thats-why"
          ]
        },
        {
          "id": "e09",
          "type": "listen-type",
          "audio": "I agree, that is exactly right.",
          "translation": "Ich stimme zu, das ist genau richtig.",
          "words": [
            "core.b1u3.agree",
            "core.b1u3.exactly",
            "core.b1u3.right"
          ]
        },
        {
          "id": "e10",
          "type": "translate",
          "direction": "de-en",
          "prompt": "Ich finde, du hast nicht recht.",
          "answer": "I think you are wrong.",
          "accepted": [
            "You are wrong, I think."
          ],
          "distractors": [
            "worse",
            "because",
            "agree"
          ],
          "words": [
            "core.b1u3.wrong",
            "core.b1u3.i-think"
          ]
        },
        {
          "id": "e11",
          "type": "type",
          "sentence": "In ___ view, we should wait.",
          "accepted": [
            "my"
          ],
          "hint": "meiner",
          "translation": "Meiner Ansicht nach sollten wir warten.",
          "words": [
            "core.b1u3.in-my-opinion"
          ]
        },
        {
          "id": "e12",
          "type": "listen-choice",
          "audio": "The old plan is worse than the new one.",
          "prompt": "Was hast du gehört?",
          "choices": [
            {
              "text": "Der alte Plan ist schlechter als der neue.",
              "correct": true
            },
            {
              "text": "Der alte Plan ist besser als der neue."
            },
            {
              "text": "Der neue Plan ist der beste."
            }
          ],
          "words": [
            "core.b1u3.worse",
            "core.b1u3.than"
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
              "en": "Good morning, everyone. What do you think of the new plan?",
              "de": "Guten Morgen, alle. Was haltet ihr vom neuen Plan?"
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "In my opinion, it is better than the old one.",
              "de": "Meiner Meinung nach ist er besser als der alte."
            },
            {
              "speaker": "a",
              "name": "Priya",
              "en": "I disagree. I think the old plan is better, because it is simple.",
              "de": "Ich widerspreche. Ich finde, der alte Plan ist besser, weil er einfach ist."
            },
            {
              "speaker": "b",
              "name": "Ben",
              "en": "Hm, that is a good reason. Let's talk about it.",
              "de": "Hm, das ist ein guter Grund. Lass uns darüber reden."
            }
          ],
          "question": "Welcher Plan gefällt Priya besser?",
          "choices": [
            {
              "text": "Der alte Plan.",
              "correct": true
            },
            {
              "text": "Der neue Plan."
            },
            {
              "text": "Beide gleich gut."
            }
          ],
          "words": [
            "core.b1u3.in-my-opinion",
            "core.b1u3.disagree",
            "core.b1u3.better",
            "core.b1u3.because",
            "core.b1u3.reason"
          ]
        }
      ]
    }
  ]
}

export const vocab: VocabEntry[] = [
  {
    "id": "core.b1u3.i-think",
    "en": "I think",
    "de": "ich finde",
    "pos": "phrase",
    "example": "I think it is a good idea.",
    "exampleDe": "Ich finde, es ist eine gute Idee.",
    "altEn": [
      "I think that"
    ],
    "altDe": [
      "ich denke"
    ],
    "note": "Leitet deine eigene Meinung ein. Danach folgt ein ganzer Satz."
  },
  {
    "id": "core.b1u3.in-my-opinion",
    "en": "in my opinion",
    "de": "meiner Meinung nach",
    "pos": "phrase",
    "example": "In my opinion, this plan is good.",
    "exampleDe": "Meiner Meinung nach ist dieser Plan gut.",
    "altEn": [
      "in my view"
    ],
    "altDe": [
      "meiner Ansicht nach",
      "aus meiner Sicht"
    ],
    "note": "Am Satzanfang meist mit Komma: In my opinion, ..."
  },
  {
    "id": "core.b1u3.i-believe",
    "en": "I believe",
    "de": "ich glaube",
    "pos": "phrase",
    "example": "I believe you are right.",
    "exampleDe": "Ich glaube, du hast recht.",
    "altEn": [
      "I believe that"
    ],
    "altDe": [
      "ich bin überzeugt"
    ],
    "note": "Etwas formeller als I think. Das Verb bleibt ohne -s: I believe, nie I believes."
  },
  {
    "id": "core.b1u3.opinion",
    "en": "opinion",
    "de": "die Meinung",
    "emoji": "💭",
    "pos": "noun",
    "example": "Everyone has an opinion.",
    "exampleDe": "Jeder hat eine Meinung.",
    "altDe": [
      "Ansicht"
    ],
    "note": "Nicht mit „Option“ verwechseln: option heißt Option oder Wahl."
  },
  {
    "id": "core.b1u3.i-dont-think-so",
    "en": "I don't think so",
    "de": "ich glaube nicht",
    "pos": "phrase",
    "example": "Will it rain? – I don't think so.",
    "exampleDe": "Wird es regnen? – Ich glaube nicht.",
    "altEn": [
      "I do not think so"
    ],
    "altDe": [
      "ich denke nicht"
    ],
    "note": "Höfliche Verneinung auf eine Ja/Nein-Frage."
  },
  {
    "id": "core.b1u3.agree",
    "en": "agree",
    "de": "zustimmen",
    "emoji": "👍",
    "pos": "verb",
    "example": "I agree with you.",
    "exampleDe": "Ich stimme dir zu.",
    "altEn": [
      "agree with"
    ],
    "altDe": [
      "einverstanden sein"
    ],
    "note": "Immer agree with: I agree with you, nie „I agree you“."
  },
  {
    "id": "core.b1u3.disagree",
    "en": "disagree",
    "de": "widersprechen",
    "emoji": "👎",
    "pos": "verb",
    "example": "I disagree with the plan.",
    "exampleDe": "Ich widerspreche dem Plan.",
    "altEn": [
      "disagree with"
    ],
    "altDe": [
      "anderer Meinung sein",
      "nicht zustimmen"
    ],
    "note": "Gegenteil von agree; ebenfalls mit with: disagree with you."
  },
  {
    "id": "core.b1u3.right",
    "en": "right",
    "de": "richtig",
    "emoji": "✅",
    "pos": "adj",
    "example": "You are right.",
    "exampleDe": "Du hast recht.",
    "altDe": [
      "recht",
      "Recht haben"
    ],
    "note": "You are right = Du hast recht. Achtung: „right“ heißt auch „rechts“."
  },
  {
    "id": "core.b1u3.wrong",
    "en": "wrong",
    "de": "falsch",
    "emoji": "❌",
    "pos": "adj",
    "example": "That answer is wrong.",
    "exampleDe": "Diese Antwort ist falsch.",
    "altDe": [
      "verkehrt"
    ],
    "note": "You are wrong = Du irrst dich."
  },
  {
    "id": "core.b1u3.exactly",
    "en": "exactly",
    "de": "genau",
    "pos": "adv",
    "example": "Exactly, that is what I mean.",
    "exampleDe": "Genau, das meine ich.",
    "altDe": [
      "exakt",
      "ganz genau"
    ],
    "note": "Als Zustimmung: „Exactly!“ = Genau!"
  },
  {
    "id": "core.b1u3.better",
    "en": "better",
    "de": "besser",
    "pos": "adj",
    "example": "This bike is better.",
    "exampleDe": "Dieses Fahrrad ist besser.",
    "note": "Unregelmäßig: good → better → the best. Nie „more good“."
  },
  {
    "id": "core.b1u3.worse",
    "en": "worse",
    "de": "schlechter",
    "pos": "adj",
    "example": "The weather is worse today.",
    "exampleDe": "Das Wetter ist heute schlechter.",
    "altDe": [
      "schlimmer"
    ],
    "note": "Unregelmäßig: bad → worse → the worst."
  },
  {
    "id": "core.b1u3.more-interesting",
    "en": "more interesting",
    "de": "interessanter",
    "pos": "adj",
    "example": "This book is more interesting.",
    "exampleDe": "Dieses Buch ist interessanter.",
    "note": "Lange Adjektive bekommen more: more expensive, more difficult."
  },
  {
    "id": "core.b1u3.than",
    "en": "than",
    "de": "als (beim Vergleich)",
    "pos": "other",
    "example": "This film is better than the book.",
    "exampleDe": "Dieser Film ist besser als das Buch.",
    "altDe": [
      "als"
    ],
    "note": "Steht nach dem Komparativ: better than, more interesting than."
  },
  {
    "id": "core.b1u3.the-best",
    "en": "the best",
    "de": "der/die/das beste",
    "pos": "adj",
    "example": "This is the best idea.",
    "exampleDe": "Das ist die beste Idee.",
    "altEn": [
      "best"
    ],
    "altDe": [
      "der beste",
      "die beste",
      "das beste"
    ],
    "note": "Mit the: the best, the worst. good → the best."
  },
  {
    "id": "core.b1u3.because",
    "en": "because",
    "de": "weil",
    "pos": "other",
    "example": "I stay inside because it is cold.",
    "exampleDe": "Ich bleibe drinnen, weil es kalt ist.",
    "note": "Vor einem Satz steht because, vor einem Nomen because of (= wegen)."
  },
  {
    "id": "core.b1u3.reason",
    "en": "reason",
    "de": "der Grund",
    "pos": "noun",
    "example": "What is the reason?",
    "exampleDe": "Was ist der Grund?",
    "altDe": [
      "Grund",
      "Begründung"
    ],
    "note": "Typisch: The reason is that ... – Der Grund ist, dass ..."
  },
  {
    "id": "core.b1u3.thats-why",
    "en": "that's why",
    "de": "deshalb",
    "pos": "phrase",
    "example": "It is cold. That's why I wear a coat.",
    "exampleDe": "Es ist kalt. Deshalb ziehe ich einen Mantel an.",
    "altEn": [
      "that is why"
    ],
    "altDe": [
      "darum"
    ],
    "note": "Nennt die Folge: erst der Grund, dann That's why, dann die Folge."
  },
  {
    "id": "core.b1u3.for-example",
    "en": "for example",
    "de": "zum Beispiel",
    "pos": "phrase",
    "example": "For example, Sam likes running.",
    "exampleDe": "Zum Beispiel läuft Sam gern.",
    "altEn": [
      "for instance"
    ],
    "altDe": [
      "beispielsweise"
    ],
    "note": "Nennt ein Beispiel. Danach oft ein Komma: For example, ..."
  }
]
