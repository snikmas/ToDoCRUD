#include <stdio.h>

int main(){
  int num1, num2, num3, num4;
  int sum;
  float average;
  scanf("%d %d %d %d",&num1,&num2,&num3,&num4);
  sum=num1+num2+num3+num4;
  average=(num1+num2+num3+num4) / 4.0;
  printf("Sum = %i; Average = %.2f", sum, average);
  return 0;
}