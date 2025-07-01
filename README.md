# RatioGPT 🔥

Ever wondered if your hot take is about to get you flamed?

**RatioGPT** is a GPT-powered social media analyzer. Paste in your take, and it’ll return:

- 🔥 **Ratio Risk** – How bad is this gonna go for you?
- 🚩 **Red Flags** – Why people might come for your neck.
- 🧢 **Sample Reply** – A hater’s best shot.
- 🧼 **Suggested Fix** – A way to say it better (and survive the comments).

Try typing:  
> *"Steph Curry is the greatest player in NBA history and it’s not close."*

Then watch it calculate how hard you’re about to get dunked on.

---

## 🛠 Tech Stack

- **Next.js 15**
- **OpenAI API (GPT-4)**
- **Local .env for API key**
- **Custom endpoint parsing GPT replies into structured outputs**

---

🚀 Run It Locally
bash
Copy
Edit
git clone https://github.com/zrob1122/RatioGPT.git
cd RatioGPT
npm install
Create a file named .env.local in the root directory.

Add your OpenAI API key to it like this:

ini
Copy
Edit
OPENAI_API_KEY=your-openai-key-here
Start the development server:

bash
Copy
Edit
npm run dev
Then visit http://localhost:3000 in your browser.

🤓 Why I Built This
Honestly? To build something fun that actually calls an API, handles errors, and returns structured, formatted results, without looking like a tutorial. I wanted something:

Funny enough to share

Clean enough to deploy

Real enough to demo in interviews

Hiring me won’t make your product go viral.
But I can build the thing that analyzes what does.

🧠 Future Ideas
Add image/PDF export of the results

Live public feed of top user-submitted takes

Slack/Twitter bot integration

Burn risk meter (for especially cursed takes)

✌️ Made by Zachary Robertson
GitHub | zrob1122@gmail.com 9hint, hint, you're here)
