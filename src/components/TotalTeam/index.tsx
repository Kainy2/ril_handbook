import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const TotalTeam: React.FC = (props) => {
    const { countries } = useStaticQuery<{ countries: { group: { totalCount: number }[] } }>(query)

    return <span {...props}>{countries.group.reduce((sum, curr) => sum + curr.totalCount, 0)}</span>
}

const query = graphql`
    query {
        countries: allMdx(filter: { fields: { slug: { regex: "/^/team/" } } }) {
            group(field: frontmatter___city) {
                totalCount
            }
        }
    }
`

export default TotalTeam
