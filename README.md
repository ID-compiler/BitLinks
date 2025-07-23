#  BitLinks - URL Shortener App

BitLinks is a sleek and simple URL shortener built with **Next.js**. Paste your long URLs and instantly get a shortened link that’s easier to share.

##  Features

-  Clean and intuitive UI
-  Fast and server-rendered with Next.js
-  MongoDB integration (via Mongoose)
-  Realtime shortening without reloads


##  How to Use Locally

```bash
# 1. Clone the repo
git clone https://github.com/ID-compiler/BitLinks.git
cd BitLinks

# 2. Install dependencies
npm install

# 3. Create .env.local file
touch .env.local
```
## Add this in your .env.local
```
MONGO_URI=your_mongo_db_connection_string
NEXTAUTH_URL=http://localhost:3000
```
