#include <iostream>

int main() {
  int year = 0;

  std::cout << "Please enter a year\n";
  std::cin >> year;

  if ((year < 1000 ) || (year > 9999)) {
    std::cout << "Must be a 4 digit year\n";
  }

  if (((year % 4) == 0) || ((year % 400) == 0)) {
    std::cout << year << " is a leap year\n";
  }

  if (((year % 100) == 0) && ((year % 400) != 0)) {
      std::cout << year << " is not a leap year\n";
  }
}
