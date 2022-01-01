import { MoreVert } from "@material-ui/icons";
import "./post.css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contex/AuthContext";

export default function Post({ post }) {
  const { user: currentUser } = useContext(AuthContext);

  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likehandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="posttopleft">
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                className="postimg"
              />
            </Link>
            <span className="postusername">{user.username}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="posttopright">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="posttext">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postimage" />
        </div>
        <div className="postBottom">
          <div className="bottomleft">
            <img
              src={`${PF}like.png`}
              onClick={likehandler}
              alt=""
              className="likepost"
            />
            <img
              src={`${PF}heart.png`}
              onClick={likehandler}
              alt=""
              className="likepost"
            />
            <span className="postlikecounter">{like} people like it</span>
          </div>
          <div className="bottomright">
            <span className="postcommet">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
