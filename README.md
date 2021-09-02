# Etch-A-Sketch

This is the repo for the Etch-A-Sketch project in the Foundations course of The Odin Project

## Features

- Use the mouse to draw a picture by hovering over the spot
- Clear function to wipe clean the screen and set the grid size
- 3 color settings to choose from
    - Gray
    - Random Color
    - Shading Black (mouse over multiple times to increase shading)

## What I Learned
I used CSS Grid to format the layout of the container for drawing.  I previously did not know the CSS Grid style properties before.  Once I figured those properties out, I was able to use JavaScript to adjust the grid sizing based on the user input.

When I researched how to remove a child element in MDN, I found a code snippet that was able to efficently remove all child elements using a `while` loop that checks and removes the first child.  As long as there are elements within a parent, there will always be a first child.

Trying to get all three of the color settings working seemed difficult at first.  My initial thought was when I added the event listener, I was locked in to whatever color setting I had.  I had to remind myself that the callback function doesn't have any state.  It has no clue what it was previously.  This meant that both my random color setting and my shading black setting would work as expected.  I was half way writing another helper function before I came to the correct conclusion and just refactored my existing callback.