public class Group8v2 {  

	public static void main(String args[])  {

	     	int n0=0,n1=1,n2,i,count=10;

  		System.out.println(" "+n0);

		System.out.println(" "+n1);//printing 0 and 1

	for(i=0;i<count;i++){	//loop starts from 2 because 0 and 1 are already printed    

 		n2=n0+n1;    

	 	System.out.println(" "+n2);    

 		n0=n1;    

 		n1=n2;    

	}

}}
