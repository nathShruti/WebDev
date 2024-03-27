#include <iostream>
#include <string.h>
using namespace std;
 
int main()
{
        //Initializing variable.
	char str[30];
	int i,length=0;
	//Accepting input.
	cout<<"Enter the string:";
	gets(str);
	//Initializing for loop.
	for(i=0;str[i]!='\0';++i)
	{
	length++;//Counting the length.
	}
	
	cout<<"Length of the string is:"<<length<<endl;
 
	return 0;
}

// #include <iostream>
// using namespace std;
// // C++ program to find length of a string using pointers

// int string_length(char* p) {
//     int count = 0;
//     while (*p != '\0') {
//         count++;
//         p++;
//     }
//     return count;
// }

// int main() {
//     char str[50];
//     int length;
//     cout << "Enter any string : ";
//     cin >> str;
//     length = string_length(str);
//     cout << "The length of the given string : " << length;
//     cout << endl;
//     return 0;
// }