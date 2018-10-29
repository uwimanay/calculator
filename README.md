Activity
In calc.js, write the JavaScript code using ES6 to implement the calculator functionality. Your calculator should work as a “normal” calculator would be expected to operate, but here are the different use cases that your app needs to consider:

## Case #1. Performing an operation on two numbers


1. The page is first loaded (empty)

2. The user clicks a numbered button, e.g. “4”
=> 4 should be displayed

3. The user clicks another numbered button, e.g. “3”
=> 43 should be displayed

4. The user clicks an operator button, e.g. “+”
=> 43

5. The user clicks a numbered button, e.g. “7”
=> 7 should be displayed

6. The user clicks another numbered button, e.g. “1”
=> 71 the result should be displayed

7. The user clicks the equals button. In this case, the app performs the most recent arithmetic operation on the two most recent numbers that were input
=>114

## Other considerations:

    If the user chooses the divide operation and the result is not an integer, it should be displayed using floating point notation, e.g. “10” divided by “4” should produce “2.5”.

    If the user chooses the subtract operation and the result is negative, it should be displayed as a negative number, e.g. “5” minus “8” should produce “-3”. This includes subtracting from zero, too, of course.

    If the user attempts to divide by 0, the result should be shown as “Infinity”.

## Case #2. Continuing an operation


1. Steps 1-7 for Case #1 above
=>114

2. The user clicks an operator button, e.g. “-”
=>114

3. The user clicks a numbered button, e.g. “5”
=>5

4.The user clicks another numbered button, e.g. “2”
=>52

5. The user clicks the equals button. In this case, the app performs the arithmetic operation on the result of the previous operation and the one that was most recently entered
=> 62

Case #3. Starting a new operation

1. Steps 1-7 for Case #1 above
=>114

2. The user clicks a numbered button, e.g. “1”
=>1

3. The user clicks another numbered button, e.g. “0”
=>10

4. The user clicks an operator button, e.g. “*”
=>10

5. The user clicks a numbered button, e.g. “6”
=> 6

6. The user clicks the equals button. In this case, the app performs the arithmetic operation on the two numbers that were input, and ignores the result of the previous operation
=>60

## Case #4. Performing an operation on multiple numbers


1.The page is first loaded, or a prior operation is completed using the equals button
	
2. The user clicks a numbered button, e.g. “1”
=>1

3.The user clicks another numbered button, e.g. “3”
=> 13

4.The user clicks an operator button, e.g. “+”
=>13

5.The user clicks a numbered button, e.g. “7”
=>7

6.The user clicks an operator button, e.g. “-”. In this case, the app performs the arithmetic operation on the two numbers that were input, using the operator that was selected between entering them.
=>20

7.The user clicks another numbered button, e.g. “2”
=>2

8. The user clicks the equals button. In this case, the app performs the arithmetic operation on the result of the previous operation and the one that was most recently entered
=>18

After step 7, the user should of course be able to continue repeating steps 6 and 7 and performing (and seeing the result of) additional operations before selecting the equals button.

## Case 5: Using the clear button

During or after any of the cases above, if the user clicks the clear button, then the app should reset itself back to the state in which the page was just loaded. It should not reload the page, of course, but rather should clear the display and “forget” the results of prior inputs or operations.

## Case 6: Using the equals button

If the app is in the “reset” state – because the page has just been loaded, or because an operation was just completed, or because the user clicked the clear button – and the user enters one or more numbers and then clicks the equals button without first selecting an operator and entering another operand, the display should be the same and the equals button should be ignored. For instance, if the app is reset and the user clicks “2” and then “3” and then “=”, the display should still read “23” and that value should be used as normal for the next button click.

Likewise, if the app is in the reset state and the user enters some numbers, and then an operator, and then clicks the equals button without entering another operand, the display should be the same and the equals button should be ignored. For instance, if the app is reset and the user clicks “1” and then “5” and then “+” and then “=”, the display should still read “15” and that value and the “+” operator should be used as normal for the next button click.

However, if the user has just completed an operation using the equals button and then clicks the equals button again, the previous operation should be repeated using the result of the operation and the most recently entered operand. For instance, if the app is reset and the user enters “8” and then “+” and then “6” and then “=”, the display should read “14” as normal. If the user enters “=” again, the “+6” operation should be repeated and the display should now read “20”. If the user then enters “=” again, the “+6” operation should again be repeated and the display should read “26” and so on.

## Case 7: Selecting multiple operators

If the app is in the “reset” state and the user enters some numbers, and then an operator, and then a different operator, the first operator should be ignored and the second operator should be used in the operation. For example, if the app is reset and the user enters “6” and then “+” and then “*” and then “2” and then “=”, the “+” operator should be ignored and the “*” operator should be used, so the display should read “12”.

What about…?

You may encounter other cases that are not addressed in this document, e.g. what to do when the result of an operation exceeds the largest number that JavaScript can represent, or other sequences of clicking buttons that do not follow the ones described above. You may handle those cases in any manner you choose (or ignore them entirely!) since they will not be considered for grading in this assignment. 