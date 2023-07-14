//memory test

k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "Memory test"; //title
window[t+"-msg"+k] = "Lets test with old words."; //message

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/unit3/two-rats-and-six-dogs.mp3"; //file name
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "दो";    
window[t+"-o2"+k] = "चूहे";
window[t+"-o3"+k] = "और";
window[t+"-o4"+k] = "छह";
window[t+"-o5"+k] = "कुत्ते";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "four _____"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "peacocks";
window[t+"-o2"+k] = "peacock";
window[t+"-ans"+k] = [1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "there are five dogs"; window[t+"-m"+k] = "eng/unit3/there-are-five-dogs.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "वहाँ ";    
window[t+"-o2"+k] = "पाँच";
window[t+"-o3"+k] = "कुत्ता";
window[t+"-o4"+k] = "हैं";
window[t+"-o5"+k] = "एक";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "this is a dog"; window[t+"-m"+k] = "eng/unit3/this-is-a-dog.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "यह";
window[t+"-o2"+k] = "एक";
window[t+"-o3"+k] = "कुत्ता";
window[t+"-o4"+k] = "है";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Bye"; window[t+"-m"+k] = "eng/level4/bye.mp3"; //m is music
window[t+"-o1"+k] = "अलविदा";
window[t+"-o2"+k] = "आप";
window[t+"-o3"+k] = "तुम";
window[t+"-o4"+k] = "माफ़ करें";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Good night"; window[t+"-m"+k] = "eng/level4/good-night.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "कैसा";
window[t+"-o2"+k] = "नहीं";
window[t+"-o3"+k] = "शुभ";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "गाड़ी";
window[t+"-o6"+k] = "रात्रि";
window[t+"-ans"+k] = [3,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "शुभ रात्रि"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "woman";
window[t+"-o2"+k] = "man";
window[t+"-o3"+k] = "good night";
window[t+"-o4"+k] = "I";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level4/bye-good-night.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "yes";
window[t+"-o2"+k] = "good";
window[t+"-o3"+k] = "sorry";
window[t+"-o4"+k] = "thank you";
window[t+"-o5"+k] = "bye";
window[t+"-o6"+k] = "night";
window[t+"-o7"+k] = "hello";
window[t+"-ans"+k] = [5,2,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "How is he?"; window[t+"-m"+k] = "eng/level4/how-is-he.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "कैसा";
window[t+"-o2"+k] = "नहीं";
window[t+"-o3"+k] = "ठीक";
window[t+"-o4"+k] = "धन्यवाद";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "वह";
window[t+"-o7"+k] = "दिल्ली";
window[t+"-ans"+k] = [6,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "He is fine"; window[t+"-m"+k] = "eng/level4/he-is-fine.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "पानी";
window[t+"-o2"+k] = "वह";
window[t+"-o3"+k] = "आदमी";
window[t+"-o4"+k] = "धन्यवाद";
window[t+"-o5"+k] = "ठीक";
window[t+"-o6"+k] = "है";
window[t+"-o7"+k] = "दिल्ली";
window[t+"-ans"+k] = [2,5,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Good morning"; window[t+"-m"+k] = "eng/level4/good-morning.mp3"; //m is music
window[t+"-o1"+k] = "कैसे";
window[t+"-o2"+k] = "सुप्रभात";
window[t+"-o3"+k] = "तुम";
window[t+"-o4"+k] = "आप";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "सुप्रभात"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "woman";
window[t+"-o2"+k] = "man";
window[t+"-o3"+k] = "good night";
window[t+"-o4"+k] = "good morning";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Good morning, how are you"; window[t+"-m"+k] = "eng/level4/good-morning-how-are-you.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "नमस्ते";
window[t+"-o2"+k] = "आप";
window[t+"-o3"+k] = "आदमी";
window[t+"-o4"+k] = "हो";
window[t+"-o5"+k] = "सुप्रभात";
window[t+"-o6"+k] = "औरत";
window[t+"-o7"+k] = "हैं";
window[t+"-o8"+k] = "कैसे";
window[t+"-ans"+k] = [5,2,8,7];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Hello"; window[t+"-m"+k] = "eng/level4/hello.mp3"; //m is music
window[t+"-o1"+k] = "मैं";
window[t+"-o2"+k] = "नमस्ते";
window[t+"-o3"+k] = "सुप्रभात";
window[t+"-o4"+k] = "धन्यवाद";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "नमस्ते"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Hello";
window[t+"-o2"+k] = "I";
window[t+"-o3"+k] = "Good morning";
window[t+"-o4"+k] = "How";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o-l-1"+k] = "वह"; window[t+"-o-r-1"+k] = "she";
window[t+"-o-l-2"+k] = "अलविदा"; window[t+"-o-r-2"+k] = "bye";
window[t+"-o-l-3"+k] = "उसका"; window[t+"-o-r-3"+k] = "his";
window[t+"-o-l-4"+k] = "नाम"; window[t+"-o-r-4"+k] = "name";
window[t+"-o-l-5"+k] = "चाय"; window[t+"-o-r-5"+k] = "tea";

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hello, how are you"; window[t+"-m"+k] = "eng/level4/hello-how-are-you.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "नमस्ते";
window[t+"-o2"+k] = "आप";
window[t+"-o3"+k] = "आदमी";
window[t+"-o4"+k] = "हो";
window[t+"-o5"+k] = "सुप्रभात";
window[t+"-o6"+k] = "औरत";
window[t+"-o7"+k] = "हैं";
window[t+"-o8"+k] = "कैसे";
window[t+"-ans"+k] = [1,2,8,7];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o-l-1"+k] = "दिल्ली"; window[t+"-o-r-1"+k] = "Delhi";
window[t+"-o-l-2"+k] = "खुश"; window[t+"-o-r-2"+k] = "Happy";
window[t+"-o-l-3"+k] = "ठीक"; window[t+"-o-r-3"+k] = "Fine";
window[t+"-o-l-4"+k] = "मेरा"; window[t+"-o-r-4"+k] = "My";
window[t+"-o-l-5"+k] = "भारत"; window[t+"-o-r-5"+k] = "India";

lesson2Total = k;
k=0;t='b';

b++;
window[t+"-type"+b] = "word";
window[t+"-q"+b] = "No"; window[t+"-m"+b] = "eng/level4/no.mp3"; //m is music
window[t+"-o1"+b] = "है";
window[t+"-o2"+b] = "नहीं";
window[t+"-o3"+b] = "शुभ";
window[t+"-o4"+b] = "कैसे";
window[t+"-ans"+b] = 2;

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "I am sad"; window[t+"-m"+b] = "eng/level4/i-am-sad.mp3"; //m is music
window[t+"-l"+b] = 7; //how many options are there
window[t+"-o1"+b] = "मुझे";
window[t+"-o2"+b] = "मैं";
window[t+"-o3"+b] = "दुखी";
window[t+"-o4"+b] = "रमेश";
window[t+"-o5"+b] = "खुश";
window[t+"-o6"+b] = "माफ़ करें";
window[t+"-o7"+b] = "हूँ";
window[t+"-ans"+b] = [2,3,7];

b++;
window[t+"-type"+b] = "word";
window[t+"-q"+b] = "दुखी"; window[t+"-m"+b] = null; //m is music
window[t+"-o1"+b] = "car";
window[t+"-o2"+b] = "is";
window[t+"-o3"+b] = "house";
window[t+"-o4"+b] = "sad";
window[t+"-ans"+b] = 4;

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "I am sorry"; window[t+"-m"+b] = "eng/level4/i-am-sorry.mp3"; //m is music
window[t+"-l"+b] = 7; //how many options are there
window[t+"-o1"+b] = "छात्र";
window[t+"-o2"+b] = "करें";
window[t+"-o3"+b] = "माफ़";
window[t+"-o4"+b] = "ठीक";
window[t+"-o5"+b] = "दिल्ली";
window[t+"-o6"+b] = "मुझे";
window[t+"-o7"+b] = "है";
window[t+"-ans"+b] = [6,3,2];

b++;
window[t+"-type"+b] = "image";
window[t+"-q"+b] = "सात"; window[t+"-m"+b] = null; //m is music
window[t+"-n"+b] = "seven"; window[t+"-n-m"+b] = "सात";
window[t+"-o1"+b] = "five"; window[t+"-l1-"+b] = "/level3/5.png"; window[t+"-m1-"+b] = "eng/unit3/5.mp3";
window[t+"-o2"+b] = "six"; window[t+"-l2-"+b] = "/level3/6.png"; window[t+"-m2-"+b] = "eng/unit3/6.mp3";
window[t+"-o3"+b] = "seven"; window[t+"-l3-"+b] = "/level3/7.png"; window[t+"-m3-"+b] = "eng/unit3/7.mp3";
window[t+"-o4"+b] = "eight"; window[t+"-l4-"+b] = "/level3/8.png"; window[t+"-m4-"+b] = "eng/unit3/8.mp3";
window[t+"-ans"+b] = 3;

b++;
window[t+"-type"+b] = "image";
window[t+"-q"+b] = "तीन"; window[t+"-m"+b] = null; //m is music
window[t+"-n"+b] = "three"; window[t+"-n-m"+b] = "तीन";
window[t+"-o1"+b] = "one"; window[t+"-l1-"+b] = "/level3/1.png"; window[t+"-m1-"+b] = "eng/unit3/1.mp3";
window[t+"-o2"+b] = "two"; window[t+"-l2-"+b] = "/level3/2.png"; window[t+"-m2-"+b] = "eng/unit3/2.mp3";
window[t+"-o3"+b] = "three"; window[t+"-l3-"+b] = "/level3/3.png"; window[t+"-m3-"+b] = "eng/unit3/3.mp3";
window[t+"-o4"+b] = "four"; window[t+"-l4-"+b] = "/level3/4.png"; window[t+"-m4-"+b] = "eng/unit3/4.mp3";
window[t+"-ans"+b] = 3;

b++;
window[t+"-type"+b] = "image";
window[t+"-q"+b] = "दो"; window[t+"-m"+b] = null; //m is music
window[t+"-n"+b] = "two"; window[t+"-n-m"+b] = "दो";
window[t+"-o1"+b] = "one"; window[t+"-l1-"+b] = "/level3/1.png"; window[t+"-m1-"+b] = "eng/unit3/1.mp3";
window[t+"-o2"+b] = "two"; window[t+"-l2-"+b] = "/level3/2.png"; window[t+"-m2-"+b] = "eng/unit3/2.mp3";
window[t+"-o3"+b] = "three"; window[t+"-l3-"+b] = "/level3/3.png"; window[t+"-m3-"+b] = "eng/unit3/3.mp3";
window[t+"-o4"+b] = "four"; window[t+"-l4-"+b] = "/level3/4.png"; window[t+"-m4-"+b] = "eng/unit3/4.mp3";
window[t+"-ans"+b] = 2;

b++;
window[t+"-type"+b] = "image";
window[t+"-q"+b] = "चार"; window[t+"-m"+b] = null; //m is music
window[t+"-n"+b] = "four"; window[t+"-n-m"+b] = "चार";
window[t+"-o1"+b] = "one"; window[t+"-l1-"+b] = "/level3/1.png"; window[t+"-m1-"+b] = "eng/unit3/1.mp3";
window[t+"-o2"+b] = "two"; window[t+"-l2-"+b] = "/level3/2.png"; window[t+"-m2-"+b] = "eng/unit3/2.mp3";
window[t+"-o3"+b] = "three"; window[t+"-l3-"+b] = "/level3/3.png"; window[t+"-m3-"+b] = "eng/unit3/3.mp3";
window[t+"-o4"+b] = "four"; window[t+"-l4-"+b] = "/level3/4.png"; window[t+"-m4-"+b] = "eng/unit3/4.mp3";
window[t+"-ans"+b] = 4;

b++;
window[t+"-type"+b] = "voice-mcq";
window[t+"-q"+b] = "eng/level4/no-i-am-sorry.mp3"; //file name
window[t+"-l"+b] = 8; //how many options are there
window[t+"-o1"+b] = "good night";
window[t+"-o2"+b] = "am";
window[t+"-o3"+b] = "you";
window[t+"-o4"+b] = "are";
window[t+"-o5"+b] = "student";
window[t+"-o6"+b] = "I";
window[t+"-o7"+b] = "no";
window[t+"-o8"+b] = "sorry";
window[t+"-ans"+b] = [7,6,2,8];

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "I am not fine"; window[t+"-m"+b] = "eng/level4/i-am-not-fine.mp3"; //m is music
window[t+"-l"+b] = 8; //how many options are there
window[t+"-o1"+b] = "खुश";
window[t+"-o2"+b] = "छात्र";
window[t+"-o3"+b] = "क्या";
window[t+"-o4"+b] = "और";
window[t+"-o5"+b] = "ठीक";
window[t+"-o6"+b] = "मैं";
window[t+"-o7"+b] = "हूँ";
window[t+"-o8"+b] = "नहीं";
window[t+"-ans"+b] = [6,5,8,7];

b++;
window[t+"-type"+b] = "word";
window[t+"-q"+b] = "नहीं"; window[t+"-m"+b] = null; //m is music
window[t+"-o1"+b] = "I";
window[t+"-o2"+b] = "is";
window[t+"-o3"+b] = "not";
window[t+"-o4"+b] = "a";
window[t+"-ans"+b] = 3;

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "Yes, I am fine"; window[t+"-m"+b] = "eng/level4/yes-i-am-fine.mp3"; //m is music
window[t+"-l"+b] = 8; //how many options are there
window[t+"-o1"+b] = "हैं";
window[t+"-o2"+b] = "हूँ";
window[t+"-o3"+b] = "मैं";
window[t+"-o4"+b] = "माफ़ करें";
window[t+"-o5"+b] = "रमेश";
window[t+"-o6"+b] = "ठीक";
window[t+"-o7"+b] = "शुभ रात्रि";
window[t+"-o8"+b] = "हाँ";
window[t+"-ans"+b] = [8,3,6,2];

b++;
window[t+"-type"+b] = "word";
window[t+"-q"+b] = "हाँ"; window[t+"-m"+b] = null; //m is music
window[t+"-o1"+b] = "yes";
window[t+"-o2"+b] = "you";
window[t+"-o3"+b] = "your";
window[t+"-o4"+b] = "no";
window[t+"-ans"+b] = 1;

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "Yes, I am Ramesh"; window[t+"-m"+b] = "eng/level4/yes-i-am-ramesh.mp3"; //m is music
window[t+"-l"+b] = 8; //how many options are there
window[t+"-o1"+b] = "हैं";
window[t+"-o2"+b] = "हूँ";
window[t+"-o3"+b] = "मैं";
window[t+"-o4"+b] = "माफ़ करें";
window[t+"-o5"+b] = "रमेश";
window[t+"-o6"+b] = "ठीक";
window[t+"-o7"+b] = "शुभ रात्रि";
window[t+"-o8"+b] = "हाँ";
window[t+"-ans"+b] = [8,3,5,2];

b++;
window[t+"-type"+b] = "word";
window[t+"-q"+b] = "Thank you"; window[t+"-m"+b] = "eng/level4/thank-you.mp3"; //m is music
window[t+"-o1"+b] = "क्या";
window[t+"-o2"+b] = "धन्यवाद";
window[t+"-o3"+b] = "मुझे";
window[t+"-o4"+b] = "रात्रि";
window[t+"-ans"+b] = 2;

b++;
window[t+"-type"+b] = "match";
window[t+"-l"+b] = 5; //how many options are there
window[t+"-o-l-1"+b] = "धन्यवाद"; window[t+"-o-r-1"+b] = "thank you";
window[t+"-o-l-2"+b] = "तुम्हारा"; window[t+"-o-r-2"+b] = "your";
window[t+"-o-l-3"+b] = "मैं"; window[t+"-o-r-3"+b] = "I";
window[t+"-o-l-4"+b] = "उसका"; window[t+"-o-r-4"+b] = "his";
window[t+"-o-l-5"+b] = "गाड़ी"; window[t+"-o-r-5"+b] = "car";

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "Thank you, good night"; window[t+"-m"+b] = "eng/level4/thank-you-good-night.mp3"; //m is music
window[t+"-l"+b] = 7; //how many options are there
window[t+"-o1"+b] = "माफ़";
window[t+"-o2"+b] = "धन्यवाद";
window[t+"-o3"+b] = "शुभ";
window[t+"-o4"+b] = "लड़की";
window[t+"-o5"+b] = "ठीक";
window[t+"-o6"+b] = "दुखी";
window[t+"-o7"+b] = "रात्रि";
window[t+"-ans"+b] = [2,3,7];

b++;
window[t+"-type"+b] = "match";
window[t+"-l"+b] = 5; //how many options are there
window[t+"-o-l-1"+b] = "मेरा"; window[t+"-o-r-1"+b] = "my";
window[t+"-o-l-2"+b] = "एक"; window[t+"-o-r-2"+b] = "a";
window[t+"-o-l-3"+b] = "चाय"; window[t+"-o-r-3"+b] = "tea";
window[t+"-o-l-4"+b] = "नहीं"; window[t+"-o-r-4"+b] = "not";
window[t+"-o-l-5"+b] = "और"; window[t+"-o-r-5"+b] = "and";

b++;
window[t+"-type"+b] = "mcq";
window[t+"-q"+b] = "No, thank you"; window[t+"-m"+b] = "eng/level4/no-thank-you.mp3"; //m is music
window[t+"-l"+b] = 6; //how many options are there
window[t+"-o1"+b] = "नहीं";
window[t+"-o2"+b] = "दुखी";
window[t+"-o3"+b] = "हाँ";
window[t+"-o4"+b] = "धन्यवाद";
window[t+"-o5"+b] = "लड़का";
window[t+"-o6"+b] = "ठीक";
window[t+"-ans"+b] = [1,4];

lesson2Total = k;
k=0;t='c';

c++;
window[t+"-type"+c] = "word";
window[t+"-q"+c] = "नहीं"; window[t+"-m"+c] = null; //m is music
window[t+"-o1"+c] = "not";
window[t+"-o2"+c] = "cold";
window[t+"-o3"+c] = "water";
window[t+"-o4"+c] = "what";
window[t+"-ans"+c] = 1;

c++;
window[t+"-type"+c] = "mcq";
window[t+"-q"+c] = "Hello, how are you?"; window[t+"-m"+c] = "eng/level4/hello-how-are-you.mp3"; //m is music
x=0;
x++;window[t+"-o1"+c] = "धन्यवाद";
x++;window[t+"-o2"+c] = "नमस्ते";
x++;window[t+"-o3"+c] = "रमेश";
x++;window[t+"-o4"+c] = "कैसे";
x++;window[t+"-o5"+c] = "आदमी";
x++;window[t+"-o6"+c] = "लड़का";
x++;window[t+"-o7"+c] = "आप";
x++;window[t+"-o8"+c] = "हैं";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [2,7,4,8];

c++;
window[t+"-type"+c] = "word";
window[t+"-q"+c] = "नमस्ते"; window[t+"-m"+c] = null; //m is music
window[t+"-o1"+c] = "India";
window[t+"-o2"+c] = "hello";
window[t+"-o3"+c] = "water";
window[t+"-o4"+c] = "what";
window[t+"-ans"+c] = 2;

c++;
window[t+"-type"+c] = "mcq";
window[t+"-q"+c] = "How is Ramesh?"; window[t+"-m"+c] = "eng/level4/how-is-ramesh.mp3"; //m is music
x=0;
x++;window[t+"-o1"+c] = "क्या";
x++;window[t+"-o2"+c] = "कैसी";
x++;window[t+"-o3"+c] = "है";
x++;window[t+"-o4"+c] = "रमेश";
x++;window[t+"-o5"+c] = "तुम";
x++;window[t+"-o6"+c] = "घर";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [4,2,3];

c++;
window[t+"-type"+c] = "voice-mcq";
window[t+"-q"+c] = "eng/level4/yes-i-am-a-woman.mp3"; //file name
x=0;
x++;window[t+"-o1"+c] = "hello";
x++;window[t+"-o2"+c] = "bye";
x++;window[t+"-o3"+c] = "am";
x++;window[t+"-o4"+c] = "woman";
x++;window[t+"-o5"+c] = "yes";
x++;window[t+"-o6"+c] = "a";
x++;window[t+"-o7"+c] = "she";
x++;window[t+"-o8"+c] = "how";
x++;window[t+"-o9"+c] = "I";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [5,9,3,6,4];

c++;
window[t+"-type"+c] = "mcq";
window[t+"-q"+c] = "पाँच कुत्ते"; window[t+"-m"+c] = null; //m is music
window[t+"-l"+c] = 2; //how many options are there
window[t+"-o1"+c] = "five dogs";    
window[t+"-o2"+c] = "five dog";
window[t+"-ans"+c] = [1];

c++;
window[t+"-type"+c] = "mcq";
window[t+"-q"+c] = "एक कुत्ता"; window[t+"-m"+c] = null; //m is music
window[t+"-l"+c] = 2; //how many options are there
window[t+"-o1"+c] = "one dogs";    
window[t+"-o2"+c] = "one dog";
window[t+"-ans"+c] = [2];

c++;
window[t+"-type"+c] = "mcq";
window[t+"-q"+c] = "there are five dogs"; window[t+"-m"+c] = "eng/unit3/there-are-five-dogs.mp3"; //m is music
window[t+"-n"+c] = "there"; window[t+"-n-m"+c] = "वहाँ ";
window[t+"-l"+c] = 5; //how many options are there
window[t+"-o1"+c] = "वहाँ ";    
window[t+"-o2"+c] = "पाँच";
window[t+"-o3"+c] = "कुत्ता";
window[t+"-o4"+c] = "हैं";
window[t+"-o5"+c] = "एक";
window[t+"-ans"+c] = [1,2,3,4];

c++;
window[t+"-type"+c] = "mcq";
window[t+"-q"+c] = "I am not Neha"; window[t+"-m"+c] = "eng/level4/i-am-not-neha.mp3"; //m is music
x=0;
x++;window[t+"-o1"+c] = "लड़की";
x++;window[t+"-o2"+c] = "एक";
x++;window[t+"-o3"+c] = "माफ़";
x++;window[t+"-o4"+c] = "नहीं";
x++;window[t+"-o5"+c] = "शुभ रात्रि";
x++;window[t+"-o6"+c] = "नेहा";
x++;window[t+"-o7"+c] = "मैं";
x++;window[t+"-o8"+c] = "हूँ";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [7,6,4,8];

c++;
window[t+"-type"+c] = "voice-mcq";
window[t+"-q"+c] = "eng/level4/yes-i-am-a-man.mp3"; //file name
x=0;
x++;window[t+"-o1"+c] = "hello";
x++;window[t+"-o2"+c] = "bye";
x++;window[t+"-o3"+c] = "am";
x++;window[t+"-o4"+c] = "man";
x++;window[t+"-o5"+c] = "yes";
x++;window[t+"-o6"+c] = "a";
x++;window[t+"-o7"+c] = "she";
x++;window[t+"-o8"+c] = "how";
x++;window[t+"-o9"+c] = "I";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [5,9,3,6,4];

c++;
window[t+"-type"+c] = "voice-mcq";
window[t+"-q"+c] = "eng/level4/good-morning-how-are-you.mp3"; //file name
x=0;
x++;window[t+"-o1"+c] = "you";
x++;window[t+"-o2"+c] = "good night";
x++;window[t+"-o3"+c] = "are";
x++;window[t+"-o4"+c] = "good";
x++;window[t+"-o5"+c] = "sorry";
x++;window[t+"-o6"+c] = "morning";
x++;window[t+"-o7"+c] = "student";
x++;window[t+"-o8"+c] = "she";
x++;window[t+"-o9"+c] = "how";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [4,6,9,3,1];

c++;
window[t+"-type"+c] = "voice-mcq";
window[t+"-q"+c] = "eng/level4/he-is-sad.mp3"; //file name
x=0;
x++;window[t+"-o1"+c] = "he";
x++;window[t+"-o2"+c] = "sad";
x++;window[t+"-o3"+c] = "she";
x++;window[t+"-o4"+c] = "is";
x++;window[t+"-o5"+c] = "am";
x++;window[t+"-o6"+c] = "from";
x++;window[t+"-o7"+c] = "are";
window[t+"-l"+c] = x; //how many options are there
window[t+"-ans"+c] = [1,4,2];

lesson3Total = k;
k=0;t='d';

d++;
window[t+"-type"+d] = "voice-mcq";
window[t+"-q"+d] = "eng/level1/my-house-is-small.mp3"; //file name
window[t+"-l"+d] = 7; //how many options are there
window[t+"-o1"+d] = "my";
window[t+"-o2"+d] = "hot";
window[t+"-o3"+d] = "house";
window[t+"-o4"+d] = "her";
window[t+"-o5"+d] = "small";
window[t+"-o6"+d] = "and";
window[t+"-o7"+d] = "is";
window[t+"-ans"+d] = [1,3,7,5];

d++;
window[t+"-type"+d] = "mcq";
window[t+"-q"+d] = "Your car and my house"; window[t+"-m"+d] = "eng/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-l"+d] = 9; //how many options are there
window[t+"-o1"+d] = "छोटा";
window[t+"-o2"+d] = "मेरा";
window[t+"-o3"+d] = "क्या";
window[t+"-o4"+d] = "गाड़ी";
window[t+"-o5"+d] = "है";
window[t+"-o6"+d] = "तुम्हारी";
window[t+"-o7"+d] = "घर";
window[t+"-o8"+d] = "मेरी";
window[t+"-o9"+d] = "और";
window[t+"-ans"+d] = [6,4,9,2,7];

d++;
window[t+"-type"+d] = "voice-mcq";
window[t+"-q"+d] = "eng/level1/his-tea-is-cold.mp3"; //file name
window[t+"-l"+d] = 7; //how many options are there
window[t+"-o1"+d] = "my";
window[t+"-o2"+d] = "hot";
window[t+"-o3"+d] = "tea";
window[t+"-o4"+d] = "his";
window[t+"-o5"+d] = "cold";
window[t+"-o6"+d] = "and";
window[t+"-o7"+d] = "is";
window[t+"-ans"+d] = [4,3,7,5];

d++;
window[t+"-type"+d] = "mcq";
window[t+"-q"+d] = "Is this a bird?"; window[t+"-m"+d] = "eng/unit3/is-this-a-bird.mp3"; //m is music
window[t+"-l"+d] = 4; //how many options are there
window[t+"-o1"+d] = "क्या";    
window[t+"-o2"+d] = "यह";
window[t+"-o3"+d] = "पक्षी";
window[t+"-o4"+d] = "है?";
window[t+"-ans"+d] = [1,2,3,4];

d++;
window[t+"-type"+d] = "mcq";
window[t+"-q"+d] = "Yes, three pigeons and seven peacocks"; window[t+"-m"+d] = "eng/unit3/yes-three-pigeons-and-seven-peacocks.mp3"; //m is music
window[t+"-l"+d] = 6; //how many options are there
window[t+"-o1"+d] = "हाँ,";
window[t+"-o2"+d] = "तीन";
window[t+"-o3"+d] = "कबूतर";
window[t+"-o4"+d] = "और";
window[t+"-o5"+d] = "सात";
window[t+"-o6"+d] = "मोर।";
window[t+"-ans"+d] = [1,2,3,4,5,6];

d++;
window[t+"-type"+d] = "voice-mcq";
window[t+"-q"+d] = "eng/level2/my-student-is-from-india.mp3"; //file name
window[t+"-l"+d] = 9; //how many options are there
window[t+"-o1"+d] = "and";
window[t+"-o2"+d] = "student";
window[t+"-o3"+d] = "what";
window[t+"-o4"+d] = "from";
window[t+"-o5"+d] = "cold";
window[t+"-o6"+d] = "my";
window[t+"-o7"+d] = "india";
window[t+"-o8"+d] = "hot";
window[t+"-o9"+d] = "is";
window[t+"-ans"+d] = [6,2,9,4,7];

d++;
window[t+"-type"+d] = "voice-mcq";
window[t+"-q"+d] = "eng/level2/peter-is-a-man.mp3"; //file name
window[t+"-l"+d] = 8; //how many options are there
window[t+"-o1"+d] = "a";
window[t+"-o2"+d] = "he";
window[t+"-o3"+d] = "happy";
window[t+"-o4"+d] = "Peter";
window[t+"-o5"+d] = "student";
window[t+"-o6"+d] = "she";
window[t+"-o7"+d] = "is";
window[t+"-o8"+d] = "man";
window[t+"-ans"+d] = [4,7,1,8];

d++;
window[t+"-type"+d] = "mcq";
window[t+"-q"+d] = "a man and woman"; window[t+"-m"+d] = "eng/level2/a-man-and-woman.mp3"; //m is music
window[t+"-l"+d] = 8; //how many options are there
window[t+"-o1"+d] = "और";
window[t+"-o2"+d] = "है";
window[t+"-o3"+d] = "एक";
window[t+"-o4"+d] = "हो";
window[t+"-o5"+d] = "से";
window[t+"-o6"+d] = "आदमी";
window[t+"-o7"+d] = "लड़का";
window[t+"-o8"+d] = "औरत";
window[t+"-ans"+d] = [3,6,1,8];

d++;
window[t+"-type"+d] = "mcq";
window[t+"-q"+d] = "तुम्हारा घर बड़ा है।"; window[t+"-m"+d] = null; //m is music
window[t+"-l"+d] = 8; //how many options are there
window[t+"-o1"+d] = "hot";
window[t+"-o2"+d] = "small";
window[t+"-o3"+d] = "is";
window[t+"-o4"+d] = "what";
window[t+"-o5"+d] = "your";
window[t+"-o6"+d] = "my";
window[t+"-o7"+d] = "house";
window[t+"-o8"+d] = "big";
window[t+"-ans"+d] = [5,7,3,8];

d++;
window[t+"-type"+d] = "mcq";
window[t+"-q"+d] = "मेरा घर बड़ा है।"; window[t+"-m"+d] = null; //m is music
window[t+"-l"+d] = 8; //how many options are there
window[t+"-o1"+d] = "hot";
window[t+"-o2"+d] = "small";
window[t+"-o3"+d] = "is";
window[t+"-o4"+d] = "what";
window[t+"-o5"+d] = "your";
window[t+"-o6"+d] = "my";
window[t+"-o7"+d] = "house";
window[t+"-o8"+d] = "big";
window[t+"-ans"+d] = [6,7,3,8];

lesson4Total = k;