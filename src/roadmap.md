## designing the structure of cuckoo clone in terms of react stuff
### planning steps
taken from https://reactjs.org/docs/thinking-in-react.html
[1] write down all components
[2] build a static version i.e. can use props but don't use state

? The components will only have render() methods since this is a static version of your app. 
[3] come up with the minimal set of mutable state that your app needs

### components
the cuckoo name
mode at the top of the page
circles in the body
a history log at bottom left
members list at bottom centre
sidebar on the right containing buttons with relevant setState methods?

### methods?
toggle button that says have break/back to work --> this will change state and be passed down to the mode and the circles and everything right

### props
the current mode (work/break)

### states
the values for the timers (sessions)
timer settings (start, is running, paused, resumed, reset)
the members who've joined the cuckoo
your own cuckoo name 

## css things
* don't really know how to design the random, clumped together bubbles

for later:
* don't know how to show extra history on mouse hover

## todo soon
* timer should be renamed bubbles.js
* need a different timer.js
* how about before the shareable link is created? how to model that?