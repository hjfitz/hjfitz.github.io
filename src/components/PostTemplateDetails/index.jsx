import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'
import format from 'date-fns/format'
import './style.scss'

function getScrollPerc() {
	const winScroll = document.body.scrollTop || document.documentElement.scrollTop
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
	const scrolled = (winScroll / height) * 100
	return `${scrolled}%`
}

function PostTemplateDetails(props) {
	const [scrollPerc, setScrollPerc] = useState('0%')
	const setScroll = () => setScrollPerc(getScrollPerc())
	useEffect(() => {
		setScroll()
		window.addEventListener('scroll', setScroll)
		return () => window.removeEventListener('scroll', setScroll)
	})

	const post = props.data.markdownRemark
	const tags = post.fields.tagSlugs

	const homeBlock = (
		<div>
			<Link className="post-single__home-button" to="/">
				Back home
			</Link>
		</div>
	)

	const tagsBlock = (
		<div className="post-single__tags">
			<ul className="post-single__tags-list">
				{tags &&
					tags.map((tag, i) => (
						<li className="post-single__tags-list-item" key={tag}>
							<Link to={tag} className="post-single__tags-list-item-link">
								{post.frontmatter.tags[i]}
							</Link>
						</li>
					))}
			</ul>
		</div>
	)

	return (
		<div>
			<div className="post-progress" style={{width: scrollPerc}} />
			{homeBlock}
			<div className="post-single">
				<div className="post-single__inner">
					<h1 className="post-single__title">{post.frontmatter.title}</h1>
					<div
						className="post-single__body"
						/* eslint-disable-next-line react/no-danger */
						dangerouslySetInnerHTML={{__html: post.html}}
					/>
					<div className="post-single__date">
						<em>
							Published {format(new Date(post.frontmatter.date), 'do MMM yyyy')}
						</em>
					</div>
				</div>
				<div className="post-single__footer">
					{tagsBlock}
					<hr />
				</div>
			</div>
		</div>
	)
}

export default PostTemplateDetails
