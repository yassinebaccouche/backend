import Post from "../Model/Post.js"
import User from "../Model/User.js"



export async function addpost(req, res) {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    if (!user) {
      return res.status(404).json({ message: 'User  found' });
    }

    const post = new Post({
      Title: req.body.Title,
      description:req.body.description,
      image:req.body.img,
      url:req.body.url,
      date: req.body.date,
      userId: req.body.userId,
    });

    const newpost = await post.save();

    return res.status(201).json({
      message: 'Post created successfully',
      post: newpost,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export async function Updatepost(req,res){

  const  { Title,date ,description,image,url} = req.body;
  
  var p = await Post.findOne({ _id: req.params.id });
  p.Title= Title;

  p.description=description;
  p.image=image;
  p.url=url;
  p.date=date;
 

  
  p.save()
  // const posts= await Post.find({});
  // res.json(...posts, p);
  
  res.status(200).json({message : "update avec succeés",p});
   
   // res.status(404).json("Not found ")
    
    
}

export async function deletepost(req,res){
      try {
        const  id=req.params.id;  
        var p = await Post.findOne({_id:id})
        if(!p)
        res.status(404).json("post not found")
        p.remove();
        res.status(200).json("post Supprime")
      } catch (error) {
        console.log(error);
      }
  
}
export async function Getpost(req,res){
  
  
    try {

      const  id=req.params.id;

      var p = await Post.findOne({_id:id})
      if(p)
      {
        res.send(p)
        res.status(200).json(p)
      }else
      res.status(404).json("user not found")
    } catch (error) {
      console.log(error);
    }

}
export async function Getp(req, res) {
  try {
    const posts = await Post.find({});
    if (posts.length > 0) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ error: "No posts found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts." });
  }
}