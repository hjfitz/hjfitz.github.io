import React from 'react'
import {graphql} from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

function NotFoundRoute(props) {
	return (
		<Layout>
			<div>
				<Sidebar {...props} />
				<div className="content">
					<div className="content__inner">
						<div className="page">
							<h1 className="page__title">Fowah oh Fowah!</h1>
							<div className="page__body">
								<p>OOPSIE WOOPSIE!!
                  Uwu We make a fucky wucky!!
                  A wittle fucko boingo!
                  The code monkeys at our headquarters are working VEWY HAWD to fix this!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}


export default NotFoundRoute

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          github
        }
      }
    }
  }
`
