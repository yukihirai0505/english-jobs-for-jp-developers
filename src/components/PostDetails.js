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

const EnglishLevel = styled.p`
  margin: 0.5em 0 0;
`

const CorporateUrl = styled.p`
  margin: 1em 0 0;
`

const JobUrl = styled.p`
  display: inline-block;
  margin: 1em 1em 0 0;
`

const PostDetails = ({date, timeToRead, englishLevel, corporateUrl, jobUrls}) => {
  return (
    <Wrapper>
      <Date>📅 {date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${timeToRead} min read `}</ReadingTime>
      <EnglishLevel>
        🗽English Level:{' '}
        {new Array(englishLevel).fill(undefined).map(_ => '⭐️')}
      </EnglishLevel>
      <CorporateUrl>
        <BlankLink href={corporateUrl} text="公式サイトリンク" />
      </CorporateUrl>
      {jobUrls &&
        jobUrls.map((jobUrl, key) => (
          <JobUrl key={key}>
            <BlankLink href={jobUrl} text={`求人リンク${jobUrls.length > 1 ? key + 1: ''}`} />
          </JobUrl>
        ))}
    </Wrapper>
  )
}

export default PostDetails
