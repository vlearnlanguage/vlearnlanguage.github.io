//memory test

k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "Memory test"; //title
window[t+"-msg"+k] = "Lets test with old words."; //message

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

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "No"; window[t+"-m"+k] = "eng/level4/no.mp3"; //m is music
window[t+"-o1"+k] = "है";
window[t+"-o2"+k] = "नहीं";
window[t+"-o3"+k] = "शुभ";
window[t+"-o4"+k] = "कैसे";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am sad"; window[t+"-m"+k] = "eng/level4/i-am-sad.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "मुझे";
window[t+"-o2"+k] = "मैं";
window[t+"-o3"+k] = "दुखी";
window[t+"-o4"+k] = "रमेश";
window[t+"-o5"+k] = "खुश";
window[t+"-o6"+k] = "माफ़ करें";
window[t+"-o7"+k] = "हूँ";
window[t+"-ans"+k] = [2,3,7];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "दुखी"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "sad";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am sorry"; window[t+"-m"+k] = "eng/level4/i-am-sorry.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "छात्र";
window[t+"-o2"+k] = "करें";
window[t+"-o3"+k] = "माफ़";
window[t+"-o4"+k] = "ठीक";
window[t+"-o5"+k] = "दिल्ली";
window[t+"-o6"+k] = "मुझे";
window[t+"-o7"+k] = "है";
window[t+"-ans"+k] = [6,3,2];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level4/no-i-am-sorry.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "good night";
window[t+"-o2"+k] = "am";
window[t+"-o3"+k] = "you";
window[t+"-o4"+k] = "are";
window[t+"-o5"+k] = "student";
window[t+"-o6"+k] = "I";
window[t+"-o7"+k] = "no";
window[t+"-o8"+k] = "sorry";
window[t+"-ans"+k] = [7,6,2,8];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am not fine"; window[t+"-m"+k] = "eng/level4/i-am-not-fine.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "खुश";
window[t+"-o2"+k] = "छात्र";
window[t+"-o3"+k] = "क्या";
window[t+"-o4"+k] = "और";
window[t+"-o5"+k] = "ठीक";
window[t+"-o6"+k] = "मैं";
window[t+"-o7"+k] = "हूँ";
window[t+"-o8"+k] = "नहीं";
window[t+"-ans"+k] = [6,5,8,7];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "नहीं"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "I";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "not";
window[t+"-o4"+k] = "a";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Yes, I am fine"; window[t+"-m"+k] = "eng/level4/yes-i-am-fine.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "हैं";
window[t+"-o2"+k] = "हूँ";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "माफ़ करें";
window[t+"-o5"+k] = "रमेश";
window[t+"-o6"+k] = "ठीक";
window[t+"-o7"+k] = "शुभ रात्रि";
window[t+"-o8"+k] = "हाँ";
window[t+"-ans"+k] = [8,3,6,2];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "हाँ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "yes";
window[t+"-o2"+k] = "you";
window[t+"-o3"+k] = "your";
window[t+"-o4"+k] = "no";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Yes, I am Ramesh"; window[t+"-m"+k] = "eng/level4/yes-i-am-ramesh.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "हैं";
window[t+"-o2"+k] = "हूँ";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "माफ़ करें";
window[t+"-o5"+k] = "रमेश";
window[t+"-o6"+k] = "ठीक";
window[t+"-o7"+k] = "शुभ रात्रि";
window[t+"-o8"+k] = "हाँ";
window[t+"-ans"+k] = [8,3,5,2];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Thank you"; window[t+"-m"+k] = "eng/level4/thank-you.mp3"; //m is music
window[t+"-o1"+k] = "क्या";
window[t+"-o2"+k] = "धन्यवाद";
window[t+"-o3"+k] = "मुझे";
window[t+"-o4"+k] = "रात्रि";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "धन्यवाद"; window[t+"-o-r-1"+k] = "thank you";
window[t+"-o-l-2"+k] = "तुम्हारा"; window[t+"-o-r-2"+k] = "your";
window[t+"-o-l-3"+k] = "मैं"; window[t+"-o-r-3"+k] = "I";
window[t+"-o-l-4"+k] = "उसका"; window[t+"-o-r-4"+k] = "his";
window[t+"-o-l-5"+k] = "गाड़ी"; window[t+"-o-r-5"+k] = "car";

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Thank you, good night"; window[t+"-m"+k] = "eng/level4/thank-you-good-night.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "माफ़";
window[t+"-o2"+k] = "धन्यवाद";
window[t+"-o3"+k] = "शुभ";
window[t+"-o4"+k] = "लड़की";
window[t+"-o5"+k] = "ठीक";
window[t+"-o6"+k] = "दुखी";
window[t+"-o7"+k] = "रात्रि";
window[t+"-ans"+k] = [2,3,7];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "मेरा"; window[t+"-o-r-1"+k] = "my";
window[t+"-o-l-2"+k] = "एक"; window[t+"-o-r-2"+k] = "a";
window[t+"-o-l-3"+k] = "चाय"; window[t+"-o-r-3"+k] = "tea";
window[t+"-o-l-4"+k] = "नहीं"; window[t+"-o-r-4"+k] = "not";
window[t+"-o-l-5"+k] = "और"; window[t+"-o-r-5"+k] = "and";

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "No, thank you"; window[t+"-m"+k] = "eng/level4/no-thank-you.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "नहीं";
window[t+"-o2"+k] = "दुखी";
window[t+"-o3"+k] = "हाँ";
window[t+"-o4"+k] = "धन्यवाद";
window[t+"-o5"+k] = "लड़का";
window[t+"-o6"+k] = "ठीक";
window[t+"-ans"+k] = [1,4];

lesson2Total = k;
k=0;t='c';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "नहीं"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "not";
window[t+"-o2"+k] = "cold";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "what";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hello, how are you?"; window[t+"-m"+k] = "eng/level4/hello-how-are-you.mp3"; //m is music
x=0;
x++;window[t+"-o1"+k] = "धन्यवाद";
x++;window[t+"-o2"+k] = "नमस्ते";
x++;window[t+"-o3"+k] = "रमेश";
x++;window[t+"-o4"+k] = "कैसे";
x++;window[t+"-o5"+k] = "आदमी";
x++;window[t+"-o6"+k] = "लड़का";
x++;window[t+"-o7"+k] = "आप";
x++;window[t+"-o8"+k] = "हैं";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [2,7,4,8];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "नमस्ते"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "India";
window[t+"-o2"+k] = "hello";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "what";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "How is Ramesh?"; window[t+"-m"+k] = "eng/level4/how-is-ramesh.mp3"; //m is music
x=0;
x++;window[t+"-o1"+k] = "क्या";
x++;window[t+"-o2"+k] = "कैसी";
x++;window[t+"-o3"+k] = "है";
x++;window[t+"-o4"+k] = "रमेश";
x++;window[t+"-o5"+k] = "तुम";
x++;window[t+"-o6"+k] = "घर";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [4,2,3];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level4/yes-i-am-a-woman.mp3"; //file name
x=0;
x++;window[t+"-o1"+k] = "hello";
x++;window[t+"-o2"+k] = "bye";
x++;window[t+"-o3"+k] = "am";
x++;window[t+"-o4"+k] = "woman";
x++;window[t+"-o5"+k] = "yes";
x++;window[t+"-o6"+k] = "a";
x++;window[t+"-o7"+k] = "she";
x++;window[t+"-o8"+k] = "how";
x++;window[t+"-o9"+k] = "I";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [5,9,3,6,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am not Neha"; window[t+"-m"+k] = "eng/level4/i-am-not-neha.mp3"; //m is music
x=0;
x++;window[t+"-o1"+k] = "लड़की";
x++;window[t+"-o2"+k] = "एक";
x++;window[t+"-o3"+k] = "माफ़";
x++;window[t+"-o4"+k] = "नहीं";
x++;window[t+"-o5"+k] = "शुभ रात्रि";
x++;window[t+"-o6"+k] = "नेहा";
x++;window[t+"-o7"+k] = "मैं";
x++;window[t+"-o8"+k] = "हूँ";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [7,6,4,8];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level4/yes-i-am-a-man.mp3"; //file name
x=0;
x++;window[t+"-o1"+k] = "hello";
x++;window[t+"-o2"+k] = "bye";
x++;window[t+"-o3"+k] = "am";
x++;window[t+"-o4"+k] = "man";
x++;window[t+"-o5"+k] = "yes";
x++;window[t+"-o6"+k] = "a";
x++;window[t+"-o7"+k] = "she";
x++;window[t+"-o8"+k] = "how";
x++;window[t+"-o9"+k] = "I";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [5,9,3,6,4];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level4/good-morning-how-are-you.mp3"; //file name
x=0;
x++;window[t+"-o1"+k] = "you";
x++;window[t+"-o2"+k] = "good night";
x++;window[t+"-o3"+k] = "are";
x++;window[t+"-o4"+k] = "good";
x++;window[t+"-o5"+k] = "sorry";
x++;window[t+"-o6"+k] = "morning";
x++;window[t+"-o7"+k] = "student";
x++;window[t+"-o8"+k] = "she";
x++;window[t+"-o9"+k] = "how";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [4,6,9,3,1];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level4/he-is-sad.mp3"; //file name
x=0;
x++;window[t+"-o1"+k] = "he";
x++;window[t+"-o2"+k] = "sad";
x++;window[t+"-o3"+k] = "she";
x++;window[t+"-o4"+k] = "is";
x++;window[t+"-o5"+k] = "am";
x++;window[t+"-o6"+k] = "from";
x++;window[t+"-o7"+k] = "are";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [1,4,2];

lesson3Total = k;
k=0;t='d';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "Excercise"; //title
window[t+"-msg"+k] = "Let's revise the chapters"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "Hello, how are you?"; window[t+"-t"+xt+"-l"+k] = "नमस्ते, आप कैसे हैं?"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "I am fine, thank you."; window[t+"-t"+xt+"-r"+k] = "मैं ठीक हूँ, धन्यवाद।"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3'; //l=left,r=right q=ques,t=translated
xt++;window[t+"-q"+xt+"-l"+k] = "Are you from Delhi?"; window[t+"-t"+xt+"-l"+k] = "क्या तुम दिल्ली से हो?"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "No, I am from Mumbai."; window[t+"-t"+xt+"-r"+k] = "नहीं, मैं मुंबई से हूं."; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3'; //l=left,r=right q=ques,t=translated
xt++;window[t+"-q"+xt+"-l"+k] = "My brother and granddaughter is from Mumbai."; window[t+"-t"+xt+"-l"+k] = "मेरा भाई और पोती मुंबई से हैं।"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "My mother and sister is from Delhi."; window[t+"-t"+xt+"-r"+k] = "मेरी माँ और बहन दिल्ली से हैं।"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3'; //l=left,r=right q=ques,t=translated
xt++;window[t+"-q"+xt+"-l"+k] = "Bye, good night."; window[t+"-t"+xt+"-l"+k] = "अलविदा, शुभ रात्रि."; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
window[t+"-len"+k]=xt;

lesson4Total = k;