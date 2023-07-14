//Lesson1 [Old Words]{Memory Test}

k=0;t='a';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Girl"; window[t+"-m"+k] = "eng/level2/girl.mp3"; //m is music
window[t+"-n"+k] = "girl"; window[t+"-n-m"+k] = "लड़की"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पानी"; window[t+"-l1-"+k] = "/level1/water.png";
window[t+"-o2"+k] = "छात्र"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "लड़का"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Student"; window[t+"-m"+k] = "eng/level2/student.mp3"; //m is music
window[t+"-n"+k] = "student"; window[t+"-n-m"+k] = "छात्र"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "गरम"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "छात्र"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "लड़का"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "छात्र"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "cold";
window[t+"-o2"+k] = "house";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "a";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My student"; window[t+"-m"+k] = "eng/level2/my-student.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "वह";
window[t+"-o2"+k] = "छात्र";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "मेरा";
window[t+"-o5"+k] = "आपका";
window[t+"-o6"+k] = "क्या";
window[t+"-ans"+k] = [4,2];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/your-student.mp3"; //file name
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "a";
window[t+"-o5"+k] = "student";
window[t+"-o6"+k] = "happy";
window[t+"-ans"+k] = [1,5];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Boy"; window[t+"-m"+k] = "eng/level2/boy.mp3"; //m is music
window[t+"-n"+k] = "boy"; window[t+"-n-m"+k] = "लड़का"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "गरम"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "छात्र"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "लड़का"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "A boy"; window[t+"-m"+k] = "eng/level2/a-boy.mp3"; //m is music
window[t+"-n"+k] = "a"; window[t+"-n-m"+k] = "एक"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "वह";
window[t+"-o2"+k] = "छात्र";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "एक";
window[t+"-o5"+k] = "आपका";
window[t+"-o6"+k] = "लड़का";
window[t+"-ans"+k] = [4,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am a boy"; window[t+"-m"+k] = "eng/level2/i-am-a-boy.mp3"; //m is music
window[t+"-n"+k] = "I मैं"; window[t+"-n-m"+k] = "am हूं"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "लड़का";
window[t+"-o2"+k] = "हूं";
window[t+"-o3"+k] = "और";
window[t+"-o4"+k] = "एक";
window[t+"-o5"+k] = "भारत";
window[t+"-o6"+k] = "मैं";
window[t+"-o7"+k] = "औरत";
window[t+"-o8"+k] = "आपका";
window[t+"-ans"+k] = [6,4,1,2];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "मैं"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "cold";
window[t+"-o2"+k] = "I";
window[t+"-o3"+k] = "name";
window[t+"-o4"+k] = "a";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "I am ____ student"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "an";
window[t+"-o2"+k] = "am";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "लड़की"; window[t+"-o-r-1"+k] = "girl";
window[t+"-o-l-2"+k] = "तुम्हारा"; window[t+"-o-r-2"+k] = "your";
window[t+"-o-l-3"+k] = "पानी"; window[t+"-o-r-3"+k] = "water";
window[t+"-o-l-4"+k] = "चाय"; window[t+"-o-r-4"+k] = "tea";
window[t+"-o-l-5"+k] = "नाम"; window[t+"-o-r-5"+k] = "name";

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मैं एक लड़की हूँ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "man";
window[t+"-o2"+k] = "a";
window[t+"-o3"+k] = "i";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "she";
window[t+"-o6"+k] = "girl";
window[t+"-o7"+k] = "are";
window[t+"-o8"+k] = "am";
window[t+"-ans"+k] = [3,8,2,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मैं एक छात्र हूँ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "man";
window[t+"-o2"+k] = "a";
window[t+"-o3"+k] = "i";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "she";
window[t+"-o6"+k] = "student";
window[t+"-o7"+k] = "are";
window[t+"-o8"+k] = "am";
window[t+"-ans"+k] = [3,8,2,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मैं एक लड़का हूँ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "man";
window[t+"-o2"+k] = "a";
window[t+"-o3"+k] = "i";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "she";
window[t+"-o6"+k] = "boy";
window[t+"-o7"+k] = "are";
window[t+"-o8"+k] = "am";
window[t+"-ans"+k] = [3,8,2,6];


lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "India"; window[t+"-m"+k] = "eng/level2/india.mp3"; //m is music
window[t+"-n"+k] = "India"; window[t+"-n-m"+k] = "भारत"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "छात्र"; window[t+"-l1-"+k] = "/level2/student.png";
window[t+"-o2"+k] = "लड़का"; window[t+"-l2-"+k] = "/level2/boy.png";
window[t+"-o3"+k] = "भारत"; window[t+"-l3-"+k] = "/level2/india.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My student is from india"; window[t+"-m"+k] = "eng/level2/my-student-is-from-india.mp3"; //m is music
window[t+"-n"+k] = "From"; window[t+"-n-m"+k] = "से"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "भारत";
window[t+"-o2"+k] = "मेरा";
window[t+"-o3"+k] = "से";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "घर";
window[t+"-o6"+k] = "नाम";
window[t+"-o7"+k] = "उसका";
window[t+"-o8"+k] = "छात्र";
window[t+"-o9"+k] = "एक";
window[t+"-ans"+k] = [2,8,1,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am from delhi"; window[t+"-m"+k] = "eng/level2/i-am-from-delhi.mp3"; //m is music
window[t+"-n"+k] = "delhi"; window[t+"-n-m"+k] = "दिल्ली"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "आदमी";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "से";
window[t+"-o4"+k] = "हूँ";
window[t+"-o5"+k] = "मैं";
window[t+"-o6"+k] = "छात्र";
window[t+"-o7"+k] = "दिल्ली";
window[t+"-ans"+k] = [5,7,3,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "दिल्ली"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "Delhi";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "hot";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are from india"; window[t+"-m"+k] = "eng/level2/you-are-from-india.mp3"; //m is music
window[t+"-n"+k] = "you : तुम  , आप"; window[t+"-n-m"+k] = "are: हो , हैं"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "भारत";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "एक";
window[t+"-o4"+k] = "तुम";
window[t+"-o5"+k] = "हो";
window[t+"-o6"+k] = "मैं";
window[t+"-o7"+k] = "से";
window[t+"-ans"+k] = [4,1,7,5];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/are-you-from-india.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "boy";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "she";
window[t+"-o5"+k] = "you";
window[t+"-o6"+k] = "are";
window[t+"-o7"+k] = "happy";
window[t+"-o8"+k] = "india";
window[t+"-ans"+k] = [6,5,1,8];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "You ____ from Delhi."; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "am";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "are";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are from india"; window[t+"-m"+k] = "eng/level2/you-are-from-india.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "से";
window[t+"-o2"+k] = "दिल्ली";
window[t+"-o3"+k] = "भारत";
window[t+"-o4"+k] = "एक";
window[t+"-o5"+k] = "हो";
window[t+"-o6"+k] = "खुश";
window[t+"-o7"+k] = "तुम";
window[t+"-ans"+k] = [7,3,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Are you from india?"; window[t+"-m"+k] = "eng/level2/are-you-from-india.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "भारत";
window[t+"-o2"+k] = "दिल्ली";
window[t+"-o3"+k] = "छात्र";
window[t+"-o4"+k] = "से";
window[t+"-o5"+k] = "हो";
window[t+"-o6"+k] = "औरत";
window[t+"-o7"+k] = "तुम";
window[t+"-o8"+k] = "क्या";
window[t+"-ans"+k] = [8,7,1,4,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are happy"; window[t+"-m"+k] = "eng/level2/you-are-happy.mp3"; //m is music
window[t+"-n"+k] = "happy"; window[t+"-n-m"+k] = "खुश"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "तुम्हारा";
window[t+"-o2"+k] = "औरत";
window[t+"-o3"+k] = "हो";
window[t+"-o4"+k] = "और";
window[t+"-o5"+k] = "तुम";
window[t+"-o6"+k] = "एक";
window[t+"-o7"+k] = "खुश";
window[t+"-ans"+k] = [5,7,3];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "खुश"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "india";
window[t+"-o2"+k] = "happy";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम भारत से हो"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "he";
window[t+"-o3"+k] = "and";
window[t+"-o4"+k] = "boy";
window[t+"-o5"+k] = "you";
window[t+"-o6"+k] = "are";
window[t+"-o7"+k] = "India";
window[t+"-ans"+k] = [5,6,1,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम दिल्ली से हो"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "he";
window[t+"-o3"+k] = "and";
window[t+"-o4"+k] = "boy";
window[t+"-o5"+k] = "you";
window[t+"-o6"+k] = "are";
window[t+"-o7"+k] = "Delhi";
window[t+"-ans"+k] = [5,6,1,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "क्या तुम भारत से हो"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "student";
window[t+"-o2"+k] = "Delhi";
window[t+"-o3"+k] = "India";
window[t+"-o4"+k] = "you";
window[t+"-o5"+k] = "from";
window[t+"-o6"+k] = "he";
window[t+"-o7"+k] = "are";
window[t+"-ans"+k] = [7,4,5,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम खुश हो"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "student";
window[t+"-o2"+k] = "happy";
window[t+"-o3"+k] = "India";
window[t+"-o4"+k] = "you";
window[t+"-o5"+k] = "from";
window[t+"-o6"+k] = "he";
window[t+"-o7"+k] = "are";
window[t+"-ans"+k] = [4,7,2];

lesson2Total = k;
k=0;t='c';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Man"; window[t+"-m"+k] = "eng/level2/man.mp3"; //m is music
window[t+"-n"+k] = "man"; window[t+"-n-m"+k] = "आदमी"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "औरत"; window[t+"-l1-"+k] = "/level2/woman.png";
window[t+"-o2"+k] = "लड़की"; window[t+"-l2-"+k] = "/level2/girl.png";
window[t+"-o3"+k] = "आदमी"; window[t+"-l3-"+k] = "/level2/man.png";
window[t+"-o4"+k] = "छात्र"; window[t+"-l4-"+k] = "/level2/student.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "आदमी"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "man";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Woman"; window[t+"-m"+k] = "eng/level2/woman.mp3"; //m is music
window[t+"-n"+k] = "woman"; window[t+"-n-m"+k] = "औरत"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "औरत"; window[t+"-l1-"+k] = "/level2/woman.png";
window[t+"-o2"+k] = "लड़की"; window[t+"-l2-"+k] = "/level2/girl.png";
window[t+"-o3"+k] = "आदमी"; window[t+"-l3-"+k] = "/level2/man.png";
window[t+"-o4"+k] = "छात्र"; window[t+"-l4-"+k] = "/level2/student.png";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "He is a man"; window[t+"-m"+k] = "eng/level2/he-is-a-man.mp3"; //m is music
window[t+"-n"+k] = "he"; window[t+"-n-m"+k] = "वह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "आदमी";
window[t+"-o2"+k] = "उसका";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "क्या";
window[t+"-o7"+k] = "वह";
window[t+"-o8"+k] = "मेरा";
window[t+"-ans"+k] = [7,5,1,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "He is a boy"; window[t+"-m"+k] = "eng/level2/he-is-a-boy.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "लड़का";
window[t+"-o2"+k] = "उसका";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "क्या";
window[t+"-o7"+k] = "वह";
window[t+"-o8"+k] = "मेरा";
window[t+"-ans"+k] = [7,5,1,4];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/he-is-from-delhi.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "are";
window[t+"-o2"+k] = "happy";
window[t+"-o3"+k] = "from";
window[t+"-o4"+k] = "he";
window[t+"-o5"+k] = "girl";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "boy";
window[t+"-o8"+k] = "Delhi";
window[t+"-ans"+k] = [4,6,3,8];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Neha ____ a woman"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "am";
window[t+"-o3"+k] = "are";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "She is a girl"; window[t+"-m"+k] = "eng/level2/she-is-a-girl.mp3"; //m is music
window[t+"-n"+k] = "she"; window[t+"-n-m"+k] = "वह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "लड़का";
window[t+"-o2"+k] = "उसका";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "क्या";
window[t+"-o7"+k] = "वह";
window[t+"-o8"+k] = "लड़की";
window[t+"-ans"+k] = [7,5,8,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "वह"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "she";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "हैं"; window[t+"-o-r-1"+k] = "are";
window[t+"-o-l-2"+k] = "गाड़ी"; window[t+"-o-r-2"+k] = "car";
window[t+"-o-l-3"+k] = "वह"; window[t+"-o-r-3"+k] = "she";
window[t+"-o-l-4"+k] = "चाय"; window[t+"-o-r-4"+k] = "tea";
window[t+"-o-l-5"+k] = "पानी"; window[t+"-o-r-5"+k] = "water";

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "वह दिल्ली से है"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "woman";
window[t+"-o4"+k] = "you";
window[t+"-o5"+k] = "Delhi";
window[t+"-o6"+k] = "am";
window[t+"-o7"+k] = "she";
window[t+"-o8"+k] = "man";
window[t+"-ans"+k] = [7,2,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मैं एक आदमी हूँ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "i";
window[t+"-o2"+k] = "a";
window[t+"-o3"+k] = "woman";
window[t+"-o4"+k] = "you";
window[t+"-o5"+k] = "Delhi";
window[t+"-o6"+k] = "am";
window[t+"-o7"+k] = "she";
window[t+"-o8"+k] = "man";
window[t+"-ans"+k] = [1,6,2,8];

lesson3Total = k;
k=0;t='d';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "हूँ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "am";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "man";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "She is from Delhi"; window[t+"-m"+k] = "eng/level2/she-is-from-delhi.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "और";
window[t+"-o2"+k] = "दिल्ली";
window[t+"-o3"+k] = "से";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "औरत";
window[t+"-o7"+k] = "अमित";
window[t+"-o8"+k] = "वह";
window[t+"-ans"+k] = [8,2,3,4];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/my-student-is-from-india.mp3"; //file name
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "and";
window[t+"-o2"+k] = "student";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "from";
window[t+"-o5"+k] = "cold";
window[t+"-o6"+k] = "my";
window[t+"-o7"+k] = "india";
window[t+"-o8"+k] = "hot";
window[t+"-o9"+k] = "is";
window[t+"-ans"+k] = [6,2,9,4,7];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/peter-is-a-man.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "a";
window[t+"-o2"+k] = "he";
window[t+"-o3"+k] = "happy";
window[t+"-o4"+k] = "Peter";
window[t+"-o5"+k] = "student";
window[t+"-o6"+k] = "she";
window[t+"-o7"+k] = "is";
window[t+"-o8"+k] = "man";
window[t+"-ans"+k] = [4,7,1,8];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "a man and woman"; window[t+"-m"+k] = "eng/level2/a-man-and-woman.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "और";
window[t+"-o2"+k] = "है";
window[t+"-o3"+k] = "एक";
window[t+"-o4"+k] = "हो";
window[t+"-o5"+k] = "से";
window[t+"-o6"+k] = "आदमी";
window[t+"-o7"+k] = "लड़का";
window[t+"-o8"+k] = "औरत";
window[t+"-ans"+k] = [3,6,1,8];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "he is from Delhi"; window[t+"-m"+k] = "eng/level2/he-is-from-delhi.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "और";
window[t+"-o2"+k] = "दिल्ली";
window[t+"-o3"+k] = "से";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "औरत";
window[t+"-o7"+k] = "अमित";
window[t+"-o8"+k] = "वह";
window[t+"-ans"+k] = [8,2,3,4];

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "പഠിച്ച വാക്കുകൾ"; //title
window[t+"-msg"+k] = "Let see what you have learned new words."; //message

k++;
window[t+"-type"+k] = "conversation"; k=0;t='a';
k++;window[t+"-q"+k+"-l"+k] = "Girl"; window[t+"-t"+k+"-l"+k] = "लड़की"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
k++;window[t+"-q"+k+"-l"+k] = "Student"; window[t+"-t"+k+"-l"+k] = "छात्र"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-l"+k] = "boy"; window[t+"-t"+k+"-l"+k] = "लड़का"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-l"+k] = "a"; window[t+"-t"+k+"-l"+k] = "एक"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-l"+k] = "I"; window[t+"-t"+k+"-l"+k] = "मैं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-l"+k] = "am"; window[t+"-t"+k+"-l"+k] = "हूं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
window[t+"-len"+k]=a;

lesson4Total = k;