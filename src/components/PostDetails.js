import React from 'react'
import styled from 'styled-components'

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

const EnglishLevel = styled.p`
  margin: 0.5em 0 0;
`

const CorporateUrl = styled.p`
  margin: 1em 0 0;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>📅 {props.date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${props.timeToRead} min read `}</ReadingTime>
      <EnglishLevel>🗽English Level: {new Array(props.englishLevel).fill(undefined).map((_) => "⭐️")}</EnglishLevel>
      <CorporateUrl>
        <a href={props.corporateUrl}>公式サイトリンク</a>
      </CorporateUrl>
    </Wrapper>
  )
}

export default PostDetails
