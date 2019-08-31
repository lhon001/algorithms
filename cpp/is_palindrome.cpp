#include <iostream>

std::string is_palindrome(std::string text) {
  for (int i=1; i<=text.length(); i++) {
    if (text[i - 1] != text[text.length() - i]) {
      return "false";
    }
  }
  return "true";
}

int main() {
  std::cout << is_palindrome("madam");
}
