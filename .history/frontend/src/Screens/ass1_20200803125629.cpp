#include<bits/stdc++.h>
using namespace std;
int LinearSum(int k, int m,int  arr[]){
int result=0;
for(int i=0;i<k-m;i++){
    int sum=0;
                for(int j=i;j<m+i;j++){sum+=arr[j]; }
    if(sum>result) result=

}
return result;
}

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