#include <iostream>
using namespace std;

void makeTwoEq(string& str1, string& str2){
    while (str1.size() != str2.size()) {
        if(str1.size() > str2.size()){
            str2 = "0" + str2;
        } else {
            str1 = "0" + str1;
        }
    }
}

bool compairNumber(string str1, string str2, int position){
    if(str1[position] > str2[position]){
        return true;
    } else if (str1[position] < str2[position]){
        return false;
    } else {
        return compairNumber(str1, str2, position + 1);
    }
    
}

int main(int argc, const char * argv[]) {
    string str1 = "00123";
    string str2 = "2023";
    makeTwoEq(str1, str2);
    cout <<  boolalpha << compairNumber(str1, str2, 0) << endl;
    return 0;
}
