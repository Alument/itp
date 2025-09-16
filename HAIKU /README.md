# Haiku Homework
I started by running a CD command to enter the HAIKU folder from class. I did this by dragging the haiku folder into the terminal and I got this command `cd /Users/Taylor/Documents/GitHub/itp/HAIKU\`.				

I chose this Haiku, its called "O Snail" by Kobayashi Issa 

O snail

Climb Mount Fuji,

But slowly, slowly!

[Le poem source](https://reedsy.com/discovery/blog/haiku-poem-examples)

I then pasted the Haiku into the terminal and using the say command, tried to generate it into an aiff file. This did not work, so I realize im doing something wrong. Ok so I did it again without pasting the Haiku just as a test and it worked so now Im going to try it again with the Haiku. 

Ok so I've trouble shooted with the help of Ezra and it turns out the exclamation mark at the end of the Haiku wasn't letting the command run which is why I was getting this error: ``-bash: !": event not found``

After I got rid of the exclamation mark and ran the command, I was able to get the AIFF file. And this is what the command ended up looking like.

`say "O snail, Climb Mount Fuji,  But slowly, slowly" -o haiku.aiff
`

After running this, I got the haiku.aiff in my folder, and everything was right in the world, if only for a moment. THE END