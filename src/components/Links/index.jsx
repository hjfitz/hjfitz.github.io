import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

const Links = props => (
	<div className="links">
		<ul className="links__list">
			<li className="links__list-item">
				<a
					href={`https://www.github.com/${props.data.github}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="icon-github" />
				</a>
			</li>
			<li className="links__list-item">
				<a href={`mailto:${props.data.email}`}>
					<i className="icon-mail" />
				</a>
			</li>
			<li className="links__list-item">
				<a
					href={props.data.rss}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="icon-rss" />
				</a>
			</li>
		</ul>
	</div>
)


export default Links
