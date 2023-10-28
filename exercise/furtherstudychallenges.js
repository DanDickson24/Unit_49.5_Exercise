// Browser Back/Forward using Two Stacks:
class BrowserHistory {
    constructor() {
      this.backStack = [];
      this.forwardStack = [];
      this.currentSite = null;
    }
  
    visit(site) {
      if (this.currentSite !== null) {
        this.backStack.push(this.currentSite);
        this.forwardStack = [];
      }
      this.currentSite = site;
    }
  
    back() {
      if (this.backStack.length > 0) {
        this.forwardStack.push(this.currentSite);
        this.currentSite = this.backStack.pop();
      }
    }
  
    forward() {
      if (this.forwardStack.length > 0) {
        this.backStack.push(this.currentSite);
        this.currentSite = this.forwardStack.pop();
      }
    }
  
    getCurrentSite() {
      return this.currentSite;
    }
  
    isBackEnabled() {
      return this.backStack.length > 0;
    }
  
    isForwardEnabled() {
      return this.forwardStack.length > 0;
    }
  }
  
  const browser = new BrowserHistory();
  browser.visit("Google");
  browser.visit("Yahoo");
  browser.visit("eBay");
  browser.back();
  browser.back();
  browser.forward();
  browser.visit("Apple");
  
  console.log(browser.getCurrentSite());
  console.log(browser.isBackEnabled()); 
  console.log(browser.isForwardEnabled()); 
  


//   String Reversal 
  function reverseString(input) {
    let result = '';
    for (let i = input.length - 1; i >= 0; i--) {
      result += input.charAt(i);
    }
    return result;
  }
  
  console.log(reverseString("Hello")); 


//   Balanced Brackets:
function isBalanced(input) {
    const stack = [];
    const brackets = { '{': '}', '[': ']', '(': ')' };
  
    for (let char of input) {
      if (brackets[char]) {
        stack.push(char);
      } else if (char === '}' || char === ']' || char === ')') {
        if (!stack.length || brackets[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isBalanced("{[()]}")); 
  console.log(isBalanced("{[(])}")); 
  


//   Josephus Survivor:
function findSurvivor(n, k) {
    const people = Array.from({ length: n }, (_, i) => i + 1);
    let currentIndex = 0;
  
    while (people.length > 1) {
      currentIndex = (currentIndex + k - 1) % people.length;
      people.splice(currentIndex, 1);
    }
  
    return people[0];
  }
  
  console.log(findSurvivor(10, 3)); 
  

//   Polish notation calculator
function calc(expression) {
    const tokens = expression.split(' ');
    const stack = [];
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
          default:
            throw new Error('Invalid operator: ' + token);
        }
      }
    }
  
    if (stack.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return stack.pop();
  }
  
  console.log(calc("+ 1 2"));        
  console.log(calc("* 2 + 1 2"));   
  console.log(calc("+ 9 * 2 3"));    
  console.log(calc("- 1 2")); 
  console.log(calc("- 9 * 2 3"));  
  console.log(calc("/ 6 - 4 2"));  
  