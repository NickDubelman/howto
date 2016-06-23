import React from 'react'

const ChapterTitle = () => (
  <div className="overlay" style={chapterTitle}>
    <h3>ChapterTitle</h3>
  </div>
)

let chapterTitle = {
  height: 25,
  position: 'absolute',
  top: 15, left: 5, right: 5,
}

export default ChapterTitle