#include<iostream>

using namespace std;

int main(){
    float precio,IVA = 0.12,total = 0;

    cout<<"escriba el precio del producto:";
    cin>>precio;

    total =precio* IVA + precio;

    cout<<"el total es:"<<total;

    return 0;
}