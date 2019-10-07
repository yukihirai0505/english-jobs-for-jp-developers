import React from 'react'
import styled from 'styled-components'
import BlankLink from './BlankLink'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = ({date, timeToRead, englishLevel, corporateUrl, jobUrls}) => {
  return (
    <Wrapper>
      <Date>📅 {date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
