#include <iostream>
#include <vector>

int main() {
  std::vector<int> even = {2, 4, 3, 6, 1, 9};

  int sum = 0;
  int product = 1;

  for (int i = 0; i < even.size(); i++) {
    if (even[i] % 2 == 0) {
      sum = sum + even[i];
    } else {
      product = product * even[i];
    }
  }

  std::cout << "Sum of even numbers is " << sum << "\n";
  std::cout << "Product of odd numbers is " << product << "\n";
}
