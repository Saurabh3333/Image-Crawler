#include <iostream>

using namespace std;

int main()
{
    int n,s1=0,st;
    cin>>n;
    int a[n][2];

    for(int i=0;i<n;i++)
    {
        for(int j=0;j<2;j++)
            cin>>a[i][j];
    }
    int s=a[0][1];
    st=a[0][0]+a[0][1];
    for(int i=1;i<n;i++)
    {

        s=s-a[i][0]+a[i][1];
        if(s1<s)
            s1=s;

    }
    if(s1>st)
        cout<<s1;
    else cout<<st;
    
    cout << "Image crawling done";

}
