import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCardList = ({
  characters,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!characters.length) {
    return <h3>No Characters Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {characters &&
        characters.map((character) => (
          <div key={character._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${character.username}`}
                >
                  {character.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created on {character.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CharacterCardList;
