import React from 'react'
import LikeFunctionButton from './LikeFunctionButton'
import CommentFunctionButton from './CommentFunctionButton'
import ShareFunctionComponent from './ShareFunctionComponent'

function CardButtonComponent() {
  return (
    <div className="flex justify-between mt-2">
        <LikeFunctionButton></LikeFunctionButton>
        <CommentFunctionButton></CommentFunctionButton>
        <ShareFunctionComponent></ShareFunctionComponent>
  </div>
  )
}

export default CardButtonComponent