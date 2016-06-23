import React from 'react'

const ChapterInformation = () => (
  <div className="overlay" style={chapterInformation}>
    <h3>ChapterInformation</h3>
  </div>
)

let chapterInformation = {
  position: 'absolute',
  top: 90, left: 5, right: 5,
}

export default ChapterInformation