//Unit3 [Revising new words] [Conversation]

k=0; t='a';

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/unit3/two-rats-and-six-dogs.mp3"; //file name
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "രണ്ട്";    
window[t+"-o2"+k] = "എലികൾ";
window[t+"-o3"+k] = "കൂടാതെ";
window[t+"-o4"+k] = "ആറ്";
window[t+"-o5"+k] = "നായ്ക്കൾ";
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
window[t+"-o1"+k] = "അവിടെ";    
window[t+"-o2"+k] = "അഞ്ച്";
window[t+"-o3"+k] = "നായ്ക്കൾ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "ഒരു";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "this is a dog"; window[t+"-m"+k] = "eng/unit3/this-is-a-dog.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "ഇത്";
window[t+"-o2"+k] = "ഒരു";
window[t+"-o3"+k] = "നായ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "കുതിര"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "Horse"; window[t+"-n-m"+k] = "കുതിര"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "Horse"; window[t+"-l1-"+k] = "/level3/horse.png"; window[t+"-m1-"+k] = "eng/unit3/horse.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Pigeon"; window[t+"-l3-"+k] = "/level3/pigeon.png"; window[t+"-m3-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o4"+k] = "Elephant"; window[t+"-l4-"+k] = "/level3/elephant.png"; window[t+"-m4-"+k] = "eng/unit3/elephant.mp3";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "കുതിര"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Elephant";
window[t+"-o2"+k] = "Pigeon";
window[t+"-o3"+k] = "Horse";
window[t+"-o4"+k] = "Peacock";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "മയിൽ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Cow"; window[t+"-l1-"+k] = "/level3/cow.png"; window[t+"-m1-"+k] = "eng/unit3/cow.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Rat"; window[t+"-l3-"+k] = "/level3/rat.png"; window[t+"-m3-"+k] = "eng/unit3/rat.mp3";
window[t+"-o4"+k] = "Dog"; window[t+"-l4-"+k] = "/level3/dog.png"; window[t+"-m4-"+k] = "eng/unit3/dog.mp3";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Peacock"; window[t+"-m"+k] = "eng/unit3/peacock.mp3"; //m is music
window[t+"-o1"+k] = "ആന";
window[t+"-o2"+k] = "പ്രാവ്";
window[t+"-o3"+k] = "മയിൽ";
window[t+"-o4"+k] = "എലി";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "പ്രാവ്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "Pigeon"; window[t+"-n-m"+k] = "പ്രാവ്"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "Cow"; window[t+"-l1-"+k] = "/level3/cow.png"; window[t+"-m1-"+k] = "eng/unit3/cow.mp3";
window[t+"-o2"+k] = "Pigeon"; window[t+"-l2-"+k] = "/level3/pigeon.png"; window[t+"-m2-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o3"+k] = "Bird"; window[t+"-l3-"+k] = "/level3/bird.png"; window[t+"-m3-"+k] = "eng/unit3/bird.mp3";
window[t+"-o4"+k] = "Dog"; window[t+"-l4-"+k] = "/level3/dog.png"; window[t+"-m4-"+k] = "eng/unit3/dog.mp3";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Pigeon"; window[t+"-m"+k] = "eng/unit3/pigeon.mp3"; //m is music
window[t+"-o1"+k] = "ആന";
window[t+"-o2"+k] = "പ്രാവ്";
window[t+"-o3"+k] = "മയിൽ";
window[t+"-o4"+k] = "എലി";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ആന"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "Elephant"; window[t+"-n-m"+k] = "ആന"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "Horse"; window[t+"-l1-"+k] = "/level3/horse.png"; window[t+"-m1-"+k] = "eng/unit3/horse.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Pigeon"; window[t+"-l3-"+k] = "/level3/pigeon.png"; window[t+"-m3-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o4"+k] = "Elephant"; window[t+"-l4-"+k] = "/level3/elephant.png"; window[t+"-m4-"+k] = "eng/unit3/elephant.mp3";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "big elephant"; window[t+"-m"+k] = "eng/unit3/big-elephant.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "വലിയ";
window[t+"-o2"+k] = "ആന";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "ചെറുത്";
window[t+"-o5"+k] = "എൻ്റെ";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [1,2];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "പശു"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "Cow"; window[t+"-n-m"+k] = "പശു"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "Cow"; window[t+"-l1-"+k] = "/level3/cow.png"; window[t+"-m1-"+k] = "eng/unit3/cow.mp3";
window[t+"-o2"+k] = "Pigeon"; window[t+"-l2-"+k] = "/level3/pigeon.png"; window[t+"-m2-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o3"+k] = "Bird"; window[t+"-l3-"+k] = "/level3/bird.png"; window[t+"-m3-"+k] = "eng/unit3/bird.mp3";
window[t+"-o4"+k] = "Grass"; window[t+"-l4-"+k] = "/level3/grass.png"; window[t+"-m4-"+k] = "eng/unit3/grass.mp3";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "this is not cow"; window[t+"-m"+k] = "eng/unit3/this-is-not-a-cow.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "ഇത്";    
window[t+"-o2"+k] = "പശു";
window[t+"-o3"+k] = "അല്ല";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "എൻ്റെ";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [1,2,3];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "എലി"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Cow"; window[t+"-l1-"+k] = "/level3/cow.png"; window[t+"-m1-"+k] = "eng/unit3/cow.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Rat"; window[t+"-l3-"+k] = "/level3/rat.png"; window[t+"-m3-"+k] = "eng/unit3/rat.mp3";
window[t+"-o4"+k] = "Dog"; window[t+"-l4-"+k] = "/level3/dog.png"; window[t+"-m4-"+k] = "eng/unit3/dog.mp3";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "small rat"; window[t+"-m"+k] = "eng/unit3/small-rat.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "ചെറിയ";
window[t+"-o2"+k] = "എലി";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "അല്ല";
window[t+"-ans"+k] = [1,2];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "നായ"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "Dog"; window[t+"-n-m"+k] = "നായ"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "Horse"; window[t+"-l1-"+k] = "/level3/horse.png"; window[t+"-m1-"+k] = "eng/unit3/horse.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Pigeon"; window[t+"-l3-"+k] = "/level3/pigeon.png"; window[t+"-m3-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o4"+k] = "Dog"; window[t+"-l4-"+k] = "/level3/dog.png"; window[t+"-m4-"+k] = "eng/unit3/dog.mp3";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "പക്ഷി"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "Bird"; window[t+"-n-m"+k] = "പക്ഷി"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "Cow"; window[t+"-l1-"+k] = "/level3/cow.png"; window[t+"-m1-"+k] = "eng/unit3/cow.mp3";
window[t+"-o2"+k] = "Pigeon"; window[t+"-l2-"+k] = "/level3/pigeon.png"; window[t+"-m2-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o3"+k] = "Bird"; window[t+"-l3-"+k] = "/level3/bird.png"; window[t+"-m3-"+k] = "eng/unit3/bird.mp3";
window[t+"-o4"+k] = "Grass"; window[t+"-l4-"+k] = "/level3/grass.png"; window[t+"-m4-"+k] = "eng/unit3/grass.mp3";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "dog and bird are happy"; window[t+"-m"+k] = "eng/unit3/dog-and-bird-are-happy.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "നായ";    
window[t+"-o2"+k] = "കൂടാതെ";
window[t+"-o3"+k] = "പക്ഷി";
window[t+"-o4"+k] = "സന്തോഷവാൻ";
window[t+"-o5"+k] = "ആണ്";
window[t+"-o6"+k] = "എലി";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "പുല്ല്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Horse"; window[t+"-l1-"+k] = "/level3/horse.png"; window[t+"-m1-"+k] = "eng/unit3/horse.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Pigeon"; window[t+"-l3-"+k] = "/level3/pigeon.png"; window[t+"-m3-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o4"+k] = "Grass"; window[t+"-l4-"+k] = "/level3/grass.png"; window[t+"-m4-"+k] = "eng/unit3/grass.mp3";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Grass"; window[t+"-m"+k] = "eng/unit3/pigeon.mp3"; //m is music
window[t+"-o1"+k] = "പുല്ല്";
window[t+"-o2"+k] = "പ്രാവ്";
window[t+"-o3"+k] = "മയിൽ";
window[t+"-o4"+k] = "എലി";
window[t+"-ans"+k] = 1;

//Lesson2

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ഏഴ്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "seven"; window[t+"-n-m"+k] = "ഏഴ്";
window[t+"-o1"+k] = "five"; window[t+"-l1-"+k] = "/level3/5.png"; window[t+"-m1-"+k] = "eng/unit3/5.mp3";
window[t+"-o2"+k] = "six"; window[t+"-l2-"+k] = "/level3/6.png"; window[t+"-m2-"+k] = "eng/unit3/6.mp3";
window[t+"-o3"+k] = "seven"; window[t+"-l3-"+k] = "/level3/7.png"; window[t+"-m3-"+k] = "eng/unit3/7.mp3";
window[t+"-o4"+k] = "eight"; window[t+"-l4-"+k] = "/level3/8.png"; window[t+"-m4-"+k] = "eng/unit3/8.mp3";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "മൂന്ന്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "three"; window[t+"-n-m"+k] = "മൂന്ന്";
window[t+"-o1"+k] = "one"; window[t+"-l1-"+k] = "/level3/1.png"; window[t+"-m1-"+k] = "eng/unit3/1.mp3";
window[t+"-o2"+k] = "two"; window[t+"-l2-"+k] = "/level3/2.png"; window[t+"-m2-"+k] = "eng/unit3/2.mp3";
window[t+"-o3"+k] = "three"; window[t+"-l3-"+k] = "/level3/3.png"; window[t+"-m3-"+k] = "eng/unit3/3.mp3";
window[t+"-o4"+k] = "four"; window[t+"-l4-"+k] = "/level3/4.png"; window[t+"-m4-"+k] = "eng/unit3/4.mp3";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "രണ്ട്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "two"; window[t+"-n-m"+k] = "രണ്ട്";
window[t+"-o1"+k] = "one"; window[t+"-l1-"+k] = "/level3/1.png"; window[t+"-m1-"+k] = "eng/unit3/1.mp3";
window[t+"-o2"+k] = "two"; window[t+"-l2-"+k] = "/level3/2.png"; window[t+"-m2-"+k] = "eng/unit3/2.mp3";
window[t+"-o3"+k] = "three"; window[t+"-l3-"+k] = "/level3/3.png"; window[t+"-m3-"+k] = "eng/unit3/3.mp3";
window[t+"-o4"+k] = "four"; window[t+"-l4-"+k] = "/level3/4.png"; window[t+"-m4-"+k] = "eng/unit3/4.mp3";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "നാല്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "four"; window[t+"-n-m"+k] = "നാല്";
window[t+"-o1"+k] = "one"; window[t+"-l1-"+k] = "/level3/1.png"; window[t+"-m1-"+k] = "eng/unit3/1.mp3";
window[t+"-o2"+k] = "two"; window[t+"-l2-"+k] = "/level3/2.png"; window[t+"-m2-"+k] = "eng/unit3/2.mp3";
window[t+"-o3"+k] = "three"; window[t+"-l3-"+k] = "/level3/3.png"; window[t+"-m3-"+k] = "eng/unit3/3.mp3";
window[t+"-o4"+k] = "four"; window[t+"-l4-"+k] = "/level3/4.png"; window[t+"-m4-"+k] = "eng/unit3/4.mp3";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "one two three four"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "ഒന്ന്";
window[t+"-o2"+k] = "രണ്ട്";
window[t+"-o3"+k] = "മൂന്ന്";
window[t+"-o4"+k] = "നാല്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "അഞ്ച്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "five"; window[t+"-n-m"+k] = "അഞ്ച്";
window[t+"-o1"+k] = "five"; window[t+"-l1-"+k] = "/level3/5.png"; window[t+"-m1-"+k] = "eng/unit3/5.mp3";
window[t+"-o2"+k] = "six"; window[t+"-l2-"+k] = "/level3/6.png"; window[t+"-m2-"+k] = "eng/unit3/6.mp3";
window[t+"-o3"+k] = "seven"; window[t+"-l3-"+k] = "/level3/7.png"; window[t+"-m3-"+k] = "eng/unit3/7.mp3";
window[t+"-o4"+k] = "eight"; window[t+"-l4-"+k] = "/level3/8.png"; window[t+"-m4-"+k] = "eng/unit3/8.mp3";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ആറ്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "six"; window[t+"-n-m"+k] = "ആറ്";
window[t+"-o1"+k] = "five"; window[t+"-l1-"+k] = "/level3/5.png"; window[t+"-m1-"+k] = "eng/unit3/5.mp3";
window[t+"-o2"+k] = "six"; window[t+"-l2-"+k] = "/level3/6.png"; window[t+"-m2-"+k] = "eng/unit3/6.mp3";
window[t+"-o3"+k] = "seven"; window[t+"-l3-"+k] = "/level3/7.png"; window[t+"-m3-"+k] = "eng/unit3/7.mp3";
window[t+"-o4"+k] = "eight"; window[t+"-l4-"+k] = "/level3/8.png"; window[t+"-m4-"+k] = "eng/unit3/8.mp3";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ഒന്ന്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "one"; window[t+"-n-m"+k] = "ഒന്ന്";
window[t+"-o1"+k] = "one"; window[t+"-l1-"+k] = "/level3/1.png"; window[t+"-m1-"+k] = "eng/unit3/1.mp3";
window[t+"-o2"+k] = "two"; window[t+"-l2-"+k] = "/level3/2.png"; window[t+"-m2-"+k] = "eng/unit3/2.mp3";
window[t+"-o3"+k] = "three"; window[t+"-l3-"+k] = "/level3/3.png"; window[t+"-m3-"+k] = "eng/unit3/3.mp3";
window[t+"-o4"+k] = "four"; window[t+"-l4-"+k] = "/level3/4.png"; window[t+"-m4-"+k] = "eng/unit3/4.mp3";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "five six seven eight"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "അഞ്ച്";
window[t+"-o2"+k] = "ആറ്";
window[t+"-o3"+k] = "ഏഴ്";
window[t+"-o4"+k] = "എട്ട്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ഒമ്പത്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "nine"; window[t+"-n-m"+k] = "ഒമ്പത്";
window[t+"-o1"+k] = "seven"; window[t+"-l1-"+k] = "/level3/7.png"; window[t+"-m1-"+k] = "eng/unit3/7.mp3";
window[t+"-o2"+k] = "eight"; window[t+"-l2-"+k] = "/level3/8.png"; window[t+"-m2-"+k] = "eng/unit3/8.mp3";
window[t+"-o3"+k] = "nine"; window[t+"-l3-"+k] = "/level3/9.png"; window[t+"-m3-"+k] = "eng/unit3/9.mp3";
window[t+"-o4"+k] = "ten"; window[t+"-l4-"+k] = "/level3/10.png"; window[t+"-m4-"+k] = "eng/unit3/10.mp3";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "പത്ത്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "nine"; window[t+"-n-m"+k] = "പത്ത്";
window[t+"-o1"+k] = "seven"; window[t+"-l1-"+k] = "/level3/7.png"; window[t+"-m1-"+k] = "eng/unit3/7.mp3";
window[t+"-o2"+k] = "eight"; window[t+"-l2-"+k] = "/level3/8.png"; window[t+"-m2-"+k] = "eng/unit3/8.mp3";
window[t+"-o3"+k] = "nine"; window[t+"-l3-"+k] = "/level3/9.png"; window[t+"-m3-"+k] = "eng/unit3/9.mp3";
window[t+"-o4"+k] = "ten"; window[t+"-l4-"+k] = "/level3/10.png"; window[t+"-m4-"+k] = "eng/unit3/10.mp3";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "nine ten"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "ഒമ്പത്";
window[t+"-o2"+k] = "പത്ത്";
window[t+"-ans"+k] = [1,2];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "എട്ട്"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "eight"; window[t+"-n-m"+k] = "എട്ട്";
window[t+"-o1"+k] = "five"; window[t+"-l1-"+k] = "/level3/5.png"; window[t+"-m1-"+k] = "eng/unit3/5.mp3";
window[t+"-o2"+k] = "six"; window[t+"-l2-"+k] = "/level3/6.png"; window[t+"-m2-"+k] = "eng/unit3/6.mp3";
window[t+"-o3"+k] = "seven"; window[t+"-l3-"+k] = "/level3/7.png"; window[t+"-m3-"+k] = "eng/unit3/7.mp3";
window[t+"-o4"+k] = "eight"; window[t+"-l4-"+k] = "/level3/8.png"; window[t+"-m4-"+k] = "eng/unit3/8.mp3";
window[t+"-ans"+k] = 4;


lesson2Total = k;
k=0;t='c';

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "this is a dog"; window[t+"-m"+k] = "eng/unit3/this-is-a-dog.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "ഇത്";
window[t+"-o2"+k] = "ഒരു";
window[t+"-o3"+k] = "നായ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "അഞ്ച് നായ്ക്കൾ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "five dogs";    
window[t+"-o2"+k] = "five dog";
window[t+"-ans"+k] = [1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ഒരു നായ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "one dogs";    
window[t+"-o2"+k] = "one dog";
window[t+"-ans"+k] = [2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "there are five dogs"; window[t+"-m"+k] = "eng/unit3/there-are-five-dogs.mp3"; //m is music
window[t+"-n"+k] = "there"; window[t+"-n-m"+k] = "അവിടെ";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "അവിടെ";    
window[t+"-o2"+k] = "അഞ്ച്";
window[t+"-o3"+k] = "നായ";
window[t+"-o4"+k] = "ഉണ്ട്";
window[t+"-o5"+k] = "ഒരു";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "there is one dog"; window[t+"-m"+k] = "eng/unit3/there-is-one-dog.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "അവിടെ";
window[t+"-o2"+k] = "ഒരു";
window[t+"-o3"+k] = "നായ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "അഞ്ച്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "there are nine cows"; window[t+"-m"+k] = "eng/unit3/there-are-nine-cows.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "അവിടെ";   
window[t+"-o2"+k] = "ഒമ്പത്";
window[t+"-o3"+k] = "പശുക്കൾ";
window[t+"-o4"+k] = "ആണ്";
window[t+"-o5"+k] = "ഏഴ്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "പത്തു പ്രാവുകൾ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "ten pigeon";
window[t+"-o2"+k] = "ten pigeons";
window[t+"-ans"+k] = [2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "four _____"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "peacocks";
window[t+"-o2"+k] = "peacock";
window[t+"-ans"+k] = [1];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/unit3/two-rats-and-six-dogs.mp3"; //file name
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "രണ്ട്";    
window[t+"-o2"+k] = "എലികൾ";
window[t+"-o3"+k] = "കൂടാതെ";
window[t+"-o4"+k] = "ആറ്";
window[t+"-o5"+k] = "നായ്ക്കൾ";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "മൂന്ന് കുതിരകൾ"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "three horses";
window[t+"-o2"+k] = "three horse";
window[t+"-ans"+k] = [1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "കുതിര"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Horse"; window[t+"-l1-"+k] = "/level3/horse.png"; window[t+"-m1-"+k] = "eng/unit3/horse.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Pigeon"; window[t+"-l3-"+k] = "/level3/pigeon.png"; window[t+"-m3-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o4"+k] = "Elephant"; window[t+"-l4-"+k] = "/level3/elephant.png"; window[t+"-m4-"+k] = "eng/unit3/elephant.mp3";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Pigeon"; window[t+"-m"+k] = "eng/unit3/pigeon.mp3"; //m is music
window[t+"-o1"+k] = "ആന";
window[t+"-o2"+k] = "പ്രാവ്";
window[t+"-o3"+k] = "മയിൽ";
window[t+"-o4"+k] = "എലി";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "big elephant"; window[t+"-m"+k] = "eng/unit3/big-elephant.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "വലിയ";
window[t+"-o2"+k] = "ആന";
window[t+"-o3"+k] = "അവൻ്റെ";
window[t+"-o4"+k] = "ചെറുത്";
window[t+"-o5"+k] = "എൻ്റെ";
window[t+"-o6"+k] = "തണുപ്പ്";
window[t+"-ans"+k] = [1,2];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "നായ"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "Horse"; window[t+"-l1-"+k] = "/level3/horse.png"; window[t+"-m1-"+k] = "eng/unit3/horse.mp3";
window[t+"-o2"+k] = "Peacock"; window[t+"-l2-"+k] = "/level3/peacock.png"; window[t+"-m2-"+k] = "eng/unit3/peacock.mp3";
window[t+"-o3"+k] = "Pigeon"; window[t+"-l3-"+k] = "/level3/pigeon.png"; window[t+"-m3-"+k] = "eng/unit3/pigeon.mp3";
window[t+"-o4"+k] = "Dog"; window[t+"-l4-"+k] = "/level3/dog.png"; window[t+"-m4-"+k] = "eng/unit3/dog.mp3";
window[t+"-ans"+k] = 4;

lesson3Total = k;
k=0;t='d';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "Grass"; window[t+"-m"+k] = "eng/unit3/pigeon.mp3"; //m is music
window[t+"-o1"+k] = "പുല്ല്";
window[t+"-o2"+k] = "പ്രാവ്";
window[t+"-o3"+k] = "മയിൽ";
window[t+"-o4"+k] = "എലി";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "രണ്ട്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "one"; window[t+"-l1-"+k] = "/level3/1.png"; window[t+"-m1-"+k] = "eng/unit3/1.mp3";
window[t+"-o2"+k] = "two"; window[t+"-l2-"+k] = "/level3/2.png"; window[t+"-m2-"+k] = "eng/unit3/2.mp3";
window[t+"-o3"+k] = "three"; window[t+"-l3-"+k] = "/level3/3.png"; window[t+"-m3-"+k] = "eng/unit3/3.mp3";
window[t+"-o4"+k] = "four"; window[t+"-l4-"+k] = "/level3/4.png"; window[t+"-m4-"+k] = "eng/unit3/4.mp3";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "നാല്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "one"; window[t+"-l1-"+k] = "/level3/1.png"; window[t+"-m1-"+k] = "eng/unit3/1.mp3";
window[t+"-o2"+k] = "two"; window[t+"-l2-"+k] = "/level3/2.png"; window[t+"-m2-"+k] = "eng/unit3/2.mp3";
window[t+"-o3"+k] = "three"; window[t+"-l3-"+k] = "/level3/3.png"; window[t+"-m3-"+k] = "eng/unit3/3.mp3";
window[t+"-o4"+k] = "four"; window[t+"-l4-"+k] = "/level3/4.png"; window[t+"-m4-"+k] = "eng/unit3/4.mp3";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ആറ്"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "five"; window[t+"-l1-"+k] = "/level3/5.png"; window[t+"-m1-"+k] = "eng/unit3/5.mp3";
window[t+"-o2"+k] = "six"; window[t+"-l2-"+k] = "/level3/6.png"; window[t+"-m2-"+k] = "eng/unit3/6.mp3";
window[t+"-o3"+k] = "seven"; window[t+"-l3-"+k] = "/level3/7.png"; window[t+"-m3-"+k] = "eng/unit3/7.mp3";
window[t+"-o4"+k] = "eight"; window[t+"-l4-"+k] = "/level3/8.png"; window[t+"-m4-"+k] = "eng/unit3/8.mp3";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "five six seven eight"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "അഞ്ച്";
window[t+"-o2"+k] = "ആറ്";
window[t+"-o3"+k] = "ഏഴ്";
window[t+"-o4"+k] = "എട്ട്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "nine ten"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 2; //how many options are there
window[t+"-o1"+k] = "ഒമ്പത്";
window[t+"-o2"+k] = "പത്ത്";
window[t+"-ans"+k] = [1,2];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Is your house big or small?"; window[t+"-m"+k] = "eng/unit3/is-your-house-big-or-small.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "നിങ്ങളുടെ";  
window[t+"-o2"+k] = "വീട്";
window[t+"-o3"+k] = "വലുതാണോ";
window[t+"-o4"+k] = "ചെറുതാണോ?";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My house is small"; window[t+"-m"+k] = "eng/unit3/my-house-is-small.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "എൻ്റെ";    
window[t+"-o2"+k] = "വീട്";
window[t+"-o3"+k] = "ചെറുത്";
window[t+"-o4"+k] = "ആണ്";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Is this a bird?"; window[t+"-m"+k] = "eng/unit3/is-this-a-bird.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "എന്ത്";    
window[t+"-o2"+k] = "ഇത്";
window[t+"-o3"+k] = "പക്ഷി";
window[t+"-o4"+k] = "ആണോ?";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Yes, three pigeons and seven peacocks"; window[t+"-m"+k] = "eng/unit3/yes-three-pigeons-and-seven-peacocks.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "അതെ,";
window[t+"-o2"+k] = "മൂന്ന്";
window[t+"-o3"+k] = "പ്രാവുകൾ";
window[t+"-o4"+k] = "കൂടാതെ";
window[t+"-o5"+k] = "ഏഴ്";
window[t+"-o6"+k] = "മയിലുകൾ";
window[t+"-ans"+k] = [1,2,3,4,5,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Is this tea cold or hot?"; window[t+"-m"+k] = "eng/unit3/is-this-tea-cold-or-hot.mp3"; //m is music
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o1"+k] = "ഈ";
window[t+"-o2"+k] = "ചായ";
window[t+"-o3"+k] = "തണുത്തതോ";
window[t+"-o4"+k] = "ചൂടുള്ളതോ?";
window[t+"-ans"+k] = [1,2,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "It is a hot tea"; window[t+"-m"+k] = "eng/unit3/it-is-a-hot-tea.mp3"; //m is music
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "ഇത്";        
window[t+"-o2"+k] = "ഒരു";
window[t+"-o3"+k] = "ചൂട്";
window[t+"-o4"+k] = "ചായ";
window[t+"-o5"+k] = "ആണ്";
window[t+"-ans"+k] = [1,2,3,4,5];

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "Conversation"; //title
window[t+"-msg"+k] = "Check whether you can understand the conversation or not."; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "Is your house big or small?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങളുടെ വീട് വലുതാണോ ചെറുതാണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "My house is small."; window[t+"-t"+xt+"-r"+k] = "എൻ്റെ വീട് ചെറുതാണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Is that a bird?"; window[t+"-t"+xt+"-l"+k] = "അത് ഒരു പക്ഷി ആണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Yes, three pigeons and seven peacocks."; window[t+"-t"+xt+"-r"+k] = "അതെ, മൂന്ന് പ്രാവുകളും ഏഴ് മയിലുകളും."; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Is this tea cold or hot?"; window[t+"-t"+xt+"-l"+k] = "ഈ ചായ തണുത്തതോ ചൂടുള്ളതോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "It is a hot tea."; window[t+"-t"+xt+"-r"+k] = "ഇത് ഒരു ചൂടുള്ള ചായ ആണ്."; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3';
window[t+"-len"+k]=xt;

lesson4Total = k;