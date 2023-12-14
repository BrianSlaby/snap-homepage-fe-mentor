# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/BrianSlaby/snap-homepage-fe-mentor](https://github.com/BrianSlaby/snap-homepage-fe-mentor)
- Live Site URL: [https://precious-sprinkles-2189fd.netlify.app/](https://precious-sprinkles-2189fd.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Figuring out the structure of a project when I use React continues to be a challenge, but with this project I was very aware of my increasing ability to intuit when the path I'm going down isn't going to work.  Likewise, I find myself getting faster at switching gears and trying something new.  When I first started putting this together, I found myself writing just a few highly reusable components (like generic Button), but then my App file became a huge mess.  The Nav component existed, but it was very bare bones and didn't have much in it; it was mostly just rendering children.  My beginner's instinct was definitely to keep components very generic, but it obviously isn't practical to have all of the meat in the App file.  Obviously this was also a little contrived since it's just a homepage, and all of the links just redirect back to home.  In some ways that made it more difficult to design reusable components.  After all, most of them would only be reusable if hypothetical pages outside the scope of this project were created.

It took me a while to decide what I wanted to do for the transition between desktop and mobile layouts.  The obvious solution that I first thought of was using media queries.  However, it didn't take me long to realize that because the two layouts are so different, adjusting CSS alone wouldn't work.  The layouts would require completely different jsx structures, which means that I'd need to keep track of window width in state.  When I first started experimenting, I ended up with some inline styling in React, combined with adding classes that would get styling defined in the CSS file.  Pretty much whatever seemed more straightforward for whichever chunk of the project I was working on.  I underestimated how much style adjustments would be required though, even with the different jsx structures for each layout.  So I got rid of the inline styling which was cluttering up the jsx, and I ended up just creating a WindowSize context so I could pass the window width, the break point, and a desktop layout class to whichever components needed them.  I kept the breakpoint in a variable so that if I needed to adjust it, I would only have to change it in one place.  I used the desktop layout class to just tack onto whichever class needed different styling as a compound selector in the CSS file.  This way the desktop styling could be written write below the default styling, and I found the whole process to be much more readable than it would have been if I'd done media queries.