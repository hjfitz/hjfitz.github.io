import React from 'react'
import Post from '../Post'

const CategoryTemplateDetails = props => (
	<div className="content">
		<div className="content__inner">
			<div className="page">
				<h1 className="page__title">{props.pageContext.category}</h1>
				<div className="page__body">
					{props.data.allMarkdownRemark.edges.map(post => <Post data={post} key={post.node.fields.slug} />)}
				</div>
			</div>
		</div>
	</div>
)


export default CategoryTemplateDetails
