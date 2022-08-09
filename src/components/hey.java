public class hey{

public static void main(String [] args)
{

 int num=1551;
 int ans=0;
 int x=num;

 while(num>0)
 {

    ans=ans*10+(num%10);
    num=num/10;
 }
 if(x==num)
{
    System.out.println("It is a pallindrome function")
}
}

}