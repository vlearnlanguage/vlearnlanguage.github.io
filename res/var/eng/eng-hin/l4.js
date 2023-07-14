//Unit 2

k=0;t='a';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Mother"; window[t+"-m"+k] = "eng/level1/mother.mp3"; //m is music
window[t+"-n"+k] = "Mother"; window[t+"-n-m"+k] = "माँ"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पोती"; window[t+"-l1-"+k] = "/level2/granddaughter.png";
window[t+"-o2"+k] = "बहन"; window[t+"-l2-"+k] = "/level2/sister.png";
window[t+"-o3"+k] = "पिता"; window[t+"-l3-"+k] = "/level2/father.png";
window[t+"-o4"+k] = "माँ"; window[t+"-l4-"+k] = "/level2/mother.png";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "माँ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Mother";
window[t+"-o2"+k] = "Father";
window[t+"-o3"+k] = "Sister";
window[t+"-o4"+k] = "Granddaughter";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Father"; window[t+"-m"+k] = "eng/level2/father.mp3"; //m is music
window[t+"-n"+k] = "Father"; window[t+"-n-m"+k] = "पिता"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पोती"; window[t+"-l1-"+k] = "/level2/granddaughter.png";
window[t+"-o2"+k] = "बहन"; window[t+"-l2-"+k] = "/level2/sister.png";
window[t+"-o3"+k] = "पिता"; window[t+"-l3-"+k] = "/level2/father.png";
window[t+"-o4"+k] = "माँ"; window[t+"-l4-"+k] = "/level2/mother.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "This is my father"; window[t+"-m"+k] = "eng/level2/this-is-my-father.mp3"; //m is music
window[t+"-n"+k] = "This"; window[t+"-n-m"+k] = "यह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "है";    
window[t+"-o2"+k] = "पिता";
window[t+"-o3"+k] = "मेरी";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "यह";
window[t+"-o6"+k] = "माँ";
window[t+"-ans"+k] = [5,3,2,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "That is my mother"; window[t+"-m"+k] = "eng/level2/that-is-my-mother.mp3"; //m is music
window[t+"-n"+k] = "That"; window[t+"-n-m"+k] = "वह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "है";    
window[t+"-o2"+k] = "पिता";
window[t+"-o3"+k] = "मेरी";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "वह";
window[t+"-o6"+k] = "माँ";
window[t+"-ans"+k] = [5,3,6,1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Sister"; window[t+"-m"+k] = "eng/level2/sister.mp3"; //m is music
window[t+"-n"+k] = "Sister"; window[t+"-n-m"+k] = "बहन"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पोती"; window[t+"-l1-"+k] = "/level2/granddaughter.png";
window[t+"-o2"+k] = "बहन"; window[t+"-l2-"+k] = "/level2/sister.png";
window[t+"-o3"+k] = "पिता"; window[t+"-l3-"+k] = "/level2/father.png";
window[t+"-o4"+k] = "माँ"; window[t+"-l4-"+k] = "/level2/mother.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "बहन"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Mother";
window[t+"-o2"+k] = "Father";
window[t+"-o3"+k] = "Sister";
window[t+"-o4"+k] = "Granddaughter";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Granddaughter"; window[t+"-m"+k] = "eng/level2/Granddaughter.mp3"; //m is music
window[t+"-n"+k] = "Granddaughter"; window[t+"-n-m"+k] = "पोती"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पोती"; window[t+"-l1-"+k] = "/level2/granddaughter.png";
window[t+"-o2"+k] = "बहन"; window[t+"-l2-"+k] = "/level2/sister.png";
window[t+"-o3"+k] = "पिता"; window[t+"-l3-"+k] = "/level2/father.png";
window[t+"-o4"+k] = "माँ"; window[t+"-l4-"+k] = "/level2/mother.png";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "पोती"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Mother";
window[t+"-o2"+k] = "Father";
window[t+"-o3"+k] = "Sister";
window[t+"-o4"+k] = "Granddaughter";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Brother"; window[t+"-m"+k] = "eng/level2/brother.mp3"; //m is music
window[t+"-n"+k] = "Brother"; window[t+"-n-m"+k] = "भाई"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "भाई"; window[t+"-l1-"+k] = "/level2/boy.png";
window[t+"-o2"+k] = "बहन"; window[t+"-l2-"+k] = "/level2/sister.png";
window[t+"-o3"+k] = "पिता"; window[t+"-l3-"+k] = "/level2/father.png";
window[t+"-o4"+k] = "माँ"; window[t+"-l4-"+k] = "/level2/mother.png";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "That is your brother"; window[t+"-m"+k] = "eng/level2/that-is-your-brother.mp3"; //m is music
window[t+"-n"+k] = "That"; window[t+"-n-m"+k] = "वह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "है";    
window[t+"-o2"+k] = "पिता";
window[t+"-o3"+k] = "मेरी";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "वह";
window[t+"-o6"+k] = "भाई";
window[t+"-ans"+k] = [5,4,6,1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Daughter"; window[t+"-m"+k] = "eng/level2/daughter.mp3"; //m is music
window[t+"-n"+k] = "Daughter"; window[t+"-n-m"+k] = "बेटी"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "भाई"; window[t+"-l1-"+k] = "/level2/boy.png";
window[t+"-o2"+k] = "बहन"; window[t+"-l2-"+k] = "/level2/sister.png";
window[t+"-o3"+k] = "बेटी"; window[t+"-l3-"+k] = "/level2/daughter.png";
window[t+"-o4"+k] = "माँ"; window[t+"-l4-"+k] = "/level2/mother.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "That is my daughter"; window[t+"-m"+k] = "eng/level2/that-is-my-daughter.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "है";    
window[t+"-o2"+k] = "पिता";
window[t+"-o3"+k] = "मेरी";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "वह";
window[t+"-o6"+k] = "बेटी";
window[t+"-ans"+k] = [5,3,6,1];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o-l-1"+k] = "पोती"; window[t+"-o-r-1"+k] = "Granddaughter";
window[t+"-o-l-2"+k] = "बहन"; window[t+"-o-r-2"+k] = "Sister";
window[t+"-o-l-3"+k] = "माँ"; window[t+"-o-r-3"+k] = "Mother";
window[t+"-o-l-4"+k] = "पिता"; window[t+"-o-r-4"+k] = "Father";
window[t+"-o-l-5"+k] = "भाई"; window[t+"-o-r-5"+k] = "brother";
window[t+"-o-l-6"+k] = "बेटी"; window[t+"-o-r-6"+k] = "daughter";


lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "my mother"; window[t+"-m"+k] = "eng/level2/my-mother.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "पानी";
window[t+"-o2"+k] = "मेरी";
window[t+"-o3"+k] = "क्या";
window[t+"-o4"+k] = "बड़ा";
window[t+"-o5"+k] = "गरम";
window[t+"-o6"+k] = "माँ";
window[t+"-ans"+k] = [2,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "your mother is happy"; window[t+"-m"+k] = "eng/level2/your-mother-is-happy.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "खुश";
window[t+"-o2"+k] = "मेरी";    
window[t+"-o3"+k] = "बड़ा";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "माँ";
window[t+"-ans"+k] = [4,6,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "my father is from delhi"; window[t+"-m"+k] = "eng/level2/my-father-is-from-delhi.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "दिल्ली";
window[t+"-o2"+k] = "क्या";
window[t+"-o3"+k] = "पिता";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "माँ";
window[t+"-o7"+k] = "से";
window[t+"-o8"+k] = "मेरी";
window[t+"-ans"+k] = [8,3,1,7,5];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "पोती"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "granddaughter";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "यह"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "a";
window[t+"-o3"+k] = "this";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "your granddaughter is from india"; window[t+"-m"+k] = "eng/level2/my-father-is-from-delhi.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "भारत";
window[t+"-o2"+k] = "पोती";
window[t+"-o3"+k] = "पिता";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "माँ";
window[t+"-o7"+k] = "से";
window[t+"-o8"+k] = "मेरी";
window[t+"-ans"+k] = [4,2,1,7,5];

lesson2Total = k;
k=0;t='c';

// k++;
// window[t+"-type"+k] = "message";
// window[t+"-ti"+k] = "Excercise"; //title
// window[t+"-msg"+k] = "Let's revise the chapters"; //message

// k++;
// window[t+"-type"+k] = "conversation"; k=0;t='a';
// k++;window[t+"-q"+k+"-l"+k] = "Hello, I am ramesh"; window[t+"-t"+k+"-l"+k] = "नमस्ते, मैं रमेश हूं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
// k++;window[t+"-q"+k+"-r"+k] = "Hello, I am sumesh"; window[t+"-t"+k+"-r"+k] = "नमस्ते, मैं सुमेश हूं"; window[t+"-q"+k+"-m"+k] = 'eng/level1/car.mp3'; //l=left,r=right q=ques,t=translated
// window[t+"-len"+k]=a;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am a mother"; window[t+"-m"+k] = "eng/level2/i-am-a-mother.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "माँ";
window[t+"-o2"+k] = "मैं";    
window[t+"-o3"+k] = "मेरा";
window[t+"-o4"+k] = "एक ";
window[t+"-o5"+k] = "हूँ";
window[t+"-ans"+k] = [2,4,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My father is from Delhi"; window[t+"-m"+k] = "eng/level2/i-am-a-mother.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "मेरे";
window[t+"-o2"+k] = "पिता";    
window[t+"-o3"+k] = "दिल्ली";
window[t+"-o4"+k] = "से";
window[t+"-o5"+k] = "हैं";
window[t+"-ans"+k] = [1,2,3,4,5];

// k++;
// window[t+"-type"+k] = "mcq";
// window[t+"-q"+k] = "She is my granddaughter"; window[t+"-m"+k] = "eng/level2/i-am-a-mother.mp3"; //m is music
// window[t+"-l"+k] = 4; //how many options are there
// window[t+"-o1"+k] = "वह";    
// window[t+"-o2"+k] = "मेरी";
// window[t+"-o3"+k] = "पोती";
// window[t+"-o4"+k] = "है";
// window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "यह"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "a";
window[t+"-o3"+k] = "this";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His sister is from Mumbai"; window[t+"-m"+k] = "eng/level2/i-am-a-mother.mp3"; //m is music
window[t+"-n"+k] = "Mumbai"; window[t+"-n-m"+k] = "मुंबई"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "उसकी";
window[t+"-o2"+k] = "बहन";    
window[t+"-o3"+k] = "मुंबई";
window[t+"-o4"+k] = "से";
window[t+"-o5"+k] = "है";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your father is from Mumbai"; window[t+"-m"+k] = "eng/level2/i-am-a-mother.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "तुम्हारी";
window[t+"-o2"+k] = "पिता";
window[t+"-o3"+k] = "मुंबई";
window[t+"-o4"+k] = "से";
window[t+"-o5"+k] = "हैं";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His brother is a student"; window[t+"-m"+k] = "eng/level2/i-am-a-mother.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "उसका";
window[t+"-o2"+k] = "भाई";
window[t+"-o3"+k] = "एक";
window[t+"-o4"+k] = "छात्र";
window[t+"-o5"+k] = "है";
window[t+"-ans"+k] = [1,2,3,4,5];

lesson3Total = k;