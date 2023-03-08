import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";
import Loading from "../../components/ui/Loading";

export default function RelatedVideoList({ currentVideoId, tags }) {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId, limit: 5 }));
  }, [dispatch, tags, currentVideoId]);
  // decide what to rander
  let contant = null;
  if (isLoading) {
    contant = <Loading />;
  }
  if (!isLoading && isError) {
    contant = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    contant = <div className="col-span-12">No videos to show!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    contant = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {contant}
    </div>
  );
}
