import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

const Layout = props => (
	<div className="layout">
		<Helmet defaultTitle="Bloggo by hjf" />
		{props.children}
	</div>
)
export default Layout
