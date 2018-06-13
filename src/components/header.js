import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

export default class Header extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#EEDDEE',
                }}
            >
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={'/'}
                >
                    Younghoon Gim Blog
                </Link>
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={'/'}
                >
                    Programming Stuff
                </Link>
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={'/'}
                >
                    Other Stuff
                </Link>
            </div>
        )
    }
}
