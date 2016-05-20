"use strict";

const allEmotions = [
    "anger",
    "annoyance",
    "contempt",
    "disgust",
    "irritation",
    "anxiety",
    "embarrassment",
    "fear",
    "helplessness",
    "powerlessness",
    "worry",
    "doubt",
    "envy",
    "frustration",
    "guilt",
    "shame",
    "boredom",
    "despair",
    "disappointment",
    "hurt",
    "sadness",
    "shock",
    "stress",
    "tension",
    "amusement",
    "delight",
    "elation",
    "excitement",
    "happiness",
    "joy",
    "pleasure",
    "affection",
    "empathy",
    "friendliness",
    "love",
    "courage",
    "hope",
    "pride",
    "satisfaction",
    "trust",
    "calm",
    "content",
    "relaxed",
    "relieved",
    "serene",
    "interest",
    "politeness",
    "surprise"];


module.exports = allEmotions.reduce(function (soul, emotion) {
    soul[emotion] = require('./' + emotion);
    return soul;
}, function (/* ... */) {
    return function (the_world) { /* +1 emotions */; return the_world; };
});