---
layout: post
title: "FOR REFERENCE"
categories: misc
---
This is an exemplary block of text that should represent the text of a blog post. This could potentially be the opening paragraph to a very extensive, comprehensive, well-written post about some random thing that I'm particularly interested in at the time of writing.

This issue is that I have nothing to write of at the moment--writer's block, one could say. That's mostly due to the fact that I'm more concerned about getting the format of this blog done rather than writing a good post.

<br>
{% highlight python %}
from turtle import Turtle, Screen
import random
import time

SIZE = 20

class Snake:
    def __init__(self):
        self.headposition = [SIZE, 0]  # keeps track of where it needs to go next
        self.body = [Square(-SIZE, 0), Square(0, 0), Square(SIZE, 0)]  # body is a list of squares
        self.nextX = 1  # tells the snake which way it's going next
        self.nextY = 0
        self.crashed = False  # I'll use this when I get around to collision detection
        self.nextposition = [self.headposition[0] + SIZE * self.nextX, self.headposition[1] + SIZE * self.nextY]
        # prepares the next location to add to the snake

    def moveOneStep(self):
        if Square(self.nextposition[0], self.nextposition[1]) not in self.body: 
            # attempt (unsuccessful) at collision detection
            self.body.append(Square(self.nextposition[0], self.nextposition[1])) 
            # moves the snake head to the next spot, deleting the tail
            del self.body[0]
            self.headposition[0], self.headposition[1] = self.body[-1].x, self.body[-1].y 
            # resets the head and nextposition
            self.nextposition = [self.headposition[0] + SIZE * self.nextX, self.headposition[1] + SIZE * self.nextY]
        else:
            self.crashed = True  # more unsuccessful collision detection

{% endhighlight %}

## Attaching an Image

That was some code, but how about now, take a look at this image of mister joj:

![Joji's Album: BALLADS 1](/assets/img/BALLADS.jpg)

<br>
Or this to center it:

{: .center}
![Joji's Album: BALLADS 1](/assets/img/BALLADS.jpg)

Or this to scale it:
<br>

{: .center}
<img src="/assets/img/BALLADS.jpg" width="100" height="100" />