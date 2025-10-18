# Midterm Project

##Phase #1 

After sketching a few different ideas in class, I decided to go with a hamburger as it is decently simple, consists of 3 different shapes, and is delicious. 

##Phase #2

THE PATTY

The first thing I did was copy the code for the eyeball from the in class code along. 
I then changed the canvas to be 500 by 500 instead of 100 by 100. 
I replaced the pupil with an rectangle by copying code from the p5 reference page. 

I then made it brown, which Ezra helped me do using what he calls a "hexcode".
After some expirementing I realized that when adding a 5th parameter to the rectangle, I was able to adjust what looks to be the border radius, and when using the number 15 as this fifth paramter, it curved the edges of the rectangle just enough to make it look like a burger patty. 

After figuring out how to change the color of things, I changed the backround color to a nice turqoise, just for fun.

THE BUNS

I started with the bottom bun, where I copied the rectangle from the patty, deleted the 5th parameter, and change the color to be more bread-esque. I also adjusted the y value so that the bun sat just below the patty. 

For the top bun I used an ellipse shape and positioned it so that the bottom of it was hidden under the rest of the burger and it looked like a proper top bun.

TOPPINGS

For the cheese and lettuce, I used smaller rectangles and colored them accordingly. 

##Phase #3
I started by taking the function from class for the eyeball and replaced the code for the eyeball with the code for the burger. 
Then, assuming that the patty starts at (0, 0), I made it so the X and Y values for the other shapes were based around that. 

##Phase #4

At first I had no idea where to start. But I knew we needed a nested 4 loop so I started there. 
Using I for columns and J for rows I set up this line of code: `(let i = 0; i < columns; i++)` as well as one with J instead of I. 
This made it so my burgers wouldnt repeat for infinity but only the amount of rows or columns there are. 
I then designated the amount of rows and columns as well as the cell width and height (for a 5x5 grid). I placed this above the nested loop. 
To change eveything to 10x10 or 20x20 I just had to change the numbers in the let statements for columns, rows, and cell height and width. So for 5x5 the columns and rows are set to 5 each and the width and height of the burgers to 80. The same idea goes for 10 and 20. 