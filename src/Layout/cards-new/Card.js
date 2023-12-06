import React from 'react'

export default function Card({front, handleCardFront, back, handleCardBack}) {
  return (
    <div>
        <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
                id="front"
                name="front"
                className="form-control"
                rows="3"
                onChange={handleCardFront}
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
                onChange={handleCardBack}
                value={back}
            />
        </div>
    </div>
  )
}