# Taskbaki - CAPTCHA Earning Project

**Taskbaki** একটি CAPTCHA-ভিত্তিক পয়েন্ট অর্জন করার ওয়েব অ্যাপ্লিকেশন যেখানে ব্যবহারকারীরা গণিত প্রশ্নের উত্তর দিয়ে পয়েন্ট অর্জন করতে পারেন এবং নির্দিষ্ট পরিমাণ পয়েন্ট জমা হলে তারা টাকা তোলার অনুরোধ করতে পারেন।

---

## ফোল্ডার স্ট্রাকচার
Taskbaki_complete_project/ ├── frontend/ │   ├── index.html       # মূল HTML ফাইল │   ├── style.css        # স্টাইলিং │   └── script.js        # UI ও লগিক হ্যান্ডেলিং ├── backend/ │   ├── server.js        # Express server │   ├── db.js (optional) # যদি MongoDB যুক্ত হয় │   └── package.json     # Backend dependencies └── README.md            # এই ফাইল

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Storage**: In-memory (বা MongoDB যুক্ত করা যাবে ভবিষ্যতে)

---

## Key Features

- ব্যবহারকারীর রেজিস্ট্রেশন ও লগইন
- গণিতভিত্তিক CAPTCHA প্রশ্ন
- সঠিক উত্তর দিলে পয়েন্ট বৃদ্ধি
- নির্দিষ্ট পয়েন্ট অর্জনের পর টাকা তোলার অনুরোধ
- Owner Dashboard (শুধুমাত্র নির্দিষ্ট ইমেইল দিয়ে লগইন করলে)

---

## How to Run Locally

### 1. Backend Setup

```bash
cd backend
npm install
node server.js

Server will start on http://localhost:3000

2. Frontend Setup

Just open frontend/index.html in your browser.


---

Contribution

এই প্রজেক্টটি শেখার ও প্র্যাকটিস করার উদ্দেশ্যে তৈরি। ভবিষ্যতে Firebase, MongoDB ও Admin Panel যোগ করা যেতে পারে।


---

License

MIT License

---

এখন আপনি এই `README.md` ফাইলটি `Taskbaki_complete_project` মূল ফোল্ডারে `README.md` নামে রেখে GitHub-এ আপলোড করতে পারবেন।
