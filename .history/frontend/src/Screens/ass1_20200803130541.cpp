#include<bits/stdc++.h>
using namespace std;
int main(){
    int k , m, count=0;
    cin>>k; cin>>m;
    int arr[k];
    while(k--){
        cin>>arr[count];
        count++;

    }
    int result=LinearSum(k,m,arr);
    cout<<result;
}