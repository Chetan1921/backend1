const express=require('express');
const app=express()
require('dotenv').config()
const port=4000;
const githubdata={
    
        "login": "Chetan1921",
        "id": 149550764,
        "node_id": "U_kgDOCOn2rA",
        "avatar_url": "https://avatars.githubusercontent.com/u/149550764?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Chetan1921",
        "html_url": "https://github.com/Chetan1921",
        "followers_url": "https://api.github.com/users/Chetan1921/followers",
        "following_url": "https://api.github.com/users/Chetan1921/following{/other_user}",
        "gists_url": "https://api.github.com/users/Chetan1921/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Chetan1921/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Chetan1921/subscriptions",
        "organizations_url": "https://api.github.com/users/Chetan1921/orgs",
        "repos_url": "https://api.github.com/users/Chetan1921/repos",
        "events_url": "https://api.github.com/users/Chetan1921/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Chetan1921/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 29,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2023-11-01T02:30:11Z",
        "updated_at": "2024-07-03T20:18:44Z"
      
}
app.get('/',(req,res)=>{
    res.send("hellow world")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai or code</h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.get('/twitter',(req,res)=>{
    res.send("welcome to twitter")
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`);
})