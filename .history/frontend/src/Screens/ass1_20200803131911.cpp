#include<bits/stdc++.h>
using namespace std;
int main(){
    int k , m, count=0,result=0;
    int arr[k]; cin>>k; cin>>m;
    while(k--){
        cin>>arr[count];
        count++; }
    sort(arr,arr+k);
while(m--){
    result+=arr[count];
    count--;
}
    cout<<result<<
return 0;
}