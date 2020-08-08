#include<bits/stdc++.h>
using namespace std;
int main(){
    int k , m, count=0,result;
    cin>>k; cin>>m;
    int arr[k];
    while(k--){
        cin>>arr[count];
        count++;

    }
    sort(arr,arr+m);
    while(m--){
        result+=arr[count];
        count--;
    }
    cout<<result<<endl;
re
}