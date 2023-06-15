import React from 'react'
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import "./posts.css"

const Posts = () => {
  return (
    <div className='post-list'>
      <div className='post'>
        <div className='p_d'>
          <div className='p_inner'>
            <img className='p_p' alt='' src={"https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
            {/* <Link to={post.postedBy._id !== currentUser._id ? "/profile/" + post.postedBy._id : "/profile"}>
              <p className='p_name'>{post.postedBy.name}</p>
            </Link> */}
              <p className='p_name'>Test1</p>

          </div>
          {/* {
            post.postedBy._id === currentUser._id
            ?
            <i className='fas fa-trash' style={{float:'right', paddingTop:'16px', fontSize:'16px',paddingRight:'16px'}}
            onClick={()=>dispatch(deletePost(post._id))}
            ></i>
            :
            <i className='fas fa-ellipsis-h threedots'></i>

          }
          */}
        </div>
        <div className='p_image'>
          <img className='pp_full' src={"https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="post" />
        </div>
        <div className='reaction_icon'>
          <div className='left_i'>
            {/* {
              post.likes.includes(currentUser._id)
              ?
              <button className='reactionbtn'>
              <i className='fa fa-heart hearticon' style={{ fontSize: '22px', color:'red' }} 
              onClick={()=>dispatch(unLikePost(post._id))}
              ></i>
            </button>
            :
            <button className='reactionbtn'>
              <i className='fa fa-heart hearticon' style={{ fontSize: '22px' }} 
              onClick={()=>dispatch(likePost(post._id))}
              ></i>
            </button>
            } */}
            {/* onClick={handleComment} */}
            <button className='reactionbtn' >
              {/* <img src={"https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt='img3' /> */}
              <AiFillHeart size={"2em"}/>
            </button>
            <button className='reactionbtn'>
              {/* <img src={"https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt='img3' /> */}
              <AiOutlineComment size={"2em"}/>
            </button>
          </div>
          <div className='right_i'>
              <BsFillBookmarkPlusFill size={"2em"}/>
            {/* {
              post.saved.length > 0 && post.saved.find(save=>save.postId === post._id)
              ?
              <button className='reactionbtn' onClick={()=>dispatch(unSavePost(post))}>
              <i className='fa fa-bookmark' style={{ fontSize: '22px',color:'#12129a'}}
              ></i>
            </button>
            :
            <button className='reactionbtn' onClick={()=>dispatch(savePost(post))}>
            <i className='fa fa-bookmark' style={{ fontSize: '22px' }}></i>
            </button>

            } */}
          
          </div>
        </div>

        {/* <h6 className='numlikes'>{post.likes.length} likes</h6>
        <span className='posttitle'>{post.title}</span>&nbsp;
        <span className='postbody'>{post.body}</span> */}

        <h6 className='numlikes'>5 likes</h6>
        <span className='posttitle'>Test</span>&nbsp;
        <span className='postbody'>Desc</span>


        <br />
        {/* onClick={handleComment} */}
        <button type="button" className='btn viewcommentbtn' >
          View all 4 comments</button>
        <div style={{ overflowY: "scroll", maxHeight: '85px' }}>

          {/* {
            showComment && post.comments.length >0 
            ?
            post.comments.map((record,index)=>{
              return(
                <div style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                <h6>
                  <Link to='' className='comment'>
                    <img src={record.postedBy.pic} alt="" className='commentview' />&nbsp;
                    <span style={{ fontWeight: '600', fontSize:'12px' }}>{record.postedBy.name}</span>
                  </Link>
                  &nbsp;
                 {record.text}
                </h6>
                {
                  record.postedBy._id === currentUser._id
                  ?
                  <i className='fa fa-times' aria-hidden="true" 
                  style={{paddingTop:'6px', fontSize:'16px', paddingRight:'16px',cursor:'pointer'}}
                  onClick={()=>removeComment(record,post._id)}
                  ></i>
                  :
                  null
                }
              </div>
              )
            })
            :
            null
          }
          */}
        </div>
        {/* <p className='postdate'>
          {timeSince(new Date())} Ago
        </p> */}
        <div className='comment_section'>
          <div className='input_box'>
            {/* <img src={"https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt='' /> */}
            <input type="text" className='input_c'
              // placeholder='Add a comment...' value={comment} onChange={(e)=>setComment(e.target.value)} />
              placeholder='Add a comment...' />

          </div>
          <div className='c_text'>
            {/* onClick={()=>makeComment(comment, post._id)} */}
            <button >Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts