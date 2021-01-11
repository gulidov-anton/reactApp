import React from 'react';
import css from './profile.module.css';

const Profile = () => {
    return <main className = { css.content }>
    <div>
      <img src="data:image/jpeg;base64,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" />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
    </div>
    <div>
      New posts
    </div>
    <div className = { css.posts }>
      <div className = { css.item }>
        post1
      </div>
      <div className = { css.item }>
        post2
      </div>
    </div>
  </main>
}

export default Profile;

