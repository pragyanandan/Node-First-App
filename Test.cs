using System;
					
public class Program
{
	public static void Main()
	{
		long number1 = 292746687936;
		long number2 = 435746687936;
		
		
		Console.WriteLine(CheckifinAscOrder(number1);
		Console.WriteLine(CheckifinAscOrder(number2);

	}
	
	private static bool CheckifinAscOrder(long number)
	{	
		// Extract each digit into an array
		long[] digits = new long[(long)Math.Floor(Math.Log10(Math.Abs(number)) + 1)];
		for (int i = 0; i < digits.Length; i++)
		{
			digits[i] = number % 10;
			number /= 10;
		}
		
		// Order the digits
		for (int i = 0; i < digits.Length; i++)
		{
			for (int j = i + 1; j < digits.Length; j++)
			{				
				if (digits[i] > digits[j])
				{
					return false; 
				}
			}
		}
        return true;
	}
}