import { Component, input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display: string = '';

  appendInput(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = this.safeEvaluate(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }

  safeEvaluate(expression: string): string {
    // Allow only numbers and basic math operators
    const sanitizedExpression = expression.replace(/[^0-9+\-*/.]/g, '');
    // Use Function constructor to evaluate the sanitized expression
    return new Function('return ' + sanitizedExpression)();
  }
}
