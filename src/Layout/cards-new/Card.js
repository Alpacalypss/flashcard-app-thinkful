import React from 'react'

export default function Card({front, handleCardFrontChange, back, handleCardBackChange}) {
  return (
    <>
        <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
                id="front"
                name="front"
                className="form-control"
                rows="3"
                onChange={handleCardFrontChange}
                value={front}
            />
        </div>
        <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea 
                id="back"
                name="back"
                className="form-control"
                rows="3"
                onChange={handleCardBackChange}
                value={back}
            />
        </div>
    </>
  )
}