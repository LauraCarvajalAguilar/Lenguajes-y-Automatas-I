
import java.util.*;
public class ejercicio5 {

    public static void main (String[] args){
    	
    	Scanner sc= new Scanner(System.in);
    	int n,res;
    	System.out.println("Captura el valor...:");
    	n=sc.nextInt();
    	
      	System.out.println("Resultado.." + sumar_dig(n));
    }
    
    public static int sumar_dig(int n){//INICIO METODO
    if (n == 0) {  //INICIO IF    //caso base
            return n;
                }//FIN IF
   else {//INICIO ELSE
            return sumar_dig (n / 10) + (n % 10);
        }//FIN ELSE 
                          }//FIN METODO
    
}


	