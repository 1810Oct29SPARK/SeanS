public class Group8 {

	public static void main (String[] args) {
		
		int f0 = 0;
		int f1 = 1;
		
		Fib[] f = new Fib[10];
		f[0] = 0;
		f[1] = 1;
		
		for (i=0; i<=10; i++){
			if (i==0){
				f[i]=0;
				System.out.println(f[i]);
			} else if (i == 1) {
				f[i]=1;
				System.out.println(f[i]);
			} else {
				f[i] = f[i-1] + f[i-2];
				System.out.println(f[i]);
			}
		
	}

}
