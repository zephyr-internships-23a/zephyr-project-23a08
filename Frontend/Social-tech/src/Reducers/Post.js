// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {};

// export const likeReducer = createReducer(initialState, {
//   likeRequest: (state) => {
//     state.loading = true;
//   },
//   likeSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   likeFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   addCommentRequest: (state) => {
//     state.loading = true;
//   },
//   addCommentSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   addCommentFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   deleteCommentRequest: (state) => {
//     state.loading = true;
//   },
//   deleteCommentSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   deleteCommentFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   newPostRequest: (state) => {
//     state.loading = true;
//   },
//   newPostSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   newPostFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   updateCaptionRequest: (state) => {
//     state.loading = true;
//   },
//   updateCaptionSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   updateCaptionFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   deletePostRequest: (state) => {
//     state.loading = true;
//   },
//   deletePostSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   deletePostFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   updateProfileRequest: (state) => {
//     state.loading = true;
//   },
//   updateProfileSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   updateProfileFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   updatePasswordRequest: (state) => {
//     state.loading = true;
//   },
//   updatePasswordSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   updatePasswordFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   deleteProfileRequest: (state) => {
//     state.loading = true;
//   },
//   deleteProfileSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   deleteProfileFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   forgotPasswordRequest: (state) => {
//     state.loading = true;
//   },
//   forgotPasswordSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   forgotPasswordFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   resetPasswordRequest: (state) => {
//     state.loading = true;
//   },
//   resetPasswordSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   resetPasswordFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   followUserRequest: (state) => {
//     state.loading = true;
//   },
//   followUserSuccess: (state, action) => {
//     state.loading = false;
//     state.message = action.payload;
//   },
//   followUserFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
//   clearMessage: (state) => {
//     state.message = null;
//   },
// });

// export const myPostsReducer = createReducer(initialState, {
//   myPostsRequest: (state) => {
//     state.loading = true;
//   },
//   myPostsSuccess: (state, action) => {
//     state.loading = false;
//     state.posts = action.payload;
//   },
//   myPostsFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

// export const userPostsReducer = createReducer(initialState, {
//   userPostsRequest: (state) => {
//     state.loading = true;
//   },
//   userPostsSuccess: (state, action) => {
//     state.loading = false;
//     state.posts = action.payload;
//   },
//   userPostsFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });
import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const likeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('likeRequest', (state) => {
      state.loading = true;
    })
    .addCase('likeSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('likeFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('addCommentRequest', (state) => {
      state.loading = true;
    })
    .addCase('addCommentSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addCommentFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deleteCommentRequest', (state) => {
      state.loading = true;
    })
    .addCase('deleteCommentSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteCommentFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('newPostRequest', (state) => {
      state.loading = true;
    })
    .addCase('newPostSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('newPostFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updateCaptionRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateCaptionSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateCaptionFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deletePostRequest', (state) => {
      state.loading = true;
    })
    .addCase('deletePostSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deletePostFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updateProfileRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateProfileSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateProfileFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updatePasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('updatePasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updatePasswordFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deleteProfileRequest', (state) => {
      state.loading = true;
    })
    .addCase('deleteProfileSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteProfileFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('forgotPasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('forgotPasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('forgotPasswordFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('resetPasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('resetPasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('resetPasswordFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('followUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('followUserSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('followUserFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    })
    .addCase('clearMessage', (state) => {
      state.message = null;
    });
});

export const myPostsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('myPostsRequest', (state) => {
      state.loading = true;
    })
    .addCase('myPostsSuccess', (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase('myPostsFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});

export const userPostsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('userPostsRequest', (state) => {
      state.loading = true;
    })
    .addCase('userPostsSuccess', (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase('userPostsFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
