import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import videoReducer from "../features/video/videoSlice";
import tagReducer from "../features/tags/tagsSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideosSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
    video: videoReducer,
    relatedVideos: relatedVideoReducer,
  },
});

export default store;
