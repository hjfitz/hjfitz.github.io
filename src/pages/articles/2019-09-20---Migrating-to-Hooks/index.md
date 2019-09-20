---
title: "Migrating to Hooks"
date: "2019-09-20T20:09:00.000Z"
layout: post
draft: false
path: "/posts/migrating-to-hooks/"
category: "Code"
tags:
  - "React"
  - "Web Development"
  - "Tips"
description: "How I (and why) migrated this mighty Gatsby site from Stateful Components to Functional Components"
---

A lot of Gatsby templates are outdated. They ship with old versions of React. In most cases, functional components can't be uesd. Older versions of React don't allow a Functional Component to be parent to a Stateful Component. This means ugly code! For example, a list of links might look like -
```jsx
class Links extends React.Component {
  render() {
    return (
      <div className="menu-links">
        <ul>
          {this.props.links.map(link => (
            <li className="menu-links__link"><Link to={link.href}>{link.title}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}
```

But it could look like this -
```jsx
const Links = ({links}) => (
  <div className="menu-links">
    <ul>
      {links.map(link => (
        <li className="menu-links__link"><Link to={link.href}>{link.title}</Link></li>
      ))}
    </ul>
  </div>
)
```

This is vastly more expressive. You can almost envision how the component looks - `<Links links={this.state.links} />`. 

But it can't be done on most Gatsby templates. They're outdated and the Gatsby `<Link />` is a Stateful Component! 

## The Part You're Looking For
It was really straightforward to update -
```zsh
yarn add react@latest react-dom@latest gatsby@latest
```

And that should sort you! I was expecting some incompatibilities with the various plugins that this template came with. Thankfully, the helpful people at Gatsby seem to maintain great backward compatibility. After some refactoring, the blog was ready to deploy!

I also updated my progress bar - [check that post out](/posts/react-scroll-bars#hooks)