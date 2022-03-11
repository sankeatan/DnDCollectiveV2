/* import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';

<<<<<<< HEAD:client/src/pages/Profile.js
=======
// import { QUERY_USER, QUERY_ME } from '../utils/queries';

>>>>>>> c881d70853215f990b5ec9e45dd35230afbfdc3d:client/src/components/UserPage/UserPage.js
import Auth from '../utils/auth';

const UserPage = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getUserPage().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ThoughtForm />
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD:client/src/pages/Profile.js
export default Profile;
*/
=======
export default UserPage;
>>>>>>> c881d70853215f990b5ec9e45dd35230afbfdc3d:client/src/components/UserPage/UserPage.js
