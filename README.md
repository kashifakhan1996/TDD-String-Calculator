# TDD-String-Calculator

# String Calculator TDD Kata (Node.js)

This is a test-driven development (TDD) solution to the **String Calculator**, as part of the **Incubyte TDD Assessment**. This project demonstrates commitment to software craftsmanship and the principles of clean, testable code.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/kashifakhan1996/TDD-String-Calculator.git
cd TDD-String-Calculator
```

2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

## 🧪 Technologies Used

- Node.js
- Jest (for testing)

## ✅ Calculator Requirements Implemented

✅ Phase 1: Simple Inputs

add("") returns 0

add("1") returns 1

add("1,2") returns 3

✅ Phase 2: Arbitrary Count

Handles any number of comma-separated values: add("1,2,3,4") → 10

✅ Phase 3: Newline as Delimiter

Supports \n as a valid delimiter: add("1\n2,3") → 6

✅ Phase 4: Custom Single Delimiter

Syntax: //[delimiter]\n[numbers]

Example: add("//;\n1;2") → 3

✅ Phase 5: Negative Numbers

Throws error: "negatives not allowed -1,-4" for input like "1,-1,2,-4"

✅ Phase 6: Ignore >1000

Input like "2,1001" → returns 2

✅ Phase 7: Multi-char Delimiters

Example: "//[***]\n1**_2_**3" → 6

✅ Phase 8: Multiple Delimiters

Example: "//[\*][%]\n1\*2%3" → 6

Also supports: "//[\*\*\*][%%]"

## 📂 Project Structure

```
TDD-String-Calculator/
├── node_modules/
├── stringCalculator.js        # Main implementation
├── stringCalculator.test.js   # Test cases
├── package.json
└── README.md
```

## 📸 Sample Test Output

```
PASS  ./stringCalculator.test.js
  ✔ returns 0 for empty string
  ✔ returns number itself if one number
  ✔ returns sum of two numbers
  ✔ handles unknown amount of numbers
  ✔ handles newline as a delimiter
  ✔ supports custom delimiter
  ✔ throws on negative numbers
```

## 🧠 Author's Notes

This Calculator was implemented using strict TDD principles:

- Write a failing test
- Make it pass with minimal code
- Refactor with confidence

Every test case represents a step in code evolution and is committed individually.
