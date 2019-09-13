---
title: "React Progress Bars"
date: "2019-09-13T18:57:00.000Z"
layout: post
draft: false
path: "/posts/react-scroll-bars/"
category: "Code"
tags:
  - "React"
  - "Web Development"
  - "Tips"
description: "How to implement a functional progress bar in any React/Preact website - like this one here!"
---

Progress bars make a blog look cooler. More importantly, it lets the reader know that they're almost finished with the article, which if good, if you're overstimulated.

They're easy to add, I've added one to [lumen](https://github.com/alxshelepenok/gatsby-starter-lumen), the template that this blog is based on. 

First, add the code to make it work. You're probably looking for this -

```jsx
class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {progress: '0%'}
    this.setScroll = this.setScroll.bind(this)
  }

  componentDidMount() {
    this.setScroll()
    window.addEventListener('scroll', this.setScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setScroll)
  }

  setScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    const scrollPerc = `${scrolled}%`

    this.setState({ scrollPerc })
  }
}
```

Here, we set an initial state - scrolled 0%. We also add an event listener to update the state on scroll. The magic happens within `setScroll()` -- we calculate the scroll position and the height of the window. Height it calculated as `scrollHeight - clientHeight` so that the bar starts at 0, and when we hit the bottom of the page, the bar hits 100%.

Then, we sprinkle in a bit of JSX -
```jsx
<div className="post-progress" style={{width: this.state.scrollPerc}}
```

And a bit of styling to boot -
```css
.post-progress {
    position: fixed;
    height: 3px;
    top: 0;
    left: 0;
    background: $color-primary;
}
```

By updating state on each scroll, the component re-renders and `div.post-progress` gets wider (or thinner) based on the scroll, looking like a scrollbar. 

The code examples are used ad verbatim in this blog - give them a go!