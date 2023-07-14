//Conversation

k=0;t='a';

k++;
window[t+"-type"+k] = "voice-match";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o-l-1"+k] = "eng/level3/big.mp3"; window[t+"-o-r-1"+k] = "बड़ा";
window[t+"-o-l-2"+k] = "eng/level3/my.mp3"; window[t+"-o-r-2"+k] = "मेरा";
window[t+"-o-l-3"+k] = "eng/level3/is.mp3"; window[t+"-o-r-3"+k] = "है";
window[t+"-o-l-4"+k] = "eng/level1/car.mp3"; window[t+"-o-r-4"+k] = "गाड़ी";
window[t+"-o-l-5"+k] = "eng/level1/house.mp3"; window[t+"-o-r-5"+k] = "घर";
window[t+"-o-l-6"+k] = "eng/level3/your.mp3"; window[t+"-o-r-6"+k] = "तुम्हारा";

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरी गाड़ी"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "cold";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "tea";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "voice-match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "eng/level3/big.mp3"; window[t+"-o-r-1"+k] = "बड़ा";
window[t+"-o-l-2"+k] = "eng/level3/my.mp3"; window[t+"-o-r-2"+k] = "मेरा";
window[t+"-o-l-3"+k] = "eng/level3/small.mp3"; window[t+"-o-r-3"+k] = "छोटा";
window[t+"-o-l-4"+k] = "eng/level1/car.mp3"; window[t+"-o-r-4"+k] = "गाड़ी";
window[t+"-o-l-5"+k] = "eng/level3/your.mp3"; window[t+"-o-r-5"+k] = "तुम्हारा";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level3/my-house-is-big.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "his";
window[t+"-o6"+k] = "my";
window[t+"-o7"+k] = "name";
window[t+"-o8"+k] = "house";
window[t+"-ans"+k] = [6,8,4,1];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/my-house-is-small.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "his";
window[t+"-o6"+k] = "my";
window[t+"-o7"+k] = "name";
window[t+"-o8"+k] = "house";
window[t+"-ans"+k] = [6,8,4,2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car is small"; window[t+"-m"+k] = "eng/level1/my-car-is-small.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "छोटा";
window[t+"-o2"+k] = "मेरी";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "उसका";
window[t+"-o6"+k] = "और";
window[t+"-o7"+k] = "है";
window[t+"-o8"+k] = "गाड़ी";
window[t+"-ans"+k] = [2,8,1,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरी गाड़ी बड़ी है"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "your";
window[t+"-o3"+k] = "big";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "car";
window[t+"-o6"+k] = "hot";
window[t+"-o7"+k] = "my";
window[t+"-o8"+k] = "name";
window[t+"-ans"+k] = [7,5,1,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your house is big"; window[t+"-m"+k] = "eng/level3/your-house-is-big.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "क्या";
window[t+"-o2"+k] = "मेरी";
window[t+"-o3"+k] = "बड़ा";
window[t+"-o4"+k] = "तुम्हारा";
window[t+"-o5"+k] = "उसका";
window[t+"-o6"+k] = "और";
window[t+"-o7"+k] = "है";
window[t+"-o8"+k] = "घर";
window[t+"-ans"+k] = [4,8,3,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारी गाड़ी छोटी है"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "car";
window[t+"-o6"+k] = "your";
window[t+"-o7"+k] = "cold";
window[t+"-o8"+k] = "my";
window[t+"-ans"+k] = [6,5,2,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car is big"; window[t+"-m"+k] = "eng/level1/my-car-is-big.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "मेरी";
window[t+"-o2"+k] = "बड़ी";
window[t+"-o3"+k] = "नाम";
window[t+"-o4"+k] = "क्या";
window[t+"-o5"+k] = "तुम्हारी";
window[t+"-o6"+k] = "गाड़ी";
window[t+"-o7"+k] = "है";
window[t+"-o8"+k] = "घर";
window[t+"-ans"+k] = [1,6,2,7];

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "voice-match";
x=0;
x++;window[t+"-o-l-"+x+k] = "eng/level3/small.mp3"; window[t+"-o-r-"+x+k] = "छोटा";
x++;window[t+"-o-l-"+x+k] = "eng/level3/my.mp3"; window[t+"-o-r-"+x+k] = "मेरा";
x++;window[t+"-o-l-"+x+k] = "eng/level3/is.mp3"; window[t+"-o-r-"+x+k] = "है";
x++;window[t+"-o-l-"+x+k] = "eng/level1/cold.mp3"; window[t+"-o-r-"+x+k] = "ठंडा";
x++;window[t+"-o-l-"+x+k] = "eng/level1/house.mp3"; window[t+"-o-r-"+x+k] = "घर";
x++;window[t+"-o-l-"+x+k] = "eng/level3/your.mp3"; window[t+"-o-r-"+x+k] = "तुम्हारा";
window[t+"-l"+k] = x; //how many options are there

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My tea is hot"; window[t+"-m"+k] = "eng/level3/my-tea-is-hot.mp3"; //m is music
window[t+"-n"+k] = null; window[t+"-n-m"+k] = null; //n means new words, n-m means new word's meaning
x=0;
x++;window[t+"-o"+x+k] = "नाम";
x++;window[t+"-o"+x+k] = "चाय";
x++;window[t+"-o"+x+k] = "घर";
x++;window[t+"-o"+x+k] = "गरम";
x++;window[t+"-o"+x+k] = "पानी";
x++;window[t+"-o"+x+k] = "तुम्हारी";
x++;window[t+"-o"+x+k] = "है";
x++;window[t+"-o"+x+k] = "मेरी";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [8,2,4,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot tea"; window[t+"-m"+k] = "eng/level1/hot-tea.mp3"; //m is music
x=0;
x++;window[t+"-o"+x+k] = "गरम";
x++;window[t+"-o"+x+k] = "मेरा";
x++;window[t+"-o"+x+k] = "घर";
x++;window[t+"-o"+x+k] = "तुम्हारी";
x++;window[t+"-o"+x+k] = "उसका";
x++;window[t+"-o"+x+k] = "पानी";
x++;window[t+"-o"+x+k] = "चाय";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [1,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My water is cold"; window[t+"-m"+k] = "eng/level3/my-water-is-cold.mp3"; //m is music
x=0;
x++;window[t+"-o"+x+k] = "ठंडा";
x++;window[t+"-o"+x+k] = "है";
x++;window[t+"-o"+x+k] = "मेरा";
x++;window[t+"-o"+x+k] = "क्या";
x++;window[t+"-o"+x+k] = "नाम";
x++;window[t+"-o"+x+k] = "तुम्हारा";
x++;window[t+"-o"+x+k] = "उसका";
x++;window[t+"-o"+x+k] = "पानी";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [3,8,1,2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ठंडा पानी"; window[t+"-m"+k] = null; //m is music
x=0;
x++;window[t+"-o"+x+k] = "her";
x++;window[t+"-o"+x+k] = "water";
x++;window[t+"-o"+x+k] = "cold";
x++;window[t+"-o"+x+k] = "car";
x++;window[t+"-o"+x+k] = "name";
x++;window[t+"-o"+x+k] = "house";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [3,2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car and my house"; window[t+"-m"+k] = "eng/level1/your-car-and-my-house.mp3"; //m is music
x=0;
x++;window[t+"-o"+x+k] = "गरम";
x++;window[t+"-o"+x+k] = "घर";
x++;window[t+"-o"+x+k] = "तुम्हारी";
x++;window[t+"-o"+x+k] = "मेरा";
x++;window[t+"-o"+x+k] = "गाड़ी";
x++;window[t+"-o"+x+k] = "है";
x++;window[t+"-o"+x+k] = "क्या";
x++;window[t+"-o"+x+k] = "और";
x++;window[t+"-o"+x+k] = "चाय";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [3,5,8,4,2];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level3/hot-tea-and-cold-water.mp3"; //file name
x=0;
window[t+"-o1"+k] = "house";x++;
window[t+"-o2"+k] = "small";x++;
window[t+"-o3"+k] = "tea";x++;
window[t+"-o4"+k] = "is";x++;
window[t+"-o5"+k] = "his";x++;
window[t+"-o6"+k] = "water";x++;
window[t+"-o7"+k] = "cold";x++;
window[t+"-o8"+k] = "and";x++;
window[t+"-o9"+k] = "hot";x++;
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [9,3,8,7,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारी गाड़ी और मेरा घर"; window[t+"-m"+k] = null; //m is music
x=0;
x++;window[t+"-o"+x+k] = "big";
x++;window[t+"-o"+x+k] = "name";
x++;window[t+"-o"+x+k] = "my";
x++;window[t+"-o"+x+k] = "his";
x++;window[t+"-o"+x+k] = "house";
x++;window[t+"-o"+x+k] = "is";
x++;window[t+"-o"+x+k] = "car";
x++;window[t+"-o"+x+k] = "and";
x++;window[t+"-o"+x+k] = "your";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [9,7,8,3,5];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/cold-water.mp3"; //file name
x=0;
window[t+"-o1"+k] = "house";x++;
window[t+"-o2"+k] = "big";x++;
window[t+"-o3"+k] = "my";x++;
window[t+"-o4"+k] = "water";x++;
window[t+"-o5"+k] = "hot";x++;
window[t+"-o6"+k] = "cold";x++;
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [6,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "गरम चाय और ठंडा पानी"; window[t+"-m"+k] = null; //m is music
x=0;
x++;window[t+"-o"+x+k] = "water";
x++;window[t+"-o"+x+k] = "hot";
x++;window[t+"-o"+x+k] = "tea";
x++;window[t+"-o"+x+k] = "cold";
x++;window[t+"-o"+x+k] = "and";
x++;window[t+"-o"+x+k] = "is";
x++;window[t+"-o"+x+k] = "car";
x++;window[t+"-o"+x+k] = "name";
x++;window[t+"-o"+x+k] = "my";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [2,3,5,4,1];

lesson2Total = k;
k=0;t='c';

k++;
window[t+"-type"+k] = "voice-match";
x=0;
x++;window[t+"-o-l-"+x+k] = "eng/level3/small.mp3"; window[t+"-o-r-"+x+k] = "छोटा";
x++;window[t+"-o-l-"+x+k] = "eng/level1/what.mp3"; window[t+"-o-r-"+x+k] = "क्या";
x++;window[t+"-o-l-"+x+k] = "eng/level3/his.mp3"; window[t+"-o-r-"+x+k] = "उसका";
x++;window[t+"-o-l-"+x+k] = "eng/level1/cold.mp3"; window[t+"-o-r-"+x+k] = "ठंडा";
x++;window[t+"-o-l-"+x+k] = "eng/level3/big.mp3"; window[t+"-o-r-"+x+k] = "बड़ा";
window[t+"-l"+k] = x; //how many options are there

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "क्या"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "what";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level3/his-name.mp3"; //file name
x=0;
x++;window[t+"-o1"+k] = "hot";
x++;window[t+"-o2"+k] = "house";
x++;window[t+"-o3"+k] = "his";
x++;window[t+"-o4"+k] = "name";
x++;window[t+"-o5"+k] = "her";
x++;window[t+"-o6"+k] = "and";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [3,4];

k++;
window[t+"-type"+k] = "voice-match";
x=0;
x++;window[t+"-o-l-"+x+k] = "eng/level3/name.mp3"; window[t+"-o-r-"+x+k] = "नाम";
x++;window[t+"-o-l-"+x+k] = "eng/level1/what.mp3"; window[t+"-o-r-"+x+k] = "क्या";
x++;window[t+"-o-l-"+x+k] = "eng/level3/small.mp3"; window[t+"-o-r-"+x+k] = "छोटा";
x++;window[t+"-o-l-"+x+k] = "eng/level1/hot.mp3"; window[t+"-o-r-"+x+k] = "गरम";
x++;window[t+"-o-l-"+x+k] = "eng/level3/and.mp3"; window[t+"-o-r-"+x+k] = "और";
window[t+"-l"+k] = x; //how many options are there

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My house and his car"; window[t+"-m"+k] = "eng/level3/my-house-and-his-car.mp3"; //m is music
x=0;
x++;window[t+"-o1"+k] = "उसकी";
x++;window[t+"-o2"+k] = "और";
x++;window[t+"-o3"+k] = "मेरा";
x++;window[t+"-o4"+k] = "गरम";
x++;window[t+"-o5"+k] = "घर";
x++;window[t+"-o6"+k] = "तुम्हारा";
x++;window[t+"-o7"+k] = "गाड़ी";
x++;window[t+"-o8"+k] = "आमिर";
x++;window[t+"-o9"+k] = "नेहा";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [3,5,2,1,7];

k++;
window[t+"-type"+k] = "voice-word";
window[t+"-q"+k] = "eng/level1/what.mp3"; //file name
window[t+"-o1"+k] = "name";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "big";
window[t+"-o4"+k] = "car";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Her car"; window[t+"-m"+k] = "eng/level1/her-car.mp3"; //m is music
x=0;
x++;window[t+"-o1"+k] = "घर";
x++;window[t+"-o2"+k] = "और";
x++;window[t+"-o3"+k] = "क्या";
x++;window[t+"-o4"+k] = "गाड़ी";
x++;window[t+"-o5"+k] = "उसकी";
x++;window[t+"-o6"+k] = "ठंडा";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [5,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "What is his name"; window[t+"-m"+k] = "eng/level1/what-is-his-name.mp3"; //m is music
x=0;
x++;window[t+"-o1"+k] = "उसका";
x++;window[t+"-o2"+k] = "नाम";
x++;window[t+"-o3"+k] = "है";
x++;window[t+"-o4"+k] = "रमेश";
x++;window[t+"-o5"+k] = "और";
x++;window[t+"-o6"+k] = "चाय";
x++;window[t+"-o7"+k] = "क्या";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [1,2,7,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसकी चाय गरम है"; window[t+"-m"+k] = null; //m is music
x=0;
x++;window[t+"-o1"+k] = "big";
x++;window[t+"-o2"+k] = "is";
x++;window[t+"-o3"+k] = "her";
x++;window[t+"-o4"+k] = "my";
x++;window[t+"-o5"+k] = "tea";
x++;window[t+"-o6"+k] = "small";
x++;window[t+"-o7"+k] = "hot";
window[t+"-l"+k] = x; //how many options are there
window[t+"-ans"+k] = [3,5,2,7];

lesson3Total = k;
k=0;t='d';

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "What is her name"; window[t+"-m"+k] = "eng/level1/what-is-her-name.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "पानी";
window[t+"-o2"+k] = "नाम";
window[t+"-o3"+k] = "मेरा";
window[t+"-o4"+k] = "तुम्हारा";
window[t+"-o5"+k] = "क्या";
window[t+"-o6"+k] = "है";
window[t+"-o7"+k] = "रमेश";
window[t+"-o8"+k] = "उसकी";
window[t+"-ans"+k] = [8,2,5,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारा घर बड़ा है।"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "hot";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "is";
window[t+"-o4"+k] = "what";
window[t+"-o5"+k] = "your";
window[t+"-o6"+k] = "my";
window[t+"-o7"+k] = "house";
window[t+"-o8"+k] = "big";
window[t+"-ans"+k] = [5,7,3,8];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरा घर बड़ा है।"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "hot";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "is";
window[t+"-o4"+k] = "what";
window[t+"-o5"+k] = "your";
window[t+"-o6"+k] = "my";
window[t+"-o7"+k] = "house";
window[t+"-o8"+k] = "big";
window[t+"-ans"+k] = [6,7,3,8];

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "Excercise"; //title
window[t+"-msg"+k] = "Let's revise the chapters"; //message

k++;
window[t+"-type"+k] = "conversation"; k=0;t='a';
k++;window[t+"-q"+k+"-l"+k] = "What is your name?"; window[t+"-t"+k+"-l"+k] = "तुम्हारा नाम क्या है?"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
k++;window[t+"-q"+k+"-r"+k] = "My name is Ramesh."; window[t+"-t"+k+"-r"+k] = "मेरा नाम रमेश हे।"; window[t+"-q"+k+"-m"+k] = 'eng/level1/car.mp3';
k++;window[t+"-q"+k+"-l"+k] = "Are you a student?"; window[t+"-t"+k+"-l"+k] = "क्या तुम छात्र है?"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-r"+k] = "No, I am not a student."; window[t+"-t"+k+"-r"+k] = "नहीं, मैं छात्र नहीं हूं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/car.mp3';
k++;window[t+"-q"+k+"-l"+k] = "Are you from India?"; window[t+"-t"+k+"-l"+k] = "क्या तुम भारत से हो?"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-r"+k] = "Yes, I am from India."; window[t+"-t"+k+"-r"+k] = "हां, मैं भारत से हूं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/car.mp3';
k++;window[t+"-q"+k+"-l"+k] = "Are you sad?"; window[t+"-t"+k+"-l"+k] = "क्या तुम दुखी हो?"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-r"+k] = "No, I am happy."; window[t+"-t"+k+"-r"+k] = "नहीं, मैं खुश हूं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/car.mp3';
k++;window[t+"-q"+k+"-l"+k] = "My house is big."; window[t+"-t"+k+"-l"+k] = "मेरा घर बड़ा है।"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3';
k++;window[t+"-q"+k+"-r"+k] = "My car is small."; window[t+"-t"+k+"-r"+k] = "मेरी गाड़ी छोटी है"; window[t+"-q"+k+"-m"+k] = 'eng/level1/car.mp3';
window[t+"-len"+k]=a;

lesson4Total = k;