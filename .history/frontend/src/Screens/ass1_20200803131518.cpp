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
    for(int x : arr){cout<<x<<" ";}
return 0;
}